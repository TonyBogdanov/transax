import { CompilerOptionsType } from '../Type/CompilerOptionsType';

import CompilerInterface from './CompilerInterface';

import CompilerToken from './CompilerToken';
import TextToken from './TextToken';
import CompilerContext from './CompilerContext';
import TernaryExpressionToken from './TernaryExpressionToken';
import ComparisonExpressionToken from './ComparisonExpressionToken';
import CompilerOptions from './CompilerOptions';
import parse from './peg';

/**
 * Default implementation of the {@link CompilerInterface}.
 */
export default class Compiler implements CompilerInterface {

    /**
     * The options.
     *
     * @private
     */
    private readonly options: CompilerOptions;

    /**
     * Creates a new instance.
     *
     * @param options Customizes the compiler.
     */
    constructor( options: CompilerOptionsType = {} ) {
        this.options = options instanceof CompilerOptions ? options : new CompilerOptions( options );
    }

    /**
     * @inheritDoc
     */
    tokenize( value: string ): CompilerToken[] {
        const result: CompilerToken[] = [];
        for ( const token of parse( value ) ) {
            if ( 0 < result.length && token instanceof TextToken &&
                result[ result.length - 1 ] instanceof TextToken ) {
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
        this.options.logger.log( `Compiling: ${ value }.` );

        const context = new CompilerContext();
        const values = [ '""' ];

        for ( const token of this.tokenize( value ) ) {
            // some expressions need to be wrapped in parentheses in order to be concatenated
            const wrap = (
                token instanceof TernaryExpressionToken ||
                token instanceof ComparisonExpressionToken
            );

            const compiled = token.compile( context );
            values.push( wrap ? `(${ compiled })` : compiled );
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

        // optimize: use literal strings instead of function if there are no arguments
        if ( '' === args ) {
            return values.join( '+' );
        }

        return `(${ args })=>${ values.join( '+' ) }`;
    }

}
