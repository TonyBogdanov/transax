import { VitePluginOptionsType } from '../../Type/VitePluginOptionsType';

import VitePlugin from './VitePlugin';
import VitePluginDictionary from './VitePluginDictionary';
import VitePluginInput from './VitePluginInput';
import VitePluginOutput from './VitePluginOutput';
import PathError from '../../Util/PathError';

/**
 * Options for the {@link VitePlugin}.
 */
export default class VitePluginOptions implements VitePluginOptionsType {

    /** @inheritDoc */
    dictionary: VitePluginDictionary;

    /** @inheritDoc */
    input: VitePluginInput;

    /** @inheritDoc */
    output: VitePluginOutput;

    /** @inheritDoc */
    quiet: boolean;

    /** @inheritDoc */
    verbose: boolean;

    /**
     * Creates a new instance.
     *
     * @param options
     */
    constructor( options: VitePluginOptionsType ) {
        if ( !options || 'object' !== typeof options ) {
            throw new PathError( 'Expected {{ path }} to be an object.' );
        }

        this.dictionary = PathError.wrap( 'dictionary', () => new VitePluginDictionary( options.dictionary ) );
        this.input = PathError.wrap( 'input', () => new VitePluginInput( options.input ) );
        this.output = PathError.wrap( 'output', () => new VitePluginOutput( options.output ) );

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
