import { Logger, Options as LoggerOptions } from './Logger';

export type Dictionary = Record<Locale, DictionaryEntry>;
export type DictionaryEntry = Record<TranslationKey, TranslationFunction>;

export type Locale = string;
export type TranslationKey = string;

export type TranslationFunction = ( params: TranslationFunctionParams, globals: TranslationFunctionGlobals ) => string;
export type TranslationFunctionParams = Record<string, any>;
export type TranslationFunctionGlobals = Record<string, any>;

export interface TranslateOptions {
    locale?: Locale;
    params?: TranslationFunctionParams;
    globals?: TranslationFunctionGlobals;
}

export class Options {
    fallbackLocale: Locale;
    loggerOptions: LoggerOptions | Object = {};

    constructor( values: Object = {} ) {
        if ( 'fallbackLocale' in values ) {
            // TODO validate
            this.fallbackLocale = <Locale> values.fallbackLocale;
        }

        if ( 'loggerOptions' in values ) {
            // TODO validate
            this.loggerOptions = <LoggerOptions | Object> values.loggerOptions;
        }
    }
}

export class Translator {
    dictionary: Dictionary;
    options: Options;
    logger: Logger;

    constructor( dictionary: Dictionary, options: Options | Object = {} ) {
        // TODO validate dictionary
        this.dictionary = dictionary;
        this.options = options instanceof Options ? options : new Options( options );
        this.logger = new Logger( 'Generator', this.options.loggerOptions );
    }

    translate( key: string, options: TranslateOptions = {} ): string {
        // TODO validation of options

        if ( options.locale ) {
            if ( options.locale in this.dictionary ) {
                if ( key in this.dictionary[ options.locale ] ) {
                    return this.dictionary[ options.locale ][ key ]( options.params, options.globals );
                }

                this.logger.verbose( `Key "${ key }" does not exist in dictionary for locale: "${
                    options.locale }", resorting to fallback locale.` );
            } else {
                this.logger.verbose( `Locale: "${
                    options.locale }" does not exist in dictionary, resorting to fallback locale.` );
            }
        } else {
            this.logger.verbose( `Locale is not specified, resorting to fallback locale.` );
        }

        if ( this.options.fallbackLocale ) {
            if ( this.options.fallbackLocale in this.dictionary ) {
                if ( key in this.dictionary[ this.options.fallbackLocale ] ) {
                    return this.dictionary[ this.options.fallbackLocale ][ key ]( options.params, options.globals );
                }

                this.logger.log( `Key: "${ key }" does not exist in dictionary for fallback locale: "${
                    this.options.fallbackLocale }".` );
            } else {
                this.logger.log( `Fallback locale: "${ this.options.fallbackLocale }" does not exist in dictionary.` );
            }
        } else {
            this.logger.log( `Fallback locale is not specified.` );
        }

        return key;
    }
}
