import { TranslationKey } from './TranslationKey';
import { TranslationContext } from './TranslationContext';

/**
 Defines an interface for **Translator** classes.
 */
export default interface TranslatorInterface {

    /**
     * Translates the specified key based on the specified translation context & configured translator options.
     *
     * If no locale is specified in the translation context, or if the specified locale does not exist in the configured
     * translation dictionary, the configured fallback locale will be used instead.
     *
     * If no fallback locale is specified either, or if the fallback locale does not exist in the configured translation
     * dictionary, the key will be returned as-is.
     *
     * If the specified key does not exist in the configured translation dictionary for the specified locale, it will
     * be retrieved using the fallback locale instead, and if that fails as well, the key will be returned as-is.
     *
     * @param key The key to translate.
     * @param context Optional translation context.
     */
    translate( key: TranslationKey, context?: TranslationContext ): string

}
