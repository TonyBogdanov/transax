import Logger from"../Logger/Logger.mjs";export default class TranslatorOptions{constructor(o={}){if(null===o||"object"!=typeof o)throw new TypeError("Expected options to be an object.");if(void 0===o.translations)this.translations={};else{if(null===o.translations||"object"!=typeof o.translations)throw new TypeError("Expected options.translations to be an object.");this.translations=o.translations}if(void 0===o.fallbackLocale)this.fallbackLocale="";else{if("string"!=typeof o.fallbackLocale)throw new TypeError("Expected options.fallbackLocale to be a string.");this.fallbackLocale=o.fallbackLocale}if(void 0===o.logger)this.logger=new Logger({namespace:"TRANSAX:COMPILER"});else{if(!(o.logger instanceof Logger))throw new TypeError("Expected options.logger to be an instance of LoggerInterface.");this.logger=o.logger}}}