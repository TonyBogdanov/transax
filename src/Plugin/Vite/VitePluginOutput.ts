import { VitePluginOutputType } from '../../Type/VitePluginOutputType';

import VitePlugin from './VitePlugin';
import VitePluginOutputCompilation from './VitePluginOutputCompilation';
import VitePluginOutputAnalysis from './VitePluginOutputAnalysis';
import PathError from '../../Util/PathError';

/**
 * Options for the {@link VitePlugin}.
 */
export default class VitePluginOutput implements VitePluginOutputType {

    /** @inheritDoc */
    compiled: VitePluginOutputCompilation;

    /** @inheritDoc */
    missing?: VitePluginOutputAnalysis | string;

    /** @inheritDoc */
    unused?: VitePluginOutputAnalysis | string;

    /**
     * Creates a new instance.
     *
     * @param options
     */
    constructor( options: VitePluginOutputType ) {
        if ( !options || 'object' !== typeof options ) {
            throw new PathError( 'Expected {{ path }} to be an object.' );
        }

        this.compiled = PathError.wrap( 'compiled', () => {
            if ( 'string' === typeof options.compiled ) {
                return new VitePluginOutputCompilation( { path: options.compiled } );
            }

            return new VitePluginOutputCompilation( options.compiled );
        } );

        this.missing = PathError.wrap( 'missing', () => {
            if ( 'undefined' === typeof options.missing ) {
                // noop
            } else if ( 'string' === typeof options.missing ) {
                return new VitePluginOutputAnalysis( { path: options.missing } );
            } else if ( options.missing instanceof VitePluginOutputAnalysis ) {
                return options.missing;
            } else if ( null !== options.missing && 'object' === typeof options.missing ) {
                return new VitePluginOutputAnalysis( options.missing );
            }

            throw new PathError( 'Expected {{ path }} to be a string or an object.' );
        } );

        this.unused = PathError.wrap( 'unused', () => {
            if ( 'undefined' === typeof options.unused ) {
                // noop
            } else if ( 'string' === typeof options.unused ) {
                return new VitePluginOutputAnalysis( { path: options.unused } );
            } else if ( options.unused instanceof VitePluginOutputAnalysis ) {
                return options.unused;
            } else if ( null !== options.unused && 'object' === typeof options.unused ) {
                return new VitePluginOutputAnalysis( options.unused );
            }

            throw new PathError( 'Expected {{ path }} to be a string or an object.' );
        } );
    }

}
