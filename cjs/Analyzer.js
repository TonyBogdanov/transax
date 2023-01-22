"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Analyzer=exports.Options=exports.Token=void 0;const Logger_1=require("./Logger");function peg$padEnd(t,e,r){return r=r||" ",t.length>e?t:(e-=t.length,t+(r+=r.repeat(e)).slice(0,e))}class PeggySyntaxError extends Error{static buildMessage(t,e){function r(t){return t.charCodeAt(0).toString(16).toUpperCase()}function n(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,t=>"\\x0"+r(t)).replace(/[\x10-\x1F\x7F-\x9F]/g,t=>"\\x"+r(t))}function o(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,t=>"\\x0"+r(t)).replace(/[\x10-\x1F\x7F-\x9F]/g,t=>"\\x"+r(t))}function s(t){switch(t.type){case"literal":return'"'+n(t.text)+'"';case"class":var e=t.parts.map(t=>Array.isArray(t)?o(t[0])+"-"+o(t[1]):o(t));return"["+(t.inverted?"^":"")+e+"]";case"any":return"any character";case"end":return"end of input";case"other":return t.description}}return"Expected "+function(t){var e=t.map(s);let r,n;if(e.sort(),0<e.length){for(r=1,n=1;r<e.length;r++)e[r-1]!==e[r]&&(e[n]=e[r],n++);e.length=n}switch(e.length){case 1:return e[0];case 2:return e[0]+" or "+e[1];default:return e.slice(0,-1).join(", ")+", or "+e[e.length-1]}}(t)+" but "+((t=e)?'"'+n(t)+'"':"end of input")+" found."}constructor(t,e,r,n){super(),this.message=t,this.expected=e,this.found=r,this.location=n,this.name="PeggySyntaxError","function"==typeof Object.setPrototypeOf?Object.setPrototypeOf(this,PeggySyntaxError.prototype):this.__proto__=PeggySyntaxError.prototype,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,PeggySyntaxError)}format(r){let n="Error: "+this.message;if(this.location){let t=null,e;for(e=0;e<r.length;e++)if(r[e].grammarSource===this.location.source){t=r[e].text.split(/\r\n|\n|\r/g);break}var o,s,a,i=this.location.start,c=this.location.source+":"+i.line+":"+i.column;t?(a=this.location.end,o=peg$padEnd("",i.line.toString().length," "),s=t[i.line-1],a=i.line===a.line?a.column:s.length+1,n+="\n --\x3e "+c+"\n"+o+" |\n"+i.line+" | "+s+"\n"+o+" | "+peg$padEnd("",i.column-1," ")+peg$padEnd("",a-i.column,"^")):n+="\n at "+c}return n}}function peg$parse(a,t){const i={},L=(t=void 0!==t?t:{}).grammarSource;var e={Start:at};let r=at;function R(t){return t.map(t=>"\\'"===t?t[1]:t).join("")}function M(t){return t.map(t=>'\\"'===t?t[1]:t).join("")}function q(t){return t.map(([,t])=>"\\`"===t?t[1]:t).join("")}const U=function(t){return t.flat().filter(t=>t instanceof Token)},B="(",D=P("(",!1),G=/^[,)]/,H=j([",",")"],!1,!1),I=function(t,e){return new Token(t,e,rt(),nt().start.line,nt().start.column)},n=/^[ \t\r\n]/,o=j([" ","\t","\r","\n"],!1,!1),J=/^[^a-zA-Z_$]/,K=j([["a","z"],["A","Z"],"_","$"],!0,!1),N={type:"any"},Q=/^[a-zA-Z_$]/,V=j([["a","z"],["A","Z"],"_","$"],!1,!1),s=/^[a-zA-Z_$0-9]/,c=j([["a","z"],["A","Z"],"_","$",["0","9"]],!1,!1),W=rt,l="'",u=P("'",!1),p="\\'",h=P("\\'",!1),g=/^[^']/,f=j(["'"],!0,!1),A='"',m=P('"',!1),d='\\"',y=P('\\"',!1),x=/^[^"]/,$=j(['"'],!0,!1),b="`",O=P("`",!1),E="${",X=P("${",!1),v="\\`",Y=P("\\`",!1),tt=/^[^`]/,et=j(["`"],!0,!1);let S=0,w=0;const _=[{line:1,column:1}];let k=0,z=[],C=0;if(void 0!==t.startRule){if(!(t.startRule in e))throw new Error("Can't start parsing from rule \""+t.startRule+'".');r=e[t.startRule]}function rt(){return a.substring(w,S)}function nt(){return F(w,S)}function P(t,e){return{type:"literal",text:t,ignoreCase:e}}function j(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function ot(t){var e=_[t];let r;if(e)return e;for(r=t-1;!_[r];)r--;for(e={line:(e=_[r]).line,column:e.column};r<t;)10===a.charCodeAt(r)?(e.line++,e.column=1):e.column++,r++;return _[t]=e}function F(t,e){var r=ot(t),n=ot(e);return{source:L,start:{offset:t,line:r.line,column:r.column},end:{offset:e,line:n.line,column:n.column}}}function T(t){S<k||(S>k&&(k=S,z=[]),z.push(t))}function st(t,e,r){return new PeggySyntaxError(PeggySyntaxError.buildMessage(t,e),t,e,r)}function at(){let t,e,r,n,o;for(t=S,e=[],r=S,(n=ct())===i&&(n=null),(r=n!==i&&(o=it())!==i?n=[n,o]:(S=r,i))===i&&(r=lt());r!==i;)e.push(r),r=S,(n=ct())===i&&(n=null),(r=n!==i&&(o=it())!==i?n=[n,o]:(S=r,i))===i&&(r=lt());return e!==i&&(w=t,e=U(e)),e}function it(){let t,e,r,n,o;return t=S,e=function(){let t,e,r,n;t=S,Q.test(a.charAt(S))?(e=a.charAt(S),S++):(e=i,0===C&&T(V));if(e!==i){for(r=[],s.test(a.charAt(S))?(n=a.charAt(S),S++):(n=i,0===C&&T(c));n!==i;)r.push(n),s.test(a.charAt(S))?(n=a.charAt(S),S++):(n=i,0===C&&T(c));t=r!==i?(w=t,e=W()):(S=t,i)}else S=t,t=i;return t}(),t=e!==i&&Z()!==i&&(40===a.charCodeAt(S)?(r=B,S++):(r=i,0===C&&T(D)),r!==i)&&Z()!==i&&(n=function(){let t,e,r,n,o,s;t=S,39===a.charCodeAt(S)?(e=l,S++):(e=i,0===C&&T(u));if(e!==i){for(r=[],a.substr(S,2)===p?(n=p,S+=2):(n=i,0===C&&T(h)),n===i&&(g.test(a.charAt(S))?(n=a.charAt(S),S++):(n=i,0===C&&T(f)));n!==i;)r.push(n),a.substr(S,2)===p?(n=p,S+=2):(n=i,0===C&&T(h)),n===i&&(g.test(a.charAt(S))?(n=a.charAt(S),S++):(n=i,0===C&&T(f)));t=r!==i&&(39===a.charCodeAt(S)?(n=l,S++):(n=i,0===C&&T(u)),n!==i)?(w=t,e=R(r)):(S=t,i)}else S=t,t=i;if(t===i){if(t=S,34===a.charCodeAt(S)?(e=A,S++):(e=i,0===C&&T(m)),e!==i){for(r=[],a.substr(S,2)===d?(n=d,S+=2):(n=i,0===C&&T(y)),n===i&&(x.test(a.charAt(S))?(n=a.charAt(S),S++):(n=i,0===C&&T($)));n!==i;)r.push(n),a.substr(S,2)===d?(n=d,S+=2):(n=i,0===C&&T(y)),n===i&&(x.test(a.charAt(S))?(n=a.charAt(S),S++):(n=i,0===C&&T($)));t=r!==i&&(34===a.charCodeAt(S)?(n=A,S++):(n=i,0===C&&T(m)),n!==i)?(w=t,e=M(r)):(S=t,i)}else S=t,t=i;if(t===i)if(t=S,96===a.charCodeAt(S)?(e=b,S++):(e=i,0===C&&T(O)),e!==i){for(r=[],n=S,o=S,C++,a.substr(S,2)===E?(s=E,S+=2):(s=i,0===C&&T(X)),C--,o=s===i?void 0:(S=o,i),n=o!==i&&(a.substr(S,2)===v?(s=v,S+=2):(s=i,0===C&&T(Y)),s===i&&(tt.test(a.charAt(S))?(s=a.charAt(S),S++):(s=i,0===C&&T(et))),s!==i)?o=[o,s]:(S=n,i);n!==i;)r.push(n),n=S,o=S,C++,a.substr(S,2)===E?(s=E,S+=2):(s=i,0===C&&T(X)),C--,o=s===i?void 0:(S=o,i),n=o!==i&&(a.substr(S,2)===v?(s=v,S+=2):(s=i,0===C&&T(Y)),s===i&&(tt.test(a.charAt(S))?(s=a.charAt(S),S++):(s=i,0===C&&T(et))),s!==i)?o=[o,s]:(S=n,i);t=r!==i&&(96===a.charCodeAt(S)?(n=b,S++):(n=i,0===C&&T(O)),n!==i)?(w=t,e=q(r)):(S=t,i)}else S=t,t=i}return t}())!==i&&Z()!==i&&(G.test(a.charAt(S))?(o=a.charAt(S),S++):(o=i,0===C&&T(H)),o!==i)?(w=t,I(e,n)):(S=t,i)}function Z(){let t,e;for(t=[],n.test(a.charAt(S))?(e=a.charAt(S),S++):(e=i,0===C&&T(o));e!==i;)t.push(e),n.test(a.charAt(S))?(e=a.charAt(S),S++):(e=i,0===C&&T(o));return t}function ct(){let t;return J.test(a.charAt(S))?(t=a.charAt(S),S++):(t=i,0===C&&T(K)),t}function lt(){let t;return a.length>S?(t=a.charAt(S),S++):(t=i,0===C&&T(N)),t}if((e=r())!==i&&S===a.length)return e;throw e!==i&&S<a.length&&T({type:"end"}),st(z,k<a.length?a.charAt(k):null,k<a.length?F(k,k+1):F(k,k))}const parse=peg$parse;class Token{constructor(t,e,r,n,o,s){this.name=t,this.key=e,this.text=r,this.line=n,this.column=o,this.source=s}}exports.Token=Token;class Options{constructor(t={}){if(this.names=["$t"],this.loggerOptions={},"names"in t){if(!Array.isArray(t.names)||0<t.names.filter(t=>"string"!=typeof t).length)throw new Error("Options.names must be an array of strings.");this.names=t.names}if("loggerOptions"in t){if(!(t.loggerOptions instanceof Object))throw new Error("Options.loggerOptions must be an object.");this.loggerOptions=t.loggerOptions}}}exports.Options=Options;class Analyzer{constructor(t={}){this.options=t instanceof Options?t:new Options(t),this.logger=new Logger_1.Logger("Analyzer",this.options.loggerOptions)}skip(t,e){this.logger.verbose(`Skipping ${t.text} because: "${t.name}" isn't in the list of allowed names `+(e?`in: ${e}::${t.line}:${t.column}.`:`at: ${t.line}:${t.column}.`))}analyze(t,e){this.logger.log(`Analyzing: ${e||"[inline code]"}.`);var r=[];for(const n of parse(t))-1===this.options.names.indexOf(n.name)?this.skip(n,e):(n.source=e,r.push(n));return r}}exports.Analyzer=Analyzer;