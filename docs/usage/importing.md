# Importing
Since `transax` supports both CommonJS and ES6 modules, you can import using the package name. The correct path will be
resolved automatically.

If you are using [TypeScript](https://www.typescriptlang.org), you can even import directly from the source files.

:::: tabs
::: tab ESM
```js
import { Compiler, Translator } from 'transax';
import { Compiler, Translator } from 'transax/esm'; // or this to be explicit
```
:::
::: tab CommonJS
```js
const { Compiler, Translator } = require( 'transax' );
const { Compiler, Translator } = require( 'transax/cjs' ); // or this to be explicit
```
:::
::: tab TypeScript
```ts
import { Translator } from 'transax/src/Translator';
import { Compiler } from 'transax/src/Compiler';
```
:::
::::

::: warning
From this point on the documentation will assume you are using the ES6 Module syntax.
If you are using CommonJS, you can still use the same API, but you will need to use the `require` syntax instead of
`import`.
:::
