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
        test( 'locale: found, fallback: found, key: found => translate', () => {
            runTest( opFoundFallback, translator => {
                expect( translator.translate( 'test', { locale: 'de' } ) ).toBe( 'german' );
            } );
        } );

        test( 'locale: found, fallback: found, key: missing => translate from fallback, log', () => {
            runTest( opFoundFallback, translator => {
                expect( translator.translate( 'alt', { locale: 'de' } ) ).toBe( 'fallback' );
            }, undefined, 'Key "alt" does not exist in the catalog for locale: "de", resorting to fallback locale.' );
        } );

        test( 'locale: found, fallback: missing, key: found => translate', () => {
            runTest( opMissingFallback, translator => {
                expect( translator.translate( 'test', { locale: 'de' } ) ).toBe( 'german' );
            } );
        } );

        test( 'locale: found, fallback: missing, key: missing => return key, log', () => {
            runTest( opMissingFallback, translator => {
                expect( translator.translate( 'alt', { locale: 'de' } ) ).toBe( 'alt' );
            }, 'Fallback locale: "bg" does not exist in the catalog.', 'Key "alt" does not exist in the catalog for' +
                ' locale: "de", resorting to fallback locale.' );
        } );

        test( 'locale: found, fallback: undefined, key: found => translate', () => {
            runTest( opUndefinedFallback, translator => {
                expect( translator.translate( 'test', { locale: 'de' } ) ).toBe( 'german' );
            } );
        } );

        test( 'locale: found, fallback: undefined, key: missing => return key, log', () => {
            runTest( opUndefinedFallback, translator => {
                expect( translator.translate( 'alt', { locale: 'de' } ) ).toBe( 'alt' );
            }, 'Fallback locale is not specified.', 'Key "alt" does not exist in the catalog for locale: "de",' +
                ' resorting to fallback locale.' );
        } );

        test( 'locale: missing, fallback: found, key: found => translate from fallback, log', () => {
            runTest( opFoundFallback, translator => {
                expect( translator.translate( 'test' ) ).toBe( 'english' );
            } );
        } );

        test( 'locale: missing, fallback: found, key: missing => translate from fallback, log', () => {
            runTest( opFoundFallback, translator => {
                expect( translator.translate( 'alt' ) ).toBe( 'fallback' );
            }, undefined, 'Locale is not specified, resorting to fallback locale.' );
        } );

        test( 'locale: missing, fallback: missing, key: found => return key, log', () => {
            runTest( opMissingFallback, translator => {
                expect( translator.translate( 'test' ) ).toBe( 'test' );
            }, 'Fallback locale: "bg" does not exist in the catalog.', 'Locale is not specified, resorting to' +
                ' fallback locale.' );
        } );

        test( 'locale: missing, fallback: missing, key: missing => return key, log', () => {
            runTest( opMissingFallback, translator => {
                expect( translator.translate( 'alt' ) ).toBe( 'alt' );
            }, 'Fallback locale: "bg" does not exist in the catalog.', 'Locale is not specified, resorting to' +
                ' fallback locale.' );
        } );

        test( 'locale: missing, fallback: undefined, key: found => return key, log', () => {
            runTest( opUndefinedFallback, translator => {
                expect( translator.translate( 'test' ) ).toBe( 'test' );
            }, 'Fallback locale is not specified.', 'Locale is not specified, resorting to fallback locale.' );
        } );

        test( 'locale: missing, fallback: undefined, key: missing => return key, log', () => {
            runTest( opUndefinedFallback, translator => {
                expect( translator.translate( 'alt' ) ).toBe( 'alt' );
            }, 'Fallback locale is not specified.', 'Locale is not specified, resorting to fallback locale.' );
        } );

        test( 'locale: undefined, fallback: found, key: found => translate from fallback, log', () => {
            runTest( opFoundFallback, translator => {
                expect( translator.translate( 'test' ) ).toBe( 'english' );
            }, undefined, 'Locale is not specified, resorting to fallback locale.' );
        } );

        test( 'locale: undefined, fallback: found, key: missing => translate from fallback, log', () => {
            runTest( opFoundFallback, translator => {
                expect( translator.translate( 'alt' ) ).toBe( 'fallback' );
            }, undefined, 'Locale is not specified, resorting to fallback locale.' );
        } );

        test( 'locale: undefined, fallback: missing, key: found => return key, log', () => {
            runTest( opMissingFallback, translator => {
                expect( translator.translate( 'test' ) ).toBe( 'test' );
            }, 'Fallback locale: "bg" does not exist in the catalog.', 'Locale is not specified, resorting to' +
                ' fallback locale.' );
        } );

        test( 'locale: undefined, fallback: missing, key: missing => return key, log', () => {
            runTest( opMissingFallback, translator => {
                expect( translator.translate( 'alt' ) ).toBe( 'alt' );
            }, 'Fallback locale: "bg" does not exist in the catalog.', 'Locale is not specified, resorting to' +
                ' fallback locale.' );
        } );

        test( 'locale: undefined, fallback: undefined, key: found => return key, log', () => {
            runTest( opUndefinedFallback, translator => {
                expect( translator.translate( 'test' ) ).toBe( 'test' );
            }, 'Fallback locale is not specified.', 'Locale is not specified, resorting to fallback locale.' );
        } );

        test( 'locale: undefined, fallback: undefined, key: missing => return key, log', () => {
            runTest( opUndefinedFallback, translator => {
                expect( translator.translate( 'alt' ) ).toBe( 'alt' );
            }, 'Fallback locale is not specified.', 'Locale is not specified, resorting to fallback locale.' );
        } );
    } );
} );
