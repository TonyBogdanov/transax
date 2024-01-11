import { ContextParamsType } from './ContextParamsType';
import { ContextGlobalsType } from './ContextGlobalsType';

/**
 * A compiled version of a {@link ValueType}.
 */
export type CompiledValueType = ( ( params: ContextParamsType, globals: ContextGlobalsType ) => string ) | string;
