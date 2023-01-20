import TokenInterface from './interface';

import Context from '../compiler/context';
import IdentifierToken from './identifier';
import ObjectAccessToken from './object-access';
import ArrayAccessToken from './array-access';

export default class ExpressionToken implements TokenInterface {
    _ = 'expression';

    identifier: IdentifierToken;
    resolvers: Array<ObjectAccessToken|ArrayAccessToken>;

    constructor( identifier: IdentifierToken, resolvers: Array<ObjectAccessToken|ArrayAccessToken> = [] ) {
        this.identifier = identifier;
        this.resolvers = resolvers;
    }

    collapse( token: TokenInterface ): boolean {
        return false;
    }

    compile( context: Context ): string {
        return this.identifier.compile( context ) + this.resolvers
            .map( resolver => resolver.compile( context ) ).join( '' );
    }
}
