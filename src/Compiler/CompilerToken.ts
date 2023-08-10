import { LocationRange } from 'peggy';

import CompilerContext from './CompilerContext';

/**
 * An abstract class representing a single evaluable expression within translation messages.
 */
export default abstract class CompilerToken {

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
     * @param location The location of the invocation within the source code.
     * @protected
     */
    protected constructor( text: string, location: LocationRange ) {
        this.text = text;
        this.line = location.start.line;
        this.column = location.start.column;
    }

    /**
     * Compiles the expression into an executable ECMAScript6 string.
     *
     * @param context The context to use for compiling the expression.
     */
    abstract compile( context: CompilerContext ): string;

}
