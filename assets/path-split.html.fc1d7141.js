import{_ as a,o as s,c as e,e as n}from"./app.6670dc1a.js";const t={},p=n(`<p>Split a path into parts by a separator.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> path <span class="token function">split</span> <span class="token punctuation">..</span>.args <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li>...args: Optionally operate by column path</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Split a path into parts</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;/home/viking/spam.txt&#39;</span> <span class="token operator">|</span> path <span class="token function">split</span>
</code></pre></div><p>Split all paths under the &#39;name&#39; column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> path <span class="token function">split</span> name
</code></pre></div>`,12),l=[p];function o(r,c){return s(),e("div",null,l)}var h=a(t,[["render",o],["__file","path-split.html.vue"]]);export{h as default};
