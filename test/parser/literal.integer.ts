import LiteralToken from "../../src/token/literal";

export default () => [
    [ '{{ 0 }}', new LiteralToken( 0 ) ],
    [ '{{ 12345 }}', new LiteralToken( 12345 ) ],
    [ '{{ -12345 }}', new LiteralToken( -12345 ) ],
]
