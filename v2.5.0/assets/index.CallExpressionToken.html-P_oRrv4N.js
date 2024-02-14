import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as c,c as r,a as e,d as o,w as n,b as t,e as s}from"./app-AqB2UUvJ.js";const d={},h=e("h1",{id:"class-callexpressiontoken",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#class-callexpressiontoken"},[e("span",null,"Class: CallExpressionToken")])],-1),p=s('<p>Represents a call expression.</p><p>It must be represented by an identifier (local or global) optionally followed by one or more of the following:</p><ul><li>Object access: <code>.</code> followed by an identifier.</li><li>Array access: <code>[</code> followed by an expression followed by <code>]</code>.</li><li>Invocation: <code>(</code> followed by an optional comma-separated list of expressions followed by <code>)</code>.</li></ul><p>Examples: <code>local</code><code>@global</code><code>local.property</code><code>@global.property</code><code>local[0]</code><code>@global[0]</code><code>local[0].property</code><code>@global[0].property</code><code>local[0].property()</code><code>@global[0].property()</code><code>local[0].property(1, 2, 3)</code><code>@global[0].property(1, 2, 3)</code></p><h2 id="hierarchy" tabindex="-1"><a class="header-anchor" href="#hierarchy"><span>Hierarchy</span></a></h2>',5),u=e("code",null,"CompilerToken",-1),_=e("p",null,[t("↳ "),e("strong",null,[e("code",null,"CallExpressionToken")])],-1),x=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents"},[e("span",null,"Table of contents")])],-1),f=e("h3",{id:"constructors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors"},[e("span",null,"Constructors")])],-1),m=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties"},[e("span",null,"Properties")])],-1),g=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods"},[e("span",null,"Methods")])],-1),b=e("h2",{id:"constructors-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors-1"},[e("span",null,"Constructors")])],-1),y=e("h3",{id:"constructor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructor"},[e("span",null,"constructor")])],-1),C=e("strong",null,"new CallExpressionToken",-1),T=e("code",null,"global",-1),k=e("code",null,"name",-1),E=e("code",null,"tail",-1),w=e("code",null,"text",-1),v=e("code",null,"location",-1),A=e("code",null,"CallExpressionToken",-1),I=e("p",null,"Creates a new instance.",-1),R=e("h4",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters"},[e("span",null,"Parameters")])],-1),O=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),N=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"global")]),e("td",{style:{"text-align":"left"}},[e("code",null,"boolean")]),e("td",{style:{"text-align":"left"}},"Specifies whether the identifier is a global variable or a parameter.")],-1),j=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"name")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")]),e("td",{style:{"text-align":"left"}},"The name of the identifier.")],-1),P=e("td",{style:{"text-align":"left"}},[e("code",null,"tail")],-1),S={style:{"text-align":"left"}},V=e("code",null,"CallExpressionObjectAccess",-1),W=e("code",null,"CallExpressionArrayAccess",-1),B=e("code",null,"CallExpressionInvocation",-1),D=e("td",{style:{"text-align":"left"}},"An array of object accesses, array accesses or invocations.",-1),L=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"text")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")]),e("td",{style:{"text-align":"left"}},"The full text (content) of the expression.")],-1),M=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"location")]),e("td",{style:{"text-align":"left"}},[e("code",null,"LocationRange")]),e("td",{style:{"text-align":"left"}},"The location of the invocation within the source code.")],-1),F=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns"},[e("span",null,"Returns")])],-1),H=e("code",null,"CallExpressionToken",-1),q=e("h4",{id:"overrides",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides"},[e("span",null,"Overrides")])],-1),z=s('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1"><span>Properties</span></a></h2><h3 id="column" tabindex="-1"><a class="header-anchor" href="#column"><span>column</span></a></h3><p>• <strong>column</strong>: <code>number</code></p><p>The column number of the expression within the translation message.</p><h4 id="inherited-from" tabindex="-1"><a class="header-anchor" href="#inherited-from"><span>Inherited from</span></a></h4>',5),G=s('<hr><h3 id="global" tabindex="-1"><a class="header-anchor" href="#global"><span>global</span></a></h3><p>• <code>Readonly</code> <strong>global</strong>: <code>boolean</code></p><hr><h3 id="line" tabindex="-1"><a class="header-anchor" href="#line"><span>line</span></a></h3><p>• <strong>line</strong>: <code>number</code></p><p>The line number of the expression within the translation message.</p><h4 id="inherited-from-1" tabindex="-1"><a class="header-anchor" href="#inherited-from-1"><span>Inherited from</span></a></h4>',8),J=s('<hr><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name</span></a></h3><p>• <code>Readonly</code> <strong>name</strong>: <code>string</code></p><hr><h3 id="tail" tabindex="-1"><a class="header-anchor" href="#tail"><span>tail</span></a></h3>',5),K=e("code",null,"Readonly",-1),Q=e("strong",null,"tail",-1),U=e("code",null,"CallExpressionObjectAccess",-1),X=e("code",null,"CallExpressionArrayAccess",-1),Y=e("code",null,"CallExpressionInvocation",-1),Z=e("hr",null,null,-1),$=e("h3",{id:"text",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#text"},[e("span",null,"text")])],-1),ee=e("p",null,[t("• "),e("strong",null,"text"),t(": "),e("code",null,"string")],-1),te=e("p",null,"The full text (content) of the expression.",-1),le=e("h4",{id:"inherited-from-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-2"},[e("span",null,"Inherited from")])],-1),oe=s('<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1"><span>Methods</span></a></h2><h3 id="compile" tabindex="-1"><a class="header-anchor" href="#compile"><span>compile</span></a></h3><p>▸ <strong>compile</strong>(<code>context</code>): <code>string</code></p><p>Compiles the expression into an executable ECMAScript6 string.</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4>',5),ne=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),se=e("td",{style:{"text-align":"left"}},[e("code",null,"context")],-1),ae={style:{"text-align":"left"}},ie=e("code",null,"CompilerContext",-1),ce=e("td",{style:{"text-align":"left"}},"The context to use for compiling the expression.",-1),re=e("h4",{id:"returns-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-1"},[e("span",null,"Returns")])],-1),de=e("p",null,[e("code",null,"string")],-1),he=e("h4",{id:"overrides-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides-1"},[e("span",null,"Overrides")])],-1),pe=s('<hr><h3 id="compilewrap" tabindex="-1"><a class="header-anchor" href="#compilewrap"><span>compileWrap</span></a></h3><p>▸ <strong>compileWrap</strong>(<code>context</code>, <code>instanceOfs</code>): <code>string</code></p><p>Same as <code>compile()</code> except that it wraps the compiled expression in parentheses if the current token is an instance of the specified types.</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4>',5),ue=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),_e=e("td",{style:{"text-align":"left"}},[e("code",null,"context")],-1),xe={style:{"text-align":"left"}},fe=e("code",null,"CompilerContext",-1),me=e("td",{style:{"text-align":"left"}},"The context to use for compiling the expression.",-1),ge=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"instanceOfs")]),e("td",{style:{"text-align":"left"}},[e("code",null,"Function"),t("[]")]),e("td",{style:{"text-align":"left"}},"The types to check for.")],-1),be=e("h4",{id:"returns-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-2"},[e("span",null,"Returns")])],-1),ye=e("p",null,[e("code",null,"string")],-1),Ce=e("h4",{id:"inherited-from-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-3"},[e("span",null,"Inherited from")])],-1);function Te(ke,Ee){const l=i("RouterLink");return c(),r("div",null,[h,e("p",null,[o(l,{to:"/api/modules/"},{default:n(()=>[t("index")]),_:1}),t(".CallExpressionToken")]),p,e("ul",null,[e("li",null,[e("p",null,[o(l,{to:"/api/classes/index.CompilerToken.html"},{default:n(()=>[u]),_:1})]),_])]),x,f,e("ul",null,[e("li",null,[o(l,{to:"/api/classes/index.CallExpressionToken.html#constructor"},{default:n(()=>[t("constructor")]),_:1})])]),m,e("ul",null,[e("li",null,[o(l,{to:"/api/classes/index.CallExpressionToken.html#column"},{default:n(()=>[t("column")]),_:1})]),e("li",null,[o(l,{to:"/api/classes/index.CallExpressionToken.html#global"},{default:n(()=>[t("global")]),_:1})]),e("li",null,[o(l,{to:"/api/classes/index.CallExpressionToken.html#line"},{default:n(()=>[t("line")]),_:1})]),e("li",null,[o(l,{to:"/api/classes/index.CallExpressionToken.html#name"},{default:n(()=>[t("name")]),_:1})]),e("li",null,[o(l,{to:"/api/classes/index.CallExpressionToken.html#tail"},{default:n(()=>[t("tail")]),_:1})]),e("li",null,[o(l,{to:"/api/classes/index.CallExpressionToken.html#text"},{default:n(()=>[t("text")]),_:1})])]),g,e("ul",null,[e("li",null,[o(l,{to:"/api/classes/index.CallExpressionToken.html#compile"},{default:n(()=>[t("compile")]),_:1})]),e("li",null,[o(l,{to:"/api/classes/index.CallExpressionToken.html#compilewrap"},{default:n(()=>[t("compileWrap")]),_:1})])]),b,y,e("p",null,[t("• "),C,t("("),T,t(", "),k,t(", "),E,t(", "),w,t(", "),v,t("): "),o(l,{to:"/api/classes/index.CallExpressionToken.html"},{default:n(()=>[A]),_:1})]),I,R,e("table",null,[O,e("tbody",null,[N,j,e("tr",null,[P,e("td",S,[t("("),o(l,{to:"/api/classes/index.CallExpressionObjectAccess.html"},{default:n(()=>[V]),_:1}),t(" | "),o(l,{to:"/api/classes/index.CallExpressionArrayAccess.html"},{default:n(()=>[W]),_:1}),t(" | "),o(l,{to:"/api/classes/index.CallExpressionInvocation.html"},{default:n(()=>[B]),_:1}),t(")[]")]),D]),L,M])]),F,e("p",null,[o(l,{to:"/api/classes/index.CallExpressionToken.html"},{default:n(()=>[H]),_:1})]),q,e("p",null,[o(l,{to:"/api/classes/index.CompilerToken.html"},{default:n(()=>[t("CompilerToken")]),_:1}),t("."),o(l,{to:"/api/classes/index.CompilerToken.html#constructor"},{default:n(()=>[t("constructor")]),_:1})]),z,e("p",null,[o(l,{to:"/api/classes/index.CompilerToken.html"},{default:n(()=>[t("CompilerToken")]),_:1}),t("."),o(l,{to:"/api/classes/index.CompilerToken.html#column"},{default:n(()=>[t("column")]),_:1})]),G,e("p",null,[o(l,{to:"/api/classes/index.CompilerToken.html"},{default:n(()=>[t("CompilerToken")]),_:1}),t("."),o(l,{to:"/api/classes/index.CompilerToken.html#line"},{default:n(()=>[t("line")]),_:1})]),J,e("p",null,[t("• "),K,t(),Q,t(": ("),o(l,{to:"/api/classes/index.CallExpressionObjectAccess.html"},{default:n(()=>[U]),_:1}),t(" | "),o(l,{to:"/api/classes/index.CallExpressionArrayAccess.html"},{default:n(()=>[X]),_:1}),t(" | "),o(l,{to:"/api/classes/index.CallExpressionInvocation.html"},{default:n(()=>[Y]),_:1}),t(")[]")]),Z,$,ee,te,le,e("p",null,[o(l,{to:"/api/classes/index.CompilerToken.html"},{default:n(()=>[t("CompilerToken")]),_:1}),t("."),o(l,{to:"/api/classes/index.CompilerToken.html#text"},{default:n(()=>[t("text")]),_:1})]),oe,e("table",null,[ne,e("tbody",null,[e("tr",null,[se,e("td",ae,[o(l,{to:"/api/classes/index.CompilerContext.html"},{default:n(()=>[ie]),_:1})]),ce])])]),re,de,he,e("p",null,[o(l,{to:"/api/classes/index.CompilerToken.html"},{default:n(()=>[t("CompilerToken")]),_:1}),t("."),o(l,{to:"/api/classes/index.CompilerToken.html#compile"},{default:n(()=>[t("compile")]),_:1})]),pe,e("table",null,[ue,e("tbody",null,[e("tr",null,[_e,e("td",xe,[o(l,{to:"/api/classes/index.CompilerContext.html"},{default:n(()=>[fe]),_:1})]),me]),ge])]),be,ye,Ce,e("p",null,[o(l,{to:"/api/classes/index.CompilerToken.html"},{default:n(()=>[t("CompilerToken")]),_:1}),t("."),o(l,{to:"/api/classes/index.CompilerToken.html#compilewrap"},{default:n(()=>[t("compileWrap")]),_:1})])])}const Ae=a(d,[["render",Te],["__file","index.CallExpressionToken.html.vue"]]);export{Ae as default};