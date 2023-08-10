# Interpolation

When translating your application your dictionary will most likely contain placeholders you would want to be evaluated
and replaced with the actual value at runtime.

A placeholder is any valid expression wrapped by double curly braces: `{{` and `}}`:

```
Hello {{ name }}
```

Here, `Hello ` is considered plain (static) text and the rest a placeholder with `name` as its expression.

When translating this string, the expression `name` will be evaluated and the result will be inserted in
place of the placeholder.

Expressions (the thing between the curly braces) must follow [strict syntax rules](./syntax.md).
If the expression is invalid, the entire placeholder will be treated as plain text instead (no error is thrown).
