import LoggerInterface from './src/Logger/LoggerInterface';
import AnalyzerInterface from './src/Analyzer/AnalyzerInterface';
import CompilerInterface from './src/Compiler/CompilerInterface';
import GeneratorInterface from './src/Generator/GeneratorInterface';
import TranslatorInterface from './src/Translator/TranslatorInterface';

import Logger from './src/Logger/Logger';
import { LoggerOptions } from './src/Logger/LoggerOptions';

import Analyzer from './src/Analyzer/Analyzer';
import AnalyzerToken from './src/Analyzer/AnalyzerToken';
import { AnalyzerOptions } from './src/Analyzer/AnalyzerOptions';

import Compiler from './src/Compiler/Compiler';
import CompilerToken from './src/Compiler/CompilerToken';
import TextToken from './src/Compiler/TextToken';
import LiteralToken from './src/Compiler/LiteralToken';
import TernaryExpressionToken from './src/Compiler/TernaryExpressionToken';
import ComparisonExpressionToken from './src/Compiler/ComparisonExpressionToken';
import CallExpressionToken, {
    CallExpressionArrayAccess,
    CallExpressionInvocation,
    CallExpressionObjectAccess
} from './src/Compiler/CallExpressionToken';
import CompilerContext from './src/Compiler/CompilerContext';
import { CompilerOptions } from './src/Compiler/CompilerOptions';

import Generator from './src/Generator/Generator';
import { GeneratorOptions } from './src/Generator/GeneratorOptions';

import Translator from './src/Translator/Translator';
import { TranslatorOptions } from './src/Translator/TranslatorOptions';

// import VitePlugin from './src/Plugin/Vite/VitePlugin';

import { Locale } from './src/Type/Locale';
import { Catalog } from './src/Type/Catalog';
import { Dictionary } from './src/Type/Dictionary';
import { CompiledCatalog } from './src/Type/CompiledCatalog';
import { CompiledDictionary } from './src/Type/CompiledDictionary';
import { CompiledValue } from './src/Type/CompiledValue';
import { Key } from './src/Type/Key';
import { KeyFormatter } from './src/Type/KeyFormatter';
import { Value } from './src/Type/Value';
import { Context } from './src/Type/Context';
import { ContextParams } from './src/Type/ContextParams';
import { ContextGlobals } from './src/Type/ContextGlobals';

export {
    LoggerInterface,
    AnalyzerInterface,
    CompilerInterface,
    GeneratorInterface,
    TranslatorInterface,

    Logger,
    LoggerOptions,

    Analyzer,
    AnalyzerToken,
    AnalyzerOptions,

    Compiler,
    CompilerToken,
    TextToken,
    LiteralToken,
    TernaryExpressionToken,
    ComparisonExpressionToken,
    CallExpressionToken,
    CallExpressionObjectAccess,
    CallExpressionArrayAccess,
    CallExpressionInvocation,
    CompilerContext,
    CompilerOptions,

    Generator,
    GeneratorOptions,

    Translator,
    TranslatorOptions,

    // VitePlugin,

    Locale,
    Catalog,
    Dictionary,
    CompiledCatalog,
    CompiledDictionary,
    CompiledValue,
    Key,
    KeyFormatter,
    Value,
    Context,
    ContextParams,
    ContextGlobals,
};
