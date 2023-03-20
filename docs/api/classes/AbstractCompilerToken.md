# Class: AbstractCompilerToken

An abstract class representing a single evaluable expression within translation messages.

## Hierarchy

- **`AbstractCompilerToken`**

  ↳ [`TextCompilerToken`](TextCompilerToken.md)

  ↳ [`LiteralCompilerToken`](LiteralCompilerToken.md)

  ↳ [`IdentifierCompilerToken`](IdentifierCompilerToken.md)

  ↳ [`ArrayAccessCompilerToken`](ArrayAccessCompilerToken.md)

  ↳ [`ObjectAccessCompilerToken`](ObjectAccessCompilerToken.md)

  ↳ [`ExpressionCompilerToken`](ExpressionCompilerToken.md)

## Table of contents

### Constructors

- [constructor](AbstractCompilerToken.md#constructor)

### Properties

- [column](AbstractCompilerToken.md#column)
- [line](AbstractCompilerToken.md#line)
- [text](AbstractCompilerToken.md#text)

### Methods

- [compile](AbstractCompilerToken.md#compile)

## Constructors

### constructor

• `Protected` **new AbstractCompilerToken**(`text`, `line`, `column`)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The full text (content) of the expression. |
| `line` | `number` | The line number of the expression within the translation message. |
| `column` | `number` | The column number of the expression within the translation message. |

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
