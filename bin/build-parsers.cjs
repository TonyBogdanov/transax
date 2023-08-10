/**
 * This file has to be CommonJS because of this issue:
 * @see https://github.com/metadevpro/ts-pegjs/issues/114
 */

const { readFile, writeFile } = require( 'node:fs/promises' );
const { resolve } = require( 'node:path' );

const peggy = require( 'peggy' );
const tspegjs = require( 'ts-pegjs' );

const run = async name => {
    const grammar = ( await readFile( resolve( __dirname, '../peg', name + '.txt' ) ) ).toString( 'utf-8' );
    const parser = peggy.generate( grammar, { output: 'source', plugins: [ tspegjs ] } ).replace( /^export /gmi, '' );
    const content = ( await readFile( resolve( __dirname, '../src', name, 'peg.ts' ) ) ).toString( 'utf-8' );

    const first = content.split( /\/\*\s*peg:start\s*\*\//, 2 );
    if ( 2 !== first.length ) {
        throw new Error( 'Could not find peg:start marker.' );
    }

    const second = first[ 1 ].split( /\/\*\s*peg:stop\s*\*\//, 2 );
    if ( 2 !== first.length ) {
        throw new Error( 'Could not find peg:stop marker.' );
    }

    const result = first[ 0 ] + '/* peg:start */' + parser + '/* peg:stop */' + second[ 1 ];
    await writeFile( resolve( __dirname, '../src', name, 'peg.ts' ), result );
};

( async () => {
    await Promise.all( [ run( 'Analyzer' ), run( 'Compiler' ) ] );
} )();
