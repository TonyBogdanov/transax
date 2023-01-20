import TokenInterface from './interface';
import Context from '../compiler/context';

export default class IdentifierToken implements TokenInterface {
    _ = 'identifier';

    name: string;
    global: boolean;

    constructor( name: string, global: boolean ) {
        this.name = name;
        this.global = global;
    }

    collapse( token: TokenInterface ): boolean {
        return false;
    }

    compile( context: Context ): string {
        if ( this.global ) {
            context.requireGlobal( this.name );
        } else {
            context.requireParameter( this.name );
        }

        return this.name;
    }
}
