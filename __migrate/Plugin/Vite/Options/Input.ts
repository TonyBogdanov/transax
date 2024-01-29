/**
 * Options for {@link VitePluginOptions.input}.
 */
export type Input = {

    /**
     * Specifies a glob pattern or array of patterns to match your project's source files to be observed & analyzed for
     * translation calls.
     */
    readonly pattern: string | string[];

    /**
     * Specifies the function name / keyword or an array of keywords to match as translation calls.
     * Defaults to `$t`.
     */
    readonly keyword?: string | string[];

};
