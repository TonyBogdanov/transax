import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as l,c as d,a as e,d as s,w as n,b as t,e as i}from"./app-BkeDxdD5.js";const c={},h=e("h1",{id:"interface-generatorinterface",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#interface-generatorinterface"},[e("span",null,"Interface: GeneratorInterface")])],-1),p=e("p",null,[t("Defines an interface for "),e("strong",null,"Generator"),t(" classes.")],-1),u=e("h2",{id:"implemented-by",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#implemented-by"},[e("span",null,"Implemented by")])],-1),f=e("code",null,"Generator",-1),g=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents"},[e("span",null,"Table of contents")])],-1),m=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods"},[e("span",null,"Methods")])],-1),x=i('<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1"><span>Methods</span></a></h2><h3 id="getcompiledtranslationsdump" tabindex="-1"><a class="header-anchor" href="#getcompiledtranslationsdump"><span>getCompiledTranslationsDump</span></a></h3><p>▸ <strong>getCompiledTranslationsDump</strong>(<code>includeMeta?</code>, <code>deduplicationMap?</code>): <code>string</code></p><p>Returns an ECMAScript6 code representation of the compiled translations.</p><p>If deduplicationMap is provided, the resulting code will be compressed to use variables for repeating entries. In this case, the deduplicationMap will be populated with the corresponding repeating values.</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>includeMeta?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Whether to include meta information about the position of extracted keys in the source code.</td></tr><tr><td style="text-align:left;"><code>deduplicationMap?</code></td><td style="text-align:left;"><code>string</code>[]</td><td style="text-align:left;">Optional hashmap to store deduplicated keys.</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h4><p><code>string</code></p><hr><h3 id="getcompiledtranslationsdumpascjsexport" tabindex="-1"><a class="header-anchor" href="#getcompiledtranslationsdumpascjsexport"><span>getCompiledTranslationsDumpAsCJSExport</span></a></h3><p>▸ <strong>getCompiledTranslationsDumpAsCJSExport</strong>(<code>includeMeta?</code>): <code>string</code></p><p>Returns an ECMAScript6 code representation of the compiled translations as CommonJS module.</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>includeMeta?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Whether to include meta information about the position of extracted keys in the source code.</td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4><p><code>string</code></p><hr><h3 id="getcompiledtranslationsdumpasesmexport" tabindex="-1"><a class="header-anchor" href="#getcompiledtranslationsdumpasesmexport"><span>getCompiledTranslationsDumpAsESMExport</span></a></h3><p>▸ <strong>getCompiledTranslationsDumpAsESMExport</strong>(<code>includeMeta?</code>): <code>string</code></p><p>Returns an ECMAScript6 code representation of the compiled translations as ECMAScript6 module.</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>includeMeta?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Whether to include meta information about the position of extracted keys in the source code.</td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4><p><code>string</code></p><hr><h3 id="getmissingtranslationkeys" tabindex="-1"><a class="header-anchor" href="#getmissingtranslationkeys"><span>getMissingTranslationKeys</span></a></h3><p>▸ <strong>getMissingTranslationKeys</strong>(): <code>Record</code>&lt;<code>string</code>, <code>string</code>[]&gt;</p><p>Returns a hashmap of locale keys and corresponding lists of missing translation keys. Those are keys that are extracted from source code, but not present in the translation catalog.</p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3"><span>Returns</span></a></h4><p><code>Record</code>&lt;<code>string</code>, <code>string</code>[]&gt;</p><hr><h3 id="gettranslationschecksum" tabindex="-1"><a class="header-anchor" href="#gettranslationschecksum"><span>getTranslationsChecksum</span></a></h3><p>▸ <strong>getTranslationsChecksum</strong>(): <code>number</code></p><p>Returns a CRC32 checksum of the current translation dictionaries. This can be used to determine whether the translations have changed since the last compilation.</p><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4"><span>Returns</span></a></h4><p><code>number</code></p><hr><h3 id="getunusedtranslationkeys" tabindex="-1"><a class="header-anchor" href="#getunusedtranslationkeys"><span>getUnusedTranslationKeys</span></a></h3><p>▸ <strong>getUnusedTranslationKeys</strong>(): <code>Record</code>&lt;<code>string</code>, <code>string</code>[]&gt;</p><p>Returns a hashmap of locale keys and corresponding lists of unused translation keys. Those are keys that are present in the translation catalog, but not in the extracted source code.</p><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5"><span>Returns</span></a></h4><p><code>Record</code>&lt;<code>string</code>, <code>string</code>[]&gt;</p><hr><h3 id="parse" tabindex="-1"><a class="header-anchor" href="#parse"><span>parse</span></a></h3><p>▸ <strong>parse</strong>(<code>code</code>, <code>source?</code>, <code>accumulate?</code>): <code>this</code></p><p>Parses the given source code extracting translation keys and saves them in the current context.</p><p>By default, calling parse() multiple times for the same source will replace previously extracted keys. This is useful when you want to iteratively parse the same file as it changes for example. If you want to accumulate keys instead, for example when streaming source code, you can pass <code>true</code> as the third argument.</p><p>Keep in mind that in this case the meta information about the position of extracted keys in the source code will be incorrect as it will be based on each call to parse(), rather an accumulated view of the source code.</p><p>If <code>source</code> is not set, <code>parse</code> will accumulate keys regardless of the value of <code>accumulate</code>.</p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3"><span>Parameters</span></a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>code</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The source code to be parsed.</td></tr><tr><td style="text-align:left;"><code>source?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Optional origin of the source code, usually a path to the source file.</td></tr><tr><td style="text-align:left;"><code>accumulate?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Whether to accumulate parsed keys with existing ones for the same source.</td></tr></tbody></table><h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6"><span>Returns</span></a></h4><p><code>this</code></p><hr><h3 id="removetranslations" tabindex="-1"><a class="header-anchor" href="#removetranslations"><span>removeTranslations</span></a></h3><p>▸ <strong>removeTranslations</strong>(<code>locale</code>): <code>this</code></p><p>Removes the current translation dictionary for the specified locale.</p><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4"><span>Parameters</span></a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>locale</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Target translation locale.</td></tr></tbody></table><h4 id="returns-7" tabindex="-1"><a class="header-anchor" href="#returns-7"><span>Returns</span></a></h4><p><code>this</code></p><hr><h3 id="settranslations" tabindex="-1"><a class="header-anchor" href="#settranslations"><span>setTranslations</span></a></h3><p>▸ <strong>setTranslations</strong>(<code>locale</code>, <code>dictionary</code>): <code>this</code></p><p>Adds or replaces the current translation dictionary for the specified locale.</p><h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5"><span>Parameters</span></a></h4>',67),y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),b=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"locale")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")]),e("td",{style:{"text-align":"left"}},"Target translation locale.")],-1),_=e("td",{style:{"text-align":"left"}},[e("code",null,"dictionary")],-1),T={style:{"text-align":"left"}},k=e("code",null,"DictionaryType",-1),C=e("td",{style:{"text-align":"left"}},"Target translation dictionary.",-1),R=e("h4",{id:"returns-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-8"},[e("span",null,"Returns")])],-1),M=e("p",null,[e("code",null,"this")],-1);function v(I,D){const a=o("RouterLink");return l(),d("div",null,[h,e("p",null,[s(a,{to:"/api/modules/"},{default:n(()=>[t("index")]),_:1}),t(".GeneratorInterface")]),p,u,e("ul",null,[e("li",null,[s(a,{to:"/api/classes/index.Generator.html"},{default:n(()=>[f]),_:1})])]),g,m,e("ul",null,[e("li",null,[s(a,{to:"/api/interfaces/index.GeneratorInterface.html#getcompiledtranslationsdump"},{default:n(()=>[t("getCompiledTranslationsDump")]),_:1})]),e("li",null,[s(a,{to:"/api/interfaces/index.GeneratorInterface.html#getcompiledtranslationsdumpascjsexport"},{default:n(()=>[t("getCompiledTranslationsDumpAsCJSExport")]),_:1})]),e("li",null,[s(a,{to:"/api/interfaces/index.GeneratorInterface.html#getcompiledtranslationsdumpasesmexport"},{default:n(()=>[t("getCompiledTranslationsDumpAsESMExport")]),_:1})]),e("li",null,[s(a,{to:"/api/interfaces/index.GeneratorInterface.html#getmissingtranslationkeys"},{default:n(()=>[t("getMissingTranslationKeys")]),_:1})]),e("li",null,[s(a,{to:"/api/interfaces/index.GeneratorInterface.html#gettranslationschecksum"},{default:n(()=>[t("getTranslationsChecksum")]),_:1})]),e("li",null,[s(a,{to:"/api/interfaces/index.GeneratorInterface.html#getunusedtranslationkeys"},{default:n(()=>[t("getUnusedTranslationKeys")]),_:1})]),e("li",null,[s(a,{to:"/api/interfaces/index.GeneratorInterface.html#parse"},{default:n(()=>[t("parse")]),_:1})]),e("li",null,[s(a,{to:"/api/interfaces/index.GeneratorInterface.html#removetranslations"},{default:n(()=>[t("removeTranslations")]),_:1})]),e("li",null,[s(a,{to:"/api/interfaces/index.GeneratorInterface.html#settranslations"},{default:n(()=>[t("setTranslations")]),_:1})])]),x,e("table",null,[y,e("tbody",null,[b,e("tr",null,[_,e("td",T,[s(a,{to:"/api/modules/types.html#dictionarytype"},{default:n(()=>[k]),_:1})]),C])])]),R,M])}const E=r(c,[["render",v],["__file","index.GeneratorInterface.html.vue"]]);export{E as default};
