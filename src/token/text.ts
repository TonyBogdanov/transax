import TokenInterface from './interface';
import Context from '../compiler/context';

export default class TextToken implements TokenInterface {
    _ = 'text';

    value: string;

    constructor( value: string ) {
        this.value = value;
    }

    collapse( token: TokenInterface ): boolean {
        if ( token instanceof TextToken ) {
            this.value += token.value;
            return true;
        }

        return false;
    }

    compile( context: Context ): string {
        return JSON.stringify( this.value );
    }
}
