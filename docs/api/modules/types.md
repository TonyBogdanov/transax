# Module: types

## Table of contents

### Type Aliases

- [AnalyzerOptionsType](types.md#analyzeroptionstype)
- [CatalogType](types.md#catalogtype)
- [CompiledCatalogType](types.md#compiledcatalogtype)
- [CompiledDictionaryType](types.md#compileddictionarytype)
- [CompiledValueType](types.md#compiledvaluetype)
- [CompilerOptionsType](types.md#compileroptionstype)
- [ContextGlobalsType](types.md#contextglobalstype)
- [ContextParamsType](types.md#contextparamstype)
- [ContextType](types.md#contexttype)
- [DictionaryType](types.md#dictionarytype)
- [GeneratorOptionsType](types.md#generatoroptionstype)
- [KeyFormatterType](types.md#keyformattertype)
- [KeyType](types.md#keytype)
- [LocaleType](types.md#localetype)
- [LoggerOptionsType](types.md#loggeroptionstype)
- [PluginDictionaryType](types.md#plugindictionarytype)
- [PluginInputType](types.md#plugininputtype)
- [PluginOptionsType](types.md#pluginoptionstype)
- [PluginOutputAnalysisType](types.md#pluginoutputanalysistype)
- [PluginOutputCompilationType](types.md#pluginoutputcompilationtype)
- [PluginOutputType](types.md#pluginoutputtype)
- [TranslatorOptionsType](types.md#translatoroptionstype)
- [ValueType](types.md#valuetype)

## Type Aliases

### AnalyzerOptionsType

Ƭ **AnalyzerOptionsType**: `Object`

Options for the [Analyzer](../classes/index.Analyzer.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyFormatter?` | [`KeyFormatterType`](types.md#keyformattertype) | A function to format the translation key based on the context. Defaults to `( key => key )`. |
| `logger?` | [`LoggerInterface`](../interfaces/index.LoggerInterface.md) \| [`LoggerOptionsType`](types.md#loggeroptionstype) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:ANALYZER' } )`. |
| `names?` | `string`[] \| `string` | The name(s) of the function(s) to analyze. Defaults to `[ '$t' ]`. |

___

### CatalogType

Ƭ **CatalogType**: `Record`\<[`LocaleType`](types.md#localetype), [`DictionaryType`](types.md#dictionarytype)\>

Catalog of translation entries, keyed by locale.

**`Example`**

```typescript
{
  "en_US": {
    "my.translation.key": "Hello there, nice to meet you!",
  },
}
```

___

### CompiledCatalogType

Ƭ **CompiledCatalogType**: `Record`\<[`LocaleType`](types.md#localetype), [`CompiledDictionaryType`](types.md#compileddictionarytype)\>

A compiled version of a [CatalogType](types.md#catalogtype).

___

### CompiledDictionaryType

Ƭ **CompiledDictionaryType**: `Record`\<[`KeyType`](types.md#keytype), [`CompiledValueType`](types.md#compiledvaluetype)\>

A compiled version of a [DictionaryType](types.md#dictionarytype).

___

### CompiledValueType

Ƭ **CompiledValueType**: (`params`: [`ContextParamsType`](types.md#contextparamstype), `globals`: [`ContextGlobalsType`](types.md#contextglobalstype)) => `string` \| `string`

A compiled version of a [ValueType](types.md#valuetype).

___

### CompilerOptionsType

Ƭ **CompilerOptionsType**: `Object`

Options for the [Compiler](../classes/index.Compiler.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `logger?` | [`LoggerInterface`](../interfaces/index.LoggerInterface.md) \| [`LoggerOptionsType`](types.md#loggeroptionstype) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:COMPILER' } )`. |

___

### ContextGlobalsType

Ƭ **ContextGlobalsType**: `Record`\<`string`, `any`\>

Hashmap of context globals to be used during translation.

___

### ContextParamsType

Ƭ **ContextParamsType**: `Record`\<`string`, `any`\>

Hashmap of context parameters to be used during translation.

___

### ContextType

Ƭ **ContextType**: `Object`

Runtime context to be used during translation.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `globals?` | [`ContextGlobalsType`](types.md#contextglobalstype) | Hashmap of globals available to translation expressions. |
| `locale?` | [`LocaleType`](types.md#localetype) | The locale to translate to. If not specified, the default locale specified in the translator options will be used. |
| `params?` | [`ContextParamsType`](types.md#contextparamstype) | Hashmap of parameters available to translation expressions. |

___

### DictionaryType

Ƭ **DictionaryType**: `Record`\<[`KeyType`](types.md#keytype), [`ValueType`](types.md#valuetype)\>

Translation dictionary as a hashmap of key-value pairs.

**`Example`**

```typescript
{ "my.translation.key": "Hello there, nice to meet you!" }
```

___

### GeneratorOptionsType

Ƭ **GeneratorOptionsType**: `Object`

Options for the Generator.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `analyzer?` | [`AnalyzerInterface`](../interfaces/index.AnalyzerInterface.md) \| [`AnalyzerOptionsType`](types.md#analyzeroptionstype) | Optional analyzer instance. Defaults to `new Analyzer()`. |
| `compiler?` | [`CompilerInterface`](../interfaces/index.CompilerInterface.md) \| [`CompilerOptionsType`](types.md#compileroptionstype) | Optional compiler instance. Defaults to `new Compiler()`. |
| `logger?` | [`LoggerInterface`](../interfaces/index.LoggerInterface.md) \| [`LoggerOptionsType`](types.md#loggeroptionstype) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:GENERATOR' } )`. |
| `translations?` | [`CatalogType`](types.md#catalogtype) | Optional translation catalog. Defaults to `{}`. |

___

### KeyFormatterType

Ƭ **KeyFormatterType**: (`key`: [`KeyType`](types.md#keytype), `token`: [`AnalyzerToken`](../classes/index.AnalyzerToken.md)) => `string`

A function to format the translation key based on the context.

#### Type declaration

▸ (`key`, `token`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`KeyType`](types.md#keytype) |
| `token` | [`AnalyzerToken`](../classes/index.AnalyzerToken.md) |

##### Returns

`string`

___

### KeyType

Ƭ **KeyType**: `string`

Translation key as a string used to identify a translation.

**`Example`**

```typescript
"my.translation.key"
```

___

### LocaleType

Ƭ **LocaleType**: `string`

Translation locale as a string representing a unique language.

**`Example`**

```typescript
"en_US"
```

___

### LoggerOptionsType

Ƭ **LoggerOptionsType**: `Object`

Options for [Logger](../classes/index.Logger.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace?` | `string` | Specifies a namespace for identifying the purpose of the logger (e.g. `Analysis`). Defaults to `TRANSAX`. |
| `quiet?` | `boolean` | Disables all logging. Defaults to `false`. |
| `verbose?` | `boolean` | Enables verbose logging. Defaults to `false`. |

___

### PluginDictionaryType

Ƭ **PluginDictionaryType**: `Object`

Options for the [PluginOptionsType.dictionary](types.md#dictionary).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | (`path`: `string`) => [`CatalogType`](types.md#catalogtype) \| `Promise`\<[`CatalogType`](types.md#catalogtype)\> \| `string` | Specifies a handler for loading and parsing the translation dictionary files. This function is called each time the contents of a translation dictionary file changes and is responsible for loading and parsing the contents of the file. The result must be a catalog object or a promise that resolves to a catalog object. All returned catalogs are merged together. You can also use built-in handlers by specifying a string name (instead of a function), one of: `yaml` or `json`. In this case the handler will infer the locale from the path (the name without the extension). |
| `pattern` | `string`[] \| `string` | Specifies a glob pattern or array of patterns to match your project's translation dictionary files. |

___

### PluginInputType

Ƭ **PluginInputType**: `Object`

Options for the [PluginOptionsType.input](types.md#input).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyFormatter?` | [`KeyFormatterType`](types.md#keyformattertype) | Specifies a function to be used to transform the translation keys depending on the source they were detected at. Defaults to `( key => key )`. [AnalyzerOptionsType.keyFormatter](types.md#keyformatter) |
| `keywords?` | `string`[] \| `string` | Specifies the function name / keywords or an array of keywords to match when looking for translation calls. Defaults to `[ '$t' ]`. |
| `pattern` | `string`[] \| `string` | Specifies a glob pattern or array of patterns to match your project's source files to be observed & analyzed for translation calls. |

___

### PluginOptionsType

Ƭ **PluginOptionsType**: `Object`

Options for the [VitePlugin](plugin.md#viteplugin).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dictionary` | [`PluginDictionaryType`](types.md#plugindictionarytype) | Specifies dictionary options. |
| `input` | [`PluginInputType`](types.md#plugininputtype) | Specifies input options. |
| `output` | [`PluginOutputType`](types.md#pluginoutputtype) | Specifies output options. |
| `quiet` | `boolean` | Specifies whether to suppress logging. |
| `verbose` | `boolean` | Specifies whether to log verbose information. |

___

### PluginOutputAnalysisType

Ƭ **PluginOutputAnalysisType**: `Object`

Options for [PluginOutputType.missing](types.md#missing) and [PluginOutputType.unused](types.md#unused).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `flavor` | `string` | Specifies the flavor of the output file being generated. Can be one of PluginOutputAnalysisFlavorMissing or PluginOutputAnalysisFlavorUnused for missing and unused translation keys respectively. |
| `handler?` | (`path`: `string`, `generator`: [`Generator`](../classes/index.Generator.md)) => `Promise`\<`void`\> \| `void` \| `string` | Specifies a handler function for encoding and writing the output file. It can be synchronous, or return a Promise. You can also use built-in handlers by specifying a string name (instead of a function), one of: `txt`, `yaml` or `json`. If left unspecified, the handler will be determined automatically based on the file extension if possible. |
| `path` | `string` | Specifies the path to the output file being generated. |

___

### PluginOutputCompilationType

Ƭ **PluginOutputCompilationType**: `Object`

Options for the [PluginOptionsType.input](types.md#input).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler?` | (`path`: `string`, `generator`: [`Generator`](../classes/index.Generator.md)) => `Promise`\<`void`\> \| `void` \| `string` | Specifies a handler function for encoding and writing the output file. It can be synchronous, or return a Promise. You can also use built-in handlers by specifying a string name (instead of a function), one of: `esm` or `cjs`. If left unspecified, the handler will be determined automatically based on the file extension. |
| `includeMeta?` | `boolean` | Specifies whether to include meta information in the output file. Defaults to `false`. |
| `path` | `string` | Specifies the path to the output file being generated. |

___

### PluginOutputType

Ƭ **PluginOutputType**: `Object`

Options for [PluginOptionsType.output](types.md#output).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `compiled` | [`PluginOutputCompilationType`](types.md#pluginoutputcompilationtype) \| `string` | Specifies the output file for compiled translations. If a `string` is provided, it will be used as the `path` option. |
| `missing?` | [`PluginOutputAnalysisType`](types.md#pluginoutputanalysistype) \| `string` | Specifies the output file for missing translations. If a `string` is provided, it will be used as the `path` option. |
| `unused?` | [`PluginOutputAnalysisType`](types.md#pluginoutputanalysistype) \| `string` | Specifies the output file for unused translations. If a `string` is provided, it will be used as the `path` option. |

___

### TranslatorOptionsType

Ƭ **TranslatorOptionsType**: `Object`

Options for the [Translator](../classes/index.Translator.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fallbackLocale?` | [`LocaleType`](types.md#localetype) | Optional fallback locale. Defaults to `undefined`. |
| `logger?` | [`LoggerInterface`](../interfaces/index.LoggerInterface.md) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:TRANSLATOR' } )`. |
| `translations?` | [`CompiledCatalogType`](types.md#compiledcatalogtype) | Optional compiled translation catalog. Defaults to `{}`. |

___

### ValueType

Ƭ **ValueType**: `string`

Translation value as a string translation of its corresponding key.

**`Example`**

```typescript
"Hello there, nice to meet you!"
```
