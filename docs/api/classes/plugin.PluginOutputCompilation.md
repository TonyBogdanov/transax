# Class: PluginOutputCompilation

[plugin](../modules/plugin.md).PluginOutputCompilation

Options for the [VitePlugin](../modules/plugin.md#viteplugin).

## Implements

- [`PluginOutputCompilationType`](../modules/types.md#pluginoutputcompilationtype)

## Table of contents

### Constructors

- [constructor](plugin.PluginOutputCompilation.md#constructor)

### Properties

- [handler](plugin.PluginOutputCompilation.md#handler)
- [includeMeta](plugin.PluginOutputCompilation.md#includemeta)
- [path](plugin.PluginOutputCompilation.md#path)

## Constructors

### constructor

• **new PluginOutputCompilation**(`options`): [`PluginOutputCompilation`](plugin.PluginOutputCompilation.md)

Creates a new instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PluginOutputCompilationType`](../modules/types.md#pluginoutputcompilationtype) |

#### Returns

[`PluginOutputCompilation`](plugin.PluginOutputCompilation.md)

## Properties

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

PluginOutputCompilationType.handler

___

### includeMeta

• **includeMeta**: `boolean`

**`Inherit Doc`**

#### Implementation of

PluginOutputCompilationType.includeMeta

___

### path

• **path**: `string`

**`Inherit Doc`**

#### Implementation of

PluginOutputCompilationType.path
