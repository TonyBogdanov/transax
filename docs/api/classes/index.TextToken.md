# Class: TextToken

[index](../modules/index.md).TextToken

Represents a text token, i.e. any text that is not an evaluable expression (anything outside curly brackets).

Example: `Hello world!`

## Hierarchy

- [`CompilerToken`](index.CompilerToken.md)

  ↳ **`TextToken`**

## Table of contents

### Constructors

- [constructor](index.TextToken.md#constructor)

### Properties

- [column](index.TextToken.md#column)
- [line](index.TextToken.md#line)
- [text](index.TextToken.md#text)

### Methods

- [compile](index.TextToken.md#compile)
- [compileWrap](index.TextToken.md#compilewrap)

## Constructors

### constructor

• **new TextToken**(`text`, `location`): [`TextToken`](index.TextToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `location` | `LocationRange` |

#### Returns

[`TextToken`](index.TextToken.md)

**`Inherit Doc`**

#### Overrides

[CompilerToken](index.CompilerToken.md).[constructor](index.CompilerToken.md#constructor)

## Properties

### column

• **column**: `number`

The column number of the expression within the translation message.

#### Inherited from

[CompilerToken](index.CompilerToken.md).[column](index.CompilerToken.md#column)

___

### line

• **line**: `number`

The line number of the expression within the translation message.

#### Inherited from

[CompilerToken](index.CompilerToken.md).[line](index.CompilerToken.md#line)

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
