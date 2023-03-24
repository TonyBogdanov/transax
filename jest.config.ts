import type { Config } from 'jest';

const config: Config = {
    bail: true,
    verbose: true,
    silent: false,
    preset: 'ts-jest',
    coverageDirectory: 'coverage',
    coverageReporters: [ 'json-summary', 'lcov', 'text' ],
    testEnvironment: 'node',
};

export default config;
