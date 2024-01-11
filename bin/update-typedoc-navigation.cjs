/**
 * This file has to be CommonJS because of this issue:
 * @see https://github.com/metadevpro/ts-pegjs/issues/114
 */

const { readFile, writeFile, readdir } = require( 'node:fs/promises' );
const { resolve, extname } = require( 'node:path' );

( async () => {
    const configPath = resolve( __dirname, '../docs/.vuepress/config.ts' );
    const content = await readFile( configPath, 'utf-8' );

    const [ prefix, tail ] = content.split( /\/\*.*?typedoc:classes:start.*?\*\//, 2 );
    const [ , suffix ] = tail.split( /\/\*.*?typedoc:classes:stop.*?\*\//, 2 );

    const classes = await readdir( resolve( __dirname, '../docs/api/classes' ) );
    const interfaces = await readdir( resolve( __dirname, '../docs/api/interfaces' ) );

    await writeFile(
        configPath,

        prefix + '/* typedoc:classes:start - do not remove or edit below this line */\n' +

        [
            ...classes.map( v => '/api/classes/' + v.substring( 0, v.length - extname( v ).length ) ),
            ...interfaces.map( v => '/api/interfaces/' + v.substring( 0, v.length - extname( v ).length ) ),
        ].map( v => ' '.repeat( 20 ) + JSON.stringify( v ) ).join( ',\n' ) +

        '\n' + ' '.repeat( 20 ) + '/* typedoc:classes:stop - do not remove or edit above this line */' + suffix,
    );
} )();
