import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as d,a as e,d as l,w as a,b as t,e as n}from"./app-b6726c48.js";const c={},h=n('<h1 id="class-literaltoken" tabindex="-1"><a class="header-anchor" href="#class-literaltoken" aria-hidden="true">#</a> Class: LiteralToken</h1><p>Represents a literal (static value) expression, such as a string, number, or null.</p><p>Example: <code>&quot;foo&quot;</code>, <code>123</code>, <code>null</code>.</p><h2 id="hierarchy" tabindex="-1"><a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a> Hierarchy</h2>',4),u=e("code",null,"CompilerToken",-1),p=e("p",null,[t("↳ "),e("strong",null,[e("code",null,"LiteralToken")])],-1),m=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),t(" Table of contents")],-1),f=e("h3",{id:"constructors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors","aria-hidden":"true"},"#"),t(" Constructors")],-1),_=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),x=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),g=n('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>• <strong>new LiteralToken</strong>(<code>value</code>, <code>text</code>, <code>location</code>)</p><p>Creates a new instance.</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>string</code> | <code>number</code> | <code>boolean</code></td><td style="text-align:left;">The value of the literal.</td></tr><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The full text (content) of the expression.</td></tr><tr><td style="text-align:left;"><code>location</code></td><td style="text-align:left;"><code>LocationRange</code></td><td style="text-align:left;">The location of the invocation within the source code.</td></tr></tbody></table><h4 id="overrides" tabindex="-1"><a class="header-anchor" href="#overrides" aria-hidden="true">#</a> Overrides</h4>',7),b=n('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="column" tabindex="-1"><a class="header-anchor" href="#column" aria-hidden="true">#</a> column</h3><p>• <strong>column</strong>: <code>number</code></p><p>The column number of the expression within the translation message.</p><h4 id="inherited-from" tabindex="-1"><a class="header-anchor" href="#inherited-from" aria-hidden="true">#</a> Inherited from</h4>',5),T=e("hr",null,null,-1),k=e("h3",{id:"line",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#line","aria-hidden":"true"},"#"),t(" line")],-1),y=e("p",null,[t("• "),e("strong",null,"line"),t(": "),e("code",null,"number")],-1),C=e("p",null,"The line number of the expression within the translation message.",-1),v=e("h4",{id:"inherited-from-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-1","aria-hidden":"true"},"#"),t(" Inherited from")],-1),L=e("hr",null,null,-1),w=e("h3",{id:"text",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#text","aria-hidden":"true"},"#"),t(" text")],-1),N=e("p",null,[t("• "),e("strong",null,"text"),t(": "),e("code",null,"string")],-1),R=e("p",null,"The full text (content) of the expression.",-1),P=e("h4",{id:"inherited-from-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-2","aria-hidden":"true"},"#"),t(" Inherited from")],-1),I=n('<hr><h3 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> value</h3><p>• <code>Readonly</code> <strong>value</strong>: <code>string</code> | <code>number</code> | <code>boolean</code></p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="compile" tabindex="-1"><a class="header-anchor" href="#compile" aria-hidden="true">#</a> compile</h3><p>▸ <strong>compile</strong>(<code>context</code>): <code>string</code></p><p>Compiles the expression into an executable ECMAScript6 string.</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4>',8),O=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),V=e("td",{style:{"text-align":"left"}},[e("code",null,"context")],-1),W={style:{"text-align":"left"}},B=e("code",null,"CompilerContext",-1),D=e("td",{style:{"text-align":"left"}},"The context to use for compiling the expression.",-1),E=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns","aria-hidden":"true"},"#"),t(" Returns")],-1),M=e("p",null,[e("code",null,"string")],-1),S=e("h4",{id:"overrides-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides-1","aria-hidden":"true"},"#"),t(" Overrides")],-1),q=n('<hr><h3 id="compilewrap" tabindex="-1"><a class="header-anchor" href="#compilewrap" aria-hidden="true">#</a> compileWrap</h3><p>▸ <code>Protected</code> <strong>compileWrap</strong>(<code>context</code>, <code>instanceOfs</code>): <code>string</code></p><p>Same as <code>compile()</code> except that it wraps the compiled expression in parentheses if the current token is an instance of the specified types.</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4>',5),A=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),F=e("td",{style:{"text-align":"left"}},[e("code",null,"context")],-1),H={style:{"text-align":"left"}},j=e("code",null,"CompilerContext",-1),z=e("td",{style:{"text-align":"left"}},"The context to use for compiling the expression.",-1),G=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"instanceOfs")]),e("td",{style:{"text-align":"left"}},[e("code",null,"Function"),t("[]")]),e("td",{style:{"text-align":"left"}},"The types to check for.")],-1),J=e("h4",{id:"returns-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-1","aria-hidden":"true"},"#"),t(" Returns")],-1),K=e("p",null,[e("code",null,"string")],-1),Q=e("h4",{id:"inherited-from-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-3","aria-hidden":"true"},"#"),t(" Inherited from")],-1);function U(X,Y){const o=s("RouterLink");return i(),d("div",null,[h,e("ul",null,[e("li",null,[e("p",null,[l(o,{to:"/api/classes/CompilerToken.html"},{default:a(()=>[u]),_:1})]),p])]),m,f,e("ul",null,[e("li",null,[l(o,{to:"/api/classes/LiteralToken.html#constructor"},{default:a(()=>[t("constructor")]),_:1})])]),_,e("ul",null,[e("li",null,[l(o,{to:"/api/classes/LiteralToken.html#column"},{default:a(()=>[t("column")]),_:1})]),e("li",null,[l(o,{to:"/api/classes/LiteralToken.html#line"},{default:a(()=>[t("line")]),_:1})]),e("li",null,[l(o,{to:"/api/classes/LiteralToken.html#text"},{default:a(()=>[t("text")]),_:1})]),e("li",null,[l(o,{to:"/api/classes/LiteralToken.html#value"},{default:a(()=>[t("value")]),_:1})])]),x,e("ul",null,[e("li",null,[l(o,{to:"/api/classes/LiteralToken.html#compile"},{default:a(()=>[t("compile")]),_:1})]),e("li",null,[l(o,{to:"/api/classes/LiteralToken.html#compilewrap"},{default:a(()=>[t("compileWrap")]),_:1})])]),g,e("p",null,[l(o,{to:"/api/classes/CompilerToken.html"},{default:a(()=>[t("CompilerToken")]),_:1}),t("."),l(o,{to:"/api/classes/CompilerToken.html#constructor"},{default:a(()=>[t("constructor")]),_:1})]),b,e("p",null,[l(o,{to:"/api/classes/CompilerToken.html"},{default:a(()=>[t("CompilerToken")]),_:1}),t("."),l(o,{to:"/api/classes/CompilerToken.html#column"},{default:a(()=>[t("column")]),_:1})]),T,k,y,C,v,e("p",null,[l(o,{to:"/api/classes/CompilerToken.html"},{default:a(()=>[t("CompilerToken")]),_:1}),t("."),l(o,{to:"/api/classes/CompilerToken.html#line"},{default:a(()=>[t("line")]),_:1})]),L,w,N,R,P,e("p",null,[l(o,{to:"/api/classes/CompilerToken.html"},{default:a(()=>[t("CompilerToken")]),_:1}),t("."),l(o,{to:"/api/classes/CompilerToken.html#text"},{default:a(()=>[t("text")]),_:1})]),I,e("table",null,[O,e("tbody",null,[e("tr",null,[V,e("td",W,[l(o,{to:"/api/classes/CompilerContext.html"},{default:a(()=>[B]),_:1})]),D])])]),E,M,S,e("p",null,[l(o,{to:"/api/classes/CompilerToken.html"},{default:a(()=>[t("CompilerToken")]),_:1}),t("."),l(o,{to:"/api/classes/CompilerToken.html#compile"},{default:a(()=>[t("compile")]),_:1})]),q,e("table",null,[A,e("tbody",null,[e("tr",null,[F,e("td",H,[l(o,{to:"/api/classes/CompilerContext.html"},{default:a(()=>[j]),_:1})]),z]),G])]),J,K,Q,e("p",null,[l(o,{to:"/api/classes/CompilerToken.html"},{default:a(()=>[t("CompilerToken")]),_:1}),t("."),l(o,{to:"/api/classes/CompilerToken.html#compilewrap"},{default:a(()=>[t("compileWrap")]),_:1})])])}const ee=r(c,[["render",U],["__file","LiteralToken.html.vue"]]);export{ee as default};
