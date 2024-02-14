import { LocaleType } from './LocaleType';
import { CompiledCatalogType } from './CompiledCatalogType';

import LoggerInterface from '../Logger/LoggerInterface';

import Translator from '../Translator/Translator';

/**
 * Options for the {@link Translator}.
 */
export type TranslatorOptionsType = {

    /**
     * Optional compiled translation catalog.
     * Defaults to `{}`.
     */
    translations?: CompiledCatalogType;

    /**
     * Optional fallback locale.
     * Defaults to `undefined`.
     */
    fallbackLocale?: LocaleType;

    /**
     * Optional logger instance.
     * Defaults to `new Logger( { namespace: 'TRANSAX:TRANSLATOR' } )`.
     */
    logger?: LoggerInterface;

}
