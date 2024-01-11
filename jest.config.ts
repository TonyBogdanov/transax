import type { Config } from 'jest';

const config: Config = {
    bail: true,
    verbose: true,
    silent: false,
    preset: 'ts-jest',
    coverageDirectory: 'coverage',
    coverageReporters: [ 'json-summary', 'lcov', 'text' ],
    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/Analyzer/AnalyzerOptions.ts',
        '!src/Compiler/CompilerOptions.ts',
        '!src/Generator/GeneratorOptions.ts',
        '!src/Logger/LoggerOptions.ts',
        '!src/Translator/TranslatorOptions.ts',
        '!src/Util/*.ts',
    ],
    testEnvironment: 'node',
};

export default config;
