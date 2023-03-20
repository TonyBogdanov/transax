# Interface: AnalyzerInterface

Defines an interface for **Analyzer** classes.

## Implemented by

- [`Analyzer`](../classes/Analyzer.md)

## Table of contents

### Methods

- [analyze](AnalyzerInterface.md#analyze)

## Methods

### analyze

▸ **analyze**(`code`, `source?`): [`AnalyzerToken`](../classes/AnalyzerToken.md)[]

Analyzes the given source code and returns a list of parsed tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | The source code to be parsed. |
| `source?` | `string` | Optional origin of the source code, usually a path to the source file. |

#### Returns

[`AnalyzerToken`](../classes/AnalyzerToken.md)[]
