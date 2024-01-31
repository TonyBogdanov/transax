import { PluginOptionsType } from '../Type/PluginOptionsType';

import VitePlugin from './VitePlugin';
import PluginDictionary from './PluginDictionary';
import PluginInput from './PluginInput';
import PluginOutput from './PluginOutput';
import PathError from '../Util/PathError';

/**
 * Options for the {@link VitePlugin}.
 */
export default class PluginOptions implements PluginOptionsType {

    /** @inheritDoc */
    dictionary: PluginDictionary;

    /** @inheritDoc */
    input: PluginInput;

    /** @inheritDoc */
    output: PluginOutput;

    /** @inheritDoc */
    quiet: boolean;

    /** @inheritDoc */
    verbose: boolean;

    /**
     * Creates a new instance.
     *
     * @param options
     */
    constructor( options: PluginOptionsType ) {
        if ( !options || 'object' !== typeof options ) {
            throw new PathError( 'Expected {{ path }} to be an object.' );
        }

        this.dictionary = PathError.wrap( 'dictionary', () => new PluginDictionary( options.dictionary ) );
        this.input = PathError.wrap( 'input', () => new PluginInput( options.input ) );
        this.output = PathError.wrap( 'output', () => new PluginOutput( options.output ) );

        this.quiet = PathError.wrap( 'quiet', () => {
            if ( 'undefined' === typeof options.quiet || 'boolean' === typeof options.quiet ) {
                return !!options.quiet;
            }

            throw new PathError( 'Expected {{ path }} to be a boolean.' );
        } );

        this.verbose = PathError.wrap( 'verbose', () => {
            if ( 'undefined' === typeof options.verbose || 'boolean' === typeof options.verbose ) {
                return !!options.verbose;
            }

            throw new PathError( 'Expected {{ path }} to be a boolean.' );
        } );
    }

}
