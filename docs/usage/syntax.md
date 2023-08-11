# Syntax

## Expressions

### Expression
Any value (between the curly braces) you are trying to interpolate must be and comply to the syntax rules of an
**expression**.

#### Syntax
One of the following:
- [Ternary expression](#ternary)
- [Comparison expression](#comparison)
- [Call expression](#call)
- [Literal expression](#literal)

### Ternary-Safe
A ternary-safe expression is an [Expression](#expression) that *may* be wrapped in brackets (depending on the type)
in order to avoid syntax conflicts when used as an operand of a [Ternary expression](#ternary).

#### Syntax
One of the following:
- `(` followed by [Ternary expression](#ternary) followed by `)`
- [Comparison expression](#comparison)
- [Call expression](#call)
- [Literal expression](#literal)

#### Example
```
{{ ( true ? a : b ) ? 'yes' : 'no' }}
```

### Comparison-Safe
A comparison-safe expression is an [Expression](#expression) that *may* be wrapped in brackets (depending on the type)
in order to avoid syntax conflicts when used as an operand of a [Comparison expression](#comparison).

#### Syntax
One of the following:
- `(` followed by [Ternary expression](#ternary) followed by `)`
- `(` followed by [Comparison expression](#comparison) followed by `)`
- [Call expression](#call)
- [Literal expression](#literal)

#### Example
```
{{ ( true ? 0 : 1 ) < 1 }}
{{ ( 0 < 1 ) === true }}
```

### Ternary
A ternary expression is used to return one of two values depending on the result of a comparison.

#### Syntax
[Ternary-Safe expression](#ternary-safe) followed by `?` followed by
[Ternary-Safe expression](#ternary-safe) followed by `:` followed by
[Ternary-Safe expression](#ternary-safe)

#### Example
```
{{ 1 < 2 ? 'yes' : 'no' }}
{{ ( 1 < 2 ) !== false ? 'yes' : 'no' }}
```

### Comparison
A comparison expression is used to compare two values using a comparison operator.

#### Syntax
[Comparison-Safe expression](#comparison-safe) followed by
[Comparison Operator primitive](#comparison-operator) followed by
[Comparison-Safe expression](#comparison-safe)

#### Example
```
{{ 1 < 2 }}
{{ ( 1 < 2 ) !== false }}
```

### Call
A call expression is used to evaluate the value of a translation parameter or global, and optionally invoke it
as a function, access its properties (if object), or access its items (if array).

#### Syntax
Optional `@` followed by [Identifier primitive](#identifier) followed by zero or more of the following:

- `.` followed by [Identifier primitive](#identifier)
- `[` followed by [Expression](#expression) followed by `]`
- `(` followed by [Arguments](#arguments) followed by `)`

#### Example
```
{{ foo }}
{{ $foo }}
{{ @foo_bar_123 }}
{{ value.foo }}
{{ value[ 12 ] }}
{{ value[ another_value ] }}
{{ @value[ another_value[ @some_global ] ][12] }}
{{ value.prop[ index ].prop }}
{{ foo() }}
{{ foo( 123 ) }}
{{ foo( 1 )( 2 ) }}
{{ foo( null, true, 123, .45, "test", bar( baz[0], baf.test() ) ) }}
```

::: tip
The optional `@` symbol is used to reference the value of a global instead of a translation parameter.
:::

### Arguments
Arguments are used to pass values to a function call.

#### Syntax
Zero or more [Expression](#expression) separated by commas (`,`).

### Literal
A literal expression represents a static value.

#### Syntax
[Literal primitive](#literal-2)

### Example
```
{{ null }}
{{ NULL }}
{{ true }}
{{ TRUE }}
{{ false }}
{{ FALSE }}
{{ 123 }}
{{ -123 }}
{{ 1.23 }}
{{ -1.23 }}
{{ .45 }}
{{ 1e3 }}
{{ -1e+3 }}
{{ 2e-4 }}
{{ 'string' }}
{{ "string" }}
{{ `string` }}
```

## Primitives

### Literal
Literals are essentially static values.\
They can be booleans, strings, numbers or null.

| Type        | Example                                                       | Description                                                                                           |
|-------------|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| **Null**    | `null` or `NULL`                                              |                                                                                                       |
| **Boolean** | `true`, `TRUE`, `false` or `FALSE`                            |                                                                                                       |
| **Number**  | `123`, `-123`, `1.23`, `-1.23`, `.45`, `1e3`, `-1e+3`, `2e-4` | An integer, float or exponent number optionally preceded by a minus sign (`-`).                       |
| **String**  | `'string'`, `"string"` or `` `string` ``                      | A sequence of characters enclosed in single quotes (`'`), double quotes (`"`) or backticks (`` ` ``). |

::: tip
Quotes in strings using the same type of quote can be escaped with a backslash `\`:

```
{{ "this is a \"string\"" }}
{{ 'this is a \'string\'' }}
{{ `this is a \`string\`` }}
```

You can also escape backslashes:

```
{{ "this is a backslash: \\" }}
:::

### Identifier
Identifiers are names usually used to access translation parameters, globals and object properties.

They must be at least 1 symbol long and can contain latin letters (`a-z` & `A-Z`), numbers (`0-9`), underscores (`_`)
and a dollar signs (`$`).

They cannot start with a number and cannot be [reserved words](#reserved-words).

### Comparison Operator
Comparison operators are used to compare two values and can be one of the following:

| Operator | Description                                                 |
|----------|-------------------------------------------------------------|
| `==`     | Values are equal.                                           |
| `!=`     | Values are not equal.                                       |
| `===`    | Values are identical.                                       |
| `!==`    | Values are not identical.                                   |
| `>`      | The left value is greater than the right value.             |
| `>=`     | The left value is greater than or equal to the right value. |
| `<`      | The left value is less than the right value.                |
| `<=`     | The left value is less than or equal to the right value.    |

## Reserved Words
The following are reserved words in `transax` and cannot be used as identifiers:\
`null`, `NULL`, `true`, `TRUE`, `false` and `FALSE` .
