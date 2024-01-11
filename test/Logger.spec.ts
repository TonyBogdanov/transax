import { expect, jest } from '@jest/globals';
import Logger from '../src/Logger/Logger';

function testOutput( logger: Logger, callback: ( logger: Logger ) => void ): void {
    const logMock = jest.spyOn( console, 'log' );

    callback( logger );
    expect( logMock ).toHaveBeenCalledWith( '[TRANSAX]', 'test' );

    logMock.mockClear();
}

function testNoOutput( logger: Logger, callback: ( logger: Logger ) => void ): void {
    const logMock = jest.spyOn( console, 'log' );

    callback( logger );
    expect( logMock ).not.toHaveBeenCalled();

    logMock.mockClear();
}

describe( 'Logger', () => {
    describe( 'log()', () => {
        test( 'logs when verbose = false', () =>
            testOutput( new Logger(), logger => logger.log( 'test' ) ) );

        test( 'logs when verbose = true', () =>
            testOutput( new Logger( { verbose: true } ), logger => logger.log( 'test' ) ) );

        test( 'does not log when quiet = true', () =>
            testNoOutput( new Logger( { quiet: true } ), logger => logger.log( 'test' ) ) );
    } );

    describe( 'verbose()', () => {
        test( 'does not log when verbose = false', () =>
            testNoOutput( new Logger(), logger => logger.verbose( 'test' ) ) );

        test( 'logs when verbose = true', () =>
            testOutput( new Logger( { verbose: true } ), logger => logger.verbose( 'test' ) ) );

        test( 'does not log when quiet = true', () =>
            testNoOutput( new Logger( { quiet: true, verbose: true } ), logger => logger.verbose( 'test' ) ) );
    } );
} );
