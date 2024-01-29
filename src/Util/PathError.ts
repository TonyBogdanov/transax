/**
 * Path-aware error with depth handling support.
 */
export default class PathError extends TypeError {

    /** @inheritDoc */
    protected readonly template: string;

    /** @inheritDoc */
    protected readonly path: string;

    /**
     * Invokes the callback and wraps any thrown path errors with the given parent path.
     *
     * @param parent
     * @param callback
     */
    static wrap( parent: string, callback: () => any ): any {
        try {
            return callback();
        } catch ( e ) {
            if ( e instanceof PathError ) {
                const { path, template } = e;
                e = new PathError( template, parent + ( 0 === path.length ? '' : '.' ) + path );
            }

            throw e;
        }
    }

    /**
     * Creates a new instance.
     *
     * @param template
     * @param path
     */
    constructor( template: string, path: string = '' ) {
        super( template.replace( /{{\s*path\s*}}/gi, path ) );

        this.template = template;
        this.path = path;
    }

    toString(): string {
        return JSON.stringify( this );
    }
}
