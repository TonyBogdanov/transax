"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const node_path_1=require("node:path"),promises_1=require("node:fs/promises"),yaml_1=require("yaml"),PathError_1=require("../../Util/PathError.cjs");class VitePluginOutputAnalysis{constructor(e){if(!e||"object"!=typeof e)throw new PathError_1.default("Expected {{ path }} to be an object.");if(this.path=PathError_1.default.wrap("path",()=>{if("string"==typeof e.path&&0<e.path.length)return e.path;throw new PathError_1.default("Expected {{ path }} to be a non-empty string.")}),void 0===e.handler)switch((0,node_path_1.extname)(e.path)){case".txt":e.handler="txt";break;case".yml":case".yaml":e.handler="yaml";break;case".json":e.handler="json"}this.handler=PathError_1.default.wrap("handler",()=>{if("txt"===e.handler)return(e,t)=>(0,promises_1.writeFile)(e,Object.entries(t.getMissingTranslationKeys()).map(([e,t])=>"## "+e+"\n"+t.join("\n")+"\n\n"));if("yaml"===e.handler)return(e,t)=>(0,promises_1.writeFile)(e,(0,yaml_1.stringify)(t.getMissingTranslationKeys()));if("json"===e.handler)return(e,t)=>(0,promises_1.writeFile)(e,JSON.stringify(t.getMissingTranslationKeys(),null,2));if("function"==typeof e.handler)return e.handler;throw new PathError_1.default('Expected {{ path }} to be "esm", "cjs" or a function.')})}}exports.default=VitePluginOutputAnalysis;