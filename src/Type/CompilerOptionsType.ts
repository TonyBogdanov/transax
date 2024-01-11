import LoggerInterface from '../Logger/LoggerInterface';

/**
 * Options for the {@link Compiler}.
 */
export type CompilerOptionsType = {

    /**
     * Optional logger instance.
     * Defaults to `new Logger( { namespace: 'TRANSAX:COMPILER' } )`.
     */
    logger?: LoggerInterface;

}
