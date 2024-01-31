"use strict";var __awaiter=this&&this.__awaiter||function(t,a,s,h){return new(s=s||Promise)(function(i,e){function r(t){try{o(h.next(t))}catch(t){e(t)}}function n(t){try{o(h.throw(t))}catch(t){e(t)}}function o(t){var e;t.done?i(t.value):((e=t.value)instanceof s?e:new s(function(t){t(e)})).then(r,n)}o((h=h.apply(t,a||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const node_path_1=require("node:path"),promises_1=require("node:fs/promises"),chokidar_1=require("chokidar"),glob_1=require("glob"),PathError_1=require("../Util/PathError.cjs"),Generator_1=require("../Generator/Generator.cjs"),Analyzer_1=require("../Analyzer/Analyzer.cjs"),Compiler_1=require("../Compiler/Compiler.cjs"),PluginOptions_1=require("./PluginOptions.cjs");class Plugin{filename(t){return(t=(0,node_path_1.basename)(t)).substring(0,t.length-(0,node_path_1.extname)(t).length)}flatten(t,e=[]){var i,r,n={};for([i,r]of Object.entries(t))"object"==typeof r?Object.assign(n,this.flatten(r,e.concat(i))):n[e.concat(i).join(".")]=r;return n}createWatcher(t){return(0,chokidar_1.watch)(t,{ignoreInitial:!0,awaitWriteFinish:{stabilityThreshold:500}})}constructor(t){this.timeout=null,this.options=PathError_1.default.wrap("options",()=>new PluginOptions_1.default(t));var e={quiet:this.options.quiet,verbose:this.options.verbose};this.generator=new Generator_1.default({analyzer:new Analyzer_1.default({names:this.options.input.keywords,keyFormatter:this.options.input.keyFormatter,logger:e}),compiler:new Compiler_1.default({logger:e}),logger:e})}createDictionaryWatcher(){return this.createWatcher(this.options.dictionary.pattern)}createInputWatcher(){return this.createWatcher(this.options.input.pattern)}loadDictionaries(){(0,glob_1.glob)(this.options.dictionary.pattern).then(t=>t.forEach(this.loadDictionary.bind(this)))}loadDictionary(e){return __awaiter(this,void 0,void 0,function*(){var t=yield this.options.dictionary.handler(e);this.generator.mergeTranslations(Object.fromEntries(Object.entries(t).map(t=>[t[0],this.flatten(t[1])]))),this.dump()})}removeDictionary(t){this.generator.removeTranslations(this.filename(t)),this.dump()}loadInputs(){(0,glob_1.glob)(this.options.input.pattern).then(t=>t.forEach(this.loadInput.bind(this)))}loadInput(t){return __awaiter(this,void 0,void 0,function*(){this.generator.parse(yield(0,promises_1.readFile)(t,"utf8"),t),this.dump()})}removeInput(t){this.generator.parse("",t),this.dump()}dump(){const{compiled:t,missing:e,unused:i}=this.options.output;clearTimeout(this.timeout),this.timeout=setTimeout(()=>__awaiter(this,void 0,void 0,function*(){t.handler(t.path,this.generator),null!==e&&void 0!==e&&e.handler(e.path,this.generator),null!==i&&void 0!==i&&i.handler(i.path,this.generator)}),500)}}exports.default=Plugin;