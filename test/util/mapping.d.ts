import { describe } from 'mocha';
import { expect } from 'chai';

import compile from '../src/compiler/compile';
import parse from '../src/parser/parse';

export default function testParse( mapping: object[] ): void {
    describe( 'parses', () => {
        for ( const { input, tokens } of mapping ) {
            it( input, () => expect( parse( input ) ).to.deep.eq( tokens ) );
        }
    } );
}
