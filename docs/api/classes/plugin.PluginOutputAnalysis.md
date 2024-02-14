# Class: PluginOutputAnalysis

[plugin](../modules/plugin.md).PluginOutputAnalysis

Options for the [VitePlugin](../modules/plugin.md#viteplugin).

## Implements

- [`PluginOutputAnalysisType`](../modules/types.md#pluginoutputanalysistype)

## Table of contents

### Constructors

- [constructor](plugin.PluginOutputAnalysis.md#constructor)

### Properties

- [flavor](plugin.PluginOutputAnalysis.md#flavor)
- [handler](plugin.PluginOutputAnalysis.md#handler)
- [path](plugin.PluginOutputAnalysis.md#path)

## Constructors

### constructor

• **new PluginOutputAnalysis**(`options`): [`PluginOutputAnalysis`](plugin.PluginOutputAnalysis.md)

Creates a new instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PluginOutputAnalysisType`](../modules/types.md#pluginoutputanalysistype) |

#### Returns

[`PluginOutputAnalysis`](plugin.PluginOutputAnalysis.md)

## Properties

### flavor

• **flavor**: `string`

**`Inherit Doc`**

#### Implementation of

PluginOutputAnalysisType.flavor

___

### handler

• **handler**: (`path`: `string`, `generator`: [`Generator`](index.Generator.md)) => `void` \| `Promise`\<`void`\>

**`Inherit Doc`**

#### Type declaration

▸ (`path`, `generator`): `void` \| `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `generator` | [`Generator`](index.Generator.md) |

##### Returns

`void` \| `Promise`\<`void`\>

**`Inherit Doc`**

#### Implementation of

PluginOutputAnalysisType.handler

___

### path

• **path**: `string`

**`Inherit Doc`**

#### Implementation of

PluginOutputAnalysisType.path
