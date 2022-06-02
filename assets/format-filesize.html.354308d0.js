import{_ as a,o as e,c as s,e as t}from"./app.6670dc1a.js";const n={},o=t(`<p>Converts a column of filesizes to some specified format</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">format</span> filesize <span class="token operator">&lt;</span>field<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>format value<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;field&gt;</code> the name of the column to update <code>&lt;format value&gt;</code> the format into which convert the filesizes</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert the size row to KB</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">format</span> filesize size KB
</code></pre></div><p>Convert the apparent row to B</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">du</span> <span class="token operator">|</span> <span class="token function">format</span> filesize apparent B
</code></pre></div>`,12),r=[o];function l(p,c){return e(),s("div",null,r)}var h=a(n,[["render",l],["__file","format-filesize.html.vue"]]);export{h as default};
