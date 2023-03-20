import { TranslationLocale } from './TranslationLocale';
import { TranslationDictionaryEntry } from './TranslationDictionaryEntry';

/**
 * Dictionary of translation entries, keyed by locale.
 *
 * @example
 * ```typescript
 * {
 *   "en_US": {
 *     "my.translation.key": "Hello there, nice to meet you!",
 *   },
 * }
 * ```
 */
export type TranslationDictionary = Record<TranslationLocale, TranslationDictionaryEntry>;
