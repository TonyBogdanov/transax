// import { basename, extname } from 'node:path';
// import { readFile, writeFile } from 'node:fs/promises';
// import { watch } from 'chokidar';
// import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';

import { VitePluginOptionsType } from '../../Type/VitePluginOptionsType';
import VitePluginOptions from './VitePluginOptions';
import PathError from '../../Util/PathError';

// function flatten( items: object, tail: string[] = [] ): Record<string, string> {
//     const result: Record<string, string> = {};
//     for ( const [ key, value ] of Object.entries( items ) ) {
//         if ( 'object' === typeof value ) {
//             Object.assign( result, flatten( value, tail.concat( key ) ) );
//         } else {
//             result[ tail.concat( key ).join( '.' ) ] = value;
//         }
//     }
//
//     return result;
// }

export default function VitePlugin( options: VitePluginOptionsType ) {
    options = PathError.wrap( 'options', () => new VitePluginOptions( options ) );
    console.log( options );

    // const generator = new Generator( {
    //     analyzer: new Analyzer( {
    //         names: inputKeyword,
    //         keyFormatter: inputKeyFormatter,
    //     } ),
    // } );
    //
    // const inputWatcher = watch( inputPattern, { persistent: true } );
    // const dictionaryWatcher = watch( dictionaryPattern, { persistent: true } );
    //
    // const loadDictionary = async ( path: string ): Promise<void> => {
    //     const dict = await dictionaryHandler( path );
    //     const map = ( v: [ string, DictionaryType ] ) => [ v[ 0 ], flatten( v[ 1 ] ) ];
    //
    //     generator.mergeTranslations( Object.fromEntries( Object.entries( dict ).map( map ) ) );
    //     await dump();
    // };
    //
    // const removeDictionary = async ( path: string ): Promise<void> => {
    //     generator.removeTranslations( filename( path ) );
    //     await dump();
    // }
    //
    // const loadInput = async ( path: string ): Promise<void> => {
    //     generator.parse( await readFile( path, 'utf8' ), path );
    //     await dump();
    // };
    //
    // const removeInput = async ( path: string ): Promise<void> => {
    //     generator.parse( '', path );
    //     await dump();
    // };
    //
    // const dump = async (): Promise<void> => {
    //     await Promise.all( [
    //         outputCompiledHandler( outputCompiledPath, generator ),
    //         outputMissingHandler( outputMissingPath, generator ),
    //         outputUnusedHandler( outputUnusedPath, generator ),
    //     ] );
    // };

    return {
        name: 'vite-plugin-transax',

        // buildStart() {
        //     dictionaryWatcher.on( 'add', loadDictionary );
        //     dictionaryWatcher.on( 'change', loadDictionary );
        //     dictionaryWatcher.on( 'unlink', removeDictionary );
        //
        //     inputWatcher.on( 'add', loadInput );
        //     inputWatcher.on( 'change', loadInput );
        //     inputWatcher.on( 'unlink', removeInput );
        // },
        //
        // closeBundle() {
        //     return Promise.all( [ inputWatcher.close(), dictionaryWatcher.close() ] );
        // },
    };
}
