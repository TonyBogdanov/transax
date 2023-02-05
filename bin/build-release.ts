import fs from 'fs';
import rimraf from 'rimraf';
import glob from 'glob';
import uglify from 'uglify-js';

import { resolve, relative } from 'path';
import { spawn } from 'child_process';
const { readFile, writeFile } = fs.promises;

async function run( command: string, args: string[] ): Promise<void> {
    return new Promise( ( resolve, reject ) => {
        spawn( command, args, { stdio: 'inherit' } ).on( 'close', code => 0 === code ? resolve() : reject( code ) )
    } );
}

async function build( target: string, type: string ): Promise<void> {
    const log = ( ...args ) => console.log( `[${ target.toUpperCase() }]`, ...args );

    log( 'Purging.' );
    await rimraf( resolve( __dirname, '..', target ) );

    log( 'Transpiling.' );
    await run( 'tsc', [ '--build', resolve( __dirname, `../${ target }.tsconfig.json` ) ] );

    log( 'Packaging.' );
    let cfg = JSON.parse( await readFile( resolve( __dirname, '../package.json' ), 'utf8' ) );

    cfg.type = type;

    delete cfg.scripts;
    delete cfg.exports;
    delete cfg.files;

    if ( 'cjs' === target ) {
        delete cfg.module;
        cfg.main = relative( 'cjs', cfg.main );
    } else {
        delete cfg.main;
        cfg.module = relative( 'esm', cfg.module );
    }

    await writeFile( resolve( __dirname, '..', target, 'package.json' ), JSON.stringify( cfg, null, 2 ) );

    log( 'Minifying.' );
    await Promise.all( glob.sync( resolve( __dirname, '..', target, '**/*.js' ) ).map( async path => {
        const min = uglify.minify( await readFile( path, 'utf8' ), { sourceMap: {} } );
        return Promise.all( [ writeFile( path, min.code ), writeFile( path + '.map', min.map ) ] );
    } ) );
}

( async () => {
    await Promise.all( [ build( 'cjs', 'commonjs' ), build( 'esm', 'module' ) ] );
    console.log( '[OK]' );
} )();
