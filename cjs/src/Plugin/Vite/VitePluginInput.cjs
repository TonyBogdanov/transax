"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const PathError_1=require("../../Util/PathError.cjs");class VitePluginInput{constructor(t){if(!t||"object"!=typeof t)throw new PathError_1.default("Expected {{ path }} to be an object.");this.pattern=PathError_1.default.wrap("pattern",()=>{if("string"==typeof t.pattern&&0<t.pattern.length)return[t.pattern];if(Array.isArray(t.pattern)&&0<t.pattern.filter(t=>0<t.length).length)return t.pattern.filter(t=>0<t.length);throw new PathError_1.default("Expected {{ path }} to be a non-empty string or an array of non-empty strings.")}),this.keywords=PathError_1.default.wrap("keywords",()=>{if(void 0===t.keywords)return["$t"];if("string"==typeof t.keywords&&0<t.keywords.length)return[t.keywords];if(Array.isArray(t.keywords)&&0<t.keywords.filter(t=>0<t.length).length)return t.keywords.filter(t=>0<t.length);throw new PathError_1.default("Expected {{ path }} to be a non-empty string or an array of non-empty strings.")}),this.keyFormatter=PathError_1.default.wrap("keyFormatter",()=>{if(void 0===t.keyFormatter)return t=>t;if("function"==typeof t.keyFormatter)return t.keyFormatter;throw new PathError_1.default("Expected {{ path }} to be a function.")})}}exports.default=VitePluginInput;