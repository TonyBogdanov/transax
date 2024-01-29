// todo polyfill these
import { basename, extname } from 'node:path';

/**
 * VitePlugin specific utilities.
 */
export default class Util {

    /**
     * Returns the locale from the given path assuming it is the filename (without the extension).
     *
     * @param path
     */
    static localeFromPath( path: string ): string {
        path = basename( path );
        return path.substring( 0, path.length - extname( path ).length );
    }

}
