# Class: BracketSafeExpressionToken

Represents an expression wrapped in brackets to avoid syntax conflicts.

## Hierarchy

- [`CompilerToken`](CompilerToken.md)

  ↳ **`BracketSafeExpressionToken`**

## Table of contents

### Constructors

- [constructor](BracketSafeExpressionToken.md#constructor)

### Properties

- [column](BracketSafeExpressionToken.md#column)
- [expr](BracketSafeExpressionToken.md#expr)
- [line](BracketSafeExpressionToken.md#line)
- [text](BracketSafeExpressionToken.md#text)

### Methods

- [compile](BracketSafeExpressionToken.md#compile)

## Constructors

### constructor

• **new BracketSafeExpressionToken**(`expr`, `text`, `location`)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expr` | [`CompilerToken`](CompilerToken.md) | The expression being wrapped. |
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

### expr

• `Readonly` **expr**: [`CompilerToken`](CompilerToken.md)

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
