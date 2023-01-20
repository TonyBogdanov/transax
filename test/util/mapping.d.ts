import TokenInterface from '../../src/token/interface';

type Mapping = {
    input: string;
    tokens: TokenInterface[];
    compiled: string;
    output: string;
    params: object;
    globals: object;
};

export default Mapping;
