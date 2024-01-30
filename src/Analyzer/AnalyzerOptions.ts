import { AnalyzerOptionsType } from '../Type/AnalyzerOptionsType';
import { KeyFormatterType } from '../Type/KeyFormatterType';

import LoggerInterface from '../Logger/LoggerInterface';
import Logger from '../Logger/Logger';
import { LoggerOptionsType } from '../Type/LoggerOptionsType';

/**
 * Options for the {@link Analyzer}.
 */
export default class AnalyzerOptions implements AnalyzerOptionsType {

    /** @inheritDoc */
    names: string[];

    /** @inheritDoc */
    keyFormatter: KeyFormatterType;

    /** @inheritDoc */
    logger: LoggerInterface;

    /**
     * Creates a new instance.
     *
     * @param options
     */
    constructor( options: AnalyzerOptionsType = {} ) {
        if ( null === options || 'object' !== typeof options ) {
            throw new TypeError( 'Expected options to be an object.' );
        }

        if ( 'undefined' === typeof options.names ) {
            this.names = [ '$t' ];
        } else if ( 'string' === typeof options.names && 0 < options.names.length ) {
            this.names = [ options.names ];
        } else if ( Array.isArray( options.names ) && 0 < options.names.length ) {
            this.names = options.names;
        } else {
            throw new TypeError( 'Expected options.names to be a non-empty string or an non-empty array.' );
        }

        if ( 'undefined' === typeof options.keyFormatter ) {
            this.keyFormatter = ( key: string ): string => key;
        } else if ( 'function' === typeof options.keyFormatter ) {
            this.keyFormatter = options.keyFormatter;
        } else {
            throw new TypeError( 'Expected options.keyFormatter to be a function.' );
        }

        if ( 'undefined' === typeof options.logger ) {
            this.logger = new Logger( { namespace: 'TRANSAX:ANALYZER' } );
        } else if ( options.logger instanceof Logger ) { // should be LoggerInterface, but not possible in TS
            this.logger = options.logger;
        } else if ( null !== options.logger && 'object' === typeof options.logger ) {
            this.logger = new Logger( options.logger as LoggerOptionsType );
        } else {
            throw new TypeError( 'Expected options.logger to be an instance of LoggerInterface or LoggerOptionsType.' );
        }
    }

}
