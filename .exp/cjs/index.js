const { Generator } = require( 'transax' );

console.log( Generator );

// const translations = {
//     en: {
//         'nice to meet you': 'nice to meet you',
//         'unused': 'unused',
//     },
//     de: {
//         'Hello': 'Hallo',
//     },
// };
//
// const gen = new Generator( { translations } );
// gen.parseContent( '<source code as string>' );
//
// console.log( gen.getMissingTranslationKeys() );
// // -> { en: [ 'Hello' ], de: [ 'nice to meet you' ] }
//
// console.log( gen.getUnusedTranslationKeys() );
// // -> { en: [ 'unused' ] }
