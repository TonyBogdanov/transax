import AbstractCompilerToken from './AbstractCompilerToken';
import CompilerContext from './CompilerContext';

/**
 * Represents an object access expression usually following an identifier or another array / object access expression.
 *
 * Example: `.bar.baz`.
 */
export default class ObjectAccessCompilerToken extends AbstractCompilerToken {

    readonly key: string;

    /**
     * Creates a new instance.
     *
     * @param key The key to access.
     * @param text The full text (content) of the expression.
     * @param line The line number of the expression within the translation message.
     * @param column The column number of the expression within the translation message.
     */
    constructor( key: string, text: string, line: number, column: number ) {
        super( text, line, column );
        this.key = key;
    }

    /**
     * @inheritDoc
     */
    compile( context: CompilerContext ): string {
        return `.${ this.key }`;
    }

}
