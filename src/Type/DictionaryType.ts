import { KeyType } from './KeyType';
import { ValueType } from './ValueType';

/**
 * Translation dictionary as a hashmap of key-value pairs.
 *
 * @example
 * ```typescript
 * { "my.translation.key": "Hello there, nice to meet you!" }
 * ```
 */
export type DictionaryType = Record<KeyType, ValueType>;
