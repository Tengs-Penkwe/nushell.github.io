import{_ as n,o as e,c as t,a,t as o,d as c,e as p}from"./app.6670dc1a.js";const r={},l=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),c(),a("code",null,"{{ $frontmatter.title }}")],-1),i={style:{"white-space":"pre-wrap"}},d=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str downcase ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally downcase text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Downcase contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;NU&#39;</span> <span class="token operator">|</span> str downcase
</code></pre></div><p>Downcase contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;TESTa&#39;</span> <span class="token operator">|</span> str downcase
</code></pre></div><p>Downcase contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>Test ABC<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str downcase ColA
</code></pre></div><p>Downcase contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>Test ABC<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str downcase ColA ColB
</code></pre></div>`,13);function u(s,h){return e(),t("div",null,[l,a("div",i,o(s.$frontmatter.usage),1),d])}var k=n(r,[["render",u],["__file","str_downcase.html.vue"]]);export{k as default};
