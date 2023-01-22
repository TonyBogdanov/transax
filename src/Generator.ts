import { sync } from 'glob';

import { promises } from 'fs';
import { relative } from 'path';

import { Logger, Options as LoggerOptions } from './Logger';
import { Analyzer, Options as AnalyzerOptions } from './Analyzer';
import { Compiler, Options as CompilerOptions } from './Compiler';

const { readFile, writeFile } = promises;

type TranslationDictionary = Record<string, Record<string, string>>;

const isTranslationDictionary = ( v: any ): v is TranslationDictionary => v instanceof Object &&
    0 === Object.values( v ).filter( ( v: any ) => !( v instanceof Object ) ||
        0 !== Object.values( v ).filter( ( v: any ) => 'string' !== typeof v ).length ).length;

export class Options {
    translations: TranslationDictionary = {};
    loggerOptions: LoggerOptions | Object = {};
    analyzerOptions: AnalyzerOptions | Object = {};
    compilerOptions: CompilerOptions | Object = {};

    constructor( values: Object = {} ) {
        if ( 'translations' in values ) {
            if ( !isTranslationDictionary( values.translations ) ) {
                throw new Error( 'Options.translations must be a TranslationDictionary.' );
            }

            this.translations = values.translations;
        }

        if ( 'loggerOptions' in values ) {
            if ( !( values.loggerOptions instanceof Object ) ) {
                throw new Error( 'Options.loggerOptions must be an object.' );
            }

            this.loggerOptions = values.loggerOptions;
        }

        if ( 'analyzerOptions' in values ) {
            if ( !( values.analyzerOptions instanceof Object ) ) {
                throw new Error( 'Options.analyzerOptions must be an object.' );
            }

            this.analyzerOptions = values.analyzerOptions;
        }

        if ( 'compilerOptions' in values ) {
            if ( !( values.compilerOptions instanceof Object ) ) {
                throw new Error( 'Options.compilerOptions must be an object.' );
            }

            this.compilerOptions = values.compilerOptions;
        }
    }
}

export class Generator {
    options: Options;
    logger: Logger;
    analyzer: Analyzer;
    compiler: Compiler;
    keys: Record<string, string[]> = {};

    constructor( options: Options | Object = {} ) {
        this.options = options instanceof Options ? options : new Options( options );
        this.logger = new Logger( 'Generator', this.options.loggerOptions );
        this.analyzer = new Analyzer( this.options.analyzerOptions );
        this.compiler = new Compiler( this.options.compilerOptions );
    }

    async parseContent( code: string, source?: string ): Promise<this> {
        const tokens = this.analyzer.analyze( code, source ? relative( process.cwd(), source ) : undefined );
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

    async parseFile( path: string ): Promise<this> {
        await this.parseContent( ( await readFile( path ) ).toString( 'utf-8' ), path );
        return this;
    }

    async parseGlob( pattern: string ): Promise<this> {
        await Promise.all( sync( pattern ).map( path => this.parseFile( path ) ) );
        return this;
    }

    getMissingTranslationKeys(): Record<string, string[]> {
        const result: Record<string, string[]> = {};
        for ( const locale of Object.keys( this.options.translations ) ) {
            const translations = this.options.translations[ locale ];
            result[ locale ] = Object.keys( this.keys ).filter( key => !translations.hasOwnProperty( key ) );
        }

        return result;
    }

    getUnusedTranslationKeys(): Record<string, string[]> {
        const result: Record<string, string[]> = {};
        for ( const locale of Object.keys( this.options.translations ) ) {
            const translations = this.options.translations[ locale ];
            result[ locale ] = Object.keys( translations ).filter( key => !this.keys.hasOwnProperty( key ) );
        }

        return result;
    }

    getCompiledTranslationsDump(): string {
        const quote = ( v: string ) => v.match( /^[a-z_$][a-z0-9_$]*$/i ) ? v : JSON.stringify( v );
        let result = `{\n`;

        for ( const locale of Object.keys( this.options.translations ) ) {
            const translations = this.options.translations[ locale ];
            result += `    ${ quote( locale ) }: {\n`;

            for ( const key of Object.keys( this.keys ).filter( key => translations.hasOwnProperty( key ) ) ) {
                result += `        ${ quote( key ) }: ${ this.compiler.compile( translations[ key ] ) },\n`;
            }

            result += `    },\n`;
        }

        return `${ result }}`;
    }

    getCompiledTranslationsDumpAsCJSExport(): string {
        return `module.exports = ${ this.getCompiledTranslationsDump() };\n`;
    }

    getCompiledTranslationsDumpAsESMExport(): string {
        return `export default ${ this.getCompiledTranslationsDump() };\n`;
    }

    async dumpMissingTranslationKeysAsJSON( path: string ): Promise<void> {
        await writeFile( path, JSON.stringify( this.getMissingTranslationKeys(), null, 2 ) );
    }

    async dumpUnusedTranslationKeysAsJSON( path: string ): Promise<void> {
        await writeFile( path, JSON.stringify( this.getUnusedTranslationKeys(), null, 2 ) );
    }

    async dumpCompiledTranslationsForCJS( path: string ): Promise<void> {
        await writeFile( path, this.getCompiledTranslationsDumpAsCJSExport() );
    }

    async dumpCompiledTranslationsForESM( path: string ): Promise<void> {
        await writeFile( path, this.getCompiledTranslationsDumpAsESMExport() );
    }
}
