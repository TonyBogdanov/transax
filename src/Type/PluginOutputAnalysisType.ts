import { PluginOutputType } from './PluginOutputType';

import Generator from '../Generator/Generator';

export const PluginOutputAnalysisFlavorMissing = 'getMissingTranslationKeys';
export const PluginOutputAnalysisFlavorUnused = 'getUnusedTranslationKeys';

/**
 * Options for {@link PluginOutputType.missing} and {@link PluginOutputType.unused}.
 */
export type PluginOutputAnalysisType = {

    /**
     * Specifies the flavor of the output file being generated.
     *
     * Can be one of {@link PluginOutputAnalysisFlavorMissing} or {@link PluginOutputAnalysisFlavorUnused} for
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
