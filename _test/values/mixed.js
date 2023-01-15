const v_token = require( './token.js' );

module.exports = {

    name: 'mixed',
    transformInput: v => `prefix ${ v } suffix`,
    transformOutput: v => 'undefined' === typeof v ? v : `prefix ${ v } suffix`,
    tests: [
        v_token,
    ],

};
