import{_ as n,o as e,c as t,a,t as o,d as p,e as r}from"./app.6670dc1a.js";const c={},i=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),p(),a("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to csv --separator --noheaders</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--separator {string}</code>: a character to separate columns, defaults to &#39;,&#39;</li><li><code>--noheaders</code>: do not output the columns names as the first row</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Outputs an CSV string representing the contents of this table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>foo bar<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> to csv
</code></pre></div><p>Outputs an CSV string representing the contents of this table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>foo bar<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> to csv -s <span class="token string">&#39;;&#39;</span>
</code></pre></div>`,9);function d(s,h){return e(),t("div",null,[i,a("div",l,o(s.$frontmatter.usage),1),u])}var m=n(c,[["render",d],["__file","to_csv.html.vue"]]);export{m as default};
