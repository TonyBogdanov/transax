const v_expression = require( './expression.js' );

module.exports = {

    name: 'filtered_expression_mixed',
    transformInput: v => `${ v } | lowercase | uppercase | append( 1, 2 )`,
    transformOutput: v => 'undefined' === typeof v ? v : `${ `${ v }`.toLocaleLowerCase().toLocaleUpperCase() }3`,
    tests: [
        v_expression,
    ],

};
