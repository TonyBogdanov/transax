import Context from '../compiler/context';

export default interface TokenInterface {
    collapse( token: TokenInterface ): boolean;
    compile( context: Context ): string;
}
