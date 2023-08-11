# Compilation

## Translation Dictionary
When you're translating your project, your translation dictionary will look something like this:

```js
const translations = {
    en: {
        'welcome': 'Hello, {{ name }}, welcome to {{ @store }}!',
        'unused': 'unused',
    },
    de: {
        'Hello': 'Hallo',
    },
};
```

Under the hood you can use any flavor or format you like, but once loaded into your application `transax` will expect
it as a JavaScript object in the above format.

::: tip
Check the full specification here: [Dictionary](../api/#dictionary).
:::

This format, while readable, does not provide the best possible performance, so during translation (at runtime)
`transax` will actually expect a **compiled** version of the dictionary instead.

## Compiled Dictionary
Use the provided [Generator](../api/classes/Generator.md) class to compile your dictionary and save it to a file:

```js
import { writeFileSync } from 'node:fs';
import { Generator } from 'transax';

const generator = new Generator( { translations } );

generator.parse( '<source code as string>', 'path/to/file1.js' );
generator.parse( '<source code as string>', 'path/to/file2.js' );

writeFileSync(
    'path/to/compiled-dictionary.js',
    generator.getCompiledTranslationsDumpAsESMExport(),
);
```

The code above will convert your translation dictionary into a compiled version that looks something like this:

```js
export default {
    en: {
        'welcome': ( { name }, { store } ) => `Hello, ${ name }, welcome to ${ store }!`,
        'unused': () => `unused`,
    },
    de: {
        'Hello': () => `Hallo`,
    },
};
```

In this format the [Translator](../api/classes/Translator.md) can now look up and translate any key, resolving and
replacing expressions with their final values without the additional overhead of parsing your dictionary each time.

::: tip
Pass `true` as first argument to:
 - `getCompiledTranslationsDumpAsESMExport()`
 - `getCompiledTranslationsDumpAsCJSExport()` or
 - `getCompiledTranslationsDump()`

to make the generated code contain comments with information about where each key was extracted from.
:::

## Accumulation
By default, when calling `parse` multiple times with the same value for `source`, all previously exported keys for
that source will be removed prior to extracting new ones. This can be useful when you want to continuously parse a
file and update the compiled dictionary as the file contents change.

On the other hand you might need to (for example) stream the source code of a file and call `parse` multiple times, but
accumulate extracted keys instead. To do this, pass `true` as the third argument to `parse`.

::: warning
Keep in mind that `parse` only analyzes the passed source code during each call, which means that meta information about
extracted keys in accumulation code will be incorrect and should be ignored.

If `source` is omitted, `parse` will work in accumulation mode regardless of the value of `accumulate`
(the third argument).
:::
