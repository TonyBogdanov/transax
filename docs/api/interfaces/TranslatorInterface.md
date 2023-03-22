# Interface: TranslatorInterface

Defines an interface for **Translator** classes.

## Implemented by

- [`Translator`](../classes/Translator.md)

## Table of contents

### Methods

- [translate](TranslatorInterface.md#translate)

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
| `context?` | [`TranslationContext`](../README.md#translationcontext) | Optional translation context. |

#### Returns

`string`
