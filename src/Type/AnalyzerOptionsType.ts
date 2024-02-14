import { KeyFormatterType } from './KeyFormatterType';

import LoggerInterface from '../Logger/LoggerInterface';
import { LoggerOptionsType } from './LoggerOptionsType';

import Analyzer from '../Analyzer/Analyzer';

/**
 * Options for the {@link Analyzer}.
 */
export type AnalyzerOptionsType = {

    /**
     * The name(s) of the function(s) to analyze.
     * Defaults to `[ '$t' ]`.
     */
    names?: string[] | string;

    /**
     * A function to format the translation key based on the context.
     * Defaults to `( key => key )`.
     */
    keyFormatter?: KeyFormatterType;

    /**
     * Optional logger instance.
     * Defaults to `new Logger( { namespace: 'TRANSAX:ANALYZER' } )`.
     */
    logger?: LoggerInterface | LoggerOptionsType;

}
