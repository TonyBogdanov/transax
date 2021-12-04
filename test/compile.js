import { Script } from 'vm';
import { expect } from 'chai';
import { compile } from '../dist/esm/index.js';

import filters from './util/filters.js';
import load from './util/load.js';

load( ( { input, output, context = {} } ) => {

    const code = compile( input );
    const run = () => new Script( code ).runInNewContext()( context, filters );

    it( code, () => 'undefined' === typeof output ?
        expect( run ).to.throw() :
        expect( run() ).to.equal( `${ output }` )
    );

} );
