# Class: CompilerContext

[index](../modules/index.md).CompilerContext

A class to hold and represent the context of a translation message compilation.
This should be used to keep track of the parameters and globals that are used in messages.

## Table of contents

### Constructors

- [constructor](index.CompilerContext.md#constructor)

### Properties

- [globals](index.CompilerContext.md#globals)
- [parameters](index.CompilerContext.md#parameters)

### Methods

- [requireGlobal](index.CompilerContext.md#requireglobal)
- [requireParameter](index.CompilerContext.md#requireparameter)

## Constructors

### constructor

• **new CompilerContext**(): [`CompilerContext`](index.CompilerContext.md)

#### Returns

[`CompilerContext`](index.CompilerContext.md)

## Properties

### globals

• **globals**: `string`[] = `[]`

A list of global variable / function names used in the message.

___

### parameters

• **parameters**: `string`[] = `[]`

A list of parameter names used in the message.

## Methods

### requireGlobal

▸ **requireGlobal**(`name`): `this`

Adds a global variable / function name to the list of referenced globals unless already present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the global variable / function. |

#### Returns

`this`

___

### requireParameter

▸ **requireParameter**(`name`): `this`

Adds a parameter name to the list of referenced parameters unless already present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the parameter. |

#### Returns

`this`
