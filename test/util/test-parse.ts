import { describe } from 'mocha';
import { expect } from 'chai';

import Mapping from './mapping';
import parse from '../../src/parser/parse';

export default function testParse( mapping: Mapping[] ): void {
    describe( 'parses', () => {
        for ( const { input, tokens } of mapping ) {
            it( input, () => expect( parse( input ) ).to.deep.eq( tokens ) );
        }
    } );
}
