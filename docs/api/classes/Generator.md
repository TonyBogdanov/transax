# Class: Generator

Default implementation of the [GeneratorInterface](../interfaces/GeneratorInterface.md).

## Implements

- [`GeneratorInterface`](../interfaces/GeneratorInterface.md)

## Table of contents

### Constructors

- [constructor](Generator.md#constructor)

### Methods

- [getCompiledTranslationsDump](Generator.md#getcompiledtranslationsdump)
- [getCompiledTranslationsDumpAsCJSExport](Generator.md#getcompiledtranslationsdumpascjsexport)
- [getCompiledTranslationsDumpAsESMExport](Generator.md#getcompiledtranslationsdumpasesmexport)
- [getMissingTranslationKeys](Generator.md#getmissingtranslationkeys)
- [getTranslationsChecksum](Generator.md#gettranslationschecksum)
- [getUnusedTranslationKeys](Generator.md#getunusedtranslationkeys)
- [mergeTranslations](Generator.md#mergetranslations)
- [parse](Generator.md#parse)
- [removeTranslations](Generator.md#removetranslations)
- [setTranslations](Generator.md#settranslations)

## Constructors

### constructor

• **new Generator**(`options?`): [`Generator`](Generator.md)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`GeneratorOptionsType`](../README.md#generatoroptionstype) | Customizes the generator. |

#### Returns

[`Generator`](Generator.md)

## Methods

### getCompiledTranslationsDump

▸ **getCompiledTranslationsDump**(`includeMeta?`, `deduplicate?`): `string`

Returns an ECMAScript6 code representation of the compiled translations.

If deduplicationMap is provided, the resulting code will be compressed to use variables for repeating entries.
In this case, the deduplicationMap will be populated with the corresponding repeating values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `includeMeta?` | `boolean` | Whether to include meta information about the position of extracted keys in the source code. |
| `deduplicate?` | `string`[] | Optional hashmap to store deduplicated keys. |

#### Returns

`string`

#### Implementation of

[GeneratorInterface](../interfaces/GeneratorInterface.md).[getCompiledTranslationsDump](../interfaces/GeneratorInterface.md#getcompiledtranslationsdump)

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

#### Implementation of

[GeneratorInterface](../interfaces/GeneratorInterface.md).[getCompiledTranslationsDumpAsCJSExport](../interfaces/GeneratorInterface.md#getcompiledtranslationsdumpascjsexport)

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

#### Implementation of

[GeneratorInterface](../interfaces/GeneratorInterface.md).[getCompiledTranslationsDumpAsESMExport](../interfaces/GeneratorInterface.md#getcompiledtranslationsdumpasesmexport)

___

### getMissingTranslationKeys

▸ **getMissingTranslationKeys**(): `Record`\<`string`, `string`[]\>

Returns a hashmap of locale keys and corresponding lists of missing translation keys.
Those are keys that are extracted from source code, but not present in the translation catalog.

#### Returns

`Record`\<`string`, `string`[]\>

#### Implementation of

[GeneratorInterface](../interfaces/GeneratorInterface.md).[getMissingTranslationKeys](../interfaces/GeneratorInterface.md#getmissingtranslationkeys)

___

### getTranslationsChecksum

▸ **getTranslationsChecksum**(): `number`

Returns a CRC32 checksum of the current translation dictionaries.
This can be used to determine whether the translations have changed since the last compilation.

#### Returns

`number`

#### Implementation of

[GeneratorInterface](../interfaces/GeneratorInterface.md).[getTranslationsChecksum](../interfaces/GeneratorInterface.md#gettranslationschecksum)

___

### getUnusedTranslationKeys

▸ **getUnusedTranslationKeys**(): `Record`\<`string`, `string`[]\>

Returns a hashmap of locale keys and corresponding lists of unused translation keys.
Those are keys that are present in the translation catalog, but not in the extracted source code.

#### Returns

`Record`\<`string`, `string`[]\>

#### Implementation of

[GeneratorInterface](../interfaces/GeneratorInterface.md).[getUnusedTranslationKeys](../interfaces/GeneratorInterface.md#getunusedtranslationkeys)

___

### mergeTranslations

▸ **mergeTranslations**(`catalog`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `catalog` | [`CatalogType`](../README.md#catalogtype) |

#### Returns

`this`

**`Inherit Doc`**

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

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `code` | `string` | `undefined` | The source code to be parsed. |
| `source?` | `string` | `undefined` | Optional origin of the source code, usually a path to the source file. |
| `accumulate` | `boolean` | `false` | Whether to accumulate parsed keys with existing ones for the same source. |

#### Returns

`this`

#### Implementation of

[GeneratorInterface](../interfaces/GeneratorInterface.md).[parse](../interfaces/GeneratorInterface.md#parse)

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

#### Implementation of

[GeneratorInterface](../interfaces/GeneratorInterface.md).[removeTranslations](../interfaces/GeneratorInterface.md#removetranslations)

___

### setTranslations

▸ **setTranslations**(`locale`, `dictionary`): `this`

Adds or replaces the current translation dictionary for the specified locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locale` | `string` | Target translation locale. |
| `dictionary` | [`DictionaryType`](../README.md#dictionarytype) | Target translation dictionary. |

#### Returns

`this`

#### Implementation of

[GeneratorInterface](../interfaces/GeneratorInterface.md).[setTranslations](../interfaces/GeneratorInterface.md#settranslations)
