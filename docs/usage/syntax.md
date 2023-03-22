# Syntax

## Interpolation
When translating your application your dictionary will most likely contain placeholders you would want to be evaluated
and replaced with the actual value at runtime.

A placeholder is any valid expression wrapped by double curly braces: `{{` and `}}`:

```
Hello {{ name }}
```

Here, `Hello ` is considered plain (static) text and the rest a placeholder with `name` as its expression.

When translating this string, the expression `name` will be evaluated and the result will be inserted in
place of the placeholder.

## Expressions
Expressions (the thing between the curly braces) must follow strict syntax rules. If the expression is invalid, the
entire placeholder will be treated as plain text instead.

### Literals
Literals are essentially static values. They can be strings, numbers or `null`.

Example:

```
{{ 123 }}
{{ -123 }}
{{ 1.23 }}
{{ -1.23 }}
{{ .45 }}
{{ 'string' }}
{{ "string" }}
{{ `string` }}
{{ null }}
{{ NULL }}
```

### Identifiers
Identifiers are names used to access translation parameters or globals.

They must be at least 1 symbol long and can contain latin letters (`a-z` & `A-Z`), numbers (`0-9`), underscores (`_`)
and dollar signs (`$`). They cannot start with a number.

To reference a global instead of a parameter, prepend the identifier with `@`.

Example:

```
{{ foo }}
{{ foo_bar }}
{{ foo_bar_123 }}
{{ $foo }}
{{ $foo_bar }}
{{ $foo_bar_123 }}
{{ @foo }}
{{ @foo_bar }}
{{ @foo_bar_123 }}
```

### Array Accessors
You can use array accessors to access array elements by their index.

The general syntax is an opening square bracket `[` followed by an expression specifying the index, followed by a
closing square bracket `]`. The expression must evaluate to a number, but can be any valid expression.

Array accessors must follow an identifier or another array / object accessor, which will be used as the array to access.

Example:

```
{{ value[ 12 ] }}
{{ value[ another_value ] }}
{{ value[ another_value[ something_else ] ][12] }}
{{ value.prop[ index ].prop }}
```

### Object Accessors
You can use object accessors to access object elements by their property name.

The general syntax is a dot `.` followed by a property name complying to the syntax rules of [identifiers](#identifiers).

Object accessors must follow an identifier or another array / object accessor, which will be used as the object
whose property you want to access.

Example:

```
{{ value.foo }}
{{ value.foo.bar }}
```