const v_literal = require( './literal.js' );

module.exports = {

    name: 'filtered_expression_append',
    transformInput: v => `${ v } | append( n.one, 2 )`,
    transformOutput: v => 'undefined' === typeof v ? v : `${ v }3`,
    transformContext: c => Object.assign( {}, c ?? {}, { n: { one: 1 } } ),
    tests: [
        v_literal, // only testing literal here as in one of the resolution scenarios the context is a function
    ],

};
