import AbstractCompilerToken from './AbstractCompilerToken';
import IdentifierCompilerToken from './IdentifierCompilerToken';
import ArrayAccessCompilerToken from './ArrayAccessCompilerToken';
import ObjectAccessCompilerToken from './ObjectAccessCompilerToken';
import InvocationCompilerToken from './InvocationCompilerToken';
import CompilerContext from './CompilerContext';

/**
 * Represents a dynamic value expression as an identifier optionally following by a chain of
 * array / object accessors or invocations.
 *
 * Example: `foo.bar[0].baz( 123, true )`.
 */
export default class ExpressionCompilerToken extends AbstractCompilerToken {

    readonly identifier: IdentifierCompilerToken;
    readonly resolvers: Array<ObjectAccessCompilerToken | ArrayAccessCompilerToken | InvocationCompilerToken>;

    /**
     * Creates a new instance.
     *
     * @param identifier An identifier expression as the root value of the expression.
     * @param resolvers An optional array of array / object accessors.
     * @param text The full text (content) of the expression.
     * @param line The line number of the expression within the translation message.
     * @param column The column number of the expression within the translation message.
     */
    constructor(
        identifier: IdentifierCompilerToken,
        resolvers: Array<ObjectAccessCompilerToken | ArrayAccessCompilerToken | InvocationCompilerToken>,
        text: string,
        line: number,
        column: number,
    ) {
        super( text, line, column );

        this.identifier = identifier;
        this.resolvers = resolvers;
    }

    /**
     * @inheritDoc
     */
    compile( context: CompilerContext ): string {
        return this.identifier.compile( context ) +
            this.resolvers.map( resolver => resolver.compile( context ) ).join( '' );
    }

}
