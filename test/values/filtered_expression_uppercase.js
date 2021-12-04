const v_expression = require( './expression.js' );

module.exports = {

    name: 'filtered_expression_uppercase',
    transformInput: v => `${ v } | uppercase`,
    transformOutput: v => 'undefined' === typeof v ? v : `${ v }`.toLocaleUpperCase(),
    tests: [
        v_expression,
    ],

};
