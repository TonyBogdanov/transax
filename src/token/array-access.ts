import TokenInterface from './interface';

import Context from '../compiler/context';
import LiteralToken from './literal';
import ExpressionToken from './expression';

export default class ArrayAccessToken implements TokenInterface {
    _ = 'array-access';

    expr: LiteralToken|ExpressionToken;

    constructor( expr: LiteralToken|ExpressionToken ) {
        this.expr = expr;
    }

    collapse( token: TokenInterface ): boolean {
        return false;
    }

    compile( context: Context ): string {
        return '[' + this.expr.compile( context ) + ']';
    }
}
