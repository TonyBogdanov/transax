import { expect } from '@jest/globals';
import {
    ArrayAccessToken,
    Compiler,
    ExpressionToken,
    IdentifierToken,
    LiteralToken,
    ObjectAccessToken,
    Options,
    TextToken,
    Token
} from '../src/Compiler';

function runTokenize( code: string, expectedTokens: Token[] = [] ): void {
    test( code, () => expect( new Compiler().tokenize( code ) ).toStrictEqual( expectedTokens ) );
}

function runCompile( code: string, expectedOutput: string ): void {
    test( code, () => expect( new Compiler().compile( code ) ).toStrictEqual( expectedOutput ) );
}

describe( 'Compiler', () => {
    describe( 'constructor()', () => {
        test( 'accepts nothing', () => {
            expect( new Compiler().options ).toStrictEqual( new Options() );
        } );

        test( 'accepts an Options object', () => {
            const options = new Options();
            expect( new Compiler( options ).options ).toBe( options );
        } );

        test( 'accepts an empty object', () => {
            const compiler = new Compiler( {} );
            expect( compiler.options ).toBeInstanceOf( Options );
            expect( compiler.options ).toStrictEqual( new Options() );
        } );
    } );

    describe( 'tokenize()', () => {
        // text tokens
        runTokenize( '', [] );
        runTokenize( 'foo', [ new TextToken( 'foo', 1, 1 ) ] );
        runTokenize( '{invalid} {{token} {here}}', [ new TextToken( '{invalid} {{token} {here}}', 1, 1 ) ] );

        // literal: null
        runTokenize( '{{ null }}', [ new LiteralToken( null, 'null', 1, 4 ) ] );
        runTokenize( '{{ NULL }}', [ new LiteralToken( null, 'NULL', 1, 4 ) ] );

        // literal: integer
        runTokenize( '{{ 0 }}', [ new LiteralToken( 0, '0', 1, 4 ) ] );
        runTokenize( '{{ 123 }}', [ new LiteralToken( 123, '123', 1, 4 ) ] );
        runTokenize( '{{ -123 }}', [ new LiteralToken( -123, '-123', 1, 4 ) ] );

        // literal: float
        runTokenize( '{{ 0.0 }}', [ new LiteralToken( 0, '0.0', 1, 4 ) ] );
        runTokenize( '{{ .0 }}', [ new LiteralToken( 0, '.0', 1, 4 ) ] );
        runTokenize( '{{ 0.123 }}', [ new LiteralToken( 0.123, '0.123', 1, 4 ) ] );
        runTokenize( '{{ .123 }}', [ new LiteralToken( 0.123, '.123', 1, 4 ) ] );
        runTokenize( '{{ -0.123 }}', [ new LiteralToken( -0.123, '-0.123', 1, 4 ) ] );
        runTokenize( '{{ -.123 }}', [ new LiteralToken( -0.123, '-.123', 1, 4 ) ] );
        runTokenize( '{{ 1.23000 }}', [ new LiteralToken( 1.23, '1.23000', 1, 4 ) ] );
        runTokenize( '{{ -1.23000 }}', [ new LiteralToken( -1.23, '-1.23000', 1, 4 ) ] );

        // literal: string
        runTokenize( `{{ '' }}`, [ new LiteralToken( '', `''`, 1, 4 ) ] );
        runTokenize( `{{ "" }}`, [ new LiteralToken( '', `""`, 1, 4 ) ] );
        runTokenize( '{{ `` }}', [ new LiteralToken( '', '``', 1, 4 ) ] );
        runTokenize( `{{ 'is \\'escaped\\'' }}`, [ new LiteralToken( `is 'escaped'`, `'is \\'escaped\\''`, 1, 4 ) ] );
        runTokenize( `{{ "is \\"escaped\\"" }}`, [ new LiteralToken( `is "escaped"`, `"is \\"escaped\\""`, 1, 4 ) ] );
        runTokenize( '{{ `is \\`escaped\\`` }}', [ new LiteralToken( 'is `escaped`', '`is \\`escaped\\``', 1, 4 ) ] );

        // expression: identifier
        runTokenize( '{{ foo }}', [ new ExpressionToken( new IdentifierToken( 'foo', false, 'foo', 1, 4 ), [],
            'foo', 1, 4 ) ] );

        runTokenize( '{{ @foo }}', [ new ExpressionToken( new IdentifierToken( 'foo', true, '@foo', 1, 4 ), [],
            '@foo', 1, 4 ) ] );

        // expression: object access
        runTokenize( '{{ foo.bar.baz }}', [ new ExpressionToken( new IdentifierToken( 'foo', false, 'foo', 1, 4 ), [
            new ObjectAccessToken( 'bar', '.bar', 1, 7 ),
            new ObjectAccessToken( 'baz', '.baz', 1, 11 ),
        ], 'foo.bar.baz', 1, 4 ) ] );

        // expression: array access
        runTokenize( `{{ foo[0]['bar'].mixed[ @baz.inner ] }}`, [
            new ExpressionToken( new IdentifierToken( 'foo', false, 'foo', 1, 4 ), [
                new ArrayAccessToken( new LiteralToken( 0, '0', 1, 8 ), '[0]', 1, 7 ),
                new ArrayAccessToken( new LiteralToken( 'bar', `'bar'`, 1, 11 ), `['bar']`, 1, 10 ),
                new ObjectAccessToken( 'mixed', '.mixed', 1, 17 ),
                new ArrayAccessToken( new ExpressionToken( new IdentifierToken( 'baz', true, '@baz', 1, 25 ), [
                    new ObjectAccessToken( 'inner', '.inner', 1, 29 ),
                ], '@baz.inner', 1, 25 ), '[ @baz.inner ]', 1, 23 ),
            ], `foo[0]['bar'].mixed[ @baz.inner ]`, 1, 4 ),
        ] );
    } );

    describe( 'compile()', () => {
        // text tokens
        runCompile( '', `()=>""` );
        runCompile( 'foo', `()=>"foo"` );
        runCompile( '{invalid} {{token} {here}}', `()=>"{invalid} {{token} {here}}"` );

        // literal: null
        runCompile( '{{ null }}', `()=>""` );
        runCompile( '{{ NULL }}', `()=>""` );

        // literal: integer
        runCompile( '{{ 0 }}', `()=>""+0` );
        runCompile( '{{ 123 }}', `()=>""+123` );
        runCompile( '{{ -123 }}', `()=>""+-123` );

        // literal: float
        runCompile( '{{ 0.0 }}', `()=>""+0` );
        runCompile( '{{ .0 }}', `()=>""+0` );
        runCompile( '{{ 0.123 }}', `()=>""+0.123` );
        runCompile( '{{ .123 }}', `()=>""+0.123` );
        runCompile( '{{ -0.123 }}', `()=>""+-0.123` );
        runCompile( '{{ -.123 }}', `()=>""+-0.123` );
        runCompile( '{{ 1.23000 }}', `()=>""+1.23` );
        runCompile( '{{ -1.23000 }}', `()=>""+-1.23` );

        // literal: string
        runCompile( `{{ '' }}`, `()=>""` );
        runCompile( `{{ "" }}`, `()=>""` );
        runCompile( '{{ `` }}', `()=>""` );
        runCompile( `{{ 'is \\'escaped\\'' }}`, `()=>"is 'escaped'"` );
        runCompile( `{{ "is \\"escaped\\"" }}`, `()=>"is \\"escaped\\""` );
        runCompile( '{{ `is \\`escaped\\`` }}', `()=>"is \`escaped\`"` );

        // expression: identifier
        runCompile( '{{ foo }}', `({foo})=>""+foo` );
        runCompile( '{{ @foo }}', `(_,{foo})=>""+foo` );

        // expression: object access
        runCompile( '{{ foo.bar.baz }}', `({foo})=>""+foo.bar.baz` );

        // expression: array access
        runCompile( `{{ foo[0]['bar'].mixed[ @baz.inner ] }}`, `({foo},{baz})=>""+foo[0]["bar"].mixed[baz.inner]` );
    } );
} );
