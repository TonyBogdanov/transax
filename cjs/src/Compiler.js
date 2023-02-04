"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Compiler=exports.Context=exports.Options=exports.ArrayAccessToken=exports.ObjectAccessToken=exports.ExpressionToken=exports.LiteralToken=exports.IdentifierToken=exports.TextToken=exports.Token=void 0;const Logger_1=require("./Logger");function peg$padEnd(t,e,r){return r=r||" ",t.length>e?t:(e-=t.length,t+(r+=r.repeat(e)).slice(0,e))}class PeggySyntaxError extends Error{static buildMessage(t,e){function r(t){return t.charCodeAt(0).toString(16).toUpperCase()}function n(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,t=>"\\x0"+r(t)).replace(/[\x10-\x1F\x7F-\x9F]/g,t=>"\\x"+r(t))}function o(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,t=>"\\x0"+r(t)).replace(/[\x10-\x1F\x7F-\x9F]/g,t=>"\\x"+r(t))}function s(t){switch(t.type){case"literal":return'"'+n(t.text)+'"';case"class":var e=t.parts.map(t=>Array.isArray(t)?o(t[0])+"-"+o(t[1]):o(t));return"["+(t.inverted?"^":"")+e+"]";case"any":return"any character";case"end":return"end of input";case"other":return t.description}}return"Expected "+function(t){var e=t.map(s);let r,n;if(e.sort(),0<e.length){for(r=1,n=1;r<e.length;r++)e[r-1]!==e[r]&&(e[n]=e[r],n++);e.length=n}switch(e.length){case 1:return e[0];case 2:return e[0]+" or "+e[1];default:return e.slice(0,-1).join(", ")+", or "+e[e.length-1]}}(t)+" but "+((t=e)?'"'+n(t)+'"':"end of input")+" found."}constructor(t,e,r,n){super(),this.message=t,this.expected=e,this.found=r,this.location=n,this.name="PeggySyntaxError","function"==typeof Object.setPrototypeOf?Object.setPrototypeOf(this,PeggySyntaxError.prototype):this.__proto__=PeggySyntaxError.prototype,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,PeggySyntaxError)}format(r){let n="Error: "+this.message;if(this.location){let t=null,e;for(e=0;e<r.length;e++)if(r[e].grammarSource===this.location.source){t=r[e].text.split(/\r\n|\n|\r/g);break}var o,s,i,c=this.location.start,a=this.location.source+":"+c.line+":"+c.column;t?(i=this.location.end,o=peg$padEnd("",c.line.toString().length," "),s=t[c.line-1],i=c.line===i.line?i.column:s.length+1,n+="\n --\x3e "+a+"\n"+o+" |\n"+c.line+" | "+s+"\n"+o+" | "+peg$padEnd("",c.column-1," ")+peg$padEnd("",i-c.column,"^")):n+="\n at "+a}return n}}function peg$parse(a,t){const l={},I=(t=void 0!==t?t:{}).grammarSource;var e={Start:It};let r=It;function q(t){return new LiteralToken(t,w(),$().start.line,$().start.column)}function N(t,e){return new ExpressionToken(t,e,w(),$().start.line,$().start.column)}function R(t){return[t[0],...t[1]].join("")}const o=function(t){return t},u="",Z=function(){return[]},M=function(t){return new TextToken(w(),$().start.line,$().start.column)},s="{{",U=L("{{",!1),i="}}",W=L("}}",!1),G="@",J=L("@",!1),B=function(t,e){return new IdentifierToken(e,"@"===t,w(),$().start.line,$().start.column)},h=".",p=L(".",!1),D=function(t){return new ObjectAccessToken(t,w(),$().start.line,$().start.column)},H="[",K=L("[",!1),Q="]",V=L("]",!1),X=function(t){return new ArrayAccessToken(t,w(),$().start.line,$().start.column)},n=/^[ \t\r\n]/,c=_([" ","\t","\r","\n"],!1,!1),Y={type:"any"},f="null",tt=L("null",!1),g=function(){return null},et="NULL",rt=L("NULL",!1),nt="0",ot=L("0",!1),st=function(){return 0},A="-",x=L("-",!1),it=/^[1-9]/,ct=_([["1","9"]],!1,!1),d=/^[0-9]/,m=_([["0","9"]],!1,!1),at=function(t){return parseInt([t[0],t[1],...t[2]].join(""),10)},lt=function(t){return parseFloat([t[0],t[1],t[2].join(""),".",t[4].join("")].join(""))},ut=function(t){return parseFloat([...t.slice(0,3),...t[3]].join(""))},ht="'",pt=L("'",!1),T="\\'",ft=L("\\'",!1),gt=/^[^']/,At=_(["'"],!0,!1),xt=function(t){return t.map(t=>"\\'"===t?t[1]:t).join("")},dt='"',mt=L('"',!1),k='\\"',Tt=L('\\"',!1),kt=/^[^"]/,yt=_(['"'],!0,!1),bt=function(t){return t.map(t=>'\\"'===t?t[1]:t).join("")},Ct="`",Ot=L("`",!1),y="${",jt=L("${",!1),b="\\`",vt=L("\\`",!1),Et=/^[^`]/,St=_(["`"],!0,!1),wt=function(t){return t.map(([,t])=>"\\`"===t?t[1]:t).join("")},$t=/^[a-zA-Z_$]/,Lt=_([["a","z"],["A","Z"],"_","$"],!1,!1),_t=/^[a-zA-Z0-9_$]/,Pt=_([["a","z"],["A","Z"],["0","9"],"_","$"],!1,!1);let C=0,O=0;const j=[{line:1,column:1}];let v=0,E=[],S=0;if(void 0!==t.startRule){if(!(t.startRule in e))throw new Error("Can't start parsing from rule \""+t.startRule+'".');r=e[t.startRule]}function w(){return a.substring(O,C)}function $(){return P(O,C)}function L(t,e){return{type:"literal",text:t,ignoreCase:e}}function _(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function Ft(t){var e=j[t];let r;if(e)return e;for(r=t-1;!j[r];)r--;for(e={line:(e=j[r]).line,column:e.column};r<t;)10===a.charCodeAt(r)?(e.line++,e.column=1):e.column++,r++;return j[t]=e}function P(t,e){var r=Ft(t),n=Ft(e);return{source:I,start:{offset:t,line:r.line,column:r.column},end:{offset:e,line:n.line,column:n.column}}}function F(t){C<v||(C>v&&(v=C,E=[]),E.push(t))}function zt(t,e,r){return new PeggySyntaxError(PeggySyntaxError.buildMessage(t,e),t,e,r)}function It(){let t,e,r;if(t=C,e=[],(r=(r=Nt())===l?qt():r)!==l)for(;r!==l;)e.push(r),(r=Nt())===l&&(r=qt());else e=l;return e!==l&&(O=t,e=o(e)),(t=e)===l&&(t=C,(e=u)!==l&&(O=t,e=Z()),t=e),t}function qt(){let t,e;return t=C,(e=function(){let t,e;t=C,a.length>C?(e=a.charAt(C),C++):(e=l,0===S&&F(Y));e!==l&&(O=t,e=o(e));return t=e}())!==l&&(O=t,e=M(e)),e}function Nt(){let t,e,r,n;return t=C,a.substr(C,2)===s?(e=s,C+=2):(e=l,0===S&&F(U)),t=e!==l&&z()!==l&&(r=(r=Rt())===l?Zt():r)!==l&&z()!==l&&(a.substr(C,2)===i?(n=i,C+=2):(n=l,0===S&&F(W)),n!==l)?(O=t,e=o(r)):(C=t,l)}function Rt(){let t,e;return t=C,(e=(e=function(){let t,e;t=C,a.substr(C,4)===f?(e=f,C+=4):(e=l,0===S&&F(tt));e!==l&&(O=t,e=g());(t=e)===l&&(t=C,a.substr(C,4)===et?(e=et,C+=4):(e=l,0===S&&F(rt)),e!==l&&(O=t,e=g()),t=e);return t}())===l&&(e=function(){let t,e,r,n,o,s;t=C,39===a.charCodeAt(C)?(e=ht,C++):(e=l,0===S&&F(pt));if(e!==l){for(r=[],a.substr(C,2)===T?(n=T,C+=2):(n=l,0===S&&F(ft)),n===l&&(gt.test(a.charAt(C))?(n=a.charAt(C),C++):(n=l,0===S&&F(At)));n!==l;)r.push(n),a.substr(C,2)===T?(n=T,C+=2):(n=l,0===S&&F(ft)),n===l&&(gt.test(a.charAt(C))?(n=a.charAt(C),C++):(n=l,0===S&&F(At)));t=r!==l&&(39===a.charCodeAt(C)?(n=ht,C++):(n=l,0===S&&F(pt)),n!==l)?(O=t,e=xt(r)):(C=t,l)}else C=t,t=l;if(t===l){if(t=C,34===a.charCodeAt(C)?(e=dt,C++):(e=l,0===S&&F(mt)),e!==l){for(r=[],a.substr(C,2)===k?(n=k,C+=2):(n=l,0===S&&F(Tt)),n===l&&(kt.test(a.charAt(C))?(n=a.charAt(C),C++):(n=l,0===S&&F(yt)));n!==l;)r.push(n),a.substr(C,2)===k?(n=k,C+=2):(n=l,0===S&&F(Tt)),n===l&&(kt.test(a.charAt(C))?(n=a.charAt(C),C++):(n=l,0===S&&F(yt)));t=r!==l&&(34===a.charCodeAt(C)?(n=dt,C++):(n=l,0===S&&F(mt)),n!==l)?(O=t,e=bt(r)):(C=t,l)}else C=t,t=l;if(t===l)if(t=C,96===a.charCodeAt(C)?(e=Ct,C++):(e=l,0===S&&F(Ot)),e!==l){for(r=[],n=C,o=C,S++,a.substr(C,2)===y?(s=y,C+=2):(s=l,0===S&&F(jt)),S--,o=s===l?void 0:(C=o,l),n=o!==l&&(a.substr(C,2)===b?(s=b,C+=2):(s=l,0===S&&F(vt)),s===l&&(Et.test(a.charAt(C))?(s=a.charAt(C),C++):(s=l,0===S&&F(St))),s!==l)?o=[o,s]:(C=n,l);n!==l;)r.push(n),n=C,o=C,S++,a.substr(C,2)===y?(s=y,C+=2):(s=l,0===S&&F(jt)),S--,o=s===l?void 0:(C=o,l),n=o!==l&&(a.substr(C,2)===b?(s=b,C+=2):(s=l,0===S&&F(vt)),s===l&&(Et.test(a.charAt(C))?(s=a.charAt(C),C++):(s=l,0===S&&F(St))),s!==l)?o=[o,s]:(C=n,l);t=r!==l&&(96===a.charCodeAt(C)?(n=Ct,C++):(n=l,0===S&&F(Ot)),n!==l)?(O=t,e=wt(r)):(C=t,l)}else C=t,t=l}return t}())===l&&(e=function(){let t,e,r,n,o,s,i,c;t=C,e=C,45===a.charCodeAt(C)?(r=A,C++):(r=l,0===S&&F(x));r===l&&(r=null);if(r!==l)if(it.test(a.charAt(C))?(n=a.charAt(C),C++):(n=l,0===S&&F(ct)),n!==l){for(o=[],d.test(a.charAt(C))?(s=a.charAt(C),C++):(s=l,0===S&&F(m));s!==l;)o.push(s),d.test(a.charAt(C))?(s=a.charAt(C),C++):(s=l,0===S&&F(m));if(o!==l)if(46===a.charCodeAt(C)?(s=h,C++):(s=l,0===S&&F(p)),s!==l){if(i=[],d.test(a.charAt(C))?(c=a.charAt(C),C++):(c=l,0===S&&F(m)),c!==l)for(;c!==l;)i.push(c),d.test(a.charAt(C))?(c=a.charAt(C),C++):(c=l,0===S&&F(m));else i=l;e=i!==l?r=[r,n,o,s,i]:(C=e,l)}else C=e,e=l;else C=e,e=l}else C=e,e=l;else C=e,e=l;e!==l&&(O=t,e=lt(e));if((t=e)===l){if(t=C,e=C,45===a.charCodeAt(C)?(r=A,C++):(r=l,0===S&&F(x)),(r=r===l?null:r)!==l)if(48===a.charCodeAt(C)?(n=nt,C++):(n=l,0===S&&F(ot)),(n=n===l?u:n)!==l)if(46===a.charCodeAt(C)?(o=h,C++):(o=l,0===S&&F(p)),o!==l){if(s=[],d.test(a.charAt(C))?(i=a.charAt(C),C++):(i=l,0===S&&F(m)),i!==l)for(;i!==l;)s.push(i),d.test(a.charAt(C))?(i=a.charAt(C),C++):(i=l,0===S&&F(m));else s=l;e=s!==l?r=[r,n,o,s]:(C=e,l)}else C=e,e=l;else C=e,e=l;else C=e,e=l;e!==l&&(O=t,e=ut(e)),t=e}return t}())===l?function(){let t,e,r,n,o,s;t=C,48===a.charCodeAt(C)?(e=nt,C++):(e=l,0===S&&F(ot));e!==l&&(O=t,e=st());if((t=e)===l){if(t=C,e=C,45===a.charCodeAt(C)?(r=A,C++):(r=l,0===S&&F(x)),(r=r===l?null:r)!==l)if(it.test(a.charAt(C))?(n=a.charAt(C),C++):(n=l,0===S&&F(ct)),n!==l){for(o=[],d.test(a.charAt(C))?(s=a.charAt(C),C++):(s=l,0===S&&F(m));s!==l;)o.push(s),d.test(a.charAt(C))?(s=a.charAt(C),C++):(s=l,0===S&&F(m));e=o!==l?r=[r,n,o]:(C=e,l)}else C=e,e=l;else C=e,e=l;e!==l&&(O=t,e=at(e)),t=e}return t}():e)!==l&&(O=t,e=q(e)),e}function Zt(){let t,e,r,n;if(t=C,(e=function(){let t,e,r;t=C,64===a.charCodeAt(C)?(e=G,C++):(e=l,0===S&&F(J));e===l&&(e=null);t=e!==l&&(r=Wt(),r!==l)?(O=t,e=B(e,r)):(C=t,l);return t}())!==l){for(r=[],(n=Mt())===l&&(n=Ut());n!==l;)r.push(n),(n=Mt())===l&&(n=Ut());t=r!==l?(O=t,N(e,r)):(C=t,l)}else C=t,t=l;return t}function Mt(){let t,e,r,n;return t=C,e=z(),t=e!==l&&(46===a.charCodeAt(C)?(r=h,C++):(r=l,0===S&&F(p)),r!==l)&&z()!==l&&(n=Wt())!==l?(O=t,D(n)):(C=t,l)}function Ut(){let t,e,r,n,o;return t=C,e=z(),t=e!==l&&(91===a.charCodeAt(C)?(r=H,C++):(r=l,0===S&&F(K)),r!==l)&&z()!==l&&(n=(n=Rt())===l?Zt():n)!==l&&z()!==l&&(93===a.charCodeAt(C)?(o=Q,C++):(o=l,0===S&&F(V)),o!==l)?(O=t,X(n)):(C=t,l)}function z(){let t,e;for(t=[],n.test(a.charAt(C))?(e=a.charAt(C),C++):(e=l,0===S&&F(c));e!==l;)t.push(e),n.test(a.charAt(C))?(e=a.charAt(C),C++):(e=l,0===S&&F(c));return t}function Wt(){let t,e,r,n,o;if(t=C,e=C,$t.test(a.charAt(C))?(r=a.charAt(C),C++):(r=l,0===S&&F(Lt)),r!==l){for(n=[],_t.test(a.charAt(C))?(o=a.charAt(C),C++):(o=l,0===S&&F(Pt));o!==l;)n.push(o),_t.test(a.charAt(C))?(o=a.charAt(C),C++):(o=l,0===S&&F(Pt));e=n!==l?r=[r,n]:(C=e,l)}else C=e,e=l;return e!==l&&(O=t,e=R(e)),e}if((e=r())!==l&&C===a.length)return e;throw e!==l&&C<a.length&&F({type:"end"}),zt(E,v<a.length?a.charAt(v):null,v<a.length?P(v,v+1):P(v,v))}const parse=peg$parse;class Token{constructor(t,e,r){this.text=t,this.line=e,this.column=r}}class TextToken extends(exports.Token=Token){compile(t){return JSON.stringify(this.text)}}exports.TextToken=TextToken;class IdentifierToken extends Token{constructor(t,e,r,n,o){super(r,n,o),this.name=t,this.global=e}compile(t){return this.global?t.requireGlobal(this.name):t.requireParameter(this.name),this.name}}exports.IdentifierToken=IdentifierToken;class LiteralToken extends Token{constructor(t,e,r,n){super(e,r,n),this.value=t}compile(t){return null===this.value?"null":JSON.stringify(this.value)}}exports.LiteralToken=LiteralToken;class ExpressionToken extends Token{constructor(t,e,r,n,o){super(r,n,o),this.identifier=t,this.resolvers=e}compile(e){return this.identifier.compile(e)+this.resolvers.map(t=>t.compile(e)).join("")}}exports.ExpressionToken=ExpressionToken;class ObjectAccessToken extends Token{constructor(t,e,r,n){super(e,r,n),this.key=t}compile(t){return"."+this.key}}exports.ObjectAccessToken=ObjectAccessToken;class ArrayAccessToken extends Token{constructor(t,e,r,n){super(e,r,n),this.expr=t}compile(t){return"["+this.expr.compile(t)+"]"}}exports.ArrayAccessToken=ArrayAccessToken;class Options{constructor(t={}){this.loggerOptions={},"loggerOptions"in t&&(this.loggerOptions=t.loggerOptions)}}exports.Options=Options;class Context{constructor(){this.parameters=[],this.globals=[]}requireParameter(t){return-1<this.parameters.indexOf(t)||this.parameters.push(t),this}requireGlobal(t){return-1<this.globals.indexOf(t)||this.globals.push(t),this}}exports.Context=Context;class Compiler{constructor(t={}){this.options=t instanceof Options?t:new Options(t),this.logger=new Logger_1.Logger("Compiler",this.options.loggerOptions)}tokenize(t){var e=[];for(const r of parse(t))0<e.length&&r instanceof TextToken&&e[e.length-1]instanceof TextToken?e[e.length-1].text+=r.text:e.push(r);return e}compile(t){var e=new Context,r=['""'];for(const s of this.tokenize(t)){var n=s.compile(e);""!==n&&r.push(n)}for(let t=0;t<r.length;t++)"null"===r[t]&&(r[t]='""');for(let t=1;t<r.length;t++)r[t-1].startsWith('"')&&r[t-1].endsWith('"')&&r[t].startsWith('"')&&(r[t-1]=r[t-1].slice(0,-1)+r[t].slice(1),r.splice(t,1),t--);let o="";return 0<e.parameters.length&&(o+=`{${e.parameters.join(",")}}`),0<e.globals.length&&(0===e.parameters.length&&(o+="_"),o+=`,{${e.globals.join(",")}}`),`(${o})=>`+r.join("+")}}exports.Compiler=Compiler;