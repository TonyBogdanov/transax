import AbstractCompilerToken from './AbstractCompilerToken';
import CompilerContext from './CompilerContext';

/**
 * Represents an identifier (dynamic value) expression referencing a parameter or a global variable.
 *
 * Example: `foo` or `@bar`.
 */
export default class IdentifierCompilerToken extends AbstractCompilerToken {

    readonly name: string;
    readonly global: boolean;

    /**
     * Creates a new instance.
     *
     * @param name The name of the identifier.
     * @param global Specifies whether the identifier is a global variable or a parameter.
     * @param text The full text (content) of the expression.
     * @param line The line number of the expression within the translation message.
     * @param column The column number of the expression within the translation message.
     */
    constructor( name: string, global: boolean, text: string, line: number, column: number ) {
        super( text, line, column );

        this.name = name;
        this.global = global;
    }

    /**
     * @inheritDoc
     */
    compile( context: CompilerContext ): string {
        if ( this.global ) {
            context.requireGlobal( this.name );
        } else {
            context.requireParameter( this.name );
        }

        return this.name;
    }

}
