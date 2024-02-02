import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as i,c,a,b as n,d as t,w as e,e as o}from"./app-l-37dSRN.js";const r={},u=a("h1",{id:"translation",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#translation"},[a("span",null,"Translation")])],-1),d=a("h2",{id:"initialization",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#initialization"},[a("span",null,"Initialization")])],-1),k=o(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Translator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;transax&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> translations <span class="token keyword">from</span> <span class="token string">&#39;./compiled-translations.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> translator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Translator</span><span class="token punctuation">(</span> <span class="token punctuation">{</span> translations <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m=o(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> translator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Translator</span><span class="token punctuation">(</span> <span class="token punctuation">{</span>
    translations<span class="token punctuation">,</span>
    <span class="token literal-property property">fallbackLocale</span><span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="translation-1" tabindex="-1"><a class="header-anchor" href="#translation-1"><span>Translation</span></a></h2><p>Translating keys is done by calling the <code>translate</code> method of the translator. However, you are most likely going to be using a global function (e.g. <code>$t</code>) instead.</p><p>To do so, simply alias the <code>translate</code> method to your global function:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> globals <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// see section about globals below</span>

<span class="token keyword">function</span> <span class="token function">$t</span><span class="token punctuation">(</span> <span class="token parameter">key<span class="token punctuation">,</span> params<span class="token punctuation">,</span> locale</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> translator<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span> locale<span class="token punctuation">,</span> params<span class="token punctuation">,</span> globals <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

window<span class="token punctuation">.</span>$t <span class="token operator">=</span> $t<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>This is just an example. How exactly you choose to invoke <code>translate</code> depends on your application&#39;s architecture &amp; is entirely up to you.</p></div><p>To translate a key <code>hello</code> simply pass it as the first argument to the function:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">$t</span><span class="token punctuation">(</span> <span class="token string">&#39;hello&#39;</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Don&#39;t forget to specify the locale you want to translate to, or the translator will use the fallback locale:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">$t</span><span class="token punctuation">(</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;de&#39;</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="interpolation" tabindex="-1"><a class="header-anchor" href="#interpolation"><span>Interpolation</span></a></h2><p>The real strength of <code>transax</code> (as with most internationalization libraries) lies in its ability to interpolate values into your translations.</p><p>So, instead of static text you can inject values only known at runtime:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// { &quot;hello&quot;: &quot;Hello {{ name }}!&quot; }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">$t</span><span class="token punctuation">(</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// -&gt; &quot;Hello John!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="globals" tabindex="-1"><a class="header-anchor" href="#globals"><span>Globals</span></a></h2><p>In addition to parameters you specify when invoking the translation function, you can also define global parameters automatically available to all translations.</p><p>These can be interpolated into your translations like regular parameters, except you prepend them with a <code>@</code> sign:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> globals <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">store</span><span class="token operator">:</span> <span class="token string">&#39;My Store&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// { &quot;hello&quot;: &quot;Hello {{ name }}, welcome to {{ @store }}!&quot; }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">$t</span><span class="token punctuation">(</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// -&gt; &quot;Hello John, welcome to My Store!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="performance" tabindex="-1"><a class="header-anchor" href="#performance"><span>Performance</span></a></h2>`,19),v=a("code",null,"transax",-1),h=o(`<p>Non-referenced members of these objects are completely ignored.</p><p>This means that when you invoke the translation function you can pass virtually any object as parameters / globals without penalty for big objects. You can even pass the entire <code>window</code> as your globals object.</p><h2 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations"><span>Limitations</span></a></h2><p>At the moment it is not possible to reference members of parameters &amp; globals with the same name due to the way these are destructured during compilation.</p><p>For example, the following will not work &amp; will trigger a SyntaxError when invoked:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// { &quot;hello&quot;: &quot;Hello {{ name }}, welcome to {{ @name }}!&quot; }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> translator<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;My Store&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// -&gt; SyntaxError: Duplicate parameter name not allowed in this context</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function b(g,y){const s=l("RouterLink");return i(),c("div",null,[u,d,a("p",null,[n("Once you've successfully "),t(s,{to:"/usage/compilation.html"},{default:e(()=>[n("compiled")]),_:1}),n(" and saved your translations to a JavaScript file, it is now time to load them and initialize the translator in your application.")]),k,a("p",null,[n("To specify a fallback locale to be used in case of missing translations, use the "),t(s,{to:"/api/#translatoroptions"},{default:e(()=>[n("fallbackLocale")]),_:1}),n(" option:")]),m,a("p",null,[n("During "),t(s,{to:"/usage/compilation.html"},{default:e(()=>[n("compilation")]),_:1}),n(),v,n(" extracts only the referenced parameters / globals from each translation and generates a function that destructures them from the provided parameters / globals objects.")]),h])}const j=p(r,[["render",b],["__file","translation.html.vue"]]);export{j as default};
