import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as i,c as d,a as e,d as n,w as l,b as t,e as a}from"./app-bf65b795.js";const h={},c=e("h1",{id:"class-texttoken",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#class-texttoken","aria-hidden":"true"},"#"),t(" Class: TextToken")],-1),u=e("p",null,"Represents a text token, i.e. any text that is not an evaluable expression (anything outside curly brackets).",-1),p=e("p",null,[t("Example: "),e("code",null,"Hello world!")],-1),m=e("h2",{id:"hierarchy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hierarchy","aria-hidden":"true"},"#"),t(" Hierarchy")],-1),_=e("code",null,"CompilerToken",-1),f=e("p",null,[t("↳ "),e("strong",null,[e("code",null,"TextToken")])],-1),x=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),t(" Table of contents")],-1),T=e("h3",{id:"constructors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors","aria-hidden":"true"},"#"),t(" Constructors")],-1),g=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),b=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),k=a('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>• <strong>new TextToken</strong>(<code>text</code>, <code>location</code>)</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>location</code></td><td style="text-align:left;"><code>LocationRange</code></td></tr></tbody></table><p><strong><code>Inherit Doc</code></strong></p><h4 id="overrides" tabindex="-1"><a class="header-anchor" href="#overrides" aria-hidden="true">#</a> Overrides</h4>',7),y=a('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="column" tabindex="-1"><a class="header-anchor" href="#column" aria-hidden="true">#</a> column</h3><p>• <strong>column</strong>: <code>number</code></p><p>The column number of the expression within the translation message.</p><h4 id="inherited-from" tabindex="-1"><a class="header-anchor" href="#inherited-from" aria-hidden="true">#</a> Inherited from</h4>',5),C=e("hr",null,null,-1),w=e("h3",{id:"line",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#line","aria-hidden":"true"},"#"),t(" line")],-1),v=e("p",null,[t("• "),e("strong",null,"line"),t(": "),e("code",null,"number")],-1),N=e("p",null,"The line number of the expression within the translation message.",-1),P=e("h4",{id:"inherited-from-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-1","aria-hidden":"true"},"#"),t(" Inherited from")],-1),R=e("hr",null,null,-1),I=e("h3",{id:"text",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#text","aria-hidden":"true"},"#"),t(" text")],-1),O=e("p",null,[t("• "),e("strong",null,"text"),t(": "),e("code",null,"string")],-1),V=e("p",null,"The full text (content) of the expression.",-1),W=e("h4",{id:"inherited-from-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-2","aria-hidden":"true"},"#"),t(" Inherited from")],-1),B=a('<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="compile" tabindex="-1"><a class="header-anchor" href="#compile" aria-hidden="true">#</a> compile</h3><p>▸ <strong>compile</strong>(<code>context</code>): <code>string</code></p><p>Compiles the expression into an executable ECMAScript6 string.</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4>',5),D=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),E=e("td",{style:{"text-align":"left"}},[e("code",null,"context")],-1),L={style:{"text-align":"left"}},M=e("code",null,"CompilerContext",-1),S=e("td",{style:{"text-align":"left"}},"The context to use for compiling the expression.",-1),H=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns","aria-hidden":"true"},"#"),t(" Returns")],-1),A=e("p",null,[e("code",null,"string")],-1),F=e("h4",{id:"overrides-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides-1","aria-hidden":"true"},"#"),t(" Overrides")],-1),j=a('<hr><h3 id="compilewrap" tabindex="-1"><a class="header-anchor" href="#compilewrap" aria-hidden="true">#</a> compileWrap</h3><p>▸ <code>Protected</code> <strong>compileWrap</strong>(<code>context</code>, <code>instanceOfs</code>): <code>string</code></p><p>Same as <code>compile()</code> except that it wraps the compiled expression in parentheses if the current token is an instance of the specified types.</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4>',5),q=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),z=e("td",{style:{"text-align":"left"}},[e("code",null,"context")],-1),G={style:{"text-align":"left"}},J=e("code",null,"CompilerContext",-1),K=e("td",{style:{"text-align":"left"}},"The context to use for compiling the expression.",-1),Q=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"instanceOfs")]),e("td",{style:{"text-align":"left"}},[e("code",null,"Function"),t("[]")]),e("td",{style:{"text-align":"left"}},"The types to check for.")],-1),U=e("h4",{id:"returns-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-1","aria-hidden":"true"},"#"),t(" Returns")],-1),X=e("p",null,[e("code",null,"string")],-1),Y=e("h4",{id:"inherited-from-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-3","aria-hidden":"true"},"#"),t(" Inherited from")],-1);function Z($,ee){const o=r("RouterLink");return i(),d("div",null,[c,u,p,m,e("ul",null,[e("li",null,[e("p",null,[n(o,{to:"/api/classes/CompilerToken.html"},{default:l(()=>[_]),_:1})]),f])]),x,T,e("ul",null,[e("li",null,[n(o,{to:"/api/classes/TextToken.html#constructor"},{default:l(()=>[t("constructor")]),_:1})])]),g,e("ul",null,[e("li",null,[n(o,{to:"/api/classes/TextToken.html#column"},{default:l(()=>[t("column")]),_:1})]),e("li",null,[n(o,{to:"/api/classes/TextToken.html#line"},{default:l(()=>[t("line")]),_:1})]),e("li",null,[n(o,{to:"/api/classes/TextToken.html#text"},{default:l(()=>[t("text")]),_:1})])]),b,e("ul",null,[e("li",null,[n(o,{to:"/api/classes/TextToken.html#compile"},{default:l(()=>[t("compile")]),_:1})]),e("li",null,[n(o,{to:"/api/classes/TextToken.html#compilewrap"},{default:l(()=>[t("compileWrap")]),_:1})])]),k,e("p",null,[n(o,{to:"/api/classes/CompilerToken.html"},{default:l(()=>[t("CompilerToken")]),_:1}),t("."),n(o,{to:"/api/classes/CompilerToken.html#constructor"},{default:l(()=>[t("constructor")]),_:1})]),y,e("p",null,[n(o,{to:"/api/classes/CompilerToken.html"},{default:l(()=>[t("CompilerToken")]),_:1}),t("."),n(o,{to:"/api/classes/CompilerToken.html#column"},{default:l(()=>[t("column")]),_:1})]),C,w,v,N,P,e("p",null,[n(o,{to:"/api/classes/CompilerToken.html"},{default:l(()=>[t("CompilerToken")]),_:1}),t("."),n(o,{to:"/api/classes/CompilerToken.html#line"},{default:l(()=>[t("line")]),_:1})]),R,I,O,V,W,e("p",null,[n(o,{to:"/api/classes/CompilerToken.html"},{default:l(()=>[t("CompilerToken")]),_:1}),t("."),n(o,{to:"/api/classes/CompilerToken.html#text"},{default:l(()=>[t("text")]),_:1})]),B,e("table",null,[D,e("tbody",null,[e("tr",null,[E,e("td",L,[n(o,{to:"/api/classes/CompilerContext.html"},{default:l(()=>[M]),_:1})]),S])])]),H,A,F,e("p",null,[n(o,{to:"/api/classes/CompilerToken.html"},{default:l(()=>[t("CompilerToken")]),_:1}),t("."),n(o,{to:"/api/classes/CompilerToken.html#compile"},{default:l(()=>[t("compile")]),_:1})]),j,e("table",null,[q,e("tbody",null,[e("tr",null,[z,e("td",G,[n(o,{to:"/api/classes/CompilerContext.html"},{default:l(()=>[J]),_:1})]),K]),Q])]),U,X,Y,e("p",null,[n(o,{to:"/api/classes/CompilerToken.html"},{default:l(()=>[t("CompilerToken")]),_:1}),t("."),n(o,{to:"/api/classes/CompilerToken.html#compilewrap"},{default:l(()=>[t("compileWrap")]),_:1})])])}const ne=s(h,[["render",Z],["__file","TextToken.html.vue"]]);export{ne as default};
