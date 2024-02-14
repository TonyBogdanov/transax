# Interface: LoggerInterface

[index](../modules/index.md).LoggerInterface

Defines an interface for **Logger** classes.

## Implemented by

- [`Logger`](../classes/index.Logger.md)

## Table of contents

### Methods

- [log](index.LoggerInterface.md#log)
- [verbose](index.LoggerInterface.md#verbose)

## Methods

### log

▸ **log**(`...args`): `void`

Logs a message unless `isSilent` is `true`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | `any`[] | A list of arguments to log. These can be of any type that the underlying implementation (e.g. `console.log` ) can handle. |

#### Returns

`void`

___

### verbose

▸ **verbose**(`...args`): `void`

Logs a verbose message unless `isSilent` is `true` or `isVerbose` is `false`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | `any`[] | A list of arguments to log. These can be of any type that the underlying implementation (e.g. `console.log` ) can handle. |

#### Returns

`void`
