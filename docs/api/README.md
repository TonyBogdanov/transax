# API Reference

## Table of contents

### Classes

- [Analyzer](classes/Analyzer.md)
- [AnalyzerToken](classes/AnalyzerToken.md)
- [CallExpressionArrayAccess](classes/CallExpressionArrayAccess.md)
- [CallExpressionInvocation](classes/CallExpressionInvocation.md)
- [CallExpressionObjectAccess](classes/CallExpressionObjectAccess.md)
- [CallExpressionToken](classes/CallExpressionToken.md)
- [ComparisonExpressionToken](classes/ComparisonExpressionToken.md)
- [Compiler](classes/Compiler.md)
- [CompilerContext](classes/CompilerContext.md)
- [CompilerToken](classes/CompilerToken.md)
- [Generator](classes/Generator.md)
- [LiteralToken](classes/LiteralToken.md)
- [Logger](classes/Logger.md)
- [TernaryExpressionToken](classes/TernaryExpressionToken.md)
- [TextToken](classes/TextToken.md)
- [Translator](classes/Translator.md)

### Interfaces

- [AnalyzerInterface](interfaces/AnalyzerInterface.md)
- [CompilerInterface](interfaces/CompilerInterface.md)
- [GeneratorInterface](interfaces/GeneratorInterface.md)
- [LoggerInterface](interfaces/LoggerInterface.md)
- [TranslatorInterface](interfaces/TranslatorInterface.md)

### Type Aliases

- [AnalyzerOptions](README.md#analyzeroptions)
- [Catalog](README.md#catalog)
- [CompiledCatalog](README.md#compiledcatalog)
- [CompiledDictionary](README.md#compileddictionary)
- [CompiledValue](README.md#compiledvalue)
- [CompilerOptions](README.md#compileroptions)
- [Context](README.md#context)
- [ContextGlobals](README.md#contextglobals)
- [ContextParams](README.md#contextparams)
- [Dictionary](README.md#dictionary)
- [GeneratorOptions](README.md#generatoroptions)
- [Key](README.md#key)
- [KeyFormatter](README.md#keyformatter)
- [Locale](README.md#locale)
- [LoggerOptions](README.md#loggeroptions)
- [TranslatorOptions](README.md#translatoroptions)
- [Value](README.md#value)

## Type Aliases

### AnalyzerOptions

Ƭ **AnalyzerOptions**: `Object`

Options for the [Analyzer](classes/Analyzer.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyFormatter?` | [`KeyFormatter`](README.md#keyformatter) | A function to format the translation key based on the context. Defaults to `( key => key )`. |
| `logger?` | [`LoggerInterface`](interfaces/LoggerInterface.md) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:ANALYZER' } )`. |
| `names?` | `string`[] | The names of the functions to analyze. Defaults to `[ '$t' ]`. |

___

### Catalog

Ƭ **Catalog**: `Record`<[`Locale`](README.md#locale), [`Dictionary`](README.md#dictionary)\>

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

### CompiledCatalog

Ƭ **CompiledCatalog**: `Record`<[`Locale`](README.md#locale), [`CompiledDictionary`](README.md#compileddictionary)\>

A compiled version of a [Catalog](README.md#catalog).

___

### CompiledDictionary

Ƭ **CompiledDictionary**: `Record`<[`Key`](README.md#key), [`CompiledValue`](README.md#compiledvalue)\>

A compiled version of a [Dictionary](README.md#dictionary).

___

### CompiledValue

Ƭ **CompiledValue**: (`params`: [`ContextParams`](README.md#contextparams), `globals`: [`ContextGlobals`](README.md#contextglobals)) => `string` \| `string`

A compiled version of a [Value](README.md#value).

___

### CompilerOptions

Ƭ **CompilerOptions**: `Object`

Options for the [Compiler](classes/Compiler.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `logger?` | [`LoggerInterface`](interfaces/LoggerInterface.md) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:COMPILER' } )`. |

___

### Context

Ƭ **Context**: `Object`

Runtime context to be used during translation.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `globals?` | [`ContextGlobals`](README.md#contextglobals) | Hashmap of globals available to translation expressions. |
| `locale?` | [`Locale`](README.md#locale) | The locale to translate to. If not specified, the default locale specified in the translator options will be used. |
| `params?` | [`ContextParams`](README.md#contextparams) | Hashmap of parameters available to translation expressions. |

___

### ContextGlobals

Ƭ **ContextGlobals**: `Record`<`string`, `any`\>

Hashmap of context globals to be used during translation.

___

### ContextParams

Ƭ **ContextParams**: `Record`<`string`, `any`\>

Hashmap of context parameters to be used during translation.

___

### Dictionary

Ƭ **Dictionary**: `Record`<[`Key`](README.md#key), [`Value`](README.md#value)\>

Translation dictionary as a hashmap of key-value pairs.

**`Example`**

```typescript
{ "my.translation.key": "Hello there, nice to meet you!" }
```

___

### GeneratorOptions

Ƭ **GeneratorOptions**: `Object`

Options for the [Generator](classes/Generator.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `analyzer?` | [`AnalyzerInterface`](interfaces/AnalyzerInterface.md) | Optional analyzer instance. Defaults to `new Analyzer()`. |
| `compiler?` | [`CompilerInterface`](interfaces/CompilerInterface.md) | Optional compiler instance. Defaults to `new Compiler()`. |
| `logger?` | [`LoggerInterface`](interfaces/LoggerInterface.md) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:GENERATOR' } )`. |
| `translations?` | [`Catalog`](README.md#catalog) | Optional translation catalog. Defaults to `{}`. |

___

### Key

Ƭ **Key**: `string`

Translation key as a string used to identify a translation.

**`Example`**

```typescript
"my.translation.key"
```

___

### KeyFormatter

Ƭ **KeyFormatter**: (`key`: [`Key`](README.md#key), `token`: [`AnalyzerToken`](classes/AnalyzerToken.md)) => `string`

#### Type declaration

▸ (`key`, `token`): `string`

A function to format the translation key based on the context.

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`Key`](README.md#key) |
| `token` | [`AnalyzerToken`](classes/AnalyzerToken.md) |

##### Returns

`string`

___

### Locale

Ƭ **Locale**: `string`

Translation locale as a string representing a unique language.

**`Example`**

```typescript
"en_US"
```

___

### LoggerOptions

Ƭ **LoggerOptions**: `Object`

Options for [Logger](classes/Logger.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace?` | `string` | Specifies a namespace for identifying the purpose of the logger (e.g. `Analysis`). Defaults to `LOG`. |
| `verbose?` | `boolean` | Enables verbose logging. Defaults to `false`. |

___

### TranslatorOptions

Ƭ **TranslatorOptions**: `Object`

Options for the [Translator](classes/Translator.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fallbackLocale?` | [`Locale`](README.md#locale) | Optional fallback locale. Defaults to `undefined`. |
| `logger?` | [`LoggerInterface`](interfaces/LoggerInterface.md) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:TRANSLATOR' } )`. |
| `translations?` | [`CompiledCatalog`](README.md#compiledcatalog) | Optional compiled translation catalog. Defaults to `{}`. |

___

### Value

Ƭ **Value**: `string`

Translation value as a string translation of its corresponding key.

**`Example`**

```typescript
"Hello there, nice to meet you!"
```
