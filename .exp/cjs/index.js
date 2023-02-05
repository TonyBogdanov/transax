const { Generator } = require( 'transax' );

const code = `
const hello = $t( 'Hello' );
const greet = $t( 'nice to meet you' );

console.log( \`\${ hello } John, \${ greet }!\` );
`;

const translations = {
    en: {
        'nice to meet you': 'nice to meet you',
        'unused': 'unused',
    },
    de: {
        'Hello': 'Hallo',
    },
};

const gen = new Generator( { translations } );
gen.parseContent( code );

console.log( gen.getMissingTranslationKeys() );
// -> { en: [ 'Hello' ], de: [ 'nice to meet you' ] }

console.log( gen.getUnusedTranslationKeys() );
// -> { en: [ 'unused' ], de: [] }
