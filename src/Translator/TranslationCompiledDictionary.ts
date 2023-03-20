import { TranslationLocale } from './TranslationLocale';
import { TranslationCompiledDictionaryEntry } from './TranslationCompiledDictionaryEntry';

/**
 * A compiled version of a {@link TranslationDictionary}.
 */
export type TranslationCompiledDictionary = Record<TranslationLocale, TranslationCompiledDictionaryEntry>;
