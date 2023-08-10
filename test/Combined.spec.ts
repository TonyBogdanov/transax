import { expect } from '@jest/globals';

import Compiler from '../src/Compiler/Compiler';
import { ContextParams } from '../src/Type/ContextParams';
import { ContextGlobals } from '../src/Type/ContextGlobals';
import LiteralToken from '../src/Compiler/LiteralToken';

function runTest(
    code: string,
    expectedOutput: string,
    params: ContextParams = {},
    globals: ContextGlobals = {},
): void {
    test( code, () => {
        const compiler = new Compiler();
        const fn = eval( compiler.compile( code ) );

        expect( 'string' === typeof fn ? fn : fn( params, globals ) ).toBe( expectedOutput );
    } );
}

describe( 'Combined', () => {
    // text tokens
    runTest( '', '' );
    runTest( 'foo', 'foo' );
    runTest( '{invalid} {{token} {here}}', '{invalid} {{token} {here}}' );

    // literal: null
    runTest( '{{ null }}', '' );
    runTest( '{{ NULL }}', '' );

    // literal: boolean
    runTest( '{{ true }}', '' );
    runTest( '{{ TRUE }}', '' );
    runTest( '{{ false }}', '' );
    runTest( '{{ FALSE }}', '' );

    // literal: integer
    runTest( '{{ 0 }}', '0' );
    runTest( '{{ 123 }}', '123' );
    runTest( '{{ -123 }}', '-123' );

    // literal: float
    runTest( '{{ 0.0 }}', '0' );
    runTest( '{{ .0 }}', '0' );
    runTest( '{{ 0.123 }}', '0.123' );
    runTest( '{{ .123 }}', '0.123' );
    runTest( '{{ -0.123 }}', '-0.123' );
    runTest( '{{ -.123 }}', '-0.123' );
    runTest( '{{ 1.23000 }}', '1.23' );
    runTest( '{{ -1.23000 }}', '-1.23' );

    // literal: exponent numbers
    runTest( '{{ 0e1 }}', '0' );
    runTest( '{{ 1e1 }}', '10' );
    runTest( '{{ 1e3 }}', '1000' );
    runTest( '{{ 23e3 }}', '23000' );
    runTest( '{{ 0e+1 }}', '0' );
    runTest( '{{ 1e+1 }}', '10' );
    runTest( '{{ 1e+3 }}', '1000' );
    runTest( '{{ 23e+3 }}', '23000' );
    runTest( '{{ 0e-1 }}', '0' );
    runTest( '{{ 1e-1 }}', '0.1' );
    runTest( '{{ 1e-3 }}', '0.001' );
    runTest( '{{ 23e-3 }}', '0.023' );

    // literal: string
    runTest( `{{ '' }}`, '' );
    runTest( `{{ "" }}`, '' );
    runTest( '{{ `` }}', '' );
    runTest( `{{ 'is \\'escaped\\'' }}`, `is 'escaped'` );
    runTest( `{{ "is \\"escaped\\"" }}`, `is "escaped"` );
    runTest( '{{ `is \\`escaped\\`` }}', 'is `escaped`' );

    // comparison expression
    runTest( '{{ "1" == 1 }}', 'true' );
    runTest( '{{ "1" === 1 }}', 'false' );
    runTest( '{{ "1" != 1 }}', 'false' );
    runTest( '{{ "1" !== 1 }}', 'true' );
    runTest( '{{ 0 < 1 }}', 'true' );
    runTest( '{{ 0 <= 1 }}', 'true' );
    runTest( '{{ 0 > 1 }}', 'false' );
    runTest( '{{ 0 >= 1 }}', 'false' );
    runTest( '{{ ( 0 < ( 1 != 1 ) ) === true }}', 'false' );

    // call expression: no tail
    runTest( '{{ foo }}', 'this is param foo', { foo: 'this is param foo' } );
    runTest( '{{ @foo }}', 'this is global foo', {}, { foo: 'this is global foo' } );

    // call expression: object access
    runTest( '{{ foo.bar.baz }}', 'this is param foo.bar.baz', { foo: { bar: { baz: 'this is param foo.bar.baz' } } } );

    // call expression: array access
    runTest( `{{ foo[0]['bar'].mixed[ @baz.inner ] }}`, 'the prize',
        { foo: [ { bar: { mixed: { the_key: 'the prize' } } } ] }, { baz: { inner: 'the_key' } } );

    // call expression: invocation
    runTest( '{{ foo() }}', 'this is foo', { foo: () => 'this is foo' } );
    runTest( '{{ foo( 123 ) }}', 'this is foo: 123', { foo: v => 'this is foo: ' + v } );
    runTest( '{{ foo( 1 )( 2 ) }}', 'a:1 + b:2', { foo: a => b => `a:${ a } + b:${ b }` } );

    runTest(
        '{{ foo( null, true, 123, .45, "test", bar( baz[0], baf.test() ) ) }}',
        'this is foo: a(null), b(true), c(123), d(0.45), e(test), f(this is bar: a(this is baz 0), b(this is baf.test))',
        {
            foo: ( a, b, c, d, e, f ) => `this is foo: a(${ a }), b(${ b }), c(${ c }), d(${ d }), e(${ e }), f(${ f })`,
            bar: ( a, b ) => `this is bar: a(${ a }), b(${ b })`,
            baz: [ 'this is baz 0' ],
            baf: { test: () => 'this is baf.test' },
        },
    );
} );
