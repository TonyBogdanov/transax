import { expect } from '@jest/globals';

import Compiler from '../src/Compiler/Compiler';
import AbstractCompilerToken from '../src/Compiler/AbstractCompilerToken';
import TextCompilerToken from '../src/Compiler/TextCompilerToken';
import LiteralCompilerToken from '../src/Compiler/LiteralCompilerToken';
import ExpressionCompilerToken from '../src/Compiler/ExpressionCompilerToken';
import IdentifierCompilerToken from '../src/Compiler/IdentifierCompilerToken';
import ObjectAccessCompilerToken from '../src/Compiler/ObjectAccessCompilerToken';
import ArrayAccessCompilerToken from '../src/Compiler/ArrayAccessCompilerToken';

function runTokenize( code: string, expectedTokens: AbstractCompilerToken[] = [] ): void {
    test( code, () => expect( new Compiler().tokenize( code ) ).toStrictEqual( expectedTokens ) );
}

function runCompile( code: string, expectedOutput: string ): void {
    test( code, () => expect( new Compiler().compile( code ) ).toStrictEqual( expectedOutput ) );
}

describe( 'Compiler', () => {
    describe( 'tokenize()', () => {
        // text tokens
        runTokenize( '', [] );
        runTokenize( 'foo', [ new TextCompilerToken( 'foo', 1, 1 ) ] );
        runTokenize( '{invalid} {{token} {here}}', [ new TextCompilerToken( '{invalid} {{token} {here}}', 1, 1 ) ] );

        // literal: null
        runTokenize( '{{ null }}', [ new LiteralCompilerToken( null, 'null', 1, 4 ) ] );
        runTokenize( '{{ NULL }}', [ new LiteralCompilerToken( null, 'NULL', 1, 4 ) ] );

        // literal: boolean
        runTokenize( '{{ true }}', [ new LiteralCompilerToken( true, 'true', 1, 4 ) ] );
        runTokenize( '{{ TRUE }}', [ new LiteralCompilerToken( true, 'TRUE', 1, 4 ) ] );
        runTokenize( '{{ false }}', [ new LiteralCompilerToken( false, 'false', 1, 4 ) ] );
        runTokenize( '{{ FALSE }}', [ new LiteralCompilerToken( false, 'FALSE', 1, 4 ) ] );

        // literal: integer
        runTokenize( '{{ 0 }}', [ new LiteralCompilerToken( 0, '0', 1, 4 ) ] );
        runTokenize( '{{ 123 }}', [ new LiteralCompilerToken( 123, '123', 1, 4 ) ] );
        runTokenize( '{{ -123 }}', [ new LiteralCompilerToken( -123, '-123', 1, 4 ) ] );

        // literal: float
        runTokenize( '{{ 0.0 }}', [ new LiteralCompilerToken( 0, '0.0', 1, 4 ) ] );
        runTokenize( '{{ .0 }}', [ new LiteralCompilerToken( 0, '.0', 1, 4 ) ] );
        runTokenize( '{{ 0.123 }}', [ new LiteralCompilerToken( 0.123, '0.123', 1, 4 ) ] );
        runTokenize( '{{ .123 }}', [ new LiteralCompilerToken( 0.123, '.123', 1, 4 ) ] );
        runTokenize( '{{ -0.123 }}', [ new LiteralCompilerToken( -0.123, '-0.123', 1, 4 ) ] );
        runTokenize( '{{ -.123 }}', [ new LiteralCompilerToken( -0.123, '-.123', 1, 4 ) ] );
        runTokenize( '{{ 1.23000 }}', [ new LiteralCompilerToken( 1.23, '1.23000', 1, 4 ) ] );
        runTokenize( '{{ -1.23000 }}', [ new LiteralCompilerToken( -1.23, '-1.23000', 1, 4 ) ] );

        // literal: string
        runTokenize( `{{ '' }}`, [ new LiteralCompilerToken( '', `''`, 1, 4 ) ] );
        runTokenize( `{{ "" }}`, [ new LiteralCompilerToken( '', `""`, 1, 4 ) ] );
        runTokenize( '{{ `` }}', [ new LiteralCompilerToken( '', '``', 1, 4 ) ] );
        runTokenize( `{{ 'is \\'escaped\\'' }}`, [ new LiteralCompilerToken( `is 'escaped'`, `'is \\'escaped\\''`, 1, 4 ) ] );
        runTokenize( `{{ "is \\"escaped\\"" }}`, [ new LiteralCompilerToken( `is "escaped"`, `"is \\"escaped\\""`, 1, 4 ) ] );
        runTokenize( '{{ `is \\`escaped\\`` }}', [ new LiteralCompilerToken( 'is `escaped`', '`is \\`escaped\\``', 1, 4 ) ] );

        // expression: identifier
        runTokenize( '{{ foo }}', [ new ExpressionCompilerToken( new IdentifierCompilerToken( 'foo', false, 'foo', 1, 4 ), [], 'foo', 1, 4 ) ] );
        runTokenize( '{{ @foo }}', [ new ExpressionCompilerToken( new IdentifierCompilerToken( 'foo', true, '@foo', 1, 4 ), [], '@foo', 1, 4 ) ] );

        // expression: object access
        runTokenize( '{{ foo.bar.baz }}', [ new ExpressionCompilerToken( new IdentifierCompilerToken( 'foo', false, 'foo', 1, 4 ), [
            new ObjectAccessCompilerToken( 'bar', '.bar', 1, 7 ),
            new ObjectAccessCompilerToken( 'baz', '.baz', 1, 11 ),
        ], 'foo.bar.baz', 1, 4 ) ] );

        // expression: array access
        runTokenize( `{{ foo[0]['bar'].mixed[ @baz.inner ] }}`, [
            new ExpressionCompilerToken( new IdentifierCompilerToken( 'foo', false, 'foo', 1, 4 ), [
                new ArrayAccessCompilerToken( new LiteralCompilerToken( 0, '0', 1, 8 ), '[0]', 1, 7 ),
                new ArrayAccessCompilerToken( new LiteralCompilerToken( 'bar', `'bar'`, 1, 11 ), `['bar']`, 1, 10 ),
                new ObjectAccessCompilerToken( 'mixed', '.mixed', 1, 17 ),
                new ArrayAccessCompilerToken( new ExpressionCompilerToken( new IdentifierCompilerToken( 'baz', true, '@baz', 1, 25 ), [
                    new ObjectAccessCompilerToken( 'inner', '.inner', 1, 29 ),
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

        // literal: boolean
        runCompile( '{{ true }}', `()=>""` );
        runCompile( '{{ TRUE }}', `()=>""` );
        runCompile( '{{ false }}', `()=>""` );
        runCompile( '{{ FALSE }}', `()=>""` );

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
