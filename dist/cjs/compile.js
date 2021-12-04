const parse = require( './parse.js' );

module.exports = ast => '(c,f)=>`' + ( 'string' === typeof ast ? parse( ast ) : ast )
    .map( token => 'string' === typeof token ? token.replace( /`/g, '\\`' ) : token.compile( true ) )
    .join( '' ) + '`';
