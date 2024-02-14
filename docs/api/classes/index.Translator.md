# Class: Translator

[index](../modules/index.md).Translator

Default implementation of the [TranslatorInterface](../interfaces/index.TranslatorInterface.md).

## Implements

- [`TranslatorInterface`](../interfaces/index.TranslatorInterface.md)

## Table of contents

### Constructors

- [constructor](index.Translator.md#constructor)

### Methods

- [translate](index.Translator.md#translate)

## Constructors

### constructor

• **new Translator**(`options?`): [`Translator`](index.Translator.md)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`TranslatorOptionsType`](../modules/types.md#translatoroptionstype) | Customizes the translator. |

#### Returns

[`Translator`](index.Translator.md)

## Methods

### translate

▸ **translate**(`key`, `context?`): `string`

Translates the specified key based on the specified translation context & configured translator options.

If no locale is specified in the translation context, or if the specified locale does not exist in the configured
translation catalog, the configured fallback locale will be used instead.

If no fallback locale is specified either, or if the fallback locale does not exist in the configured translation
catalog, the key will be returned as-is.

If the specified key does not exist in the configured translation catalog for the specified locale, it will
be retrieved using the fallback locale instead, and if that fails too, the key will be returned as-is.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key to translate. |
| `context` | [`ContextType`](../modules/types.md#contexttype) | Optional translation context. |

#### Returns

`string`

#### Implementation of

[TranslatorInterface](../interfaces/index.TranslatorInterface.md).[translate](../interfaces/index.TranslatorInterface.md#translate)
