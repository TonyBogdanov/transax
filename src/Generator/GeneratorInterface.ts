import { Locale } from '../Type/Locale';
import { Dictionary } from '../Type/Dictionary';

/**
 * Defines an interface for **Generator** classes.
 */
export default interface GeneratorInterface {

    /**
     * Parses the given source code extracting translation keys and saves them in the current context.
     *
     * @param code The source code to be parsed.
     * @param source Optional origin of the source code, usually a path to the source file.
     */
    parse( code: string, source?: string ): this;

    /**
     * Adds or replaces the current translation dictionary for the specified locale.
     *
     * @param locale Target translation locale.
     * @param dictionary Target translation dictionary.
     */
    setTranslations( locale: Locale, dictionary: Dictionary ): this;

    /**
     * Removes the current translation dictionary for the specified locale.
     *
     * @param locale Target translation locale.
     */
    removeTranslations( locale: Locale ): this;

    /**
     * Returns a hashmap of locale keys and corresponding lists of missing translation keys.
     * Those are keys that are extracted from source code, but not present in the translation catalog.
     */
    getMissingTranslationKeys(): Record<string, string[]>;

    /**
     * Returns a hashmap of locale keys and corresponding lists of unused translation keys.
     * Those are keys that are present in the translation catalog, but not in the extracted source code.
     */
    getUnusedTranslationKeys(): Record<string, string[]>;

    /**
     * Returns an ECMAScript6 code representation of the compiled translations.
     */
    getCompiledTranslationsDump(): string;

    /**
     * Returns an ECMAScript6 code representation of the compiled translations as CommonJS module.
     */
    getCompiledTranslationsDumpAsCJSExport(): string;

    /**
     * Returns an ECMAScript6 code representation of the compiled translations as ECMAScript6 module.
     */
    getCompiledTranslationsDumpAsESMExport(): string;

}
