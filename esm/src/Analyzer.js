import{Logger}from"./Logger";function peg$padEnd(t,e,r){return r=r||" ",t.length>e?t:(e-=t.length,t+(r+=r.repeat(e)).slice(0,e))}class PeggySyntaxError extends Error{static buildMessage(t,e){function r(t){return t.charCodeAt(0).toString(16).toUpperCase()}function n(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,t=>"\\x0"+r(t)).replace(/[\x10-\x1F\x7F-\x9F]/g,t=>"\\x"+r(t))}function o(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,t=>"\\x0"+r(t)).replace(/[\x10-\x1F\x7F-\x9F]/g,t=>"\\x"+r(t))}function a(t){switch(t.type){case"literal":return'"'+n(t.text)+'"';case"class":var e=t.parts.map(t=>Array.isArray(t)?o(t[0])+"-"+o(t[1]):o(t));return"["+(t.inverted?"^":"")+e+"]";case"any":return"any character";case"end":return"end of input";case"other":return t.description}}return"Expected "+function(t){var e=t.map(a);let r,n;if(e.sort(),0<e.length){for(r=1,n=1;r<e.length;r++)e[r-1]!==e[r]&&(e[n]=e[r],n++);e.length=n}switch(e.length){case 1:return e[0];case 2:return e[0]+" or "+e[1];default:return e.slice(0,-1).join(", ")+", or "+e[e.length-1]}}(t)+" but "+((t=e)?'"'+n(t)+'"':"end of input")+" found."}constructor(t,e,r,n){super(),this.message=t,this.expected=e,this.found=r,this.location=n,this.name="PeggySyntaxError","function"==typeof Object.setPrototypeOf?Object.setPrototypeOf(this,PeggySyntaxError.prototype):this.__proto__=PeggySyntaxError.prototype,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,PeggySyntaxError)}format(r){let n="Error: "+this.message;if(this.location){let t=null,e;for(e=0;e<r.length;e++)if(r[e].grammarSource===this.location.source){t=r[e].text.split(/\r\n|\n|\r/g);break}var o,a,s,c=this.location.start,i=this.location.source+":"+c.line+":"+c.column;t?(s=this.location.end,o=peg$padEnd("",c.line.toString().length," "),a=t[c.line-1],s=c.line===s.line?s.column:a.length+1,n+="\n --\x3e "+i+"\n"+o+" |\n"+c.line+" | "+a+"\n"+o+" | "+peg$padEnd("",c.column-1," ")+peg$padEnd("",s-c.column,"^")):n+="\n at "+i}return n}}function peg$parse(s,t){const c={},R=(t=void 0!==t?t:{}).grammarSource;var e={Start:st};let r=st;function L(t){return t.map(t=>"\\'"===t?t[1]:t).join("")}function M(t){return t.map(t=>'\\"'===t?t[1]:t).join("")}function U(t){return t.map(([,t])=>"\\`"===t?t[1]:t).join("")}const q=function(t){return t.flat().filter(t=>t instanceof Token)},B="(",D=P("(",!1),G=/^[,)]/,H=F([",",")"],!1,!1),I=function(t,e){return new Token(t,e,rt(),nt().start.line,nt().start.column)},n=/^[ \t\r\n]/,o=F([" ","\t","\r","\n"],!1,!1),J=/^[^a-zA-Z_$]/,K=F([["a","z"],["A","Z"],"_","$"],!0,!1),N={type:"any"},Q=/^[a-zA-Z_$]/,V=F([["a","z"],["A","Z"],"_","$"],!1,!1),a=/^[a-zA-Z_$0-9]/,i=F([["a","z"],["A","Z"],"_","$",["0","9"]],!1,!1),W=rt,l="'",u=P("'",!1),h="\\'",p=P("\\'",!1),g=/^[^']/,f=F(["'"],!0,!1),A='"',m=P('"',!1),d='\\"',y=P('\\"',!1),x=/^[^"]/,$=F(['"'],!0,!1),b="`",E=P("`",!1),S="${",X=P("${",!1),v="\\`",Y=P("\\`",!1),tt=/^[^`]/,et=F(["`"],!0,!1);let O=0,C=0;const k=[{line:1,column:1}];let z=0,w=[],_=0;if(void 0!==t.startRule){if(!(t.startRule in e))throw new Error("Can't start parsing from rule \""+t.startRule+'".');r=e[t.startRule]}function rt(){return s.substring(C,O)}function nt(){return j(C,O)}function P(t,e){return{type:"literal",text:t,ignoreCase:e}}function F(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function ot(t){var e=k[t];let r;if(e)return e;for(r=t-1;!k[r];)r--;for(e={line:(e=k[r]).line,column:e.column};r<t;)10===s.charCodeAt(r)?(e.line++,e.column=1):e.column++,r++;return k[t]=e}function j(t,e){var r=ot(t),n=ot(e);return{source:R,start:{offset:t,line:r.line,column:r.column},end:{offset:e,line:n.line,column:n.column}}}function T(t){O<z||(O>z&&(z=O,w=[]),w.push(t))}function at(t,e,r){return new PeggySyntaxError(PeggySyntaxError.buildMessage(t,e),t,e,r)}function st(){let t,e,r,n,o;for(t=O,e=[],r=O,(n=it())===c&&(n=null),(r=n!==c&&(o=ct())!==c?n=[n,o]:(O=r,c))===c&&(r=lt());r!==c;)e.push(r),r=O,(n=it())===c&&(n=null),(r=n!==c&&(o=ct())!==c?n=[n,o]:(O=r,c))===c&&(r=lt());return e!==c&&(C=t,e=q(e)),e}function ct(){let t,e,r,n,o;return t=O,e=function(){let t,e,r,n;t=O,Q.test(s.charAt(O))?(e=s.charAt(O),O++):(e=c,0===_&&T(V));if(e!==c){for(r=[],a.test(s.charAt(O))?(n=s.charAt(O),O++):(n=c,0===_&&T(i));n!==c;)r.push(n),a.test(s.charAt(O))?(n=s.charAt(O),O++):(n=c,0===_&&T(i));t=r!==c?(C=t,e=W()):(O=t,c)}else O=t,t=c;return t}(),t=e!==c&&Z()!==c&&(40===s.charCodeAt(O)?(r=B,O++):(r=c,0===_&&T(D)),r!==c)&&Z()!==c&&(n=function(){let t,e,r,n,o,a;t=O,39===s.charCodeAt(O)?(e=l,O++):(e=c,0===_&&T(u));if(e!==c){for(r=[],s.substr(O,2)===h?(n=h,O+=2):(n=c,0===_&&T(p)),n===c&&(g.test(s.charAt(O))?(n=s.charAt(O),O++):(n=c,0===_&&T(f)));n!==c;)r.push(n),s.substr(O,2)===h?(n=h,O+=2):(n=c,0===_&&T(p)),n===c&&(g.test(s.charAt(O))?(n=s.charAt(O),O++):(n=c,0===_&&T(f)));t=r!==c&&(39===s.charCodeAt(O)?(n=l,O++):(n=c,0===_&&T(u)),n!==c)?(C=t,e=L(r)):(O=t,c)}else O=t,t=c;if(t===c){if(t=O,34===s.charCodeAt(O)?(e=A,O++):(e=c,0===_&&T(m)),e!==c){for(r=[],s.substr(O,2)===d?(n=d,O+=2):(n=c,0===_&&T(y)),n===c&&(x.test(s.charAt(O))?(n=s.charAt(O),O++):(n=c,0===_&&T($)));n!==c;)r.push(n),s.substr(O,2)===d?(n=d,O+=2):(n=c,0===_&&T(y)),n===c&&(x.test(s.charAt(O))?(n=s.charAt(O),O++):(n=c,0===_&&T($)));t=r!==c&&(34===s.charCodeAt(O)?(n=A,O++):(n=c,0===_&&T(m)),n!==c)?(C=t,e=M(r)):(O=t,c)}else O=t,t=c;if(t===c)if(t=O,96===s.charCodeAt(O)?(e=b,O++):(e=c,0===_&&T(E)),e!==c){for(r=[],n=O,o=O,_++,s.substr(O,2)===S?(a=S,O+=2):(a=c,0===_&&T(X)),_--,o=a===c?void 0:(O=o,c),n=o!==c&&(s.substr(O,2)===v?(a=v,O+=2):(a=c,0===_&&T(Y)),a===c&&(tt.test(s.charAt(O))?(a=s.charAt(O),O++):(a=c,0===_&&T(et))),a!==c)?o=[o,a]:(O=n,c);n!==c;)r.push(n),n=O,o=O,_++,s.substr(O,2)===S?(a=S,O+=2):(a=c,0===_&&T(X)),_--,o=a===c?void 0:(O=o,c),n=o!==c&&(s.substr(O,2)===v?(a=v,O+=2):(a=c,0===_&&T(Y)),a===c&&(tt.test(s.charAt(O))?(a=s.charAt(O),O++):(a=c,0===_&&T(et))),a!==c)?o=[o,a]:(O=n,c);t=r!==c&&(96===s.charCodeAt(O)?(n=b,O++):(n=c,0===_&&T(E)),n!==c)?(C=t,e=U(r)):(O=t,c)}else O=t,t=c}return t}())!==c&&Z()!==c&&(G.test(s.charAt(O))?(o=s.charAt(O),O++):(o=c,0===_&&T(H)),o!==c)?(C=t,I(e,n)):(O=t,c)}function Z(){let t,e;for(t=[],n.test(s.charAt(O))?(e=s.charAt(O),O++):(e=c,0===_&&T(o));e!==c;)t.push(e),n.test(s.charAt(O))?(e=s.charAt(O),O++):(e=c,0===_&&T(o));return t}function it(){let t;return J.test(s.charAt(O))?(t=s.charAt(O),O++):(t=c,0===_&&T(K)),t}function lt(){let t;return s.length>O?(t=s.charAt(O),O++):(t=c,0===_&&T(N)),t}if((e=r())!==c&&O===s.length)return e;throw e!==c&&O<s.length&&T({type:"end"}),at(w,z<s.length?s.charAt(z):null,z<s.length?j(z,z+1):j(z,z))}const parse=peg$parse;class Token{constructor(t,e,r,n,o,a){this.name=t,this.key=e,this.text=r,this.line=n,this.column=o,this.source=a}}class Options{constructor(t={}){this.names=["$t"],this.loggerOptions={},"names"in t&&(this.names=t.names),"loggerOptions"in t&&(this.loggerOptions=t.loggerOptions)}}class Analyzer{constructor(t={}){this.options=t instanceof Options?t:new Options(t),this.logger=new Logger("Analyzer",this.options.loggerOptions)}skip(t,e){this.logger.verbose(`Skipping ${t.text} because: "${t.name}" isn't in the list of allowed names `+(e?`in: ${e}::${t.line}:${t.column}.`:`at: ${t.line}:${t.column}.`))}analyze(t,e){this.logger.log(`Analyzing: ${e||"[inline code]"}.`);var r=[];for(const n of parse(t))-1===this.options.names.indexOf(n.name)?this.skip(n,e):(n.source=e,r.push(n));return r}}export{Token,Options,Analyzer};