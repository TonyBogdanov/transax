"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Translator=exports.Options=void 0;const Logger_1=require("./Logger");class Options{constructor(o={}){this.loggerOptions={},"fallbackLocale"in o&&(this.fallbackLocale=o.fallbackLocale),"loggerOptions"in o&&(this.loggerOptions=o.loggerOptions)}}exports.Options=Options;class Translator{constructor(o,l={}){this.dictionary=o,this.options=l instanceof Options?l:new Options(l),this.logger=new Logger_1.Logger("Generator",this.options.loggerOptions)}translate(o,l={}){var i;if(l.locale)if(l.locale in this.dictionary){if(o in this.dictionary[l.locale])return this.dictionary[l.locale][o](null!=(i=l.params)?i:{},null!=(i=l.globals)?i:{});this.logger.verbose(`Key "${o}" does not exist in dictionary for locale: "${l.locale}", resorting to fallback locale.`)}else this.logger.verbose(`Locale: "${l.locale}" does not exist in dictionary, resorting to fallback locale.`);else this.logger.verbose("Locale is not specified, resorting to fallback locale.");if(this.options.fallbackLocale)if(this.options.fallbackLocale in this.dictionary){if(o in this.dictionary[this.options.fallbackLocale])return this.dictionary[this.options.fallbackLocale][o](null!=(i=l.params)?i:{},null!=(i=l.globals)?i:{});this.logger.log(`Key: "${o}" does not exist in dictionary for fallback locale: "${this.options.fallbackLocale}".`)}else this.logger.log(`Fallback locale: "${this.options.fallbackLocale}" does not exist in dictionary.`);else this.logger.log("Fallback locale is not specified.");return o}}exports.Translator=Translator;