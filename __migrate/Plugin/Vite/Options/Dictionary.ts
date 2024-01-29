import { Catalog } from '../../../Type/Catalog';

/**
 * Options for {@link VitePluginOptions.dictionary}.
 */
export type Dictionary = {

    /**
     * Specifies a glob pattern or array of patterns to match your project's translation dictionary files.
     */
    readonly pattern: string | string[];

    /**
     * Specifies a handler for loading and parsing the translation dictionary files.
     * This function is called each time the contents of a translation dictionary file changes and is responsible for
     * loading and parsing the contents of the file.
     *
     * The result must be a catalog object or a promise that resolves to a catalog object.
     * All returned catalogs are merged together.
     *
     * You can also use built-in handlers by specifying a string name (instead of a function), one of:
     * `yaml` or `json`. In this case the handler will assume that the name (without the extension) is the locale.
     */
    readonly handler: ( ( path: string ) => Catalog | Promise<Catalog> ) | string;

};
