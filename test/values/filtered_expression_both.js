const v_expression = require( './expression.js' );

module.exports = {

    name: 'filtered_expression_both',
    transformInput: v => `${ v } | lowercase | uppercase`,
    transformOutput: v => 'undefined' === typeof v ? v : `${ v }`.toLocaleLowerCase().toLocaleUpperCase(),
    tests: [
        v_expression,
    ],

};
