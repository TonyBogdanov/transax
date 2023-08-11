# Class: ComparisonExpressionToken

Represents a comparison expression.

It must consist of two expressions separated by a comparison operator.

Examples:
`a == b`
`a != b`
`a > b`
`a < b`
`a >= b`
`a <= b`
`a === b`
`a !== b`

## Hierarchy

- [`CompilerToken`](CompilerToken.md)

  ↳ **`ComparisonExpressionToken`**

## Table of contents

### Constructors

- [constructor](ComparisonExpressionToken.md#constructor)

### Properties

- [column](ComparisonExpressionToken.md#column)
- [left](ComparisonExpressionToken.md#left)
- [line](ComparisonExpressionToken.md#line)
- [operator](ComparisonExpressionToken.md#operator)
- [right](ComparisonExpressionToken.md#right)
- [text](ComparisonExpressionToken.md#text)

### Methods

- [compile](ComparisonExpressionToken.md#compile)
- [compileWrap](ComparisonExpressionToken.md#compilewrap)

## Constructors

### constructor

• **new ComparisonExpressionToken**(`left`, `right`, `operator`, `text`, `location`)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | [`CompilerToken`](CompilerToken.md) | The left-hand side of the expression. |
| `right` | [`CompilerToken`](CompilerToken.md) | The right-hand side of the expression. |
| `operator` | `string` | The comparison operator. |
| `text` | `string` | The full text (content) of the expression. |
| `location` | `LocationRange` | The location of the invocation within the source code. |

#### Overrides

[CompilerToken](CompilerToken.md).[constructor](CompilerToken.md#constructor)

## Properties

### column

• **column**: `number`

The column number of the expression within the translation message.

#### Inherited from

[CompilerToken](CompilerToken.md).[column](CompilerToken.md#column)

___

### left

• `Readonly` **left**: [`CompilerToken`](CompilerToken.md)

___

### line

• **line**: `number`

The line number of the expression within the translation message.

#### Inherited from

[CompilerToken](CompilerToken.md).[line](CompilerToken.md#line)

___

### operator

• `Readonly` **operator**: `string`

___

### right

• `Readonly` **right**: [`CompilerToken`](CompilerToken.md)

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

▸ `Protected` **compileWrap**(`context`, `instanceOfs`): `string`

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
