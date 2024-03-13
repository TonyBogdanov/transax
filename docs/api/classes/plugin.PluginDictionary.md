# Class: PluginDictionary

[plugin](../modules/plugin.md).PluginDictionary

Options for the [VitePlugin](../modules/plugin.md#viteplugin).

## Implements

- [`PluginDictionaryType`](../modules/types.md#plugindictionarytype)

## Table of contents

### Constructors

- [constructor](plugin.PluginDictionary.md#constructor)

### Properties

- [handler](plugin.PluginDictionary.md#handler)
- [pattern](plugin.PluginDictionary.md#pattern)

## Constructors

### constructor

• **new PluginDictionary**(`options`): [`PluginDictionary`](plugin.PluginDictionary.md)

Creates a new instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PluginDictionaryType`](../modules/types.md#plugindictionarytype) |

#### Returns

[`PluginDictionary`](plugin.PluginDictionary.md)

## Properties

### handler

• **handler**: (`path`: `string`) => [`CatalogType`](../modules/types.md#catalogtype) \| `Promise`\<[`CatalogType`](../modules/types.md#catalogtype)\>

**`Inherit Doc`**

#### Type declaration

▸ (`path`): [`CatalogType`](../modules/types.md#catalogtype) \| `Promise`\<[`CatalogType`](../modules/types.md#catalogtype)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

##### Returns

[`CatalogType`](../modules/types.md#catalogtype) \| `Promise`\<[`CatalogType`](../modules/types.md#catalogtype)\>

#### Implementation of

PluginDictionaryType.handler

___

### pattern

• **pattern**: `string`[]

**`Inherit Doc`**

#### Implementation of

PluginDictionaryType.pattern
