import v_token from './token.js';

export default {

    name: 'mixed',
    transformInput: v => `prefix ${ v } suffix`,
    transformOutput: v => 'undefined' === typeof v ? v : `prefix ${ v } suffix`,
    tests: [
        v_token,
    ],

};
