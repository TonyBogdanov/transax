/**
 * Options for {@link Logger}.
 */
export type LoggerOptions = {

    /**
     * Specifies a namespace for identifying the purpose of the logger (e.g. `Analysis`).
     * Defaults to `LOG`.
     */
    namespace?: string,

    /**
     * Enables verbose logging.
     * Defaults to `false`.
     */
    verbose?: boolean,

};
