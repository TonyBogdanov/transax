# Class: IdentifierCompilerToken

Represents an identifier (dynamic value) expression referencing a parameter or a global variable.

Example: `foo` or `@bar`.

## Hierarchy

- [`AbstractCompilerToken`](AbstractCompilerToken.md)

  ↳ **`IdentifierCompilerToken`**

## Table of contents

### Constructors

- [constructor](IdentifierCompilerToken.md#constructor)

### Properties

- [column](IdentifierCompilerToken.md#column)
- [global](IdentifierCompilerToken.md#global)
- [line](IdentifierCompilerToken.md#line)
- [name](IdentifierCompilerToken.md#name)
- [text](IdentifierCompilerToken.md#text)

### Methods

- [compile](IdentifierCompilerToken.md#compile)

## Constructors

### constructor

• **new IdentifierCompilerToken**(`name`, `global`, `text`, `line`, `column`)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the identifier. |
| `global` | `boolean` | Specifies whether the identifier is a global variable or a parameter. |
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

### global

• `Readonly` **global**: `boolean`

___

### line

• **line**: `number`

The line number of the expression within the translation message.

#### Inherited from

[AbstractCompilerToken](AbstractCompilerToken.md).[line](AbstractCompilerToken.md#line)

___

### name

• `Readonly` **name**: `string`

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
