"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const Logger_1=require("../Logger/Logger"),TextCompilerToken_1=require("./TextCompilerToken"),CompilerContext_1=require("./CompilerContext"),peg_1=require("./peg");class Options{constructor(e={}){this.logger=null!=(e=e.logger)?e:new Logger_1.default({namespace:"TRANSAX:COMPILER"})}}class Compiler{constructor(e={}){this.options=new Options(e)}tokenize(e){var t=[];for(const o of(0,peg_1.default)(e))0<t.length&&o instanceof TextCompilerToken_1.default&&t[t.length-1]instanceof TextCompilerToken_1.default?t[t.length-1].text+=o.text:t.push(o);return t}compile(e){var t=new CompilerContext_1.default,o=['""'];for(const l of this.tokenize(e)){const e=l.compile(t);""!==e&&o.push(e)}for(let e=0;e<o.length;e++)"null"===o[e]&&(o[e]='""');for(let e=1;e<o.length;e++)o[e-1].startsWith('"')&&o[e-1].endsWith('"')&&o[e].startsWith('"')&&(o[e-1]=o[e-1].slice(0,-1)+o[e].slice(1),o.splice(e,1),e--);let r="";return 0<t.parameters.length&&(r+=`{${t.parameters.join(",")}}`),0<t.globals.length&&(0===t.parameters.length&&(r+="_"),r+=`,{${t.globals.join(",")}}`),`(${r})=>`+o.join("+")}}exports.default=Compiler;