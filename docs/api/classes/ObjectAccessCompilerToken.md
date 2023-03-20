# Class: ObjectAccessCompilerToken

Represents an object access expression usually following an identifier or another array / object access expression.

Example: `.bar.baz`.

## Hierarchy

- [`AbstractCompilerToken`](AbstractCompilerToken.md)

  ↳ **`ObjectAccessCompilerToken`**

## Table of contents

### Constructors

- [constructor](ObjectAccessCompilerToken.md#constructor)

### Properties

- [column](ObjectAccessCompilerToken.md#column)
- [key](ObjectAccessCompilerToken.md#key)
- [line](ObjectAccessCompilerToken.md#line)
- [text](ObjectAccessCompilerToken.md#text)

### Methods

- [compile](ObjectAccessCompilerToken.md#compile)

## Constructors

### constructor

• **new ObjectAccessCompilerToken**(`key`, `text`, `line`, `column`)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key to access. |
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

### key

• `Readonly` **key**: `string`

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
