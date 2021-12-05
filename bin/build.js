const { resolve } = require( 'path' );
const { promises } = require( 'fs' );
const pegjs = require( 'pegjs' );

const { readFile, writeFile } = promises;

( async () => {

    console.log( 'Generating parser.' );

    const grammar = ( await readFile( resolve( __dirname, '../grammar.pegjs' ) ) ).toString();
    const parser = pegjs.generate( grammar, { output: 'source' } );

    await writeFile( resolve( __dirname, '../dist/esm/parse.js' ), `export default ${ parser }.parse` );
    await writeFile( resolve( __dirname, '../dist/cjs/parse.js' ), `module.exports = ${ parser }.parse` );

    console.log( 'Generating compiler.' );
    const compiler = `ast => '(c,f)=>\`' + ( 'string' === typeof ast ? parse( ast ) : ast )
    .map( token => 'string' === typeof token ? token.replace( /\`/g, '\\\\\`' ) : token.compile( true ) )
    .join( '' ) + '\`';`;

    await writeFile( resolve( __dirname, '../dist/esm/compile.js' ),
        `import parse from './parse.js';\n\nexport default ${ compiler }\n` );

    await writeFile( resolve( __dirname, '../dist/cjs/compile.js' ),
        `const parse = require( './parse.js' );\n\nmodule.exports = ${ compiler }\n` );

    console.log( 'Generating translator.' );
    const translator = `( text, context, filters ) => parse( text )
    .map( token => \`\${ 'string' === typeof token ? token : token.evaluate( context, filters ) }\` )
    .join( '' );`;

    await writeFile( resolve( __dirname, '../dist/esm/translate.js' ),
        `import parse from './parse.js';\n\nexport default ${ translator }\n` );

    await writeFile( resolve( __dirname, '../dist/cjs/translate.js' ),
        `const parse = require( './parse.js' );\n\nmodule.exports = ${ translator }\n` );

    console.log( 'Generating exports.' );

    await writeFile(
        resolve( __dirname, '../dist/esm/index.js' ),
        "import parse from './parse.js';\n" +
        "import compile from './compile.js';\n" +
        "import translate from './translate.js';\n\n" +
        "export { parse, compile, translate };\n"
    );

    await writeFile(
        resolve( __dirname, '../dist/cjs/index.js' ),
        "exports.parse = require( './parse.js' );\n" +
        "exports.compile = require( './compile.js' );\n" +
        "exports.translate = require( './translate.js' );\n"
    );

    await writeFile( resolve( __dirname, '../dist/esm/package.json' ), `{ "type": "module" }` );
    await writeFile( resolve( __dirname, '../dist/cjs/package.json' ), `{ "type": "commonjs" }` );

} )();
