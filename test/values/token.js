import v_filtered_expression from './filtered_expression.js';
import v_expression from './expression.js';

export default {

    name: 'token',
    transformInput: v => `{{ ${ v } }}`,
    tests: [
        v_filtered_expression,
        v_expression,
    ],

};
