"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const Logger_1=require("../Logger/Logger.cjs");class TranslatorOptions{constructor(e={}){if(null===e||"object"!=typeof e)throw new TypeError("Expected options to be an object.");if(void 0===e.translations)this.translations={};else{if(null===e.translations||"object"!=typeof e.translations)throw new TypeError("Expected options.translations to be an object.");this.translations=e.translations}if(void 0===e.fallbackLocale)this.fallbackLocale="";else{if("string"!=typeof e.fallbackLocale)throw new TypeError("Expected options.fallbackLocale to be a string.");this.fallbackLocale=e.fallbackLocale}if(void 0===e.logger)this.logger=new Logger_1.default({namespace:"TRANSAX:COMPILER"});else{if(!(e.logger instanceof Logger_1.default))throw new TypeError("Expected options.logger to be an instance of LoggerInterface.");this.logger=e.logger}}}exports.default=TranslatorOptions;