/**
 * Options for {@link Logger}.
 */
export type LoggerOptionsType = {

    /**
     * Specifies a namespace for identifying the purpose of the logger (e.g. `Analysis`).
     * Defaults to `TRANSAX`.
     */
    namespace?: string;

    /**
     * Disables all logging.
     * Defaults to `false`.
     */
    quiet?: boolean;

    /**
     * Enables verbose logging.
     * Defaults to `false`.
     */
    verbose?: boolean;

};
