import { Locale } from './Locale';
import { ContextParams } from './ContextParams';
import { ContextGlobals } from './ContextGlobals';

/**
 * Runtime context to be used during translation.
 */
export type Context = {

    /**
     * The locale to translate to.
     * If not specified, the default locale specified in the translator options will be used.
     */
    locale?: Locale;

    /**
     * Hashmap of parameters available to translation expressions.
     */
    params?: ContextParams;

    /**
     * Hashmap of globals available to translation expressions.
     */
    globals?: ContextGlobals;

};
