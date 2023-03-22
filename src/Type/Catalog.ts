import { Locale } from './Locale';
import { Dictionary } from './Dictionary';

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
export type Catalog = Record<Locale, Dictionary>;
