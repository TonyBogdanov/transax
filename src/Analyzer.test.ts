import { expect, jest } from '@jest/globals';
import { Token, Analyzer, Options } from './Analyzer';

function run( code: string, expectedTokens: Token[] = [], expectedSkips: string[] = [], options: Object = {} ): void {
    test( code, () => {
        const spy = jest.spyOn( console, 'warn' );
        expect( new Analyzer( options ).analyze( code ) ).toStrictEqual( expectedTokens );

        if ( 0 === expectedSkips.length ) {
            return;
        }

        expect( spy ).toHaveBeenCalledTimes( expectedSkips.length );
        for ( const message of expectedSkips ) {
            expect( spy ).toHaveBeenCalledWith( expect.stringContaining( message ) );
        }

        spy.mockClear();
    } );
}

describe( 'Analyzer', () => {
    describe( 'constructor()', () => {
        test( 'accepts nothing', () => {
            expect( new Analyzer().options ).toStrictEqual( new Options() );
        } );

        test( 'accepts an Options object', () => {
            const options = new Options();
            expect( new Analyzer( options ).options ).toBe( options );
        } );

        test( 'accepts an empty object', () => {
            const analyzer = new Analyzer( {} );
            expect( analyzer.options ).toBeInstanceOf( Options );
            expect( analyzer.options ).toStrictEqual( new Options() );
        } );

        test( 'allows selectively overriding options values', () => {
            expect( new Analyzer( { source: '/file.js' } ).options.source ).toBe( '/file.js' );
            expect( new Analyzer( { names: [ 't' ] } ).options.names ).toStrictEqual( [ 't' ] );
            expect( new Analyzer( { verbose: false } ).options.verbose ).toBe( false );
        } );
    } );

    describe( 'analyze()', function () {
        // non-token text
        run( `` );
        run( `non-token text` );

        // single, double & caret quotes for the key
        run( `$t( 'key' )`, [ new Token( '$t', 'key', `$t( 'key' )`, 1, 1 ) ] );
        run( `$t( "key" )`, [ new Token( '$t', 'key', `$t( "key" )`, 1, 1 ) ] );
        run( '$t( `key` )', [ new Token( '$t', 'key', '$t( `key` )', 1, 1 ) ] );

        // single, double & caret quotes for the key with escaped quotes
        run( `$t( 'with \\'escaped\\'' )`, [
            new Token( '$t', `with 'escaped'`, `$t( 'with \\'escaped\\'' )`, 1, 1 ) ],
        );

        run( `$t( "with \\"escaped\\"" )`, [
            new Token( '$t', `with "escaped"`, `$t( "with \\"escaped\\"" )`, 1, 1 ),
        ] );

        run( '$t( `with \\`escaped\\`` )', [
            new Token( '$t', 'with `escaped`', '$t( `with \\`escaped\\`` )', 1, 1 ),
        ] );

        // string interpolation in the key is not supported, but valid tokens within are still detected
        run( 'interpolation: $t( `${ is } not supported` )', [] );
        run( 'interpolation: $t( `is ${ not } supported` )', [] );
        run( 'interpolation: $t( `is supported ${ $t( "nested" ) }` )', [
            new Token( '$t', 'nested', '$t( "nested" )', 1, 37 ),
        ] );

        // we can override the default settings as argument to the analyzer constructor
        run( 'now( "valid" )', [
            new Token( 'now', 'valid', 'now( "valid" )', 1, 1 ),
        ], [], { names: [ 'now' ] } );

        // surrounding text is not tokenized
        run( 'prefix.$t( `key` ).suffix', [ new Token( '$t', 'key', '$t( `key` )', 1, 8 ) ] );
        run( `$t( 'first' )$t( "second", { foo: 'bar' nested: $t( \`baz\`, null ) } )`, [
            new Token( '$t', 'first', `$t( 'first' )`, 1, 1 ),
            new Token( '$t', 'second', `$t( "second",`, 1, 14 ),
            new Token( '$t', 'baz', `$t( \`baz\`,`, 1, 49 ),
        ] );

        // tokens with foreign names are skipped
        run( 'skip( "this" ) and( "that" )', [], [
            'Skipping: skip( "this" )',
            'Skipping: and( "that" )',
        ] );

        // the "skipped" warning can also contain info about a source file, useful when dealing with multiple files
        run( 'skip( "this" )', [], [ 'Skipping: skip( "this" ) at line: 1, column: 1, because "skip" is not in the' +
            ' list of configured names in /path/to/file.js', ], { source: '/path/to/file.js' } );
    } );
} );
