import{_ as t,o as s,c as o,a as e,t as r,d as n,e as i}from"./app.6670dc1a.js";const c={},d=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),n(),e("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},h=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; mv (source) (destination) --verbose --interactive</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>source</code>: the location to move files/directories from</li><li><code>destination</code>: the location to move files/directories to</li><li><code>--verbose</code>: make mv to be verbose, showing files been moved.</li><li><code>--interactive</code>: ask user to confirm action</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Rename a file</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mv</span> before.txt after.txt
</code></pre></div><p>Move a file into a directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mv</span> test.txt my/subdirectory
</code></pre></div><p>Move many files into a directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mv</span> *.txt my/subdirectory
</code></pre></div>`,11);function p(a,m){return s(),o("div",null,[d,e("div",l,r(a.$frontmatter.usage),1),h])}var f=t(c,[["render",p],["__file","mv.html.vue"]]);export{f as default};
