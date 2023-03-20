# Class: Translator

Default implementation of the [TranslatorInterface](../interfaces/TranslatorInterface.md).

## Implements

- [`TranslatorInterface`](../interfaces/TranslatorInterface.md)

## Table of contents

### Constructors

- [constructor](Translator.md#constructor)

### Methods

- [translate](Translator.md#translate)

## Constructors

### constructor

• **new Translator**(`options?`)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`TranslatorOptions`](../README.md#translatoroptions) | Customizes the translator. |

## Methods

### translate

▸ **translate**(`key`, `context?`): `string`

Translates the specified key based on the specified translation context & configured translator options.

If no locale is specified in the translation context, or if the specified locale does not exist in the configured
translation dictionary, the configured fallback locale will be used instead.

If no fallback locale is specified either, or if the fallback locale does not exist in the configured translation
dictionary, the key will be returned as-is.

If the specified key does not exist in the configured translation dictionary for the specified locale, it will
be retrieved using the fallback locale instead, and if that fails as well, the key will be returned as-is.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key to translate. |
| `context` | [`TranslationContext`](../README.md#translationcontext) | Optional translation context. |

#### Returns

`string`

#### Implementation of

[TranslatorInterface](../interfaces/TranslatorInterface.md).[translate](../interfaces/TranslatorInterface.md#translate)
