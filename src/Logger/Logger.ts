import LoggerInterface from './LoggerInterface';
import { LoggerOptions } from './LoggerOptions';

class Options {

    namespace: string;
    verbose: boolean;

    constructor( data: LoggerOptions = {} ) {
        this.namespace = data.namespace ?? 'TRANSAX';
        this.verbose = data.verbose ?? false;
    }

}

/**
 * Default implementation of the {@link LoggerInterface}.
 * Logs all messages to the console.
 */
export default class Logger implements LoggerInterface {

    private readonly options: Options;

    /**
     * Creates a new instance.
     *
     * @param options Customizes the logger.
     */
    constructor( options: LoggerOptions = {} ) {
        this.options = new Options( options );
    }

    /**
     * @inheritDoc
     */
    public log( ...args: any[] ): void {
        console.log( `[${ this.options.namespace }]`, ...args );
    }

    /**
     * @inheritDoc
     */
    verbose( ...args: any[] ): void {
        this.options.verbose && console.log( `[${ this.options.namespace }]`, ...args );
    }

}
