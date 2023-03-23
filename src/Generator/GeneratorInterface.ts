import { Locale } from '../Type/Locale';
import { Dictionary } from '../Type/Dictionary';

/**
 * Defines an interface for **Generator** classes.
 */
export default interface GeneratorInterface {

    /**
     * Parses the given source code extracting translation keys and saves them in the current context.
     *
     * By default, calling parse() multiple times for the same source will replace previously extracted keys. This is
     * useful when you want to iteratively parse the same file as it changes for example. If you want to accumulate
     * keys instead, for example when streaming source code, you can pass `true` as the third argument.
     *
     * Keep in mind that in this case the meta information about the position of extracted keys in the source code
     * will be incorrect as it will be based on each call to parse(), rather an accumulated view of the source code.
     *
     * If `source` is not set, `parse` will accumulate keys regardless of the value of `accumulate`.
     *
     * @param code The source code to be parsed.
     * @param source Optional origin of the source code, usually a path to the source file.
     * @param accumulate Whether to accumulate parsed keys with existing ones for the same source.
     */
    parse( code: string, source?: string, accumulate?: boolean ): this;

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
     *
     * @param includeMeta Whether to include meta information about the position of extracted keys in the source code.
     */
    getCompiledTranslationsDump( includeMeta?: boolean ): string;

    /**
     * Returns an ECMAScript6 code representation of the compiled translations as CommonJS module.
     *
     * @param includeMeta Whether to include meta information about the position of extracted keys in the source code.
     */
    getCompiledTranslationsDumpAsCJSExport( includeMeta?: boolean ): string;

    /**
     * Returns an ECMAScript6 code representation of the compiled translations as ECMAScript6 module.
     *
     * @param includeMeta Whether to include meta information about the position of extracted keys in the source code.
     */
    getCompiledTranslationsDumpAsESMExport( includeMeta?: boolean ): string;

}
