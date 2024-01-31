import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';

import pack from '../../package.json';

const base = `/transax/v${ pack.version }/`;

export default defineUserConfig( {
    base,
    bundler: viteBundler( {} ),

    title: 'Transax',
    description: 'Framework-agnostic JavaScript library for content internationalization.',

    head: [
        [ 'link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' } ],
        [ 'link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } ],
        [ 'link', {
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap',
            rel: 'stylesheet'
        } ],

        [ 'link', { rel: 'icon', href: `${ base }/assets/favicon.ico` } ],
        [ 'link', { rel: 'apple-touch-icon', sizes: '180x180', href: `${ base }/assets/apple-touch-icon.png` } ],
        [ 'link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${ base }/assets/favicon-32x32.png` } ],
        [ 'link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${ base }/assets/favicon-16x16.png` } ],
        [ 'link', { rel: 'manifest', href: `${ base }assets/site.webmanifest` } ],

        [ 'script', { src: `${ base }assets/versioning.js` } ],
    ],

    theme: hopeTheme( {
        plugins: {
            mdEnhance: {
                codetabs: true,
            },
            searchPro: {
                indexContent: true,
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
            {
                text: 'Usage', link: '/usage/importing', collapsible: true, children: [
                    '/usage/importing',
                    '/usage/analysis',
                    '/usage/compilation',
                    '/usage/translation',
                    '/usage/interpolation',
                    '/usage/syntax',
                ]
            },
            { text: 'Advanced', link: '/advanced' },
            {
                text: 'Plugins', link: '/plugins/vite', collapsible: true, children: [
                    '/plugins/vite',
                ],
            },
            {
                text: 'API Reference', link: '/api', collapsible: true, children: [
                    /* typedoc:classes:start - do not remove or edit below this line */
                    "/api/classes/Analyzer",
                    "/api/classes/AnalyzerOptions",
                    "/api/classes/AnalyzerToken",
                    "/api/classes/CallExpressionArrayAccess",
                    "/api/classes/CallExpressionInvocation",
                    "/api/classes/CallExpressionObjectAccess",
                    "/api/classes/CallExpressionToken",
                    "/api/classes/ComparisonExpressionToken",
                    "/api/classes/Compiler",
                    "/api/classes/CompilerContext",
                    "/api/classes/CompilerOptions",
                    "/api/classes/CompilerToken",
                    "/api/classes/Generator",
                    "/api/classes/GeneratorOptions",
                    "/api/classes/LiteralToken",
                    "/api/classes/Logger",
                    "/api/classes/LoggerOptions",
                    "/api/classes/TernaryExpressionToken",
                    "/api/classes/TextToken",
                    "/api/classes/Translator",
                    "/api/classes/TranslatorOptions",
                    "/api/interfaces/AnalyzerInterface",
                    "/api/interfaces/CompilerInterface",
                    "/api/interfaces/GeneratorInterface",
                    "/api/interfaces/LoggerInterface",
                    "/api/interfaces/TranslatorInterface"
                    /* typedoc:classes:stop - do not remove or edit above this line */
                ]
            },
        ],
    } ),
} );
