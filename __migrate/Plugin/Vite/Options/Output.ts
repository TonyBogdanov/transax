import { OutputCompilation } from './OutputCompilation';
import { OutputAnalysis } from './OutputAnalysis';

/**
 * Options for {@link VitePluginOptions.output}.
 */
export type Output = {

    /**
     * Specifies the output file for compiled translations.
     */
    readonly compiled: OutputCompilation;

    /**
     * Specifies the output file for missing translations.
     */
    readonly missing?: OutputAnalysis;

    /**
     * Specifies the output file for unused translations.
     */
    readonly unused?: OutputAnalysis;

};
