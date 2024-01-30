import { basename, extname } from 'node:path';
import { readFile } from 'node:fs/promises';
import { FSWatcher, watch } from 'chokidar';
import { glob } from 'glob';

import PathError from '../../Util/PathError';
import Generator from '../../Generator/Generator';
import Analyzer from '../../Analyzer/Analyzer';
import Compiler from '../../Compiler/Compiler';
import VitePluginOptions from './VitePluginOptions';
import { DictionaryType } from '../../Type/DictionaryType';
import { VitePluginOptionsType } from '../../Type/VitePluginOptionsType';

function filename( path: string ): string {
    path = basename( path );
    return path.substring( 0, path.length - extname( path ).length );
}

function flatten( items: object, tail: string[] = [] ): DictionaryType {
    const result: DictionaryType = {};
    for ( const [ key, value ] of Object.entries( items ) ) {
        if ( 'object' === typeof value ) {
            Object.assign( result, flatten( value, tail.concat( key ) ) );
        } else {
            result[ tail.concat( key ).join( '.' ) ] = value;
        }
    }

    return result;
}

function createWatcher( pattern: string | string[] ): FSWatcher {
    return watch( pattern, {
        ignoreInitial: true, // initial add events are not firing on windows
        awaitWriteFinish: { stabilityThreshold: 500 },
    } );
}

function createDumper( generator: Generator, options: VitePluginOptions ): () => Promise<void> {
    let timeout: any = null;

    return () => new Promise( resolve => {
        clearTimeout( timeout );
        timeout = setTimeout( () => Promise.all( [
            options.output.compiled.handler( options.output.compiled.path, generator ),
            options.output.missing?.handler( options.output.missing.path, generator ) ?? Promise.resolve(),
            options.output.unused?.handler( options.output.unused.path, generator ) ?? Promise.resolve(),
        ] ).then( () => resolve() ), 500 );
    } );
}

function createDictionaryLoader(
    generator: Generator,
    options: VitePluginOptions,
    dump: () => Promise<void>,
): ( path: string ) => Promise<void> {
    return async ( path: string ): Promise<void> => {
        const dictionary = await options.dictionary.handler( path );
        const map = ( v: [ string, DictionaryType ] ) => [ v[ 0 ], flatten( v[ 1 ] ) ];

        generator.mergeTranslations( Object.fromEntries( Object.entries( dictionary ).map( map ) ) );
        return dump();
    };
}

function createDictionaryRemover( generator: Generator, dump: () => Promise<void> ) {
    return async ( path: string ): Promise<void> => {
        generator.removeTranslations( filename( path ) );
        return dump();
    };
}

function createInputLoader( generator: Generator, dump: () => Promise<void> ): ( path: string ) => Promise<void> {
    return async ( path: string ): Promise<void> => {
        generator.parse( await readFile( path, 'utf8' ), path );
        return dump();
    };
}

function createInputRemover( generator: Generator, dump: () => Promise<void> ) {
    return async ( path: string ): Promise<void> => {
        generator.parse( '', path );
        return dump();
    };
}

function createMultiLoader( load: ( path: string ) => Promise<void> ): ( paths: string[] ) => Promise<void[]> {
    return async ( paths: string[] ): Promise<void[]> => Promise.all( paths.map( load ) );
}

export default function VitePlugin( options: VitePluginOptionsType ) {
    const ops: VitePluginOptions = PathError.wrap( 'options', () => new VitePluginOptions( options ) );

    const loggerOptions = {
        quiet: ops.quiet,
        verbose: ops.verbose,
    };

    const generator = new Generator( {
        analyzer: new Analyzer( {
            names: ops.input.keywords,
            keyFormatter: ops.input.keyFormatter,
            logger: loggerOptions,
        } ),
        compiler: new Compiler( {
            logger: loggerOptions,
        } ),
        logger: loggerOptions,
    } );

    const dump = createDumper( generator, ops );

    const loadDictionary = createDictionaryLoader( generator, ops, dump );
    const loadDictionaries = createMultiLoader( loadDictionary );
    const removeDictionary = createDictionaryRemover( generator, dump );

    const loadInput = createInputLoader( generator, dump );
    const loadInputs = createMultiLoader( loadInput );
    const removeInput = createInputRemover( generator, dump );

    const inputWatcher = createWatcher( ops.input.pattern );
    const dictionaryWatcher = createWatcher( ops.dictionary.pattern );

    return {
        name: 'vite-plugin-transax',

        buildStart() {
            dictionaryWatcher.on( 'add', loadDictionary );
            dictionaryWatcher.on( 'change', loadDictionary );
            dictionaryWatcher.on( 'unlink', removeDictionary );

            inputWatcher.on( 'add', loadInput );
            inputWatcher.on( 'change', loadInput );
            inputWatcher.on( 'unlink', removeInput );

            glob( ops.dictionary.pattern ).then( loadDictionaries );
            glob( ops.input.pattern ).then( loadInputs );
        },

        closeBundle() {
            return Promise.all( [ inputWatcher.close(), dictionaryWatcher.close() ] );
        },
    };
}
