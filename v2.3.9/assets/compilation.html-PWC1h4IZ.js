import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as c,c as l,a,b as n,d as t,w as e,e as o}from"./app-t0fXQE-E.js";const r={},u=o(`<h1 id="compilation" tabindex="-1"><a class="header-anchor" href="#compilation"><span>Compilation</span></a></h1><h2 id="translation-dictionary" tabindex="-1"><a class="header-anchor" href="#translation-dictionary"><span>Translation Dictionary</span></a></h2><p>When you&#39;re translating your project, your translation dictionary will look something like this:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> translations <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;welcome&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Hello, {{ name }}, welcome to {{ @store }}!&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;unused&#39;</span><span class="token operator">:</span> <span class="token string">&#39;unused&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">de</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;Hello&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Hallo&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Under the hood you can use any flavor or format you like, but once loaded into your application <code>transax</code> will expect it as a JavaScript object in the above format.</p>`,5),d={class:"hint-container tip"},k=a("p",{class:"hint-container-title"},"Tips",-1),m=a("p",null,[n("This format, while readable, does not provide the best possible performance, so during translation (at runtime) "),a("code",null,"transax"),n(" will actually expect a "),a("strong",null,"compiled"),n(" version of the dictionary instead.")],-1),v=a("h2",{id:"compiled-dictionary",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#compiled-dictionary"},[a("span",null,"Compiled Dictionary")])],-1),h=o(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> writeFileSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;node:fs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Generator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;transax&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Generator</span><span class="token punctuation">(</span> <span class="token punctuation">{</span> translations <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

generator<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span> <span class="token string">&#39;&lt;source code as string&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;path/to/file1.js&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
generator<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span> <span class="token string">&#39;&lt;source code as string&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;path/to/file2.js&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">writeFileSync</span><span class="token punctuation">(</span>
    <span class="token string">&#39;path/to/compiled-dictionary.js&#39;</span><span class="token punctuation">,</span>
    generator<span class="token punctuation">.</span><span class="token function">getCompiledTranslationsDumpAsESMExport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The code above will convert your translation dictionary into a compiled version that looks something like this:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;welcome&#39;</span><span class="token operator">:</span> <span class="token punctuation">(</span> <span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> store <span class="token punctuation">}</span></span> <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> name <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, welcome to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> store <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;unused&#39;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">unused</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">de</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;Hello&#39;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hallo</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g=o('<div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Pass <code>true</code> as first argument to:</p><ul><li><code>getCompiledTranslationsDumpAsESMExport()</code></li><li><code>getCompiledTranslationsDumpAsCJSExport()</code> or</li><li><code>getCompiledTranslationsDump()</code></li></ul><p>to make the generated code contain comments with information about where each key was extracted from.</p></div><h2 id="accumulation" tabindex="-1"><a class="header-anchor" href="#accumulation"><span>Accumulation</span></a></h2><p>By default, when calling <code>parse</code> multiple times with the same value for <code>source</code>, all previously exported keys for that source will be removed prior to extracting new ones. This can be useful when you want to continuously parse a file and update the compiled dictionary as the file contents change.</p><p>On the other hand you might need to (for example) stream the source code of a file and call <code>parse</code> multiple times, but accumulate extracted keys instead. To do this, pass <code>true</code> as the third argument to <code>parse</code>.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Keep in mind that <code>parse</code> only analyzes the passed source code during each call, which means that meta information about extracted keys in accumulation code will be incorrect and should be ignored.</p><p>If <code>source</code> is omitted, <code>parse</code> will work in accumulation mode regardless of the value of <code>accumulate</code> (the third argument).</p></div>',5);function y(b,f){const s=i("RouterLink");return c(),l("div",null,[u,a("div",d,[k,a("p",null,[n("Check the full specification here: "),t(s,{to:"/api/#dictionarytype"},{default:e(()=>[n("DictionaryType")]),_:1}),n(".")])]),m,v,a("p",null,[n("Use the provided "),t(s,{to:"/api/classes/Generator.html"},{default:e(()=>[n("Generator")]),_:1}),n(" class to compile your dictionary and save it to a file:")]),h,a("p",null,[n("In this format the "),t(s,{to:"/api/classes/Translator.html"},{default:e(()=>[n("Translator")]),_:1}),n(" can now look up and translate any key, resolving and replacing expressions with their final values without the additional overhead of parsing your dictionary each time.")]),g])}const x=p(r,[["render",y],["__file","compilation.html.vue"]]);export{x as default};
