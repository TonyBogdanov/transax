import{extname}from"node:path";import{writeFile}from"node:fs/promises";import{stringify as stringifyYaml}from"yaml";import{PluginOutputAnalysisFlavorMissing,PluginOutputAnalysisFlavorUnused}from"../Type/PluginOutputAnalysisType.mjs";import PathError from"../Util/PathError.mjs";export default class PluginOutputAnalysis{constructor(t){if(!t||"object"!=typeof t)throw new PathError("Expected {{ path }} to be an object.");if(this.flavor=PathError.wrap("flavor",()=>{if([PluginOutputAnalysisFlavorMissing,PluginOutputAnalysisFlavorUnused].includes(t.flavor))return t.flavor;throw new PathError("Expected {{ path }} to be a valid string value.")}),this.path=PathError.wrap("path",()=>{if("string"==typeof t.path&&0<t.path.length)return t.path;throw new PathError("Expected {{ path }} to be a non-empty string.")}),void 0===t.handler)switch(extname(t.path)){case".txt":t.handler="txt";break;case".yml":case".yaml":t.handler="yaml";break;case".json":t.handler="json"}this.handler=PathError.wrap("handler",()=>{let a=t=>({});if(PluginOutputAnalysisFlavorMissing===this.flavor?a=t=>t.getMissingTranslationKeys():PluginOutputAnalysisFlavorUnused===this.flavor&&(a=t=>t.getUnusedTranslationKeys()),"txt"===t.handler)return(t,r)=>{return writeFile(t,Object.entries(a(r)).map(([t,r])=>"## "+t+"\n"+r.join("\n")+"\n\n"))};if("yaml"===t.handler)return(t,r)=>writeFile(t,stringifyYaml(a(r)));if("json"===t.handler)return(t,r)=>writeFile(t,JSON.stringify(a(r),null,2));if("function"==typeof t.handler)return t.handler;throw new PathError('Expected {{ path }} to be "esm", "cjs" or a function.')})}}