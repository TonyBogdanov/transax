import { LocationRange } from 'peggy';

import CompilerToken from './CompilerToken';
import CompilerContext from './CompilerContext';

/**
 * Represents a ternary expression that returns the result of the truthy expression if the test expression returns a
 * truthy value, or the result of the falsy expression otherwise.
 *
 * Examples:
 * `a ? b : c`
 * `( 0 < 1 ) ? b : c`
 */
export default class TernaryExpressionToken extends CompilerToken {

    readonly test: CompilerToken;
    readonly truthy: CompilerToken;
    readonly falsy: CompilerToken;

    /**
     * Creates a new instance.
     *
     * @param test The test expression.
     * @param truthy The truthy expression.
     * @param falsy The falsy expression.
     * @param text The full text (content) of the expression.
     * @param location The location of the invocation within the source code.
     */
    constructor(
        test: CompilerToken,
        truthy: CompilerToken,
        falsy: CompilerToken,
        text: string,
        location: LocationRange,
    ) {
        super( text, location );

        this.test = test;
        this.truthy = truthy;
        this.falsy = falsy;
    }

    /**
     * @inheritDoc
     */
    compile( context: CompilerContext ): string {
        return '(' + this.test.compile( context ) + '?' +
            this.truthy.compile( context ) + ':' + this.falsy.compile( context ) + ')';
    }

}
