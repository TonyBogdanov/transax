const v_expression = require( './expression.js' );

module.exports = {

    name: 'filtered_expression_append',
    transformInput: v => `${ v } | append( 1, 2 )`,
    transformOutput: v => 'undefined' === typeof v ? v : `${ v }3`,
    tests: [
        v_expression,
    ],

};
