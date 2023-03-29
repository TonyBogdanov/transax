import Logger from '../Logger/Logger';
import LoggerInterface from '../Logger/LoggerInterface';

import AbstractCompilerToken from './AbstractCompilerToken';
import TextCompilerToken from './TextCompilerToken';
import CompilerContext from './CompilerContext';
import CompilerInterface from './CompilerInterface';
import { CompilerOptions } from './CompilerOptions';

import parse from './peg';

class Options {

    logger: LoggerInterface;

    constructor( data: CompilerOptions = {} ) {
        this.logger = data.logger ?? new Logger( { namespace: 'TRANSAX:COMPILER' } );
    }

}

/**
 * Default implementation of the {@link CompilerInterface}.
 */
export default class Compiler implements CompilerInterface {

    private readonly options: Options;

    /**
     * Creates a new instance.
     *
     * @param options Customizes the compiler.
     */
    constructor( options: CompilerOptions = {} ) {
        this.options = new Options( options );
    }

    /**
     * @inheritDoc
     */
    tokenize( value: string ): AbstractCompilerToken[] {
        const result: AbstractCompilerToken[] = [];
        for ( const token of parse( value ) ) {
            if ( 0 < result.length && token instanceof TextCompilerToken &&
                result[ result.length - 1 ] instanceof TextCompilerToken ) {
                result[ result.length - 1 ].text += token.text;
                continue;
            }

            result.push( token );
        }

        return result;
    }

    /**
     * @inheritDoc
     */
    compile( value: string ): string {
        const context = new CompilerContext();
        const values = [ '""' ];

        for ( const token of this.tokenize( value ) ) {
            values.push( token.compile( context ) );
        }

        // optimize: replace 'null', 'true' and 'false' entries with empty strings
        for ( let i = 0; i < values.length; i++ ) {
            if ( [ 'null', 'true', 'false' ].includes( values[ i ] ) ) {
                values[ i ] = '""';
            }
        }

        // optimize: append value to previous one if it starts with " and previous one ends with "
        for ( let i = 1; i < values.length; i++ ) {
            if ( values[ i - 1 ].startsWith( '"' ) && values[ i - 1 ].endsWith( '"' ) &&
                values[ i ].startsWith( '"' ) ) {
                values[ i - 1 ] = values[ i - 1 ].slice( 0, -1 ) + values[ i ].slice( 1 );
                values.splice( i, 1 );
                i--;
            }
        }

        let args = '';
        if ( 0 < context.parameters.length ) {
            args += `{${ context.parameters.join( ',' ) }}`;
        }

        if ( 0 < context.globals.length ) {
            if ( 0 === context.parameters.length ) {
                args += '_';
            }

            args += `,{${ context.globals.join( ',' ) }}`;
        }

        return `(${ args })=>${ values.join( '+' ) }`;
    }

}
