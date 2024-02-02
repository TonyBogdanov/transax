import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as i,c,a as e,d as l,w as o,b as t,e as s}from"./app-FYuzNta1.js";const h={},d=e("h1",{id:"class-texttoken",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#class-texttoken"},[e("span",null,"Class: TextToken")])],-1),p=e("p",null,"Represents a text token, i.e. any text that is not an evaluable expression (anything outside curly brackets).",-1),u=e("p",null,[t("Example: "),e("code",null,"Hello world!")],-1),_=e("h2",{id:"hierarchy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hierarchy"},[e("span",null,"Hierarchy")])],-1),m=e("code",null,"CompilerToken",-1),f=e("p",null,[t("↳ "),e("strong",null,[e("code",null,"TextToken")])],-1),x=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents"},[e("span",null,"Table of contents")])],-1),T=e("h3",{id:"constructors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors"},[e("span",null,"Constructors")])],-1),b=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties"},[e("span",null,"Properties")])],-1),g=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods"},[e("span",null,"Methods")])],-1),k=e("h2",{id:"constructors-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors-1"},[e("span",null,"Constructors")])],-1),y=e("h3",{id:"constructor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructor"},[e("span",null,"constructor")])],-1),C=e("strong",null,"new TextToken",-1),w=e("code",null,"text",-1),v=e("code",null,"location",-1),N=e("code",null,"TextToken",-1),R=s('<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>location</code></td><td style="text-align:left;"><code>LocationRange</code></td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h4>',3),I=e("code",null,"TextToken",-1),P=e("p",null,[e("strong",null,[e("code",null,"Inherit Doc")])],-1),O=e("h4",{id:"overrides",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides"},[e("span",null,"Overrides")])],-1),V=s('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1"><span>Properties</span></a></h2><h3 id="column" tabindex="-1"><a class="header-anchor" href="#column"><span>column</span></a></h3><p>• <strong>column</strong>: <code>number</code></p><p>The column number of the expression within the translation message.</p><h4 id="inherited-from" tabindex="-1"><a class="header-anchor" href="#inherited-from"><span>Inherited from</span></a></h4>',5),W=e("hr",null,null,-1),B=e("h3",{id:"line",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#line"},[e("span",null,"line")])],-1),D=e("p",null,[t("• "),e("strong",null,"line"),t(": "),e("code",null,"number")],-1),E=e("p",null,"The line number of the expression within the translation message.",-1),L=e("h4",{id:"inherited-from-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-1"},[e("span",null,"Inherited from")])],-1),M=e("hr",null,null,-1),S=e("h3",{id:"text",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#text"},[e("span",null,"text")])],-1),H=e("p",null,[t("• "),e("strong",null,"text"),t(": "),e("code",null,"string")],-1),A=e("p",null,"The full text (content) of the expression.",-1),F=e("h4",{id:"inherited-from-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-2"},[e("span",null,"Inherited from")])],-1),j=s('<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1"><span>Methods</span></a></h2><h3 id="compile" tabindex="-1"><a class="header-anchor" href="#compile"><span>compile</span></a></h3><p>▸ <strong>compile</strong>(<code>context</code>): <code>string</code></p><p>Compiles the expression into an executable ECMAScript6 string.</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4>',5),q=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),z=e("td",{style:{"text-align":"left"}},[e("code",null,"context")],-1),G={style:{"text-align":"left"}},J=e("code",null,"CompilerContext",-1),K=e("td",{style:{"text-align":"left"}},"The context to use for compiling the expression.",-1),Q=e("h4",{id:"returns-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-1"},[e("span",null,"Returns")])],-1),U=e("p",null,[e("code",null,"string")],-1),X=e("h4",{id:"overrides-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides-1"},[e("span",null,"Overrides")])],-1),Y=s('<hr><h3 id="compilewrap" tabindex="-1"><a class="header-anchor" href="#compilewrap"><span>compileWrap</span></a></h3><p>▸ <strong>compileWrap</strong>(<code>context</code>, <code>instanceOfs</code>): <code>string</code></p><p>Same as <code>compile()</code> except that it wraps the compiled expression in parentheses if the current token is an instance of the specified types.</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4>',5),Z=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),$=e("td",{style:{"text-align":"left"}},[e("code",null,"context")],-1),ee={style:{"text-align":"left"}},te=e("code",null,"CompilerContext",-1),ne=e("td",{style:{"text-align":"left"}},"The context to use for compiling the expression.",-1),le=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"instanceOfs")]),e("td",{style:{"text-align":"left"}},[e("code",null,"Function"),t("[]")]),e("td",{style:{"text-align":"left"}},"The types to check for.")],-1),oe=e("h4",{id:"returns-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-2"},[e("span",null,"Returns")])],-1),se=e("p",null,[e("code",null,"string")],-1),ae=e("h4",{id:"inherited-from-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-3"},[e("span",null,"Inherited from")])],-1);function re(ie,ce){const n=r("RouterLink");return i(),c("div",null,[d,p,u,_,e("ul",null,[e("li",null,[e("p",null,[l(n,{to:"/api/classes/CompilerToken.html"},{default:o(()=>[m]),_:1})]),f])]),x,T,e("ul",null,[e("li",null,[l(n,{to:"/api/classes/TextToken.html#constructor"},{default:o(()=>[t("constructor")]),_:1})])]),b,e("ul",null,[e("li",null,[l(n,{to:"/api/classes/TextToken.html#column"},{default:o(()=>[t("column")]),_:1})]),e("li",null,[l(n,{to:"/api/classes/TextToken.html#line"},{default:o(()=>[t("line")]),_:1})]),e("li",null,[l(n,{to:"/api/classes/TextToken.html#text"},{default:o(()=>[t("text")]),_:1})])]),g,e("ul",null,[e("li",null,[l(n,{to:"/api/classes/TextToken.html#compile"},{default:o(()=>[t("compile")]),_:1})]),e("li",null,[l(n,{to:"/api/classes/TextToken.html#compilewrap"},{default:o(()=>[t("compileWrap")]),_:1})])]),k,y,e("p",null,[t("• "),C,t("("),w,t(", "),v,t("): "),l(n,{to:"/api/classes/TextToken.html"},{default:o(()=>[N]),_:1})]),R,e("p",null,[l(n,{to:"/api/classes/TextToken.html"},{default:o(()=>[I]),_:1})]),P,O,e("p",null,[l(n,{to:"/api/classes/CompilerToken.html"},{default:o(()=>[t("CompilerToken")]),_:1}),t("."),l(n,{to:"/api/classes/CompilerToken.html#constructor"},{default:o(()=>[t("constructor")]),_:1})]),V,e("p",null,[l(n,{to:"/api/classes/CompilerToken.html"},{default:o(()=>[t("CompilerToken")]),_:1}),t("."),l(n,{to:"/api/classes/CompilerToken.html#column"},{default:o(()=>[t("column")]),_:1})]),W,B,D,E,L,e("p",null,[l(n,{to:"/api/classes/CompilerToken.html"},{default:o(()=>[t("CompilerToken")]),_:1}),t("."),l(n,{to:"/api/classes/CompilerToken.html#line"},{default:o(()=>[t("line")]),_:1})]),M,S,H,A,F,e("p",null,[l(n,{to:"/api/classes/CompilerToken.html"},{default:o(()=>[t("CompilerToken")]),_:1}),t("."),l(n,{to:"/api/classes/CompilerToken.html#text"},{default:o(()=>[t("text")]),_:1})]),j,e("table",null,[q,e("tbody",null,[e("tr",null,[z,e("td",G,[l(n,{to:"/api/classes/CompilerContext.html"},{default:o(()=>[J]),_:1})]),K])])]),Q,U,X,e("p",null,[l(n,{to:"/api/classes/CompilerToken.html"},{default:o(()=>[t("CompilerToken")]),_:1}),t("."),l(n,{to:"/api/classes/CompilerToken.html#compile"},{default:o(()=>[t("compile")]),_:1})]),Y,e("table",null,[Z,e("tbody",null,[e("tr",null,[$,e("td",ee,[l(n,{to:"/api/classes/CompilerContext.html"},{default:o(()=>[te]),_:1})]),ne]),le])]),oe,se,ae,e("p",null,[l(n,{to:"/api/classes/CompilerToken.html"},{default:o(()=>[t("CompilerToken")]),_:1}),t("."),l(n,{to:"/api/classes/CompilerToken.html#compilewrap"},{default:o(()=>[t("compileWrap")]),_:1})])])}const pe=a(h,[["render",re],["__file","TextToken.html.vue"]]);export{pe as default};
