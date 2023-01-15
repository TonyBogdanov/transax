import TokenInterface from './interface';
import Context from '../compiler/context';

export default class ValueToken implements TokenInterface {
    name: string;

    constructor( name: string ) {
        this.name = name;
    }

    compile( context: Context ): string {
        context.requireParameter( this.name );
        return this.name;
    }

    collapse( token: TokenInterface ): boolean {
        return false;
    }
}
