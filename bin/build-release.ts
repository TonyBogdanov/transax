import fs from 'fs';
import rimraf from 'rimraf';
import glob from 'glob';
import uglify from 'uglify-js';

import { resolve } from 'path';
import { spawn } from 'child_process';
const { readFile, writeFile } = fs.promises;

async function run( command: string, args: string[] ): Promise<void> {
    return new Promise( ( resolve, reject ) => {
        spawn( command, args, { stdio: 'inherit' } ).on( 'close', code => 0 === code ? resolve() : reject( code ) )
    } );
}

async function build( target: string ): Promise<void> {
    const log = ( ...args ) => console.log( `[${ target.toUpperCase() }]`, ...args );

    if ( 'browser' !== target ) {
        log( 'Purging.' );
        await rimraf( resolve( __dirname, '..', target ) );
    }

    log( 'Transpiling.' );
    if ( 'browser' === target ) {
        await run( 'browserify', [ resolve( __dirname, `../cjs/index.js` ), '-o', resolve( __dirname, `../browser/index.js` ) ] );
    } else {
        await run( 'tsc', [ '--build', resolve( __dirname, `../${ target }.tsconfig.json` ) ] );
    }

    log( 'Minifying.' );
    await Promise.all( glob.sync( resolve( __dirname, '..', target, '**/*.js' ) ).map( async path => {
        const min = uglify.minify( await readFile( path, 'utf8' ), { sourceMap: {} } );
        return Promise.all( [ writeFile( path, min.code ), writeFile( path + '.map', min.map ) ] );
    } ) );
}

async function seq( ...promises: ( () => Promise<void> )[] ): Promise<void> {
    for ( const promise of promises ) {
        await promise();
    }
}

( async () => {
    await Promise.all( [ seq( () => build( 'cjs' ), () => build( 'browser' ) ), build( 'esm' ) ] );
    console.log( '[OK]' );
} )();
