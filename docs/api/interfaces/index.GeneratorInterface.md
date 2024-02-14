# Interface: GeneratorInterface

[index](../modules/index.md).GeneratorInterface

Defines an interface for **Generator** classes.

## Implemented by

- [`Generator`](../classes/index.Generator.md)

## Table of contents

### Methods

- [getCompiledTranslationsDump](index.GeneratorInterface.md#getcompiledtranslationsdump)
- [getCompiledTranslationsDumpAsCJSExport](index.GeneratorInterface.md#getcompiledtranslationsdumpascjsexport)
- [getCompiledTranslationsDumpAsESMExport](index.GeneratorInterface.md#getcompiledtranslationsdumpasesmexport)
- [getMissingTranslationKeys](index.GeneratorInterface.md#getmissingtranslationkeys)
- [getTranslationsChecksum](index.GeneratorInterface.md#gettranslationschecksum)
- [getUnusedTranslationKeys](index.GeneratorInterface.md#getunusedtranslationkeys)
- [parse](index.GeneratorInterface.md#parse)
- [removeTranslations](index.GeneratorInterface.md#removetranslations)
- [setTranslations](index.GeneratorInterface.md#settranslations)

## Methods

### getCompiledTranslationsDump

▸ **getCompiledTranslationsDump**(`includeMeta?`, `deduplicationMap?`): `string`

Returns an ECMAScript6 code representation of the compiled translations.

If deduplicationMap is provided, the resulting code will be compressed to use variables for repeating entries.
In this case, the deduplicationMap will be populated with the corresponding repeating values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `includeMeta?` | `boolean` | Whether to include meta information about the position of extracted keys in the source code. |
| `deduplicationMap?` | `string`[] | Optional hashmap to store deduplicated keys. |

#### Returns

`string`

___

### getCompiledTranslationsDumpAsCJSExport

▸ **getCompiledTranslationsDumpAsCJSExport**(`includeMeta?`): `string`

Returns an ECMAScript6 code representation of the compiled translations as CommonJS module.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `includeMeta?` | `boolean` | Whether to include meta information about the position of extracted keys in the source code. |

#### Returns

`string`

___

### getCompiledTranslationsDumpAsESMExport

▸ **getCompiledTranslationsDumpAsESMExport**(`includeMeta?`): `string`

Returns an ECMAScript6 code representation of the compiled translations as ECMAScript6 module.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `includeMeta?` | `boolean` | Whether to include meta information about the position of extracted keys in the source code. |

#### Returns

`string`

___

### getMissingTranslationKeys

▸ **getMissingTranslationKeys**(): `Record`\<`string`, `string`[]\>

Returns a hashmap of locale keys and corresponding lists of missing translation keys.
Those are keys that are extracted from source code, but not present in the translation catalog.

#### Returns

`Record`\<`string`, `string`[]\>

___

### getTranslationsChecksum

▸ **getTranslationsChecksum**(): `number`

Returns a CRC32 checksum of the current translation dictionaries.
This can be used to determine whether the translations have changed since the last compilation.

#### Returns

`number`

___

### getUnusedTranslationKeys

▸ **getUnusedTranslationKeys**(): `Record`\<`string`, `string`[]\>

Returns a hashmap of locale keys and corresponding lists of unused translation keys.
Those are keys that are present in the translation catalog, but not in the extracted source code.

#### Returns

`Record`\<`string`, `string`[]\>

___

### parse

▸ **parse**(`code`, `source?`, `accumulate?`): `this`

Parses the given source code extracting translation keys and saves them in the current context.

By default, calling parse() multiple times for the same source will replace previously extracted keys. This is
useful when you want to iteratively parse the same file as it changes for example. If you want to accumulate
keys instead, for example when streaming source code, you can pass `true` as the third argument.

Keep in mind that in this case the meta information about the position of extracted keys in the source code
will be incorrect as it will be based on each call to parse(), rather an accumulated view of the source code.

If `source` is not set, `parse` will accumulate keys regardless of the value of `accumulate`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | The source code to be parsed. |
| `source?` | `string` | Optional origin of the source code, usually a path to the source file. |
| `accumulate?` | `boolean` | Whether to accumulate parsed keys with existing ones for the same source. |

#### Returns

`this`

___

### removeTranslations

▸ **removeTranslations**(`locale`): `this`

Removes the current translation dictionary for the specified locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locale` | `string` | Target translation locale. |

#### Returns

`this`

___

### setTranslations

▸ **setTranslations**(`locale`, `dictionary`): `this`

Adds or replaces the current translation dictionary for the specified locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locale` | `string` | Target translation locale. |
| `dictionary` | [`DictionaryType`](../modules/types.md#dictionarytype) | Target translation dictionary. |

#### Returns

`this`
