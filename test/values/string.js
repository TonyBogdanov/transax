export default {

    name: 'string',
    tests: [
        [ `''`, '' ],
        [ `""`, '' ],
        [ `'is \\'single\\' and "double" quoted'`, `is 'single' and "double" quoted` ],
        [ `"is 'single' and \\"double\\" quoted"`, `is 'single' and "double" quoted` ],
    ],

};
