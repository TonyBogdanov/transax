const parse = require( './parse.cjs' );

module.exports = ( text, context, filters ) => parse( text )
    .map( token => `${ 'string' === typeof token ? token : token.evaluate( context, filters ) }` )
    .join( '' );