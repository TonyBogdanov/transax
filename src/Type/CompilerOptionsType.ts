import LoggerInterface from '../Logger/LoggerInterface';
import { LoggerOptionsType } from './LoggerOptionsType';

/**
 * Options for the {@link Compiler}.
 */
export type CompilerOptionsType = {

    /**
     * Optional logger instance.
     * Defaults to `new Logger( { namespace: 'TRANSAX:COMPILER' } )`.
     */
    logger?: LoggerInterface | LoggerOptionsType;

}
