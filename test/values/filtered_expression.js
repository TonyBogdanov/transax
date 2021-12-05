const v_filtered_expression_lowercase = require( './filtered_expression_lowercase.js' );
const v_filtered_expression_uppercase = require( './filtered_expression_uppercase.js' );
const v_filtered_expression_append = require( './filtered_expression_append.js' );
const v_filtered_expression_mixed = require( './filtered_expression_mixed.js' );

module.exports = {

    name: 'filtered_expression',
    tests: [
        v_filtered_expression_lowercase,
        v_filtered_expression_uppercase,
        v_filtered_expression_append,
        v_filtered_expression_mixed,
    ],

};
