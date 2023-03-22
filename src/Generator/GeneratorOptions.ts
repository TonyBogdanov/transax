import AnalyzerInterface from '../Analyzer/AnalyzerInterface';
import LoggerInterface from '../Logger/LoggerInterface';
import CompilerInterface from '../Compiler/CompilerInterface';
import { TranslationCatalog } from '../Type/TranslationCatalog';

/**
 * Options for the {@link Generator}.
 */
export type GeneratorOptions = {

    /**
     * Optional translation catalog.
     * Defaults to `{}`.
     */
    translations?: TranslationCatalog;

    /**
     * Optional analyzer instance.
     * Defaults to `new Analyzer()`.
     */
    analyzer?: AnalyzerInterface;

    /**
     * Optional compiler instance.
     * Defaults to `new Compiler()`.
     */
    compiler?: CompilerInterface;

    /**
     * Optional logger instance.
     * Defaults to `new Logger( { namespace: 'TRANSAX:GENERATOR' } )`.
     */
    logger?: LoggerInterface;

}
