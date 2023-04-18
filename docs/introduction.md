# Introduction
[![release](https://img.shields.io/npm/v/transax.svg)](https://www.npmjs.com/package/transax)
[![license](https://img.shields.io/github/license/tonybogdanov/transax)](https://github.com/TonyBogdanov/transax/blob/master/LICENSE)
[![test](https://github.com/tonybogdanov/transax/actions/workflows/build.yaml/badge.svg)](https://github.com/tonybogdanov/transax/actions/workflows/build.yaml)
[![coverage](https://tonybogdanov.github.io/transax/coverage/badge.svg)](https://tonybogdanov.github.io/transax/coverage)

`transax` is a JavaScript/TypeScript library for content internationalization & localization.

## Framework-agnostic
The project is a pure [JavaScript](https://www.javascript.com) solution, so it can be used directly, or integrated
with virtually any framework or library.

## Flavor-agnostic
Due to its simplicity `transax` is able to recognize and extract keys from any JS-like syntax, including
[JSX](https://legacy.reactjs.org/docs/introducing-jsx.html),
[TSX](https://www.typescriptlang.org/docs/handbook/jsx.html), [Vue SFCs](https://vuejs.org/guide/scaling-up/sfc.html)
and maybe even future flavors.

## Flexible
Originally written in [TypeScript](https://www.typescriptlang.org), the package comes bundled with transpiled
[JavaScript](https://www.javascript.com) versions for both [CommonJS](https://nodejs.org/api/modules.html) and
[ESM](https://nodejs.org/api/esm.html) uses.

## Analysis
Able to analyze your code and look for translation calls, `transax` will then report back with untranslated and
obsolete keys.

## Compilation
Once created your translation dictionary is compiled to a highly optimized and highly performant
[JavaScript](https://www.javascript.com) object, ready to be used in production.

## Translation
At runtime, `transax` uses the compiled dictionary to translate keys into the desired language, performing powerful
[string interpolation](https://en.wikipedia.org/wiki/String_interpolation) & formatting of passed data.
