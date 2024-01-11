import { TranslatorOptionsType } from '../Type/TranslatorOptionsType';
import { CompiledCatalogType } from '../Type/CompiledCatalogType';
import { LocaleType } from '../Type/LocaleType';

import LoggerInterface from '../Logger/LoggerInterface';

import Logger from '../Logger/Logger';

/**
 * Options for the {@link Translator}.
 */
export default class TranslatorOptions implements TranslatorOptionsType {

    /** @inheritDoc */
    translations: CompiledCatalogType;

    /** @inheritDoc */
    fallbackLocale: LocaleType;

    /** @inheritDoc */
    logger: LoggerInterface;

    /**
     * Creates a new instance.
     *
     * @param options
     */
    constructor( options: TranslatorOptionsType = {} ) {
        if ( null === options || 'object' !== typeof options ) {
            throw new TypeError( 'Expected options to be an object.' );
        }

        if ( 'undefined' === typeof options.translations ) {
            this.translations = {};
        } else if ( null !== options.translations && 'object' === typeof options.translations ) {
            this.translations = options.translations;
        } else {
            throw new TypeError( 'Expected options.translations to be an object.' );
        }

        if ( 'undefined' === typeof options.fallbackLocale ) {
            this.fallbackLocale = '';
        } else if ( 'string' === typeof options.fallbackLocale ) {
            this.fallbackLocale = options.fallbackLocale;
        } else {
            throw new TypeError( 'Expected options.fallbackLocale to be a string.' );
        }

        if ( 'undefined' === typeof options.logger ) {
            this.logger = new Logger( { namespace: 'TRANSAX:COMPILER' } );
        } else if ( options.logger instanceof Logger ) { // should be LoggerInterface, but currently not possible in TS
            this.logger = options.logger;
        } else {
            throw new TypeError( 'Expected options.logger to be an instance of LoggerInterface.' );
        }
    }

}
