import { describe } from 'mocha';
import { expect } from 'chai';

import Mapping from './mapping';
import compile from '../../src/compiler/compile';

export default function testCompile( mapping: Mapping[] ): void {
    describe( 'compiles', () => {
        for ( const { tokens, compiled } of mapping ) {
            it( compiled, () => expect( compile( tokens ) ).to.deep.eq( compiled ) );
        }
    } );
}
