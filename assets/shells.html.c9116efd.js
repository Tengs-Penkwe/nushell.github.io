import{_ as s,o as t,c as n,a as e,t as r,d as l,e as o}from"./app.6670dc1a.js";const c={},p=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),l(),e("code",null,"{{ $frontmatter.title }}")],-1),h={style:{"white-space":"pre-wrap"}},d=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; shells </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Enter a new shell at parent path &#39;..&#39; and show all opened shells</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> enter <span class="token punctuation">..</span><span class="token punctuation">;</span> shells
</code></pre></div><p>Show currently active shell</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells <span class="token operator">|</span> where active <span class="token operator">==</span> <span class="token boolean">true</span>
</code></pre></div>`,7);function i(a,u){return t(),n("div",null,[p,e("div",h,r(a.$frontmatter.usage),1),d])}var g=s(c,[["render",i],["__file","shells.html.vue"]]);export{g as default};
