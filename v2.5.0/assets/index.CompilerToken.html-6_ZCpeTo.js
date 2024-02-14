import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as r,c,a as e,d as s,w as o,b as t,e as l}from"./app-AqB2UUvJ.js";const d={},h=e("h1",{id:"class-compilertoken",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#class-compilertoken"},[e("span",null,"Class: CompilerToken")])],-1),p=e("p",null,"An abstract class representing a single evaluable expression within translation messages.",-1),u=e("h2",{id:"hierarchy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hierarchy"},[e("span",null,"Hierarchy")])],-1),x=e("p",null,[e("strong",null,[e("code",null,"CompilerToken")])],-1),_=e("code",null,"TextToken",-1),m=e("code",null,"LiteralToken",-1),f=e("code",null,"ComparisonExpressionToken",-1),g=e("code",null,"TernaryExpressionToken",-1),T=e("code",null,"CallExpressionToken",-1),b=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents"},[e("span",null,"Table of contents")])],-1),y=e("h3",{id:"constructors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors"},[e("span",null,"Constructors")])],-1),C=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties"},[e("span",null,"Properties")])],-1),k=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods"},[e("span",null,"Methods")])],-1),w=e("h2",{id:"constructors-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors-1"},[e("span",null,"Constructors")])],-1),E=e("h3",{id:"constructor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructor"},[e("span",null,"constructor")])],-1),N=e("strong",null,"new CompilerToken",-1),R=e("code",null,"text",-1),v=e("code",null,"location",-1),L=e("code",null,"CompilerToken",-1),P=l('<p>Creates a new instance.</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The full text (content) of the expression.</td></tr><tr><td style="text-align:left;"><code>location</code></td><td style="text-align:left;"><code>LocationRange</code></td><td style="text-align:left;">The location of the invocation within the source code.</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h4>',4),V=e("code",null,"CompilerToken",-1),B=l('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1"><span>Properties</span></a></h2><h3 id="column" tabindex="-1"><a class="header-anchor" href="#column"><span>column</span></a></h3><p>• <strong>column</strong>: <code>number</code></p><p>The column number of the expression within the translation message.</p><hr><h3 id="line" tabindex="-1"><a class="header-anchor" href="#line"><span>line</span></a></h3><p>• <strong>line</strong>: <code>number</code></p><p>The line number of the expression within the translation message.</p><hr><h3 id="text" tabindex="-1"><a class="header-anchor" href="#text"><span>text</span></a></h3><p>• <strong>text</strong>: <code>string</code></p><p>The full text (content) of the expression.</p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1"><span>Methods</span></a></h2><h3 id="compile" tabindex="-1"><a class="header-anchor" href="#compile"><span>compile</span></a></h3><p>▸ <strong>compile</strong>(<code>context</code>): <code>string</code></p><p>Compiles the expression into an executable ECMAScript6 string.</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4>',17),D=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),M=e("td",{style:{"text-align":"left"}},[e("code",null,"context")],-1),S={style:{"text-align":"left"}},W=e("code",null,"CompilerContext",-1),A=e("td",{style:{"text-align":"left"}},"The context to use for compiling the expression.",-1),O=l('<h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4><p><code>string</code></p><hr><h3 id="compilewrap" tabindex="-1"><a class="header-anchor" href="#compilewrap"><span>compileWrap</span></a></h3><p>▸ <strong>compileWrap</strong>(<code>context</code>, <code>instanceOfs</code>): <code>string</code></p><p>Same as <code>compile()</code> except that it wraps the compiled expression in parentheses if the current token is an instance of the specified types.</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4>',7),F=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),H=e("td",{style:{"text-align":"left"}},[e("code",null,"context")],-1),j={style:{"text-align":"left"}},q=e("code",null,"CompilerContext",-1),z=e("td",{style:{"text-align":"left"}},"The context to use for compiling the expression.",-1),G=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"instanceOfs")]),e("td",{style:{"text-align":"left"}},[e("code",null,"Function"),t("[]")]),e("td",{style:{"text-align":"left"}},"The types to check for.")],-1),I=e("h4",{id:"returns-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-2"},[e("span",null,"Returns")])],-1),J=e("p",null,[e("code",null,"string")],-1);function K(Q,U){const n=i("RouterLink");return r(),c("div",null,[h,e("p",null,[s(n,{to:"/api/modules/"},{default:o(()=>[t("index")]),_:1}),t(".CompilerToken")]),p,u,e("ul",null,[e("li",null,[x,e("p",null,[t("↳ "),s(n,{to:"/api/classes/index.TextToken.html"},{default:o(()=>[_]),_:1})]),e("p",null,[t("↳ "),s(n,{to:"/api/classes/index.LiteralToken.html"},{default:o(()=>[m]),_:1})]),e("p",null,[t("↳ "),s(n,{to:"/api/classes/index.ComparisonExpressionToken.html"},{default:o(()=>[f]),_:1})]),e("p",null,[t("↳ "),s(n,{to:"/api/classes/index.TernaryExpressionToken.html"},{default:o(()=>[g]),_:1})]),e("p",null,[t("↳ "),s(n,{to:"/api/classes/index.CallExpressionToken.html"},{default:o(()=>[T]),_:1})])])]),b,y,e("ul",null,[e("li",null,[s(n,{to:"/api/classes/index.CompilerToken.html#constructor"},{default:o(()=>[t("constructor")]),_:1})])]),C,e("ul",null,[e("li",null,[s(n,{to:"/api/classes/index.CompilerToken.html#column"},{default:o(()=>[t("column")]),_:1})]),e("li",null,[s(n,{to:"/api/classes/index.CompilerToken.html#line"},{default:o(()=>[t("line")]),_:1})]),e("li",null,[s(n,{to:"/api/classes/index.CompilerToken.html#text"},{default:o(()=>[t("text")]),_:1})])]),k,e("ul",null,[e("li",null,[s(n,{to:"/api/classes/index.CompilerToken.html#compile"},{default:o(()=>[t("compile")]),_:1})]),e("li",null,[s(n,{to:"/api/classes/index.CompilerToken.html#compilewrap"},{default:o(()=>[t("compileWrap")]),_:1})])]),w,E,e("p",null,[t("• "),N,t("("),R,t(", "),v,t("): "),s(n,{to:"/api/classes/index.CompilerToken.html"},{default:o(()=>[L]),_:1})]),P,e("p",null,[s(n,{to:"/api/classes/index.CompilerToken.html"},{default:o(()=>[V]),_:1})]),B,e("table",null,[D,e("tbody",null,[e("tr",null,[M,e("td",S,[s(n,{to:"/api/classes/index.CompilerContext.html"},{default:o(()=>[W]),_:1})]),A])])]),O,e("table",null,[F,e("tbody",null,[e("tr",null,[H,e("td",j,[s(n,{to:"/api/classes/index.CompilerContext.html"},{default:o(()=>[q]),_:1})]),z]),G])]),I,J])}const Z=a(d,[["render",K],["__file","index.CompilerToken.html.vue"]]);export{Z as default};