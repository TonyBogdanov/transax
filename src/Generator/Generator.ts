import { GeneratorOptionsType } from '../Type/GeneratorOptionsType';
import { LocaleType } from '../Type/LocaleType';
import { DictionaryType } from '../Type/DictionaryType';
import { CatalogType } from '../Type/CatalogType';

import GeneratorInterface from './GeneratorInterface';

import GeneratorOptions from './GeneratorOptions';
import CRC32 from '../Util/CRC32';

/**
 * Default implementation of the {@link GeneratorInterface}.
 */
export default class Generator implements GeneratorInterface {

    /**
     * The options.
     *
     * @private
     */
    private readonly options: GeneratorOptions;

    /**
     * Detected translation keys.
     *
     * @private
     */
    private readonly keys: Record<string, string[]> = {};

    /**
     * @param deduplicate
     * @private
     */
    private getDeduplicationDump( deduplicate: string[] ): string {
        if ( 0 === Object.keys( deduplicate ).length ) {
            return '';
        }

        let result = 'const ';
        for ( let i = 0; i < deduplicate.length; i++ ) {
            result += ( 0 < i ? '      ' : '' ) + this.getDeduplicationVar( i ) + ' = ' + deduplicate[ i ] + ',\n';
        }

        return result.substring( 0, result.length - 2 ) + ';\n\n';
    }

    /**
     * @param index
     * @private
     */
    private getDeduplicationVar( index: number ): string {
        const baseChars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        let result = '';

        do {
            result = baseChars[ index % 52 ] + result;
            index = Math.floor( index / 52 );
        } while ( index > 0 );

        return '_' + result;
    }

    /**
     * Creates a new instance.
     *
     * @param options Customizes the generator.
     */
    constructor( options: GeneratorOptionsType = {} ) {
        this.options = options instanceof GeneratorOptions ? options : new GeneratorOptions( options );
    }

    /**
     * @inheritDoc
     */
    parse( code: string, source?: string, accumulate: boolean = false ): this {
        if ( !accumulate && !!source ) {
            for ( const [ key, sources ] of Object.entries( this.keys ) ) {
                this.keys[ key ] = sources.filter( candidate => candidate.split( '::' )[ 0 ] !== source );

                if ( 0 === this.keys[ key ].length ) {
                    delete this.keys[ key ];
                }
            }
        }

        const tokens = this.options.analyzer.analyze( code, source );
        for ( const token of tokens ) {
            if ( !this.keys.hasOwnProperty( token.key ) ) {
                this.keys[ token.key ] = [];
            }

            const sources = this.keys[ token.key ];
            const source = `${ token.source || '[inline code]' }::${ token.line }:${ token.column }`;

            sources.includes( <string> token.source ) || sources.push( source );
        }

        return this;
    }

    /**
     * @inheritDoc
     */
    setTranslations( locale: LocaleType, dictionary: DictionaryType ): this {
        this.options.translations[ locale ] = dictionary;
        return this;
    }

    /**
     * @inheritDoc
     */
    mergeTranslations( catalog: CatalogType ): this {
        for ( const [ locale, dictionary ] of Object.entries( catalog ) ) {
            this.setTranslations( locale, dictionary );
        }

        return this;
    }

    /**
     * @inheritDoc
     */
    removeTranslations( locale: LocaleType ): this {
        if ( this.options.translations.hasOwnProperty( locale ) ) {
            delete this.options.translations[ locale ];
        }

        return this;
    }

    /**
     * @inheritDoc
     */
    getTranslationsChecksum(): number {
        return CRC32.checksum( JSON.stringify( this.options.translations ) );
    }

    /**
     * @inheritDoc
     */
    getMissingTranslationKeys(): Record<string, string[]> {
        const result: Record<string, string[]> = {};
        for ( const locale of Object.keys( this.options.translations ) ) {
            const translations = this.options.translations[ locale ];
            result[ locale ] = Object.keys( this.keys ).filter( key => !translations.hasOwnProperty( key ) );
        }

        return result;
    }

    /**
     * @inheritDoc
     */
    getUnusedTranslationKeys(): Record<string, string[]> {
        const result: Record<string, string[]> = {};
        for ( const locale of Object.keys( this.options.translations ) ) {
            const translations = this.options.translations[ locale ];
            result[ locale ] = Object.keys( translations ).filter( key => !this.keys.hasOwnProperty( key ) );
        }

        return result;
    }

    /**
     * @inheritDoc
     */
    getCompiledTranslationsDump( includeMeta?: boolean, deduplicate?: string[] ): string {
        const trackMap: Record<string, number> = {};
        let filtered = Object.fromEntries( Object.keys( this.options.translations ).map( locale => {
            const translations = this.options.translations[ locale ];
            const result: Record<string, string> = {};

            for ( const key of Object.keys( this.keys ).filter( key => translations.hasOwnProperty( key ) ) ) {
                const dump = this.options.compiler.compile( translations[ key ] );
                result[ key ] = dump;

                if ( !deduplicate ) {
                    continue;
                }

                if ( !trackMap.hasOwnProperty( dump ) ) {
                    trackMap[ dump ] = 0;
                }

                trackMap[ dump ]++;
            }

            return [ locale, result ];
        } ) );

        if ( deduplicate ) {
            // we use push instead of assignment, because we want the caller to be able to see the values
            deduplicate.push( ...Object.keys( trackMap ).filter( dump => 1 < trackMap[ dump ] ) );

            for ( const [ locale, translations ] of Object.entries( filtered ) ) {
                for ( const [ key, value ] of Object.entries( translations ) ) {
                    const index = deduplicate.indexOf( value );
                    if ( -1 === index ) {
                        continue;
                    }

                    filtered[ locale ][ key ] = this.getDeduplicationVar( index );
                }
            }
        }

        const quote = ( v: string ) => v.match( /^[a-z_$][a-z0-9_$]*$/i ) ? v : JSON.stringify( v );
        let result = `{\n`;

        for ( const [ locale, translations ] of Object.entries( filtered ) ) {
            result += `    ${ quote( locale ) }: {\n`;

            for ( const [ key, value ] of Object.entries( translations ) ) {
                if ( includeMeta ) {
                    if ( '{\n' !== result.slice( -2 ) ) {
                        result += '\n';
                    }

                    this.keys[ key ].forEach( source => result += `        // ${ source }\n` );
                }

                result += `        ${ quote( key ) }: ${ value },\n`;
            }

            result += `    },\n`;
        }

        return `${ result }}`;
    }

    /**
     * @inheritDoc
     */
    getCompiledTranslationsDumpAsCJSExport( includeMeta?: boolean ): string {
        const dedup: string[] = [];
        const dump = `module.exports = ${ this.getCompiledTranslationsDump( includeMeta, dedup ) };\n`;

        return this.getDeduplicationDump( dedup ) + dump;
    }

    /**
     * @inheritDoc
     */
    getCompiledTranslationsDumpAsESMExport( includeMeta?: boolean ): string {
        const dedup: string[] = [];
        const dump = `export default ${ this.getCompiledTranslationsDump( includeMeta, dedup ) };\n`;

        return this.getDeduplicationDump( dedup ) + dump;
    }
}
