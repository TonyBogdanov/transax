# Advanced

## Key Formatting
When building complex applications it might be smart to employ a contextual key naming strategy. So, instead of using
key names which describe the content of the translation, you can use key names which describe the context, i.e. where
the key is used or its purpose.

For example, imagine you are listing a sequence of items separated by the word `and`. You could be tempted to simply
use `and` as key, however, this way it would be very confusing if at some point you decide that the list must be
separated by the word `or` instead, while the key remains `and`.

Instead, you can use a contextual key name, like `list_separator`, which would be much more appropriate. In addition,
you might want to support multiple types of lists, so you could further change the key to `doctor_list_separator` or
`patient_list_separator` etc.

The pitfall of this strategy is that translation keys can quickly become very long and hard to read, especially when
used in some kind of component structure (like in [Vue](https://vuejs.org) apps) where all translation keys used in a
component all start with the same prefix.

To help with this issue `transax` provides a way to use short and simple translation keys in your code, while during
analysis they will be converted into their full contextual form.

To do this, specify a key formatting function as the `keyFormatter` option of the [Analyzer](./api/classes/Analyzer.md)
class. This function will be called for each key found in your code and should return the full contextual key name.

The function will be passed the short key as first argument and the corresponding instance of
[AnalyzerToken](./api/classes/AnalyzerToken.md) as second argument, which you can use to get additional information
about the token.

Here's an example which uses the `keyFormatter` option to prefix all keys with the name of the file they are used in:

```js
import { Analyzer, Generator } from 'transax';

const generator = new Generator( {
    translations: {
        en: {
            'path/to/my/custom/component.js@hello': 'Hello world!',
        },
    },
    analyzer: new Analyzer( {
        keyFormatter: ( key, token ) => `${ token.source }@${ key }`,
    } ),
} );

generator.parse( 'console.log( $t( "hello" ) );', 'path/to/my/custom/component.js' );

console.log( generator.getCompiledTranslationsDump() );
// -> { en: { "path/to/my/custom/component.js@hello": ()=>"Hello world!" } }
```

In this example the `path/to/my/custom/component.js` file uses `$t( "hello" )`, which `transax` will actually "see" as
`$t( "path/to/my/custom/component.js@hello" )` instead.

Making sure the `$t` function converts the keys appropriately is your own responsibility.

::: tip
In a [Vue](https://vuejs.org) application for example you can use `this.$options.name` to get the name of the current
component and infer the required key prefix.
:::
