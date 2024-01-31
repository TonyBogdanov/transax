# Class: CallExpressionToken

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

- [`CompilerToken`](CompilerToken.md)

  ↳ **`CallExpressionToken`**

## Table of contents

### Constructors

- [constructor](CallExpressionToken.md#constructor)

### Properties

- [column](CallExpressionToken.md#column)
- [global](CallExpressionToken.md#global)
- [line](CallExpressionToken.md#line)
- [name](CallExpressionToken.md#name)
- [tail](CallExpressionToken.md#tail)
- [text](CallExpressionToken.md#text)

### Methods

- [compile](CallExpressionToken.md#compile)
- [compileWrap](CallExpressionToken.md#compilewrap)

## Constructors

### constructor

• **new CallExpressionToken**(`global`, `name`, `tail`, `text`, `location`): [`CallExpressionToken`](CallExpressionToken.md)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `global` | `boolean` | Specifies whether the identifier is a global variable or a parameter. |
| `name` | `string` | The name of the identifier. |
| `tail` | ([`CallExpressionObjectAccess`](CallExpressionObjectAccess.md) \| [`CallExpressionArrayAccess`](CallExpressionArrayAccess.md) \| [`CallExpressionInvocation`](CallExpressionInvocation.md))[] | An array of object accesses, array accesses or invocations. |
| `text` | `string` | The full text (content) of the expression. |
| `location` | `LocationRange` | The location of the invocation within the source code. |

#### Returns

[`CallExpressionToken`](CallExpressionToken.md)

#### Overrides

[CompilerToken](CompilerToken.md).[constructor](CompilerToken.md#constructor)

## Properties

### column

• **column**: `number`

The column number of the expression within the translation message.

#### Inherited from

[CompilerToken](CompilerToken.md).[column](CompilerToken.md#column)

___

### global

• `Readonly` **global**: `boolean`

___

### line

• **line**: `number`

The line number of the expression within the translation message.

#### Inherited from

[CompilerToken](CompilerToken.md).[line](CompilerToken.md#line)

___

### name

• `Readonly` **name**: `string`

___

### tail

• `Readonly` **tail**: ([`CallExpressionObjectAccess`](CallExpressionObjectAccess.md) \| [`CallExpressionArrayAccess`](CallExpressionArrayAccess.md) \| [`CallExpressionInvocation`](CallExpressionInvocation.md))[]

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
