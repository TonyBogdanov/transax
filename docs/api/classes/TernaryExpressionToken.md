# Class: TernaryExpressionToken

Represents a ternary expression that returns the result of the truthy expression if the test expression returns a
truthy value, or the result of the falsy expression otherwise.

Examples:
`a ? b : c`
`( 0 < 1 ) ? b : c`

## Hierarchy

- [`CompilerToken`](CompilerToken.md)

  ↳ **`TernaryExpressionToken`**

## Table of contents

### Constructors

- [constructor](TernaryExpressionToken.md#constructor)

### Properties

- [column](TernaryExpressionToken.md#column)
- [falsy](TernaryExpressionToken.md#falsy)
- [line](TernaryExpressionToken.md#line)
- [test](TernaryExpressionToken.md#test)
- [text](TernaryExpressionToken.md#text)
- [truthy](TernaryExpressionToken.md#truthy)

### Methods

- [compile](TernaryExpressionToken.md#compile)
- [compileWrap](TernaryExpressionToken.md#compilewrap)

## Constructors

### constructor

• **new TernaryExpressionToken**(`test`, `truthy`, `falsy`, `text`, `location`): [`TernaryExpressionToken`](TernaryExpressionToken.md)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `test` | [`CompilerToken`](CompilerToken.md) | The test expression. |
| `truthy` | [`CompilerToken`](CompilerToken.md) | The truthy expression. |
| `falsy` | [`CompilerToken`](CompilerToken.md) | The falsy expression. |
| `text` | `string` | The full text (content) of the expression. |
| `location` | `LocationRange` | The location of the invocation within the source code. |

#### Returns

[`TernaryExpressionToken`](TernaryExpressionToken.md)

#### Overrides

[CompilerToken](CompilerToken.md).[constructor](CompilerToken.md#constructor)

## Properties

### column

• **column**: `number`

The column number of the expression within the translation message.

#### Inherited from

[CompilerToken](CompilerToken.md).[column](CompilerToken.md#column)

___

### falsy

• `Readonly` **falsy**: [`CompilerToken`](CompilerToken.md)

___

### line

• **line**: `number`

The line number of the expression within the translation message.

#### Inherited from

[CompilerToken](CompilerToken.md).[line](CompilerToken.md#line)

___

### test

• `Readonly` **test**: [`CompilerToken`](CompilerToken.md)

___

### text

• **text**: `string`

The full text (content) of the expression.

#### Inherited from

[CompilerToken](CompilerToken.md).[text](CompilerToken.md#text)

___

### truthy

• `Readonly` **truthy**: [`CompilerToken`](CompilerToken.md)

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
