import { expect, jest } from '@jest/globals';
import { Logger, Options } from '../src/Logger';

function testOutput( logger: Logger, callback: ( logger: Logger ) => void ): void {
    const logMock = jest.spyOn( console, 'log' );

    callback( logger );
    expect( logMock ).toHaveBeenCalledWith( '[TEST]', 'test' );

    logMock.mockClear();
}

function testNoOutput( logger: Logger, callback: ( logger: Logger ) => void ): void {
    const logMock = jest.spyOn( console, 'log' );

    callback( logger );
    expect( logMock ).not.toHaveBeenCalled();

    logMock.mockClear();
}

describe( 'Logger', () => {
    describe( 'constructor()', () => {
        test( 'accepts nothing', () => {
            expect( new Logger( 'Test' ).options ).toStrictEqual( new Options() );
        } );

        test( 'accepts an Options object', () => {
            const options = new Options();
            expect( new Logger( 'Test', options ).options ).toBe( options );
        } );

        test( 'accepts an empty object', () => {
            const analyzer = new Logger( 'Test', {} );
            expect( analyzer.options ).toBeInstanceOf( Options );
            expect( analyzer.options ).toStrictEqual( new Options() );
        } );

        test( 'allows selectively overriding options values', () => {
            expect( new Logger( 'Test', { silent: true } ).options.silent ).toBe( true );
            expect( new Logger( 'Test', { verbose: true } ).options.verbose ).toBe( true );
        } );
    } );

    describe( 'log()', () => {
        test( 'logs when silent = false, verbose = false', () =>
            testOutput( new Logger( 'Test' ), logger => logger.log( 'test' ) ) );

        test( 'logs when silent = false, verbose = true', () =>
            testOutput( new Logger( 'Test', { verbose: true } ), logger => logger.log( 'test' ) ) );

        test( 'does not log when silent = true, verbose = false', () =>
            testNoOutput( new Logger( 'Test', { silent: true } ), logger => logger.log( 'test' ) ) );

        test( 'does not log when silent = true, verbose = true', () =>
            testNoOutput( new Logger( 'Test', { silent: true, verbose: true } ), logger => logger.log( 'test' ) ) );
    } );

    describe( 'verbose()', () => {
        test( 'does not log when silent = false, verbose = false', () =>
            testNoOutput( new Logger( 'Test' ), logger => logger.verbose( 'test' ) ) );

        test( 'logs when silent = false, verbose = true', () =>
            testOutput( new Logger( 'Test', { verbose: true } ), logger => logger.verbose( 'test' ) ) );

        test( 'does not log when silent = true, verbose = false', () =>
            testNoOutput( new Logger( 'Test', { silent: true } ), logger => logger.verbose( 'test' ) ) );

        test( 'does not log when silent = true, verbose = true', () =>
            testNoOutput( new Logger( 'Test', { silent: true, verbose: true } ), logger => logger.verbose( 'test' ) ) );
    } );
} );
