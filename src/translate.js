import parse from './parse.js';

export default ( text, context, filters ) => parse( text )
    .map( token => `${ 'string' === typeof token ? token : token.evaluate( context, filters ) }` )
    .join( '' );
