import { TranslationKey } from './TranslationKey';
import { TranslationValue } from './TranslationValue';

/**
 * Translation dictionary entry as key-value pair.
 *
 * @example
 * ```typescript
 * "my.translation.key": "Hello there, nice to meet you!"
 * ```
 */
export type TranslationDictionaryEntry = Record<TranslationKey, TranslationValue>;
