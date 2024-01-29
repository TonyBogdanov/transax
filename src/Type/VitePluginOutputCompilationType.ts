import { VitePluginOptionsType } from './VitePluginOptionsType';

import Generator from '../Generator/Generator';

/**
 * Options for the {@link VitePluginOptionsType.input}.
 */
export type VitePluginOutputCompilationType = {

    /**
     * Specifies the path to the output file being generated.
     */
    path: string;

    /**
     * Specifies whether to include meta information in the output file.
     * Defaults to `false`.
     */
    includeMeta?: boolean;

    /**
     * Specifies a handler function for encoding and writing the output file.
     * It can be synchronous, or return a Promise.
     *
     * You can also use built-in handlers by specifying a string name (instead of a function), one of: `esm` or `cjs`.
     *
     * If left unspecified, the handler will be determined automatically based on the file extension.
     */
    handler?: ( ( path: string, generator: Generator ) => Promise<void> | void ) | string;

}
