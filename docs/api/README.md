# API Reference

## Table of contents

### Classes

- [AbstractCompilerToken](classes/AbstractCompilerToken.md)
- [Analyzer](classes/Analyzer.md)
- [AnalyzerToken](classes/AnalyzerToken.md)
- [ArrayAccessCompilerToken](classes/ArrayAccessCompilerToken.md)
- [Compiler](classes/Compiler.md)
- [CompilerContext](classes/CompilerContext.md)
- [ExpressionCompilerToken](classes/ExpressionCompilerToken.md)
- [Generator](classes/Generator.md)
- [IdentifierCompilerToken](classes/IdentifierCompilerToken.md)
- [LiteralCompilerToken](classes/LiteralCompilerToken.md)
- [Logger](classes/Logger.md)
- [ObjectAccessCompilerToken](classes/ObjectAccessCompilerToken.md)
- [TextCompilerToken](classes/TextCompilerToken.md)
- [Translator](classes/Translator.md)

### Interfaces

- [AnalyzerInterface](interfaces/AnalyzerInterface.md)
- [CompilerInterface](interfaces/CompilerInterface.md)
- [GeneratorInterface](interfaces/GeneratorInterface.md)
- [LoggerInterface](interfaces/LoggerInterface.md)
- [TranslatorInterface](interfaces/TranslatorInterface.md)

### Type Aliases

- [AnalyzerOptions](README.md#analyzeroptions)
- [CompilerOptions](README.md#compileroptions)
- [GeneratorOptions](README.md#generatoroptions)
- [LoggerOptions](README.md#loggeroptions)
- [TranslationCatalog](README.md#translationcatalog)
- [TranslationCompiledCatalog](README.md#translationcompiledcatalog)
- [TranslationCompiledDictionary](README.md#translationcompileddictionary)
- [TranslationCompiledValue](README.md#translationcompiledvalue)
- [TranslationContext](README.md#translationcontext)
- [TranslationContextGlobals](README.md#translationcontextglobals)
- [TranslationContextParams](README.md#translationcontextparams)
- [TranslationDictionary](README.md#translationdictionary)
- [TranslationKey](README.md#translationkey)
- [TranslationLocale](README.md#translationlocale)
- [TranslationValue](README.md#translationvalue)
- [TranslatorOptions](README.md#translatoroptions)

## Type Aliases

### AnalyzerOptions

Ƭ **AnalyzerOptions**: `Object`

Options for the [Analyzer](classes/Analyzer.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `logger?` | [`LoggerInterface`](interfaces/LoggerInterface.md) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:ANALYZER' } )`. |
| `names?` | `string`[] | The names of the functions to analyze. Defaults to `[ '$t' ]`. |

___

### CompilerOptions

Ƭ **CompilerOptions**: `Object`

Options for the [Compiler](classes/Compiler.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `logger?` | [`LoggerInterface`](interfaces/LoggerInterface.md) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:COMPILER' } )`. |

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
| `translations?` | [`TranslationCatalog`](README.md#translationcatalog) | Optional translation catalog. Defaults to `{}`. |

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

### TranslationCatalog

Ƭ **TranslationCatalog**: `Record`<[`TranslationLocale`](README.md#translationlocale), [`TranslationDictionary`](README.md#translationdictionary)\>

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

### TranslationCompiledCatalog

Ƭ **TranslationCompiledCatalog**: `Record`<[`TranslationLocale`](README.md#translationlocale), [`TranslationCompiledDictionary`](README.md#translationcompileddictionary)\>

A compiled version of a [TranslationCatalog](README.md#translationcatalog).

___

### TranslationCompiledDictionary

Ƭ **TranslationCompiledDictionary**: `Record`<[`TranslationKey`](README.md#translationkey), [`TranslationCompiledValue`](README.md#translationcompiledvalue)\>

A compiled version of a [TranslationDictionary](README.md#translationdictionary).

___

### TranslationCompiledValue

Ƭ **TranslationCompiledValue**: (`params`: [`TranslationContextParams`](README.md#translationcontextparams), `globals`: [`TranslationContextGlobals`](README.md#translationcontextglobals)) => `string`

#### Type declaration

▸ (`params`, `globals`): `string`

A compiled version of a [TranslationValue](README.md#translationvalue).

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TranslationContextParams`](README.md#translationcontextparams) |
| `globals` | [`TranslationContextGlobals`](README.md#translationcontextglobals) |

##### Returns

`string`

___

### TranslationContext

Ƭ **TranslationContext**: `Object`

Runtime context to be used during translation.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `globals?` | [`TranslationContextGlobals`](README.md#translationcontextglobals) | Hashmap of globals available to translation expressions. |
| `locale?` | [`TranslationLocale`](README.md#translationlocale) | The locale to translate to. If not specified, the default locale specified in the translator options will be used. |
| `params?` | [`TranslationContextParams`](README.md#translationcontextparams) | Hashmap of parameters available to translation expressions. |

___

### TranslationContextGlobals

Ƭ **TranslationContextGlobals**: `Record`<`string`, `any`\>

Hashmap of context globals to be used during translation.

___

### TranslationContextParams

Ƭ **TranslationContextParams**: `Record`<`string`, `any`\>

Hashmap of context parameters to be used during translation.

___

### TranslationDictionary

Ƭ **TranslationDictionary**: `Record`<[`TranslationKey`](README.md#translationkey), [`TranslationValue`](README.md#translationvalue)\>

Translation dictionary as a hashmap of key-value pairs.

**`Example`**

```typescript
{ "my.translation.key": "Hello there, nice to meet you!" }
```

___

### TranslationKey

Ƭ **TranslationKey**: `string`

Translation key as a string used to identify a translation.

**`Example`**

```typescript
"my.translation.key"
```

___

### TranslationLocale

Ƭ **TranslationLocale**: `string`

Translation locale as a string representing a unique language.

**`Example`**

```typescript
"en_US"
```

___

### TranslationValue

Ƭ **TranslationValue**: `string`

Translation value as a string translation of its corresponding key.

**`Example`**

```typescript
"Hello there, nice to meet you!"
```

___

### TranslatorOptions

Ƭ **TranslatorOptions**: `Object`

Options for the [Translator](classes/Translator.md).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fallbackLocale?` | [`TranslationLocale`](README.md#translationlocale) | Optional fallback locale. Defaults to `undefined`. |
| `logger?` | [`LoggerInterface`](interfaces/LoggerInterface.md) | Optional logger instance. Defaults to `new Logger( { namespace: 'TRANSAX:TRANSLATOR' } )`. |
| `translations?` | [`TranslationCompiledCatalog`](README.md#translationcompiledcatalog) | Optional compiled translation catalog. Defaults to `{}`. |
