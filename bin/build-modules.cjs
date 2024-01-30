/**
 * This file has to be CommonJS because of this issue:
 * @see https://github.com/metadevpro/ts-pegjs/issues/114
 */

const glob = require( 'glob' );
const uglify = require( 'uglify-js' );

const { readFile, writeFile, unlink } = require( 'node:fs/promises' );
const { resolve } = require( 'node:path' );
const { rimraf } = require( 'rimraf' );
const { relative, extname } = require( 'path' );
const { spawn } = require( 'child_process' );

// for debugging purposes
const minify = true;

const execute = ( command, args, env = {} ) => new Promise(
    ( resolve, reject ) => spawn( command, args, { stdio: 'inherit', env: { ...process.env, ...env } } )
        .on( 'close', code => 0 === code ? resolve() : reject( code ) )
);

const cjsPatch = content => {
    let match;
    while ( null !== ( match = content.match( /(require\s*\(\s*['"](\.{1,2}\/.+?(?<!\.cjs))['"])/ ) ) ) {
        content = content.substring( 0, match.index ) + 'require("' + match[2] + '.cjs"' +
            content.substring( match.index + match[0].length );
    }

    return content;
};

const esmPatch = content => {
    let match;
    while ( null !== ( match = content.match( /(import\s+(.+?)\s+from\s+['"](\.{1,2}\/.+?(?<!\.mjs))['"])/ ) ) ) {
        content = content.substring( 0, match.index ) + 'import ' + match[2] + ' from "' + match[3] + '.mjs"' +
            content.substring( match.index + match[0].length );
    }

    return content;
};

const run = async ( target, type, ext, patch ) => {
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
        const newPath = path.substring( 0, path.length - extname( path ).length ) + ext;

        let code = patch( await readFile( path, 'utf8' ) ),
            map = '';

        if ( minify ) {
            const min = uglify.minify( code, { sourceMap: {} } );

            code = min.code;
            map = min.map;
        }

        return Promise.all( [
            unlink( path ),
            writeFile( newPath, code ),
            writeFile( newPath + '.map', map ),
        ] );
    } ) );
};

( async () => {
    await Promise.all( [
        run( 'cjs', 'commonjs', '.cjs', cjsPatch ),
        run( 'esm', 'module', '.mjs', esmPatch ),
    ] );
} )();
