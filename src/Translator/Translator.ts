import Logger from '../Logger/Logger';
import LoggerInterface from '../Logger/LoggerInterface';

import TranslatorInterface from './TranslatorInterface';
import { TranslationCompiledDictionary } from './TranslationCompiledDictionary';
import { TranslatorOptions } from './TranslatorOptions';
import { TranslationLocale } from './TranslationLocale';
import { TranslationKey } from './TranslationKey';
import { TranslationContext } from './TranslationContext';

class Options {

    translations: TranslationCompiledDictionary;
    fallbackLocale: TranslationLocale | undefined;
    logger: LoggerInterface;

    constructor( data: TranslatorOptions = {} ) {
        this.translations = data.translations ?? {};
        this.fallbackLocale = data.fallbackLocale ?? undefined;
        this.logger = data.logger ?? new Logger( { namespace: 'Translator' } );
    }

}

/**
 * Default implementation of the {@link TranslatorInterface}.
 */
export default class Translator implements TranslatorInterface {

    private readonly options: Options;

    /**
     * Creates a new instance.
     *
     * @param options Customizes the translator.
     */
    constructor( options: TranslatorOptions = {} ) {
        this.options = new Options( options );
    }

    /**
     * @inheritDoc
     */
    translate( key: TranslationKey, context: TranslationContext = {} ): string {
        if ( context.locale ) {
            if ( context.locale in this.options.translations ) {
                if ( key in this.options.translations[ context.locale ] ) {
                    return this.options.translations[ context.locale ][ key ](
                        context.params ?? {},
                        context.globals ?? {},
                    );
                }

                this.options.logger.verbose( `Key "${ key }" does not exist in dictionary for locale: "${
                    context.locale }", resorting to fallback locale.` );
            } else {
                this.options.logger.verbose( `Locale: "${
                    context.locale }" does not exist in dictionary, resorting to fallback locale.` );
            }
        } else {
            this.options.logger.verbose( `Locale is not specified, resorting to fallback locale.` );
        }

        if ( this.options.fallbackLocale ) {
            if ( this.options.fallbackLocale in this.options.translations ) {
                if ( key in this.options.translations[ this.options.fallbackLocale ] ) {
                    return this.options.translations[ this.options.fallbackLocale ][ key ](
                        context.params ?? {},
                        context.globals ?? {},
                    );
                }

                this.options.logger.log( `Key: "${ key }" does not exist in dictionary for fallback locale: "${
                    this.options.fallbackLocale }".` );
            } else {
                this.options.logger.log( `Fallback locale: "${
                    this.options.fallbackLocale }" does not exist in dictionary.` );
            }
        } else {
            this.options.logger.log( `Fallback locale is not specified.` );
        }

        return key;
    }

}
