# Introduction
[![release](https://img.shields.io/npm/v/transax.svg)](https://www.npmjs.com/package/transax)
[![test](https://github.com/tonybogdanov/transax/actions/workflows/build.yaml/badge.svg)](https://github.com/tonybogdanov/transax/actions/workflows/build.yaml)
[![coverage](https://tonybogdanov.github.io/transax/coverage/badge.svg)](https://tonybogdanov.github.io/transax/coverage)

`transax` is a JavaScript/TypeScript library for content internationalization & localization.

## Features
- **Framework-agnostic** &ndash; Pure JavaScript solution, so it can be used with any framework or library.
- **Flexible** &ndash; Written in [TypeScript](https://www.typescriptlang.org), also works with both
  [CommonJS](https://nodejs.org/api/modules.html) and [ESM](https://nodejs.org/api/esm.html).

[//]: # (- **Extensible** &ndash; Bundled plugins for [React]&#40;https://reactjs.org&#41; and [Vue]&#40;https://vuejs.org&#41;.)

[//]: # (- **Bundleable** &ndash; Bundled plugins for [Webpack]&#40;https://webpack.js.org&#41;, [Rollup]&#40;https://rollupjs.org&#41;,)

[//]: # (  [Vite]&#40;https://vitejs.dev&#41; and [Browserify]&#40;http://browserify.org&#41;.)

[//]: # (- **CLI** &ndash; Powerful, yet easy to use command-line interface.)

## Analysis
This phase will analyze your source code and look for calls to a global function `$t` with a translation key as the
first argument. Information about each matching call can then be used to perform analysis on your project, such as
generating a list of used, unused and untranslated keys.

## Translation
In this phase you load a dictionary of keys & their translations for each locale you want to support. The translator
can then be called (via the `$t` global function) to translate a key into your chosen locale.
