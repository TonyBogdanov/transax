import { expect, jest } from '@jest/globals';
import { Translator, Options, Dictionary } from '../src/Translator';

const dictionary = {
    en: {
        test: () => 'english',
        alt: () => 'fallback',
    },
    de: {
        test: () => 'german',
    },
};

const opFoundFallback = new Options( { fallbackLocale: 'en', loggerOptions: { verbose: true } } );
const opMissingFallback = new Options( { fallbackLocale: 'bg', loggerOptions: { verbose: true } } );
const opUndefinedFallback = new Options( { loggerOptions: { verbose: true } } );

function runTest(
    options: Options,
    test: ( translator: Translator ) => void,
    expectLog?: string,
    expectVerbose?: string,
): void {
    const translator = new Translator( dictionary, options );
    const spyLog = jest.spyOn( translator.logger, 'log' );
    const spyVerbose = jest.spyOn( translator.logger, 'verbose' );

    test( translator );

    expectLog && expect( spyLog ).toHaveBeenCalledWith( expectLog );
    expectVerbose && expect( spyVerbose ).toHaveBeenCalledWith( expectVerbose );

    spyLog.mockClear();
    spyVerbose.mockClear();
}

describe( 'Translator', () => {
    describe( 'constructor()', () => {
        test( 'accepts nothing for options', () => {
            expect( new Translator( {} ).options ).toStrictEqual( new Options() );
        } );

        test( 'accepts Options object', () => {
            const options = new Options();
            expect( new Translator( {}, options ).options ).toBe( options );
        } );

        test( 'accepts empty object for options', () => {
            const translator = new Translator( {}, {} );
            expect( translator.options ).toBeInstanceOf( Options );
            expect( translator.options ).toStrictEqual( new Options() );
        } );
    } );

    describe( 'translate()', () => {
        test( 'locale: found, fallback: found, key: found => translate', () => {
            runTest( opFoundFallback, translator => {
                expect( translator.translate( 'test', { locale: 'de' } ) ).toBe( 'german' );
            } );
        } );

        test( 'locale: found, fallback: found, key: missing => translate from fallback, log', () => {
            runTest( opFoundFallback, translator => {
                expect( translator.translate( 'alt', { locale: 'de' } ) ).toBe( 'fallback' );
            }, undefined, 'Key "alt" does not exist in dictionary for locale: "de", resorting to fallback locale.' );
        } );

        test( 'locale: found, fallback: missing, key: found => translate', () => {
            runTest( opMissingFallback, translator => {
                expect( translator.translate( 'test', { locale: 'de' } ) ).toBe( 'german' );
            } );
        } );

        test( 'locale: found, fallback: missing, key: missing => return key, log', () => {
            runTest( opMissingFallback, translator => {
                expect( translator.translate( 'alt', { locale: 'de' } ) ).toBe( 'alt' );
            }, 'Fallback locale: "bg" does not exist in dictionary.', 'Key "alt" does not exist in dictionary for' +
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
            }, 'Fallback locale is not specified.', 'Key "alt" does not exist in dictionary for locale: "de",' +
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
            }, 'Fallback locale: "bg" does not exist in dictionary.', 'Locale is not specified, resorting to' +
                ' fallback locale.' );
        } );

        test( 'locale: missing, fallback: missing, key: missing => return key, log', () => {
            runTest( opMissingFallback, translator => {
                expect( translator.translate( 'alt' ) ).toBe( 'alt' );
            }, 'Fallback locale: "bg" does not exist in dictionary.', 'Locale is not specified, resorting to' +
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
            }, 'Fallback locale: "bg" does not exist in dictionary.', 'Locale is not specified, resorting to' +
                ' fallback locale.' );
        } );

        test( 'locale: undefined, fallback: missing, key: missing => return key, log', () => {
            runTest( opMissingFallback, translator => {
                expect( translator.translate( 'alt' ) ).toBe( 'alt' );
            }, 'Fallback locale: "bg" does not exist in dictionary.', 'Locale is not specified, resorting to' +
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
