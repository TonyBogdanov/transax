# Class: AnalyzerToken

[index](../modules/index.md).AnalyzerToken

A class representing a single translation invocation within some source code.

## Table of contents

### Constructors

- [constructor](index.AnalyzerToken.md#constructor)

### Properties

- [column](index.AnalyzerToken.md#column)
- [key](index.AnalyzerToken.md#key)
- [line](index.AnalyzerToken.md#line)
- [name](index.AnalyzerToken.md#name)
- [source](index.AnalyzerToken.md#source)
- [text](index.AnalyzerToken.md#text)

## Constructors

### constructor

• **new AnalyzerToken**(`name`, `key`, `text`, `location`, `source?`): [`AnalyzerToken`](index.AnalyzerToken.md)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the invoked translation function, e.g. `$t`. |
| `key` | `string` | The key of the translation, e.g. `Hello world!`. |
| `text` | `string` | The full text of the invocation, e.g. `$t( 'Hello world!' )`. |
| `location` | `LocationRange` | The location of the invocation within the source code. |
| `source?` | `string` | The origin of the source code, usually a path to the source file. |

#### Returns

[`AnalyzerToken`](index.AnalyzerToken.md)

## Properties

### column

• `Readonly` **column**: `number`

The column number of the invocation within the source code.

___

### key

• `Readonly` **key**: `string`

The key of the translation, e.g. `Hello world!`.

___

### line

• `Readonly` **line**: `number`

The line number of the invocation within the source code.

___

### name

• `Readonly` **name**: `string`

The name of the invoked translation function, e.g. `$t`.

___

### source

• `Optional` `Readonly` **source**: `string`

The origin of the source code, usually a path to the source file.

___

### text

• `Readonly` **text**: `string`

The full text of the invocation, e.g. `$t( 'Hello world!' )`.
