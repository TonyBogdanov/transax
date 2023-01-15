import TextToken from '../../src/token/text';

export default () => [
    [ [ new TextToken( '' ) ], `()=>""` ],
    [ [ new TextToken( 'foo' ) ], `()=>"foo"` ],
    [ [ new TextToken( '{{' ) ], `()=>"{{"` ],
    [ [ new TextToken( '}}' ) ], `()=>"}}"` ],
    [ [ new TextToken( '{{}}' ) ], `()=>"{{}}"` ],
    [ [ new TextToken( 'prefix {{' ) ], `()=>"prefix {{"` ],
    [ [ new TextToken( '}} suffix' ) ], `()=>"}} suffix"` ],
    [ [ new TextToken( '""' ) ], `()=>"\\"\\""` ],
    [ [ new TextToken( "''" ) ], `()=>"''"` ],
    [ [ new TextToken( '``' ) ], `()=>"\`\`"` ],
]
