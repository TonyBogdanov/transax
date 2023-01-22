const v_expression = require( './expression.js' );

module.exports = {

    name: 'filtered_expression_lowercase',
    transformInput: v => `${ v } | lowercase`,
    transformOutput: v => 'undefined' === typeof v ? v : `${ v }`.toLocaleLowerCase(),
    tests: [
        v_expression,
    ],

};
