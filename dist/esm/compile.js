import parse from './parse.js';

export default ast => '(c,f)=>`' + ( 'string' === typeof ast ? parse( ast ) : ast )
    .map( token => 'string' === typeof token ? token.replace( /`/g, '\\`' ) : token.compile( true ) )
    .join( '' ) + '`';
