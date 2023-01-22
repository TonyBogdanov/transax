export class Options {
    silent: boolean = false;
    verbose: boolean = false;

    constructor( values: Object = {} ) {
        'silent' in values && this.setSilent( values.silent );
        'verbose' in values && this.setVerbose( values.verbose );
    }

    setSilent( value: any ): this {
        if ( 'boolean' !== typeof value ) {
            throw new Error( 'Value must be a boolean.' );
        }

        this.silent = value;
        return this;
    }

    setVerbose( value: any ): this {
        if ( 'boolean' !== typeof value ) {
            throw new Error( 'Value must be a boolean.' );
        }

        this.verbose = value;
        return this;
    }
}

export class Logger {
    namespace: string;
    options: Options;

    constructor( namespace: string, options: Options | Object = {} ) {
        this.namespace = namespace.toUpperCase();
        this.options = options instanceof Options ? options : new Options( options );
    }

    log( ...args: any[] ): void {
        this.options.silent || console.log( `[${ this.namespace }]`, ...args );
    }

    verbose( ...args: any[] ): void {
        !this.options.silent && this.options.verbose && console.log( `[${ this.namespace }]`, ...args );
    }
}
