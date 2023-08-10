import { LocationRange } from 'peggy';

import CompilerToken from './CompilerToken';
import CompilerContext from './CompilerContext';

/**
 * Represents an expression wrapped in brackets to avoid syntax conflicts.
 */
export default class BracketSafeExpressionToken extends CompilerToken {

    readonly expr: CompilerToken;

    /**
     * Creates a new instance.
     *
     * @param expr The expression being wrapped.
     * @param text The full text (content) of the expression.
     * @param location The location of the invocation within the source code.
     */
    constructor( expr: CompilerToken, text: string, location: LocationRange ) {
        super( text, location );
        this.expr = expr;
    }

    /**
     * @inheritDoc
     */
    compile( context: CompilerContext ): string {
        let result = this.expr.compile( context );

        // some expressions already have brackets, so we don't need to add them
        if ( result.startsWith( '(' ) && result.endsWith( ')' ) ) {
            return result;
        }

        return '(' + result + ')';
    }

}
