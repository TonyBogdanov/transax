import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c as r,a as e,d as a,w as o,b as t,e as n}from"./app-eebfeff4.js";const c={},u=n('<h1 id="api-reference" tabindex="-1"><a class="header-anchor" href="#api-reference" aria-hidden="true">#</a> API Reference</h1><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h3>',3),p=e("h3",{id:"interfaces",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#interfaces","aria-hidden":"true"},"#"),t(" Interfaces")],-1),h=e("h3",{id:"type-aliases",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#type-aliases","aria-hidden":"true"},"#"),t(" Type Aliases")],-1),_=e("h2",{id:"type-aliases-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#type-aliases-1","aria-hidden":"true"},"#"),t(" Type Aliases")],-1),f=e("h3",{id:"analyzeroptions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#analyzeroptions","aria-hidden":"true"},"#"),t(" AnalyzerOptions")],-1),g=e("p",null,[t("Ƭ "),e("strong",null,"AnalyzerOptions"),t(": "),e("code",null,"Object")],-1),y=e("h4",{id:"type-declaration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#type-declaration","aria-hidden":"true"},"#"),t(" Type declaration")],-1),m=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),x=e("td",{style:{"text-align":"left"}},[e("code",null,"keyFormatter?")],-1),b={style:{"text-align":"left"}},k=e("code",null,"KeyFormatter",-1),C=e("td",{style:{"text-align":"left"}},[t("A function to format the translation key based on the context. Defaults to "),e("code",null,"( key => key )"),t(".")],-1),T=e("td",{style:{"text-align":"left"}},[e("code",null,"logger?")],-1),v={style:{"text-align":"left"}},A=e("code",null,"LoggerInterface",-1),O=e("td",{style:{"text-align":"left"}},[t("Optional logger instance. Defaults to "),e("code",null,"new Logger( { namespace: 'TRANSAX:ANALYZER' } )"),t(".")],-1),L=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"names?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string"),t("[]")]),e("td",{style:{"text-align":"left"}},[t("The names of the functions to analyze. Defaults to "),e("code",null,"[ '$t' ]"),t(".")])],-1),D=e("hr",null,null,-1),I=e("h3",{id:"catalog",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#catalog","aria-hidden":"true"},"#"),t(" Catalog")],-1),z=e("strong",null,"Catalog",-1),E=e("code",null,"Record",-1),R=e("code",null,"Locale",-1),N=e("code",null,"Dictionary",-1),q=n(`<p>Catalog of translation entries, keyed by locale.</p><p><strong><code>Example</code></strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;en_US&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;my.translation.key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello there, nice to meet you!&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="compiledcatalog" tabindex="-1"><a class="header-anchor" href="#compiledcatalog" aria-hidden="true">#</a> CompiledCatalog</h3>`,5),G=e("strong",null,"CompiledCatalog",-1),V=e("code",null,"Record",-1),K=e("code",null,"Locale",-1),w=e("code",null,"CompiledDictionary",-1),S=e("hr",null,null,-1),j=e("h3",{id:"compileddictionary",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compileddictionary","aria-hidden":"true"},"#"),t(" CompiledDictionary")],-1),P=e("strong",null,"CompiledDictionary",-1),H=e("code",null,"Record",-1),F=e("code",null,"Key",-1),X=e("code",null,"CompiledValue",-1),B=e("hr",null,null,-1),U=e("h3",{id:"compiledvalue",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compiledvalue","aria-hidden":"true"},"#"),t(" CompiledValue")],-1),M=e("strong",null,"CompiledValue",-1),Y=e("code",null,"params",-1),Z=e("code",null,"ContextParams",-1),$=e("code",null,"globals",-1),J=e("code",null,"ContextGlobals",-1),Q=e("code",null,"string",-1),W=e("code",null,"string",-1),ee=e("hr",null,null,-1),te=e("h3",{id:"compileroptions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compileroptions","aria-hidden":"true"},"#"),t(" CompilerOptions")],-1),le=e("p",null,[t("Ƭ "),e("strong",null,"CompilerOptions"),t(": "),e("code",null,"Object")],-1),ae=e("h4",{id:"type-declaration-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#type-declaration-1","aria-hidden":"true"},"#"),t(" Type declaration")],-1),oe=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),ne=e("td",{style:{"text-align":"left"}},[e("code",null,"logger?")],-1),se={style:{"text-align":"left"}},ie=e("code",null,"LoggerInterface",-1),de=e("td",{style:{"text-align":"left"}},[t("Optional logger instance. Defaults to "),e("code",null,"new Logger( { namespace: 'TRANSAX:COMPILER' } )"),t(".")],-1),re=e("hr",null,null,-1),ce=e("h3",{id:"context",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#context","aria-hidden":"true"},"#"),t(" Context")],-1),ue=e("p",null,[t("Ƭ "),e("strong",null,"Context"),t(": "),e("code",null,"Object")],-1),pe=e("p",null,"Runtime context to be used during translation.",-1),he=e("h4",{id:"type-declaration-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#type-declaration-2","aria-hidden":"true"},"#"),t(" Type declaration")],-1),_e=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),fe=e("td",{style:{"text-align":"left"}},[e("code",null,"globals?")],-1),ge={style:{"text-align":"left"}},ye=e("code",null,"ContextGlobals",-1),me=e("td",{style:{"text-align":"left"}},"Hashmap of globals available to translation expressions.",-1),xe=e("td",{style:{"text-align":"left"}},[e("code",null,"locale?")],-1),be={style:{"text-align":"left"}},ke=e("code",null,"Locale",-1),Ce=e("td",{style:{"text-align":"left"}},"The locale to translate to. If not specified, the default locale specified in the translator options will be used.",-1),Te=e("td",{style:{"text-align":"left"}},[e("code",null,"params?")],-1),ve={style:{"text-align":"left"}},Ae=e("code",null,"ContextParams",-1),Oe=e("td",{style:{"text-align":"left"}},"Hashmap of parameters available to translation expressions.",-1),Le=n('<hr><h3 id="contextglobals" tabindex="-1"><a class="header-anchor" href="#contextglobals" aria-hidden="true">#</a> ContextGlobals</h3><p>Ƭ <strong>ContextGlobals</strong>: <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p><p>Hashmap of context globals to be used during translation.</p><hr><h3 id="contextparams" tabindex="-1"><a class="header-anchor" href="#contextparams" aria-hidden="true">#</a> ContextParams</h3><p>Ƭ <strong>ContextParams</strong>: <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p><p>Hashmap of context parameters to be used during translation.</p><hr><h3 id="dictionary" tabindex="-1"><a class="header-anchor" href="#dictionary" aria-hidden="true">#</a> Dictionary</h3>',10),De=e("strong",null,"Dictionary",-1),Ie=e("code",null,"Record",-1),ze=e("code",null,"Key",-1),Ee=e("code",null,"Value",-1),Re=n(`<p>Translation dictionary as a hashmap of key-value pairs.</p><p><strong><code>Example</code></strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span> <span class="token string-property property">&quot;my.translation.key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello there, nice to meet you!&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="generatoroptions" tabindex="-1"><a class="header-anchor" href="#generatoroptions" aria-hidden="true">#</a> GeneratorOptions</h3><p>Ƭ <strong>GeneratorOptions</strong>: <code>Object</code></p>`,6),Ne=e("h4",{id:"type-declaration-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#type-declaration-3","aria-hidden":"true"},"#"),t(" Type declaration")],-1),qe=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),Ge=e("td",{style:{"text-align":"left"}},[e("code",null,"analyzer?")],-1),Ve={style:{"text-align":"left"}},Ke=e("code",null,"AnalyzerInterface",-1),we=e("td",{style:{"text-align":"left"}},[t("Optional analyzer instance. Defaults to "),e("code",null,"new Analyzer()"),t(".")],-1),Se=e("td",{style:{"text-align":"left"}},[e("code",null,"compiler?")],-1),je={style:{"text-align":"left"}},Pe=e("code",null,"CompilerInterface",-1),He=e("td",{style:{"text-align":"left"}},[t("Optional compiler instance. Defaults to "),e("code",null,"new Compiler()"),t(".")],-1),Fe=e("td",{style:{"text-align":"left"}},[e("code",null,"logger?")],-1),Xe={style:{"text-align":"left"}},Be=e("code",null,"LoggerInterface",-1),Ue=e("td",{style:{"text-align":"left"}},[t("Optional logger instance. Defaults to "),e("code",null,"new Logger( { namespace: 'TRANSAX:GENERATOR' } )"),t(".")],-1),Me=e("td",{style:{"text-align":"left"}},[e("code",null,"translations?")],-1),Ye={style:{"text-align":"left"}},Ze=e("code",null,"Catalog",-1),$e=e("td",{style:{"text-align":"left"}},[t("Optional translation catalog. Defaults to "),e("code",null,"{}"),t(".")],-1),Je=n(`<hr><h3 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> Key</h3><p>Ƭ <strong>Key</strong>: <code>string</code></p><p>Translation key as a string used to identify a translation.</p><p><strong><code>Example</code></strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token string">&quot;my.translation.key&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="keyformatter" tabindex="-1"><a class="header-anchor" href="#keyformatter" aria-hidden="true">#</a> KeyFormatter</h3>`,8),Qe=e("strong",null,"KeyFormatter",-1),We=e("code",null,"key",-1),et=e("code",null,"Key",-1),tt=e("code",null,"token",-1),lt=e("code",null,"AnalyzerToken",-1),at=e("code",null,"string",-1),ot=n('<h4 id="type-declaration-4" tabindex="-1"><a class="header-anchor" href="#type-declaration-4" aria-hidden="true">#</a> Type declaration</h4><p>▸ (<code>key</code>, <code>token</code>): <code>string</code></p><p>A function to format the translation key based on the context.</p><h5 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h5>',4),nt=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),st=e("td",{style:{"text-align":"left"}},[e("code",null,"key")],-1),it={style:{"text-align":"left"}},dt=e("code",null,"Key",-1),rt=e("td",{style:{"text-align":"left"}},[e("code",null,"token")],-1),ct={style:{"text-align":"left"}},ut=e("code",null,"AnalyzerToken",-1),pt=n(`<h5 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h5><p><code>string</code></p><hr><h3 id="locale" tabindex="-1"><a class="header-anchor" href="#locale" aria-hidden="true">#</a> Locale</h3><p>Ƭ <strong>Locale</strong>: <code>string</code></p><p>Translation locale as a string representing a unique language.</p><p><strong><code>Example</code></strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token string">&quot;en_US&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="loggeroptions" tabindex="-1"><a class="header-anchor" href="#loggeroptions" aria-hidden="true">#</a> LoggerOptions</h3><p>Ƭ <strong>LoggerOptions</strong>: <code>Object</code></p>`,11),ht=n('<h4 id="type-declaration-5" tabindex="-1"><a class="header-anchor" href="#type-declaration-5" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>namespace?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Specifies a namespace for identifying the purpose of the logger (e.g. <code>Analysis</code>). Defaults to <code>LOG</code>.</td></tr><tr><td style="text-align:left;"><code>verbose?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enables verbose logging. Defaults to <code>false</code>.</td></tr></tbody></table><hr><h3 id="translatoroptions" tabindex="-1"><a class="header-anchor" href="#translatoroptions" aria-hidden="true">#</a> TranslatorOptions</h3><p>Ƭ <strong>TranslatorOptions</strong>: <code>Object</code></p>',5),_t=e("h4",{id:"type-declaration-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#type-declaration-6","aria-hidden":"true"},"#"),t(" Type declaration")],-1),ft=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),gt=e("td",{style:{"text-align":"left"}},[e("code",null,"fallbackLocale?")],-1),yt={style:{"text-align":"left"}},mt=e("code",null,"Locale",-1),xt=e("td",{style:{"text-align":"left"}},[t("Optional fallback locale. Defaults to "),e("code",null,"undefined"),t(".")],-1),bt=e("td",{style:{"text-align":"left"}},[e("code",null,"logger?")],-1),kt={style:{"text-align":"left"}},Ct=e("code",null,"LoggerInterface",-1),Tt=e("td",{style:{"text-align":"left"}},[t("Optional logger instance. Defaults to "),e("code",null,"new Logger( { namespace: 'TRANSAX:TRANSLATOR' } )"),t(".")],-1),vt=e("td",{style:{"text-align":"left"}},[e("code",null,"translations?")],-1),At={style:{"text-align":"left"}},Ot=e("code",null,"CompiledCatalog",-1),Lt=e("td",{style:{"text-align":"left"}},[t("Optional compiled translation catalog. Defaults to "),e("code",null,"{}"),t(".")],-1),Dt=n(`<hr><h3 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> Value</h3><p>Ƭ <strong>Value</strong>: <code>string</code></p><p>Translation value as a string translation of its corresponding key.</p><p><strong><code>Example</code></strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token string">&quot;Hello there, nice to meet you!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6);function It(zt,Et){const l=i("RouterLink");return d(),r("div",null,[u,e("ul",null,[e("li",null,[a(l,{to:"/api/classes/Analyzer.html"},{default:o(()=>[t("Analyzer")]),_:1})]),e("li",null,[a(l,{to:"/api/classes/AnalyzerToken.html"},{default:o(()=>[t("AnalyzerToken")]),_:1})]),e("li",null,[a(l,{to:"/api/classes/CallExpressionArrayAccess.html"},{default:o(()=>[t("CallExpressionArrayAccess")]),_:1})]),e("li",null,[a(l,{to:"/api/classes/CallExpressionInvocation.html"},{default:o(()=>[t("CallExpressionInvocation")]),_:1})]),e("li",null,[a(l,{to:"/api/classes/CallExpressionObjectAccess.html"},{default:o(()=>[t("CallExpressionObjectAccess")]),_:1})]),e("li",null,[a(l,{to:"/api/classes/CallExpressionToken.html"},{default:o(()=>[t("CallExpressionToken")]),_:1})]),e("li",null,[a(l,{to:"/api/classes/ComparisonExpressionToken.html"},{default:o(()=>[t("ComparisonExpressionToken")]),_:1})]),e("li",null,[a(l,{to:"/api/classes/Compiler.html"},{default:o(()=>[t("Compiler")]),_:1})]),e("li",null,[a(l,{to:"/api/classes/CompilerContext.html"},{default:o(()=>[t("CompilerContext")]),_:1})]),e("li",null,[a(l,{to:"/api/classes/CompilerToken.html"},{default:o(()=>[t("CompilerToken")]),_:1})]),e("li",null,[a(l,{to:"/api/classes/Generator.html"},{default:o(()=>[t("Generator")]),_:1})]),e("li",null,[a(l,{to:"/api/classes/LiteralToken.html"},{default:o(()=>[t("LiteralToken")]),_:1})]),e("li",null,[a(l,{to:"/api/classes/Logger.html"},{default:o(()=>[t("Logger")]),_:1})]),e("li",null,[a(l,{to:"/api/classes/TernaryExpressionToken.html"},{default:o(()=>[t("TernaryExpressionToken")]),_:1})]),e("li",null,[a(l,{to:"/api/classes/TextToken.html"},{default:o(()=>[t("TextToken")]),_:1})]),e("li",null,[a(l,{to:"/api/classes/Translator.html"},{default:o(()=>[t("Translator")]),_:1})])]),p,e("ul",null,[e("li",null,[a(l,{to:"/api/interfaces/AnalyzerInterface.html"},{default:o(()=>[t("AnalyzerInterface")]),_:1})]),e("li",null,[a(l,{to:"/api/interfaces/CompilerInterface.html"},{default:o(()=>[t("CompilerInterface")]),_:1})]),e("li",null,[a(l,{to:"/api/interfaces/GeneratorInterface.html"},{default:o(()=>[t("GeneratorInterface")]),_:1})]),e("li",null,[a(l,{to:"/api/interfaces/LoggerInterface.html"},{default:o(()=>[t("LoggerInterface")]),_:1})]),e("li",null,[a(l,{to:"/api/interfaces/TranslatorInterface.html"},{default:o(()=>[t("TranslatorInterface")]),_:1})])]),h,e("ul",null,[e("li",null,[a(l,{to:"/api/#analyzeroptions"},{default:o(()=>[t("AnalyzerOptions")]),_:1})]),e("li",null,[a(l,{to:"/api/#catalog"},{default:o(()=>[t("Catalog")]),_:1})]),e("li",null,[a(l,{to:"/api/#compiledcatalog"},{default:o(()=>[t("CompiledCatalog")]),_:1})]),e("li",null,[a(l,{to:"/api/#compileddictionary"},{default:o(()=>[t("CompiledDictionary")]),_:1})]),e("li",null,[a(l,{to:"/api/#compiledvalue"},{default:o(()=>[t("CompiledValue")]),_:1})]),e("li",null,[a(l,{to:"/api/#compileroptions"},{default:o(()=>[t("CompilerOptions")]),_:1})]),e("li",null,[a(l,{to:"/api/#context"},{default:o(()=>[t("Context")]),_:1})]),e("li",null,[a(l,{to:"/api/#contextglobals"},{default:o(()=>[t("ContextGlobals")]),_:1})]),e("li",null,[a(l,{to:"/api/#contextparams"},{default:o(()=>[t("ContextParams")]),_:1})]),e("li",null,[a(l,{to:"/api/#dictionary"},{default:o(()=>[t("Dictionary")]),_:1})]),e("li",null,[a(l,{to:"/api/#generatoroptions"},{default:o(()=>[t("GeneratorOptions")]),_:1})]),e("li",null,[a(l,{to:"/api/#key"},{default:o(()=>[t("Key")]),_:1})]),e("li",null,[a(l,{to:"/api/#keyformatter"},{default:o(()=>[t("KeyFormatter")]),_:1})]),e("li",null,[a(l,{to:"/api/#locale"},{default:o(()=>[t("Locale")]),_:1})]),e("li",null,[a(l,{to:"/api/#loggeroptions"},{default:o(()=>[t("LoggerOptions")]),_:1})]),e("li",null,[a(l,{to:"/api/#translatoroptions"},{default:o(()=>[t("TranslatorOptions")]),_:1})]),e("li",null,[a(l,{to:"/api/#value"},{default:o(()=>[t("Value")]),_:1})])]),_,f,g,e("p",null,[t("Options for the "),a(l,{to:"/api/classes/Analyzer.html"},{default:o(()=>[t("Analyzer")]),_:1}),t(".")]),y,e("table",null,[m,e("tbody",null,[e("tr",null,[x,e("td",b,[a(l,{to:"/api/#keyformatter"},{default:o(()=>[k]),_:1})]),C]),e("tr",null,[T,e("td",v,[a(l,{to:"/api/interfaces/LoggerInterface.html"},{default:o(()=>[A]),_:1})]),O]),L])]),D,I,e("p",null,[t("Ƭ "),z,t(": "),E,t("<"),a(l,{to:"/api/#locale"},{default:o(()=>[R]),_:1}),t(", "),a(l,{to:"/api/#dictionary"},{default:o(()=>[N]),_:1}),t(">")]),q,e("p",null,[t("Ƭ "),G,t(": "),V,t("<"),a(l,{to:"/api/#locale"},{default:o(()=>[K]),_:1}),t(", "),a(l,{to:"/api/#compileddictionary"},{default:o(()=>[w]),_:1}),t(">")]),e("p",null,[t("A compiled version of a "),a(l,{to:"/api/#catalog"},{default:o(()=>[t("Catalog")]),_:1}),t(".")]),S,j,e("p",null,[t("Ƭ "),P,t(": "),H,t("<"),a(l,{to:"/api/#key"},{default:o(()=>[F]),_:1}),t(", "),a(l,{to:"/api/#compiledvalue"},{default:o(()=>[X]),_:1}),t(">")]),e("p",null,[t("A compiled version of a "),a(l,{to:"/api/#dictionary"},{default:o(()=>[t("Dictionary")]),_:1}),t(".")]),B,U,e("p",null,[t("Ƭ "),M,t(": ("),Y,t(": "),a(l,{to:"/api/#contextparams"},{default:o(()=>[Z]),_:1}),t(", "),$,t(": "),a(l,{to:"/api/#contextglobals"},{default:o(()=>[J]),_:1}),t(") => "),Q,t(" | "),W]),e("p",null,[t("A compiled version of a "),a(l,{to:"/api/#value"},{default:o(()=>[t("Value")]),_:1}),t(".")]),ee,te,le,e("p",null,[t("Options for the "),a(l,{to:"/api/classes/Compiler.html"},{default:o(()=>[t("Compiler")]),_:1}),t(".")]),ae,e("table",null,[oe,e("tbody",null,[e("tr",null,[ne,e("td",se,[a(l,{to:"/api/interfaces/LoggerInterface.html"},{default:o(()=>[ie]),_:1})]),de])])]),re,ce,ue,pe,he,e("table",null,[_e,e("tbody",null,[e("tr",null,[fe,e("td",ge,[a(l,{to:"/api/#contextglobals"},{default:o(()=>[ye]),_:1})]),me]),e("tr",null,[xe,e("td",be,[a(l,{to:"/api/#locale"},{default:o(()=>[ke]),_:1})]),Ce]),e("tr",null,[Te,e("td",ve,[a(l,{to:"/api/#contextparams"},{default:o(()=>[Ae]),_:1})]),Oe])])]),Le,e("p",null,[t("Ƭ "),De,t(": "),Ie,t("<"),a(l,{to:"/api/#key"},{default:o(()=>[ze]),_:1}),t(", "),a(l,{to:"/api/#value"},{default:o(()=>[Ee]),_:1}),t(">")]),Re,e("p",null,[t("Options for the "),a(l,{to:"/api/classes/Generator.html"},{default:o(()=>[t("Generator")]),_:1}),t(".")]),Ne,e("table",null,[qe,e("tbody",null,[e("tr",null,[Ge,e("td",Ve,[a(l,{to:"/api/interfaces/AnalyzerInterface.html"},{default:o(()=>[Ke]),_:1})]),we]),e("tr",null,[Se,e("td",je,[a(l,{to:"/api/interfaces/CompilerInterface.html"},{default:o(()=>[Pe]),_:1})]),He]),e("tr",null,[Fe,e("td",Xe,[a(l,{to:"/api/interfaces/LoggerInterface.html"},{default:o(()=>[Be]),_:1})]),Ue]),e("tr",null,[Me,e("td",Ye,[a(l,{to:"/api/#catalog"},{default:o(()=>[Ze]),_:1})]),$e])])]),Je,e("p",null,[t("Ƭ "),Qe,t(": ("),We,t(": "),a(l,{to:"/api/#key"},{default:o(()=>[et]),_:1}),t(", "),tt,t(": "),a(l,{to:"/api/classes/AnalyzerToken.html"},{default:o(()=>[lt]),_:1}),t(") => "),at]),ot,e("table",null,[nt,e("tbody",null,[e("tr",null,[st,e("td",it,[a(l,{to:"/api/#key"},{default:o(()=>[dt]),_:1})])]),e("tr",null,[rt,e("td",ct,[a(l,{to:"/api/classes/AnalyzerToken.html"},{default:o(()=>[ut]),_:1})])])])]),pt,e("p",null,[t("Options for "),a(l,{to:"/api/classes/Logger.html"},{default:o(()=>[t("Logger")]),_:1}),t(".")]),ht,e("p",null,[t("Options for the "),a(l,{to:"/api/classes/Translator.html"},{default:o(()=>[t("Translator")]),_:1}),t(".")]),_t,e("table",null,[ft,e("tbody",null,[e("tr",null,[gt,e("td",yt,[a(l,{to:"/api/#locale"},{default:o(()=>[mt]),_:1})]),xt]),e("tr",null,[bt,e("td",kt,[a(l,{to:"/api/interfaces/LoggerInterface.html"},{default:o(()=>[Ct]),_:1})]),Tt]),e("tr",null,[vt,e("td",At,[a(l,{to:"/api/#compiledcatalog"},{default:o(()=>[Ot]),_:1})]),Lt])])]),Dt])}const qt=s(c,[["render",It],["__file","index.html.vue"]]);export{qt as default};
