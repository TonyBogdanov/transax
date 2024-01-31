# Class: TextToken

Represents a text token, i.e. any text that is not an evaluable expression (anything outside curly brackets).

Example: `Hello world!`

## Hierarchy

- [`CompilerToken`](CompilerToken.md)

  ↳ **`TextToken`**

## Table of contents

### Constructors

- [constructor](TextToken.md#constructor)

### Properties

- [column](TextToken.md#column)
- [line](TextToken.md#line)
- [text](TextToken.md#text)

### Methods

- [compile](TextToken.md#compile)
- [compileWrap](TextToken.md#compilewrap)

## Constructors

### constructor

• **new TextToken**(`text`, `location`): [`TextToken`](TextToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `location` | `LocationRange` |

#### Returns

[`TextToken`](TextToken.md)

**`Inherit Doc`**

#### Overrides

[CompilerToken](CompilerToken.md).[constructor](CompilerToken.md#constructor)

## Properties

### column

• **column**: `number`

The column number of the expression within the translation message.

#### Inherited from

[CompilerToken](CompilerToken.md).[column](CompilerToken.md#column)

___

### line

• **line**: `number`

The line number of the expression within the translation message.

#### Inherited from

[CompilerToken](CompilerToken.md).[line](CompilerToken.md#line)

___

### text

• **text**: `string`

The full text (content) of the expression.

#### Inherited from

[CompilerToken](CompilerToken.md).[text](CompilerToken.md#text)

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

[CompilerToken](CompilerToken.md).[compile](CompilerToken.md#compile)

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

#### Inherited from

[CompilerToken](CompilerToken.md).[compileWrap](CompilerToken.md#compilewrap)
