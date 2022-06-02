import{_ as a,o as t,c as n,a as s,t as r,d as o,e as p}from"./app.6670dc1a.js";const c={},l=s("h1",{id:"frontmatter-title",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),s("code",null,"{{ $frontmatter.title }}")],-1),i={style:{"white-space":"pre-wrap"}},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; ps --long</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--long</code>: list all available columns for each entry</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>List the system processes</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span>
</code></pre></div><p>List the top 5 system processes with the highest memory usage</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> sort-by mem <span class="token operator">|</span> last <span class="token number">5</span>
</code></pre></div><p>List the top 3 system processes with the highest CPU usage</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> sort-by cpu <span class="token operator">|</span> last <span class="token number">3</span>
</code></pre></div><p>List the system processes with &#39;nu&#39; in their names</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where name <span class="token operator">=~</span> <span class="token string">&#39;nu&#39;</span>
</code></pre></div>`,13);function d(e,u){return t(),n("div",null,[l,s("div",i,r(e.$frontmatter.usage),1),h])}var m=a(c,[["render",d],["__file","ps.html.vue"]]);export{m as default};
