import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-5d5007a5.js";const e={},o=t(`<h1 id="analysis" tabindex="-1"><a class="header-anchor" href="#analysis" aria-hidden="true">#</a> Analysis</h1><p>This feature allows you to scan your source code for translatable strings and extract useful information.</p><h2 id="the-problem" tabindex="-1"><a class="header-anchor" href="#the-problem" aria-hidden="true">#</a> The problem</h2><p>Consider the following example:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> hello <span class="token operator">=</span> <span class="token function">$t</span><span class="token punctuation">(</span> <span class="token string">&#39;Hello&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> greet <span class="token operator">=</span> <span class="token function">$t</span><span class="token punctuation">(</span> <span class="token string">&#39;nice to meet you&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> hello <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> John, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> greet <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this code you have two translatable strings: <code>Hello</code> and <code>nice to meet you</code>. Here it is obvious you will need to make sure you translate both of them. But what if you had a hundred strings in your code? Manually keeping track of each of them can be a tedious task.</p><h2 id="the-solution" tabindex="-1"><a class="header-anchor" href="#the-solution" aria-hidden="true">#</a> The solution</h2><p>Instead, you can use the analysis feature to extract all the strings from your code and then compare them against your current translations.</p><p>This way you can easily find out which strings are missing and need to be translated, or which strings are no longer used and can be removed.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Generator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;transax&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Generator</span><span class="token punctuation">(</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">translations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;nice to meet you&#39;</span><span class="token operator">:</span> <span class="token string">&#39;nice to meet you&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;unused&#39;</span><span class="token operator">:</span> <span class="token string">&#39;unused&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">de</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;Hello&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Hallo&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

generator<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span> <span class="token string">&#39;&lt;source code as string&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;path/to/file1.js&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
generator<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span> <span class="token string">&#39;&lt;source code as string&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;path/to/file2.js&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> generator<span class="token punctuation">.</span><span class="token function">getMissingTranslationKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// -&gt; { en: [ &#39;Hello&#39; ], de: [ &#39;nice to meet you&#39; ] }</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> generator<span class="token punctuation">.</span><span class="token function">getUnusedTranslationKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// -&gt; { en: [ &#39;unused&#39; ], de: [] }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Use this feature at <strong>build time</strong> to make sure your translations are always up-to-date.</p></div><h2 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations" aria-hidden="true">#</a> Limitations</h2><p>The analysis feature is not perfect. It works in a more generic manner in order to support almost any kind of source code syntax.</p><p>This means that it cannot understand the context of your code, nor even its language or flavor. It simply looks for <em>function-like</em> calls to <code>$t</code> with at least one string argument.</p><p>By design, it cannot match expressions or interpolation. Translation keys <strong>must</strong> be string literals (static). It <strong>does</strong> support strings defined with single: <code>&#39;..&#39;</code> and double: <code>&quot;..&quot;</code> quotes, as well as template literals: <code>\`..\`</code>.</p>`,15),p=[o];function i(c,l){return s(),a("div",null,p)}const d=n(e,[["render",i],["__file","analysis.html.vue"]]);export{d as default};