import{_ as a,o as s,c as e,e as n}from"./app.6670dc1a.js";const t={},o=n(`<p>Finds the sum of a list of numbers or tables</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> math <span class="token function">sum</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Sum a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> math <span class="token function">sum</span>
</code></pre></div><p>Get the disk usage for the current directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> --all --du <span class="token operator">|</span> get size <span class="token operator">|</span> math <span class="token function">sum</span>
</code></pre></div>`,10),p=[o];function c(l,r){return s(),e("div",null,p)}var u=a(t,[["render",c],["__file","math-sum.html.vue"]]);export{u as default};
