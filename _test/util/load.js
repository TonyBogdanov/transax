const v_start = require( '../values/start.js' );

const load = ( { name, tests, transformInput = [], transformOutput = [], transformContext = [] }, trail = [] ) => {

    const result = [];
    tests.forEach( test => {

        if ( Array.isArray( test ) ) {

            let input = test[0];
            transformInput.forEach( t => input = t( input ) );

            let output = test[1];
            transformOutput.forEach( t => output = t( output ) );

            let context = test[2];
            transformContext.forEach( t => context = t( context ) );

            result.push( [ trail.concat( name ), { input, output, context } ] );
            return;

        }

        const oTransformInput = 'function' === typeof test.transformInput ? [ test.transformInput ] : [];
        const oTransformOutput = 'function' === typeof test.transformOutput ? [ test.transformOutput ] : [];
        const oTransformContext = 'function' === typeof test.transformContext ? [ test.transformContext ] : [];

        result.push( ... load( Object.assign( {}, test, {
            transformInput: oTransformInput.concat( transformInput ),
            transformOutput: oTransformOutput.concat( transformOutput ),
            transformContext: oTransformContext.concat( transformContext ),
        } ), trail.concat( name ) ) );

    } );

    return result;

};

module.exports = callback => {

    const tree = {};
    load( v_start ).forEach( ( [ trail, test ] ) => {

        const name = trail.pop();
        const context = trail.reduce( ( context, name ) =>
            context.hasOwnProperty( name ) ? context[ name ] : ( context[ name ] = {} ), tree );

        if ( ! context.hasOwnProperty( name ) ) {
            context[ name ] = [];
        }

        context[ name ].push( test );

    } );

    const traverse = ( callback, tree ) => {

        if ( Array.isArray( tree ) ) {
            tree.forEach( callback );
            return;
        }

        Object.entries( tree ).forEach( ( [ name, data ] ) => describe( name, () => traverse( callback, data ) ) );

    };

    traverse( callback, tree );

};
