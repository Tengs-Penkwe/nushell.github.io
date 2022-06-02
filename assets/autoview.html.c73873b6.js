import{_ as n,o as s,c as a,e}from"./app.6670dc1a.js";const p={},o=e(`<p>Print the content of the pipeline as a table or list. It is the implied or default viewer when none is provided.</p><p>When reading a single value, a table or a list, <code>autoview</code> will attempt to view it. When reading a string that originally comes from a source file it will attempt to use <code>textview</code>. When reading a binary file it will attempt to display its content as hexadecimal numbers and the corresponding characters.</p><p><code>-h</code>, <code>--help</code> Display help message.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>In all following examples <code>autoview</code> can be removed with no change in the output. The use of <code>autoview</code> at the end of the pipeline is implied when no viewer is explicitly used.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">which</span> nu <span class="token operator">|</span> get path <span class="token operator">|</span> autoview
/home/me/.cargo/bin/nu
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> autoview
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#  \u2502 name               \u2502 type \u2502 size    \u2502 modified</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  <span class="token number">0</span> \u2502 README.md          \u2502 File \u2502   <span class="token number">932</span> B \u2502 <span class="token number">19</span> hours ago
  <span class="token number">1</span> \u2502 alias.md           \u2502 File \u2502  <span class="token number">2.0</span> KB \u2502 <span class="token number">19</span> hours ago
  <span class="token number">2</span> \u2502 append.md          \u2502 File \u2502  <span class="token number">1.4</span> KB \u2502 <span class="token number">19</span> hours ago
   <span class="token punctuation">..</span>.
 <span class="token number">82</span> \u2502 wrap.md            \u2502 File \u2502  <span class="token number">1.8</span> KB \u2502 <span class="token number">19</span> hours ago
\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;# Hi&quot;</span> <span class="token string">&quot;## Section&quot;</span> <span class="token string">&quot;Some text&quot;</span> <span class="token operator">|</span> save file.md
<span class="token operator">&gt;</span> <span class="token function">open</span> file.md <span class="token operator">|</span> autoview
<span class="token comment"># Hi</span>
<span class="token comment">## Section</span>
Some text
</code></pre></div><p><code>autoview</code> will use <code>textview</code> to colorize the text based on the file format. The style used by <code>textview</code> can be configured in <code>config.toml</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> --raw <span class="token punctuation">(</span>which nu <span class="token operator">|</span> get path<span class="token punctuation">)</span> <span class="token operator">|</span> autoview
<span class="token punctuation">..</span>.
126d1c0:   <span class="token number">64</span> <span class="token number">31</span> <span class="token number">66</span> <span class="token number">37</span>  <span class="token number">62</span> <span class="token number">30</span> <span class="token number">31</span> <span class="token number">63</span>  <span class="token number">36</span> 2e <span class="token number">31</span> <span class="token number">31</span>  <span class="token number">38</span> 2e 6c 6c   d1f7b01c6.118.ll
126d1d0:   <span class="token number">76</span> 6d 2e <span class="token number">34</span>  <span class="token number">34</span> <span class="token number">38</span> <span class="token number">37</span> <span class="token number">35</span>  <span class="token number">37</span> <span class="token number">31</span> <span class="token number">32</span> <span class="token number">34</span>  <span class="token number">39</span> <span class="token number">35</span> <span class="token number">33</span> <span class="token number">39</span>   vm.4487571249539
126d1e0:   <span class="token number">34</span> <span class="token number">34</span> <span class="token number">30</span> <span class="token number">34</span>  <span class="token number">30</span> <span class="token number">39</span> 00 <span class="token number">61</span>  6e 6f 6e 2e  <span class="token number">30</span> <span class="token number">30</span> <span class="token number">61</span> <span class="token number">63</span>   <span class="token number">440409</span>.anon.00ac
126d1f0:   <span class="token number">37</span> <span class="token number">32</span> <span class="token number">65</span> <span class="token number">36</span>  <span class="token number">37</span> <span class="token number">66</span> <span class="token number">32</span> <span class="token number">31</span>  <span class="token number">39</span> <span class="token number">34</span> <span class="token number">62</span> <span class="token number">32</span>  <span class="token number">32</span> <span class="token number">61</span> <span class="token number">61</span> <span class="token number">63</span>   72e67f2194b22aac
126d200:   <span class="token number">62</span> <span class="token number">35</span> <span class="token number">39</span> <span class="token number">37</span>  <span class="token number">33</span> <span class="token number">36</span> <span class="token number">30</span> <span class="token number">62</span>  <span class="token number">64</span> <span class="token number">31</span> <span class="token number">39</span> <span class="token number">38</span>  2e <span class="token number">31</span> <span class="token number">36</span> 2e   b597360bd198.16.
<span class="token punctuation">..</span>.
</code></pre></div>`,10),t=[o];function c(l,r){return s(),a("div",null,t)}var m=n(p,[["render",c],["__file","autoview.html.vue"]]);export{m as default};
