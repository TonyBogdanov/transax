import LiteralToken from "../../src/token/literal";

export default () => [
    [ [ new LiteralToken( 12345 ) ], `()=>""+12345` ],
    [ [ new LiteralToken( -12345 ) ], `()=>""+-12345` ],
]
