/**
 * CRC32 checksum algorithm.
 */
export default class CRC32 {

    /**
     * Lookup table for the CRC32 algorithm.
     */
    static signedTable = new Array( 256 ).fill( 0 ).map( ( _, c ) => {
        for ( let i = 0; i < 8; i++ ) {
            c = ( ( c & 1 ) ? ( -306674912 ^ ( c >>> 1 ) ) : ( c >>> 1 ) );
        }

        return c;
    } );

    /**
     * Calculates the CRC32 checksum of the given string.
     *
     * @param value
     */
    static checksum( value: string ): number {
        let C = -1;
        for ( let i = 0, L = value.length, c = 0, d = 0; i < L; ) {
            c = value.charCodeAt( i++ );

            if ( c < 0x80 ) {
                C = ( C >>> 8 ) ^ CRC32.signedTable[ ( C ^ c ) & 0xFF ];
            } else if ( c < 0x800 ) {
                C = ( C >>> 8 ) ^ CRC32.signedTable[ ( C ^ ( 192 | ( ( c >> 6 ) & 31 ) ) ) & 0xFF ];
                C = ( C >>> 8 ) ^ CRC32.signedTable[ ( C ^ ( 128 | ( c & 63 ) ) ) & 0xFF ];
            } else if ( c >= 0xD800 && c < 0xE000 ) {
                c = ( c & 1023 ) + 64;
                d = value.charCodeAt( i++ ) & 1023;
                C = ( C >>> 8 ) ^ CRC32.signedTable[ ( C ^ ( 240 | ( ( c >> 8 ) & 7 ) ) ) & 0xFF ];
                C = ( C >>> 8 ) ^ CRC32.signedTable[ ( C ^ ( 128 | ( ( c >> 2 ) & 63 ) ) ) & 0xFF ];
                C = ( C >>> 8 ) ^ CRC32.signedTable[ ( C ^ ( 128 | ( ( d >> 6 ) & 15 ) | ( ( c & 3 ) << 4 ) ) ) & 0xFF ];
                C = ( C >>> 8 ) ^ CRC32.signedTable[ ( C ^ ( 128 | ( d & 63 ) ) ) & 0xFF ];
            } else {
                C = ( C >>> 8 ) ^ CRC32.signedTable[ ( C ^ ( 224 | ( ( c >> 12 ) & 15 ) ) ) & 0xFF ];
                C = ( C >>> 8 ) ^ CRC32.signedTable[ ( C ^ ( 128 | ( ( c >> 6 ) & 63 ) ) ) & 0xFF ];
                C = ( C >>> 8 ) ^ CRC32.signedTable[ ( C ^ ( 128 | ( c & 63 ) ) ) & 0xFF ];
            }
        }

        return ~C;
    }

}
