import Logger from '../Logger/Logger';
import LoggerInterface from '../Logger/LoggerInterface';

import TranslatorInterface from './TranslatorInterface';
import { CompiledCatalog } from '../Type/CompiledCatalog';
import { TranslatorOptions } from './TranslatorOptions';
import { Locale } from '../Type/Locale';
import { Key } from '../Type/Key';
import { Context } from '../Type/Context';

class Options {

    translations: CompiledCatalog;
    fallbackLocale: Locale | undefined;
    logger: LoggerInterface;

    constructor( data: TranslatorOptions = {} ) {
        this.translations = data.translations ?? {};
        this.fallbackLocale = data.fallbackLocale ?? undefined;
        this.logger = data.logger ?? new Logger( { namespace: 'TRANSAX:TRANSLATOR' } );
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
    translate( key: Key, context: Context = {} ): string {
        if ( context.locale ) {
            if ( context.locale in this.options.translations ) {
                if ( key in this.options.translations[ context.locale ] ) {
                    const provider = this.options.translations[ context.locale ][ key ];
                    return 'string' === typeof provider ? provider : provider(
                        context.params ?? {},
                        context.globals ?? {},
                    );
                }

                this.options.logger.verbose( `Key "${ key }" does not exist in the catalog for locale: "${
                    context.locale }", resorting to fallback locale.` );
            } else {
                this.options.logger.verbose( `Locale: "${
                    context.locale }" does not exist in the catalog, resorting to fallback locale.` );
            }
        } else {
            this.options.logger.verbose( `Locale is not specified, resorting to fallback locale.` );
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

                this.options.logger.log( `Key: "${ key }" does not exist in the catalog for fallback locale: "${
                    this.options.fallbackLocale }".` );
            } else {
                this.options.logger.log( `Fallback locale: "${
                    this.options.fallbackLocale }" does not exist in the catalog.` );
            }
        } else {
            this.options.logger.log( `Fallback locale is not specified.` );
        }

        return key;
    }

}
