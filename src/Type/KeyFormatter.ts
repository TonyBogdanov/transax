import AnalyzerToken from '../Analyzer/AnalyzerToken';
import { Key } from './Key';

/**
 * A function to format the translation key based on the context.
 */
export type KeyFormatter = ( key: Key, token: AnalyzerToken ) => string;
