# Class: ArrayAccessCompilerToken

Represents an array access expression usually following an identifier, literal or another array / object
access expression.

Example: `[2][1]`.

## Hierarchy

- [`AbstractCompilerToken`](AbstractCompilerToken.md)

  ↳ **`ArrayAccessCompilerToken`**

## Table of contents

### Constructors

- [constructor](ArrayAccessCompilerToken.md#constructor)

### Properties

- [column](ArrayAccessCompilerToken.md#column)
- [expr](ArrayAccessCompilerToken.md#expr)
- [line](ArrayAccessCompilerToken.md#line)
- [text](ArrayAccessCompilerToken.md#text)

### Methods

- [compile](ArrayAccessCompilerToken.md#compile)

## Constructors

### constructor

• **new ArrayAccessCompilerToken**(`expr`, `text`, `line`, `column`)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expr` | [`LiteralCompilerToken`](LiteralCompilerToken.md) \| [`ExpressionCompilerToken`](ExpressionCompilerToken.md) | The expression to be used as the array index. |
| `text` | `string` | The full text (content) of the expression. |
| `line` | `number` | The line number of the expression within the translation message. |
| `column` | `number` | The column number of the expression within the translation message. |

#### Overrides

[AbstractCompilerToken](AbstractCompilerToken.md).[constructor](AbstractCompilerToken.md#constructor)

## Properties

### column

• **column**: `number`

The column number of the expression within the translation message.

#### Inherited from

[AbstractCompilerToken](AbstractCompilerToken.md).[column](AbstractCompilerToken.md#column)

___

### expr

• `Readonly` **expr**: [`LiteralCompilerToken`](LiteralCompilerToken.md) \| [`ExpressionCompilerToken`](ExpressionCompilerToken.md)

___

### line

• **line**: `number`

The line number of the expression within the translation message.

#### Inherited from

[AbstractCompilerToken](AbstractCompilerToken.md).[line](AbstractCompilerToken.md#line)

___

### text

• **text**: `string`

The full text (content) of the expression.

#### Inherited from

[AbstractCompilerToken](AbstractCompilerToken.md).[text](AbstractCompilerToken.md#text)

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

#### Overrides

[AbstractCompilerToken](AbstractCompilerToken.md).[compile](AbstractCompilerToken.md#compile)
