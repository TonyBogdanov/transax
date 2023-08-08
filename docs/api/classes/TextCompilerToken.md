# Class: TextCompilerToken

Represents a text token, i.e. any text that is not an evaluable expression (anything outside curly brackets).

Example: `Hello world!`

## Hierarchy

- [`AbstractCompilerToken`](AbstractCompilerToken.md)

  ↳ **`TextCompilerToken`**

## Table of contents

### Constructors

- [constructor](TextCompilerToken.md#constructor)

### Properties

- [column](TextCompilerToken.md#column)
- [line](TextCompilerToken.md#line)
- [text](TextCompilerToken.md#text)

### Methods

- [compile](TextCompilerToken.md#compile)

## Constructors

### constructor

• **new TextCompilerToken**(`text`, `line`, `column`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `line` | `number` |
| `column` | `number` |

**`Inherit Doc`**

#### Overrides

[AbstractCompilerToken](AbstractCompilerToken.md).[constructor](AbstractCompilerToken.md#constructor)

## Properties

### column

• **column**: `number`

The column number of the expression within the translation message.

#### Inherited from

[AbstractCompilerToken](AbstractCompilerToken.md).[column](AbstractCompilerToken.md#column)

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
