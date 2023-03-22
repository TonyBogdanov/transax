import { Key } from './Key';
import { CompiledValue } from './CompiledValue';

/**
 * A compiled version of a {@link Dictionary}.
 */
export type CompiledDictionary = Record<Key, CompiledValue>;
