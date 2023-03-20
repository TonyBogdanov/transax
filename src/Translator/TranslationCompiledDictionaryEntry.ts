import { TranslationKey } from './TranslationKey';
import { TranslationCompiledValue } from './TranslationCompiledValue';

/**
 * A compiled version of a {@link TranslationDictionaryEntry}.
 */
export type TranslationCompiledDictionaryEntry = Record<TranslationKey, TranslationCompiledValue>;
