import { ContextParams } from './ContextParams';
import { ContextGlobals } from './ContextGlobals';

/**
 * A compiled version of a {@link Value}.
 */
export type CompiledValue = ( params: ContextParams, globals: ContextGlobals ) => string;
