# Class: CompilerToken

An abstract class representing a single evaluable expression within translation messages.

## Hierarchy

- **`CompilerToken`**

  ↳ [`TextToken`](TextToken.md)

  ↳ [`LiteralToken`](LiteralToken.md)

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

## Constructors

### constructor

• `Protected` **new CompilerToken**(`text`, `location`)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The full text (content) of the expression. |
| `location` | `LocationRange` | The location of the invocation within the source code. |

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

▸ `Abstract` **compile**(`context`): `string`

Compiles the expression into an executable ECMAScript6 string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`CompilerContext`](CompilerContext.md) | The context to use for compiling the expression. |

#### Returns

`string`
