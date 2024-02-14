# Class: LiteralToken

[index](../modules/index.md).LiteralToken

Represents a literal (static value) expression, such as a string, number, or null.

Example: `"foo"`, `123`, `null`.

## Hierarchy

- [`CompilerToken`](index.CompilerToken.md)

  ↳ **`LiteralToken`**

## Table of contents

### Constructors

- [constructor](index.LiteralToken.md#constructor)

### Properties

- [column](index.LiteralToken.md#column)
- [line](index.LiteralToken.md#line)
- [text](index.LiteralToken.md#text)
- [value](index.LiteralToken.md#value)

### Methods

- [compile](index.LiteralToken.md#compile)
- [compileWrap](index.LiteralToken.md#compilewrap)

## Constructors

### constructor

• **new LiteralToken**(`value`, `text`, `location`): [`LiteralToken`](index.LiteralToken.md)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| `boolean` | The value of the literal. |
| `text` | `string` | The full text (content) of the expression. |
| `location` | `LocationRange` | The location of the invocation within the source code. |

#### Returns

[`LiteralToken`](index.LiteralToken.md)

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
