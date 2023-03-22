import { TranslationLocale } from './TranslationLocale';
import { TranslationDictionary } from './TranslationDictionary';

/**
 * Catalog of translation entries, keyed by locale.
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
export type TranslationCatalog = Record<TranslationLocale, TranslationDictionary>;
