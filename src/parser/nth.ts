export default function nth( values: any[][], index: number ): any[] {
    return values.map( value => value[ index ] );
}
