# Class: Logger

[index](../modules/index.md).Logger

Default implementation of the [LoggerInterface](../interfaces/index.LoggerInterface.md).
Logs all messages to the console.

## Implements

- [`LoggerInterface`](../interfaces/index.LoggerInterface.md)

## Table of contents

### Constructors

- [constructor](index.Logger.md#constructor)

### Methods

- [log](index.Logger.md#log)
- [verbose](index.Logger.md#verbose)

## Constructors

### constructor

• **new Logger**(`options?`): [`Logger`](index.Logger.md)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`LoggerOptionsType`](../modules/types.md#loggeroptionstype) | Customizes the logger. |

#### Returns

[`Logger`](index.Logger.md)

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

#### Implementation of

[LoggerInterface](../interfaces/index.LoggerInterface.md).[log](../interfaces/index.LoggerInterface.md#log)

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

#### Implementation of

[LoggerInterface](../interfaces/index.LoggerInterface.md).[verbose](../interfaces/index.LoggerInterface.md#verbose)
