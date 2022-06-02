import{_ as s,o as e,c as t,a,t as o,d as p,e as c}from"./app.6670dc1a.js";const r={},l=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),p(),a("code",null,"{{ $frontmatter.title }}")],-1),u={style:{"white-space":"pre-wrap"}},i=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr with-column ...series or expressions --name</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...series or expressions</code>: series to be added or expressions used to define the new columns</li><li><code>--name {string}</code>: new column name</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Adds a series to the dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> dfr to-df
    <span class="token operator">|</span> dfr with-column <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span> --name c
</code></pre></div><p>Adds a series to the dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> dfr to-df
    <span class="token operator">|</span> dfr to-lazy
    <span class="token operator">|</span> dfr with-column <span class="token punctuation">((</span>dfr col a<span class="token punctuation">)</span> * <span class="token number">2</span> <span class="token operator">|</span> dfr as <span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>
    <span class="token operator">|</span> dfr collect
</code></pre></div>`,9);function d(n,k){return e(),t("div",null,[l,a("div",u,o(n.$frontmatter.usage),1),i])}var m=s(r,[["render",d],["__file","dfr_with-column.html.vue"]]);export{m as default};
