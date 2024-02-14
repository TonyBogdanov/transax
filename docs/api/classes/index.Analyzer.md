# Class: Analyzer

[index](../modules/index.md).Analyzer

Default implementation of the [AnalyzerInterface](../interfaces/index.AnalyzerInterface.md).

## Implements

- [`AnalyzerInterface`](../interfaces/index.AnalyzerInterface.md)

## Table of contents

### Constructors

- [constructor](index.Analyzer.md#constructor)

### Methods

- [analyze](index.Analyzer.md#analyze)

## Constructors

### constructor

• **new Analyzer**(`options?`): [`Analyzer`](index.Analyzer.md)

Creates a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`AnalyzerOptionsType`](../modules/types.md#analyzeroptionstype) | Customizes the analyzer. |

#### Returns

[`Analyzer`](index.Analyzer.md)

## Methods

### analyze

▸ **analyze**(`code`, `source?`): [`AnalyzerToken`](index.AnalyzerToken.md)[]

Analyzes the given source code and returns a list of parsed tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | The source code to be parsed. |
| `source?` | `string` | Optional origin of the source code, usually a path to the source file. |

#### Returns

[`AnalyzerToken`](index.AnalyzerToken.md)[]

#### Implementation of

[AnalyzerInterface](../interfaces/index.AnalyzerInterface.md).[analyze](../interfaces/index.AnalyzerInterface.md#analyze)
