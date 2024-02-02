import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as r,e as i}from"./app-d72a7329.js";const d={},n=i(`<h1 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h1><h2 id="expressions" tabindex="-1"><a class="header-anchor" href="#expressions" aria-hidden="true">#</a> Expressions</h2><h3 id="expression" tabindex="-1"><a class="header-anchor" href="#expression" aria-hidden="true">#</a> Expression</h3><p>Any value (between the curly braces) you are trying to interpolate must be and comply to the syntax rules of an <strong>expression</strong>.</p><h4 id="syntax-1" tabindex="-1"><a class="header-anchor" href="#syntax-1" aria-hidden="true">#</a> Syntax</h4><p>One of the following:</p><ul><li><a href="#ternary">Ternary expression</a></li><li><a href="#comparison">Comparison expression</a></li><li><a href="#call">Call expression</a></li><li><a href="#literal">Literal expression</a></li></ul><h3 id="ternary-safe" tabindex="-1"><a class="header-anchor" href="#ternary-safe" aria-hidden="true">#</a> Ternary-Safe</h3><p>A ternary-safe expression is an <a href="#expression">Expression</a> that <em>may</em> be wrapped in brackets (depending on the type) in order to avoid syntax conflicts when used as an operand of a <a href="#ternary">Ternary expression</a>.</p><h4 id="syntax-2" tabindex="-1"><a class="header-anchor" href="#syntax-2" aria-hidden="true">#</a> Syntax</h4><p>One of the following:</p><ul><li><code>(</code> followed by <a href="#ternary">Ternary expression</a> followed by <code>)</code></li><li><a href="#comparison">Comparison expression</a></li><li><a href="#call">Call expression</a></li><li><a href="#literal">Literal expression</a></li></ul><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ ( true ? a : b ) ? &#39;yes&#39; : &#39;no&#39; }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="comparison-safe" tabindex="-1"><a class="header-anchor" href="#comparison-safe" aria-hidden="true">#</a> Comparison-Safe</h3><p>A comparison-safe expression is an <a href="#expression">Expression</a> that <em>may</em> be wrapped in brackets (depending on the type) in order to avoid syntax conflicts when used as an operand of a <a href="#comparison">Comparison expression</a>.</p><h4 id="syntax-3" tabindex="-1"><a class="header-anchor" href="#syntax-3" aria-hidden="true">#</a> Syntax</h4><p>One of the following:</p><ul><li><code>(</code> followed by <a href="#ternary">Ternary expression</a> followed by <code>)</code></li><li><code>(</code> followed by <a href="#comparison">Comparison expression</a> followed by <code>)</code></li><li><a href="#call">Call expression</a></li><li><a href="#literal">Literal expression</a></li></ul><h4 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ ( true ? 0 : 1 ) &lt; 1 }}
{{ ( 0 &lt; 1 ) === true }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ternary" tabindex="-1"><a class="header-anchor" href="#ternary" aria-hidden="true">#</a> Ternary</h3><p>A ternary expression is used to return one of two values depending on the result of a comparison.</p><h4 id="syntax-4" tabindex="-1"><a class="header-anchor" href="#syntax-4" aria-hidden="true">#</a> Syntax</h4><p><a href="#ternary-safe">Ternary-Safe expression</a> followed by <code>?</code> followed by <a href="#ternary-safe">Ternary-Safe expression</a> followed by <code>:</code> followed by <a href="#ternary-safe">Ternary-Safe expression</a></p><h4 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ 1 &lt; 2 ? &#39;yes&#39; : &#39;no&#39; }}
{{ ( 1 &lt; 2 ) !== false ? &#39;yes&#39; : &#39;no&#39; }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="comparison" tabindex="-1"><a class="header-anchor" href="#comparison" aria-hidden="true">#</a> Comparison</h3><p>A comparison expression is used to compare two values using a comparison operator.</p><h4 id="syntax-5" tabindex="-1"><a class="header-anchor" href="#syntax-5" aria-hidden="true">#</a> Syntax</h4><p><a href="#comparison-safe">Comparison-Safe expression</a> followed by <a href="#comparison-operator">Comparison Operator primitive</a> followed by <a href="#comparison-safe">Comparison-Safe expression</a></p><h4 id="example-3" tabindex="-1"><a class="header-anchor" href="#example-3" aria-hidden="true">#</a> Example</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ 1 &lt; 2 }}
{{ ( 1 &lt; 2 ) !== false }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> Call</h3><p>A call expression is used to evaluate the value of a translation parameter or global, and optionally invoke it as a function, access its properties (if object), or access its items (if array).</p><h4 id="syntax-6" tabindex="-1"><a class="header-anchor" href="#syntax-6" aria-hidden="true">#</a> Syntax</h4><p>Optional <code>@</code> followed by <a href="#identifier">Identifier primitive</a> followed by zero or more of the following:</p><ul><li><code>.</code> followed by <a href="#identifier">Identifier primitive</a></li><li><code>[</code> followed by <a href="#expression">Expression</a> followed by <code>]</code></li><li><code>(</code> followed by <a href="#arguments">Arguments</a> followed by <code>)</code></li></ul><h4 id="example-4" tabindex="-1"><a class="header-anchor" href="#example-4" aria-hidden="true">#</a> Example</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ foo }}
{{ $foo }}
{{ @foo_bar_123 }}
{{ value.foo }}
{{ value[ 12 ] }}
{{ value[ another_value ] }}
{{ @value[ another_value[ @some_global ] ][12] }}
{{ value.prop[ index ].prop }}
{{ foo() }}
{{ foo( 123 ) }}
{{ foo( 1 )( 2 ) }}
{{ foo( null, true, 123, .45, &quot;test&quot;, bar( baz[0], baf.test() ) ) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>The optional <code>@</code> symbol is used to reference the value of a global instead of a translation parameter.</p></div><h3 id="arguments" tabindex="-1"><a class="header-anchor" href="#arguments" aria-hidden="true">#</a> Arguments</h3><p>Arguments are used to pass values to a function call.</p><h4 id="syntax-7" tabindex="-1"><a class="header-anchor" href="#syntax-7" aria-hidden="true">#</a> Syntax</h4><p>Zero or more <a href="#expression">Expression</a> separated by commas (<code>,</code>).</p><h3 id="literal" tabindex="-1"><a class="header-anchor" href="#literal" aria-hidden="true">#</a> Literal</h3><p>A literal expression represents a static value.</p><h4 id="syntax-8" tabindex="-1"><a class="header-anchor" href="#syntax-8" aria-hidden="true">#</a> Syntax</h4><p><a href="#literal-2">Literal primitive</a></p><h3 id="example-5" tabindex="-1"><a class="header-anchor" href="#example-5" aria-hidden="true">#</a> Example</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ null }}
{{ NULL }}
{{ true }}
{{ TRUE }}
{{ false }}
{{ FALSE }}
{{ 123 }}
{{ -123 }}
{{ 1.23 }}
{{ -1.23 }}
{{ .45 }}
{{ 1e3 }}
{{ -1e+3 }}
{{ 2e-4 }}
{{ &#39;string&#39; }}
{{ &quot;string&quot; }}
{{ \`string\` }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="primitives" tabindex="-1"><a class="header-anchor" href="#primitives" aria-hidden="true">#</a> Primitives</h2><h3 id="literal-1" tabindex="-1"><a class="header-anchor" href="#literal-1" aria-hidden="true">#</a> Literal</h3><p>Literals are essentially static values.<br> They can be booleans, strings, numbers or null.</p><table><thead><tr><th>Type</th><th>Example</th><th>Description</th></tr></thead><tbody><tr><td><strong>Null</strong></td><td><code>null</code> or <code>NULL</code></td><td></td></tr><tr><td><strong>Boolean</strong></td><td><code>true</code>, <code>TRUE</code>, <code>false</code> or <code>FALSE</code></td><td></td></tr><tr><td><strong>Number</strong></td><td><code>123</code>, <code>-123</code>, <code>1.23</code>, <code>-1.23</code>, <code>.45</code>, <code>1e3</code>, <code>-1e+3</code>, <code>2e-4</code></td><td>An integer, float or exponent number optionally preceded by a minus sign (<code>-</code>).</td></tr><tr><td><strong>String</strong></td><td><code>&#39;string&#39;</code>, <code>&quot;string&quot;</code> or <code>\`string\`</code></td><td>A sequence of characters enclosed in single quotes (<code>&#39;</code>), double quotes (<code>&quot;</code>) or backticks (<code>\`</code>).</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Quotes in strings using the same type of quote can be escaped with a backslash <code>\\</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ &quot;this is a \\&quot;string\\&quot;&quot; }}
{{ &#39;this is a \\&#39;string\\&#39;&#39; }}
{{ \`this is a \\\`string\\\`\` }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also escape backslashes:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ &quot;this is a backslash: \\\\&quot; }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="identifier" tabindex="-1"><a class="header-anchor" href="#identifier" aria-hidden="true">#</a> Identifier</h3><p>Identifiers are names usually used to access translation parameters, globals and object properties.</p><p>They must be at least 1 symbol long and can contain latin letters (<code>a-z</code> &amp; <code>A-Z</code>), numbers (<code>0-9</code>), underscores (<code>_</code>) and a dollar signs (<code>$</code>).</p><p>They cannot start with a number and cannot be <a href="#reserved-words">reserved words</a>.</p><h3 id="comparison-operator" tabindex="-1"><a class="header-anchor" href="#comparison-operator" aria-hidden="true">#</a> Comparison Operator</h3><p>Comparison operators are used to compare two values and can be one of the following:</p><table><thead><tr><th>Operator</th><th>Description</th></tr></thead><tbody><tr><td><code>==</code></td><td>Values are equal.</td></tr><tr><td><code>!=</code></td><td>Values are not equal.</td></tr><tr><td><code>===</code></td><td>Values are identical.</td></tr><tr><td><code>!==</code></td><td>Values are not identical.</td></tr><tr><td><code>&gt;</code></td><td>The left value is greater than the right value.</td></tr><tr><td><code>&gt;=</code></td><td>The left value is greater than or equal to the right value.</td></tr><tr><td><code>&lt;</code></td><td>The left value is less than the right value.</td></tr><tr><td><code>&lt;=</code></td><td>The left value is less than or equal to the right value.</td></tr></tbody></table><h2 id="reserved-words" tabindex="-1"><a class="header-anchor" href="#reserved-words" aria-hidden="true">#</a> Reserved Words</h2><p>The following are reserved words in <code>transax</code> and cannot be used as identifiers:<br><code>null</code>, <code>NULL</code>, <code>true</code>, <code>TRUE</code>, <code>false</code> and <code>FALSE</code> .</p>`,65),t=[n];function s(o,l){return a(),r("div",null,t)}const u=e(d,[["render",s],["__file","syntax.html.vue"]]);export{u as default};
