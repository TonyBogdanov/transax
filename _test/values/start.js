const v_token = require( './token.js' );
const v_text = require( './text.js' );
const v_mixed = require( './mixed.js' );
const v_empty = require( './empty.js' );

module.exports = {

    name: 'start',
    tests: [
        v_token,
        v_text,
        v_mixed,
        v_empty,
    ],

};
