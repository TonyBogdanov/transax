import { LocaleType } from './LocaleType';
import { ContextParamsType } from './ContextParamsType';
import { ContextGlobalsType } from './ContextGlobalsType';

/**
 * Runtime context to be used during translation.
 */
export type ContextType = {

    /**
     * The locale to translate to.
     * If not specified, the default locale specified in the translator options will be used.
     */
    locale?: LocaleType;

    /**
     * Hashmap of parameters available to translation expressions.
     */
    params?: ContextParamsType;

    /**
     * Hashmap of globals available to translation expressions.
     */
    globals?: ContextGlobalsType;

};
