import Util from '../Util';

import { TranslationDictionary } from '../Translator/TranslationDictionary';

import Analyzer from '../Analyzer/Analyzer';
import AnalyzerInterface from '../Analyzer/AnalyzerInterface';

import Compiler from '../Compiler/Compiler';
import CompilerInterface from '../Compiler/CompilerInterface';

import Logger from '../Logger/Logger';
import LoggerInterface from '../Logger/LoggerInterface';

import GeneratorInterface from './GeneratorInterface';
import { GeneratorOptions } from './GeneratorOptions';

class Options {

    translations: TranslationDictionary;
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
    parse( code: string, source?: string ): this {
        if ( 'object' !== typeof process ) {
            throw new Error( 'Generator.parse must be run in a NodeJS environment, `process` is not available.' );
        }

        const tokens = this.options.analyzer.analyze( code, source ? Util.relative( process.cwd(), source ) : undefined );
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
    getCompiledTranslationsDump(): string {
        const quote = ( v: string ) => v.match( /^[a-z_$][a-z0-9_$]*$/i ) ? v : JSON.stringify( v );
        let result = `{\n`;

        for ( const locale of Object.keys( this.options.translations ) ) {
            const translations = this.options.translations[ locale ];
            result += `    ${ quote( locale ) }: {\n`;

            for ( const key of Object.keys( this.keys ).filter( key => translations.hasOwnProperty( key ) ) ) {
                result += `        ${ quote( key ) }: ${ this.options.compiler.compile( translations[ key ] ) },\n`;
            }

            result += `    },\n`;
        }

        return `${ result }}`;
    }

    /**
     * @inheritDoc
     */
    getCompiledTranslationsDumpAsCJSExport(): string {
        return `module.exports = ${ this.getCompiledTranslationsDump() };\n`;
    }

    /**
     * @inheritDoc
     */
    getCompiledTranslationsDumpAsESMExport(): string {
        return `export default ${ this.getCompiledTranslationsDump() };\n`;
    }
}
