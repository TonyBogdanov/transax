import { PluginOptionsType } from './PluginOptionsType';
import { AnalyzerOptionsType } from './AnalyzerOptionsType';
import { KeyFormatterType } from './KeyFormatterType';

/**
 * Options for the {@link PluginOptionsType.input}.
 */
export type PluginInputType = {

    /**
     * Specifies a glob pattern or array of patterns to match your project's source files to be observed & analyzed for
     * translation calls.
     */
    pattern: string[] | string;

    /**
     * Specifies the function name / keywords or an array of keywords to match when looking for translation calls.
     * Defaults to `[ '$t' ]`.
     */
    keywords?: string[] | string;

    /**
     * Specifies a function to be used to transform the translation keys depending on the source they were detected at.
     * Defaults to `( key => key )`.
     *
     * {@link AnalyzerOptionsType.keyFormatter}
     */
    keyFormatter?: KeyFormatterType;

}
