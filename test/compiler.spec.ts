import { describe } from 'mocha';
import { expect } from 'chai';

import compile from '../src/compiler/compile';

import text from './compiler/text';
import literalNull from './compiler/literal.null';
import literalString from './compiler/literal.string';
import literalFloat from './compiler/literal.float';
import literalInteger from './compiler/literal.integer';
import value from './compiler/value';

function test( testCases: Array<Array<any>> ) {
    for ( const [ tokens, output ] of testCases ) {
        it( output, () => expect( compile( tokens ) ).to.deep.eq( output ) );
    }
}

describe( 'compile', () => {
    describe( 'text', () => {
        test( text() )
    } );

    describe( 'literal', () => {
        test( literalNull() );
        test( literalString() );
        test( literalFloat() );
        test( literalInteger() );
    } );

    describe( 'value', () => {
        test( value() );
    } );
} );
