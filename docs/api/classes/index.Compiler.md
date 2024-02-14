# Class: Compiler

[index](../modules/index.md).Compiler

Default implementation of the [CompilerInterface](../interfaces/index.CompilerInterface.md).

## Implements

- [`CompilerInterface`](../interfaces/index.CompilerInterface.md)

## Table of contents

### Constructors

- [constructor](index.Compiler.md#constructor)

### Methods

- [compile](index.Compiler.md#compile)
- [tokenize](index.Compiler.md#tokenize)

## Constructors

### constructor

• **new Compiler**(`options?`): [`Compiler`](index.Compiler.md)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CompilerOptionsType`](../modules/types.md#compileroptionstype) | Customizes the compiler. |

#### Returns

[`Compiler`](index.Compiler.md)

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

#### Implementation of

[CompilerInterface](../interfaces/index.CompilerInterface.md).[compile](../interfaces/index.CompilerInterface.md#compile)

___

### tokenize

▸ **tokenize**(`value`): [`CompilerToken`](index.CompilerToken.md)[]

Tokenizes the given string converting it into a sequence of [CompilerToken](index.CompilerToken.md) instances.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The source string to tokenize. |

#### Returns

[`CompilerToken`](index.CompilerToken.md)[]

#### Implementation of

[CompilerInterface](../interfaces/index.CompilerInterface.md).[tokenize](../interfaces/index.CompilerInterface.md#tokenize)
