import v_expression from './expression.js';

export default {

    name: 'filtered_expression_lowercase',
    transformInput: v => `${ v } | lowercase`,
    transformOutput: v => 'undefined' === typeof v ? v : `${ v }`.toLocaleLowerCase(),
    tests: [
        v_expression,
    ],

};
