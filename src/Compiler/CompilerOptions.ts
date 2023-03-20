import LoggerInterface from '../Logger/LoggerInterface';

/**
 * Options for the {@link Compiler}.
 */
export type CompilerOptions = {

    /**
     * Optional logger instance.
     * Defaults to `new Logger( { namespace: 'Compiler' } )`.
     */
    logger?: LoggerInterface;

}
