import LoggerInterface from '../Logger/LoggerInterface';

import { KeyFormatter } from '../Type/KeyFormatter';

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
     * A function to format the translation key based on the context.
     * Defaults to `( key => key )`.
     */
    keyFormatter?: KeyFormatter;

    /**
     * Optional logger instance.
     * Defaults to `new Logger( { namespace: 'TRANSAX:ANALYZER' } )`.
     */
    logger?: LoggerInterface;

}
