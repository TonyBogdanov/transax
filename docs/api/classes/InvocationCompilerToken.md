# Class: InvocationCompilerToken

Represents an invocation expression, usually following an identifier, literal, array / object access or
invocation expression.

Example: `foo( 123 )( 456 )`.

## Hierarchy

- [`AbstractCompilerToken`](AbstractCompilerToken.md)

  ↳ **`InvocationCompilerToken`**

## Table of contents

### Constructors

- [constructor](InvocationCompilerToken.md#constructor)

### Properties

- [column](InvocationCompilerToken.md#column)
- [exprs](InvocationCompilerToken.md#exprs)
- [line](InvocationCompilerToken.md#line)
- [text](InvocationCompilerToken.md#text)

### Methods

- [compile](InvocationCompilerToken.md#compile)

## Constructors

### constructor

• **new InvocationCompilerToken**(`exprs`, `text`, `line`, `column`)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `exprs` | ([`LiteralCompilerToken`](LiteralCompilerToken.md) \| [`ExpressionCompilerToken`](ExpressionCompilerToken.md))[] | A list of expressions to be used as invocation arguments. |
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

### exprs

• `Readonly` **exprs**: ([`LiteralCompilerToken`](LiteralCompilerToken.md) \| [`ExpressionCompilerToken`](ExpressionCompilerToken.md))[]

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
