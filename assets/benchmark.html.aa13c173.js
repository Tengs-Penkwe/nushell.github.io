import{_ as a,o as s,c as e,e as n}from"./app.6670dc1a.js";const t={},c=n(`<p>Runs a block and returns the time it took to execute it.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> benchmark <span class="token operator">&lt;</span>block<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;block&gt;</code> the block to run and benchmark</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-p, --passthrough <code>&lt;block&gt;</code>: Display the benchmark results and pass through the block&#39;s output</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Benchmarks a command within a block</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> benchmark <span class="token punctuation">{</span> <span class="token function">sleep</span> 500ms <span class="token punctuation">}</span>
</code></pre></div><p>Benchmarks a command within a block and passes its output through</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token number">45</span> <span class="token operator">|</span> benchmark <span class="token punctuation">{</span> <span class="token function">sleep</span> 500ms <span class="token punctuation">}</span> --passthrough <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div>`,12),o=[c];function p(l,r){return s(),e("div",null,o)}var i=a(t,[["render",p],["__file","benchmark.html.vue"]]);export{i as default};
