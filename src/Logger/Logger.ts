import { LoggerOptionsType } from '../Type/LoggerOptionsType';

import LoggerInterface from './LoggerInterface';

import LoggerOptions from './LoggerOptions';

/**
 * Default implementation of the {@link LoggerInterface}.
 * Logs all messages to the console.
 */
export default class Logger implements LoggerInterface {

    /**
     * The options.
     *
     * @private
     */
    private readonly options: LoggerOptions;

    /**
     * Creates a new instance.
     *
     * @param options Customizes the logger.
     */
    constructor( options: LoggerOptionsType = {} ) {
        this.options = options instanceof LoggerOptions ? options : new LoggerOptions( options );
    }

    /**
     * @inheritDoc
     */
    log( ...args: any[] ): void {
        !this.options.quiet && console.log( `[${ this.options.namespace }]`, ...args );
    }

    /**
     * @inheritDoc
     */
    verbose( ...args: any[] ): void {
        !this.options.quiet && this.options.verbose && console.log( `[${ this.options.namespace }]`, ...args );
    }

}
