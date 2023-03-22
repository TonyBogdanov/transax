import { TranslationKey } from './TranslationKey';
import { TranslationValue } from './TranslationValue';

/**
 * Translation dictionary as a hashmap of key-value pairs.
 *
 * @example
 * ```typescript
 * { "my.translation.key": "Hello there, nice to meet you!" }
 * ```
 */
export type TranslationDictionary = Record<TranslationKey, TranslationValue>;
