export default class LoggerOptions{constructor(e){if(null===e||"object"!=typeof e)throw new TypeError("Expected options to be an object.");if(void 0===e.namespace)this.namespace="TRANSAX";else{if("string"!=typeof e.namespace||0===e.namespace.length)throw new TypeError("Expected options.namespace to be a non-empty string.");this.namespace=e.namespace.toUpperCase()}if(void 0===e.quiet)this.quiet=!1;else{if("boolean"!=typeof e.quiet)throw new TypeError("Expected options.quiet to be a boolean.");this.quiet=e.quiet}if(void 0===e.verbose)this.verbose=!1;else{if("boolean"!=typeof e.verbose)throw new TypeError("Expected options.verbose to be a boolean.");this.verbose=e.verbose}}}