import { TranslationLocale } from './TranslationLocale';
import { TranslationContextParams } from './TranslationContextParams';
import { TranslationContextGlobals } from './TranslationContextGlobals';

/**
 * Runtime context to be used during translation.
 */
export type TranslationContext = {

    /**
     * The locale to translate to.
     * If not specified, the default locale specified in the translator options will be used.
     */
    locale?: TranslationLocale;

    /**
     * Hashmap of parameters available to translation expressions.
     */
    params?: TranslationContextParams;

    /**
     * Hashmap of globals available to translation expressions.
     */
    globals?: TranslationContextGlobals;

};
