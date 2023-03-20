# Class: AnalyzerToken

A class representing a single translation invocation within some source code.

## Table of contents

### Constructors

- [constructor](AnalyzerToken.md#constructor)

### Properties

- [column](AnalyzerToken.md#column)
- [key](AnalyzerToken.md#key)
- [line](AnalyzerToken.md#line)
- [name](AnalyzerToken.md#name)
- [source](AnalyzerToken.md#source)
- [text](AnalyzerToken.md#text)

## Constructors

### constructor

• **new AnalyzerToken**(`name`, `key`, `text`, `line`, `column`, `source?`)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the invoked translation function, e.g. `$t`. |
| `key` | `string` | The key of the translation, e.g. `Hello world!`. |
| `text` | `string` | The full text of the invocation, e.g. `$t( 'Hello world!' )`. |
| `line` | `number` | The line number of the invocation within the source code. |
| `column` | `number` | The column number of the invocation within the source code. |
| `source?` | `string` | The origin of the source code, usually a path to the source file. |

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
