import CompilerContext from './CompilerContext';

/**
 * An abstract class representing a single evaluable expression within translation messages.
 */
export default abstract class AbstractCompilerToken {

    /**
     * The full text (content) of the expression.
     */
    text: string;

    /**
     * The line number of the expression within the translation message.
     */
    line: number;

    /**
     * The column number of the expression within the translation message.
     */
    column: number;

    /**
     * Creates a new instance.
     *
     * @param text The full text (content) of the expression.
     * @param line The line number of the expression within the translation message.
     * @param column The column number of the expression within the translation message.
     * @protected
     */
    protected constructor( text: string, line: number, column: number ) {
        this.text = text;
        this.line = line;
        this.column = column;
    }

    /**
     * Compiles the expression into an executable ECMAScript6 string.
     *
     * @param context The context to use for compiling the expression.
     */
    abstract compile( context: CompilerContext ): string;

}
