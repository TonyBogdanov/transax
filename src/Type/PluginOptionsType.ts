import { PluginDictionaryType } from './PluginDictionaryType';
import { PluginInputType } from './PluginInputType';
import { PluginOutputType } from './PluginOutputType';

import VitePlugin from '../Plugin/VitePlugin';

/**
 * Options for the {@link VitePlugin}.
 */
export type PluginOptionsType = {

    /**
     * Specifies dictionary options.
     */
    dictionary: PluginDictionaryType;

    /**
     * Specifies input options.
     */
    input: PluginInputType;

    /**
     * Specifies output options.
     */
    output: PluginOutputType;

    /**
     * Specifies whether to suppress logging.
     */
    quiet: boolean;

    /**
     * Specifies whether to log verbose information.
     */
    verbose: boolean;

}
