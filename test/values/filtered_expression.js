import v_filtered_expression_lowercase from './filtered_expression_lowercase.js';
import v_filtered_expression_uppercase from './filtered_expression_uppercase.js';
import v_filtered_expression_both from './filtered_expression_both.js';

export default {

    name: 'filtered_expression',
    tests: [
        v_filtered_expression_lowercase,
        v_filtered_expression_uppercase,
        v_filtered_expression_both,
    ],

};
