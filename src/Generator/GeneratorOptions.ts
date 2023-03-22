import AnalyzerInterface from '../Analyzer/AnalyzerInterface';
import LoggerInterface from '../Logger/LoggerInterface';
import CompilerInterface from '../Compiler/CompilerInterface';
import { TranslationDictionary } from '../Translator/TranslationDictionary';

/**
 * Options for the {@link Generator}.
 */
export type GeneratorOptions = {

    /**
     * Optional translation dictionary.
     * Defaults to `{}`.
     */
    translations?: TranslationDictionary;

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
