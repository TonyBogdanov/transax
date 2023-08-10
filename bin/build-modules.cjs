/**
 * This file has to be CommonJS because of this issue:
 * @see https://github.com/metadevpro/ts-pegjs/issues/114
 */

const glob = require( 'glob' );
const uglify = require( 'uglify-js' );

const { readFile, writeFile } = require( 'node:fs/promises' );
const { resolve } = require( 'node:path' );
const { rimraf } = require( 'rimraf' );
const { relative } = require( 'path' );
const { spawn } = require( 'child_process' );

const execute = ( command, args, env = {} ) => new Promise(
    ( resolve, reject ) => spawn( command, args, { stdio: 'inherit', env: { ...process.env, ...env } } )
        .on( 'close', code => 0 === code ? resolve() : reject( code ) )
);

const run = async ( target, type ) => {
    await rimraf( resolve( __dirname, '..', target ), { preserveRoot: true } );
    await execute( 'tsc', [ '--build', resolve( __dirname, `../${ target }.tsconfig.json` ) ] );

    const cfg = JSON.parse( await readFile( resolve( __dirname, '../package.json' ), 'utf8' ) );
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

    await Promise.all( glob.sync( resolve( __dirname, '..', target, '**/*.js' ) ).map( async path => {
        const min = uglify.minify( await readFile( path, 'utf8' ), { sourceMap: {} } );
        return Promise.all( [ writeFile( path, min.code ), writeFile( path + '.map', min.map ) ] );
    } ) );
};

( async () => {
    await Promise.all( [ run( 'cjs', 'commonjs' ), run( 'esm', 'module' ) ] );
} )();
