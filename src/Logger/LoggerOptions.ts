import { LoggerOptionsType } from '../Type/LoggerOptionsType';

/**
 * Options for the {@link Logger}.
 */
export default class LoggerOptions implements LoggerOptionsType {

    /** @inheritDoc */
    namespace: string;

    /** @inheritDoc */
    quiet: boolean;

    /** @inheritDoc */
    verbose: boolean;

    /**
     * Creates a new instance.
     *
     * @param options
     */
    constructor( options: LoggerOptionsType ) {
        if ( null === options || 'object' !== typeof options ) {
            throw new TypeError( 'Expected options to be an object.' );
        }

        if ( 'undefined' === typeof options.namespace ) {
            this.namespace = 'TRANSAX';
        } else if ( 'string' === typeof options.namespace && 0 !== options.namespace.length ) {
            this.namespace = options.namespace.toUpperCase();
        } else {
            throw new TypeError( 'Expected options.namespace to be a non-empty string.' );
        }

        if ( 'undefined' === typeof options.quiet ) {
            this.quiet = false;
        } else if ( 'boolean' === typeof options.quiet ) {
            this.quiet = options.quiet;
        } else {
            throw new TypeError( 'Expected options.quiet to be a boolean.' );
        }

        if ( 'undefined' === typeof options.verbose ) {
            this.verbose = false;
        } else if ( 'boolean' === typeof options.verbose ) {
            this.verbose = options.verbose;
        } else {
            throw new TypeError( 'Expected options.verbose to be a boolean.' );
        }
    }

}
