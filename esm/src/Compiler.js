import{Logger}from"./Logger";function peg$padEnd(t,e,r){return r=r||" ",t.length>e?t:(e-=t.length,t+(r+=r.repeat(e)).slice(0,e))}class PeggySyntaxError extends Error{static buildMessage(t,e){function r(t){return t.charCodeAt(0).toString(16).toUpperCase()}function n(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,t=>"\\x0"+r(t)).replace(/[\x10-\x1F\x7F-\x9F]/g,t=>"\\x"+r(t))}function o(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,t=>"\\x0"+r(t)).replace(/[\x10-\x1F\x7F-\x9F]/g,t=>"\\x"+r(t))}function s(t){switch(t.type){case"literal":return'"'+n(t.text)+'"';case"class":var e=t.parts.map(t=>Array.isArray(t)?o(t[0])+"-"+o(t[1]):o(t));return"["+(t.inverted?"^":"")+e+"]";case"any":return"any character";case"end":return"end of input";case"other":return t.description}}return"Expected "+function(t){var e=t.map(s);let r,n;if(e.sort(),0<e.length){for(r=1,n=1;r<e.length;r++)e[r-1]!==e[r]&&(e[n]=e[r],n++);e.length=n}switch(e.length){case 1:return e[0];case 2:return e[0]+" or "+e[1];default:return e.slice(0,-1).join(", ")+", or "+e[e.length-1]}}(t)+" but "+((t=e)?'"'+n(t)+'"':"end of input")+" found."}constructor(t,e,r,n){super(),this.message=t,this.expected=e,this.found=r,this.location=n,this.name="PeggySyntaxError","function"==typeof Object.setPrototypeOf?Object.setPrototypeOf(this,PeggySyntaxError.prototype):this.__proto__=PeggySyntaxError.prototype,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,PeggySyntaxError)}format(r){let n="Error: "+this.message;if(this.location){let t=null,e;for(e=0;e<r.length;e++)if(r[e].grammarSource===this.location.source){t=r[e].text.split(/\r\n|\n|\r/g);break}var o,s,i,c=this.location.start,a=this.location.source+":"+c.line+":"+c.column;t?(i=this.location.end,o=peg$padEnd("",c.line.toString().length," "),s=t[c.line-1],i=c.line===i.line?i.column:s.length+1,n+="\n --\x3e "+a+"\n"+o+" |\n"+c.line+" | "+s+"\n"+o+" | "+peg$padEnd("",c.column-1," ")+peg$padEnd("",i-c.column,"^")):n+="\n at "+a}return n}}function peg$parse(a,t){const l={},q=(t=void 0!==t?t:{}).grammarSource;var e={Start:qt};let r=qt;function I(t){return new LiteralToken(t,w(),$().start.line,$().start.column)}function N(t,e){return new ExpressionToken(t,e,w(),$().start.line,$().start.column)}function R(t){return[t[0],...t[1]].join("")}const o=function(t){return t},u="",Z=function(){return[]},U=function(t){return new TextToken(w(),$().start.line,$().start.column)},s="{{",W=P("{{",!1),i="}}",G=P("}}",!1),J="@",M=P("@",!1),B=function(t,e){return new IdentifierToken(e,"@"===t,w(),$().start.line,$().start.column)},h=".",p=P(".",!1),D=function(t){return new ObjectAccessToken(t,w(),$().start.line,$().start.column)},H="[",K=P("[",!1),Q="]",V=P("]",!1),X=function(t){return new ArrayAccessToken(t,w(),$().start.line,$().start.column)},n=/^[ \t\r\n]/,c=F([" ","\t","\r","\n"],!1,!1),Y={type:"any"},f="null",tt=P("null",!1),g=function(){return null},et="NULL",rt=P("NULL",!1),nt="0",ot=P("0",!1),st=function(){return 0},A="-",m=P("-",!1),it=/^[1-9]/,ct=F([["1","9"]],!1,!1),d=/^[0-9]/,x=F([["0","9"]],!1,!1),at=function(t){return parseInt([t[0],t[1],...t[2]].join(""),10)},lt=function(t){return parseFloat([t[0],t[1],t[2].join(""),".",t[4].join("")].join(""))},ut=function(t){return parseFloat([...t.slice(0,3),...t[3]].join(""))},ht="'",pt=P("'",!1),y="\\'",ft=P("\\'",!1),gt=/^[^']/,At=F(["'"],!0,!1),mt=function(t){return t.map(t=>"\\'"===t?t[1]:t).join("")},dt='"',xt=P('"',!1),k='\\"',yt=P('\\"',!1),kt=/^[^"]/,Tt=F(['"'],!0,!1),bt=function(t){return t.map(t=>'\\"'===t?t[1]:t).join("")},Ct="`",vt=P("`",!1),T="${",Et=P("${",!1),b="\\`",Ot=P("\\`",!1),jt=/^[^`]/,St=F(["`"],!0,!1),wt=function(t){return t.map(([,t])=>"\\`"===t?t[1]:t).join("")},$t=/^[a-zA-Z_$]/,Pt=F([["a","z"],["A","Z"],"_","$"],!1,!1),Ft=/^[a-zA-Z0-9_$]/,Lt=F([["a","z"],["A","Z"],["0","9"],"_","$"],!1,!1);let C=0,v=0;const E=[{line:1,column:1}];let O=0,j=[],S=0;if(void 0!==t.startRule){if(!(t.startRule in e))throw new Error("Can't start parsing from rule \""+t.startRule+'".');r=e[t.startRule]}function w(){return a.substring(v,C)}function $(){return L(v,C)}function P(t,e){return{type:"literal",text:t,ignoreCase:e}}function F(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function _t(t){var e=E[t];let r;if(e)return e;for(r=t-1;!E[r];)r--;for(e={line:(e=E[r]).line,column:e.column};r<t;)10===a.charCodeAt(r)?(e.line++,e.column=1):e.column++,r++;return E[t]=e}function L(t,e){var r=_t(t),n=_t(e);return{source:q,start:{offset:t,line:r.line,column:r.column},end:{offset:e,line:n.line,column:n.column}}}function _(t){C<O||(C>O&&(O=C,j=[]),j.push(t))}function zt(t,e,r){return new PeggySyntaxError(PeggySyntaxError.buildMessage(t,e),t,e,r)}function qt(){let t,e,r;if(t=C,e=[],(r=(r=Nt())===l?It():r)!==l)for(;r!==l;)e.push(r),(r=Nt())===l&&(r=It());else e=l;return e!==l&&(v=t,e=o(e)),(t=e)===l&&(t=C,(e=u)!==l&&(v=t,e=Z()),t=e),t}function It(){let t,e;return t=C,(e=function(){let t,e;t=C,a.length>C?(e=a.charAt(C),C++):(e=l,0===S&&_(Y));e!==l&&(v=t,e=o(e));return t=e}())!==l&&(v=t,e=U(e)),e}function Nt(){let t,e,r,n;return t=C,a.substr(C,2)===s?(e=s,C+=2):(e=l,0===S&&_(W)),t=e!==l&&z()!==l&&(r=(r=Rt())===l?Zt():r)!==l&&z()!==l&&(a.substr(C,2)===i?(n=i,C+=2):(n=l,0===S&&_(G)),n!==l)?(v=t,e=o(r)):(C=t,l)}function Rt(){let t,e;return t=C,(e=(e=function(){let t,e;t=C,a.substr(C,4)===f?(e=f,C+=4):(e=l,0===S&&_(tt));e!==l&&(v=t,e=g());(t=e)===l&&(t=C,a.substr(C,4)===et?(e=et,C+=4):(e=l,0===S&&_(rt)),e!==l&&(v=t,e=g()),t=e);return t}())===l&&(e=function(){let t,e,r,n,o,s;t=C,39===a.charCodeAt(C)?(e=ht,C++):(e=l,0===S&&_(pt));if(e!==l){for(r=[],a.substr(C,2)===y?(n=y,C+=2):(n=l,0===S&&_(ft)),n===l&&(gt.test(a.charAt(C))?(n=a.charAt(C),C++):(n=l,0===S&&_(At)));n!==l;)r.push(n),a.substr(C,2)===y?(n=y,C+=2):(n=l,0===S&&_(ft)),n===l&&(gt.test(a.charAt(C))?(n=a.charAt(C),C++):(n=l,0===S&&_(At)));t=r!==l&&(39===a.charCodeAt(C)?(n=ht,C++):(n=l,0===S&&_(pt)),n!==l)?(v=t,e=mt(r)):(C=t,l)}else C=t,t=l;if(t===l){if(t=C,34===a.charCodeAt(C)?(e=dt,C++):(e=l,0===S&&_(xt)),e!==l){for(r=[],a.substr(C,2)===k?(n=k,C+=2):(n=l,0===S&&_(yt)),n===l&&(kt.test(a.charAt(C))?(n=a.charAt(C),C++):(n=l,0===S&&_(Tt)));n!==l;)r.push(n),a.substr(C,2)===k?(n=k,C+=2):(n=l,0===S&&_(yt)),n===l&&(kt.test(a.charAt(C))?(n=a.charAt(C),C++):(n=l,0===S&&_(Tt)));t=r!==l&&(34===a.charCodeAt(C)?(n=dt,C++):(n=l,0===S&&_(xt)),n!==l)?(v=t,e=bt(r)):(C=t,l)}else C=t,t=l;if(t===l)if(t=C,96===a.charCodeAt(C)?(e=Ct,C++):(e=l,0===S&&_(vt)),e!==l){for(r=[],n=C,o=C,S++,a.substr(C,2)===T?(s=T,C+=2):(s=l,0===S&&_(Et)),S--,o=s===l?void 0:(C=o,l),n=o!==l&&(a.substr(C,2)===b?(s=b,C+=2):(s=l,0===S&&_(Ot)),s===l&&(jt.test(a.charAt(C))?(s=a.charAt(C),C++):(s=l,0===S&&_(St))),s!==l)?o=[o,s]:(C=n,l);n!==l;)r.push(n),n=C,o=C,S++,a.substr(C,2)===T?(s=T,C+=2):(s=l,0===S&&_(Et)),S--,o=s===l?void 0:(C=o,l),n=o!==l&&(a.substr(C,2)===b?(s=b,C+=2):(s=l,0===S&&_(Ot)),s===l&&(jt.test(a.charAt(C))?(s=a.charAt(C),C++):(s=l,0===S&&_(St))),s!==l)?o=[o,s]:(C=n,l);t=r!==l&&(96===a.charCodeAt(C)?(n=Ct,C++):(n=l,0===S&&_(vt)),n!==l)?(v=t,e=wt(r)):(C=t,l)}else C=t,t=l}return t}())===l&&(e=function(){let t,e,r,n,o,s,i,c;t=C,e=C,45===a.charCodeAt(C)?(r=A,C++):(r=l,0===S&&_(m));r===l&&(r=null);if(r!==l)if(it.test(a.charAt(C))?(n=a.charAt(C),C++):(n=l,0===S&&_(ct)),n!==l){for(o=[],d.test(a.charAt(C))?(s=a.charAt(C),C++):(s=l,0===S&&_(x));s!==l;)o.push(s),d.test(a.charAt(C))?(s=a.charAt(C),C++):(s=l,0===S&&_(x));if(o!==l)if(46===a.charCodeAt(C)?(s=h,C++):(s=l,0===S&&_(p)),s!==l){if(i=[],d.test(a.charAt(C))?(c=a.charAt(C),C++):(c=l,0===S&&_(x)),c!==l)for(;c!==l;)i.push(c),d.test(a.charAt(C))?(c=a.charAt(C),C++):(c=l,0===S&&_(x));else i=l;e=i!==l?r=[r,n,o,s,i]:(C=e,l)}else C=e,e=l;else C=e,e=l}else C=e,e=l;else C=e,e=l;e!==l&&(v=t,e=lt(e));if((t=e)===l){if(t=C,e=C,45===a.charCodeAt(C)?(r=A,C++):(r=l,0===S&&_(m)),(r=r===l?null:r)!==l)if(48===a.charCodeAt(C)?(n=nt,C++):(n=l,0===S&&_(ot)),(n=n===l?u:n)!==l)if(46===a.charCodeAt(C)?(o=h,C++):(o=l,0===S&&_(p)),o!==l){if(s=[],d.test(a.charAt(C))?(i=a.charAt(C),C++):(i=l,0===S&&_(x)),i!==l)for(;i!==l;)s.push(i),d.test(a.charAt(C))?(i=a.charAt(C),C++):(i=l,0===S&&_(x));else s=l;e=s!==l?r=[r,n,o,s]:(C=e,l)}else C=e,e=l;else C=e,e=l;else C=e,e=l;e!==l&&(v=t,e=ut(e)),t=e}return t}())===l?function(){let t,e,r,n,o,s;t=C,48===a.charCodeAt(C)?(e=nt,C++):(e=l,0===S&&_(ot));e!==l&&(v=t,e=st());if((t=e)===l){if(t=C,e=C,45===a.charCodeAt(C)?(r=A,C++):(r=l,0===S&&_(m)),(r=r===l?null:r)!==l)if(it.test(a.charAt(C))?(n=a.charAt(C),C++):(n=l,0===S&&_(ct)),n!==l){for(o=[],d.test(a.charAt(C))?(s=a.charAt(C),C++):(s=l,0===S&&_(x));s!==l;)o.push(s),d.test(a.charAt(C))?(s=a.charAt(C),C++):(s=l,0===S&&_(x));e=o!==l?r=[r,n,o]:(C=e,l)}else C=e,e=l;else C=e,e=l;e!==l&&(v=t,e=at(e)),t=e}return t}():e)!==l&&(v=t,e=I(e)),e}function Zt(){let t,e,r,n;if(t=C,(e=function(){let t,e,r;t=C,64===a.charCodeAt(C)?(e=J,C++):(e=l,0===S&&_(M));e===l&&(e=null);t=e!==l&&(r=Gt(),r!==l)?(v=t,e=B(e,r)):(C=t,l);return t}())!==l){for(r=[],(n=Ut())===l&&(n=Wt());n!==l;)r.push(n),(n=Ut())===l&&(n=Wt());t=r!==l?(v=t,N(e,r)):(C=t,l)}else C=t,t=l;return t}function Ut(){let t,e,r,n;return t=C,e=z(),t=e!==l&&(46===a.charCodeAt(C)?(r=h,C++):(r=l,0===S&&_(p)),r!==l)&&z()!==l&&(n=Gt())!==l?(v=t,D(n)):(C=t,l)}function Wt(){let t,e,r,n,o;return t=C,e=z(),t=e!==l&&(91===a.charCodeAt(C)?(r=H,C++):(r=l,0===S&&_(K)),r!==l)&&z()!==l&&(n=(n=Rt())===l?Zt():n)!==l&&z()!==l&&(93===a.charCodeAt(C)?(o=Q,C++):(o=l,0===S&&_(V)),o!==l)?(v=t,X(n)):(C=t,l)}function z(){let t,e;for(t=[],n.test(a.charAt(C))?(e=a.charAt(C),C++):(e=l,0===S&&_(c));e!==l;)t.push(e),n.test(a.charAt(C))?(e=a.charAt(C),C++):(e=l,0===S&&_(c));return t}function Gt(){let t,e,r,n,o;if(t=C,e=C,$t.test(a.charAt(C))?(r=a.charAt(C),C++):(r=l,0===S&&_(Pt)),r!==l){for(n=[],Ft.test(a.charAt(C))?(o=a.charAt(C),C++):(o=l,0===S&&_(Lt));o!==l;)n.push(o),Ft.test(a.charAt(C))?(o=a.charAt(C),C++):(o=l,0===S&&_(Lt));e=n!==l?r=[r,n]:(C=e,l)}else C=e,e=l;return e!==l&&(v=t,e=R(e)),e}if((e=r())!==l&&C===a.length)return e;throw e!==l&&C<a.length&&_({type:"end"}),zt(j,O<a.length?a.charAt(O):null,O<a.length?L(O,O+1):L(O,O))}const parse=peg$parse;class Token{constructor(t,e,r){this.text=t,this.line=e,this.column=r}}class TextToken extends Token{compile(t){return JSON.stringify(this.text)}}class IdentifierToken extends Token{constructor(t,e,r,n,o){super(r,n,o),this.name=t,this.global=e}compile(t){return this.global?t.requireGlobal(this.name):t.requireParameter(this.name),this.name}}class LiteralToken extends Token{constructor(t,e,r,n){super(e,r,n),this.value=t}compile(t){return null===this.value?"null":JSON.stringify(this.value)}}class ExpressionToken extends Token{constructor(t,e,r,n,o){super(r,n,o),this.identifier=t,this.resolvers=e}compile(e){return this.identifier.compile(e)+this.resolvers.map(t=>t.compile(e)).join("")}}class ObjectAccessToken extends Token{constructor(t,e,r,n){super(e,r,n),this.key=t}compile(t){return"."+this.key}}class ArrayAccessToken extends Token{constructor(t,e,r,n){super(e,r,n),this.expr=t}compile(t){return"["+this.expr.compile(t)+"]"}}class Options{constructor(t={}){this.loggerOptions={},"loggerOptions"in t&&(this.loggerOptions=t.loggerOptions)}}class Context{constructor(){this.parameters=[],this.globals=[]}requireParameter(t){return-1<this.parameters.indexOf(t)||this.parameters.push(t),this}requireGlobal(t){return-1<this.globals.indexOf(t)||this.globals.push(t),this}}class Compiler{constructor(t={}){this.options=t instanceof Options?t:new Options(t),this.logger=new Logger("Compiler",this.options.loggerOptions)}tokenize(t){var e=[];for(const r of parse(t))0<e.length&&r instanceof TextToken&&e[e.length-1]instanceof TextToken?e[e.length-1].text+=r.text:e.push(r);return e}compile(t){var e=new Context,r=['""'];for(const s of this.tokenize(t)){var n=s.compile(e);""!==n&&r.push(n)}for(let t=0;t<r.length;t++)"null"===r[t]&&(r[t]='""');for(let t=1;t<r.length;t++)r[t-1].startsWith('"')&&r[t-1].endsWith('"')&&r[t].startsWith('"')&&(r[t-1]=r[t-1].slice(0,-1)+r[t].slice(1),r.splice(t,1),t--);let o="";return 0<e.parameters.length&&(o+=`{${e.parameters.join(",")}}`),0<e.globals.length&&(0===e.parameters.length&&(o+="_"),o+=`,{${e.globals.join(",")}}`),`(${o})=>`+r.join("+")}}export{Token,TextToken,IdentifierToken,LiteralToken,ExpressionToken,ObjectAccessToken,ArrayAccessToken,Options,Context,Compiler};