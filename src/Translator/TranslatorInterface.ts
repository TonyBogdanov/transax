import { Key } from '../Type/Key';
import { Context } from '../Type/Context';

/**
 Defines an interface for **Translator** classes.
 */
export default interface TranslatorInterface {

    /**
     * Translates the specified key based on the specified translation context & configured translator options.
     *
     * If no locale is specified in the translation context, or if the specified locale does not exist in the configured
     * translation catalog, the configured fallback locale will be used instead.
     *
     * If no fallback locale is specified either, or if the fallback locale does not exist in the configured translation
     * catalog, the key will be returned as-is.
     *
     * If the specified key does not exist in the configured translation catalog for the specified locale, it will
     * be retrieved using the fallback locale instead, and if that fails too, the key will be returned as-is.
     *
     * @param key The key to translate.
     * @param context Optional translation context.
     */
    translate( key: Key, context?: Context ): string

}
