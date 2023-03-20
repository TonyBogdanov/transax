/**
 * A class to hold and represent the context of a translation message compilation.
 * This should be used to keep track of the parameters and globals that are used in messages.
 */
export default class CompilerContext {

    /**
     * A list of parameter names used in the message.
     */
    parameters: string[] = [];

    /**
     * A list of global variable / function names used in the message.
     */
    globals: string[] = [];

    /**
     * Adds a parameter name to the list of referenced parameters unless already present.
     *
     * @param name The name of the parameter.
     */
    requireParameter( name: string ): this {
        -1 < this.parameters.indexOf( name ) || this.parameters.push( name );
        return this;
    }

    /**
     * Adds a global variable / function name to the list of referenced globals unless already present.
     *
     * @param name The name of the global variable / function.
     */
    requireGlobal( name: string ): this {
        -1 < this.globals.indexOf( name ) || this.globals.push( name );
        return this;
    }

}
