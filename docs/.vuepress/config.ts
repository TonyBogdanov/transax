import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';

export default defineUserConfig( {
    base: '/transax/',

    title: 'Transax',
    description: 'Framework-agnostic JavaScript library for content internationalization.',

    plugins: [
    ],

    head: [
        [ 'link', { rel: 'icon', href: '/assets/favicon.ico' } ],
        [ 'link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/apple-touch-icon.png' } ],
        [ 'link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/favicon-32x32.png' } ],
        [ 'link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/favicon-16x16.png' } ],
        [ 'link', { rel: 'manifest', href: '/assets/site.webmanifest' } ],
    ],

    theme: hopeTheme( {
        plugins: {
            mdEnhance: {
                codetabs: true,
            },
        },

        navbar: [
            { text: 'Guide', link: '/introduction' },
            { text: 'NPM', link: 'https://www.npmjs.com/package/transax' },
            { text: 'GitHub', link: 'https://github.com/tonybogdanov/transax' },
        ],

        sidebar: [
            { text: 'Introduction', link: '/introduction' },
            { text: 'Installation', link: '/installation' },
            { text: 'Usage', link: '/usage/importing', collapsible: true, children: [
                '/usage/importing',
                '/usage/analysis',
                '/usage/compilation',
                '/usage/translation',
                '/usage/interpolation',
                '/usage/syntax',
            ] },
            { text: 'Advanced', link: '/advanced' },
            { text: 'API Reference', link: '/api', collapsible: true, children: [
                '/api/interfaces/LoggerInterface',
                '/api/interfaces/AnalyzerInterface',
                '/api/interfaces/CompilerInterface',
                '/api/interfaces/GeneratorInterface',
                '/api/interfaces/TranslatorInterface',
                '/api/classes/Logger',
                '/api/classes/Analyzer',
                '/api/classes/AnalyzerToken',
                '/api/classes/Compiler',
                '/api/classes/CompilerContext',
                '/api/classes/CompilerToken',
                '/api/classes/TextToken',
                '/api/classes/LiteralToken',
                '/api/classes/TernaryExpressionToken',
                '/api/classes/ComparisonExpressionToken',
                '/api/classes/CallExpressionToken',
                '/api/classes/Generator',
                '/api/classes/Translator',
            ] },
        ],
    } ),
} );
