import AbstractCompilerToken from './AbstractCompilerToken';
import CompilerContext from './CompilerContext';
import LiteralCompilerToken from './LiteralCompilerToken';
import ExpressionCompilerToken from './ExpressionCompilerToken';

/**
 * Represents an invocation expression, usually following an identifier, literal, array / object access or
 * invocation expression.
 *
 * Example: `foo( 123 )( 456 )`.
 */
export default class InvocationCompilerToken extends AbstractCompilerToken {

    readonly exprs: ( LiteralCompilerToken | ExpressionCompilerToken )[];

    /**
     * Creates a new instance.
     *
     * @param exprs A list of expressions to be used as invocation arguments.
     * @param text The full text (content) of the expression.
     * @param line The line number of the expression within the translation message.
     * @param column The column number of the expression within the translation message.
     */
    constructor( exprs: ( LiteralCompilerToken | ExpressionCompilerToken )[], text: string, line: number, column: number ) {
        super( text, line, column );
        this.exprs = exprs;
    }

    /**
     * @inheritDoc
     */
    compile( context: CompilerContext ): string {
        return '(' + this.exprs.map( expr => expr.compile( context ) ).join( ',' ) + ')';
    }

}
