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

## Methods

### getCompiledTranslationsDump

▸ **getCompiledTranslationsDump**(): `string`

Returns an ECMAScript6 code representation of the compiled translations.

#### Returns

`string`

___

### getCompiledTranslationsDumpAsCJSExport

▸ **getCompiledTranslationsDumpAsCJSExport**(): `string`

Returns an ECMAScript6 code representation of the compiled translations as CommonJS module.

#### Returns

`string`

___

### getCompiledTranslationsDumpAsESMExport

▸ **getCompiledTranslationsDumpAsESMExport**(): `string`

Returns an ECMAScript6 code representation of the compiled translations as ECMAScript6 module.

#### Returns

`string`

___

### getMissingTranslationKeys

▸ **getMissingTranslationKeys**(): `Record`<`string`, `string`[]\>

Returns a hashmap of locale keys and corresponding lists of missing translation keys.
Those are keys that are extracted from source code, but not present in the translation dictionary.

#### Returns

`Record`<`string`, `string`[]\>

___

### getUnusedTranslationKeys

▸ **getUnusedTranslationKeys**(): `Record`<`string`, `string`[]\>

Returns a hashmap of locale keys and corresponding lists of unused translation keys.
Those are keys that are present in the translation dictionary, but not in the extracted source code.

#### Returns

`Record`<`string`, `string`[]\>

___

### parse

▸ **parse**(`code`, `source?`): [`GeneratorInterface`](GeneratorInterface.md)

Parses the given source code extracting translation keys and saves them in the current context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | The source code to be parsed. |
| `source?` | `string` | Optional origin of the source code, usually a path to the source file. |

#### Returns

[`GeneratorInterface`](GeneratorInterface.md)
