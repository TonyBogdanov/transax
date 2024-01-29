import { VitePluginOptionsType } from './VitePluginOptionsType';
import { VitePluginOutputCompilationType } from './VitePluginOutputCompilationType';
import { VitePluginOutputAnalysisType } from './VitePluginOutputAnalysisType';

/**
 * Options for {@link VitePluginOptionsType.output}.
 */
export type VitePluginOutputType = {

    /**
     * Specifies the output file for compiled translations.
     * If a `string` is provided, it will be used as the `path` option.
     */
    compiled: VitePluginOutputCompilationType | string;

    /**
     * Specifies the output file for missing translations.
     * If a `string` is provided, it will be used as the `path` option.
     */
    missing?: VitePluginOutputAnalysisType | string;

    /**
     * Specifies the output file for unused translations.
     * If a `string` is provided, it will be used as the `path` option.
     */
    unused?: VitePluginOutputAnalysisType | string;

}
