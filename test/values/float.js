export default {

    name: 'float',
    tests: [
        [ '0.0', 0 ],
        [ '1.0', 1 ],
        [ '1.2345', 1.2345 ],
        [ '1.0234', 1.0234 ],
        [ '1.2340', 1.234 ],
        [ '0.2345', 0.2345 ],
        [ '0.0234', 0.0234 ],
        [ '0.2340', 0.234 ],
        [ '.2345', 0.2345 ],
        [ '.0234', 0.0234 ],
        [ '.2340', 0.234 ],
        [ '-1.0', -1 ],
        [ '-1.2345', -1.2345 ],
        [ '-1.0234', -1.0234 ],
        [ '-1.2340', -1.234 ],
        [ '-0.2345', -0.2345 ],
        [ '-0.0234', -0.0234 ],
        [ '-0.2340', -0.234 ],
        [ '-.2345', -0.2345 ],
        [ '-.0234', -0.0234 ],
        [ '-.2340', -0.234 ],
    ],

};