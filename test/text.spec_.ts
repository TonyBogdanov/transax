import testParse from './util/test-parse';
import testCompile from './util/test-compile';
import testEvaluate from './util/test-evaluate';

import TextToken from '../src/token/text';

const mapping = [
    {
        input: '',
        tokens: [ new TextToken( '' ) ],
        compiled: `()=>""`,
        output: '',
        params: {},
        globals: {},
    },
    {
        input: 'foo',
        tokens: [ new TextToken( 'foo' ) ],
        compiled: `()=>"foo"`,
        output: 'foo',
        params: {},
        globals: {},
    },
    {
        input: '{invalid} {{token} {here}}',
        tokens: [ new TextToken( '{invalid} {{token} {here}}' ) ],
        compiled: `()=>"{invalid} {{token} {here}}"`,
        output: '{invalid} {{token} {here}}',
        params: {},
        globals: {},
    },
];

describe( 'TextToken', () => {
    testParse( mapping );
    testCompile( mapping );
    testEvaluate( mapping );
} );
