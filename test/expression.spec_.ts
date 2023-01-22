import testParse from './util/test-parse';
import testCompile from './util/test-compile';
import testEvaluate from './util/test-evaluate';

import IdentifierToken from '../src/token/identifier';
import ExpressionToken from '../src/token/expression';
import ObjectAccessToken from '../src/token/object-access';
import ArrayAccessToken from '../src/token/array-access';
import LiteralToken from '../src/token/literal';

const mapping = [
    // identifier
    {
        input: '{{ foo }}',
        tokens: [ new ExpressionToken( new IdentifierToken( 'foo', false ) ) ],
        compiled: `({foo})=>""+foo`,
        output: 'this is param foo',
        params: { foo: 'this is param foo' },
        globals: {},
    },
    {
        input: '{{ @foo }}',
        tokens: [ new ExpressionToken( new IdentifierToken( 'foo', true ) ) ],
        compiled: `(_,{foo})=>""+foo`,
        output: 'this is global foo',
        params: {},
        globals: { foo: 'this is global foo' },
    },

    // object access
    {
        input: '{{ foo.bar.baz }}',
        tokens: [ new ExpressionToken( new IdentifierToken( 'foo', false ), [
            new ObjectAccessToken( 'bar' ),
            new ObjectAccessToken( 'baz' ),
        ] ) ],
        compiled: `({foo})=>""+foo.bar.baz`,
        output: 'this is param foo.bar.baz',
        params: { foo: { bar: { baz: 'this is param foo.bar.baz' } } },
        globals: {},
    },

    // array access
    {
        input: `{{ foo[0]['bar'].mixed[ @baz.inner ] }}`,
        tokens: [ new ExpressionToken( new IdentifierToken( 'foo', false ), [
            new ArrayAccessToken( new LiteralToken( 0 ) ),
            new ArrayAccessToken( new LiteralToken( 'bar' ) ),
            new ObjectAccessToken( 'mixed' ),
            new ArrayAccessToken( new ExpressionToken( new IdentifierToken( 'baz', true ), [
                new ObjectAccessToken( 'inner' ),
            ] ) ),
        ] ) ],
        compiled: `({foo},{baz})=>""+foo[0]["bar"].mixed[baz.inner]`,
        output: 'the prize',
        params: { foo: [ { bar: { mixed: { the_key: 'the prize' } } } ] },
        globals: { baz: { inner: 'the_key' } },
    },
];

describe( 'ExpressionToken', () => {
    testParse( mapping );
    testCompile( mapping );
    testEvaluate( mapping );
} );
