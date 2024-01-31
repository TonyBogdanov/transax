import PathError from"../Util/PathError.mjs";export default class PluginInput{constructor(r){if(!r||"object"!=typeof r)throw new PathError("Expected {{ path }} to be an object.");this.pattern=PathError.wrap("pattern",()=>{if("string"==typeof r.pattern&&0<r.pattern.length)return[r.pattern];if(Array.isArray(r.pattern)&&0<r.pattern.filter(r=>0<r.length).length)return r.pattern.filter(r=>0<r.length);throw new PathError("Expected {{ path }} to be a non-empty string or an array of non-empty strings.")}),this.keywords=PathError.wrap("keywords",()=>{if(void 0===r.keywords)return["$t"];if("string"==typeof r.keywords&&0<r.keywords.length)return[r.keywords];if(Array.isArray(r.keywords)&&0<r.keywords.filter(r=>0<r.length).length)return r.keywords.filter(r=>0<r.length);throw new PathError("Expected {{ path }} to be a non-empty string or an array of non-empty strings.")}),this.keyFormatter=PathError.wrap("keyFormatter",()=>{if(void 0===r.keyFormatter)return r=>r;if("function"==typeof r.keyFormatter)return r.keyFormatter;throw new PathError("Expected {{ path }} to be a function.")})}}