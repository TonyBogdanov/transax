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
        const match = path.match( /(\w+)\.\w+$/ );
        return match?.[1] ?? path;
    }

}
