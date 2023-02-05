import { expect } from '@jest/globals';
import { resolve } from 'path';
import { Generator, Options } from '../src/Generator';

const compileOptions = { translations: { en: { foo: 'foo {{ bar }}' }, de: { bar: 'baz {{ @baz }}' } } };
const compileInput1 = `{{ $t( "foo" ) }}`;
const compileInput2 = `{{ $t( "bar" ) }}`;
const compileOutput1 = `{\n    en: {\n        foo: ({bar})=>"foo "+bar,\n    },\n    de: {\n    },\n}`;
const compileOutput2 = `{\n    en: {\n    },\n    de: {\n        bar: (_,{baz})=>"baz "+baz,\n    },\n}`;

describe( 'Generator', () => {
    describe( 'constructor()', () => {
        test( 'accepts nothing', () => {
            expect( new Generator().options ).toStrictEqual( new Options() );
        } );

        test( 'accepts an Options object', () => {
            const options = new Options();
            expect( new Generator( options ).options ).toBe( options );
        } );

        test( 'accepts an empty object', () => {
            const translator = new Generator( {} );
            expect( translator.options ).toBeInstanceOf( Options );
            expect( translator.options ).toStrictEqual( new Options() );
        } );

        test( 'allows selectively overriding options values', () => {
            const translations = { en: { test: 'test' } };
            expect( new Generator( { translations } ).options.translations ).toStrictEqual( translations );
        } );
    } );

    describe( 'parseContent()', () => {
        test( 'empty', async () => expect( ( await new Generator().parseContent( '' ) ).keys ).toStrictEqual( {} ) );

        const code = `{{ $t( 'key' ) }} and {{ $t( 'key', 'again' ) }}\non {{ $t( 'new_line' ) }}`;
        test( 'sample', async () => expect( ( await new Generator().parseContent( code ) ).keys ).toStrictEqual( {
            key: [
                '[inline code]::1:4',
                '[inline code]::1:26',
            ],
            new_line: [
                '[inline code]::2:7',
            ],
        } ) );
    } );

    describe( 'parseFile()', () => {
        const empty = resolve( __dirname, 'fixture', 'empty.js' );
        test( 'empty', async () => expect( ( await new Generator().parseFile( empty ) ).keys ).toStrictEqual( {} ) );

        const sample = resolve( __dirname, 'fixture', 'file.vue' );
        test( 'sample', async () => expect( ( await new Generator().parseFile( sample ) ).keys ).toStrictEqual( {
            key: [
                'test/fixture/file.vue::3:12',
                'test/fixture/file.vue::3:34',
            ],
            new_line: [
                'test/fixture/file.vue::4:15',
            ],
        } ) );
    } );

    describe( 'getMissingTranslationKeys()', () => {
        const options = { translations: { en: { foo: 'bar' }, de: { bar: 'baz' } } };

        const a = `{{ $t( "foo" ) }}`;
        test( a, async () => {
            expect( ( await new Generator( options ).parseContent( a ) ).getMissingTranslationKeys() ).toStrictEqual( {
                en: [],
                de: [ 'foo' ],
            } );
        } );

        const b = `{{ $t( "missing" ) }}`;
        test( b, async () => {
            expect( ( await new Generator( options ).parseContent( b ) ).getMissingTranslationKeys() ).toStrictEqual( {
                en: [ 'missing' ],
                de: [ 'missing' ],
            } );
        } );
    } );

    describe( 'getUnusedTranslationKeys()', () => {
        const options = { translations: { en: { foo: 'bar' }, de: { bar: 'baz' } } };

        const a = `{{ $t( "foo" ) }}`;
        test( a, async () => {
            expect( ( await new Generator( options ).parseContent( a ) ).getUnusedTranslationKeys() ).toStrictEqual( {
                en: [],
                de: [ 'bar' ],
            } );
        } );

        const b = `{{ $t( "missing" ) }}`;
        test( b, async () => {
            expect( ( await new Generator( options ).parseContent( b ) ).getUnusedTranslationKeys() ).toStrictEqual( {
                en: [ 'foo' ],
                de: [ 'bar' ],
            } );
        } );
    } );

    describe( 'getCompiledTranslationsDump()', () => {
        test( compileInput1, async () => expect( ( await new Generator( compileOptions ).parseContent( compileInput1 ) )
            .getCompiledTranslationsDump() ).toStrictEqual( compileOutput1 ) );

        test( compileInput2, async () => expect( ( await new Generator( compileOptions ).parseContent( compileInput2 ) )
            .getCompiledTranslationsDump() ).toStrictEqual( compileOutput2 ) );
    } );

    describe( 'getCompiledTranslationsDumpAsCJSExport()', () => {
        test( compileInput1, async () => expect( ( await new Generator( compileOptions ).parseContent( compileInput1 ) )
            .getCompiledTranslationsDumpAsCJSExport() ).toStrictEqual( `module.exports = ${compileOutput1};\n` ) );
    } );

    describe( 'getCompiledTranslationsDumpAsESMExport()', () => {
        test( compileInput1, async () => expect( ( await new Generator( compileOptions ).parseContent( compileInput1 ) )
            .getCompiledTranslationsDumpAsESMExport() ).toStrictEqual( `export default ${compileOutput1};\n` ) );
    } );
} );
