import { KeyType } from './KeyType';
import { CompiledValueType } from './CompiledValueType';

/**
 * A compiled version of a {@link DictionaryType}.
 */
export type CompiledDictionaryType = Record<KeyType, CompiledValueType>;
