# Class: ExpressionCompilerToken

Represents a dynamic value expression as an identifier optionally following by a chain of array / object accessors.

Example: `foo.bar[0].baz`.

## Hierarchy

- [`AbstractCompilerToken`](AbstractCompilerToken.md)

  ↳ **`ExpressionCompilerToken`**

## Table of contents

### Constructors

- [constructor](ExpressionCompilerToken.md#constructor)

### Properties

- [column](ExpressionCompilerToken.md#column)
- [identifier](ExpressionCompilerToken.md#identifier)
- [line](ExpressionCompilerToken.md#line)
- [resolvers](ExpressionCompilerToken.md#resolvers)
- [text](ExpressionCompilerToken.md#text)

### Methods

- [compile](ExpressionCompilerToken.md#compile)

## Constructors

### constructor

• **new ExpressionCompilerToken**(`identifier`, `resolvers`, `text`, `line`, `column`)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | [`IdentifierCompilerToken`](IdentifierCompilerToken.md) | An identifier expression as the root value of the expression. |
| `resolvers` | ([`ArrayAccessCompilerToken`](ArrayAccessCompilerToken.md) \| [`ObjectAccessCompilerToken`](ObjectAccessCompilerToken.md))[] | An optional array of array / object accessors. |
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

### identifier

• `Readonly` **identifier**: [`IdentifierCompilerToken`](IdentifierCompilerToken.md)

___

### line

• **line**: `number`

The line number of the expression within the translation message.

#### Inherited from

[AbstractCompilerToken](AbstractCompilerToken.md).[line](AbstractCompilerToken.md#line)

___

### resolvers

• `Readonly` **resolvers**: ([`ArrayAccessCompilerToken`](ArrayAccessCompilerToken.md) \| [`ObjectAccessCompilerToken`](ObjectAccessCompilerToken.md))[]

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
