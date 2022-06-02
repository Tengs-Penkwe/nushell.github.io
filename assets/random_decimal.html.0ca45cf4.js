import{_ as s,o as n,c as t,a,t as r,d as o,e as d}from"./app.6670dc1a.js";const c={},l=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),a("code",null,"{{ $frontmatter.title }}")],-1),p={style:{"white-space":"pre-wrap"}},i=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; random decimal (range)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>range</code>: Range of values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Generate a default decimal value between 0 and 1</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random decimal
</code></pre></div><p>Generate a random decimal less than or equal to 500</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random decimal <span class="token punctuation">..</span><span class="token number">500</span>
</code></pre></div><p>Generate a random decimal greater than or equal to 100000</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random decimal <span class="token number">100000</span><span class="token punctuation">..</span>
</code></pre></div><p>Generate a random decimal between 1.0 and 1.1</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random decimal <span class="token number">1.0</span><span class="token punctuation">..</span><span class="token number">1.1</span>
</code></pre></div>`,13);function h(e,m){return n(),t("div",null,[l,a("div",p,r(e.$frontmatter.usage),1),i])}var g=s(c,[["render",h],["__file","random_decimal.html.vue"]]);export{g as default};
