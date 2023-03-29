import { expect, jest } from '@jest/globals';

import Translator from '../src/Translator/Translator';
import Logger from '../src/Logger/Logger';
import { TranslatorOptions } from '../src/Translator/TranslatorOptions';

const translations = {
    en: {
        test: () => 'english',
        alt: () => 'fallback',
    },
    de: {
        test: () => 'german',
    },
};

const opFoundFallback = { fallbackLocale: 'en', logger: new Logger( { verbose: true } ) };
const opMissingFallback = { fallbackLocale: 'bg', logger: new Logger( { verbose: true } ) };
const opUndefinedFallback = { logger: new Logger( { verbose: true } ) };

function runTest(
    options: TranslatorOptions,
    test: ( translator: Translator ) => void,
    expectLog?: string,
    expectVerbose?: string,
): void {
    const translator = new Translator( Object.assign( { translations }, options ) );

    // @ts-ignore
    const spyLog = jest.spyOn( translator.options.logger, 'log' );

    // @ts-ignore
    const spyVerbose = jest.spyOn( translator.options.logger, 'verbose' );

    test( translator );

    expectLog && expect( spyLog ).toHaveBeenCalledWith( expectLog );
    expectVerbose && expect( spyVerbose ).toHaveBeenCalledWith( expectVerbose );

    spyLog.mockClear();
    spyVerbose.mockClear();
}

describe( 'Translator', () => {
    describe( 'translate()', () => {
        test( 'locale: defined + found, key: found => translate', () => {
            runTest( opFoundFallback, translator => {
                expect( translator.translate( 'test', { locale: 'de' } ) ).toBe( 'german' );
            } );
        } );

        test( 'locale: defined + found, key: missing => translate from fallback', () => {
            runTest( opFoundFallback, translator => {
                expect( translator.translate( 'alt', { locale: 'de' } ) ).toBe( 'fallback' );
            }, undefined, 'Key "alt" does not exist in the catalog for locale: "de", resorting to fallback locale.' );
        } );

        test( 'locale: defined + missing => translate from fallback', () => {
            runTest( opFoundFallback, translator => {
                expect( translator.translate( 'test', { locale: 'bg' } ) ).toBe( 'english' );
            }, undefined, 'Locale: "bg" does not exist in the catalog, resorting to fallback locale.' );
        } );

        test( 'locale: undefined => translate from fallback', () => {
            runTest( opFoundFallback, translator => {
                expect( translator.translate( 'test' ) ).toBe( 'english' );
            }, undefined, 'Locale is not specified, resorting to fallback locale.' );
        } );

        test( 'fallback: defined + found, key: found => translate', () => {
            runTest( opFoundFallback, translator => {
                expect( translator.translate( 'test' ) ).toBe( 'english' );
            } );
        } );

        test( 'fallback: defined + found, key: missing => log', () => {
            runTest( opFoundFallback, translator => {
                expect( translator.translate( 'missing' ) ).toBe( 'missing' );
            }, 'Key: "missing" does not exist in the catalog for fallback locale: "en".' );
        } );

        test( 'fallback: defined + missing => log', () => {
            runTest( opMissingFallback, translator => {
                expect( translator.translate( 'test' ) ).toBe( 'test' );
            }, 'Fallback locale: "bg" does not exist in the catalog.' );
        } );

        test( 'fallback: undefined => log', () => {
            runTest( opUndefinedFallback, translator => {
                expect( translator.translate( 'test' ) ).toBe( 'test' );
            }, 'Fallback locale is not specified.' );
        } );
    } );
} );
