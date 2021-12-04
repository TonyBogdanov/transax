const { expect } = require( 'chai' );
const { translate } = require( '../dist/cjs/index.js' );

const filters = require( './util/filters.js' );
const load = require( './util/load.js' );

load( ( { input, output, context = {} } ) => it( input, () => 'undefined' === typeof output ?
    expect( () => translate( input, context, filters ) ).to.throw() :
    expect( translate( input, context, filters ) ).to.equal( `${ output }` )
) );
