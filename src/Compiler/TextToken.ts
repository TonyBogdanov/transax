import { LocationRange } from 'peggy';

import CompilerToken from './CompilerToken';
import CompilerContext from './CompilerContext';

/**
 * Represents a text token, i.e. any text that is not an evaluable expression (anything outside curly brackets).
 *
 * Example: `Hello world!`
 */
export default class TextToken extends CompilerToken {

    /**
     * @inheritDoc
     */
    constructor( text: string, location: LocationRange ) {
        super( text, location );
    }

    /**
     * @inheritDoc
     */
    compile( context: CompilerContext ): string {
        return JSON.stringify( this.text );
    }

}
