import Generator from '../../../Generator/Generator';

/**
 * Options for {@link Output.compiled}.
 */
export type OutputCompilation = {

    /**
     * Specifies the path to the output file being generated.
     */
    readonly path: string;

    /**
     * Specifies whether to include meta information in the output file.
     * Defaults to `false`.
     */
    readonly includeMeta?: boolean;

    /**
     * Specifies a handler function for encoding and writing the output file.
     * It can be synchronous, or return a Promise.
     *
     * You can also use built-in handlers by specifying a string name (instead of a function), one of: `esm` or `cjs`.
     *
     * If left unspecified, the handler will be determined automatically based on the file extension.
     */
    readonly handler?: ( ( path: string, generator: Generator ) => Promise<void> | void ) | string;

};
