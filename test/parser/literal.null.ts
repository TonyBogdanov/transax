import LiteralToken from "../../src/token/literal";

export default () => [
    [ '{{ null }}', new LiteralToken( null ) ],
    [ '{{ NULL }}', new LiteralToken( null ) ],
]
