# Class: CompilerToken

An abstract class representing a single evaluable expression within translation messages.

## Hierarchy

- **`CompilerToken`**

  ↳ [`TextToken`](TextToken.md)

  ↳ [`LiteralToken`](LiteralToken.md)

  ↳ [`TernaryExpressionToken`](TernaryExpressionToken.md)

  ↳ [`ComparisonExpressionToken`](ComparisonExpressionToken.md)

  ↳ [`CallExpressionToken`](CallExpressionToken.md)

## Table of contents

### Constructors

- [constructor](CompilerToken.md#constructor)

### Properties

- [column](CompilerToken.md#column)
- [line](CompilerToken.md#line)
- [text](CompilerToken.md#text)

### Methods

- [compile](CompilerToken.md#compile)
- [compileWrap](CompilerToken.md#compilewrap)

## Constructors

### constructor

• **new CompilerToken**(`text`, `location`): [`CompilerToken`](CompilerToken.md)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The full text (content) of the expression. |
| `location` | `LocationRange` | The location of the invocation within the source code. |

#### Returns

[`CompilerToken`](CompilerToken.md)

## Properties

### column

• **column**: `number`

The column number of the expression within the translation message.

___

### line

• **line**: `number`

The line number of the expression within the translation message.

___

### text

• **text**: `string`

The full text (content) of the expression.

## Methods

### compile

▸ **compile**(`context`): `string`

Compiles the expression into an executable ECMAScript6 string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`CompilerContext`](CompilerContext.md) | The context to use for compiling the expression. |

#### Returns

`string`

___

### compileWrap

▸ **compileWrap**(`context`, `instanceOfs`): `string`

Same as `compile()` except that it wraps the compiled expression in parentheses if the current token is an
instance of the specified types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`CompilerContext`](CompilerContext.md) | The context to use for compiling the expression. |
| `instanceOfs` | `Function`[] | The types to check for. |

#### Returns

`string`
