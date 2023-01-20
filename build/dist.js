const { spawn } = require( 'child_process' );
const { resolve } = require( 'path' );
const { readFile, writeFile } = require( 'fs' ).promises;
const rimraf = require( 'rimraf' );
const glob = require( 'glob-promise' );
const uglify = require( 'uglify-js' );

function run( command, args ) {
    return new Promise( ( resolve, reject ) => spawn( command, args, { stdio: 'inherit' } )
        .on( 'close', code => 0 === code ? resolve( null ) : reject( code ) ) );
}

async function build( target ) {
    const log = ( ...args ) => console.log( `[${ target.toUpperCase() }]`, ...args );

    log( 'Transpiling.' );
    await run( 'tsc', [ '--build', resolve( __dirname, `../${ target }.tsconfig.json` ) ] );

    log( 'Cleaning up.' );
    await rimraf( resolve( __dirname, `../dist/${ target }/token/interface.js` ) );

    await Promise.all( ( await glob( resolve( __dirname, `../dist/${ target }/**/*.js` ) ) ).map( async path => {
        log( `Minifying: ${ path }.` );
        const min = uglify.minify( await readFile( path, 'utf8' ), {
            sourceMap: {},
        } );

        return Promise.all( [ writeFile( path, min.code ), writeFile( path + '.map', min.map ) ] );
    } ) );
}

( async () => {
    console.log( 'Purging dist.' );
    await rimraf( resolve( __dirname, '../dist' ) );

    await Promise.all( [ build( 'esm' ), build( 'cjs' ) ] );
    console.log( '[OK]' );
} )();
