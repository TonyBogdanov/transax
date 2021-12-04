import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import { promises } from 'fs';
import pegjs from 'pegjs';

const { readFile, writeFile } = promises;
const __dirname = dirname( fileURLToPath( import.meta.url ) );

( async () => {

    console.log( 'Generating parser.' );

    const grammar = ( await readFile( resolve( __dirname, '../grammar.pegjs' ) ) ).toString();
    const parser = pegjs.generate( grammar, { output: 'source' } );

    await writeFile( resolve( __dirname, '../src/parse.js' ), `export default ${ parser }.parse` );
    await writeFile( resolve( __dirname, '../cjs/parse.js' ), `module.exports = ${ parser }.parse` );

    console.log( 'Generating compiler.' );
    const compiler = `ast => '(c,f)=>\`' + ( 'string' === typeof ast ? parse( ast ) : ast )
    .map( token => 'string' === typeof token ? token.replace( /\`/g, '\\\\\`' ) : token.compile( true ) )
    .join( '' ) + '\`';`;

    await writeFile( resolve( __dirname, '../src/compile.js' ),
        `import parse from './parse.js';\n\nexport default ${ compiler }` );

    await writeFile( resolve( __dirname, '../cjs/compile.js' ),
        `const parse = require( './parse.js' );\n\nmodule.exports = ${ compiler }` );

    console.log( 'Generating translator.' );
    const translator = `( text, context, filters ) => parse( text )
    .map( token => \`\${ 'string' === typeof token ? token : token.evaluate( context, filters ) }\` )
    .join( '' );`;

    await writeFile( resolve( __dirname, '../src/translate.js' ),
        `import parse from './parse.js';\n\nexport default ${ translator }` );

    await writeFile( resolve( __dirname, '../cjs/translate.js' ),
        `const parse = require( './parse.js' );\n\nmodule.exports = ${ translator }` );

} )();
