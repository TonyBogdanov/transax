import { basename, extname } from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import { watch } from 'chokidar';
import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';

import Generator from '../../Generator/Generator';
import Analyzer from '../../Analyzer/Analyzer';
import { VitePluginOptions } from './VitePluginOptions';
import { Catalog } from '../../Type/Catalog';
import { Dictionary } from '../../Type/Dictionary';

function filename( path: string ): string {
    path = basename( path );
    return path.substring( 0, path.length - extname( path ).length );
}

function flatten( items: object, tail: string[] = [] ): Record<string, string> {
    const result: Record<string, string> = {};
    for ( const [ key, value ] of Object.entries( items ) ) {
        if ( 'object' === typeof value ) {
            Object.assign( result, flatten( value, tail.concat( key ) ) );
        } else {
            result[ tail.concat( key ).join( '.' ) ] = value;
        }
    }

    return result;
}

function configureDictionaryPattern( options: VitePluginOptions ): string[] {
    let value = options?.dictionary?.pattern;
    if ( 'string' === typeof value ) {
        value = [ value ];
    }

    if ( !Array.isArray( value ) || 0 === value.length ) {
        throw new Error( 'Invalid value for: dictionary.pattern.' );
    }

    return value;
}

function configureDictionaryHandler( options: VitePluginOptions ): ( path: string ) => Catalog | Promise<Catalog> {
    let value = options?.dictionary?.handler;
    switch ( value ) {
        case 'json':
            value = async path => ( { [filename( path )]: JSON.parse( await readFile( path, 'utf8' ) ) } );
            break;

        case 'yaml':
            value = async path => ( { [filename( path )]: parseYaml( await readFile( path, 'utf8' ) ) } );
            break;
    }

    if ( null !== value && 'object' === typeof value ) {
        value = ( v => () => v )( value );
    }

    if ( 'function' !== typeof value ) {
        throw new Error( 'Invalid value for: dictionary.handler.' );
    }

    return value;
}

function configureInputPattern( options: VitePluginOptions ): string[] {
    let value = options?.input?.pattern;
    if ( 'string' === typeof value ) {
        value = [ value ];
    }

    if ( !Array.isArray( value ) || 0 === value.length ) {
        throw new Error( 'Invalid value for: input.pattern.' );
    }

    return value;
}

function configureInputKeyword( options: VitePluginOptions ): string[] {
    let value = options?.input?.keyword;
    if ( 'string' === typeof value ) {
        value = [ value ];
    }

    if ( !Array.isArray( value ) || 0 === value.length ) {
        throw new Error( 'Invalid value for: input.keyword.' );
    }

    return value;
}

function configureOutputCompiledPath( options: VitePluginOptions ): string {
    let value = options?.output?.compiled?.path;
    if ( 'string' !== typeof value ) {
        throw new Error( 'Invalid value for: output.compiled.path.' );
    }

    return value;
}

function configureOutputCompiledIncludeMeta( options: VitePluginOptions ): boolean {
    let value = options?.output?.compiled?.includeMeta ?? false;
    if ( 'boolean' !== typeof value ) {
        throw new Error( 'Invalid value for: output.compiled.includeMeta.' );
    }

    return value;
}

function configureOutputCompiledHandler(
    options: VitePluginOptions,
    path: string,
    includeMeta: boolean,
): ( path: string, generator: Generator ) => Promise<void> | void {
    let value = options?.output?.compiled?.handler;
    if ( !value ) {
        value = extname( path ).substring( 1 ).toLocaleLowerCase();
    }

    switch ( value ) {
        case 'esm':
            value = ( path: string, generator: Generator ) => writeFile( path,
                generator.getCompiledTranslationsDumpAsESMExport( includeMeta ) );
            break;

        case 'cjs':
            value = ( path: string, generator: Generator ) => writeFile( path,
                generator.getCompiledTranslationsDumpAsCJSExport( includeMeta ) );
            break;
    }

    if ( 'function' !== typeof value ) {
        throw new Error( 'Invalid value for: output.compiled.handler.' );
    }

    return value;
}

function configureOutputMissingPath( options: VitePluginOptions ): string {
    let value = options?.output?.missing?.path;
    if ( 'string' !== typeof value ) {
        throw new Error( 'Invalid value for: output.missing.path.' );
    }

    return value;
}

function configureOutputMissingHandler(
    options: VitePluginOptions,
    path: string,
): ( path: string, generator: Generator ) => Promise<void> | void {
    let value = options?.output?.missing?.handler;
    if ( !value ) {
        value = extname( path ).substring( 1 ).toLocaleLowerCase();
    }

    switch ( value ) {
        case 'json':
            value = ( path: string, generator: Generator ) =>
                writeFile( path, JSON.stringify( generator.getMissingTranslationKeys(), null, 2 ) );
            break;

        case 'yml':
        case 'yaml':
            value = ( path: string, generator: Generator ) =>
                writeFile( path, stringifyYaml( generator.getMissingTranslationKeys() ) );
            break;
    }

    if ( 'function' !== typeof value ) {
        throw new Error( 'Invalid value for: output.missing.handler.' );
    }

    return value;
}

function configureOutputUnusedPath( options: VitePluginOptions ): string {
    let value = options?.output?.unused?.path;
    if ( 'string' !== typeof value ) {
        throw new Error( 'Invalid value for: output.unused.path.' );
    }

    return value;
}

function configureOutputUnusedHandler(
    options: VitePluginOptions,
    path: string,
): ( path: string, generator: Generator ) => Promise<void> | void {
    let value = options?.output?.unused?.handler;
    if ( !value ) {
        value = extname( path ).substring( 1 ).toLocaleLowerCase();
    }

    switch ( value ) {
        case 'json':
            value = ( path: string, generator: Generator ) =>
                writeFile( path, JSON.stringify( generator.getUnusedTranslationKeys(), null, 2 ) );
            break;

        case 'yml':
        case 'yaml':
            value = ( path: string, generator: Generator ) =>
                writeFile( path, stringifyYaml( generator.getUnusedTranslationKeys() ) );
            break;
    }

    if ( 'function' !== typeof value ) {
        throw new Error( 'Invalid value for: output.unused.handler.' );
    }

    return value;
}

export default function VitePlugin( options: VitePluginOptions ) {
    const
        dictionaryPattern = configureDictionaryPattern( options ),
        dictionaryHandler = configureDictionaryHandler( options ),
        inputPattern = configureInputPattern( options ),
        inputKeyword = configureInputKeyword( options ),
        outputCompiledPath = configureOutputCompiledPath( options ),
        outputCompiledIncludeMeta = configureOutputCompiledIncludeMeta( options ),
        outputCompiledHandler = configureOutputCompiledHandler( options, outputCompiledPath, outputCompiledIncludeMeta ),
        outputMissingPath = configureOutputMissingPath( options ),
        outputMissingHandler = configureOutputMissingHandler( options, outputMissingPath ),
        outputUnusedPath = configureOutputUnusedPath( options ),
        outputUnusedHandler = configureOutputUnusedHandler( options, outputUnusedPath );

    const inputWatcher = watch( inputPattern, { persistent: true } );
    const dictionaryWatcher = watch( dictionaryPattern, { persistent: true } );

    let isDirty = false,
        isDumping = false;

    const generator = new Generator( {
        analyzer: new Analyzer( {
            names: inputKeyword,
//         keyFormatter: ( key, token ) => {
//             const path = relative( resolve( __dirname, '../..' ), token.source ?? '' );
//             let prefix = path.substring( 0, path.length - extname( path ).length )
//                 .replace( /\//g, '.' ).replace( /-/g, '_' );
//
//             // translation keys in scripts/router.js should use the vue/app.vue context instead
//             if ( 'src.scripts.router' === prefix ) {
//                 prefix = 'src.vue.app';
//             }
//
//             return prefix + '.' + key;
//         },
        } ),
    } );

    const dump = async (): Promise<void> => {
        if ( isDumping ) {
            isDirty = true;
            return;
        }

        isDumping = true;
        console.log( '[vite:transax]', 'compiling translations' );

        await new Promise( r => setTimeout( r, 1000 ) );

        isDumping = false;
        if ( isDirty ) {
            isDirty = false;
            await dump();
        }
    };

    return {
        name: 'vite-plugin-transax',

        buildStart() {
            dictionaryWatcher.on( 'add', async path => {
                const dict = await dictionaryHandler( path );
                const map = ( v: [ string, Dictionary ] ) => [ v[0], flatten( v[1] ) ];

                generator.setTranslations( path, Object.fromEntries( Object.entries( dict ).map( map ) ) );
                await dump();
            } );

            // watcher.on( 'add', path => {
            //     console.log( 'add', getLocaleFromPath( path ) );
            // } );
            //
            // watcher.on( 'change', path => {
            //     console.log( 'change', getLocaleFromPath( path ) );
            // } );
            //
            // watcher.on( 'unlink', path => {
            //     console.log( 'unlink', getLocaleFromPath( path ) );
            // } );
        },

        closeBundle() {
            return Promise.all( [ inputWatcher.close(), dictionaryWatcher.close() ] );
        },
    };
}
