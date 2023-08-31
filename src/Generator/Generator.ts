import { str } from 'crc-32';

import { Catalog } from '../Type/Catalog';

import Analyzer from '../Analyzer/Analyzer';
import AnalyzerInterface from '../Analyzer/AnalyzerInterface';

import Compiler from '../Compiler/Compiler';
import CompilerInterface from '../Compiler/CompilerInterface';

import Logger from '../Logger/Logger';
import LoggerInterface from '../Logger/LoggerInterface';

import GeneratorInterface from './GeneratorInterface';
import { GeneratorOptions } from './GeneratorOptions';
import { Locale } from '../Type/Locale';
import { Dictionary } from '../Type/Dictionary';

class Options {

    translations: Catalog;
    analyzer: AnalyzerInterface;
    compiler: CompilerInterface;
    logger: LoggerInterface;

    constructor( data: GeneratorOptions = {} ) {
        this.translations = data.translations ?? {};
        this.analyzer = data.analyzer ?? new Analyzer();
        this.compiler = data.compiler ?? new Compiler();
        this.logger = data.logger ?? new Logger( { namespace: 'TRANSAX:GENERATOR' } );
    }

}

/**
 * Default implementation of the {@link GeneratorInterface}.
 */
export default class Generator implements GeneratorInterface {

    private readonly options: Options;
    private readonly keys: Record<string, string[]> = {};

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
    constructor( options: GeneratorOptions = {} ) {
        this.options = new Options( options );
    }

    /**
     * @inheritDoc
     */
    parse( code: string, source?: string, accumulate: boolean = false ): this {
        if ( !accumulate && !!source ) {
            for ( const [ key, sources ] of Object.entries( this.keys ) ) {
                this.keys[ key ] = sources.filter( candidate => candidate.split( '::' )[0] !== source );

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
    setTranslations( locale: Locale, dictionary: Dictionary ): this {
        this.options.translations[ locale ] = dictionary;
        return this;
    }

    /**
     * @inheritDoc
     */
    removeTranslations( locale: Locale ): this {
        if ( this.options.translations.hasOwnProperty( locale ) ) {
            delete this.options.translations[ locale ];
        }

        return this;
    }

    /**
     * @inheritDoc
     */
    getTranslationsChecksum(): number {
        return str( JSON.stringify( this.options.translations ) );
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
