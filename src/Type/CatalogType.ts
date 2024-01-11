import { LocaleType } from './LocaleType';
import { DictionaryType } from './DictionaryType';

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
export type CatalogType = Record<LocaleType, DictionaryType>;
