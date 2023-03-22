import { TranslationLocale } from './TranslationLocale';
import { TranslationCompiledDictionary } from './TranslationCompiledDictionary';

/**
 * A compiled version of a {@link TranslationCatalog}.
 */
export type TranslationCompiledCatalog = Record<TranslationLocale, TranslationCompiledDictionary>;
