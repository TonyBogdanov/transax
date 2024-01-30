import { CompilerOptionsType } from '../Type/CompilerOptionsType';

import LoggerInterface from '../Logger/LoggerInterface';

import Logger from '../Logger/Logger';
import { LoggerOptionsType } from '../Type/LoggerOptionsType';

/**
 * Options for the {@link Compiler}.
 */
export default class CompilerOptions implements CompilerOptionsType {

    /** @inheritDoc */
    logger: LoggerInterface;

    /**
     * Creates a new instance.
     *
     * @param options
     */
    constructor( options: CompilerOptionsType = {} ) {
        if ( null === options || 'object' !== typeof options ) {
            throw new TypeError( 'Expected options to be an object.' );
        }

        if ( 'undefined' === typeof options.logger ) {
            this.logger = new Logger( { namespace: 'TRANSAX:COMPILER' } );
        } else if ( options.logger instanceof Logger ) { // should be LoggerInterface, but currently not possible in TS
            this.logger = options.logger;
        } else if ( null !== options.logger && 'object' === typeof options.logger ) {
            this.logger = new Logger( options.logger as LoggerOptionsType );
        } else {
            throw new TypeError( 'Expected options.logger to be an instance of LoggerInterface or LoggerOptionsType.' );
        }
    }

}
