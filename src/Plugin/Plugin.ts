import { basename, extname } from 'node:path';
import { readFile } from 'node:fs/promises';
import { FSWatcher, watch } from 'chokidar';
import { glob } from 'glob';

import PathError from '../Util/PathError';
import Generator from '../Generator/Generator';
import Analyzer from '../Analyzer/Analyzer';
import Compiler from '../Compiler/Compiler';
import PluginOptions from './PluginOptions';
import { DictionaryType } from '../Type/DictionaryType';
import { PluginOptionsType } from '../Type/PluginOptionsType';

export default class Plugin {

    private timeout: any = null;

    private readonly options: PluginOptions;
    private readonly generator: Generator;

    private filename( path: string ): string {
        path = basename( path );
        return path.substring( 0, path.length - extname( path ).length );
    }

    private flatten( items: object, tail: string[] = [] ): DictionaryType {
        const result: DictionaryType = {};
        for ( const [ key, value ] of Object.entries( items ) ) {
            if ( 'object' === typeof value ) {
                Object.assign( result, this.flatten( value, tail.concat( key ) ) );
            } else {
                result[ tail.concat( key ).join( '.' ) ] = value;
            }
        }

        return result;
    }

    private createWatcher( pattern: string | string[] ): FSWatcher {
        return watch( pattern, {
            ignoreInitial: true, // initial add events are not firing on windows
            awaitWriteFinish: { stabilityThreshold: 500 },
        } );
    }

    constructor( options: PluginOptionsType ) {
        this.options = PathError.wrap( 'options', () => new PluginOptions( options ) );

        const loggerOptions = {
            quiet: this.options.quiet,
            verbose: this.options.verbose,
        };

        this.generator = new Generator( {
            analyzer: new Analyzer( {
                names: this.options.input.keywords,
                keyFormatter: this.options.input.keyFormatter,
                logger: loggerOptions,
            } ),
            compiler: new Compiler( {
                logger: loggerOptions,
            } ),
            logger: loggerOptions,
        } );
    }

    createDictionaryWatcher(): FSWatcher {
        return this.createWatcher( this.options.dictionary.pattern );
    }

    createInputWatcher(): FSWatcher {
        return this.createWatcher( this.options.input.pattern );
    }

    loadDictionaries(): void {
        glob( this.options.dictionary.pattern ).then( paths => paths.forEach( this.loadDictionary.bind( this ) ) );
    }

    async loadDictionary( path: string ): Promise<void> {
        const dictionary = await this.options.dictionary.handler( path );
        const map = ( v: [ string, DictionaryType ] ) => [ v[ 0 ], this.flatten( v[ 1 ] ) ];

        this.generator.mergeTranslations( Object.fromEntries( Object.entries( dictionary ).map( map ) ) );
        this.dump();
    }

    removeDictionary( path: string ): void {
        this.generator.removeTranslations( this.filename( path ) );
        this.dump();
    }

    loadInputs(): void {
        glob( this.options.input.pattern ).then( paths => paths.forEach( this.loadInput.bind( this ) ) );
    }

    async loadInput( path: string ): Promise<void> {
        this.generator.parse( await readFile( path, 'utf8' ), path );
        this.dump();
    }

    removeInput( path: string ): void {
        this.generator.parse( '', path );
        this.dump();
    }

    dump(): void {
        const { compiled, missing, unused } = this.options.output;

        clearTimeout( this.timeout );
        this.timeout = setTimeout( async (): Promise<void> => {
            compiled.handler( compiled.path, this.generator );
            missing?.handler( missing.path, this.generator );
            unused?.handler( unused.path, this.generator );
        }, 500 );
    }

}
