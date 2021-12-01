import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import { promises } from 'fs';
import pegjs from 'pegjs';

const { readFile, writeFile } = promises;
const __dirname = dirname( fileURLToPath( import.meta.url ) );

( async () => {

    console.log( 'Generating parser.' );

    const grammar = ( await readFile( resolve( __dirname, '../src/grammar.pegjs' ) ) ).toString();
    const parser = pegjs.generate( grammar, { output: 'source' } );

    await writeFile( resolve( __dirname, '../src/parse.js' ), `export default ${ parser }.parse` );

} )();
