import { VitePluginDictionaryType } from './VitePluginDictionaryType';
import { VitePluginInputType } from './VitePluginInputType';
import { VitePluginOutputType } from './VitePluginOutputType';

import VitePlugin from '../Plugin/Vite/VitePlugin';

/**
 * Options for the {@link VitePlugin}.
 */
export type VitePluginOptionsType = {

    /**
     * Specifies dictionary options.
     */
    dictionary: VitePluginDictionaryType;

    /**
     * Specifies input options.
     */
    input: VitePluginInputType;

    /**
     * Specifies output options.
     */
    output: VitePluginOutputType;

    /**
     * Specifies whether to suppress logging.
     */
    quiet: boolean;

    /**
     * Specifies whether to log verbose information.
     */
    verbose: boolean;

}
