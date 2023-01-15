import ValueToken from '../../src/token/value';

export default () => [
    [ '{{ foo }}', new ValueToken( 'foo' ) ],
]
