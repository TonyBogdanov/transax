import { AnalyzerOptionsType } from '../Type/AnalyzerOptionsType';

import AnalyzerInterface from './AnalyzerInterface';

import AnalyzerToken from './AnalyzerToken';
import AnalyzerOptions from './AnalyzerOptions';
import parse from './peg';

/**
 * Default implementation of the {@link AnalyzerInterface}.
 */
export default class Analyzer implements AnalyzerInterface {

    /**
     * The options.
     *
     * @private
     */
    private readonly options: AnalyzerOptions;

    /**
     * Returns the suffix explanation for the token.
     *
     * @param token
     * @param source
     * @private
     */
    private suffix( token: AnalyzerToken, source?: string ): string {
        return source ?
            `in: ${ source }::${ token.line }:${ token.column }.` :
            `at: ${ token.line }:${ token.column }.`;
    }

    /**
     * Logs a skipped token.
     *
     * @param token
     * @param source
     * @private
     */
    private skip( token: AnalyzerToken, source?: string ): void {
        this.options.logger.verbose( `Skipping ${ token.text } because: "${
            token.name }" isn't in the list of allowed names ${ this.suffix( token, source ) }` );
    }

    /**
     * Logs a registered token.
     *
     * @param token
     * @param source
     * @private
     */
    private register( token: AnalyzerToken, source?: string ): void {
        this.options.logger.verbose( `Registering ${ token.text } ${ this.suffix( token, source ) }` );
    }

    /**
     * Creates a new instance.
     *
     * @param options Customizes the analyzer.
     */
    constructor( options: AnalyzerOptionsType = {} ) {
        this.options = options instanceof AnalyzerOptions ? options : new AnalyzerOptions( options );
    }

    /**
     * @inheritDoc
     */
    analyze( code: string, source?: string ): AnalyzerToken[] {
        this.options.logger.log( `Analyzing: ${ source || '[inline code]' }.` );
        const result: AnalyzerToken[] = [];

        for ( const token of parse( code ) ) {
            if ( -1 === this.options.names.indexOf( token.name ) ) {
                this.skip( token, source );
                continue;
            }

            token.source = source;
            token.key = this.options.keyFormatter( token.key, token );

            this.register( token, source );
            result.push( token );
        }

        return result;
    }

}
