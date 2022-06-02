import{_ as t,o as r,c as s,a as e,t as n,d as o,e as c}from"./app.6670dc1a.js";const i={},d=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),e("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; seq char ...rest --separator --terminator</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: sequence chars</li><li><code>--separator {string}</code>: separator character (defaults to \\n)</li><li><code>--terminator {string}</code>: terminator character (defaults to \\n)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>sequence a to e with newline separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> char a e
</code></pre></div><p>sequence a to e with pipe separator separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> char -s <span class="token string">&#39;|&#39;</span> a e
</code></pre></div>`,9);function p(a,u){return r(),s("div",null,[d,e("div",l,n(a.$frontmatter.usage),1),h])}var g=t(i,[["render",p],["__file","seq_char.html.vue"]]);export{g as default};
