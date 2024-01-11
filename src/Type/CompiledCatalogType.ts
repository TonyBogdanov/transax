import { LocaleType } from './LocaleType';
import { CompiledDictionaryType } from './CompiledDictionaryType';

/**
 * A compiled version of a {@link CatalogType}.
 */
export type CompiledCatalogType = Record<LocaleType, CompiledDictionaryType>;
