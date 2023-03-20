/**
 * Defines an interface for **Logger** classes.
 */
export default interface LoggerInterface {

    /**
     * Logs a message unless `isSilent` is `true`.
     *
     * @param args A list of arguments to log. These can be of any type that the underlying implementation
     * (e.g. `console.log` ) can handle.
     */
    log( ...args: any[] ): void;

    /**
     * Logs a verbose message unless `isSilent` is `true` or `isVerbose` is `false`.
     *
     * @param args A list of arguments to log. These can be of any type that the underlying implementation
     * (e.g. `console.log` ) can handle.
     */
    verbose( ...args: any[] ): void;

}
