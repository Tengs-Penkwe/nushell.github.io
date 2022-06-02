import{_ as a,o as t,c as o,a as n,t as p,d as e,e as c}from"./app.6670dc1a.js";const u={},l=n("h1",{id:"frontmatter-title",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),e(),n("code",null,"{{ $frontmatter.title }}")],-1),i={style:{"white-space":"pre-wrap"}},r=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr join (other) (left_on) (right_on) --inner --left --outer --cross --suffix</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>other</code>: LazyFrame to join with</li><li><code>left_on</code>: Left column(s) to join on</li><li><code>right_on</code>: Right column(s) to join on</li><li><code>--inner</code>: inner joing between lazyframes (default)</li><li><code>--left</code>: left join between lazyframes</li><li><code>--outer</code>: outer join between lazyframes</li><li><code>--cross</code>: cross join between lazyframes</li><li><code>--suffix {string}</code>: Suffix to use on columns with same name</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Join two lazy dataframes</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> df_a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b c<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;a&quot;</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token string">&quot;b&quot;</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;c&quot;</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;c&quot;</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-lazy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> df_b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span> <span class="token string">&quot;bar&quot;</span> <span class="token string">&quot;ham&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;a&quot;</span> <span class="token string">&quot;let&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;c&quot;</span> <span class="token string">&quot;var&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;c&quot;</span> <span class="token string">&quot;const&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-lazy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$df_a</span> <span class="token operator">|</span> dfr <span class="token function">join</span> <span class="token variable">$df_b</span> a foo <span class="token operator">|</span> dfr collect
</code></pre></div><p>Join one eager dataframe with a lazy dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> df_a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b c<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;a&quot;</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token string">&quot;b&quot;</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;c&quot;</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;c&quot;</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> df_b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span> <span class="token string">&quot;bar&quot;</span> <span class="token string">&quot;ham&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;a&quot;</span> <span class="token string">&quot;let&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;c&quot;</span> <span class="token string">&quot;var&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;c&quot;</span> <span class="token string">&quot;const&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-lazy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$df_a</span> <span class="token operator">|</span> dfr <span class="token function">join</span> <span class="token variable">$df_b</span> a foo
</code></pre></div>`,9);function k(s,d){return t(),o("div",null,[l,n("div",i,p(s.$frontmatter.usage),1),r])}var m=a(u,[["render",k],["__file","dfr_join.html.vue"]]);export{m as default};
