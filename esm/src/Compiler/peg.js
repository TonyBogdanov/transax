import TextToken from"./TextToken";import LiteralToken from"./LiteralToken";import BracketSafeExpressionToken from"./BracketSafeExpressionToken";import TernaryExpressionToken from"./TernaryExpressionToken";import ComparisonExpressionToken from"./ComparisonExpressionToken";import CallExpressionToken,{CallExpressionArrayAccess,CallExpressionInvocation,CallExpressionObjectAccess}from"./CallExpressionToken";const peggyParser=function(){"use strict";function Mr(t,r,e,n){t=Error.call(this,t);return Object.setPrototypeOf&&Object.setPrototypeOf(t,Mr.prototype),t.expected=r,t.found=e,t.location=n,t.name="SyntaxError",t}function t(){this.constructor=r}var r,e;function l(t,r,e){return e=e||" ",t.length>r?t:(r-=t.length,t+(e+=e.repeat(r)).slice(0,r))}return r=Mr,e=Error,t.prototype=e.prototype,r.prototype=new t,Mr.prototype.format=function(t){var r="Error: "+this.message;if(this.location){for(var e=null,n=0;n<t.length;n++)if(t[n].source===this.location.source){e=t[n].text.split(/\r\n|\n|\r/g);break}var o,a,c,s=this.location.start,u=this.location.source&&"function"==typeof this.location.source.offset?this.location.source.offset(s):s,i=this.location.source+":"+u.line+":"+u.column;e?(c=this.location.end,o=l("",u.line.toString().length," "),a=e[s.line-1],c=(s.line===c.line?c.column:a.length+1)-s.column||1,r+="\n --\x3e "+i+"\n"+o+" |\n"+u.line+" | "+a+"\n"+o+" | "+l("",s.column-1," ")+l("",c,"^")):r+="\n at "+i}return r},Mr.buildMessage=function(t,r){var e={literal:function(t){return'"'+o(t.text)+'"'},class:function(t){var r=t.parts.map(function(t){return Array.isArray(t)?a(t[0])+"-"+a(t[1]):a(t)});return"["+(t.inverted?"^":"")+r.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function o(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+n(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+n(t)})}function a(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+n(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+n(t)})}function c(t){return e[t.type](t)}return"Expected "+function(t){var r,e,n=t.map(c);if(n.sort(),0<n.length){for(e=r=1;r<n.length;r++)n[r-1]!==n[r]&&(n[e]=n[r],e++);n.length=e}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(t)+" but "+((t=r)?'"'+o(t)+'"':"end of input")+" found."},{SyntaxError:Mr,parse:function(l,t){function z(t){return new BracketSafeExpressionToken(t,n(),F())}function B(t){return new BracketSafeExpressionToken(t,n(),F())}function Z(t,r){return[t,...r.map(([,,,t])=>t)]}function _(t){return[t[0],...t[1]].join("")}function I(t){return t.map(t=>-1<["\\'","\\\\"].indexOf(t)?t[1]:t).join("")}function M(t){return t.map(t=>-1<['\\"',"\\\\"].indexOf(t)?t[1]:t).join("")}function N(t){return t.map(([,t])=>-1<["\\`","\\\\"].indexOf(t)?t[1]:t).join("")}var h={},a=(t=void 0!==t?t:{}).grammarSource,r={Start:jr},q=jr,D="{{",G="}}",u="(",i=")",H="?",J=":",K="@",f=".",Q="[",V="]",W=",",X="null",Y="NULL",tt="true",rt="TRUE",et="false",nt="FALSE",ot="'",c="\\'",s="\\\\",at='"',A='\\"',ct="`",p="${",d="\\`",st="0",ut="e",it="==",o="=",lt="===",ht="!=",ft="!==",At=">",pt=">=",dt="<",gt="<=",Ct=/^[ \t\r\n]/,xt=/^[a-zA-Z_$]/,g=/^[a-zA-Z0-9_$]/,vt=/^[^']/,mt=/^[^"]/,bt=/^[^`]/,C=/^[0-9]/,x=/^[+\-]/,yt=/^[1-9]/,Et=j("{{",!1),Tt=j("}}",!1),kt={type:"any"},v=j("(",!1),m=j(")",!1),wt=j("?",!1),St=j(":",!1),Lt=j("@",!1),b=j(".",!1),Ft=j("[",!1),jt=j("]",!1),Ot=j(",",!1),Pt=O([" ","\t","\r","\n"],!1,!1),Rt=O([["a","z"],["A","Z"],"_","$"],!1,!1),y=O([["a","z"],["A","Z"],["0","9"],"_","$"],!1,!1),$t=j("null",!1),Ut=j("NULL",!1),zt=j("true",!1),Bt=j("TRUE",!1),Zt=j("false",!1),_t=j("FALSE",!1),It=j("'",!1),Mt=j("\\'",!1),E=j("\\\\",!1),Nt=O(["'"],!0,!1),qt=j('"',!1),Dt=j('\\"',!1),Gt=O(['"'],!0,!1),Ht=j("`",!1),Jt=j("${",!1),Kt=j("\\`",!1),Qt=O(["`"],!0,!1),T=O([["0","9"]],!1,!1),k=O(["+","-"],!1,!1),Vt=j("0",!1),Wt=O([["1","9"]],!1,!1),Xt=j("e",!0),Yt=j("==",!1),tr=j("=",!1),rr=j("===",!1),er=j("!=",!1),nr=j("!==",!1),or=j(">",!1),ar=j(">=",!1),cr=j("<",!1),sr=j("<=",!1),ur=function(t){return t},ir=function(){return[]},lr=function(t){return t},hr=function(){return new TextToken(n(),F())},fr=function(t,r,e){return new TernaryExpressionToken(t,r,e,n(),F())},Ar=function(t,r,e){return new ComparisonExpressionToken(t,e,r,n(),F())},pr=function(t,r,e){return new CallExpressionObjectAccess(e)},dr=function(t,r,e){return new CallExpressionArrayAccess(e)},gr=function(t,r,e){return new CallExpressionInvocation(null!=e?e:[])},Cr=function(t,r,e){return new CallExpressionToken("@"===t,r,e,n(),F())},xr=function(t){return new LiteralToken(t,n(),F())},vr=function(t){return new LiteralToken(t,n(),F())},mr=function(t){return new LiteralToken(t,n(),F())},br=function(t){return new LiteralToken(t,n(),F())},yr=function(){return parseFloat(n())},Er=function(){return parseFloat(n())},Tr=function(){return parseFloat(n())},w=0,S=0,kr=[{line:1,column:1}],e=0,wr=[],L=0;if("startRule"in t){if(!(t.startRule in r))throw new Error("Can't start parsing from rule \""+t.startRule+'".');q=r[t.startRule]}function n(){return l.substring(S,w)}function F(){return Lr(S,w)}function j(t,r){return{type:"literal",text:t,ignoreCase:r}}function O(t,r,e){return{type:"class",parts:t,inverted:r,ignoreCase:e}}function Sr(t){var r,e=kr[t];if(e)return e;for(r=t-1;!kr[r];)r--;for(e={line:(e=kr[r]).line,column:e.column};r<t;)10===l.charCodeAt(r)?(e.line++,e.column=1):e.column++,r++;return kr[t]=e}function Lr(t,r,e){var n=Sr(t),o=Sr(r),t={source:a,start:{offset:t,line:n.line,column:n.column},end:{offset:r,line:o.line,column:o.column}};return e&&a&&"function"==typeof a.offset&&(t.start=a.offset(t.start),t.end=a.offset(t.end)),t}function P(t){w<e||(e<w&&(e=w,wr=[]),wr.push(t))}function Fr(t,r,e){return new Mr(Mr.buildMessage(t,r),t,r,e)}function jr(){var t=w,r=[],e=Or();if((e=e===h?Pr():e)!==h)for(;e!==h;)r.push(e),(e=Or())===h&&(e=Pr());else r=h;return r!==h&&(S=t,r=ur(r)),(t=r)===h&&(r="",S=t=w,t=r=ir()),t}function Or(){var t,r,e=w;return l.substr(w,2)===D?(t=D,w+=2):(t=h,0===L&&P(Et)),e=t!==h&&(U(),(t=R())!==h)&&(U(),l.substr(w,2)===G?(r=G,w+=2):(r=h,0===L&&P(Tt)),r!==h)?(S=e,lr(t)):(w=e,h)}function Pr(){var t,r=w;return l.length>w?(t=l.charAt(w),w++):(t=h,0===L&&P(kt)),t!==h&&(S=r,t=hr()),t}function R(){var t=Rr();return t=t===h&&(t=$r())===h&&(t=Ur())===h?Br():t}function $(){var t,r,e,n=w;return 40===l.charCodeAt(w)?(t=u,w++):(t=h,0===L&&P(v)),n=(n=t!==h&&(U(),(r=Rr())!==h)&&(U(),41===l.charCodeAt(w)?(e=i,w++):(e=h,0===L&&P(m)),e!==h)?(S=n,z(r)):(w=n,h))===h&&(n=w,40===l.charCodeAt(w)?(t=u,w++):(t=h,0===L&&P(v)),(n=t!==h&&(U(),(r=$r())!==h)&&(U(),41===l.charCodeAt(w)?(e=i,w++):(e=h,0===L&&P(m)),e!==h)?(S=n,B(r)):(w=n,h))===h)&&(n=Ur())===h?Br():n}function Rr(){var t,r,e=w,n=$();return e=n!==h&&(U(),63===l.charCodeAt(w)?(t=H,w++):(t=h,0===L&&P(wt)),t!==h)&&(U(),(t=$())!==h)&&(U(),58===l.charCodeAt(w)?(r=J,w++):(r=h,0===L&&P(St)),r!==h)&&(U(),(r=$())!==h)?(S=e,fr(n,t,r)):(w=e,h)}function $r(){var t,r,e=w,n=$();return e=n!==h&&(U(),(t=function(){var t,r,e,n;t=w,l.substr(w,2)===it?(r=it,w+=2):(r=h,0===L&&P(Yt));t=r!==h&&(e=w,L++,61===l.charCodeAt(w)?(n=o,w++):(n=h,0===L&&P(tr)),L--,e=n===h?void 0:(w=e,h),e!==h)?(S=t,r):(w=t,h);t===h&&(l.substr(w,3)===lt?(t=lt,w+=3):(t=h,0===L&&P(rr)),t===h)&&(t=w,l.substr(w,2)===ht?(r=ht,w+=2):(r=h,0===L&&P(er)),(t=r!==h&&(e=w,L++,61===l.charCodeAt(w)?(n=o,w++):(n=h,0===L&&P(tr)),L--,(e=n===h?void 0:(w=e,h))!==h)?(S=t,r):(w=t,h))===h)&&(l.substr(w,3)===ft?(t=ft,w+=3):(t=h,0===L&&P(nr)),t===h)&&(t=w,62===l.charCodeAt(w)?(r=At,w++):(r=h,0===L&&P(or)),(t=r!==h&&(e=w,L++,61===l.charCodeAt(w)?(n=o,w++):(n=h,0===L&&P(tr)),L--,(e=n===h?void 0:(w=e,h))!==h)?(S=t,r):(w=t,h))===h)&&(l.substr(w,2)===pt?(t=pt,w+=2):(t=h,0===L&&P(ar)),t===h)&&(t=w,60===l.charCodeAt(w)?(r=dt,w++):(r=h,0===L&&P(cr)),(t=r!==h&&(e=w,L++,61===l.charCodeAt(w)?(n=o,w++):(n=h,0===L&&P(tr)),L--,(e=n===h?void 0:(w=e,h))!==h)?(S=t,r):(w=t,h))===h)&&(l.substr(w,2)===gt?(t=gt,w+=2):(t=h,0===L&&P(sr)));return t}())!==h)&&(U(),(r=$())!==h)?(S=e,Ar(n,t,r)):(w=e,h)}function Ur(){var t,r,e,n,o,a,c,s=w;if(64===l.charCodeAt(w)?(t=K,w++):(t=h,0===L&&P(Lt)),t===h&&(t=null),(r=Zr())!==h){for(e=[],n=w,U(),46===l.charCodeAt(w)?(o=f,w++):(o=h,0===L&&P(b)),(n=o!==h&&(U(),(a=Zr())!==h)?(S=n,pr(t,r,a)):(w=n,h))===h&&(n=w,U(),91===l.charCodeAt(w)?(o=Q,w++):(o=h,0===L&&P(Ft)),(n=o!==h&&(U(),(a=R())!==h)&&(U(),93===l.charCodeAt(w)?(c=V,w++):(c=h,0===L&&P(jt)),c!==h)?(S=n,dr(t,r,a)):(w=n,h))===h)&&(n=w,U(),40===l.charCodeAt(w)?(o=u,w++):(o=h,0===L&&P(v)),n=o!==h&&(U(),(a=zr())===h&&(a=null),U(),41===l.charCodeAt(w)?(c=i,w++):(c=h,0===L&&P(m)),c!==h)?(S=n,gr(t,r,a)):(w=n,h));n!==h;)e.push(n),n=w,U(),46===l.charCodeAt(w)?(o=f,w++):(o=h,0===L&&P(b)),(n=o!==h&&(U(),(a=Zr())!==h)?(S=n,pr(t,r,a)):(w=n,h))===h&&(n=w,U(),91===l.charCodeAt(w)?(o=Q,w++):(o=h,0===L&&P(Ft)),(n=o!==h&&(U(),(a=R())!==h)&&(U(),93===l.charCodeAt(w)?(c=V,w++):(c=h,0===L&&P(jt)),c!==h)?(S=n,dr(t,r,a)):(w=n,h))===h)&&(n=w,U(),40===l.charCodeAt(w)?(o=u,w++):(o=h,0===L&&P(v)),n=o!==h&&(U(),(a=zr())===h&&(a=null),U(),41===l.charCodeAt(w)?(c=i,w++):(c=h,0===L&&P(m)),c!==h)?(S=n,gr(t,r,a)):(w=n,h));S=s,s=Cr(t,r,e)}else w=s,s=h;return s}function zr(){var t,r,e,n,o,a,c=w,s=R();if(s!==h){for(t=[],r=w,e=U(),44===l.charCodeAt(w)?(n=W,w++):(n=h,0===L&&P(Ot)),r=n!==h&&(o=U(),(a=R())!==h)?e=[e,n,o,a]:(w=r,h);r!==h;)t.push(r),r=w,e=U(),44===l.charCodeAt(w)?(n=W,w++):(n=h,0===L&&P(Ot)),r=n!==h&&(o=U(),(a=R())!==h)?e=[e,n,o,a]:(w=r,h);S=c,c=Z(s,t)}else w=c,c=h;return c}function Br(){var t=w,r=_r();return r!==h&&(S=t,r=xr(r)),(t=r)===h&&(t=w,(r=Ir())!==h&&(S=t,r=vr(r)),(t=r)===h)&&(t=w,(r=function(){var t,r,e,n;t=w,t=(r=function(){var t,r,e,n,o,a,c,s,u,i;t=w,x.test(l.charAt(w))?(r=l.charAt(w),w++):(r=h,0===L&&P(k));r===h&&(r=null);48===l.charCodeAt(w)?(e=st,w++):(e=h,0===L&&P(Vt));if(e===h)if(e=w,yt.test(l.charAt(w))?(n=l.charAt(w),w++):(n=h,0===L&&P(Wt)),n!==h){for(o=[],C.test(l.charAt(w))?(a=l.charAt(w),w++):(a=h,0===L&&P(T));a!==h;)o.push(a),C.test(l.charAt(w))?(a=l.charAt(w),w++):(a=h,0===L&&P(T));e=n=[n,o]}else w=e,e=h;if(e!==h)if(46===l.charCodeAt(w)?(n=f,w++):(n=h,0===L&&P(b)),n!==h){for(o=[],C.test(l.charAt(w))?(a=l.charAt(w),w++):(a=h,0===L&&P(T));a!==h;)o.push(a),C.test(l.charAt(w))?(a=l.charAt(w),w++):(a=h,0===L&&P(T));if(a=w,l.substr(w,1).toLowerCase()===ut?(c=l.charAt(w),w++):(c=h,0===L&&P(Xt)),c!==h){if(x.test(l.charAt(w))?(s=l.charAt(w),w++):(s=h,0===L&&P(k)),s===h&&(s=null),u=[],C.test(l.charAt(w))?(i=l.charAt(w),w++):(i=h,0===L&&P(T)),i!==h)for(;i!==h;)u.push(i),C.test(l.charAt(w))?(i=l.charAt(w),w++):(i=h,0===L&&P(T));else u=h;a=u!==h?c=[c,s,u]:(w=a,h)}else w=a,a=h;a===h&&(a=null),S=t,t=yr()}else w=t,t=h;else w=t,t=h;if(t===h){if(t=w,x.test(l.charAt(w))?(r=l.charAt(w),w++):(r=h,0===L&&P(k)),r===h&&(r=null),46===l.charCodeAt(w)?(e=f,w++):(e=h,0===L&&P(b)),e!==h){if(n=[],C.test(l.charAt(w))?(o=l.charAt(w),w++):(o=h,0===L&&P(T)),o!==h)for(;o!==h;)n.push(o),C.test(l.charAt(w))?(o=l.charAt(w),w++):(o=h,0===L&&P(T));else n=h;if(n!==h){if(o=w,l.substr(w,1).toLowerCase()===ut?(a=l.charAt(w),w++):(a=h,0===L&&P(Xt)),a!==h){if(x.test(l.charAt(w))?(c=l.charAt(w),w++):(c=h,0===L&&P(k)),c===h&&(c=null),s=[],C.test(l.charAt(w))?(u=l.charAt(w),w++):(u=h,0===L&&P(T)),u!==h)for(;u!==h;)s.push(u),C.test(l.charAt(w))?(u=l.charAt(w),w++):(u=h,0===L&&P(T));else s=h;o=s!==h?a=[a,c,s]:(w=o,h)}else w=o,o=h;o===h&&(o=null),S=t,t=Er()}else w=t,t=h}else w=t,t=h;if(t===h){if(t=w,x.test(l.charAt(w))?(r=l.charAt(w),w++):(r=h,0===L&&P(k)),r===h&&(r=null),48===l.charCodeAt(w)?(e=st,w++):(e=h,0===L&&P(Vt)),e===h)if(e=w,yt.test(l.charAt(w))?(n=l.charAt(w),w++):(n=h,0===L&&P(Wt)),n!==h){for(o=[],C.test(l.charAt(w))?(a=l.charAt(w),w++):(a=h,0===L&&P(T));a!==h;)o.push(a),C.test(l.charAt(w))?(a=l.charAt(w),w++):(a=h,0===L&&P(T));e=n=[n,o]}else w=e,e=h;if(e!==h){if(n=w,l.substr(w,1).toLowerCase()===ut?(o=l.charAt(w),w++):(o=h,0===L&&P(Xt)),o!==h){if(x.test(l.charAt(w))?(a=l.charAt(w),w++):(a=h,0===L&&P(k)),a===h&&(a=null),c=[],C.test(l.charAt(w))?(s=l.charAt(w),w++):(s=h,0===L&&P(T)),s!==h)for(;s!==h;)c.push(s),C.test(l.charAt(w))?(s=l.charAt(w),w++):(s=h,0===L&&P(T));else c=h;n=c!==h?o=[o,a,c]:(w=n,h)}else w=n,n=h;n===h&&(n=null),S=t,t=Tr()}else w=t,t=h}}return t}())!==h&&(e=w,L++,xt.test(l.charAt(w))?(n=l.charAt(w),w++):(n=h,0===L&&P(Rt)),n===h&&(C.test(l.charAt(w))?(n=l.charAt(w),w++):(n=h,0===L&&P(T))),L--,e=n===h?void 0:(w=e,h),e!==h)?(S=t,r):(w=t,h);return t}())!==h&&(S=t,r=mr(r)),(t=r)===h)&&(t=w,(r=function(){var t,r,e,n,o,a;t=w,39===l.charCodeAt(w)?(r=ot,w++):(r=h,0===L&&P(It));if(r!==h){for(e=[],l.substr(w,2)===c?(n=c,w+=2):(n=h,0===L&&P(Mt)),n===h&&(l.substr(w,2)===s?(n=s,w+=2):(n=h,0===L&&P(E)),n===h)&&(vt.test(l.charAt(w))?(n=l.charAt(w),w++):(n=h,0===L&&P(Nt)));n!==h;)e.push(n),l.substr(w,2)===c?(n=c,w+=2):(n=h,0===L&&P(Mt)),n===h&&(l.substr(w,2)===s?(n=s,w+=2):(n=h,0===L&&P(E)),n===h)&&(vt.test(l.charAt(w))?(n=l.charAt(w),w++):(n=h,0===L&&P(Nt)));39===l.charCodeAt(w)?(n=ot,w++):(n=h,0===L&&P(It)),t=n!==h?(S=t,I(e)):(w=t,h)}else w=t,t=h;if(t===h){if(t=w,34===l.charCodeAt(w)?(r=at,w++):(r=h,0===L&&P(qt)),r!==h){for(e=[],l.substr(w,2)===A?(n=A,w+=2):(n=h,0===L&&P(Dt)),n===h&&(l.substr(w,2)===s?(n=s,w+=2):(n=h,0===L&&P(E)),n===h)&&(mt.test(l.charAt(w))?(n=l.charAt(w),w++):(n=h,0===L&&P(Gt)));n!==h;)e.push(n),l.substr(w,2)===A?(n=A,w+=2):(n=h,0===L&&P(Dt)),n===h&&(l.substr(w,2)===s?(n=s,w+=2):(n=h,0===L&&P(E)),n===h)&&(mt.test(l.charAt(w))?(n=l.charAt(w),w++):(n=h,0===L&&P(Gt)));34===l.charCodeAt(w)?(n=at,w++):(n=h,0===L&&P(qt)),t=n!==h?(S=t,M(e)):(w=t,h)}else w=t,t=h;if(t===h)if(t=w,96===l.charCodeAt(w)?(r=ct,w++):(r=h,0===L&&P(Ht)),r!==h){for(e=[],o=n=w,L++,l.substr(w,2)===p?(a=p,w+=2):(a=h,0===L&&P(Jt)),L--,o=a===h?void 0:(w=o,h),n=o!==h&&(l.substr(w,2)===d?(a=d,w+=2):(a=h,0===L&&P(Kt)),a===h&&(l.substr(w,2)===s?(a=s,w+=2):(a=h,0===L&&P(E)),a===h)&&(bt.test(l.charAt(w))?(a=l.charAt(w),w++):(a=h,0===L&&P(Qt))),a!==h)?o=[o,a]:(w=n,h);n!==h;)e.push(n),o=n=w,L++,l.substr(w,2)===p?(a=p,w+=2):(a=h,0===L&&P(Jt)),L--,o=a===h?void 0:(w=o,h),n=o!==h&&(l.substr(w,2)===d?(a=d,w+=2):(a=h,0===L&&P(Kt)),a===h&&(l.substr(w,2)===s?(a=s,w+=2):(a=h,0===L&&P(E)),a===h)&&(bt.test(l.charAt(w))?(a=l.charAt(w),w++):(a=h,0===L&&P(Qt))),a!==h)?o=[o,a]:(w=n,h);96===l.charCodeAt(w)?(n=ct,w++):(n=h,0===L&&P(Ht)),t=n!==h?(S=t,N(e)):(w=t,h)}else w=t,t=h}return t}())!==h&&(S=t,r=br(r)),t=r),t}function U(){var t,r=[];for(Ct.test(l.charAt(w))?(t=l.charAt(w),w++):(t=h,0===L&&P(Pt));t!==h;)r.push(t),Ct.test(l.charAt(w))?(t=l.charAt(w),w++):(t=h,0===L&&P(Pt));return r}function Zr(){var t,r,e,n,o=w,a=w;if(L++,t=function(){var t;(t=_r())===h&&(t=Ir());return t}(),L--,(a=t===h?void 0:(w=a,h))!==h){if(t=w,xt.test(l.charAt(w))?(r=l.charAt(w),w++):(r=h,0===L&&P(Rt)),r!==h){for(e=[],g.test(l.charAt(w))?(n=l.charAt(w),w++):(n=h,0===L&&P(y));n!==h;)e.push(n),g.test(l.charAt(w))?(n=l.charAt(w),w++):(n=h,0===L&&P(y));t=r=[r,e]}else w=t,t=h;o=t!==h?(S=o,_(t)):(w=o,h)}else w=o,o=h;return o}function _r(){var t,r,e,n=w;return l.substr(w,4)===X?(t=X,w+=4):(t=h,0===L&&P($t)),(n=t!==h&&(r=w,L++,g.test(l.charAt(w))?(e=l.charAt(w),w++):(e=h,0===L&&P(y)),L--,(r=e===h?void 0:(w=r,h))!==h)?(S=n,null):(w=n,h))===h&&(n=w,l.substr(w,4)===Y?(t=Y,w+=4):(t=h,0===L&&P(Ut)),n=t!==h&&(r=w,L++,g.test(l.charAt(w))?(e=l.charAt(w),w++):(e=h,0===L&&P(y)),L--,(r=e===h?void 0:(w=r,h))!==h)?(S=n,null):(w=n,h)),n}function Ir(){var t,r,e,n=w;return l.substr(w,4)===tt?(t=tt,w+=4):(t=h,0===L&&P(zt)),(n=t!==h&&(r=w,L++,g.test(l.charAt(w))?(e=l.charAt(w),w++):(e=h,0===L&&P(y)),L--,(r=e===h?void 0:(w=r,h))!==h)?(S=n,!0):(w=n,h))===h&&(n=w,l.substr(w,4)===rt?(t=rt,w+=4):(t=h,0===L&&P(Bt)),(n=t!==h&&(r=w,L++,g.test(l.charAt(w))?(e=l.charAt(w),w++):(e=h,0===L&&P(y)),L--,(r=e===h?void 0:(w=r,h))!==h)?(S=n,!0):(w=n,h))===h)&&(n=w,l.substr(w,5)===et?(t=et,w+=5):(t=h,0===L&&P(Zt)),(n=t!==h&&(r=w,L++,g.test(l.charAt(w))?(e=l.charAt(w),w++):(e=h,0===L&&P(y)),L--,(r=e===h?void 0:(w=r,h))!==h)?(S=n,!1):(w=n,h))===h)&&(n=w,l.substr(w,5)===nt?(t=nt,w+=5):(t=h,0===L&&P(_t)),n=t!==h&&(r=w,L++,g.test(l.charAt(w))?(e=l.charAt(w),w++):(e=h,0===L&&P(y)),L--,(r=e===h?void 0:(w=r,h))!==h)?(S=n,!1):(w=n,h)),n}if((r=q())!==h&&w===l.length)return r;throw r!==h&&w<l.length&&P({type:"end"}),Fr(wr,e<l.length?l.charAt(e):null,e<l.length?Lr(e,e+1):Lr(e,e))}}}(),parse=(peggyParser.SyntaxError.prototype.name="PeggySyntaxError",peggyParser.parse),PeggySyntaxError=peggyParser.SyntaxError;export default parse;