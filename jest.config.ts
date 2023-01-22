import type { Config } from 'jest';

const config: Config = {
    bail: true,
    verbose: true,
    silent: false,
    preset: 'ts-jest',
    testEnvironment: 'node',
};

export default config;
