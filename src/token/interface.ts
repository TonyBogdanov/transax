import Context from '../compiler/context';

export default interface TokenInterface {
    compile( context: Context ): string;
    collapse( token: TokenInterface ): boolean;
}
