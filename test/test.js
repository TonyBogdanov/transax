import { expect } from 'chai';
import translate from '../src/translate.js';

import v_start from './values/start.js';

const filters = {
    lowercase: v => `${ v }`.toLocaleLowerCase(),
    uppercase: v => `${ v }`.toLocaleUpperCase(),
};

const run = ( input, output, context = {} ) => it( input, () => 'undefined' === typeof output ?
    expect( () => translate( input, context, filters ) ).to.throw() :
    expect( translate( input, context, filters ) ).to.equal( `${ output }` )
);

const boot = ( { name, tests, transformInput = [], transformOutput = [] } ) => {

    describe( name, () => tests.forEach( test => {

        if ( Array.isArray( test ) ) {

            let input = test[0];
            transformInput.forEach( t => input = t( input ) );

            let output = test[1];
            transformOutput.forEach( t => output = t( output ) );

            run( input, output, ... test.slice( 2 ) );
            return;

        }

        const oTransformInput = 'function' === typeof test.transformInput ? [ test.transformInput ] : [];
        const oTransformOutput = 'function' === typeof test.transformOutput ? [ test.transformOutput ] : [];

        boot( Object.assign( {}, test, {
            transformInput: oTransformInput.concat( transformInput ),
            transformOutput: oTransformOutput.concat( transformOutput ),
        } ) );

    } ) );

};

boot( v_start );
