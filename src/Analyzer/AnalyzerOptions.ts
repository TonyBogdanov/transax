import LoggerInterface from '../Logger/LoggerInterface';

import { TranslationKeyFormatter } from '../Type/TranslationKeyFormatter';

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
    keyFormatter?: TranslationKeyFormatter;

    /**
     * Optional logger instance.
     * Defaults to `new Logger( { namespace: 'TRANSAX:ANALYZER' } )`.
     */
    logger?: LoggerInterface;

}
