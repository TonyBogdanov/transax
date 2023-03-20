# Class: CompilerContext

A class to hold and represent the context of a translation message compilation.
This should be used to keep track of the parameters and globals that are used in messages.

## Table of contents

### Constructors

- [constructor](CompilerContext.md#constructor)

### Properties

- [globals](CompilerContext.md#globals)
- [parameters](CompilerContext.md#parameters)

### Methods

- [requireGlobal](CompilerContext.md#requireglobal)
- [requireParameter](CompilerContext.md#requireparameter)

## Constructors

### constructor

• **new CompilerContext**()

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

▸ **requireGlobal**(`name`): [`CompilerContext`](CompilerContext.md)

Adds a global variable / function name to the list of referenced globals unless already present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the global variable / function. |

#### Returns

[`CompilerContext`](CompilerContext.md)

___

### requireParameter

▸ **requireParameter**(`name`): [`CompilerContext`](CompilerContext.md)

Adds a parameter name to the list of referenced parameters unless already present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the parameter. |

#### Returns

[`CompilerContext`](CompilerContext.md)
