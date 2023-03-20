import AbstractCompilerToken from './AbstractCompilerToken';
import CompilerContext from './CompilerContext';

/**
 * Represents a text token, i.e. any text that is not an evaluable expression (anything outside curly brackets).
 *
 * Example: `Hello world!`
 */
export default class TextCompilerToken extends AbstractCompilerToken {

    /**
     * @inheritDoc
     */
    constructor( text: string, line: number, column: number ) {
        super( text, line, column );
    }

    /**
     * @inheritDoc
     */
    compile( context: CompilerContext ): string {
        return JSON.stringify( this.text );
    }

}
