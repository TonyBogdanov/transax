"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const CompilerToken_1=require("./CompilerToken");class ComparisonExpressionToken extends CompilerToken_1.default{constructor(e,o,r,t,s){super(t,s),this.left=e,this.right=o,this.operator=r}compile(e){return"("+this.left.compile(e)+this.operator+this.right.compile(e)+")"}}exports.default=ComparisonExpressionToken;