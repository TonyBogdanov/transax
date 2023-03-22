import { Key } from './Key';
import { Value } from './Value';

/**
 * Translation dictionary as a hashmap of key-value pairs.
 *
 * @example
 * ```typescript
 * { "my.translation.key": "Hello there, nice to meet you!" }
 * ```
 */
export type Dictionary = Record<Key, Value>;
