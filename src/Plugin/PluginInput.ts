import { PluginInputType } from '../Type/PluginInputType';
import { KeyFormatterType } from '../Type/KeyFormatterType';

import VitePlugin from './VitePlugin';
import PathError from '../Util/PathError';

/**
 * Options for the {@link VitePlugin}.
 */
export default class PluginInput implements PluginInputType {

    /** @inheritDoc */
    pattern: string[];

    /** @inheritDoc */
    keywords: string[];

    /** @inheritDoc */
    keyFormatter: KeyFormatterType;

    /**
     * Creates a new instance.
     *
     * @param options
     */
    constructor( options: PluginInputType ) {
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

        this.keywords = PathError.wrap( 'keywords', () => {
            if ( 'undefined' === typeof options.keywords ) {
                return [ '$t' ];
            } else if ( 'string' === typeof options.keywords && 0 < options.keywords.length ) {
                return [ options.keywords ];
            } else if ( Array.isArray( options.keywords ) && 0 < options.keywords.filter( v => 0 < v.length ).length ) {
                return options.keywords.filter( v => 0 < v.length );
            }

            throw new PathError( 'Expected {{ path }} to be a non-empty string or an array of non-empty strings.' );
        } );

        this.keyFormatter = PathError.wrap( 'keyFormatter', () => {
            if ( 'undefined' === typeof options.keyFormatter ) {
                return ( key: string ): string => key;
            } else if ( 'function' === typeof options.keyFormatter ) {
                return options.keyFormatter;
            }

            throw new PathError( 'Expected {{ path }} to be a function.' );
        } );
    }

}
