import{_ as n,o as s,c as t,a as e,t as r,d as o,e as c}from"./app.6670dc1a.js";const l={},p=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),e("code",null,"{{ $frontmatter.title }}")],-1),i={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; length --column</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--column</code>: Show the number of columns in a table</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Count the number of entries in a list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> length
</code></pre></div><p>Count the number of columns in the calendar table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cal</span> <span class="token operator">|</span> length -c
</code></pre></div>`,9);function d(a,u){return s(),t("div",null,[p,e("div",i,r(a.$frontmatter.usage),1),h])}var g=n(l,[["render",d],["__file","length.html.vue"]]);export{g as default};
