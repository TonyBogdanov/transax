import { expect } from 'chai';
import { translate } from '../dist/esm/index.js';

import filters from './util/filters.js';
import load from './util/load.js';

load( ( { input, output, context = {} } ) => it( input, () => 'undefined' === typeof output ?
    expect( () => translate( input, context, filters ) ).to.throw() :
    expect( translate( input, context, filters ) ).to.equal( `${ output }` )
) );
