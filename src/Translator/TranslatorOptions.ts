import LoggerInterface from '../Logger/LoggerInterface';

import { Locale } from '../Type/Locale';
import { CompiledCatalog } from '../Type/CompiledCatalog';

/**
 * Options for the {@link Translator}.
 */
export type TranslatorOptions = {

    /**
     * Optional compiled translation catalog.
     * Defaults to `{}`.
     */
    translations?: CompiledCatalog;

    /**
     * Optional fallback locale.
     * Defaults to `undefined`.
     */
    fallbackLocale?: Locale;

    /**
     * Optional logger instance.
     * Defaults to `new Logger( { namespace: 'TRANSAX:TRANSLATOR' } )`.
     */
    logger?: LoggerInterface;

}
