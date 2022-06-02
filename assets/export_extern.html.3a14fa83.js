import{_ as t,o as s,c as n,a as e,t as r,d as i,e as o}from"./app.6670dc1a.js";const d={},c=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),i(),e("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},h=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; export extern (def_name) (params)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>def_name</code>: definition name</li><li><code>params</code>: parameters</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check
https://www.nushell.sh/book/thinking_in_nushell.html#parsing-and-evaluation-are-different-stages
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Export the signature for an external command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">export</span> extern <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>text: string<span class="token punctuation">]</span>
</code></pre></div>`,9);function p(a,u){return s(),n("div",null,[c,e("div",l,r(a.$frontmatter.usage),1),h])}var x=t(d,[["render",p],["__file","export_extern.html.vue"]]);export{x as default};
