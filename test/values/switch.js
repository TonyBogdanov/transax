export default {

    name: 'switch',
    tests: [
        [ `switch null: 'this' => null, * => 'fallback'`, 'fallback' ],
        [ `switch foo: 'this' => 'foo'; * => 'fallback'`, 'foo', { foo: 'this' } ],
        [ `switch 1: 2 => 1` ], // expect exception
    ],

};
