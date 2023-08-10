# Interface: CompilerInterface

Defines an interface for **Compiler** classes.

## Implemented by

- [`Compiler`](../classes/Compiler.md)

## Table of contents

### Methods

- [compile](CompilerInterface.md#compile)
- [tokenize](CompilerInterface.md#tokenize)

## Methods

### compile

▸ **compile**(`value`): `string`

Tokenizes the given string and then compiles it into an executable ECMAScript6 string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The source string to tokenize. |

#### Returns

`string`

___

### tokenize

▸ **tokenize**(`value`): [`CompilerToken`](../classes/CompilerToken.md)[]

Tokenizes the given string converting it into a sequence of [CompilerToken](../classes/CompilerToken.md) instances.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The source string to tokenize. |

#### Returns

[`CompilerToken`](../classes/CompilerToken.md)[]
