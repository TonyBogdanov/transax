import { extname } from 'node:path';
import { writeFile } from 'node:fs/promises';
import { stringify as stringifyYaml } from 'yaml';

import { VitePluginOutputAnalysisType } from '../../Type/VitePluginOutputAnalysisType';

import VitePlugin from './VitePlugin';
import Generator from '../../Generator/Generator';
import PathError from '../../Util/PathError';

/**
 * Options for the {@link VitePlugin}.
 */
export default class VitePluginOutputAnalysis implements VitePluginOutputAnalysisType {

    /** @inheritDoc */
    path: string;

    /** @inheritDoc */
    handler?: ( ( path: string, generator: Generator ) => Promise<void> | void ) | string;

    /**
     * Creates a new instance.
     *
     * @param options
     */
    constructor( options: VitePluginOutputAnalysisType ) {
        if ( !options || 'object' !== typeof options ) {
            throw new PathError( 'Expected {{ path }} to be an object.' );
        }

        this.path = PathError.wrap( 'path', () => {
            if ( 'string' === typeof options.path && 0 < options.path.length ) {
                return options.path;
            }

            throw new PathError( 'Expected {{ path }} to be a non-empty string.' );
        } );

        if ( 'undefined' === typeof options.handler ) {
            switch ( extname( options.path ) ) {
                case '.txt':
                    options.handler = 'txt';
                    break;

                case '.yml':
                case '.yaml':
                    options.handler = 'yaml';
                    break;

                case '.json':
                    options.handler = 'json';
                    break;
            }
        }

        this.handler = PathError.wrap( 'handler', () => {
            if ( 'txt' === options.handler ) {
                return ( path: string, generator: Generator ): Promise<void> => writeFile( path,
                    Object.entries( generator.getMissingTranslationKeys() ).map( ( [ locale, keys ] ) =>
                        '## ' + locale + '\n' + keys.join( '\n' ) + '\n\n' ) );
            } else if ( 'yaml' === options.handler ) {
                return ( path: string, generator: Generator ): Promise<void> => writeFile( path,
                    stringifyYaml( generator.getMissingTranslationKeys() ) );
            } else if ( 'json' === options.handler ) {
                return ( path: string, generator: Generator ): Promise<void> => writeFile( path,
                    JSON.stringify( generator.getMissingTranslationKeys(), null, 2 ) );
            } else if ( 'function' === typeof options.handler ) {
                return options.handler;
            }

            throw new PathError( 'Expected {{ path }} to be "esm", "cjs" or a function.' );
        } );
    }

}
