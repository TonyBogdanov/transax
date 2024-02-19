"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const AnalyzerToken_1=require("./AnalyzerToken.cjs"),peggyParser=function(){function st(t,r,e,n){t=Error.call(this,t);return Object.setPrototypeOf&&Object.setPrototypeOf(t,st.prototype),t.expected=r,t.found=e,t.location=n,t.name="SyntaxError",t}function t(){this.constructor=r}var r,e;function l(t,r,e){return e=e||" ",t.length>r?t:(r-=t.length,t+(e+=e.repeat(r)).slice(0,r))}return r=st,e=Error,t.prototype=e.prototype,r.prototype=new t,st.prototype.format=function(t){var r="Error: "+this.message;if(this.location){for(var e=null,n=0;n<t.length;n++)if(t[n].source===this.location.source){e=t[n].text.split(/\r\n|\n|\r/g);break}var o,a,c,u=this.location.start,s=this.location.source&&"function"==typeof this.location.source.offset?this.location.source.offset(u):u,i=this.location.source+":"+s.line+":"+s.column;e?(c=this.location.end,o=l("",s.line.toString().length," "),a=e[u.line-1],c=(u.line===c.line?c.column:a.length+1)-u.column||1,r+="\n --\x3e "+i+"\n"+o+" |\n"+s.line+" | "+a+"\n"+o+" | "+l("",u.column-1," ")+l("",c,"^")):r+="\n at "+i}return r},st.buildMessage=function(t,r){var e={literal:function(t){return'"'+o(t.text)+'"'},class:function(t){var r=t.parts.map(function(t){return Array.isArray(t)?a(t[0])+"-"+a(t[1]):a(t)});return"["+(t.inverted?"^":"")+r.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function o(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+n(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+n(t)})}function a(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+n(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+n(t)})}function c(t){return e[t.type](t)}return"Expected "+function(t){var r,e,n=t.map(c);if(n.sort(),0<n.length){for(e=r=1;r<n.length;r++)n[r-1]!==n[r]&&(n[e]=n[r],e++);n.length=e}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(t)+" but "+((t=r)?'"'+o(t)+'"':"end of input")+" found."},{SyntaxError:st,parse:function(c,t){function T(t){return t.map(t=>-1<["\\'","\\\\"].indexOf(t)?t[1]:t).join("")}function M(t){return t.map(t=>-1<['\\"',"\\\\"].indexOf(t)?t[1]:t).join("")}function q(t){return t.map(([,t])=>-1<["\\`","\\\\"].indexOf(t)?t[1]:t).join("")}function U(t){return[t[0],...t[1]].join("")}var u={},a=(t=void 0!==t?t:{}).grammarSource,r={Start:ct},e=ct,B="(",s="'",i="\\'",l="\\\\",f='"',h='\\"',p="`",g="${",A="\\`",d=/^[^a-zA-Z_$]/,D=/^[,)]/,n=/^[ \t\r\n]/,y=/^[^']/,x=/^[^"]/,m=/^[^`]/,G=/^[a-zA-Z_$]/,b=/^[a-zA-Z0-9_$]/,v=w([["a","z"],["A","Z"],"_","$"],!0,!1),C={type:"any"},H=$("(",!1),I=w([",",")"],!1,!1),o=w([" ","\t","\r","\n"],!1,!1),E=$("'",!1),J=$("\\'",!1),_=$("\\\\",!1),K=w(["'"],!0,!1),L=$('"',!1),N=$('\\"',!1),Q=w(['"'],!0,!1),V=$("`",!1),W=$("${",!1),X=$("\\`",!1),Y=w(["`"],!0,!1),tt=w([["a","z"],["A","Z"],"_","$"],!1,!1),rt=w([["a","z"],["A","Z"],["0","9"],"_","$"],!1,!1),et=function(t){return t.flat().filter(t=>t instanceof AnalyzerToken_1.default)},nt=function(t,r){return new AnalyzerToken_1.default(t,r,c.substring(z,j),Z(z,j))},j=0,z=0,S=[{line:1,column:1}],P=0,F=[],O=0;if("startRule"in t){if(!(t.startRule in r))throw new Error("Can't start parsing from rule \""+t.startRule+'".');e=r[t.startRule]}function $(t,r){return{type:"literal",text:t,ignoreCase:r}}function w(t,r,e){return{type:"class",parts:t,inverted:r,ignoreCase:e}}function ot(t){var r,e=S[t];if(e)return e;for(r=t-1;!S[r];)r--;for(e={line:(e=S[r]).line,column:e.column};r<t;)10===c.charCodeAt(r)?(e.line++,e.column=1):e.column++,r++;return S[t]=e}function Z(t,r,e){var n=ot(t),o=ot(r),t={source:a,start:{offset:t,line:n.line,column:n.column},end:{offset:r,line:o.line,column:o.column}};return e&&a&&"function"==typeof a.offset&&(t.start=a.offset(t.start),t.end=a.offset(t.end)),t}function k(t){j<P||(P<j&&(P=j,F=[]),F.push(t))}function at(t,r,e){return new st(st.buildMessage(t,r),t,r,e)}function ct(){var t,r,e=j,n=[],o=j;for(d.test(c.charAt(j))?(t=c.charAt(j),j++):(t=u,0===O&&k(v)),t===u&&(t=null),(o=(r=ut())!==u?t=[t,r]:(j=o,u))===u&&(c.length>j?(o=c.charAt(j),j++):(o=u,0===O&&k(C)));o!==u;)n.push(o),o=j,d.test(c.charAt(j))?(t=c.charAt(j),j++):(t=u,0===O&&k(v)),t===u&&(t=null),(o=(r=ut())!==u?t=[t,r]:(j=o,u))===u&&(c.length>j?(o=c.charAt(j),j++):(o=u,0===O&&k(C)));return z=e,n=et(n)}function ut(){var t,r,e=j,n=function(){var t,r,e,n,o;r=t=j,G.test(c.charAt(j))?(e=c.charAt(j),j++):(e=u,0===O&&k(tt));if(e!==u){for(n=[],b.test(c.charAt(j))?(o=c.charAt(j),j++):(o=u,0===O&&k(rt));o!==u;)n.push(o),b.test(c.charAt(j))?(o=c.charAt(j),j++):(o=u,0===O&&k(rt));r=e=[e,n]}else j=r,r=u;r!==u&&(z=t,r=U(r));return t=r}();return e=n!==u&&(R(),40===c.charCodeAt(j)?(t=B,j++):(t=u,0===O&&k(H)),t!==u)&&(R(),(t=function(){var t,r,e,n,o,a;t=j,39===c.charCodeAt(j)?(r=s,j++):(r=u,0===O&&k(E));if(r!==u){for(e=[],c.substr(j,2)===i?(n=i,j+=2):(n=u,0===O&&k(J)),n===u&&(c.substr(j,2)===l?(n=l,j+=2):(n=u,0===O&&k(_)),n===u)&&(y.test(c.charAt(j))?(n=c.charAt(j),j++):(n=u,0===O&&k(K)));n!==u;)e.push(n),c.substr(j,2)===i?(n=i,j+=2):(n=u,0===O&&k(J)),n===u&&(c.substr(j,2)===l?(n=l,j+=2):(n=u,0===O&&k(_)),n===u)&&(y.test(c.charAt(j))?(n=c.charAt(j),j++):(n=u,0===O&&k(K)));39===c.charCodeAt(j)?(n=s,j++):(n=u,0===O&&k(E)),t=n!==u?(z=t,T(e)):(j=t,u)}else j=t,t=u;if(t===u){if(t=j,34===c.charCodeAt(j)?(r=f,j++):(r=u,0===O&&k(L)),r!==u){for(e=[],c.substr(j,2)===h?(n=h,j+=2):(n=u,0===O&&k(N)),n===u&&(c.substr(j,2)===l?(n=l,j+=2):(n=u,0===O&&k(_)),n===u)&&(x.test(c.charAt(j))?(n=c.charAt(j),j++):(n=u,0===O&&k(Q)));n!==u;)e.push(n),c.substr(j,2)===h?(n=h,j+=2):(n=u,0===O&&k(N)),n===u&&(c.substr(j,2)===l?(n=l,j+=2):(n=u,0===O&&k(_)),n===u)&&(x.test(c.charAt(j))?(n=c.charAt(j),j++):(n=u,0===O&&k(Q)));34===c.charCodeAt(j)?(n=f,j++):(n=u,0===O&&k(L)),t=n!==u?(z=t,M(e)):(j=t,u)}else j=t,t=u;if(t===u)if(t=j,96===c.charCodeAt(j)?(r=p,j++):(r=u,0===O&&k(V)),r!==u){for(e=[],o=n=j,O++,c.substr(j,2)===g?(a=g,j+=2):(a=u,0===O&&k(W)),O--,o=a===u?void 0:(j=o,u),n=o!==u&&(c.substr(j,2)===A?(a=A,j+=2):(a=u,0===O&&k(X)),a===u&&(c.substr(j,2)===l?(a=l,j+=2):(a=u,0===O&&k(_)),a===u)&&(m.test(c.charAt(j))?(a=c.charAt(j),j++):(a=u,0===O&&k(Y))),a!==u)?o=[o,a]:(j=n,u);n!==u;)e.push(n),o=n=j,O++,c.substr(j,2)===g?(a=g,j+=2):(a=u,0===O&&k(W)),O--,o=a===u?void 0:(j=o,u),n=o!==u&&(c.substr(j,2)===A?(a=A,j+=2):(a=u,0===O&&k(X)),a===u&&(c.substr(j,2)===l?(a=l,j+=2):(a=u,0===O&&k(_)),a===u)&&(m.test(c.charAt(j))?(a=c.charAt(j),j++):(a=u,0===O&&k(Y))),a!==u)?o=[o,a]:(j=n,u);96===c.charCodeAt(j)?(n=p,j++):(n=u,0===O&&k(V)),t=n!==u?(z=t,q(e)):(j=t,u)}else j=t,t=u}return t}())!==u)&&(R(),D.test(c.charAt(j))?(r=c.charAt(j),j++):(r=u,0===O&&k(I)),r!==u)?(z=e,nt(n,t)):(j=e,u)}function R(){var t,r=[];for(n.test(c.charAt(j))?(t=c.charAt(j),j++):(t=u,0===O&&k(o));t!==u;)r.push(t),n.test(c.charAt(j))?(t=c.charAt(j),j++):(t=u,0===O&&k(o));return r}if((r=e())!==u&&j===c.length)return r;throw r!==u&&j<c.length&&k({type:"end"}),at(F,P<c.length?c.charAt(P):null,P<c.length?Z(P,P+1):Z(P,P))}}}(),parse=(peggyParser.SyntaxError.prototype.name="PeggySyntaxError",peggyParser.parse),PeggySyntaxError=peggyParser.SyntaxError;exports.default=parse;