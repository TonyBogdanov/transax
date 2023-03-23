# Interface: GeneratorInterface

Defines an interface for **Generator** classes.

## Implemented by

- [`Generator`](../classes/Generator.md)

## Table of contents

### Methods

- [getCompiledTranslationsDump](GeneratorInterface.md#getcompiledtranslationsdump)
- [getCompiledTranslationsDumpAsCJSExport](GeneratorInterface.md#getcompiledtranslationsdumpascjsexport)
- [getCompiledTranslationsDumpAsESMExport](GeneratorInterface.md#getcompiledtranslationsdumpasesmexport)
- [getMissingTranslationKeys](GeneratorInterface.md#getmissingtranslationkeys)
- [getUnusedTranslationKeys](GeneratorInterface.md#getunusedtranslationkeys)
- [parse](GeneratorInterface.md#parse)
- [removeTranslations](GeneratorInterface.md#removetranslations)
- [setTranslations](GeneratorInterface.md#settranslations)

## Methods

### getCompiledTranslationsDump

▸ **getCompiledTranslationsDump**(`includeMeta?`): `string`

Returns an ECMAScript6 code representation of the compiled translations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `includeMeta?` | `boolean` | Whether to include meta information about the position of extracted keys in the source code. |

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

▸ **getMissingTranslationKeys**(): `Record`<`string`, `string`[]\>

Returns a hashmap of locale keys and corresponding lists of missing translation keys.
Those are keys that are extracted from source code, but not present in the translation catalog.

#### Returns

`Record`<`string`, `string`[]\>

___

### getUnusedTranslationKeys

▸ **getUnusedTranslationKeys**(): `Record`<`string`, `string`[]\>

Returns a hashmap of locale keys and corresponding lists of unused translation keys.
Those are keys that are present in the translation catalog, but not in the extracted source code.

#### Returns

`Record`<`string`, `string`[]\>

___

### parse

▸ **parse**(`code`, `source?`, `accumulate?`): [`GeneratorInterface`](GeneratorInterface.md)

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

[`GeneratorInterface`](GeneratorInterface.md)

___

### removeTranslations

▸ **removeTranslations**(`locale`): [`GeneratorInterface`](GeneratorInterface.md)

Removes the current translation dictionary for the specified locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locale` | `string` | Target translation locale. |

#### Returns

[`GeneratorInterface`](GeneratorInterface.md)

___

### setTranslations

▸ **setTranslations**(`locale`, `dictionary`): [`GeneratorInterface`](GeneratorInterface.md)

Adds or replaces the current translation dictionary for the specified locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locale` | `string` | Target translation locale. |
| `dictionary` | [`Dictionary`](../README.md#dictionary) | Target translation dictionary. |

#### Returns

[`GeneratorInterface`](GeneratorInterface.md)
