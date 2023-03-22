import { expect } from '@jest/globals';
import { resolve } from 'path';
import { promises } from 'fs';

import Generator from '../src/Generator/Generator';

const compileOptions = { translations: { en: { foo: 'foo {{ bar }}' }, de: { bar: 'baz {{ @baz }}' } } };
const compileInput1 = `{{ $t( "foo" ) }}`;
const compileInput2 = `{{ $t( "bar" ) }}`;
const compileOutput1 = `{\n    en: {\n        foo: ({bar})=>"foo "+bar,\n    },\n    de: {\n    },\n}`;
const compileOutput2 = `{\n    en: {\n    },\n    de: {\n        bar: (_,{baz})=>"baz "+baz,\n    },\n}`;

describe( 'Generator', () => {
    describe( 'parse()', () => {
        const code = `{{ $t( 'key' ) }} and {{ $t( 'key', 'again' ) }}\non {{ $t( 'new_line' ) }}`;
        const empty = resolve( __dirname, 'fixture', 'empty.js' );
        const sample = resolve( __dirname, 'fixture', 'file.vue' );

        // @ts-ignore
        test( 'empty', () => expect( new Generator().parse( '' ).keys ).toStrictEqual( {} ) );

        // @ts-ignore
        test( 'sample', () => expect( new Generator().parse( code ).keys ).toStrictEqual( {
            key: [
                '[inline code]::1:4',
                '[inline code]::1:26',
            ],
            new_line: [
                '[inline code]::2:7',
            ],
        } ) );

        test( 'empty', async () => {
            // @ts-ignore
            expect( new Generator().parse( await promises.readFile( empty, 'utf-8' ), empty ).keys ).toStrictEqual( {} );
        } );

        test( 'sample', async () => {
            // @ts-ignore
            expect( new Generator().parse( await promises.readFile( sample, 'utf-8' ), sample ).keys ).toStrictEqual( {
                key: [
                    'test/fixture/file.vue::3:12',
                    'test/fixture/file.vue::3:34',
                ],
                new_line: [
                    'test/fixture/file.vue::4:15',
                ],
            } );
        } );
    } );

    describe( 'setTranslations()', () => {
        test( 'add', () => {
            const generator = new Generator();
            const en = { foo: 'bar' };
            const de = { bar: 'baz' };

            // @ts-ignore
            expect( generator.options.translations ).toStrictEqual( {} );

            // @ts-ignore
            expect( generator.setTranslations( 'en', en ).options.translations ).toStrictEqual( { en } );

            // @ts-ignore
            expect( generator.setTranslations( 'de', de ).options.translations ).toStrictEqual( { en, de } );
        } );
    } );

    describe( 'getMissingTranslationKeys()', () => {
        const options = { translations: { en: { foo: 'bar' }, de: { bar: 'baz' } } };

        const a = `{{ $t( "foo" ) }}`;
        test( a, async () => {
            expect( new Generator( options ).parse( a ).getMissingTranslationKeys() ).toStrictEqual( {
                en: [],
                de: [ 'foo' ],
            } );
        } );

        const b = `{{ $t( "missing" ) }}`;
        test( b, async () => {
            expect( new Generator( options ).parse( b ).getMissingTranslationKeys() ).toStrictEqual( {
                en: [ 'missing' ],
                de: [ 'missing' ],
            } );
        } );
    } );

    describe( 'getUnusedTranslationKeys()', () => {
        const options = { translations: { en: { foo: 'bar' }, de: { bar: 'baz' } } };

        const a = `{{ $t( "foo" ) }}`;
        test( a, async () => {
            expect( new Generator( options ).parse( a ).getUnusedTranslationKeys() ).toStrictEqual( {
                en: [],
                de: [ 'bar' ],
            } );
        } );

        const b = `{{ $t( "missing" ) }}`;
        test( b, async () => {
            expect( new Generator( options ).parse( b ).getUnusedTranslationKeys() ).toStrictEqual( {
                en: [ 'foo' ],
                de: [ 'bar' ],
            } );
        } );
    } );

    describe( 'getCompiledTranslationsDump()', () => {
        test( compileInput1, async () => expect( new Generator( compileOptions ).parse( compileInput1 )
            .getCompiledTranslationsDump() ).toStrictEqual( compileOutput1 ) );

        test( compileInput2, async () => expect( new Generator( compileOptions ).parse( compileInput2 )
            .getCompiledTranslationsDump() ).toStrictEqual( compileOutput2 ) );
    } );

    describe( 'getCompiledTranslationsDumpAsCJSExport()', () => {
        test( compileInput1, async () => expect( new Generator( compileOptions ).parse( compileInput1 )
            .getCompiledTranslationsDumpAsCJSExport() ).toStrictEqual( `module.exports = ${compileOutput1};\n` ) );
    } );

    describe( 'getCompiledTranslationsDumpAsESMExport()', () => {
        test( compileInput1, async () => expect( new Generator( compileOptions ).parse( compileInput1 )
            .getCompiledTranslationsDumpAsESMExport() ).toStrictEqual( `export default ${compileOutput1};\n` ) );
    } );
} );
