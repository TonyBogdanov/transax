import AbstractCompilerToken from './AbstractCompilerToken';
import CompilerContext from './CompilerContext';
import LiteralCompilerToken from './LiteralCompilerToken';
import ExpressionCompilerToken from './ExpressionCompilerToken';
import OperatorCompilerToken from './OperatorCompilerToken';

/**
 * Represents an invocation expression, usually following an identifier, literal, array / object access or
 * invocation expression.
 *
 * Example: `foo( 123 )( 456 )`.
 */
export default class ComparisonCompilerToken extends AbstractCompilerToken {

    readonly exprA: LiteralCompilerToken | ExpressionCompilerToken;
    readonly exprB: LiteralCompilerToken | ExpressionCompilerToken;
    readonly operator: OperatorCompilerToken;

    /**
     * Creates a new instance.
     *
     * @param exprA The left hand side operand.
     * @param exprB The right hand side operand.
     * @param operator The operator being invoked.
     * @param text The full text (content) of the expression.
     * @param line The line number of the expression within the translation message.
     * @param column The column number of the expression within the translation message.
     */
    constructor(
        exprA: LiteralCompilerToken | ExpressionCompilerToken,
        exprB: LiteralCompilerToken | ExpressionCompilerToken,
        operator: OperatorCompilerToken,
        text: string,
        line: number,
        column: number,
    ) {
        super( text, line, column );
        this.exprA = exprA;
        this.exprB = exprB;
        this.operator = operator;
    }

    /**
     * @inheritDoc
     */
    compile( context: CompilerContext ): string {
        return '""';
        // return '(' + this.exprs.map( expr => expr.compile( context ) ).join( ',' ) + ')';
    }

}
