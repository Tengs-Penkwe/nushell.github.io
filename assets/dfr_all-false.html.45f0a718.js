import{_ as n,o as e,c as t,a,t as p,d as o,e as l}from"./app.6670dc1a.js";const r={},c=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),a("code",null,"{{ $frontmatter.title }}")],-1),i={style:{"white-space":"pre-wrap"}},u=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr all-false </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns true if all values are false</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>false <span class="token boolean">false</span> false<span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df <span class="token operator">|</span> dfr all-false
</code></pre></div><p>Checks the result from a comparison</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> <span class="token number">2</span> <span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> res <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$s</span> <span class="token operator">&gt;</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$res</span> <span class="token operator">|</span> dfr all-false
</code></pre></div>`,7);function d(s,f){return e(),t("div",null,[c,a("div",i,p(s.$frontmatter.usage),1),u])}var k=n(r,[["render",d],["__file","dfr_all-false.html.vue"]]);export{k as default};
