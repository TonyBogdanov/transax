import AnalyzerToken from '../Analyzer/AnalyzerToken';
import { TranslationKey } from './TranslationKey';

/**
 * A function to format the translation key based on the context.
 */
export type TranslationKeyFormatter = ( key: TranslationKey, token: AnalyzerToken ) => string;
