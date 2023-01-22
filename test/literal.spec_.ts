import testParse from './util/test-parse';
import testCompile from './util/test-compile';
import testEvaluate from './util/test-evaluate';

import LiteralToken from '../src/token/literal';

const mapping = [
    // null
    {
        input: '{{ null }}',
        tokens: [ new LiteralToken( null ) ],
        compiled: `()=>""`,
        output: '',
        params: {},
        globals: {},
    },
    {
        input: '{{ NULL }}',
        tokens: [ new LiteralToken( null ) ],
        compiled: `()=>""`,
        output: '',
        params: {},
        globals: {},
    },

    // integer
    {
        input: '{{ 0 }}',
        tokens: [ new LiteralToken( 0 ) ],
        compiled: `()=>""+0`,
        output: '0',
        params: {},
        globals: {},
    },
    {
        input: '{{ 123 }}',
        tokens: [ new LiteralToken( 123 ) ],
        compiled: `()=>""+123`,
        output: '123',
        params: {},
        globals: {},
    },
    {
        input: '{{ -123 }}',
        tokens: [ new LiteralToken( -123 ) ],
        compiled: `()=>""+-123`,
        output: '-123',
        params: {},
        globals: {},
    },

    // float
    {
        input: '{{ 0.123 }}',
        tokens: [ new LiteralToken( 0.123 ) ],
        compiled: `()=>""+0.123`,
        output: '0.123',
        params: {},
        globals: {},
    },
    {
        input: '{{ -0.123 }}',
        tokens: [ new LiteralToken( -0.123 ) ],
        compiled: `()=>""+-0.123`,
        output: '-0.123',
        params: {},
        globals: {},
    },
    {
        input: '{{ .123 }}',
        tokens: [ new LiteralToken( 0.123 ) ],
        compiled: `()=>""+0.123`,
        output: '0.123',
        params: {},
        globals: {},
    },
    {
        input: '{{ -.123 }}',
        tokens: [ new LiteralToken( -0.123 ) ],
        compiled: `()=>""+-0.123`,
        output: '-0.123',
        params: {},
        globals: {},
    },
    {
        input: '{{ 1.23000 }}',
        tokens: [ new LiteralToken( 1.23 ) ],
        compiled: `()=>""+1.23`,
        output: '1.23',
        params: {},
        globals: {},
    },
    {
        input: '{{ -1.23000 }}',
        tokens: [ new LiteralToken( -1.23 ) ],
        compiled: `()=>""+-1.23`,
        output: '-1.23',
        params: {},
        globals: {},
    },

    // string
    {
        input: `{{ '' }}`,
        tokens: [ new LiteralToken( '' ) ],
        compiled: `()=>""`,
        output: '',
        params: {},
        globals: {},
    },
    {
        input: `{{ "" }}`,
        tokens: [ new LiteralToken( '' ) ],
        compiled: `()=>""`,
        output: '',
        params: {},
        globals: {},
    },
    {
        input: `{{ 'this is \\'single\\', "double" and \`caret\` quoted' }}`,
        tokens: [ new LiteralToken( `this is 'single', "double" and \`caret\` quoted` ) ],
        compiled: `()=>"this is 'single', \\"double\\" and \`caret\` quoted"`,
        output: `this is 'single', "double" and \`caret\` quoted`,
        params: {},
        globals: {},
    },
    {
        input: `{{ "this is 'single', \\"double\\" and \`caret\` quoted" }}`,
        tokens: [ new LiteralToken( `this is 'single', "double" and \`caret\` quoted` ) ],
        compiled: `()=>"this is 'single', \\"double\\" and \`caret\` quoted"`,
        output: `this is 'single', "double" and \`caret\` quoted`,
        params: {},
        globals: {},
    },
];

describe( 'LiteralToken', () => {
    testParse( mapping );
    testCompile( mapping );
    testEvaluate( mapping );
} );
