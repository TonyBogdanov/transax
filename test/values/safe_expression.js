import v_literal from './literal.js';
import v_resolution from './resolution.js';

export default {

    name: 'safe_expression',
    tests: [
        v_literal,
        v_resolution,
    ],

};
