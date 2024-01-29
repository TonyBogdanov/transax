import { readFile } from 'node:fs/promises';
import { parse as parseYaml } from 'yaml';

import { VitePluginDictionaryType } from '../../Type/VitePluginDictionaryType';
import { CatalogType } from '../../Type/CatalogType';

import VitePlugin from './VitePlugin';
import Util from './Util';
import PathError from '../../Util/PathError';

/**
 * Options for the {@link VitePlugin}.
 */
export default class VitePluginDictionary implements VitePluginDictionaryType {

    /** @inheritDoc */
    pattern: string[];

    /** @inheritDoc */
    handler: ( path: string ) => CatalogType | Promise<CatalogType>;

    /**
     * Creates a new instance.
     *
     * @param options
     */
    constructor( options: VitePluginDictionaryType ) {
        if ( !options || 'object' !== typeof options ) {
            throw new PathError( 'Expected {{ path }} to be an object.' );
        }

        this.pattern = PathError.wrap( 'pattern', () => {
            if ( 'string' === typeof options.pattern && 0 < options.pattern.length ) {
                return [ options.pattern ];
            } else if ( Array.isArray( options.pattern ) && 0 < options.pattern.filter( v => 0 < v.length ).length ) {
                return options.pattern.filter( v => 0 < v.length );
            }

            throw new PathError( 'Expected {{ path }} to be a non-empty string or an array of non-empty strings.' );
        } );

        this.handler = PathError.wrap( 'handler', () => {
            if ( 'json' === options.handler ) {
                return async ( path: string ): Promise<CatalogType> => ( {
                    [ Util.localeFromPath( path ) ]: JSON.parse( await readFile( path, 'utf8' ) ),
                } );
            } else if ( 'yaml' === options.handler ) {
                return async ( path: string ): Promise<CatalogType> => ( {
                    [ Util.localeFromPath( path ) ]: parseYaml( await readFile( path, 'utf8' ) ),
                } );
            } else if ( 'function' === typeof options.handler ) {
                return options.handler;
            }

            throw new PathError( 'Expected {{ path }} to be "yaml", "json" or a function.' );
        } );
    }

}
