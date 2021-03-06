# Installation

```bash
npm i --save transax
```

# Description

This package provides a simple parser/compiler for translation-like strings.\
It can handle any string and treat it as regular text apart from placeholders following a specific syntax.

Placeholders must be wrapped in `{{` and `}}`, anything outside it will be treated as normal text and ignored.

The main purpose of the package is to allow parsing such strings and then compiling the tree into one singular
*translated* string with placeholder groups replaced depending on the supplied context.

# Usage

## Translate

The *translate* function provided by the package accepts a translatable string along with *context* and *filters*,
parses the supplied string and evaluates it against the context / filters, returning a final *translated* string.

```js
import { translate } from 'transax';

// Hello JOHN, nice to meet you!
const translated = translate(
    'Hello {{ name | upper }}, nice to meet you!',
    { name: 'John' },
    { upper: v => v.toLocaleUpperCase() },
);
```

Keep in mind that the *translate* function calls `parse` internally, but **does not** compile the resulting AST and
**does not** execute any JavaScript. Evaluation is performed on a per-token basis just like compilation.

## Parse

If you need to, you can also parse your translatable string into an AST:

```js
import { parse } from 'transax';
const ast = parse( 'Hello {{ name | upper }}, nice to meet you!' );
```

The result will be an array of tokens where each token can either be a string (to be treated as text), or a token
object. Each such object has two low-level methods you can use: `compile( root )` and `evaluate( context, filters )`.

Stringify-ing and concatenating the results of calling `evaluate` on each token is equivalent to the `translate()`
function.

## Compile

You can also choose to compile your translatable string into an executable ECMAScript 6 code. This can be useful if you
want to export an array of executable functions for each of your translation strings:

```js
import { compile } from 'transax';

// const t = (c,f)=>`Hello ${f.upper(c.name)}, nice to meet you!`;
const t = compile( 'Hello {{ name | upper }}, nice to meet you!' );
```

The function can also work with the AST returned from `parse`, if a string is provided instead, it parses it internally.

# Syntax

As mentioned before, placeholders are denoted by curly brackets: `{{ expression }}`. The expression in each placeholder
has access to the values of *context* and *filters* supplied to the *translate* function **at** runtime.

The syntax rules below apply to the `expression` part within the curly brackets.

## Literals

Literals are *static* values independent of the context. Keep in mind that the result of the *translate* function will
always be a string, so if an expression returns a literal, it will be type-casted to string. Literals keep their values
when being passed as arguments or when filtered.

The currently supported literal values are:

| Syntax | Result Type | Result Value |
|---|---|---|
| `null` | `object` | `null` |
| `NULL` | `object` | `null` |
| `0` | `number` | `0` |
| `123` | `number` | `123` |
| `-123` | `number` | `-123` |
| `0.0` | `number` | `0` |
| `1.0` | `number` | `1` |
| `1.234` | `number` | `1.234` |
| `1.230` | `number` | `1.23` |
| `0.1` | `number` | `0.1` |
| `''` | `string` | *empty string* |
| `""` | `string` | *empty string* |
| `'is \'single\' and "double" quoted'` | `string` | `is 'single' and "double" quoted` |
| `"is 'single' and \"double\" quoted"` | `string` | `is 'single' and "double" quoted` |

## Array Access

If your context value is an array, you can access its 3rd element like this: `[2]` (indexing starts at `0`).

You can also chain this to target a deeper value: `[0][2][1][3]`.\
This can also be mixed with *Object Access* and *Invocation*: `[0].a[1]().b[1]`.

## Object Access

If your context value is an object, you can access the `foo` element like this: `foo`, or you can use a path-like syntax
to target a deeper value: `foo.bar.baz`.

This can also be mixed with *Array Access* and *Invocation*: `a[0].b()[1].a`.

Notice that any object key you write, **unless** if it's the very first accessor, must be preceded by a dot: `.`.

Good: `foo.bar.baz`.\
Bad: `.foo.bar.baz`.

## Invocation

If your context value is a function, you can invoke it like this: `()`. If the root context is an object, or an array
instead, but has a deeper value that's a function, you can mix-and-match with *Array Access* and *Object Access*.

For example, this syntax: `().a()[0]()[1]` will evaluate to `foo`, if your context looks like this:

```js
const context = () => ( {
    a: () => [
        () => [ null, 'foo' ],
    ],
} );
```

Invocations also accept arguments separated by a comma: `,`. Each argument can be a *Literal*, *Array Access*,
*Object Access* or *Invocation*: `a.b( 1, 'foo', b( 4 ) )`. *Switch*-es cannot be passed as arguments.

Argument expressions use the global context.

## Switches

Switches are a powerful syntax for handling things like pluralization. They allow you to specify different result values
based on the value of an expression: `switch value: 1 => 'one', 2 => 'two', * => 'anything else'`.

The switch begins with a `switch` keyword followed by some expression you want to test. This is usually a variable,
but can be any non-filtered expression.

Next follows a colon symbol: `:` and a comma-delimited list of "cases". Each case consists of an expression to test
against followed by `=>` and an expression to use as a result. One special case is the `*` symbol which specifies a
switch case to be matched for *any* value, when no other case is matched. This case must be last in the list, or it will
bypass the other tests.

Switches are top-level expressions and cannot be passed as arguments or nested. They **can** be filtered, though.

## Filters

Expressions can also be filtered: `value | filter1 | filter2 | filter3`.

The result of `value` will be sequentially passed through the functions specified in the *filters* object (passed to the
*translate* function), under the respective keys: `filter1`, `filter2` and `filter3`.

Filters can act like *Invocation*s and accept arguments: `value | filter1( 1, 'hello', a.b.c )`. These arguments will
be appended to the value being filtered when the `filter1` filter function is being invoked.

Filtered expressions must be top-level citizens and cannot be used as arguments, in switches, or nested.
