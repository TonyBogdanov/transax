# API Reference

## Table of contents

### Classes

- [Analyzer](classes/Analyzer.md)
- [AnalyzerOptions](classes/AnalyzerOptions.md)
- [AnalyzerToken](classes/AnalyzerToken.md)
- [CallExpressionArrayAccess](classes/CallExpressionArrayAccess.md)
- [CallExpressionInvocation](classes/CallExpressionInvocation.md)
- [CallExpressionObjectAccess](classes/CallExpressionObjectAccess.md)
- [CallExpressionToken](classes/CallExpressionToken.md)
- [ComparisonExpressionToken](classes/ComparisonExpressionToken.md)
- [Compiler](classes/Compiler.md)
- [CompilerContext](classes/CompilerContext.md)
- [CompilerOptions](classes/CompilerOptions.md)
- [CompilerToken](classes/CompilerToken.md)
- [Generator](classes/Generator.md)
- [GeneratorOptions](classes/GeneratorOptions.md)
- [LiteralToken](classes/LiteralToken.md)
- [Logger](classes/Logger.md)
- [LoggerOptions](classes/LoggerOptions.md)
- [TernaryExpressionToken](classes/TernaryExpressionToken.md)
- [TextToken](classes/TextToken.md)
- [Translator](classes/Translator.md)
- [TranslatorOptions](classes/TranslatorOptions.md)

### Interfaces

- [AnalyzerInterface](interfaces/AnalyzerInterface.md)
- [CompilerInterface](interfaces/CompilerInterface.md)
- [GeneratorInterface](interfaces/GeneratorInterface.md)
- [LoggerInterface](interfaces/LoggerInterface.md)
- [TranslatorInterface](interfaces/TranslatorInterface.md)

### Type Aliases

- [AnalyzerOptionsType](README.md#analyzeroptionstype)
- [CatalogType](README.md#catalogtype)
- [CompiledCatalogType](README.md#compiledcatalogtype)
- [CompiledDictionaryType](README.md#compileddictionarytype)
- [CompiledValueType](README.md#compiledvaluetype)
- [CompilerOptionsType](README.md#compileroptionstype)
- [ContextGlobalsType](README.md#contextglobalstype)
- [ContextParamsType](README.md#contextparamstype)
- [ContextType](README.md#contexttype)
- [DictionaryType](README.md#dictionarytype)
- [GeneratorOptionsType](README.md#generatoroptionstype)
- [KeyFormatterType](README.md#keyformattertype)
- [KeyType](README.md#keytype)
- [LocaleType](README.md#localetype)
- [LoggerOptionsType](README.md#loggeroptionstype)
- [PluginDictionaryType](README.md#plugindictionarytype)
- [PluginInputType](README.md#plugininputtype)
- [PluginOptionsType](README.md#pluginoptionstype)
- [PluginOutputAnalysisType](README.md#pluginoutputanalysistype)
- [PluginOutputCompilationType](README.md#pluginoutputcompilationtype)
- [PluginOutputType](README.md#pluginoutputtype)
- [TranslatorOptionsType](README.md#translatoroptionstype)
- [ValueType](README.md#valuetype)

### Functions

- [VitePlugin](README.md#viteplugin)

## Type Aliases

### AnalyzerOptionsType

Ƭ **AnalyzerOptionsType**: `Object`

Options for the [Analyzer](classes/Analyzer.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyFormatter?` | [`KeyFormatterType`](README.md#keyformattertype) | A function to format the translation key based on the context. Defaults to `( key => key )`. |
| `logger?` | [`LoggerInterface`](interfaces/LoggerInterface.md) \| [`LoggerOptionsType`](README.md#loggeroptionstype) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:ANALYZER' } )`. |
| `names?` | `string`[] \| `string` | The name(s) of the function(s) to analyze. Defaults to `[ '$t' ]`. |

___

### CatalogType

Ƭ **CatalogType**: `Record`\<[`LocaleType`](README.md#localetype), [`DictionaryType`](README.md#dictionarytype)\>

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

Ƭ **CompiledCatalogType**: `Record`\<[`LocaleType`](README.md#localetype), [`CompiledDictionaryType`](README.md#compileddictionarytype)\>

A compiled version of a [CatalogType](README.md#catalogtype).

___

### CompiledDictionaryType

Ƭ **CompiledDictionaryType**: `Record`\<[`KeyType`](README.md#keytype), [`CompiledValueType`](README.md#compiledvaluetype)\>

A compiled version of a [DictionaryType](README.md#dictionarytype).

___

### CompiledValueType

Ƭ **CompiledValueType**: (`params`: [`ContextParamsType`](README.md#contextparamstype), `globals`: [`ContextGlobalsType`](README.md#contextglobalstype)) => `string` \| `string`

A compiled version of a [ValueType](README.md#valuetype).

___

### CompilerOptionsType

Ƭ **CompilerOptionsType**: `Object`

Options for the [Compiler](classes/Compiler.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `logger?` | [`LoggerInterface`](interfaces/LoggerInterface.md) \| [`LoggerOptionsType`](README.md#loggeroptionstype) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:COMPILER' } )`. |

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
| `globals?` | [`ContextGlobalsType`](README.md#contextglobalstype) | Hashmap of globals available to translation expressions. |
| `locale?` | [`LocaleType`](README.md#localetype) | The locale to translate to. If not specified, the default locale specified in the translator options will be used. |
| `params?` | [`ContextParamsType`](README.md#contextparamstype) | Hashmap of parameters available to translation expressions. |

___

### DictionaryType

Ƭ **DictionaryType**: `Record`\<[`KeyType`](README.md#keytype), [`ValueType`](README.md#valuetype)\>

Translation dictionary as a hashmap of key-value pairs.

**`Example`**

```typescript
{ "my.translation.key": "Hello there, nice to meet you!" }
```

___

### GeneratorOptionsType

Ƭ **GeneratorOptionsType**: `Object`

Options for the [Generator](classes/Generator.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `analyzer?` | [`AnalyzerInterface`](interfaces/AnalyzerInterface.md) \| [`AnalyzerOptionsType`](README.md#analyzeroptionstype) | Optional analyzer instance. Defaults to `new Analyzer()`. |
| `compiler?` | [`CompilerInterface`](interfaces/CompilerInterface.md) \| [`CompilerOptionsType`](README.md#compileroptionstype) | Optional compiler instance. Defaults to `new Compiler()`. |
| `logger?` | [`LoggerInterface`](interfaces/LoggerInterface.md) \| [`LoggerOptionsType`](README.md#loggeroptionstype) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:GENERATOR' } )`. |
| `translations?` | [`CatalogType`](README.md#catalogtype) | Optional translation catalog. Defaults to `{}`. |

___

### KeyFormatterType

Ƭ **KeyFormatterType**: (`key`: [`KeyType`](README.md#keytype), `token`: [`AnalyzerToken`](classes/AnalyzerToken.md)) => `string`

A function to format the translation key based on the context.

#### Type declaration

▸ (`key`, `token`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`KeyType`](README.md#keytype) |
| `token` | [`AnalyzerToken`](classes/AnalyzerToken.md) |

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

Options for [Logger](classes/Logger.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace?` | `string` | Specifies a namespace for identifying the purpose of the logger (e.g. `Analysis`). Defaults to `TRANSAX`. |
| `quiet?` | `boolean` | Disables all logging. Defaults to `false`. |
| `verbose?` | `boolean` | Enables verbose logging. Defaults to `false`. |

___

### PluginDictionaryType

Ƭ **PluginDictionaryType**: `Object`

Options for the [PluginOptionsType.dictionary](README.md#dictionary).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | (`path`: `string`) => [`CatalogType`](README.md#catalogtype) \| `Promise`\<[`CatalogType`](README.md#catalogtype)\> \| `string` | Specifies a handler for loading and parsing the translation dictionary files. This function is called each time the contents of a translation dictionary file changes and is responsible for loading and parsing the contents of the file. The result must be a catalog object or a promise that resolves to a catalog object. All returned catalogs are merged together. You can also use built-in handlers by specifying a string name (instead of a function), one of: `yaml` or `json`. In this case the handler will infer the locale from the path (the name without the extension). |
| `pattern` | `string`[] \| `string` | Specifies a glob pattern or array of patterns to match your project's translation dictionary files. |

___

### PluginInputType

Ƭ **PluginInputType**: `Object`

Options for the [PluginOptionsType.input](README.md#input).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyFormatter?` | [`KeyFormatterType`](README.md#keyformattertype) | Specifies a function to be used to transform the translation keys depending on the source they were detected at. Defaults to `( key => key )`. [AnalyzerOptionsType.keyFormatter](README.md#keyformatter) |
| `keywords?` | `string`[] \| `string` | Specifies the function name / keywords or an array of keywords to match when looking for translation calls. Defaults to `[ '$t' ]`. |
| `pattern` | `string`[] \| `string` | Specifies a glob pattern or array of patterns to match your project's source files to be observed & analyzed for translation calls. |

___

### PluginOptionsType

Ƭ **PluginOptionsType**: `Object`

Options for the [VitePlugin](README.md#viteplugin).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dictionary` | [`PluginDictionaryType`](README.md#plugindictionarytype) | Specifies dictionary options. |
| `input` | [`PluginInputType`](README.md#plugininputtype) | Specifies input options. |
| `output` | [`PluginOutputType`](README.md#pluginoutputtype) | Specifies output options. |
| `quiet` | `boolean` | Specifies whether to suppress logging. |
| `verbose` | `boolean` | Specifies whether to log verbose information. |

___

### PluginOutputAnalysisType

Ƭ **PluginOutputAnalysisType**: `Object`

Options for [PluginOutputType.missing](README.md#missing) and [PluginOutputType.unused](README.md#unused).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `flavor` | `string` | Specifies the flavor of the output file being generated. Can be one of PluginOutputAnalysisFlavorMissing or PluginOutputAnalysisFlavorUnused for missing and unused translation keys respectively. |
| `handler?` | (`path`: `string`, `generator`: [`Generator`](classes/Generator.md)) => `Promise`\<`void`\> \| `void` \| `string` | Specifies a handler function for encoding and writing the output file. It can be synchronous, or return a Promise. You can also use built-in handlers by specifying a string name (instead of a function), one of: `txt`, `yaml` or `json`. If left unspecified, the handler will be determined automatically based on the file extension if possible. |
| `path` | `string` | Specifies the path to the output file being generated. |

___

### PluginOutputCompilationType

Ƭ **PluginOutputCompilationType**: `Object`

Options for the [PluginOptionsType.input](README.md#input).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler?` | (`path`: `string`, `generator`: [`Generator`](classes/Generator.md)) => `Promise`\<`void`\> \| `void` \| `string` | Specifies a handler function for encoding and writing the output file. It can be synchronous, or return a Promise. You can also use built-in handlers by specifying a string name (instead of a function), one of: `esm` or `cjs`. If left unspecified, the handler will be determined automatically based on the file extension. |
| `includeMeta?` | `boolean` | Specifies whether to include meta information in the output file. Defaults to `false`. |
| `path` | `string` | Specifies the path to the output file being generated. |

___

### PluginOutputType

Ƭ **PluginOutputType**: `Object`

Options for [PluginOptionsType.output](README.md#output).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `compiled` | [`PluginOutputCompilationType`](README.md#pluginoutputcompilationtype) \| `string` | Specifies the output file for compiled translations. If a `string` is provided, it will be used as the `path` option. |
| `missing?` | [`PluginOutputAnalysisType`](README.md#pluginoutputanalysistype) \| `string` | Specifies the output file for missing translations. If a `string` is provided, it will be used as the `path` option. |
| `unused?` | [`PluginOutputAnalysisType`](README.md#pluginoutputanalysistype) \| `string` | Specifies the output file for unused translations. If a `string` is provided, it will be used as the `path` option. |

___

### TranslatorOptionsType

Ƭ **TranslatorOptionsType**: `Object`

Options for the [Translator](classes/Translator.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fallbackLocale?` | [`LocaleType`](README.md#localetype) | Optional fallback locale. Defaults to `undefined`. |
| `logger?` | [`LoggerInterface`](interfaces/LoggerInterface.md) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:TRANSLATOR' } )`. |
| `translations?` | [`CompiledCatalogType`](README.md#compiledcatalogtype) | Optional compiled translation catalog. Defaults to `{}`. |

___

### ValueType

Ƭ **ValueType**: `string`

Translation value as a string translation of its corresponding key.

**`Example`**

```typescript
"Hello there, nice to meet you!"
```

## Functions

### VitePlugin

▸ **VitePlugin**(`options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PluginOptionsType`](README.md#pluginoptionstype) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `buildStart` | () => `void` |
| `closeBundle` | () => `Promise`\<[`void`, `void`]\> |
