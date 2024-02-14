# Class: CallExpressionToken

[index](../modules/index.md).CallExpressionToken

Represents a call expression.

It must be represented by an identifier (local or global) optionally followed by one or more of the following:

- Object access: `.` followed by an identifier.
- Array access: `[` followed by an expression followed by `]`.
- Invocation: `(` followed by an optional comma-separated list of expressions followed by `)`.

Examples:
`local`
`@global`
`local.property`
`@global.property`
`local[0]`
`@global[0]`
`local[0].property`
`@global[0].property`
`local[0].property()`
`@global[0].property()`
`local[0].property(1, 2, 3)`
`@global[0].property(1, 2, 3)`

## Hierarchy

- [`CompilerToken`](index.CompilerToken.md)

  ↳ **`CallExpressionToken`**

## Table of contents

### Constructors

- [constructor](index.CallExpressionToken.md#constructor)

### Properties

- [column](index.CallExpressionToken.md#column)
- [global](index.CallExpressionToken.md#global)
- [line](index.CallExpressionToken.md#line)
- [name](index.CallExpressionToken.md#name)
- [tail](index.CallExpressionToken.md#tail)
- [text](index.CallExpressionToken.md#text)

### Methods

- [compile](index.CallExpressionToken.md#compile)
- [compileWrap](index.CallExpressionToken.md#compilewrap)

## Constructors

### constructor

• **new CallExpressionToken**(`global`, `name`, `tail`, `text`, `location`): [`CallExpressionToken`](index.CallExpressionToken.md)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `global` | `boolean` | Specifies whether the identifier is a global variable or a parameter. |
| `name` | `string` | The name of the identifier. |
| `tail` | ([`CallExpressionObjectAccess`](index.CallExpressionObjectAccess.md) \| [`CallExpressionArrayAccess`](index.CallExpressionArrayAccess.md) \| [`CallExpressionInvocation`](index.CallExpressionInvocation.md))[] | An array of object accesses, array accesses or invocations. |
| `text` | `string` | The full text (content) of the expression. |
| `location` | `LocationRange` | The location of the invocation within the source code. |

#### Returns

[`CallExpressionToken`](index.CallExpressionToken.md)

#### Overrides

[CompilerToken](index.CompilerToken.md).[constructor](index.CompilerToken.md#constructor)

## Properties

### column

• **column**: `number`

The column number of the expression within the translation message.

#### Inherited from

[CompilerToken](index.CompilerToken.md).[column](index.CompilerToken.md#column)

___

### global

• `Readonly` **global**: `boolean`

___

### line

• **line**: `number`

The line number of the expression within the translation message.

#### Inherited from

[CompilerToken](index.CompilerToken.md).[line](index.CompilerToken.md#line)

___

### name

• `Readonly` **name**: `string`

___

### tail

• `Readonly` **tail**: ([`CallExpressionObjectAccess`](index.CallExpressionObjectAccess.md) \| [`CallExpressionArrayAccess`](index.CallExpressionArrayAccess.md) \| [`CallExpressionInvocation`](index.CallExpressionInvocation.md))[]

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
