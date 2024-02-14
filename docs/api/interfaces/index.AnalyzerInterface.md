# Interface: AnalyzerInterface

[index](../modules/index.md).AnalyzerInterface

Defines an interface for **Analyzer** classes.

## Implemented by

- [`Analyzer`](../classes/index.Analyzer.md)

## Table of contents

### Methods

- [analyze](index.AnalyzerInterface.md#analyze)

## Methods

### analyze

▸ **analyze**(`code`, `source?`): [`AnalyzerToken`](../classes/index.AnalyzerToken.md)[]

Analyzes the given source code and returns a list of parsed tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | The source code to be parsed. |
| `source?` | `string` | Optional origin of the source code, usually a path to the source file. |

#### Returns

[`AnalyzerToken`](../classes/index.AnalyzerToken.md)[]
