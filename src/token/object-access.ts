import TokenInterface from './interface';

import Context from '../compiler/context';

export default class ObjectAccessToken implements TokenInterface {
    _ = 'object-access';

    key: string;

    constructor( key: string ) {
        this.key = key;
    }

    collapse( token: TokenInterface ): boolean {
        return false;
    }

    compile( context: Context ): string {
        return `.${ this.key }`;
    }
}
