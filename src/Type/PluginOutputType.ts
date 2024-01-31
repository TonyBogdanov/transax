import { PluginOptionsType } from './PluginOptionsType';
import { PluginOutputCompilationType } from './PluginOutputCompilationType';
import { PluginOutputAnalysisType } from './PluginOutputAnalysisType';

/**
 * Options for {@link PluginOptionsType.output}.
 */
export type PluginOutputType = {

    /**
     * Specifies the output file for compiled translations.
     * If a `string` is provided, it will be used as the `path` option.
     */
    compiled: PluginOutputCompilationType | string;

    /**
     * Specifies the output file for missing translations.
     * If a `string` is provided, it will be used as the `path` option.
     */
    missing?: PluginOutputAnalysisType | string;

    /**
     * Specifies the output file for unused translations.
     * If a `string` is provided, it will be used as the `path` option.
     */
    unused?: PluginOutputAnalysisType | string;

}
