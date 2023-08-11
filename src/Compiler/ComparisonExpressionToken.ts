import { LocationRange } from 'peggy';

import CompilerToken from './CompilerToken';
import CompilerContext from './CompilerContext';
import TernaryExpressionToken from './TernaryExpressionToken';

/**
 * Represents a comparison expression.
 *
 * It must consist of two expressions separated by a comparison operator.
 *
 * Examples:
 * `a == b`
 * `a != b`
 * `a > b`
 * `a < b`
 * `a >= b`
 * `a <= b`
 * `a === b`
 * `a !== b`
 */
export default class ComparisonExpressionToken extends CompilerToken {

    readonly left: CompilerToken;
    readonly right: CompilerToken;
    readonly operator: string;

    /**
     * Creates a new instance.
     *
     * @param left The left-hand side of the expression.
     * @param right The right-hand side of the expression.
     * @param operator The comparison operator.
     * @param text The full text (content) of the expression.
     * @param location The location of the invocation within the source code.
     */
    constructor(
        left: CompilerToken,
        right: CompilerToken,
        operator: string,
        text: string,
        location: LocationRange,
    ) {
        super( text, location );

        this.left = left;
        this.right = right;
        this.operator = operator;
    }

    /**
     * @inheritDoc
     */
    compile( context: CompilerContext ): string {
        const wrap = [ TernaryExpressionToken, ComparisonExpressionToken ];
        return this.left.compileWrap( context, wrap ) + this.operator + this.right.compileWrap( context, wrap );
    }

}
