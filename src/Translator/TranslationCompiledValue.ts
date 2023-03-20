import { TranslationContextParams } from './TranslationContextParams';
import { TranslationContextGlobals } from './TranslationContextGlobals';

/**
 * A compiled version of a {@link TranslationValue}.
 */
export type TranslationCompiledValue = ( params: TranslationContextParams, globals: TranslationContextGlobals ) => string;
