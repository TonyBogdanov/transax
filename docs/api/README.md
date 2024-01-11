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
- [TranslatorOptionsType](README.md#translatoroptionstype)
- [ValueType](README.md#valuetype)

## Type Aliases

### AnalyzerOptionsType

Ƭ **AnalyzerOptionsType**: `Object`

Options for the [Analyzer](classes/Analyzer.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyFormatter?` | [`KeyFormatterType`](README.md#keyformattertype) | A function to format the translation key based on the context. Defaults to `( key => key )`. |
| `logger?` | [`LoggerInterface`](interfaces/LoggerInterface.md) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:ANALYZER' } )`. |
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
| `logger?` | [`LoggerInterface`](interfaces/LoggerInterface.md) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:COMPILER' } )`. |

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
| `analyzer?` | [`AnalyzerInterface`](interfaces/AnalyzerInterface.md) | Optional analyzer instance. Defaults to `new Analyzer()`. |
| `compiler?` | [`CompilerInterface`](interfaces/CompilerInterface.md) | Optional compiler instance. Defaults to `new Compiler()`. |
| `logger?` | [`LoggerInterface`](interfaces/LoggerInterface.md) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:GENERATOR' } )`. |
| `translations?` | [`CatalogType`](README.md#catalogtype) | Optional translation catalog. Defaults to `{}`. |

___

### KeyFormatterType

Ƭ **KeyFormatterType**: (`key`: [`KeyType`](README.md#keytype), `token`: [`AnalyzerToken`](classes/AnalyzerToken.md)) => `string`

#### Type declaration

▸ (`key`, `token`): `string`

A function to format the translation key based on the context.

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
