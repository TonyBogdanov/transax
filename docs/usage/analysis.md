# Analysis
This feature allows you to scan your source code for translatable strings and extract useful information.

## The problem
Consider the following example:

```js
const hello = $t( 'Hello' );
const greet = $t( 'nice to meet you' );

console.log( `${ hello } John, ${ greet }!` );
```

In this code you have two translatable strings: `Hello` and `nice to meet you`. Here it is obvious you will need to make
sure you translate both of them. But what if you had a hundred strings in your code?

## The solution
Instead, you can use the analysis feature to extract all the strings from your code and then compare them against
your current translations.

This way you can easily find out which strings are missing and need to be translated, or which strings are no longer
used and can be removed.

```js
import { Generator } from 'transax';

const translations = {
    en: {
        'nice to meet you': 'nice to meet you',
        'unused': 'unused',
    },
    de: {
        'Hello': 'Hallo',
    },
};

const gen = new Generator( { translations } );
gen.parseContent( '<source code as string>' );

console.log( gen.getMissingTranslationKeys() );
// -> { en: [ 'Hello' ], de: [ 'nice to meet you' ] }

console.log( gen.getUnusedTranslationKeys() );
// -> { en: [ 'unused' ] }
```

## Limitations
The analysis feature is not perfect. It works in a more generic manner in order to support almost any kind of
source code syntax.

This means that it cannot understand the context of your code, nor even its language or flavor. It simply looks for
*function-like* calls to `$t` with at least one string argument.

By design, it cannot match expressions or interpolation. Translation keys **must** be string literals (static). It
**does** support strings defined with single: `'..'` and double: `".."` quotes, as well as template
literals: `` `..` ``.
