import v_expression from './expression.js';

export default {

    name: 'filtered_expression_uppercase',
    transformInput: v => `${ v } | uppercase`,
    transformOutput: v => 'undefined' === typeof v ? v : `${ v }`.toLocaleUpperCase(),
    tests: [
        v_expression,
    ],

};
