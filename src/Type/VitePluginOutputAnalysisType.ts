import { VitePluginOutputType } from './VitePluginOutputType';

import Generator from '../Generator/Generator';

export const VitePluginOutputAnalysisFlavorMissing = 'getMissingTranslationKeys';
export const VitePluginOutputAnalysisFlavorUnused = 'getUnusedTranslationKeys';

/**
 * Options for {@link VitePluginOutputType.missing} and {@link VitePluginOutputType.unused}.
 */
export type VitePluginOutputAnalysisType = {

    /**
     * Specifies the flavor of the output file being generated.
     *
     * Can be one of {@link VitePluginOutputAnalysisFlavorMissing} or {@link VitePluginOutputAnalysisFlavorUnused} for
     * missing and unused translation keys respectively.
     */
    flavor: string;

    /**
     * Specifies the path to the output file being generated.
     */
    path: string;

    /**
     * Specifies a handler function for encoding and writing the output file.
     * It can be synchronous, or return a Promise.
     *
     * You can also use built-in handlers by specifying a string name (instead of a function), one of:
     * `txt`, `yaml` or `json`.
     *
     * If left unspecified, the handler will be determined automatically based on the file extension if possible.
     */
    handler?: ( ( path: string, generator: Generator ) => Promise<void> | void ) | string;

}
