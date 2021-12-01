import v_token from './token.js';
import v_text from './text.js';
import v_mixed from './mixed.js';
import v_empty from './empty.js';

export default {

    name: 'start',
    tests: [
        v_token,
        v_text,
        v_mixed,
        v_empty,
    ],

};
