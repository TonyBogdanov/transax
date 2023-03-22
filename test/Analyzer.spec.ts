import { expect, jest } from '@jest/globals';

import Analyzer from '../src/Analyzer/Analyzer';
import AnalyzerToken from '../src/Analyzer/AnalyzerToken';
import { TranslationKey } from '../src/Type/TranslationKey';

function run(
    code: string,
    expectedTokens: AnalyzerToken[] = [],
    expectedSkips: string[][] = [],
    options: Object = {},
    source?: string,
): void {
    test( code, () => {
        const analyzer = new Analyzer( options );

        // @ts-ignore
        const skip = jest.spyOn( analyzer, 'skip' );

        expect( analyzer.analyze( code, source ) ).toStrictEqual( expectedTokens );
        if ( 0 === expectedSkips.length ) {
            return;
        }

        expect( skip ).toHaveBeenCalledTimes( expectedSkips.length );
        for ( let i = 1; i <= expectedSkips.length; i++ ) {
            expect( skip ).toHaveBeenNthCalledWith( i, expect.objectContaining( { text: expectedSkips[ i - 1 ][0] } ),
                expectedSkips[ i - 1 ][1] );
        }

        skip.mockClear();
    } );
}

describe( 'Analyzer', () => {
    describe( 'analyze()', function () {
        // non-token text
        run( `` );
        run( `non-token text` );

        // single, double & caret quotes for the key
        run( `$t( 'key' )`, [ new AnalyzerToken( '$t', 'key', `$t( 'key' )`, 1, 1 ) ] );
        run( `$t( "key" )`, [ new AnalyzerToken( '$t', 'key', `$t( "key" )`, 1, 1 ) ] );
        run( '$t( `key` )', [ new AnalyzerToken( '$t', 'key', '$t( `key` )', 1, 1 ) ] );

        // single, double & caret quotes for the key with escaped quotes
        run( `$t( 'with \\'escaped\\'' )`, [
            new AnalyzerToken( '$t', `with 'escaped'`, `$t( 'with \\'escaped\\'' )`, 1, 1 ) ],
        );

        run( `$t( "with \\"escaped\\"" )`, [
            new AnalyzerToken( '$t', `with "escaped"`, `$t( "with \\"escaped\\"" )`, 1, 1 ),
        ] );

        run( '$t( `with \\`escaped\\`` )', [
            new AnalyzerToken( '$t', 'with `escaped`', '$t( `with \\`escaped\\`` )', 1, 1 ),
        ] );

        // string interpolation in the key is not supported, but valid tokens within are still detected
        run( 'interpolation: $t( `${ is } not supported` )', [] );
        run( 'interpolation: $t( `is ${ not } supported` )', [] );
        run( 'interpolation: $t( `is supported ${ $t( "nested" ) }` )', [
            new AnalyzerToken( '$t', 'nested', '$t( "nested" )', 1, 37 ),
        ] );

        // we can override the default settings as argument to the analyzer constructor
        run( 'now( "valid" )', [
            new AnalyzerToken( 'now', 'valid', 'now( "valid" )', 1, 1 ),
        ], [], { names: [ 'now' ] } );

        // surrounding text is not tokenized
        run( 'prefix.$t( `key` ).suffix', [ new AnalyzerToken( '$t', 'key', '$t( `key` )', 1, 8 ) ] );
        run( `$t( 'first' )$t( "second", { foo: 'bar' nested: $t( \`baz\`, null ) } )`, [
            new AnalyzerToken( '$t', 'first', `$t( 'first' )`, 1, 1 ),
            new AnalyzerToken( '$t', 'second', `$t( "second",`, 1, 14 ),
            new AnalyzerToken( '$t', 'baz', `$t( \`baz\`,`, 1, 49 ),
        ] );

        // tokens with foreign names are skipped
        run( 'skip( "this" ) and( "that" )', [], [ [ 'skip( "this" )' ], [ 'and( "that" )' ] ], { verbose: true } );

        // the "skipped" warning can also contain info about a source file, useful when dealing with multiple files
        run( 'skip( "this" )', [], [ [ 'skip( "this" )', '/path/to/file.js' ] ], { verbose: true }, '/path/to/file.js' );

        // use a configured key formatter
        test( 'option: keyFormatter', () => {
            expect( new Analyzer( {
                keyFormatter: ( key: TranslationKey, token: AnalyzerToken ) => token.name + '.' + key.toUpperCase(),
            } ).analyze( `$t( 'key' )` ) ).toStrictEqual( [
                new AnalyzerToken( '$t', '$t.KEY', `$t( 'key' )`, 1, 1 ),
            ] );
        } );
    } );
} );
