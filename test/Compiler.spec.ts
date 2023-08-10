import { expect } from '@jest/globals';
import { LocationRange } from 'peggy';

import Compiler from '../src/Compiler/Compiler';
import CompilerToken from '../src/Compiler/CompilerToken';
import TextToken from '../src/Compiler/TextToken';
import LiteralToken from '../src/Compiler/LiteralToken';
import CallExpressionToken, {
    CallExpressionArrayAccess,
    CallExpressionInvocation,
    CallExpressionObjectAccess
} from '../src/Compiler/CallExpressionToken';
import ComparisonExpressionToken from '../src/Compiler/ComparisonExpressionToken';

function l( line: number, column: number ): LocationRange {
    return { start: { offset: 0, line, column }, end: null, source: null };
}

function runTokenize( code: string, expectedTokens: CompilerToken[] = [] ): void {
    test( code, () => expect( new Compiler().tokenize( code ) ).toStrictEqual( expectedTokens ) );
}

function runCompile( code: string, expectedOutput: string ): void {
    test( code, () => expect( new Compiler().compile( code ) ).toStrictEqual( expectedOutput ) );
}

describe( 'Compiler', () => {
    describe( 'tokenize()', () => {
        // text tokens
        runTokenize( '', [] );

        runTokenize( 'foo', [ new TextToken( 'foo', l( 1, 1 ) ) ] );
        runTokenize( '{invalid} {{token} {here}}', [ new TextToken( '{invalid} {{token} {here}}', l( 1, 1 ) ) ] );

        // literal: null
        runTokenize( '{{ null }}', [ new LiteralToken( null, 'null', l( 1, 4 ) ) ] );
        runTokenize( '{{ NULL }}', [ new LiteralToken( null, 'NULL', l( 1, 4 ) ) ] );

        // literal: boolean
        runTokenize( '{{ true }}', [ new LiteralToken( true, 'true', l( 1, 4 ) ) ] );
        runTokenize( '{{ TRUE }}', [ new LiteralToken( true, 'TRUE', l( 1, 4 ) ) ] );
        runTokenize( '{{ false }}', [ new LiteralToken( false, 'false', l( 1, 4 ) ) ] );
        runTokenize( '{{ FALSE }}', [ new LiteralToken( false, 'FALSE', l( 1, 4 ) ) ] );
        runTokenize( '{{ true }}', [ new LiteralToken( true, 'true', l( 1, 4 ) ) ] );

        // literal: integer
        runTokenize( '{{ 0 }}', [ new LiteralToken( 0, '0', l( 1, 4 ) ) ] );
        runTokenize( '{{ 123 }}', [ new LiteralToken( 123, '123', l( 1, 4 ) ) ] );
        runTokenize( '{{ -123 }}', [ new LiteralToken( -123, '-123', l( 1, 4 ) ) ] );

        // literal: float
        runTokenize( '{{ 0.0 }}', [ new LiteralToken( 0, '0.0', l( 1, 4 ) ) ] );
        runTokenize( '{{ .0 }}', [ new LiteralToken( 0, '.0', l( 1, 4 ) ) ] );
        runTokenize( '{{ 0.123 }}', [ new LiteralToken( 0.123, '0.123', l( 1, 4 ) ) ] );
        runTokenize( '{{ .123 }}', [ new LiteralToken( 0.123, '.123', l( 1, 4 ) ) ] );
        runTokenize( '{{ -0.123 }}', [ new LiteralToken( -0.123, '-0.123', l( 1, 4 ) ) ] );
        runTokenize( '{{ -.123 }}', [ new LiteralToken( -0.123, '-.123', l( 1, 4 ) ) ] );
        runTokenize( '{{ 1.23000 }}', [ new LiteralToken( 1.23, '1.23000', l( 1, 4 ) ) ] );
        runTokenize( '{{ -1.23000 }}', [ new LiteralToken( -1.23, '-1.23000', l( 1, 4 ) ) ] );

        // literal: exponent numbers
        runTokenize( '{{ 0e1 }}', [ new LiteralToken( 0, '0e1', l( 1, 4 ) ) ] );
        runTokenize( '{{ 1e1 }}', [ new LiteralToken( 10, '1e1', l( 1, 4 ) ) ] );
        runTokenize( '{{ 1e3 }}', [ new LiteralToken( 1000, '1e3', l( 1, 4 ) ) ] );
        runTokenize( '{{ 23e3 }}', [ new LiteralToken( 23000, '23e3', l( 1, 4 ) ) ] );
        runTokenize( '{{ 0e+1 }}', [ new LiteralToken( 0, '0e+1', l( 1, 4 ) ) ] );
        runTokenize( '{{ 1e+1 }}', [ new LiteralToken( 10, '1e+1', l( 1, 4 ) ) ] );
        runTokenize( '{{ 1e+3 }}', [ new LiteralToken( 1000, '1e+3', l( 1, 4 ) ) ] );
        runTokenize( '{{ 23e+3 }}', [ new LiteralToken( 23000, '23e+3', l( 1, 4 ) ) ] );
        runTokenize( '{{ 0e-1 }}', [ new LiteralToken( 0, '0e-1', l( 1, 4 ) ) ] );
        runTokenize( '{{ 1e-1 }}', [ new LiteralToken( 0.1, '1e-1', l( 1, 4 ) ) ] );
        runTokenize( '{{ 1e-3 }}', [ new LiteralToken( 0.001, '1e-3', l( 1, 4 ) ) ] );
        runTokenize( '{{ 23e-3 }}', [ new LiteralToken( 0.023, '23e-3', l( 1, 4 ) ) ] );

        // literal: string
        runTokenize( `{{ '' }}`, [ new LiteralToken( '', `''`, l( 1, 4 ) ) ] );
        runTokenize( `{{ "" }}`, [ new LiteralToken( '', `""`, l( 1, 4 ) ) ] );
        runTokenize( '{{ `` }}', [ new LiteralToken( '', '``', l( 1, 4 ) ) ] );
        runTokenize( `{{ 'is \\'escaped\\'' }}`, [ new LiteralToken( `is 'escaped'`, `'is \\'escaped\\''`, l( 1, 4 ) ) ] );
        runTokenize( `{{ "is \\"escaped\\"" }}`, [ new LiteralToken( `is "escaped"`, `"is \\"escaped\\""`, l( 1, 4 ) ) ] );
        runTokenize( '{{ `is \\`escaped\\`` }}', [ new LiteralToken( 'is `escaped`', '`is \\`escaped\\``', l( 1, 4 ) ) ] );
        runTokenize( '{{ "a backslash: \\\\" }}', [ new LiteralToken( 'a backslash: \\', '"a backslash: \\\\"', l( 1, 4 ) ) ] );

        // comparison expression
        runTokenize( '{{ 0 == 1 }}', [ new ComparisonExpressionToken(
            new LiteralToken( 0, '0', l( 1, 4 ) ),
            new LiteralToken( 1, '1', l( 1, 9 ) ),
            '==', '0 == 1', l( 1, 4 ),
        ) ] );

        runTokenize( '{{ 0 === 1 }}', [ new ComparisonExpressionToken(
            new LiteralToken( 0, '0', l( 1, 4 ) ),
            new LiteralToken( 1, '1', l( 1, 10 ) ),
            '===', '0 === 1', l( 1, 4 ),
        ) ] );

        runTokenize( '{{ 0 != 1 }}', [ new ComparisonExpressionToken(
            new LiteralToken( 0, '0', l( 1, 4 ) ),
            new LiteralToken( 1, '1', l( 1, 9 ) ),
            '!=', '0 != 1', l( 1, 4 ),
        ) ] );

        runTokenize( '{{ 0 !== 1 }}', [ new ComparisonExpressionToken(
            new LiteralToken( 0, '0', l( 1, 4 ) ),
            new LiteralToken( 1, '1', l( 1, 10 ) ),
            '!==', '0 !== 1', l( 1, 4 ),
        ) ] );

        runTokenize( '{{ 0 > 1 }}', [ new ComparisonExpressionToken(
            new LiteralToken( 0, '0', l( 1, 4 ) ),
            new LiteralToken( 1, '1', l( 1, 8 ) ),
            '>', '0 > 1', l( 1, 4 ),
        ) ] );

        runTokenize( '{{ 0 >= 1 }}', [ new ComparisonExpressionToken(
            new LiteralToken( 0, '0', l( 1, 4 ) ),
            new LiteralToken( 1, '1', l( 1, 9 ) ),
            '>=', '0 >= 1', l( 1, 4 ),
        ) ] );

        runTokenize( '{{ 0 < 1 }}', [ new ComparisonExpressionToken(
            new LiteralToken( 0, '0', l( 1, 4 ) ),
            new LiteralToken( 1, '1', l( 1, 8 ) ),
            '<', '0 < 1', l( 1, 4 ),
        ) ] );

        runTokenize( '{{ 0 <= 1 }}', [ new ComparisonExpressionToken(
            new LiteralToken( 0, '0', l( 1, 4 ) ),
            new LiteralToken( 1, '1', l( 1, 9 ) ),
            '<=', '0 <= 1', l( 1, 4 ),
        ) ] );

        // call expression: no tail
        runTokenize( '{{ foo }}', [ new CallExpressionToken( false, 'foo', [], 'foo', l( 1, 4 ) ) ] );
        runTokenize( '{{ @foo }}', [ new CallExpressionToken( true, 'foo', [], '@foo', l( 1, 4 ) ) ] );

        // call expression: object access
        runTokenize( '{{ foo.bar.baz }}', [ new CallExpressionToken( false, 'foo', [
            new CallExpressionObjectAccess( 'bar' ),
            new CallExpressionObjectAccess( 'baz' ),
        ], 'foo.bar.baz', l( 1, 4 ) ) ] );

        // call expression: array access
        runTokenize( `{{ foo[0]['bar'].mixed[ @baz.inner ] }}`, [ new CallExpressionToken( false, 'foo', [
            new CallExpressionArrayAccess( new LiteralToken( 0, '0', l( 1, 8 ) ) ),
            new CallExpressionArrayAccess( new LiteralToken( 'bar', `'bar'`, l( 1, 11 ) ) ),
            new CallExpressionObjectAccess( 'mixed' ),
            new CallExpressionArrayAccess( new CallExpressionToken( true, 'baz', [
                new CallExpressionObjectAccess( 'inner' ),
            ], '@baz.inner', l( 1, 25 ) ) ),
        ], `foo[0]['bar'].mixed[ @baz.inner ]`, l( 1, 4 ) ) ] );

        // call expression: invocation
        runTokenize( `{{ foo() }}`, [ new CallExpressionToken( false, 'foo', [
            new CallExpressionInvocation( [] ),
        ], 'foo()', l( 1, 4 ) ) ] );

        runTokenize( `{{ foo( 123 ) }}`, [ new CallExpressionToken( false, 'foo', [
            new CallExpressionInvocation( [
                new LiteralToken( 123, '123', l( 1, 9 ) ),
            ] ),
        ], 'foo( 123 )', l( 1, 4 ) ) ] );

        runTokenize( `{{ foo( 1 )( 2 ) }}`, [ new CallExpressionToken( false, 'foo', [
            new CallExpressionInvocation( [
                new LiteralToken( 1, '1', l( 1, 9 ) ),
            ] ),
            new CallExpressionInvocation( [
                new LiteralToken( 2, '2', l( 1, 14 ) ),
            ] ),
        ], 'foo( 1 )( 2 )', l( 1, 4 ) ) ] );

        runTokenize( `{{ foo( null, true, 123, .45, "test", bar( baz[0], baf.test() ) ) }}`, [ new CallExpressionToken( false, 'foo', [
            new CallExpressionInvocation( [
                new LiteralToken( null, 'null', l( 1, 9 ) ),
                new LiteralToken( true, 'true', l( 1, 15 ) ),
                new LiteralToken( 123, '123', l( 1, 21 ) ),
                new LiteralToken( .45, '.45', l( 1, 26 ) ),
                new LiteralToken( 'test', `"test"`, l( 1, 31 ) ),
                new CallExpressionToken( false, 'bar', [
                    new CallExpressionInvocation( [
                        new CallExpressionToken( false, 'baz', [
                            new CallExpressionArrayAccess( new LiteralToken( 0, '0', l( 1, 48 ) ) ),
                        ], 'baz[0]', l( 1, 44 ) ),
                        new CallExpressionToken( false, 'baf', [
                            new CallExpressionObjectAccess( 'test' ),
                            new CallExpressionInvocation( [] ),
                        ], 'baf.test()', l( 1, 52 ) ),
                    ] ),
                ], 'bar( baz[0], baf.test() )', l( 1, 39 ) ),
            ] ),
        ], 'foo( null, true, 123, .45, "test", bar( baz[0], baf.test() ) )', l( 1, 4 ) ) ] );
    } );

    describe( 'compile()', () => {
        // text tokens
        runCompile( '', `""` );
        runCompile( 'foo', `"foo"` );
        runCompile( '{invalid} {{token} {here}}', `"{invalid} {{token} {here}}"` );

        // literal: null
        runCompile( '{{ null }}', `""` );
        runCompile( '{{ NULL }}', `""` );

        // literal: boolean
        runCompile( '{{ true }}', `""` );
        runCompile( '{{ TRUE }}', `""` );
        runCompile( '{{ false }}', `""` );
        runCompile( '{{ FALSE }}', `""` );

        // literal: integer
        runCompile( '{{ 0 }}', `""+0` );
        runCompile( '{{ 123 }}', `""+123` );
        runCompile( '{{ -123 }}', `""+-123` );

        // literal: float
        runCompile( '{{ 0.0 }}', `""+0` );
        runCompile( '{{ .0 }}', `""+0` );
        runCompile( '{{ 0.123 }}', `""+0.123` );
        runCompile( '{{ .123 }}', `""+0.123` );
        runCompile( '{{ -0.123 }}', `""+-0.123` );
        runCompile( '{{ -.123 }}', `""+-0.123` );
        runCompile( '{{ 1.23000 }}', `""+1.23` );
        runCompile( '{{ -1.23000 }}', `""+-1.23` );

        // literal: exponent numbers
        runCompile( '{{ 0e1 }}', `""+0` );
        runCompile( '{{ 1e1 }}', `""+10` );
        runCompile( '{{ 1e3 }}', `""+1000` );
        runCompile( '{{ 23e3 }}', `""+23000` );
        runCompile( '{{ 0e+1 }}', `""+0` );
        runCompile( '{{ 1e+1 }}', `""+10` );
        runCompile( '{{ 1e+3 }}', `""+1000` );
        runCompile( '{{ 23e+3 }}', `""+23000` );
        runCompile( '{{ 0e-1 }}', `""+0` );
        runCompile( '{{ 1e-1 }}', `""+0.1` );
        runCompile( '{{ 1e-3 }}', `""+0.001` );
        runCompile( '{{ 23e-3 }}', `""+0.023` );

        // literal: string
        runCompile( `{{ '' }}`, `""` );
        runCompile( `{{ "" }}`, `""` );
        runCompile( '{{ `` }}', `""` );
        runCompile( `{{ 'is \\'escaped\\'' }}`, `"is 'escaped'"` );
        runCompile( `{{ "is \\"escaped\\"" }}`, `"is \\"escaped\\""` );
        runCompile( '{{ `is \\`escaped\\`` }}', `"is \`escaped\`"` );
        runCompile( '{{ "a backslash: \\\\" }}', `"a backslash: \\\\"` );

        // comparison expression
        runCompile( '{{ 0 == 1 }}', `""+(0==1)` );
        runCompile( '{{ 0 === 1 }}', `""+(0===1)` );
        runCompile( '{{ 0 != 1 }}', `""+(0!=1)` );
        runCompile( '{{ 0 !== 1 }}', `""+(0!==1)` );
        runCompile( '{{ 0 < 1 }}', `""+(0<1)` );
        runCompile( '{{ 0 > 1 }}', `""+(0>1)` );
        runCompile( '{{ 0 <= 1 }}', `""+(0<=1)` );
        runCompile( '{{ 0 >= 1 }}', `""+(0>=1)` );
        runCompile( '{{ ( 0 < ( 1 != 1 ) ) === true }}', `""+((0<(1!=1))===true)` );

        // call expression: no tail
        runCompile( '{{ foo }}', `({foo})=>""+foo` );
        runCompile( '{{ @foo }}', `(_,{foo})=>""+foo` );

        // call expression: object access
        runCompile( '{{ foo.bar.baz }}', `({foo})=>""+foo.bar.baz` );

        // call expression: array access
        runCompile( `{{ foo[0]['bar'].mixed[ @baz.inner ] }}`, `({foo},{baz})=>""+foo[0]["bar"].mixed[baz.inner]` );

        // call expression: invocation
        runCompile( '{{ foo() }}', `({foo})=>""+foo()` );
        runCompile( '{{ foo( 123 ) }}', `({foo})=>""+foo(123)` );
        runCompile( '{{ foo( 1 )( 2 ) }}', `({foo})=>""+foo(1)(2)` );
        runCompile( '{{ foo( null, true, 123, .45, "test", bar( baz[0], baf.test() ) ) }}',
            `({foo,bar,baz,baf})=>""+foo(null,true,123,0.45,"test",bar(baz[0],baf.test()))` );
    } );
} );
