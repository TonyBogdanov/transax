import LiteralToken from "../../src/token/literal";

export default () => [
    [ [ new LiteralToken( 0.0 ) ], `()=>""+0` ],
    [ [ new LiteralToken( 1.0 ) ], `()=>""+1` ],
    [ [ new LiteralToken( -1.0 ) ], `()=>""+-1` ],
    [ [ new LiteralToken( 0.2345 ) ], `()=>""+0.2345` ],
    [ [ new LiteralToken( -0.2345 ) ], `()=>""+-0.2345` ],
]
