import TextToken from "../../src/token/text";

export default () => [
    [ '', new TextToken( '' ) ],
    [ 'foo', new TextToken( 'foo' ) ],
    [ '{{', new TextToken( '{{' ) ],
    [ '}}', new TextToken( '}}' ) ],
    [ '{{}}', new TextToken( '{{}}' ) ],
    [ 'prefix {{', new TextToken( 'prefix {{' ) ],
    [ '}} suffix', new TextToken( '}} suffix' ) ],
]
