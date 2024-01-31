import { extname } from 'node:path';
import { writeFile } from 'node:fs/promises';
import { stringify as stringifyYaml } from 'yaml';

import {
    PluginOutputAnalysisFlavorMissing,
    PluginOutputAnalysisFlavorUnused,
    PluginOutputAnalysisType
} from '../Type/PluginOutputAnalysisType';

import VitePlugin from './VitePlugin';
import Generator from '../Generator/Generator';
import PathError from '../Util/PathError';

/**
 * Options for the {@link VitePlugin}.
 */
export default class PluginOutputAnalysis implements PluginOutputAnalysisType {

    /** @inheritDoc */
    flavor: string;

    /** @inheritDoc */
    path: string;

    /** @inheritDoc */
    handler: ( path: string, generator: Generator ) => Promise<void> | void;

    /**
     * Creates a new instance.
     *
     * @param options
     */
    constructor( options: PluginOutputAnalysisType ) {
        if ( !options || 'object' !== typeof options ) {
            throw new PathError( 'Expected {{ path }} to be an object.' );
        }

        this.flavor = PathError.wrap( 'flavor', () => {
            if ( [
                PluginOutputAnalysisFlavorMissing,
                PluginOutputAnalysisFlavorUnused,
            ].includes( options.flavor ) ) {
                return options.flavor;
            }

            throw new PathError( `Expected {{ path }} to be a valid string value.` );
        } );

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
            let getter = ( generator: Generator ): Record<string, string[]> => ( {} );

            if ( PluginOutputAnalysisFlavorMissing === this.flavor ) {
                getter = ( generator: Generator ): Record<string, string[]> => generator.getMissingTranslationKeys();
            } else if ( PluginOutputAnalysisFlavorUnused === this.flavor ) {
                getter = ( generator: Generator ): Record<string, string[]> => generator.getUnusedTranslationKeys();
            }

            if ( 'txt' === options.handler ) {
                return ( path: string, generator: Generator ): Promise<void> => {
                    const mapper = ( [ locale, keys ]: [ string, string[] ] ) => {
                        return '## ' + locale + '\n' + keys.join( '\n' ) + '\n\n';
                    };

                    return writeFile( path, Object.entries( getter( generator ) ).map( mapper ) );
                };
            } else if ( 'yaml' === options.handler ) {
                return ( path: string, generator: Generator ): Promise<void> => {
                    return writeFile( path, stringifyYaml( getter( generator ) ) );
                };
            } else if ( 'json' === options.handler ) {
                return ( path: string, generator: Generator ): Promise<void> => {
                    return writeFile( path, JSON.stringify( getter( generator ), null, 2 ) );
                };
            } else if ( 'function' === typeof options.handler ) {
                return options.handler;
            }

            throw new PathError( 'Expected {{ path }} to be "esm", "cjs" or a function.' );
        } );
    }

}
