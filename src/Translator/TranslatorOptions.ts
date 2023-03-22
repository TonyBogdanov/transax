import LoggerInterface from '../Logger/LoggerInterface';

import { TranslationLocale } from './TranslationLocale';
import { TranslationCompiledDictionary } from './TranslationCompiledDictionary';

/**
 * Options for the {@link Translator}.
 */
export type TranslatorOptions = {

    /**
     * Optional compiled translation dictionary.
     * Defaults to `{}`.
     */
    translations?: TranslationCompiledDictionary;

    /**
     * Optional fallback locale.
     * Defaults to `undefined`.
     */
    fallbackLocale?: TranslationLocale;

    /**
     * Optional logger instance.
     * Defaults to `new Logger( { namespace: 'TRANSAX:TRANSLATOR' } )`.
     */
    logger?: LoggerInterface;

}
