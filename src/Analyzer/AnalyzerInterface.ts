import AnalyzerToken from './AnalyzerToken';

/**
 * Defines an interface for **Analyzer** classes.
 */
export default interface AnalyzerInterface {

    /**
     * Analyzes the given source code and returns a list of parsed tokens.
     *
     * @param code The source code to be parsed.
     * @param source Optional origin of the source code, usually a path to the source file.
     */
    analyze( code: string, source?: string ): AnalyzerToken[];

}
