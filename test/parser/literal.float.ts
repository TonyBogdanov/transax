import LiteralToken from "../../src/token/literal";

export default () => [
    [ '{{ 0.0 }}', new LiteralToken( 0 ) ],
    [ '{{ 1.0 }}', new LiteralToken( 1 ) ],
    [ '{{ -1.0 }}', new LiteralToken( -1 ) ],
    [ '{{ 0.2345 }}', new LiteralToken( 0.2345 ) ],
    [ '{{ -0.2345 }}', new LiteralToken( -0.2345 ) ],
    [ '{{ 1.2300 }}', new LiteralToken( 1.23 ) ],
    [ '{{ -1.2300 }}', new LiteralToken( -1.23 ) ],
    [ '{{ .2345 }}', new LiteralToken( 0.2345 ) ],
    [ '{{ -.2345 }}', new LiteralToken( -0.2345 ) ],
    [ '{{ .2300 }}', new LiteralToken( 0.23 ) ],
    [ '{{ -.2300 }}', new LiteralToken( -0.23 ) ],
]
