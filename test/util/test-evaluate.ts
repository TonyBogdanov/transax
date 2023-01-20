import { describe } from 'mocha';
import { expect } from 'chai';

import Mapping from './mapping';
import compile from '../../src/compiler/compile';

export default function testEvaluate( mapping: Mapping[] ): void {
    describe( 'evaluates', () => {
        for ( const { tokens, output, params, globals } of mapping ) {
            const fn = eval( compile( tokens ) );
            it( output, () => expect( fn( params, globals ) ).to.eq( output ) );
        }
    } );
}
