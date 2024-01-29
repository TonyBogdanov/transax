import { Dictionary } from './Options/Dictionary';
import { Input } from './Options/Input';
import { Output } from './Options/Output';

/**
 * Options for {@link VitePlugin}.
 */
export type VitePluginOptions = {

    /**
     * Specifies dictionary options.
     */
    readonly dictionary: Dictionary;

    /**
     * Specifies input options.
     */
    readonly input: Input;

    /**
     * Specifies output options.
     */
    readonly output: Output;

};
