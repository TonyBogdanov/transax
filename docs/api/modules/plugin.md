# Module: plugin

## Table of contents

### Classes

- [Plugin](../classes/plugin.Plugin.md)
- [PluginDictionary](../classes/plugin.PluginDictionary.md)
- [PluginInput](../classes/plugin.PluginInput.md)
- [PluginOptions](../classes/plugin.PluginOptions.md)
- [PluginOutput](../classes/plugin.PluginOutput.md)
- [PluginOutputAnalysis](../classes/plugin.PluginOutputAnalysis.md)
- [PluginOutputCompilation](../classes/plugin.PluginOutputCompilation.md)

### Functions

- [VitePlugin](plugin.md#viteplugin)

## Functions

### VitePlugin

▸ **VitePlugin**(`options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PluginOptionsType`](types.md#pluginoptionstype) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `buildStart` | () => `void` |
| `closeBundle` | () => `Promise`\<[`void`, `void`]\> |
