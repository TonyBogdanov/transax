# Introduction
`transax` is a JavaScript/TypeScript library for content internationalization & localization.

It consists of two main phases: **Extraction** - allowing you to scan your project files and generate
analysis on the used translation keys (like untranslated keys, unused keys, etc.), and **Translation** - which allows
you to translate those keys into multiple languages at runtime.

## General concept
For its most basic use-case translating your project with `transax` is achieved by calling a globally available
`$t` function with a translation key as the first argument. The function will return the translated string, or the key
itself if no translation is found for the current locale.

## Features
- **Framework-agnostic** &ndash; Pure JavaScript solution, so it can be used with any framework or library.
- **Flexible** &ndash; Written in [TypeScript](https://www.typescriptlang.org), also works with both
  [CommonJS](https://nodejs.org/api/modules.html) and [ESM](https://nodejs.org/api/esm.html).

[//]: # (- **Extensible** &ndash; Bundled plugins for [React]&#40;https://reactjs.org&#41; and [Vue]&#40;https://vuejs.org&#41;.)

[//]: # (- **Bundleable** &ndash; Bundled plugins for [Webpack]&#40;https://webpack.js.org&#41;, [Rollup]&#40;https://rollupjs.org&#41;,)

[//]: # (  [Vite]&#40;https://vitejs.dev&#41; and [Browserify]&#40;http://browserify.org&#41;.)

[//]: # (- **CLI** &ndash; Powerful, yet easy to use command-line interface.)
