import{_ as s,o as n,c as t,a,t as r,d as o,e as l}from"./app.6670dc1a.js";const c={},d=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),a("code",null,"{{ $frontmatter.title }}")],-1),i={style:{"white-space":"pre-wrap"}},p=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; help ...rest --find</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the name of command to get help on</li><li><code>--find {string}</code>: string to find in command names, usage, and search terms</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>show all commands and sub-commands</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> commands
</code></pre></div><p>show help for single command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> match
</code></pre></div><p>show help for single sub-command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> str lpad
</code></pre></div><p>search for string in command names, usage and search terms</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> --find char
</code></pre></div>`,13);function h(e,m){return n(),t("div",null,[d,a("div",i,r(e.$frontmatter.usage),1),p])}var u=s(c,[["render",h],["__file","help.html.vue"]]);export{u as default};
