"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const CompilerToken_1=require("./CompilerToken");class BracketSafeExpressionToken extends CompilerToken_1.default{constructor(e,r,t){super(r,t),this.expr=e}compile(e){e=this.expr.compile(e);return e.startsWith("(")&&e.endsWith(")")?e:"("+e+")"}}exports.default=BracketSafeExpressionToken;