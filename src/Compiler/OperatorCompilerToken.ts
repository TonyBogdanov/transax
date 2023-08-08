import AbstractCompilerToken from './AbstractCompilerToken';
import CompilerContext from './CompilerContext';
import LiteralCompilerToken from './LiteralCompilerToken';
import ExpressionCompilerToken from './ExpressionCompilerToken';
import ComparisonCompilerToken from './ComparisonCompilerToken';

/**
 * Represents an array access expression usually following an identifier, literal, array / object access or
 * invocation expression.
 *
 * Example: `[2][1]`.
 */
export default class OperatorCompilerToken extends AbstractCompilerToken {

    readonly operation: string;

    /**
     * Creates a new instance.
     *
     * @param operation The operator's operation being invoked.
     * @param text The full text (content) of the expression.
     * @param line The line number of the expression within the translation message.
     * @param column The column number of the expression within the translation message.
     */
    constructor( operation: string, text: string, line: number, column: number ) {
        super( text, line, column );
        this.operation = operation;
    }

    /**
     * @inheritDoc
     */
    compile( context: CompilerContext ): string {
        throw new Error( 'Method not implemented.' );
        // return '[' + this.expr.compile( context ) + ']';
    }

}
