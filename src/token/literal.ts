import TokenInterface from './interface';
import Context from '../compiler/context';

export default class LiteralToken implements TokenInterface {
    value: null|string|number;

    constructor( value: null|string|number ) {
        this.value = value;
    }

    compile( context: Context ): string {
        if ( null === this.value ) {
            return 'null';
        }

        return JSON.stringify( this.value );
    }

    collapse( token: TokenInterface ): boolean {
        return false;
    }
}
