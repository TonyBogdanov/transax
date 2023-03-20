/**
 * A class representing a single translation invocation within some source code.
 */
export default class AnalyzerToken {

    /**
     * The name of the invoked translation function, e.g. `$t`.
     */
    public readonly name: string;

    /**
     * The key of the translation, e.g. `Hello world!`.
     */
    public readonly key: string;

    /**
     * The full text of the invocation, e.g. `$t( 'Hello world!' )`.
     */
    public readonly text: string;

    /**
     * The line number of the invocation within the source code.
     */
    public readonly line: number;

    /**
     * The column number of the invocation within the source code.
     */
    public readonly column: number;

    /**
     * The origin of the source code, usually a path to the source file.
     */
    public readonly source?: string;

    /**
     * Creates a new instance.
     *
     * @param name The name of the invoked translation function, e.g. `$t`.
     * @param key The key of the translation, e.g. `Hello world!`.
     * @param text The full text of the invocation, e.g. `$t( 'Hello world!' )`.
     * @param line The line number of the invocation within the source code.
     * @param column The column number of the invocation within the source code.
     * @param source The origin of the source code, usually a path to the source file.
     */
    constructor( name: string, key: string, text: string, line: number, column: number, source?: string ) {
        this.name = name;
        this.key = key;
        this.text = text;
        this.line = line;
        this.column = column;
        this.source = source;
    }

}
