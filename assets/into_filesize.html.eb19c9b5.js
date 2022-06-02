import{_ as e,o as n,c as t,a,t as o,d as p,e as i}from"./app.6670dc1a.js";const r={},c=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),p(),a("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},d=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into filesize ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: column paths to convert to filesize (for table input)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert string to filesize in table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>bytes<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3.2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>2kb<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into filesize bytes
</code></pre></div><p>Convert string to filesize</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;2&#39;</span> <span class="token operator">|</span> into filesize
</code></pre></div><p>Convert decimal to filesize</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">8.3</span> <span class="token operator">|</span> into filesize
</code></pre></div><p>Convert int to filesize</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">|</span> into filesize
</code></pre></div><p>Convert file size to filesize</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 4KB <span class="token operator">|</span> into filesize
</code></pre></div>`,15);function u(s,h){return n(),t("div",null,[c,a("div",l,o(s.$frontmatter.usage),1),d])}var k=e(r,[["render",u],["__file","into_filesize.html.vue"]]);export{k as default};
