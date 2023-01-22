import { describe, it } from 'mocha';
// import { expect } from 'chai';

import extract from '../src/extractor/extract';

describe( 'Extractor', () => {
    it( 'handles JavaScript code', () => {
        // const code = `console.log( $t( 'translation.key' ) );`;
        const code = `a().$t( 'translation.key' );`;

        console.log( extract( code ) );

    } );
} );
