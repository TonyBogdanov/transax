import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

import peggy from 'peggy';
import tspegjs from 'ts-pegjs';

async function build( name: string ): Promise<void> {
    const log = ( ...args ) => console.log( `[${ name.toUpperCase() }]`, ...args );

    log( 'Loading grammar.' );
    const grammar = ( await readFile( resolve( __dirname, '../peg', name + '.txt' ) ) ).toString( 'utf-8' );

    log( 'Generating parser.' );
    const parser = peggy.generate( grammar, { output: 'source', plugins: [ tspegjs ] } ).replace( /^export /gmi, '' );

    log( 'Writing parser.' );
    const content = ( await readFile( resolve( __dirname, '../src', name + '.ts' ) ) ).toString( 'utf-8' );

    const first = content.split( /\/\*\s*peg:start\s*\*\//, 2 );
    if ( 2 !== first.length ) {
        throw new Error( 'Could not find peg:start marker.' );
    }

    const second = first[ 1 ].split( /\/\*\s*peg:stop\s*\*\//, 2 );
    if ( 2 !== first.length ) {
        throw new Error( 'Could not find peg:stop marker.' );
    }

    const result = first[ 0 ] + '/* peg:start */' + parser + '/* peg:stop */' + second[ 1 ];
    await writeFile( resolve( __dirname, '../src', name + '.ts' ), result );
}

( async () => {
    await Promise.all( [ build( 'Analyzer' ), build( 'Compiler' ) ] );
    console.log( '[OK]' );
} )();
