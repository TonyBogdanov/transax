const { readFile, writeFile } = require( 'fs/promises' );
const { resolve } = require( 'path' );
const peggy = require( 'peggy' );
const tspegjs =  require( 'ts-pegjs' );

async function load( name ) {
    return ( await readFile( resolve( __dirname, `../peg/${ name }.txt` ) ) ).toString( 'utf-8' );
}

( async () => {
    console.log( 'Loading grammar.' );
    const [ header, ...grammar ] = await Promise.all( [ load( 'header' ), ...[ 'tokens', 'primitives' ].map( load ) ] );

    console.log( 'Generating parser.' );
    const parser = peggy.generate( grammar.join( '\n' ), { output: 'source', plugins: [ tspegjs ] } );

    console.log( 'Writing parser.' );
    await writeFile( resolve( __dirname, '../src/parser/parse.ts' ), header + parser + 'export default parse;' );

    console.log( '[OK]' );
} )();
