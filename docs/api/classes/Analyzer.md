# Class: Analyzer

Default implementation of the [AnalyzerInterface](../interfaces/AnalyzerInterface.md).

## Implements

- [`AnalyzerInterface`](../interfaces/AnalyzerInterface.md)

## Table of contents

### Constructors

- [constructor](Analyzer.md#constructor)

### Methods

- [analyze](Analyzer.md#analyze)

## Constructors

### constructor

• **new Analyzer**(`options?`)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`AnalyzerOptionsType`](../README.md#analyzeroptionstype) | Customizes the analyzer. |

## Methods

### analyze

▸ **analyze**(`code`, `source?`): [`AnalyzerToken`](AnalyzerToken.md)[]

Analyzes the given source code and returns a list of parsed tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | The source code to be parsed. |
| `source?` | `string` | Optional origin of the source code, usually a path to the source file. |

#### Returns

[`AnalyzerToken`](AnalyzerToken.md)[]

#### Implementation of

[AnalyzerInterface](../interfaces/AnalyzerInterface.md).[analyze](../interfaces/AnalyzerInterface.md#analyze)
