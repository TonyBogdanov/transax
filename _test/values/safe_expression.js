const v_literal = require( './literal.js' );
const v_resolution = require( './resolution.js' );

module.exports = {

    name: 'safe_expression',
    tests: [
        v_literal,
        v_resolution,
    ],

};
