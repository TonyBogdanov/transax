# Class: TernaryExpressionToken

[index](../modules/index.md).TernaryExpressionToken

Represents a ternary expression that returns the result of the truthy expression if the test expression returns a
truthy value, or the result of the falsy expression otherwise.

Examples:
`a ? b : c`
`( 0 < 1 ) ? b : c`

## Hierarchy

- [`CompilerToken`](index.CompilerToken.md)

  ↳ **`TernaryExpressionToken`**

## Table of contents

### Constructors

- [constructor](index.TernaryExpressionToken.md#constructor)

### Properties

- [column](index.TernaryExpressionToken.md#column)
- [falsy](index.TernaryExpressionToken.md#falsy)
- [line](index.TernaryExpressionToken.md#line)
- [test](index.TernaryExpressionToken.md#test)
- [text](index.TernaryExpressionToken.md#text)
- [truthy](index.TernaryExpressionToken.md#truthy)

### Methods

- [compile](index.TernaryExpressionToken.md#compile)
- [compileWrap](index.TernaryExpressionToken.md#compilewrap)

## Constructors

### constructor

• **new TernaryExpressionToken**(`test`, `truthy`, `falsy`, `text`, `location`): [`TernaryExpressionToken`](index.TernaryExpressionToken.md)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `test` | [`CompilerToken`](index.CompilerToken.md) | The test expression. |
| `truthy` | [`CompilerToken`](index.CompilerToken.md) | The truthy expression. |
| `falsy` | [`CompilerToken`](index.CompilerToken.md) | The falsy expression. |
| `text` | `string` | The full text (content) of the expression. |
| `location` | `LocationRange` | The location of the invocation within the source code. |

#### Returns

[`TernaryExpressionToken`](index.TernaryExpressionToken.md)

#### Overrides

[CompilerToken](index.CompilerToken.md).[constructor](index.CompilerToken.md#constructor)

## Properties

### column

• **column**: `number`

The column number of the expression within the translation message.

#### Inherited from

[CompilerToken](index.CompilerToken.md).[column](index.CompilerToken.md#column)

___

### falsy

• `Readonly` **falsy**: [`CompilerToken`](index.CompilerToken.md)

___

### line

• **line**: `number`

The line number of the expression within the translation message.

#### Inherited from

[CompilerToken](index.CompilerToken.md).[line](index.CompilerToken.md#line)

___

### test

• `Readonly` **test**: [`CompilerToken`](index.CompilerToken.md)

___

### text

• **text**: `string`

The full text (content) of the expression.

#### Inherited from

[CompilerToken](index.CompilerToken.md).[text](index.CompilerToken.md#text)

___

### truthy

• `Readonly` **truthy**: [`CompilerToken`](index.CompilerToken.md)

## Methods

### compile

▸ **compile**(`context`): `string`

Compiles the expression into an executable ECMAScript6 string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`CompilerContext`](index.CompilerContext.md) | The context to use for compiling the expression. |

#### Returns

`string`

#### Overrides

[CompilerToken](index.CompilerToken.md).[compile](index.CompilerToken.md#compile)

___

### compileWrap

▸ **compileWrap**(`context`, `instanceOfs`): `string`

Same as `compile()` except that it wraps the compiled expression in parentheses if the current token is an
instance of the specified types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`CompilerContext`](index.CompilerContext.md) | The context to use for compiling the expression. |
| `instanceOfs` | `Function`[] | The types to check for. |

#### Returns

`string`

#### Inherited from

[CompilerToken](index.CompilerToken.md).[compileWrap](index.CompilerToken.md#compilewrap)
