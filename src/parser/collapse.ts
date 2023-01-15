import TokenInterface from '../token/interface';

export default function collapse( tokens: TokenInterface[] ): TokenInterface[] {
    return tokens.reduce( ( tokens: TokenInterface[], token: TokenInterface ): TokenInterface[] => {
        if ( 0 === tokens.length || !tokens[ tokens.length - 1 ].collapse( token ) ) {
            tokens.push( token );
        }

        return tokens;
    }, [] );
}
