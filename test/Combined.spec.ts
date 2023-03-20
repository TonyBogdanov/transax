import { expect } from '@jest/globals';

import Compiler from '../src/Compiler/Compiler';
import { TranslationContextParams } from '../src/Translator/TranslationContextParams';
import { TranslationContextGlobals } from '../src/Translator/TranslationContextGlobals';

function runTest(
    code: string,
    expectedOutput: string,
    params: TranslationContextParams = {},
    globals: TranslationContextGlobals = {},
): void {
    test( code, () => {
        const compiler = new Compiler();
        const fn = eval( compiler.compile( code ) );

        expect( fn( params, globals ) ).toBe( expectedOutput );
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

    // literal: string
    runTest( `{{ '' }}`, '' );
    runTest( `{{ "" }}`, '' );
    runTest( '{{ `` }}', '' );
    runTest( `{{ 'is \\'escaped\\'' }}`, `is 'escaped'` );
    runTest( `{{ "is \\"escaped\\"" }}`, `is "escaped"` );
    runTest( '{{ `is \\`escaped\\`` }}', 'is `escaped`' );

    // expression: identifier
    runTest( '{{ foo }}', 'this is param foo', { foo: 'this is param foo' } );
    runTest( '{{ @foo }}', 'this is global foo', {}, { foo: 'this is global foo' } );

    // expression: object access
    runTest( '{{ foo.bar.baz }}', 'this is param foo.bar.baz', { foo: { bar: { baz: 'this is param foo.bar.baz' } } } );

    // expression: array access
    runTest( `{{ foo[0]['bar'].mixed[ @baz.inner ] }}`, 'the prize',
        { foo: [ { bar: { mixed: { the_key: 'the prize' } } } ] }, { baz: { inner: 'the_key' } } );
} );
