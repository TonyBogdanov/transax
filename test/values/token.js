const v_filtered_expression = require( './filtered_expression.js' );
const v_expression = require( './expression.js' );

module.exports = {

    name: 'token',
    transformInput: v => `{{ ${ v } }}`,
    tests: [
        v_filtered_expression,
        v_expression,
    ],

};
