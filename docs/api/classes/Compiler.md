# Class: Compiler

Default implementation of the [CompilerInterface](../interfaces/CompilerInterface.md).

## Implements

- [`CompilerInterface`](../interfaces/CompilerInterface.md)

## Table of contents

### Constructors

- [constructor](Compiler.md#constructor)

### Methods

- [compile](Compiler.md#compile)
- [tokenize](Compiler.md#tokenize)

## Constructors

### constructor

• **new Compiler**(`options?`): [`Compiler`](Compiler.md)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CompilerOptionsType`](../README.md#compileroptionstype) | Customizes the compiler. |

#### Returns

[`Compiler`](Compiler.md)

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

[CompilerInterface](../interfaces/CompilerInterface.md).[compile](../interfaces/CompilerInterface.md#compile)

___

### tokenize

▸ **tokenize**(`value`): [`CompilerToken`](CompilerToken.md)[]

Tokenizes the given string converting it into a sequence of [CompilerToken](CompilerToken.md) instances.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The source string to tokenize. |

#### Returns

[`CompilerToken`](CompilerToken.md)[]

#### Implementation of

[CompilerInterface](../interfaces/CompilerInterface.md).[tokenize](../interfaces/CompilerInterface.md#tokenize)