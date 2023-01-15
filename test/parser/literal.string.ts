import LiteralToken from "../../src/token/literal";

export default () => [
    [ `{{ '' }}`, new LiteralToken( '' ) ],
    [ `{{ "" }}`, new LiteralToken( '' ) ],
    [ `{{ '\\'single\\', "double", \`caret\` quoted' }}`, new LiteralToken( `'single', "double", \`caret\` quoted` ) ],
    [ `{{ "'single', \\"double\\", \`caret\` quoted" }}`, new LiteralToken( `'single', "double", \`caret\` quoted` ) ],
]
