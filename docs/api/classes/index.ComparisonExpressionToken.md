# Class: ComparisonExpressionToken

[index](../modules/index.md).ComparisonExpressionToken

Represents a comparison expression.

It must consist of two expressions separated by a comparison operator.

Examples:
`a == b`
`a != b`
`a > b`
`a < b`
`a >= b`
`a <= b`
`a === b`
`a !== b`

## Hierarchy

- [`CompilerToken`](index.CompilerToken.md)

  ↳ **`ComparisonExpressionToken`**

## Table of contents

### Constructors

- [constructor](index.ComparisonExpressionToken.md#constructor)

### Properties

- [column](index.ComparisonExpressionToken.md#column)
- [left](index.ComparisonExpressionToken.md#left)
- [line](index.ComparisonExpressionToken.md#line)
- [operator](index.ComparisonExpressionToken.md#operator)
- [right](index.ComparisonExpressionToken.md#right)
- [text](index.ComparisonExpressionToken.md#text)

### Methods

- [compile](index.ComparisonExpressionToken.md#compile)
- [compileWrap](index.ComparisonExpressionToken.md#compilewrap)

## Constructors

### constructor

• **new ComparisonExpressionToken**(`left`, `right`, `operator`, `text`, `location`): [`ComparisonExpressionToken`](index.ComparisonExpressionToken.md)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | [`CompilerToken`](index.CompilerToken.md) | The left-hand side of the expression. |
| `right` | [`CompilerToken`](index.CompilerToken.md) | The right-hand side of the expression. |
| `operator` | `string` | The comparison operator. |
| `text` | `string` | The full text (content) of the expression. |
| `location` | `LocationRange` | The location of the invocation within the source code. |

#### Returns

[`ComparisonExpressionToken`](index.ComparisonExpressionToken.md)

#### Overrides

[CompilerToken](index.CompilerToken.md).[constructor](index.CompilerToken.md#constructor)

## Properties

### column

• **column**: `number`

The column number of the expression within the translation message.

#### Inherited from

[CompilerToken](index.CompilerToken.md).[column](index.CompilerToken.md#column)

___

### left

• `Readonly` **left**: [`CompilerToken`](index.CompilerToken.md)

___

### line

• **line**: `number`

The line number of the expression within the translation message.

#### Inherited from

[CompilerToken](index.CompilerToken.md).[line](index.CompilerToken.md#line)

___

### operator

• `Readonly` **operator**: `string`

___

### right

• `Readonly` **right**: [`CompilerToken`](index.CompilerToken.md)

___

### text

• **text**: `string`

The full text (content) of the expression.

#### Inherited from

[CompilerToken](index.CompilerToken.md).[text](index.CompilerToken.md#text)

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
