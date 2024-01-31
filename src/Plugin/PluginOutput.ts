import { PluginOutputType } from '../Type/PluginOutputType';

import VitePlugin from './VitePlugin';
import PluginOutputCompilation from './PluginOutputCompilation';
import PluginOutputAnalysis from './PluginOutputAnalysis';
import PathError from '../Util/PathError';

import {
    PluginOutputAnalysisFlavorMissing,
    PluginOutputAnalysisFlavorUnused
} from '../Type/PluginOutputAnalysisType';

/**
 * Options for the {@link VitePlugin}.
 */
export default class PluginOutput implements PluginOutputType {

    /** @inheritDoc */
    compiled: PluginOutputCompilation;

    /** @inheritDoc */
    missing: PluginOutputAnalysis;

    /** @inheritDoc */
    unused: PluginOutputAnalysis;

    /**
     * Creates a new instance.
     *
     * @param options
     */
    constructor( options: PluginOutputType ) {
        if ( !options || 'object' !== typeof options ) {
            throw new PathError( 'Expected {{ path }} to be an object.' );
        }

        this.compiled = PathError.wrap( 'compiled', () => {
            if ( 'string' === typeof options.compiled ) {
                return new PluginOutputCompilation( { path: options.compiled } );
            }

            return new PluginOutputCompilation( options.compiled );
        } );

        this.missing = PathError.wrap( 'missing', () => {
            if ( 'undefined' === typeof options.missing ) {
                // noop
            } else if ( 'string' === typeof options.missing ) {
                return new PluginOutputAnalysis( {
                    flavor: PluginOutputAnalysisFlavorMissing,
                    path: options.missing,
                } );
            } else if ( options.missing instanceof PluginOutputAnalysis ) {
                options.missing.flavor = PluginOutputAnalysisFlavorMissing; // force flavor
                return options.missing;
            } else if ( null !== options.missing && 'object' === typeof options.missing ) {
                options.missing.flavor = PluginOutputAnalysisFlavorMissing; // force flavor
                return new PluginOutputAnalysis( options.missing );
            }

            throw new PathError( 'Expected {{ path }} to be a string or an object.' );
        } );

        this.unused = PathError.wrap( 'unused', () => {
            if ( 'undefined' === typeof options.unused ) {
                // noop
            } else if ( 'string' === typeof options.unused ) {
                return new PluginOutputAnalysis( {
                    flavor: PluginOutputAnalysisFlavorUnused,
                    path: options.unused,
                } );
            } else if ( options.unused instanceof PluginOutputAnalysis ) {
                options.unused.flavor = PluginOutputAnalysisFlavorUnused; // force flavor
                return options.unused;
            } else if ( null !== options.unused && 'object' === typeof options.unused ) {
                options.unused.flavor = PluginOutputAnalysisFlavorUnused; // force flavor
                return new PluginOutputAnalysis( options.unused );
            }

            throw new PathError( 'Expected {{ path }} to be a string or an object.' );
        } );
    }

}
