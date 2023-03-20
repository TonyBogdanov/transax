/** @internal */
export default class Util {

    /** @internal */
    static relative( from: string, to: string ): string {
        const fromParts = from.split( '/' );
        const toParts = to.split( '/' );

        // Remove common parts from the beginning
        while ( fromParts.length > 0 && toParts.length > 0 && fromParts[ 0 ] === toParts[ 0 ] ) {
            fromParts.shift();
            toParts.shift();
        }

        // Add '..' for each remaining part in 'from' path
        const upLevels = fromParts.map( () => '..' );

        // Combine upLevels and toParts to get the final relative path
        return upLevels.concat( toParts ).join( '/' );
    }

}
