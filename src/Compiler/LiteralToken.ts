import { LocationRange } from 'peggy';

import CompilerToken from './CompilerToken';
import CompilerContext from './CompilerContext';

/**
 * Represents a literal (static value) expression, such as a string, number, or null.
 *
 * Example: `"foo"`, `123`, `null`.
 */
export default class LiteralToken extends CompilerToken {

    readonly value: null | boolean | string | number;

    /**
     * Creates a new instance.
     *
     * @param value The value of the literal.
     * @param text The full text (content) of the expression.
     * @param location The location of the invocation within the source code.
     */
    constructor( value: null | boolean | string | number, text: string, location: LocationRange ) {
        super( text, location );
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
