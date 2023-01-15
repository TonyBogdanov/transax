export default class Context {
    parameters: string[] = [];
    environment: string[] = [];

    requireParameter( name: string ): void {
        -1 < this.parameters.indexOf( name ) || this.parameters.push( name );
    }

    requireEnvironment( name: string ): void {
        -1 < this.environment.indexOf( name ) || this.environment.push( name );
    }
}
