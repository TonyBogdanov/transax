import Logger from '../Logger/Logger';

import TranslatorInterface from './TranslatorInterface';
import { TranslatorOptionsType } from '../Type/TranslatorOptionsType';
import { KeyType } from '../Type/KeyType';
import { ContextType } from '../Type/ContextType';
import TranslatorOptions from './TranslatorOptions';

/**
 * Default implementation of the {@link TranslatorInterface}.
 */
export default class Translator implements TranslatorInterface {

    /**
     * The options.
     *
     * @private
     */
    private readonly options: TranslatorOptions;

    /**
     * Creates a new instance.
     *
     * @param options Customizes the translator.
     */
    constructor( options: TranslatorOptionsType = {} ) {
        this.options = options instanceof TranslatorOptions ? options : new TranslatorOptions( options );
    }

    /**
     * @inheritDoc
     */
    translate( key: KeyType, context: ContextType = {} ): string {
        if ( context.locale ) {
            if ( context.locale in this.options.translations ) {
                if ( key in this.options.translations[ context.locale ] ) {
                    const provider = this.options.translations[ context.locale ][ key ];
                    return 'string' === typeof provider ? provider : provider(
                        context.params ?? {},
                        context.globals ?? {},
                    );
                }

                this.options.logger?.verbose( `Key "${ key }" does not exist in the catalog for locale: "${
                    context.locale }", resorting to fallback locale.` );
            } else {
                this.options.logger?.verbose( `Locale: "${
                    context.locale }" does not exist in the catalog, resorting to fallback locale.` );
            }
        } else {
            this.options.logger?.verbose( `Locale is not specified, resorting to fallback locale.` );
        }

        if ( this.options.fallbackLocale ) {
            if ( this.options.fallbackLocale in this.options.translations ) {
                if ( key in this.options.translations[ this.options.fallbackLocale ] ) {
                    const provider = this.options.translations[ this.options.fallbackLocale ][ key ];
                    return 'string' === typeof provider ? provider : provider(
                        context.params ?? {},
                        context.globals ?? {},
                    );
                }

                this.options.logger?.log( `Key: "${ key }" does not exist in the catalog for fallback locale: "${
                    this.options.fallbackLocale }".` );
            } else {
                this.options.logger?.log( `Fallback locale: "${
                    this.options.fallbackLocale }" does not exist in the catalog.` );
            }
        } else {
            this.options.logger?.log( `Fallback locale is not specified.` );
        }

        return key;
    }

}
