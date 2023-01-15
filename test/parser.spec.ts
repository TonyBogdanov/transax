import { describe } from 'mocha';
import { expect } from 'chai';

import parse from '../src/parser/parse';

import text from './parser/text';
import literalNull from './parser/literal.null';
import literalString from './parser/literal.string';
import literalFloat from './parser/literal.float';
import literalInteger from './parser/literal.integer';

function test( testCases: Array<Array<any>> ) {
    for ( const [ input, ...tokens ] of testCases ) {
        it( input, () => expect( parse( input ) ).to.deep.eq( tokens ) );
    }
}

describe( 'parse', () => {
    describe( 'text', () => test( text() ) );
    describe( 'literal', () => {
        test( literalNull() );
        test( literalString() );
        test( literalFloat() );
        test( literalInteger() );
    } );
} );
