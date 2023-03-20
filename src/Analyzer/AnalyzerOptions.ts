import LoggerInterface from '../Logger/LoggerInterface';

/**
 * Options for the {@link Analyzer}.
 */
export type AnalyzerOptions = {

    /**
     * The names of the functions to analyze.
     * Defaults to `[ '$t' ]`.
     */
    names?: string[];

    /**
     * Optional logger instance.
     * Defaults to `new Logger( { namespace: 'Analyzer' } )`.
     */
    logger?: LoggerInterface;

}
