import{_ as s,o as t,c as r,a as e,t as o,d as c,e as i}from"./app.6670dc1a.js";const n={},d=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),c(),e("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},p=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; cp (source) (destination) --recursive --verbose --interactive</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>source</code>: the place to copy from</li><li><code>destination</code>: the place to copy to</li><li><code>--recursive</code>: copy recursively through subdirectories</li><li><code>--verbose</code>: do copy in verbose mode (default:false)</li><li><code>--interactive</code>: ask user to confirm action</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Copy myfile to dir_b</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> myfile dir_b
</code></pre></div><p>Recursively copy dir_a to dir_b</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> -r dir_a dir_b
</code></pre></div><p>Recursively copy dir_a to dir_b, and print the feedbacks</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> -r -v dir_a dir_b
</code></pre></div><p>Move many files into a directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> *.txt dir_a
</code></pre></div>`,13);function h(a,u){return t(),r("div",null,[d,e("div",l,o(a.$frontmatter.usage),1),p])}var f=s(n,[["render",h],["__file","cp.html.vue"]]);export{f as default};
