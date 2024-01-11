import { GeneratorOptionsType } from '../Type/GeneratorOptionsType';
import { CatalogType } from '../Type/CatalogType';

import LoggerInterface from '../Logger/LoggerInterface';
import AnalyzerInterface from '../Analyzer/AnalyzerInterface';
import CompilerInterface from '../Compiler/CompilerInterface';

import Logger from '../Logger/Logger';
import Analyzer from '../Analyzer/Analyzer';
import Compiler from '../Compiler/Compiler';

/**
 * Options for the {@link Generator}.
 */
export default class GeneratorOptions implements GeneratorOptionsType {

    /** @inheritDoc */
    translations: CatalogType;

    /** @inheritDoc */
    analyzer: AnalyzerInterface;

    /** @inheritDoc */
    compiler: CompilerInterface;

    /** @inheritDoc */
    logger: LoggerInterface;

    /**
     * Creates a new instance.
     *
     * @param options
     */
    constructor( options: GeneratorOptionsType = {} ) {
        if ( null === options || 'object' !== typeof options ) {
            throw new TypeError( 'Expected options to be an object.' );
        }

        if ( 'undefined' === typeof options.translations ) {
            this.translations = {};
        } else if ( null !== options.translations && 'object' === typeof options.translations ) {
            this.translations = options.translations;
        } else {
            throw new TypeError( 'Expected options.translations to be an object.' );
        }

        if ( 'undefined' === typeof options.analyzer ) {
            this.analyzer = new Analyzer();
        } else if ( options.analyzer instanceof Analyzer ) { // should be AnalyzerInterface, but not possible in TS
            this.analyzer = options.analyzer;
        } else {
            throw new TypeError( 'Expected options.analyzer to be an instance of AnalyzerInterface.' );
        }

        if ( 'undefined' === typeof options.compiler ) {
            this.compiler = new Compiler();
        } else if ( options.compiler instanceof Compiler ) { // should be CompilerInterface, but not possible in TS
            this.compiler = options.compiler;
        } else {
            throw new TypeError( 'Expected options.compiler to be an instance of CompilerInterface.' );
        }

        if ( 'undefined' === typeof options.logger ) {
            this.logger = new Logger( { namespace: 'TRANSAX:COMPILER' } );
        } else if ( options.logger instanceof Logger ) { // should be LoggerInterface, but not possible in TS
            this.logger = options.logger;
        } else {
            throw new TypeError( 'Expected options.logger to be an instance of LoggerInterface.' );
        }
    }

}
