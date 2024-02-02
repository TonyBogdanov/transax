import { readFile } from 'node:fs/promises';
import { parse as parseYaml } from 'yaml';

import { PluginDictionaryType } from '../Type/PluginDictionaryType';
import { CatalogType } from '../Type/CatalogType';

import VitePlugin from './VitePlugin';
import Util from './Util';
import PathError from '../Util/PathError';
import { DictionaryType } from '../Type/DictionaryType';

/**
 * Options for the {@link VitePlugin}.
 */
export default class PluginDictionary implements PluginDictionaryType {

    /** @inheritDoc */
    pattern: string[];

    /** @inheritDoc */
    handler: ( path: string ) => CatalogType | Promise<CatalogType>;

    /**
     * Creates a new instance.
     *
     * @param options
     */
    constructor( options: PluginDictionaryType ) {
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
            const resolve = async ( path: string, resolver: () => Promise<DictionaryType> ): Promise<CatalogType> => {
                const key = Util.localeFromPath( path );

                try {
                    return { [ key ]: await resolver() || {} };
                } catch {
                    return { [ key ]: {} };
                }
            };

            if ( 'json' === options.handler ) {
                return async ( path: string ): Promise<CatalogType> => {
                    return resolve( path, async () => JSON.parse( await readFile( path, 'utf8' ) ) );
                };
            } else if ( 'yaml' === options.handler ) {
                return async ( path: string ): Promise<CatalogType> => {
                    return resolve( path, async () => parseYaml( await readFile( path, 'utf8' ) ) );
                };
            } else if ( 'function' === typeof options.handler ) {
                return options.handler;
            }

            throw new PathError( 'Expected {{ path }} to be "yaml", "json" or a function.' );
        } );
    }

}
