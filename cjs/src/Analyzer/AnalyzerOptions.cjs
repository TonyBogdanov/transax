"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const Logger_1=require("../Logger/Logger.cjs");class AnalyzerOptions{constructor(e={}){if(null===e||"object"!=typeof e)throw new TypeError("Expected options to be an object.");if(void 0===e.names)this.names=["$t"];else if("string"==typeof e.names&&0<e.names.length)this.names=[e.names];else{if(!(Array.isArray(e.names)&&0<e.names.length))throw new TypeError("Expected options.names to be a non-empty string or an non-empty array.");this.names=e.names}if(void 0===e.keyFormatter)this.keyFormatter=e=>e;else{if("function"!=typeof e.keyFormatter)throw new TypeError("Expected options.keyFormatter to be a function.");this.keyFormatter=e.keyFormatter}if(void 0===e.logger)this.logger=new Logger_1.default({namespace:"TRANSAX:ANALYZER"});else{if(!(e.logger instanceof Logger_1.default))throw new TypeError("Expected options.logger to be an instance of LoggerInterface.");this.logger=e.logger}}}exports.default=AnalyzerOptions;