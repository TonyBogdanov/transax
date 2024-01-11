import { KeyType } from './KeyType';

import AnalyzerToken from '../Analyzer/AnalyzerToken';

/**
 * A function to format the translation key based on the context.
 */
export type KeyFormatterType = ( key: KeyType, token: AnalyzerToken ) => string;
