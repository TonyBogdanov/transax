import AbstractCompilerToken from './AbstractCompilerToken';

/**
 * Defines an interface for **Compiler** classes.
 */
export default interface CompilerInterface {

    /**
     * Tokenizes the given string converting it into a sequence of {@link AbstractCompilerToken} instances.
     *
     * @param value The source string to tokenize.
     */
    tokenize( value: string ): AbstractCompilerToken[];

    /**
     * Tokenizes the given string and then compiles it into an executable ECMAScript6 string.
     *
     * @param value The source string to tokenize.
     */
    compile( value: string ): string;

}
