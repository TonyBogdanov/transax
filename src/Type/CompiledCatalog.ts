import { Locale } from './Locale';
import { CompiledDictionary } from './CompiledDictionary';

/**
 * A compiled version of a {@link Catalog}.
 */
export type CompiledCatalog = Record<Locale, CompiledDictionary>;
