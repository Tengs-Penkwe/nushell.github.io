import{_ as a,o as s,c as n,e}from"./app.6670dc1a.js";const t={},o=e(`<p>Convert value to a binary primitive</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> into binary <span class="token punctuation">..</span>.args <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li>...args: column paths to convert to binary (for table input)</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-s, --skip <code>&lt;integer&gt;</code>: skip x number of bytes</li><li>-b, --bytes <code>&lt;integer&gt;</code>: show y number of bytes</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>convert string to a nushell binary primitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;This is a string that is exactly 52 characters long.&#39;</span> <span class="token operator">|</span> into binary
</code></pre></div><p>convert string to a nushell binary primitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;This is a string that is exactly 52 characters long.&#39;</span> <span class="token operator">|</span> into binary --skip <span class="token number">10</span>
</code></pre></div><p>convert string to a nushell binary primitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;This is a string that is exactly 52 characters long.&#39;</span> <span class="token operator">|</span> into binary --skip <span class="token number">10</span> --bytes <span class="token number">10</span>
</code></pre></div><p>convert a number to a nushell binary primitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">|</span> into binary
</code></pre></div><p>convert a boolean to a nushell binary primitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$true</span> <span class="token operator">|</span> into binary
</code></pre></div><p>convert a filesize to a nushell binary primitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where name <span class="token operator">==</span> LICENSE <span class="token operator">|</span> get size <span class="token operator">|</span> into binary
</code></pre></div><p>convert a filepath to a nushell binary primitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where name <span class="token operator">==</span> LICENSE <span class="token operator">|</span> get name <span class="token operator">|</span> path <span class="token function">expand</span> <span class="token operator">|</span> into binary
</code></pre></div><p>convert a decimal to a nushell binary primitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token number">1.234</span> <span class="token operator">|</span> into binary
</code></pre></div>`,24),p=[o];function r(l,i){return s(),n("div",null,p)}var h=a(t,[["render",r],["__file","into-binary.html.vue"]]);export{h as default};
