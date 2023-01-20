import TokenInterface from './interface';
import Context from '../compiler/context';

export default class LiteralToken implements TokenInterface {
    _ = 'literal';

    value: null | string | number;

    constructor( value: null | string | number ) {
        this.value = value;
    }

    collapse( token: TokenInterface ): boolean {
        return false;
    }

    compile( context: Context ): string {
        if ( null === this.value ) {
            return 'null';
        }

        return JSON.stringify( this.value );
    }
}
