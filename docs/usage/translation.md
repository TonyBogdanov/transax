# Translation

## Initialization
Once you've successfully [compiled](./compilation.md) and saved your translations to a JavaScript file, it is now time
to load them and initialize the translator in your application.

```js
import { Translator } from 'transax';
import translations from './compiled-translations.js';

const translator = new Translator( { translations } );
```

To specify a fallback locale to be used in case of missing translations, use the
[fallbackLocale](../api/#translatoroptions) option:

```js
const translator = new Translator( {
    translations,
    fallbackLocale: 'en',
} );
```

## Translation
Translating keys is done by calling the `translate` method of the translator. However, you are most likely going to be
using a global function (e.g. `$t`) instead.

To do so, simply alias the `translate` method to your global function:

```js
const globals = { ... }; // see section about globals below

function $t( key, params, locale ) {
    return translator.translate( key, { locale, params, globals } );
}

window.$t = $t;
```

::: tip
This is just an example. How exactly you choose to invoke `translate` depends on your application's architecture &
is entirely up to you.
:::

To translate a key `hello` simply pass it as the first argument to the function:

```js
console.log( $t( 'hello' ) );
```

Don't forget to specify the locale you want to translate to, or the translator will use the fallback locale:
```js
console.log( $t( 'hello', {}, 'de' ) );
```

## Interpolation
The real strength of `transax` (as with most internationalization libraries) lies in its ability to interpolate
values into your translations.

So, instead of static text you can inject values only known at runtime:

```js
// { "hello": "Hello {{ name }}!" }
console.log( $t( 'hello', { name: 'John' } ) );
// -> "Hello John!"
```

## Globals
In addition to parameters you specify when invoking the translation function, you can also define global parameters
automatically available to all translations.

These can be interpolated into your translations like regular parameters, except you prepend them with a `@` sign:

```js
const globals = { store: 'My Store' };

// { "hello": "Hello {{ name }}, welcome to {{ @store }}!" }
console.log( $t( 'hello', { name: 'John' } ) );
// -> "Hello John, welcome to My Store!"
```

## Performance
During [compilation](./compilation.md) `transax` extracts only the referenced parameters / globals from each translation
and generates a function that destructures them from the provided parameters / globals objects.

Non-referenced members of these objects are completely ignored.

This means that when you invoke the translation function you can pass virtually any object as parameters / globals
without penalty for big objects. You can even pass the entire `window` as your globals object.

## Limitations
At the moment it is not possible to reference members of parameters & globals with the same name due to the way these
are destructured during compilation.

For example, the following will not work & will trigger a SyntaxError when invoked:

```js
// { "hello": "Hello {{ name }}, welcome to {{ @name }}!" }
console.log( translator.translate( 'hello', {
    params: { name: 'John' },
    globals: { name: 'My Store' },
} ) );

// -> SyntaxError: Duplicate parameter name not allowed in this context
```
