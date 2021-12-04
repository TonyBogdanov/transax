const v_null = require( './null.js' );
const v_string = require( './string.js' );
const v_float = require( './float.js' );
const v_integer = require( './integer.js' );

module.exports = {

    name: 'literal',
    tests: [
        v_null,
        v_string,
        v_float,
        v_integer,
    ],

};
