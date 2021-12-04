const { Script } = require( 'vm' );
const { expect } = require( 'chai' );
const { compile } = require( '../dist/cjs/index.js' );

const filters = require( './util/filters.js' );
const load = require( './util/load.js' );

load( ( { input, output, context = {} } ) => {

    const code = compile( input );
    const run = () => new Script( code ).runInNewContext()( context, filters );

    it( code, () => 'undefined' === typeof output ?
        expect( run ).to.throw() :
        expect( run() ).to.equal( `${ output }` )
    );

} );
