import Util from"../Util";import Analyzer from"../Analyzer/Analyzer";import Compiler from"../Compiler/Compiler";import Logger from"../Logger/Logger";class Options{constructor(t={}){var s;this.translations=null!=(s=t.translations)?s:{},this.analyzer=null!=(s=t.analyzer)?s:new Analyzer,this.compiler=null!=(s=t.compiler)?s:new Compiler,this.logger=null!=(s=t.logger)?s:new Logger({namespace:"TRANSAX:GENERATOR"})}}export default class Generator{constructor(t={}){this.keys={},this.options=new Options(t)}parse(t,s){if("object"!=typeof process)throw new Error("Generator.parse must be run in a NodeJS environment, `process` is not available.");for(const e of this.options.analyzer.analyze(t,s?Util.relative(process.cwd(),s):void 0)){this.keys.hasOwnProperty(e.key)||(this.keys[e.key]=[]);var o=this.keys[e.key];const s=`${e.source||"[inline code]"}::${e.line}:`+e.column;o.includes(e.source)||o.push(s)}return this}setTranslations(t,s){return this.options.translations[t]=s,this}removeTranslations(t){return this.options.translations.hasOwnProperty(t)&&delete this.options.translations[t],this}getMissingTranslationKeys(){var t={};for(const s of Object.keys(this.options.translations)){const o=this.options.translations[s];t[s]=Object.keys(this.keys).filter(t=>!o.hasOwnProperty(t))}return t}getUnusedTranslationKeys(){var t={};for(const o of Object.keys(this.options.translations)){var s=this.options.translations[o];t[o]=Object.keys(s).filter(t=>!this.keys.hasOwnProperty(t))}return t}getCompiledTranslationsDump(){var t=t=>t.match(/^[a-z_$][a-z0-9_$]*$/i)?t:JSON.stringify(t);let s=`{
`;for(const o of Object.keys(this.options.translations)){const e=this.options.translations[o];s+=`    ${t(o)}: {
`;for(const r of Object.keys(this.keys).filter(t=>e.hasOwnProperty(t)))s+=`        ${t(r)}: ${this.options.compiler.compile(e[r])},
`;s+=`    },
`}return s+"}"}getCompiledTranslationsDumpAsCJSExport(){return`module.exports = ${this.getCompiledTranslationsDump()};
`}getCompiledTranslationsDumpAsESMExport(){return`export default ${this.getCompiledTranslationsDump()};
`}}