import { extname } from 'node:path';
import { writeFile } from 'node:fs/promises';

import { VitePluginOutputCompilationType } from '../../Type/VitePluginOutputCompilationType';

import VitePlugin from './VitePlugin';
import Generator from '../../Generator/Generator';
import PathError from '../../Util/PathError';

/**
 * Options for the {@link VitePlugin}.
 */
export default class VitePluginOutputCompilation implements VitePluginOutputCompilationType {

    /** @inheritDoc */
    path: string;

    /** @inheritDoc */
    includeMeta: boolean;

    /** @inheritDoc */
    handler: ( path: string, generator: Generator ) => Promise<void> | void;

    /**
     * Creates a new instance.
     *
     * @param options
     */
    constructor( options: VitePluginOutputCompilationType ) {
        if ( !options || 'object' !== typeof options ) {
            throw new PathError( 'Expected {{ path }} to be an object.' );
        }

        this.path = PathError.wrap( 'path', () => {
            if ( 'string' === typeof options.path && 0 < options.path.length ) {
                return options.path;
            }

            throw new PathError( 'Expected {{ path }} to be a non-empty string.' );
        } );

        this.includeMeta = PathError.wrap( 'includeMeta', () => {
            if ( 'undefined' === typeof options.includeMeta ) {
                return false;
            } else if ( 'boolean' === typeof options.includeMeta ) {
                return options.includeMeta;
            }

            throw new PathError( 'Expected {{ path }} to be a boolean.' );
        } );

        if ( 'undefined' === typeof options.handler ) {
            switch ( extname( options.path ) ) {
                case '.ts':
                case '.js':
                case '.mjs':
                    options.handler = 'esm';
                    break;

                case '.cjs':
                    options.handler = 'cjs';
                    break;
            }
        }

        this.handler = PathError.wrap( 'handler', () => {
            if ( 'esm' === options.handler ) {
                return ( path: string, generator: Generator ): Promise<void> => writeFile( path,
                    generator.getCompiledTranslationsDumpAsESMExport( this.includeMeta ) );
            } else if ( 'cjs' === options.handler ) {
                return ( path: string, generator: Generator ): Promise<void> => writeFile( path,
                    generator.getCompiledTranslationsDumpAsCJSExport( this.includeMeta ) );
            } else if ( 'function' === typeof options.handler ) {
                return options.handler;
            }

            throw new PathError( 'Expected {{ path }} to be "esm", "cjs" or a function.' );
        } );
    }

}
