# Class: LiteralToken

Represents a literal (static value) expression, such as a string, number, or null.

Example: `"foo"`, `123`, `null`.

## Hierarchy

- [`CompilerToken`](CompilerToken.md)

  ↳ **`LiteralToken`**

## Table of contents

### Constructors

- [constructor](LiteralToken.md#constructor)

### Properties

- [column](LiteralToken.md#column)
- [line](LiteralToken.md#line)
- [text](LiteralToken.md#text)
- [value](LiteralToken.md#value)

### Methods

- [compile](LiteralToken.md#compile)
- [compileWrap](LiteralToken.md#compilewrap)

## Constructors

### constructor

• **new LiteralToken**(`value`, `text`, `location`): [`LiteralToken`](LiteralToken.md)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| `boolean` | The value of the literal. |
| `text` | `string` | The full text (content) of the expression. |
| `location` | `LocationRange` | The location of the invocation within the source code. |

#### Returns

[`LiteralToken`](LiteralToken.md)

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

___

### value

• `Readonly` **value**: `string` \| `number` \| `boolean`

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
