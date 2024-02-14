# Interface: CompilerInterface

[index](../modules/index.md).CompilerInterface

Defines an interface for **Compiler** classes.

## Implemented by

- [`Compiler`](../classes/index.Compiler.md)

## Table of contents

### Methods

- [compile](index.CompilerInterface.md#compile)
- [tokenize](index.CompilerInterface.md#tokenize)

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

▸ **tokenize**(`value`): [`CompilerToken`](../classes/index.CompilerToken.md)[]

Tokenizes the given string converting it into a sequence of [CompilerToken](../classes/index.CompilerToken.md) instances.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The source string to tokenize. |

#### Returns

[`CompilerToken`](../classes/index.CompilerToken.md)[]
