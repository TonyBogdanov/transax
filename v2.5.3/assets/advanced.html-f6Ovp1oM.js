import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as l,c as r,a,b as n,d as s,w as p,e as c}from"./app-ayi9e_Ak.js";const u={},d=c('<h1 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced"><span>Advanced</span></a></h1><h2 id="key-formatting" tabindex="-1"><a class="header-anchor" href="#key-formatting"><span>Key Formatting</span></a></h2><p>When building complex applications it might be smart to employ a contextual key naming strategy. So, instead of using key names which describe the content of the translation, you can use key names which describe the context, i.e. where the key is used or its purpose.</p><p>For example, imagine you are listing a sequence of items separated by the word <code>and</code>. You could be tempted to simply use <code>and</code> as key, however, this way it would be very confusing if at some point you decide that the list must be separated by the word <code>or</code> instead, while the key remains <code>and</code>.</p><p>Instead, you can use a contextual key name, like <code>list_separator</code>, which would be much more appropriate. In addition, you might want to support multiple types of lists, so you could further change the key to <code>doctor_list_separator</code> or <code>patient_list_separator</code> etc.</p>',5),k={href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"},h=a("p",null,[n("To help with this issue "),a("code",null,"transax"),n(" provides a way to use short and simple translation keys in your code, while during analysis they will be converted into their full contextual form.")],-1),m=a("code",null,"keyFormatter",-1),y=c(`<p>Here&#39;s an example which uses the <code>keyFormatter</code> option to prefix all keys with the name of the file they are used in:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Analyzer<span class="token punctuation">,</span> Generator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;transax&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Generator</span><span class="token punctuation">(</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">translations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;path/to/my/custom/component.js@hello&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">analyzer</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Analyzer</span><span class="token punctuation">(</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">keyFormatter</span><span class="token operator">:</span> <span class="token punctuation">(</span> <span class="token parameter">key<span class="token punctuation">,</span> token</span> <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> token<span class="token punctuation">.</span>source <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">@</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> key <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

generator<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span> <span class="token string">&#39;console.log( $t( &quot;hello&quot; ) );&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;path/to/my/custom/component.js&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> generator<span class="token punctuation">.</span><span class="token function">getCompiledTranslationsDump</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// -&gt; { en: { &quot;path/to/my/custom/component.js@hello&quot;: ()=&gt;&quot;Hello world!&quot; } }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example the <code>path/to/my/custom/component.js</code> file uses <code>$t( &quot;hello&quot; )</code>, which <code>transax</code> will actually &quot;see&quot; as <code>$t( &quot;path/to/my/custom/component.js@hello&quot; )</code> instead.</p><p>Making sure the <code>$t</code> function converts the keys appropriately is your own responsibility.</p>`,4),f={class:"hint-container tip"},v=a("p",{class:"hint-container-title"},"Tips",-1),g={href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"},_=a("code",null,"this.$options.name",-1);function b(w,x){const e=o("ExternalLinkIcon"),t=o("RouterLink");return l(),r("div",null,[d,a("p",null,[n("The pitfall of this strategy is that translation keys can quickly become very long and hard to read, especially when used in some kind of component structure (like in "),a("a",k,[n("Vue"),s(e)]),n(" apps) where all translation keys used in a component all start with the same prefix.")]),h,a("p",null,[n("To do this, specify a key formatting function as the "),m,n(" option of the "),s(t,{to:"/api/classes/Analyzer.html"},{default:p(()=>[n("Analyzer")]),_:1}),n(" class. This function will be called for each key found in your code and should return the full contextual key name.")]),a("p",null,[n("The function will be passed the short key as first argument and the corresponding instance of "),s(t,{to:"/api/classes/AnalyzerToken.html"},{default:p(()=>[n("AnalyzerToken")]),_:1}),n(" as second argument, which you can use to get additional information about the token.")]),y,a("div",f,[v,a("p",null,[n("In a "),a("a",g,[n("Vue"),s(e)]),n(" application for example you can use "),_,n(" to get the name of the current component and infer the required key prefix.")])])])}const T=i(u,[["render",b],["__file","advanced.html.vue"]]);export{T as default};
