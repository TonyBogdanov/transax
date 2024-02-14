# Class: Generator

[index](../modules/index.md).Generator

Default implementation of the [GeneratorInterface](../interfaces/index.GeneratorInterface.md).

## Implements

- [`GeneratorInterface`](../interfaces/index.GeneratorInterface.md)

## Table of contents

### Constructors

- [constructor](index.Generator.md#constructor)

### Methods

- [getCompiledTranslationsDump](index.Generator.md#getcompiledtranslationsdump)
- [getCompiledTranslationsDumpAsCJSExport](index.Generator.md#getcompiledtranslationsdumpascjsexport)
- [getCompiledTranslationsDumpAsESMExport](index.Generator.md#getcompiledtranslationsdumpasesmexport)
- [getMissingTranslationKeys](index.Generator.md#getmissingtranslationkeys)
- [getTranslationsChecksum](index.Generator.md#gettranslationschecksum)
- [getUnusedTranslationKeys](index.Generator.md#getunusedtranslationkeys)
- [mergeTranslations](index.Generator.md#mergetranslations)
- [parse](index.Generator.md#parse)
- [removeTranslations](index.Generator.md#removetranslations)
- [setTranslations](index.Generator.md#settranslations)

## Constructors

### constructor

• **new Generator**(`options?`): [`Generator`](index.Generator.md)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`GeneratorOptionsType`](../modules/types.md#generatoroptionstype) | Customizes the generator. |

#### Returns

[`Generator`](index.Generator.md)

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

[GeneratorInterface](../interfaces/index.GeneratorInterface.md).[getCompiledTranslationsDump](../interfaces/index.GeneratorInterface.md#getcompiledtranslationsdump)

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

[GeneratorInterface](../interfaces/index.GeneratorInterface.md).[getCompiledTranslationsDumpAsCJSExport](../interfaces/index.GeneratorInterface.md#getcompiledtranslationsdumpascjsexport)

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

[GeneratorInterface](../interfaces/index.GeneratorInterface.md).[getCompiledTranslationsDumpAsESMExport](../interfaces/index.GeneratorInterface.md#getcompiledtranslationsdumpasesmexport)

___

### getMissingTranslationKeys

▸ **getMissingTranslationKeys**(): `Record`\<`string`, `string`[]\>

Returns a hashmap of locale keys and corresponding lists of missing translation keys.
Those are keys that are extracted from source code, but not present in the translation catalog.

#### Returns

`Record`\<`string`, `string`[]\>

#### Implementation of

[GeneratorInterface](../interfaces/index.GeneratorInterface.md).[getMissingTranslationKeys](../interfaces/index.GeneratorInterface.md#getmissingtranslationkeys)

___

### getTranslationsChecksum

▸ **getTranslationsChecksum**(): `number`

Returns a CRC32 checksum of the current translation dictionaries.
This can be used to determine whether the translations have changed since the last compilation.

#### Returns

`number`

#### Implementation of

[GeneratorInterface](../interfaces/index.GeneratorInterface.md).[getTranslationsChecksum](../interfaces/index.GeneratorInterface.md#gettranslationschecksum)

___

### getUnusedTranslationKeys

▸ **getUnusedTranslationKeys**(): `Record`\<`string`, `string`[]\>

Returns a hashmap of locale keys and corresponding lists of unused translation keys.
Those are keys that are present in the translation catalog, but not in the extracted source code.

#### Returns

`Record`\<`string`, `string`[]\>

#### Implementation of

[GeneratorInterface](../interfaces/index.GeneratorInterface.md).[getUnusedTranslationKeys](../interfaces/index.GeneratorInterface.md#getunusedtranslationkeys)

___

### mergeTranslations

▸ **mergeTranslations**(`catalog`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `catalog` | [`CatalogType`](../modules/types.md#catalogtype) |

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

[GeneratorInterface](../interfaces/index.GeneratorInterface.md).[parse](../interfaces/index.GeneratorInterface.md#parse)

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

[GeneratorInterface](../interfaces/index.GeneratorInterface.md).[removeTranslations](../interfaces/index.GeneratorInterface.md#removetranslations)

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

#### Implementation of

[GeneratorInterface](../interfaces/index.GeneratorInterface.md).[setTranslations](../interfaces/index.GeneratorInterface.md#settranslations)
