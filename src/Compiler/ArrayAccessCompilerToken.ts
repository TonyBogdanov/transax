import AbstractCompilerToken from './AbstractCompilerToken';
import CompilerContext from './CompilerContext';
import LiteralCompilerToken from './LiteralCompilerToken';
import ExpressionCompilerToken from './ExpressionCompilerToken';

/**
 * Represents an array access expression usually following an identifier, literal or another array / object
 * access expression.
 *
 * Example: `[2][1]`.
 */
export default class ArrayAccessCompilerToken extends AbstractCompilerToken {

    readonly expr: LiteralCompilerToken | ExpressionCompilerToken;

    /**
     * Creates a new instance.
     *
     * @param expr The expression to be used as the array index.
     * @param text The full text (content) of the expression.
     * @param line The line number of the expression within the translation message.
     * @param column The column number of the expression within the translation message.
     */
    constructor( expr: LiteralCompilerToken | ExpressionCompilerToken, text: string, line: number, column: number ) {
        super( text, line, column );
        this.expr = expr;
    }

    /**
     * @inheritDoc
     */
    compile( context: CompilerContext ): string {
        return '[' + this.expr.compile( context ) + ']';
    }

}
