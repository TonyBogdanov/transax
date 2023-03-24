import AbstractCompilerToken from './AbstractCompilerToken';
import CompilerContext from './CompilerContext';

/**
 * Represents a literal (static value) expression, such as a string, number, or null.
 *
 * Example: `"foo"`, `123`, `null`.
 */
export default class LiteralCompilerToken extends AbstractCompilerToken {

    readonly value: null | boolean | string | number;

    /**
     * Creates a new instance.
     *
     * @param value The value of the literal.
     * @param text The full text (content) of the expression.
     * @param line The line number of the expression within the translation message.
     * @param column The column number of the expression within the translation message.
     */
    constructor( value: null | boolean | string | number, text: string, line: number, column: number ) {
        super( text, line, column );
        this.value = value;
    }

    /**
     * @inheritDoc
     */
    compile( context: CompilerContext ): string {
        if ( null === this.value ) {
            return 'null';
        }

        return JSON.stringify( this.value );
    }

}
