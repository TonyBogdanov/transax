import TextToken from"./TextToken.mjs";import LiteralToken from"./LiteralToken.mjs";import TernaryExpressionToken from"./TernaryExpressionToken.mjs";import ComparisonExpressionToken from"./ComparisonExpressionToken.mjs";import CallExpressionToken,{CallExpressionArrayAccess,CallExpressionInvocation,CallExpressionObjectAccess}from"./CallExpressionToken.mjs";const peggyParser=function(){"use strict";function Mr(t,r,e,n){t=Error.call(this,t);return Object.setPrototypeOf&&Object.setPrototypeOf(t,Mr.prototype),t.expected=r,t.found=e,t.location=n,t.name="SyntaxError",t}function t(){this.constructor=r}var r,e;function l(t,r,e){return e=e||" ",t.length>r?t:(r-=t.length,t+(e+=e.repeat(r)).slice(0,r))}return r=Mr,e=Error,t.prototype=e.prototype,r.prototype=new t,Mr.prototype.format=function(t){var r="Error: "+this.message;if(this.location){for(var e=null,n=0;n<t.length;n++)if(t[n].source===this.location.source){e=t[n].text.split(/\r\n|\n|\r/g);break}var o,a,c,s=this.location.start,u=this.location.source&&"function"==typeof this.location.source.offset?this.location.source.offset(s):s,i=this.location.source+":"+u.line+":"+u.column;e?(c=this.location.end,o=l("",u.line.toString().length," "),a=e[s.line-1],c=(s.line===c.line?c.column:a.length+1)-s.column||1,r+="\n --\x3e "+i+"\n"+o+" |\n"+u.line+" | "+a+"\n"+o+" | "+l("",s.column-1," ")+l("",c,"^")):r+="\n at "+i}return r},Mr.buildMessage=function(t,r){var e={literal:function(t){return'"'+o(t.text)+'"'},class:function(t){var r=t.parts.map(function(t){return Array.isArray(t)?a(t[0])+"-"+a(t[1]):a(t)});return"["+(t.inverted?"^":"")+r.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function o(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+n(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+n(t)})}function a(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+n(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+n(t)})}function c(t){return e[t.type](t)}return"Expected "+function(t){var r,e,n=t.map(c);if(n.sort(),0<n.length){for(e=r=1;r<n.length;r++)n[r-1]!==n[r]&&(n[e]=n[r],e++);n.length=e}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(t)+" but "+((t=r)?'"'+o(t)+'"':"end of input")+" found."},{SyntaxError:Mr,parse:function(l,t){function z(t,r){return[t,...r.map(([,,,t])=>t)]}function Z(t){return[t[0],...t[1]].join("")}function _(t){return t.map(t=>-1<["\\'","\\\\"].indexOf(t)?t[1]:t).join("")}function I(t){return t.map(t=>-1<['\\"',"\\\\"].indexOf(t)?t[1]:t).join("")}function M(t){return t.map(([,t])=>-1<["\\`","\\\\"].indexOf(t)?t[1]:t).join("")}var h={},a=(t=void 0!==t?t:{}).grammarSource,r={Start:jr},N=jr,q="{{",B="}}",u="(",i=")",D="?",G=":",H="@",f=".",J="[",K="]",Q=",",V="null",W="NULL",X="true",Y="TRUE",tt="false",rt="FALSE",et="'",c="\\'",s="\\\\",nt='"',A='\\"',ot="`",p="${",d="\\`",at="0",ct="e",st="==",o="=",ut="===",it="!=",lt="!==",ht=">",ft=">=",At="<",pt="<=",dt=/^[ \t\r\n]/,Ct=/^[a-zA-Z_$]/,C=/^[a-zA-Z0-9_$]/,gt=/^[^']/,vt=/^[^"]/,xt=/^[^`]/,g=/^[0-9]/,v=/^[+\-]/,mt=/^[1-9]/,bt=O("{{",!1),yt=O("}}",!1),Et={type:"any"},x=O("(",!1),m=O(")",!1),Tt=O("?",!1),wt=O(":",!1),kt=O("@",!1),b=O(".",!1),jt=O("[",!1),Lt=O("]",!1),Ft=O(",",!1),St=P([" ","\t","\r","\n"],!1,!1),Ot=P([["a","z"],["A","Z"],"_","$"],!1,!1),y=P([["a","z"],["A","Z"],["0","9"],"_","$"],!1,!1),Pt=O("null",!1),Rt=O("NULL",!1),$t=O("true",!1),Ut=O("TRUE",!1),zt=O("false",!1),Zt=O("FALSE",!1),_t=O("'",!1),It=O("\\'",!1),E=O("\\\\",!1),Mt=P(["'"],!0,!1),Nt=O('"',!1),qt=O('\\"',!1),Bt=P(['"'],!0,!1),Dt=O("`",!1),Gt=O("${",!1),Ht=O("\\`",!1),Jt=P(["`"],!0,!1),T=P([["0","9"]],!1,!1),w=P(["+","-"],!1,!1),Kt=O("0",!1),Qt=P([["1","9"]],!1,!1),Vt=O("e",!0),Wt=O("==",!1),k=O("=",!1),Xt=O("===",!1),Yt=O("!=",!1),tr=O("!==",!1),rr=O(">",!1),er=O(">=",!1),nr=O("<",!1),or=O("<=",!1),ar=function(t){return t},cr=function(){return[]},sr=function(t){return t},ur=function(){return new TextToken(n(),S())},ir=function(t,r,e){return new TernaryExpressionToken(t,r,e,n(),S())},lr=function(t,r,e){return new ComparisonExpressionToken(t,e,r,n(),S())},hr=function(t,r,e){return new CallExpressionObjectAccess(e)},fr=function(t,r,e){return new CallExpressionArrayAccess(e)},Ar=function(t,r,e){return new CallExpressionInvocation(null!=e?e:[])},pr=function(t,r,e){return new CallExpressionToken("@"===t,r,e,n(),S())},dr=function(t){return new LiteralToken(t,n(),S())},Cr=function(t){return new LiteralToken(t,n(),S())},gr=function(t){return new LiteralToken(t,n(),S())},vr=function(t){return new LiteralToken(t,n(),S())},xr=function(){return parseFloat(n())},mr=function(){return parseFloat(n())},br=function(){return parseFloat(n())},j=0,L=0,yr=[{line:1,column:1}],e=0,Er=[],F=0;if("startRule"in t){if(!(t.startRule in r))throw new Error("Can't start parsing from rule \""+t.startRule+'".');N=r[t.startRule]}function n(){return l.substring(L,j)}function S(){return wr(L,j)}function O(t,r){return{type:"literal",text:t,ignoreCase:r}}function P(t,r,e){return{type:"class",parts:t,inverted:r,ignoreCase:e}}function Tr(t){var r,e=yr[t];if(e)return e;for(r=t-1;!yr[r];)r--;for(e={line:(e=yr[r]).line,column:e.column};r<t;)10===l.charCodeAt(r)?(e.line++,e.column=1):e.column++,r++;return yr[t]=e}function wr(t,r,e){var n=Tr(t),o=Tr(r),t={source:a,start:{offset:t,line:n.line,column:n.column},end:{offset:r,line:o.line,column:o.column}};return e&&a&&"function"==typeof a.offset&&(t.start=a.offset(t.start),t.end=a.offset(t.end)),t}function R(t){j<e||(e<j&&(e=j,Er=[]),Er.push(t))}function kr(t,r,e){return new Mr(Mr.buildMessage(t,r),t,r,e)}function jr(){var t=j,r=[],e=Lr();if((e=e===h?Fr():e)!==h)for(;e!==h;)r.push(e),(e=Lr())===h&&(e=Fr());else r=h;return r!==h&&(L=t,r=ar(r)),(t=r)===h&&(r="",L=t=j,t=r=cr()),t}function Lr(){var t,r,e=j;return l.substr(j,2)===q?(t=q,j+=2):(t=h,0===F&&R(bt)),e=t!==h&&(U(),(t=$())!==h)&&(U(),l.substr(j,2)===B?(r=B,j+=2):(r=h,0===F&&R(yt)),r!==h)?(L=e,sr(t)):(j=e,h)}function Fr(){var t,r=j;return l.length>j?(t=l.charAt(j),j++):(t=h,0===F&&R(Et)),t!==h&&(L=r,t=ur()),t}function $(){var t=Pr();return t=t===h&&(t=Rr())===h&&(t=$r())===h?zr():t}function Sr(){var t,r,e=j;return 40===l.charCodeAt(j)?(t=u,j++):(t=h,0===F&&R(x)),e=(e=t!==h&&(U(),(t=Pr())!==h)&&(U(),41===l.charCodeAt(j)?(r=i,j++):(r=h,0===F&&R(m)),r!==h)?(L=e,t):(j=e,h))===h&&(e=Rr())===h&&(e=$r())===h?zr():e}function Or(){var t,r,e,n=j;return 40===l.charCodeAt(j)?(t=u,j++):(t=h,0===F&&R(x)),n=(n=t!==h&&(U(),(r=Pr())!==h)&&(U(),41===l.charCodeAt(j)?(e=i,j++):(e=h,0===F&&R(m)),e!==h)?(L=n,r):(j=n,h))===h&&(n=j,40===l.charCodeAt(j)?(t=u,j++):(t=h,0===F&&R(x)),(n=t!==h&&(U(),(r=Rr())!==h)&&(U(),41===l.charCodeAt(j)?(e=i,j++):(e=h,0===F&&R(m)),e!==h)?(L=n,r):(j=n,h))===h)&&(n=$r())===h?zr():n}function Pr(){var t,r,e=j,n=Sr();return e=n!==h&&(U(),63===l.charCodeAt(j)?(t=D,j++):(t=h,0===F&&R(Tt)),t!==h)&&(U(),(t=Sr())!==h)&&(U(),58===l.charCodeAt(j)?(r=G,j++):(r=h,0===F&&R(wt)),r!==h)&&(U(),(r=Sr())!==h)?(L=e,ir(n,t,r)):(j=e,h)}function Rr(){var t,r,e=j,n=Or();return e=n!==h&&(U(),(t=function(){var t,r,e,n;t=j,l.substr(j,2)===st?(r=st,j+=2):(r=h,0===F&&R(Wt));t=r!==h&&(e=j,F++,61===l.charCodeAt(j)?(n=o,j++):(n=h,0===F&&R(k)),F--,e=n===h?void 0:(j=e,h),e!==h)?(L=t,r):(j=t,h);t===h&&(l.substr(j,3)===ut?(t=ut,j+=3):(t=h,0===F&&R(Xt)),t===h)&&(t=j,l.substr(j,2)===it?(r=it,j+=2):(r=h,0===F&&R(Yt)),(t=r!==h&&(e=j,F++,61===l.charCodeAt(j)?(n=o,j++):(n=h,0===F&&R(k)),F--,(e=n===h?void 0:(j=e,h))!==h)?(L=t,r):(j=t,h))===h)&&(l.substr(j,3)===lt?(t=lt,j+=3):(t=h,0===F&&R(tr)),t===h)&&(t=j,62===l.charCodeAt(j)?(r=ht,j++):(r=h,0===F&&R(rr)),(t=r!==h&&(e=j,F++,61===l.charCodeAt(j)?(n=o,j++):(n=h,0===F&&R(k)),F--,(e=n===h?void 0:(j=e,h))!==h)?(L=t,r):(j=t,h))===h)&&(l.substr(j,2)===ft?(t=ft,j+=2):(t=h,0===F&&R(er)),t===h)&&(t=j,60===l.charCodeAt(j)?(r=At,j++):(r=h,0===F&&R(nr)),(t=r!==h&&(e=j,F++,61===l.charCodeAt(j)?(n=o,j++):(n=h,0===F&&R(k)),F--,(e=n===h?void 0:(j=e,h))!==h)?(L=t,r):(j=t,h))===h)&&(l.substr(j,2)===pt?(t=pt,j+=2):(t=h,0===F&&R(or)));return t}())!==h)&&(U(),(r=Or())!==h)?(L=e,lr(n,t,r)):(j=e,h)}function $r(){var t,r,e,n,o,a,c,s=j;if(64===l.charCodeAt(j)?(t=H,j++):(t=h,0===F&&R(kt)),t===h&&(t=null),(r=Zr())!==h){for(e=[],n=j,U(),46===l.charCodeAt(j)?(o=f,j++):(o=h,0===F&&R(b)),(n=o!==h&&(U(),(a=Zr())!==h)?(L=n,hr(t,r,a)):(j=n,h))===h&&(n=j,U(),91===l.charCodeAt(j)?(o=J,j++):(o=h,0===F&&R(jt)),(n=o!==h&&(U(),(a=$())!==h)&&(U(),93===l.charCodeAt(j)?(c=K,j++):(c=h,0===F&&R(Lt)),c!==h)?(L=n,fr(t,r,a)):(j=n,h))===h)&&(n=j,U(),40===l.charCodeAt(j)?(o=u,j++):(o=h,0===F&&R(x)),n=o!==h&&(U(),(a=Ur())===h&&(a=null),U(),41===l.charCodeAt(j)?(c=i,j++):(c=h,0===F&&R(m)),c!==h)?(L=n,Ar(t,r,a)):(j=n,h));n!==h;)e.push(n),n=j,U(),46===l.charCodeAt(j)?(o=f,j++):(o=h,0===F&&R(b)),(n=o!==h&&(U(),(a=Zr())!==h)?(L=n,hr(t,r,a)):(j=n,h))===h&&(n=j,U(),91===l.charCodeAt(j)?(o=J,j++):(o=h,0===F&&R(jt)),(n=o!==h&&(U(),(a=$())!==h)&&(U(),93===l.charCodeAt(j)?(c=K,j++):(c=h,0===F&&R(Lt)),c!==h)?(L=n,fr(t,r,a)):(j=n,h))===h)&&(n=j,U(),40===l.charCodeAt(j)?(o=u,j++):(o=h,0===F&&R(x)),n=o!==h&&(U(),(a=Ur())===h&&(a=null),U(),41===l.charCodeAt(j)?(c=i,j++):(c=h,0===F&&R(m)),c!==h)?(L=n,Ar(t,r,a)):(j=n,h));L=s,s=pr(t,r,e)}else j=s,s=h;return s}function Ur(){var t,r,e,n,o,a,c=j,s=$();if(s!==h){for(t=[],r=j,e=U(),44===l.charCodeAt(j)?(n=Q,j++):(n=h,0===F&&R(Ft)),r=n!==h&&(o=U(),(a=$())!==h)?e=[e,n,o,a]:(j=r,h);r!==h;)t.push(r),r=j,e=U(),44===l.charCodeAt(j)?(n=Q,j++):(n=h,0===F&&R(Ft)),r=n!==h&&(o=U(),(a=$())!==h)?e=[e,n,o,a]:(j=r,h);L=c,c=z(s,t)}else j=c,c=h;return c}function zr(){var t=j,r=_r();return r!==h&&(L=t,r=dr(r)),(t=r)===h&&(t=j,(r=Ir())!==h&&(L=t,r=Cr(r)),(t=r)===h)&&(t=j,(r=function(){var t,r,e,n;t=j,t=(r=function(){var t,r,e,n,o,a,c,s,u,i;t=j,v.test(l.charAt(j))?(r=l.charAt(j),j++):(r=h,0===F&&R(w));r===h&&(r=null);48===l.charCodeAt(j)?(e=at,j++):(e=h,0===F&&R(Kt));if(e===h)if(e=j,mt.test(l.charAt(j))?(n=l.charAt(j),j++):(n=h,0===F&&R(Qt)),n!==h){for(o=[],g.test(l.charAt(j))?(a=l.charAt(j),j++):(a=h,0===F&&R(T));a!==h;)o.push(a),g.test(l.charAt(j))?(a=l.charAt(j),j++):(a=h,0===F&&R(T));e=n=[n,o]}else j=e,e=h;if(e!==h)if(46===l.charCodeAt(j)?(n=f,j++):(n=h,0===F&&R(b)),n!==h){for(o=[],g.test(l.charAt(j))?(a=l.charAt(j),j++):(a=h,0===F&&R(T));a!==h;)o.push(a),g.test(l.charAt(j))?(a=l.charAt(j),j++):(a=h,0===F&&R(T));if(a=j,l.substr(j,1).toLowerCase()===ct?(c=l.charAt(j),j++):(c=h,0===F&&R(Vt)),c!==h){if(v.test(l.charAt(j))?(s=l.charAt(j),j++):(s=h,0===F&&R(w)),s===h&&(s=null),u=[],g.test(l.charAt(j))?(i=l.charAt(j),j++):(i=h,0===F&&R(T)),i!==h)for(;i!==h;)u.push(i),g.test(l.charAt(j))?(i=l.charAt(j),j++):(i=h,0===F&&R(T));else u=h;a=u!==h?c=[c,s,u]:(j=a,h)}else j=a,a=h;a===h&&(a=null),L=t,t=xr()}else j=t,t=h;else j=t,t=h;if(t===h){if(t=j,v.test(l.charAt(j))?(r=l.charAt(j),j++):(r=h,0===F&&R(w)),r===h&&(r=null),46===l.charCodeAt(j)?(e=f,j++):(e=h,0===F&&R(b)),e!==h){if(n=[],g.test(l.charAt(j))?(o=l.charAt(j),j++):(o=h,0===F&&R(T)),o!==h)for(;o!==h;)n.push(o),g.test(l.charAt(j))?(o=l.charAt(j),j++):(o=h,0===F&&R(T));else n=h;if(n!==h){if(o=j,l.substr(j,1).toLowerCase()===ct?(a=l.charAt(j),j++):(a=h,0===F&&R(Vt)),a!==h){if(v.test(l.charAt(j))?(c=l.charAt(j),j++):(c=h,0===F&&R(w)),c===h&&(c=null),s=[],g.test(l.charAt(j))?(u=l.charAt(j),j++):(u=h,0===F&&R(T)),u!==h)for(;u!==h;)s.push(u),g.test(l.charAt(j))?(u=l.charAt(j),j++):(u=h,0===F&&R(T));else s=h;o=s!==h?a=[a,c,s]:(j=o,h)}else j=o,o=h;o===h&&(o=null),L=t,t=mr()}else j=t,t=h}else j=t,t=h;if(t===h){if(t=j,v.test(l.charAt(j))?(r=l.charAt(j),j++):(r=h,0===F&&R(w)),r===h&&(r=null),48===l.charCodeAt(j)?(e=at,j++):(e=h,0===F&&R(Kt)),e===h)if(e=j,mt.test(l.charAt(j))?(n=l.charAt(j),j++):(n=h,0===F&&R(Qt)),n!==h){for(o=[],g.test(l.charAt(j))?(a=l.charAt(j),j++):(a=h,0===F&&R(T));a!==h;)o.push(a),g.test(l.charAt(j))?(a=l.charAt(j),j++):(a=h,0===F&&R(T));e=n=[n,o]}else j=e,e=h;if(e!==h){if(n=j,l.substr(j,1).toLowerCase()===ct?(o=l.charAt(j),j++):(o=h,0===F&&R(Vt)),o!==h){if(v.test(l.charAt(j))?(a=l.charAt(j),j++):(a=h,0===F&&R(w)),a===h&&(a=null),c=[],g.test(l.charAt(j))?(s=l.charAt(j),j++):(s=h,0===F&&R(T)),s!==h)for(;s!==h;)c.push(s),g.test(l.charAt(j))?(s=l.charAt(j),j++):(s=h,0===F&&R(T));else c=h;n=c!==h?o=[o,a,c]:(j=n,h)}else j=n,n=h;n===h&&(n=null),L=t,t=br()}else j=t,t=h}}return t}())!==h&&(e=j,F++,Ct.test(l.charAt(j))?(n=l.charAt(j),j++):(n=h,0===F&&R(Ot)),n===h&&(g.test(l.charAt(j))?(n=l.charAt(j),j++):(n=h,0===F&&R(T))),F--,e=n===h?void 0:(j=e,h),e!==h)?(L=t,r):(j=t,h);return t}())!==h&&(L=t,r=gr(r)),(t=r)===h)&&(t=j,(r=function(){var t,r,e,n,o,a;t=j,39===l.charCodeAt(j)?(r=et,j++):(r=h,0===F&&R(_t));if(r!==h){for(e=[],l.substr(j,2)===c?(n=c,j+=2):(n=h,0===F&&R(It)),n===h&&(l.substr(j,2)===s?(n=s,j+=2):(n=h,0===F&&R(E)),n===h)&&(gt.test(l.charAt(j))?(n=l.charAt(j),j++):(n=h,0===F&&R(Mt)));n!==h;)e.push(n),l.substr(j,2)===c?(n=c,j+=2):(n=h,0===F&&R(It)),n===h&&(l.substr(j,2)===s?(n=s,j+=2):(n=h,0===F&&R(E)),n===h)&&(gt.test(l.charAt(j))?(n=l.charAt(j),j++):(n=h,0===F&&R(Mt)));39===l.charCodeAt(j)?(n=et,j++):(n=h,0===F&&R(_t)),t=n!==h?(L=t,_(e)):(j=t,h)}else j=t,t=h;if(t===h){if(t=j,34===l.charCodeAt(j)?(r=nt,j++):(r=h,0===F&&R(Nt)),r!==h){for(e=[],l.substr(j,2)===A?(n=A,j+=2):(n=h,0===F&&R(qt)),n===h&&(l.substr(j,2)===s?(n=s,j+=2):(n=h,0===F&&R(E)),n===h)&&(vt.test(l.charAt(j))?(n=l.charAt(j),j++):(n=h,0===F&&R(Bt)));n!==h;)e.push(n),l.substr(j,2)===A?(n=A,j+=2):(n=h,0===F&&R(qt)),n===h&&(l.substr(j,2)===s?(n=s,j+=2):(n=h,0===F&&R(E)),n===h)&&(vt.test(l.charAt(j))?(n=l.charAt(j),j++):(n=h,0===F&&R(Bt)));34===l.charCodeAt(j)?(n=nt,j++):(n=h,0===F&&R(Nt)),t=n!==h?(L=t,I(e)):(j=t,h)}else j=t,t=h;if(t===h)if(t=j,96===l.charCodeAt(j)?(r=ot,j++):(r=h,0===F&&R(Dt)),r!==h){for(e=[],o=n=j,F++,l.substr(j,2)===p?(a=p,j+=2):(a=h,0===F&&R(Gt)),F--,o=a===h?void 0:(j=o,h),n=o!==h&&(l.substr(j,2)===d?(a=d,j+=2):(a=h,0===F&&R(Ht)),a===h&&(l.substr(j,2)===s?(a=s,j+=2):(a=h,0===F&&R(E)),a===h)&&(xt.test(l.charAt(j))?(a=l.charAt(j),j++):(a=h,0===F&&R(Jt))),a!==h)?o=[o,a]:(j=n,h);n!==h;)e.push(n),o=n=j,F++,l.substr(j,2)===p?(a=p,j+=2):(a=h,0===F&&R(Gt)),F--,o=a===h?void 0:(j=o,h),n=o!==h&&(l.substr(j,2)===d?(a=d,j+=2):(a=h,0===F&&R(Ht)),a===h&&(l.substr(j,2)===s?(a=s,j+=2):(a=h,0===F&&R(E)),a===h)&&(xt.test(l.charAt(j))?(a=l.charAt(j),j++):(a=h,0===F&&R(Jt))),a!==h)?o=[o,a]:(j=n,h);96===l.charCodeAt(j)?(n=ot,j++):(n=h,0===F&&R(Dt)),t=n!==h?(L=t,M(e)):(j=t,h)}else j=t,t=h}return t}())!==h&&(L=t,r=vr(r)),t=r),t}function U(){var t,r=[];for(dt.test(l.charAt(j))?(t=l.charAt(j),j++):(t=h,0===F&&R(St));t!==h;)r.push(t),dt.test(l.charAt(j))?(t=l.charAt(j),j++):(t=h,0===F&&R(St));return r}function Zr(){var t,r,e,n,o=j,a=j;if(F++,t=function(){var t;(t=_r())===h&&(t=Ir());return t}(),F--,(a=t===h?void 0:(j=a,h))!==h){if(t=j,Ct.test(l.charAt(j))?(r=l.charAt(j),j++):(r=h,0===F&&R(Ot)),r!==h){for(e=[],C.test(l.charAt(j))?(n=l.charAt(j),j++):(n=h,0===F&&R(y));n!==h;)e.push(n),C.test(l.charAt(j))?(n=l.charAt(j),j++):(n=h,0===F&&R(y));t=r=[r,e]}else j=t,t=h;o=t!==h?(L=o,Z(t)):(j=o,h)}else j=o,o=h;return o}function _r(){var t,r,e,n=j;return l.substr(j,4)===V?(t=V,j+=4):(t=h,0===F&&R(Pt)),(n=t!==h&&(r=j,F++,C.test(l.charAt(j))?(e=l.charAt(j),j++):(e=h,0===F&&R(y)),F--,(r=e===h?void 0:(j=r,h))!==h)?(L=n,null):(j=n,h))===h&&(n=j,l.substr(j,4)===W?(t=W,j+=4):(t=h,0===F&&R(Rt)),n=t!==h&&(r=j,F++,C.test(l.charAt(j))?(e=l.charAt(j),j++):(e=h,0===F&&R(y)),F--,(r=e===h?void 0:(j=r,h))!==h)?(L=n,null):(j=n,h)),n}function Ir(){var t,r,e,n=j;return l.substr(j,4)===X?(t=X,j+=4):(t=h,0===F&&R($t)),(n=t!==h&&(r=j,F++,C.test(l.charAt(j))?(e=l.charAt(j),j++):(e=h,0===F&&R(y)),F--,(r=e===h?void 0:(j=r,h))!==h)?(L=n,!0):(j=n,h))===h&&(n=j,l.substr(j,4)===Y?(t=Y,j+=4):(t=h,0===F&&R(Ut)),(n=t!==h&&(r=j,F++,C.test(l.charAt(j))?(e=l.charAt(j),j++):(e=h,0===F&&R(y)),F--,(r=e===h?void 0:(j=r,h))!==h)?(L=n,!0):(j=n,h))===h)&&(n=j,l.substr(j,5)===tt?(t=tt,j+=5):(t=h,0===F&&R(zt)),(n=t!==h&&(r=j,F++,C.test(l.charAt(j))?(e=l.charAt(j),j++):(e=h,0===F&&R(y)),F--,(r=e===h?void 0:(j=r,h))!==h)?(L=n,!1):(j=n,h))===h)&&(n=j,l.substr(j,5)===rt?(t=rt,j+=5):(t=h,0===F&&R(Zt)),n=t!==h&&(r=j,F++,C.test(l.charAt(j))?(e=l.charAt(j),j++):(e=h,0===F&&R(y)),F--,(r=e===h?void 0:(j=r,h))!==h)?(L=n,!1):(j=n,h)),n}if((r=N())!==h&&j===l.length)return r;throw r!==h&&j<l.length&&R({type:"end"}),kr(Er,e<l.length?l.charAt(e):null,e<l.length?wr(e,e+1):wr(e,e))}}}(),parse=(peggyParser.SyntaxError.prototype.name="PeggySyntaxError",peggyParser.parse),PeggySyntaxError=peggyParser.SyntaxError;export default parse;