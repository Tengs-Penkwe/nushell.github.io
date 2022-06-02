import{_ as s,o as n,c as t,a,t as o,d as p,e as r}from"./app.6670dc1a.js";const c={},l=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),p(),a("code",null,"{{ $frontmatter.title }}")],-1),i={style:{"white-space":"pre-wrap"}},d=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path dirname --columns --replace --num-levels</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--columns {table}</code>: Optionally operate by column path</li><li><code>--replace {string}</code>: Return original path with dirname replaced by this string</li><li><code>--num-levels {int}</code>: Number of directories to walk up</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get dirname of a path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/joe/code/test.txt&#39;</span> <span class="token operator">|</span> path <span class="token function">dirname</span>
</code></pre></div><p>Get dirname of a path in a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span> <span class="token operator">|</span> path <span class="token function">expand</span><span class="token punctuation">)</span> <span class="token operator">|</span> path <span class="token function">dirname</span> -c <span class="token punctuation">[</span> name <span class="token punctuation">]</span>
</code></pre></div><p>Walk up two levels</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/joe/code/test.txt&#39;</span> <span class="token operator">|</span> path <span class="token function">dirname</span> -n <span class="token number">2</span>
</code></pre></div><p>Replace the part that would be returned with a custom path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/joe/code/test.txt&#39;</span> <span class="token operator">|</span> path <span class="token function">dirname</span> -n <span class="token number">2</span> -r /home/viking
</code></pre></div>`,13);function h(e,u){return n(),t("div",null,[l,a("div",i,o(e.$frontmatter.usage),1),d])}var g=s(c,[["render",h],["__file","path_dirname.html.vue"]]);export{g as default};
