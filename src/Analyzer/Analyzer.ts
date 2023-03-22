import Logger from '../Logger/Logger';
import LoggerInterface from '../Logger/LoggerInterface';

import AnalyzerToken from './AnalyzerToken';
import AnalyzerInterface from './AnalyzerInterface';
import { AnalyzerOptions } from './AnalyzerOptions';

import parse from './peg';

class Options {

    names: string[];
    logger: LoggerInterface;

    constructor( data: AnalyzerOptions = {} ) {
        this.names = data.names ?? [ '$t' ];
        this.logger = data.logger ?? new Logger( { namespace: 'TRANSAX:ANALYZER' } );
    }

}

/**
 * Default implementation of the {@link AnalyzerInterface}.
 */
export default class Analyzer implements AnalyzerInterface {

    private readonly options: Options;

    private skip( token: AnalyzerToken, source?: string ): void {
        const allowed = source ?
            `in: ${ source }::${ token.line }:${ token.column }.` :
            `at: ${ token.line }:${ token.column }.`;

        this.options.logger.verbose( `Skipping ${ token.text } because: "${
            token.name }" isn't in the list of allowed names ${ allowed }` );
    }

    /**
     * Creates a new instance.
     *
     * @param options Customizes the analyzer.
     */
    constructor( options: AnalyzerOptions = {} ) {
        this.options = new Options( options );
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
            result.push( token );
        }

        return result;
    }

}
