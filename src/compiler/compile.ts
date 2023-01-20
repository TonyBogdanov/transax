import TokenInterface from '../token/interface';
import Context from './context';

export default function compile( tokens: TokenInterface[] ): string {
    const context = new Context();
    const values = [ '""' ];

    for ( const token of tokens ) {
        const value = token.compile( context );
        if ( '' === value ) {
            continue;
        }

        values.push( value );
    }

    // optimize: replace 'null' entries with empty strings
    for ( let i = 0; i < values.length; i++ ) {
        if ( 'null' === values[ i ] ) {
            values[ i ] = '""';
        }
    }

    // optimize: append value to previous one if it starts with " and previous one ends with "
    for ( let i = 1; i < values.length; i++ ) {
        if ( values[ i - 1 ].startsWith( '"' ) && values[ i - 1 ].endsWith( '"' ) && values[ i ].startsWith( '"' ) ) {
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
