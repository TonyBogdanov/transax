import { CatalogType } from './CatalogType';

import AnalyzerInterface from '../Analyzer/AnalyzerInterface';
import LoggerInterface from '../Logger/LoggerInterface';
import CompilerInterface from '../Compiler/CompilerInterface';
import { AnalyzerOptionsType } from './AnalyzerOptionsType';
import { CompilerOptionsType } from './CompilerOptionsType';
import { LoggerOptionsType } from './LoggerOptionsType';

/**
 * Options for the {@link Generator}.
 */
export type GeneratorOptionsType = {

    /**
     * Optional translation catalog.
     * Defaults to `{}`.
     */
    translations?: CatalogType;

    /**
     * Optional analyzer instance.
     * Defaults to `new Analyzer()`.
     */
    analyzer?: AnalyzerInterface | AnalyzerOptionsType;

    /**
     * Optional compiler instance.
     * Defaults to `new Compiler()`.
     */
    compiler?: CompilerInterface | CompilerOptionsType;

    /**
     * Optional logger instance.
     * Defaults to `new Logger( { namespace: 'TRANSAX:GENERATOR' } )`.
     */
    logger?: LoggerInterface | LoggerOptionsType;

}
