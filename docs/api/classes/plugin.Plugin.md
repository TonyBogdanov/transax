# Class: Plugin

[plugin](../modules/plugin.md).Plugin

## Table of contents

### Constructors

- [constructor](plugin.Plugin.md#constructor)

### Methods

- [createDictionaryWatcher](plugin.Plugin.md#createdictionarywatcher)
- [createInputWatcher](plugin.Plugin.md#createinputwatcher)
- [dump](plugin.Plugin.md#dump)
- [loadDictionaries](plugin.Plugin.md#loaddictionaries)
- [loadDictionary](plugin.Plugin.md#loaddictionary)
- [loadInput](plugin.Plugin.md#loadinput)
- [loadInputs](plugin.Plugin.md#loadinputs)
- [removeDictionary](plugin.Plugin.md#removedictionary)
- [removeInput](plugin.Plugin.md#removeinput)

## Constructors

### constructor

• **new Plugin**(`options`): [`Plugin`](plugin.Plugin.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PluginOptionsType`](../modules/types.md#pluginoptionstype) |

#### Returns

[`Plugin`](plugin.Plugin.md)

## Methods

### createDictionaryWatcher

▸ **createDictionaryWatcher**(): `FSWatcher`

#### Returns

`FSWatcher`

___

### createInputWatcher

▸ **createInputWatcher**(): `FSWatcher`

#### Returns

`FSWatcher`

___

### dump

▸ **dump**(): `void`

#### Returns

`void`

___

### loadDictionaries

▸ **loadDictionaries**(): `void`

#### Returns

`void`

___

### loadDictionary

▸ **loadDictionary**(`path`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`\<`void`\>

___

### loadInput

▸ **loadInput**(`path`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`\<`void`\>

___

### loadInputs

▸ **loadInputs**(): `void`

#### Returns

`void`

___

### removeDictionary

▸ **removeDictionary**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

___

### removeInput

▸ **removeInput**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`
