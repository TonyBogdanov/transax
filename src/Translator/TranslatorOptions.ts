import LoggerInterface from '../Logger/LoggerInterface';

import { TranslationLocale } from './TranslationLocale';
import { TranslationCompiledCatalog } from './TranslationCompiledCatalog';

/**
 * Options for the {@link Translator}.
 */
export type TranslatorOptions = {

    /**
     * Optional compiled translation catalog.
     * Defaults to `{}`.
     */
    translations?: TranslationCompiledCatalog;

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
