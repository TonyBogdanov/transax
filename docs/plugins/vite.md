# Vite
`transax` ships pre-bundled with [Vite](https://vitejs.dev)-compatible plugin to help you quickly get your projects
up and running.

## Usage
To use the plugin, simply add it to your `vite.config.js` file:

```js
import { defineConfig } from 'vite';
import { VitePlugin as transax } from 'transax';

export default defineConfig( {
    plugins: [
        transax( {
            // ...options
        } ),
    ],
} );
```

## Configuration
As a bare minimum you need to configure how your translation files are loaded, how your app files are scanned for
translation key usage and where to output the compiled translations.

```js
transax( {
    dictionary: {
        pattern: 'translations/*.yaml',
        handler: 'yaml',
    },
    input: {
        pattern: [ 'src/**/*.{js,jsx,cjs,mjs,ts,vue}' ],
    },
    output: {
        compiled: 'translations/compiled.js',
    },
} );
```

### `dictionary`
Specifies dictionary options.

### `dictionary.pattern`
Specifies a glob pattern or array of patterns to match your project's translation dictionary files.

### `dictionary.handler`
Specifies a handler for loading and parsing the translation dictionary files.
This function is called each time the contents of a translation dictionary file changes and is responsible for
loading and parsing the contents of the file.

The result must be a catalog object or a promise that resolves to a catalog object.
All returned catalogs are merged together.

You can also use built-in handlers by specifying a string name (instead of a function), one of:
`yaml` or `json`. In this case the handler will infer the locale from the path (the name without the extension).

### `input`
Specifies input options.

### `input.pattern`
Specifies a glob pattern or array of patterns to match your project's source files to be observed & analyzed for
translation calls.

### `input.keywords`
Specifies the function name / keywords or an array of keywords to match when looking for translation calls.
Defaults to `[ '$t' ]`.

### `input.keyFormatter`
Specifies a function to be used to transform the translation keys depending on the source they were detected at.
Defaults to `( key => key )`.

### `output.compiled`
Specifies the output file for compiled translations.
If a `string` is provided, it will be used as the `path` option.

### `output.compiled.path`
Specifies the path to the output file being generated.

### `output.compiled.includeMeta`
Specifies whether to include meta information in the output file.
Defaults to `false`.

### `output.compiled.handler`
Specifies a handler function for encoding and writing the output file.
It can be synchronous, or return a Promise.

You can also use built-in handlers by specifying a string name (instead of a function), one of: `esm` or `cjs`.

If left unspecified, the handler will be determined automatically based on the file extension.

### `output.missing`
Specifies the output file for missing translations.
If a `string` is provided, it will be used as the `path` option.

### `output.missing.path`
Specifies the path to the output file being generated.

### `output.missing.handler`
Specifies a handler function for encoding and writing the output file.
It can be synchronous, or return a Promise.

You can also use built-in handlers by specifying a string name (instead of a function), one of:
`txt`, `yaml` or `json`.

If left unspecified, the handler will be determined automatically based on the file extension if possible.

### `output.unused`
Specifies the output file for unused translations.
If a `string` is provided, it will be used as the `path` option.

### `output.unused.path`
Specifies the path to the output file being generated.

### `output.unused.handler`
Specifies a handler function for encoding and writing the output file.
It can be synchronous, or return a Promise.

You can also use built-in handlers by specifying a string name (instead of a function), one of:
`txt`, `yaml` or `json`.

If left unspecified, the handler will be determined automatically based on the file extension if possible.

### `quiet`
Specifies whether to suppress logging.

### `verbose`
Specifies whether to log verbose information.
