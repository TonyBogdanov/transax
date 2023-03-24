import TextCompilerToken from"./TextCompilerToken";import LiteralCompilerToken from"./LiteralCompilerToken";import ExpressionCompilerToken from"./ExpressionCompilerToken";import IdentifierCompilerToken from"./IdentifierCompilerToken";import ObjectAccessCompilerToken from"./ObjectAccessCompilerToken";import ArrayAccessCompilerToken from"./ArrayAccessCompilerToken";function peg$padEnd(t,e,r){return r=r||" ",t.length>e?t:(e-=t.length,t+(r+=r.repeat(e)).slice(0,e))}class PeggySyntaxError extends Error{static buildMessage(t,e){function r(t){return t.charCodeAt(0).toString(16).toUpperCase()}function n(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,t=>"\\x0"+r(t)).replace(/[\x10-\x1F\x7F-\x9F]/g,t=>"\\x"+r(t))}function o(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,t=>"\\x0"+r(t)).replace(/[\x10-\x1F\x7F-\x9F]/g,t=>"\\x"+r(t))}function c(t){switch(t.type){case"literal":return'"'+n(t.text)+'"';case"class":var e=t.parts.map(t=>Array.isArray(t)?o(t[0])+"-"+o(t[1]):o(t));return"["+(t.inverted?"^":"")+e+"]";case"any":return"any character";case"end":return"end of input";case"other":return t.description}}return"Expected "+function(t){var e=t.map(c);let r,n;if(e.sort(),0<e.length){for(r=1,n=1;r<e.length;r++)e[r-1]!==e[r]&&(e[n]=e[r],n++);e.length=n}switch(e.length){case 1:return e[0];case 2:return e[0]+" or "+e[1];default:return e.slice(0,-1).join(", ")+", or "+e[e.length-1]}}(t)+" but "+((t=e)?'"'+n(t)+'"':"end of input")+" found."}constructor(t,e,r,n){super(),this.message=t,this.expected=e,this.found=r,this.location=n,this.name="PeggySyntaxError","function"==typeof Object.setPrototypeOf?Object.setPrototypeOf(this,PeggySyntaxError.prototype):this.__proto__=PeggySyntaxError.prototype,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,PeggySyntaxError)}format(r){let n="Error: "+this.message;if(this.location){let t=null,e;for(e=0;e<r.length;e++)if(r[e].grammarSource===this.location.source){t=r[e].text.split(/\r\n|\n|\r/g);break}var o,c,a,i=this.location.start,s=this.location.source+":"+i.line+":"+i.column;t?(a=this.location.end,o=peg$padEnd("",i.line.toString().length," "),c=t[i.line-1],a=i.line===a.line?a.column:c.length+1,n+="\n --\x3e "+s+"\n"+o+" |\n"+i.line+" | "+c+"\n"+o+" | "+peg$padEnd("",i.column-1," ")+peg$padEnd("",a-i.column,"^")):n+="\n at "+s}return n}}function peg$parse(s,t){const u={},U=(t=void 0!==t?t:{}).grammarSource;var e={Start:Ht};let r=Ht;function z(t){return new LiteralCompilerToken(t,F(),$().start.line,$().start.column)}function I(t,e){return new ExpressionCompilerToken(t,e,F(),$().start.line,$().start.column)}function Z(t){return[t[0],...t[1]].join("")}const o=function(t){return t},l="",M=function(){return[]},N=function(t){return new TextCompilerToken(F(),$().start.line,$().start.column)},c="{{",q=L("{{",!1),a="}}",B=L("}}",!1),D="@",G=L("@",!1),H=function(t,e){return new IdentifierCompilerToken(e,"@"===t,F(),$().start.line,$().start.column)},f=".",h=L(".",!1),J=function(t){return new ObjectAccessCompilerToken(t,F(),$().start.line,$().start.column)},K="[",Q=L("[",!1),V="]",W=L("]",!1),X=function(t){return new ArrayAccessCompilerToken(t,F(),$().start.line,$().start.column)},n=/^[ \t\r\n]/,i=P([" ","\t","\r","\n"],!1,!1),Y={type:"any"},p="null",tt=L("null",!1),A=function(){return null},et="NULL",rt=L("NULL",!1),nt="true",ot=L("true",!1),ct=function(){return!0},at="TRUE",it=L("TRUE",!1),st="false",ut=L("false",!1),lt=function(){return!1},ft="FALSE",ht=L("FALSE",!1),pt="0",At=L("0",!1),gt=function(){return 0},g="-",m=L("-",!1),mt=/^[1-9]/,dt=P([["1","9"]],!1,!1),d=/^[0-9]/,C=P([["0","9"]],!1,!1),Ct=function(t){return parseInt([t[0],t[1],...t[2]].join(""),10)},xt=function(t){return parseFloat([t[0],t[1],t[2].join(""),".",t[4].join("")].join(""))},yt=function(t){return parseFloat([...t.slice(0,3),...t[3]].join(""))},bt="'",Tt=L("'",!1),x="\\'",Et=L("\\'",!1),kt=/^[^']/,St=P(["'"],!0,!1),jt=function(t){return t.map(t=>"\\'"===t?t[1]:t).join("")},vt='"',wt=L('"',!1),y='\\"',Ft=L('\\"',!1),$t=/^[^"]/,Lt=P(['"'],!0,!1),Pt=function(t){return t.map(t=>'\\"'===t?t[1]:t).join("")},_t="`",Ot=L("`",!1),b="${",Rt=L("${",!1),T="\\`",Ut=L("\\`",!1),zt=/^[^`]/,It=P(["`"],!0,!1),Zt=function(t){return t.map(([,t])=>"\\`"===t?t[1]:t).join("")},Mt=/^[a-zA-Z_$]/,Nt=P([["a","z"],["A","Z"],"_","$"],!1,!1),qt=/^[a-zA-Z0-9_$]/,Bt=P([["a","z"],["A","Z"],["0","9"],"_","$"],!1,!1);let E=0,k=0;const S=[{line:1,column:1}];let j=0,v=[],w=0;if(void 0!==t.startRule){if(!(t.startRule in e))throw new Error("Can't start parsing from rule \""+t.startRule+'".');r=e[t.startRule]}function F(){return s.substring(k,E)}function $(){return _(k,E)}function L(t,e){return{type:"literal",text:t,ignoreCase:e}}function P(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function Dt(t){var e=S[t];let r;if(e)return e;for(r=t-1;!S[r];)r--;for(e={line:(e=S[r]).line,column:e.column};r<t;)10===s.charCodeAt(r)?(e.line++,e.column=1):e.column++,r++;return S[t]=e}function _(t,e){var r=Dt(t),n=Dt(e);return{source:U,start:{offset:t,line:r.line,column:r.column},end:{offset:e,line:n.line,column:n.column}}}function O(t){E<j||(E>j&&(j=E,v=[]),v.push(t))}function Gt(t,e,r){return new PeggySyntaxError(PeggySyntaxError.buildMessage(t,e),t,e,r)}function Ht(){let t,e,r;if(t=E,e=[],(r=(r=Kt())===u?Jt():r)!==u)for(;r!==u;)e.push(r),(r=Kt())===u&&(r=Jt());else e=u;return e!==u&&(k=t,e=o(e)),(t=e)===u&&(t=E,(e=l)!==u&&(k=t,e=M()),t=e),t}function Jt(){let t,e;return t=E,(e=function(){let t,e;t=E,s.length>E?(e=s.charAt(E),E++):(e=u,0===w&&O(Y));e!==u&&(k=t,e=o(e));return t=e}())!==u&&(k=t,e=N(e)),e}function Kt(){let t,e,r,n;return t=E,s.substr(E,2)===c?(e=c,E+=2):(e=u,0===w&&O(q)),t=e!==u&&R()!==u&&(r=(r=Qt())===u?Vt():r)!==u&&R()!==u&&(s.substr(E,2)===a?(n=a,E+=2):(n=u,0===w&&O(B)),n!==u)?(k=t,e=o(r)):(E=t,u)}function Qt(){let t,e;return t=E,(e=(e=function(){let t,e;t=E,s.substr(E,4)===p?(e=p,E+=4):(e=u,0===w&&O(tt));e!==u&&(k=t,e=A());(t=e)===u&&(t=E,s.substr(E,4)===et?(e=et,E+=4):(e=u,0===w&&O(rt)),e!==u&&(k=t,e=A()),t=e);return t}())===u&&(e=function(){let t,e;t=E,s.substr(E,4)===nt?(e=nt,E+=4):(e=u,0===w&&O(ot));e!==u&&(k=t,e=ct());(t=e)===u&&(t=E,s.substr(E,4)===at?(e=at,E+=4):(e=u,0===w&&O(it)),e!==u&&(k=t,e=ct()),(t=e)===u)&&(t=E,s.substr(E,5)===st?(e=st,E+=5):(e=u,0===w&&O(ut)),e!==u&&(k=t,e=lt()),(t=e)===u)&&(t=E,s.substr(E,5)===ft?(e=ft,E+=5):(e=u,0===w&&O(ht)),e!==u&&(k=t,e=lt()),t=e);return t}())===u&&(e=function(){let t,e,r,n,o,c;t=E,39===s.charCodeAt(E)?(e=bt,E++):(e=u,0===w&&O(Tt));if(e!==u){for(r=[],s.substr(E,2)===x?(n=x,E+=2):(n=u,0===w&&O(Et)),n===u&&(kt.test(s.charAt(E))?(n=s.charAt(E),E++):(n=u,0===w&&O(St)));n!==u;)r.push(n),s.substr(E,2)===x?(n=x,E+=2):(n=u,0===w&&O(Et)),n===u&&(kt.test(s.charAt(E))?(n=s.charAt(E),E++):(n=u,0===w&&O(St)));t=r!==u&&(39===s.charCodeAt(E)?(n=bt,E++):(n=u,0===w&&O(Tt)),n!==u)?(k=t,e=jt(r)):(E=t,u)}else E=t,t=u;if(t===u){if(t=E,34===s.charCodeAt(E)?(e=vt,E++):(e=u,0===w&&O(wt)),e!==u){for(r=[],s.substr(E,2)===y?(n=y,E+=2):(n=u,0===w&&O(Ft)),n===u&&($t.test(s.charAt(E))?(n=s.charAt(E),E++):(n=u,0===w&&O(Lt)));n!==u;)r.push(n),s.substr(E,2)===y?(n=y,E+=2):(n=u,0===w&&O(Ft)),n===u&&($t.test(s.charAt(E))?(n=s.charAt(E),E++):(n=u,0===w&&O(Lt)));t=r!==u&&(34===s.charCodeAt(E)?(n=vt,E++):(n=u,0===w&&O(wt)),n!==u)?(k=t,e=Pt(r)):(E=t,u)}else E=t,t=u;if(t===u)if(t=E,96===s.charCodeAt(E)?(e=_t,E++):(e=u,0===w&&O(Ot)),e!==u){for(r=[],n=E,o=E,w++,s.substr(E,2)===b?(c=b,E+=2):(c=u,0===w&&O(Rt)),w--,o=c===u?void 0:(E=o,u),n=o!==u&&(s.substr(E,2)===T?(c=T,E+=2):(c=u,0===w&&O(Ut)),c===u&&(zt.test(s.charAt(E))?(c=s.charAt(E),E++):(c=u,0===w&&O(It))),c!==u)?o=[o,c]:(E=n,u);n!==u;)r.push(n),n=E,o=E,w++,s.substr(E,2)===b?(c=b,E+=2):(c=u,0===w&&O(Rt)),w--,o=c===u?void 0:(E=o,u),n=o!==u&&(s.substr(E,2)===T?(c=T,E+=2):(c=u,0===w&&O(Ut)),c===u&&(zt.test(s.charAt(E))?(c=s.charAt(E),E++):(c=u,0===w&&O(It))),c!==u)?o=[o,c]:(E=n,u);t=r!==u&&(96===s.charCodeAt(E)?(n=_t,E++):(n=u,0===w&&O(Ot)),n!==u)?(k=t,e=Zt(r)):(E=t,u)}else E=t,t=u}return t}())===u&&(e=function(){let t,e,r,n,o,c,a,i;t=E,e=E,45===s.charCodeAt(E)?(r=g,E++):(r=u,0===w&&O(m));r===u&&(r=null);if(r!==u)if(mt.test(s.charAt(E))?(n=s.charAt(E),E++):(n=u,0===w&&O(dt)),n!==u){for(o=[],d.test(s.charAt(E))?(c=s.charAt(E),E++):(c=u,0===w&&O(C));c!==u;)o.push(c),d.test(s.charAt(E))?(c=s.charAt(E),E++):(c=u,0===w&&O(C));if(o!==u)if(46===s.charCodeAt(E)?(c=f,E++):(c=u,0===w&&O(h)),c!==u){if(a=[],d.test(s.charAt(E))?(i=s.charAt(E),E++):(i=u,0===w&&O(C)),i!==u)for(;i!==u;)a.push(i),d.test(s.charAt(E))?(i=s.charAt(E),E++):(i=u,0===w&&O(C));else a=u;e=a!==u?r=[r,n,o,c,a]:(E=e,u)}else E=e,e=u;else E=e,e=u}else E=e,e=u;else E=e,e=u;e!==u&&(k=t,e=xt(e));if((t=e)===u){if(t=E,e=E,45===s.charCodeAt(E)?(r=g,E++):(r=u,0===w&&O(m)),(r=r===u?null:r)!==u)if(48===s.charCodeAt(E)?(n=pt,E++):(n=u,0===w&&O(At)),(n=n===u?l:n)!==u)if(46===s.charCodeAt(E)?(o=f,E++):(o=u,0===w&&O(h)),o!==u){if(c=[],d.test(s.charAt(E))?(a=s.charAt(E),E++):(a=u,0===w&&O(C)),a!==u)for(;a!==u;)c.push(a),d.test(s.charAt(E))?(a=s.charAt(E),E++):(a=u,0===w&&O(C));else c=u;e=c!==u?r=[r,n,o,c]:(E=e,u)}else E=e,e=u;else E=e,e=u;else E=e,e=u;e!==u&&(k=t,e=yt(e)),t=e}return t}())===u?function(){let t,e,r,n,o,c;t=E,48===s.charCodeAt(E)?(e=pt,E++):(e=u,0===w&&O(At));e!==u&&(k=t,e=gt());if((t=e)===u){if(t=E,e=E,45===s.charCodeAt(E)?(r=g,E++):(r=u,0===w&&O(m)),(r=r===u?null:r)!==u)if(mt.test(s.charAt(E))?(n=s.charAt(E),E++):(n=u,0===w&&O(dt)),n!==u){for(o=[],d.test(s.charAt(E))?(c=s.charAt(E),E++):(c=u,0===w&&O(C));c!==u;)o.push(c),d.test(s.charAt(E))?(c=s.charAt(E),E++):(c=u,0===w&&O(C));e=o!==u?r=[r,n,o]:(E=e,u)}else E=e,e=u;else E=e,e=u;e!==u&&(k=t,e=Ct(e)),t=e}return t}():e)!==u&&(k=t,e=z(e)),e}function Vt(){let t,e,r,n;if(t=E,(e=function(){let t,e,r;t=E,64===s.charCodeAt(E)?(e=D,E++):(e=u,0===w&&O(G));e===u&&(e=null);t=e!==u&&(r=Yt(),r!==u)?(k=t,e=H(e,r)):(E=t,u);return t}())!==u){for(r=[],(n=Wt())===u&&(n=Xt());n!==u;)r.push(n),(n=Wt())===u&&(n=Xt());t=r!==u?(k=t,I(e,r)):(E=t,u)}else E=t,t=u;return t}function Wt(){let t,e,r,n;return t=E,e=R(),t=e!==u&&(46===s.charCodeAt(E)?(r=f,E++):(r=u,0===w&&O(h)),r!==u)&&R()!==u&&(n=Yt())!==u?(k=t,J(n)):(E=t,u)}function Xt(){let t,e,r,n,o;return t=E,e=R(),t=e!==u&&(91===s.charCodeAt(E)?(r=K,E++):(r=u,0===w&&O(Q)),r!==u)&&R()!==u&&(n=(n=Qt())===u?Vt():n)!==u&&R()!==u&&(93===s.charCodeAt(E)?(o=V,E++):(o=u,0===w&&O(W)),o!==u)?(k=t,X(n)):(E=t,u)}function R(){let t,e;for(t=[],n.test(s.charAt(E))?(e=s.charAt(E),E++):(e=u,0===w&&O(i));e!==u;)t.push(e),n.test(s.charAt(E))?(e=s.charAt(E),E++):(e=u,0===w&&O(i));return t}function Yt(){let t,e,r,n,o;if(t=E,e=E,Mt.test(s.charAt(E))?(r=s.charAt(E),E++):(r=u,0===w&&O(Nt)),r!==u){for(n=[],qt.test(s.charAt(E))?(o=s.charAt(E),E++):(o=u,0===w&&O(Bt));o!==u;)n.push(o),qt.test(s.charAt(E))?(o=s.charAt(E),E++):(o=u,0===w&&O(Bt));e=n!==u?r=[r,n]:(E=e,u)}else E=e,e=u;return e!==u&&(k=t,e=Z(e)),e}if((e=r())!==u&&E===s.length)return e;throw e!==u&&E<s.length&&O({type:"end"}),Gt(v,j<s.length?s.charAt(j):null,j<s.length?_(j,j+1):_(j,j))}const parse=peg$parse;export default parse;