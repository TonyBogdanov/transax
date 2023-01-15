import TokenInterface from '../token/interface';
import Context from './context';

export default function compile( tokens: TokenInterface[] ): string {
    const context = new Context();
    return '()=>' + tokens.map( token => token.compile( context ) ).join( '+' );
}
