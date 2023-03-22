import { TranslationKey } from './TranslationKey';
import { TranslationCompiledValue } from './TranslationCompiledValue';

/**
 * A compiled version of a {@link TranslationDictionary}.
 */
export type TranslationCompiledDictionary = Record<TranslationKey, TranslationCompiledValue>;
