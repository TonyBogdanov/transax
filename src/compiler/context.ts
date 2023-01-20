export default class Context {
    parameters: string[] = [];
    globals: string[] = [];

    requireParameter( name: string ): void {
        -1 < this.parameters.indexOf( name ) || this.parameters.push( name );
    }

    requireGlobal( name: string ): void {
        -1 < this.globals.indexOf( name ) || this.globals.push( name );
    }
}
