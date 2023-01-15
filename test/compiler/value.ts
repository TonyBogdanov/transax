import ValueToken from '../../src/token/value';

export default () => [
    [ [ new ValueToken( 'foo' ) ], `({foo})=>""+foo` ],
]
