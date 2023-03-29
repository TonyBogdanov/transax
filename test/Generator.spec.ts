import { expect } from '@jest/globals';
import { promises } from 'fs';

import Generator from '../src/Generator/Generator';

const compileOptions = { translations: { en: { foo: 'foo {{ bar }}', bar: 'bar' }, de: { bar: 'baz {{ @baz }}' } } };
const compileInput1 = `{{ $t( "foo" ) }}`;
const compileInput2 = `{{ $t( "bar" ) }}`;
const compileOutput1 = `{\n    en: {\n        foo: ({bar})=>"foo "+bar,\n    },\n    de: {\n    },\n}`;
const compileOutput2 = `{\n    en: {\n        bar: ()=>"bar",\n    },\n    de: {\n        bar: (_,{baz})=>"baz "+baz,\n    },\n}`;

describe( 'Generator', () => {
    describe( 'parse()', () => {
        const code = `{{ $t( 'key' ) }} and {{ $t( 'key', 'again' ) }}\non {{ $t( 'new_line' ) }}`;
        const empty = 'test/fixture/empty.js';
        const sample = 'test/fixture/file.vue';

        // @ts-ignore
        test( 'empty', () => expect( new Generator().parse( '' ).keys ).toStrictEqual( {} ) );

        // @ts-ignore
        test( 'sample', () => expect( new Generator().parse( code ).keys ).toStrictEqual( {
            key: [ '[inline code]::1:4', '[inline code]::1:26' ],
            new_line: [ '[inline code]::2:7' ],
        } ) );

        test( 'empty', async () => {
            // @ts-ignore
            expect( new Generator().parse( await promises.readFile( empty, 'utf-8' ), empty ).keys ).toStrictEqual( {} );
        } );

        test( 'sample', async () => {
            // @ts-ignore
            expect( new Generator().parse( await promises.readFile( sample, 'utf-8' ), sample ).keys ).toStrictEqual( {
                key: [ 'test/fixture/file.vue::3:12', 'test/fixture/file.vue::3:34' ],
                new_line: [ 'test/fixture/file.vue::4:15' ],
            } );
        } );

        test( 'always accumulate without source', () => {
            // @ts-ignore
            expect( new Generator().parse( compileInput1 ).parse( compileInput2 ).keys ).toStrictEqual( {
                foo: [ '[inline code]::1:4' ],
                bar: [ '[inline code]::1:4' ],
            } );
        } );

        test( 'do not accumulate for the same file', () => {
            // @ts-ignore
            expect( new Generator().parse( compileInput1, 'a.js' ).parse( compileInput2, 'a.js' ).keys ).toStrictEqual( {
                bar: [ 'a.js::1:4' ],
            } );
        } );

        test( 'accumulate for the same file if explicitly specified', () => {
            // @ts-ignore
            expect( new Generator().parse( compileInput1, 'a.js', true ).parse( compileInput2, 'a.js', true ).keys )
                .toStrictEqual( {
                    foo: [ 'a.js::1:4' ],
                    bar: [ 'a.js::1:4' ],
                } );
        } );
    } );

    describe( 'setTranslations()', () => {
        const en = { foo: 'bar' };
        const de = { bar: 'baz' };

        test( 'add', () => {
            // @ts-ignore
            expect( new Generator().setTranslations( 'en', en ).options.translations ).toStrictEqual( { en } );
        } );

        test( 'replace', () => {
            const generator = new Generator( { translations: { en } } );

            // @ts-ignore
            expect( generator.setTranslations( 'en', de ).options.translations ).toStrictEqual( { en: de } );
        } );
    } );

    describe( 'removeTranslations()', () => {
        const options = { translations: { en: { foo: 'bar' } } };

        test( 'remove', () => {
            // @ts-ignore
            expect( new Generator( options ).removeTranslations( 'en' ).options.translations ).toStrictEqual( {} );
        } );
    } );

    describe( 'getMissingTranslationKeys()', () => {
        const options = { translations: { en: { foo: 'bar' }, de: { bar: 'baz' } } };

        const a = `{{ $t( "foo" ) }}`;
        test( a, () => {
            expect( new Generator( options ).parse( a ).getMissingTranslationKeys() ).toStrictEqual( {
                en: [],
                de: [ 'foo' ],
            } );
        } );

        const b = `{{ $t( "missing" ) }}`;
        test( b, () => {
            expect( new Generator( options ).parse( b ).getMissingTranslationKeys() ).toStrictEqual( {
                en: [ 'missing' ],
                de: [ 'missing' ],
            } );
        } );
    } );

    describe( 'getUnusedTranslationKeys()', () => {
        const options = { translations: { en: { foo: 'bar' }, de: { bar: 'baz' } } };

        const a = `{{ $t( "foo" ) }}`;
        test( a, () => {
            expect( new Generator( options ).parse( a ).getUnusedTranslationKeys() ).toStrictEqual( {
                en: [],
                de: [ 'bar' ],
            } );
        } );

        const b = `{{ $t( "missing" ) }}`;
        test( b, () => {
            expect( new Generator( options ).parse( b ).getUnusedTranslationKeys() ).toStrictEqual( {
                en: [ 'foo' ],
                de: [ 'bar' ],
            } );
        } );
    } );

    describe( 'getCompiledTranslationsDump()', () => {
        test( compileInput1, () => expect( new Generator( compileOptions ).parse( compileInput1 )
            .getCompiledTranslationsDump() ).toStrictEqual( compileOutput1 ) );

        test( compileInput2, () => expect( new Generator( compileOptions ).parse( compileInput2 )
            .getCompiledTranslationsDump() ).toStrictEqual( compileOutput2 ) );

        test( 'with meta information', () => expect( new Generator( compileOptions )
            .parse( compileInput1, 'a.js' ).parse( compileInput2, 'b.js' ).parse( compileInput1, 'c.js' )
            .getCompiledTranslationsDump( true ) ).toStrictEqual(
                '{\n' +
                '    en: {\n' +
                '        // a.js::1:4\n' +
                '        // c.js::1:4\n' +
                '        foo: ({bar})=>"foo "+bar,\n' +
                '\n' +
                '        // b.js::1:4\n' +
                '        bar: ()=>"bar",\n' +
                '    },\n' +
                '    de: {\n' +
                '        // b.js::1:4\n' +
                '        bar: (_,{baz})=>"baz "+baz,\n' +
                '    },\n' +
                '}',
            ) );
    } );

    describe( 'getCompiledTranslationsDumpAsCJSExport()', () => {
        test( compileInput1, () => expect( new Generator( compileOptions ).parse( compileInput1 )
            .getCompiledTranslationsDumpAsCJSExport() ).toStrictEqual( `module.exports = ${ compileOutput1 };\n` ) );

        test( 'deduplication', () => expect(
            new Generator( {
                translations: {
                    en: { foo: 'bar', bar: 'baz', baz: 'baz' },
                    de: { foo: 'de_bar', bar: 'de_baz', baz: 'baz' },
                },
            } )
            .parse( `{{ $t( 'foo' ) }} + {{ $t( 'bar' ) }} + {{ $t( 'baz' ) }}` )
            .getCompiledTranslationsDumpAsCJSExport() ).toStrictEqual(
                'const _q = ()=>"baz";\n\n' +
                'module.exports = {\n' +
                '    en: {\n' +
                '        foo: ()=>\"bar\",\n' +
                '        bar: _q,\n' +
                '        baz: _q,\n' +
                '    },\n' +
                '    de: {\n' +
                '        foo: ()=>\"de_bar\",\n' +
                '        bar: ()=>\"de_baz\",\n' +
                '        baz: _q,\n' +
                '    },\n' +
                '};\n',
            ),
        );
    } );

    describe( 'getCompiledTranslationsDumpAsESMExport()', () => {
        test( compileInput1, () => expect( new Generator( compileOptions ).parse( compileInput1 )
            .getCompiledTranslationsDumpAsESMExport() ).toStrictEqual( `export default ${ compileOutput1 };\n` ) );

        test( 'deduplication', () => expect(
                new Generator( {
                    translations: {
                        en: { foo: 'bar', bar: 'baz', baz: 'baz' },
                        de: { foo: 'de_bar', bar: 'de_baz', baz: 'baz' },
                    },
                } )
                    .parse( `{{ $t( 'foo' ) }} + {{ $t( 'bar' ) }} + {{ $t( 'baz' ) }}` )
                    .getCompiledTranslationsDumpAsESMExport() ).toStrictEqual(
                'const _q = ()=>"baz";\n\n' +
                'export default {\n' +
                '    en: {\n' +
                '        foo: ()=>\"bar\",\n' +
                '        bar: _q,\n' +
                '        baz: _q,\n' +
                '    },\n' +
                '    de: {\n' +
                '        foo: ()=>\"de_bar\",\n' +
                '        bar: ()=>\"de_baz\",\n' +
                '        baz: _q,\n' +
                '    },\n' +
                '};\n',
            ),
        );
    } );
} );
