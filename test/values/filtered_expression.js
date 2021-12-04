const v_filtered_expression_lowercase = require( './filtered_expression_lowercase.js' );
const v_filtered_expression_uppercase = require( './filtered_expression_uppercase.js' );
const v_filtered_expression_both = require( './filtered_expression_both.js' );

module.exports = {

    name: 'filtered_expression',
    tests: [
        v_filtered_expression_lowercase,
        v_filtered_expression_uppercase,
        v_filtered_expression_both,
    ],

};
