# Class: Logger

Default implementation of the [LoggerInterface](../interfaces/LoggerInterface.md).
Logs all messages to the console.

## Implements

- [`LoggerInterface`](../interfaces/LoggerInterface.md)

## Table of contents

### Constructors

- [constructor](Logger.md#constructor)

### Methods

- [log](Logger.md#log)
- [verbose](Logger.md#verbose)

## Constructors

### constructor

• **new Logger**(`options?`): [`Logger`](Logger.md)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`LoggerOptionsType`](../README.md#loggeroptionstype) | Customizes the logger. |

#### Returns

[`Logger`](Logger.md)

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

[LoggerInterface](../interfaces/LoggerInterface.md).[log](../interfaces/LoggerInterface.md#log)

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

[LoggerInterface](../interfaces/LoggerInterface.md).[verbose](../interfaces/LoggerInterface.md#verbose)
