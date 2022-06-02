import{_ as a,o as s,c as n,e as t}from"./app.6670dc1a.js";const p={},o=t(`<p>Converts table data into XML text.</p><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li><code>-p</code>, <code>--pretty</code> <code>&lt;integer&gt;</code>: Formats the XML text with the provided indentation setting</li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> jonathan.xml
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 rss
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token punctuation">[</span>table: <span class="token number">1</span> row<span class="token punctuation">]</span>
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cat</span> jonathan.xml
<span class="token operator">&lt;</span>?xml <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span> <span class="token assign-left variable">encoding</span><span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span>?<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>rss <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&quot;2.0&quot;</span> xmlns:atom<span class="token operator">=</span><span class="token string">&quot;http://www.w3.org/2005/Atom&quot;</span> xmlns:dc<span class="token operator">=</span><span class="token string">&quot;http://purl.org/dc/elements/1.1/&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>channel<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Jonathan Turner<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>link<span class="token operator">&gt;</span>http://www.jonathanturner.org<span class="token operator">&lt;</span>/link<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>atom:link <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;http://www.jonathanturner.org/feed.xml&quot;</span> <span class="token assign-left variable">rel</span><span class="token operator">=</span><span class="token string">&quot;self&quot;</span> <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;application/rss+xml&quot;</span> /<span class="token operator">&gt;</span>

                        <span class="token operator">&lt;</span>item<span class="token operator">&gt;</span>
                                <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Creating crossplatform Rust terminal apps<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>description<span class="token operator">&gt;&amp;</span>lt<span class="token punctuation">;</span>p<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>img <span class="token assign-left variable">src</span><span class="token operator">=</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>/images/pikachu.jpg<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span> <span class="token assign-left variable">alt</span><span class="token operator">=</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>Pikachu animation <span class="token keyword">in</span> Windows<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span> /<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>/p<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>

<span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>p<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>em<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>Look Mom, Pikachu running <span class="token keyword">in</span> Windows CMD<span class="token operator">!</span><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>/em<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>/p<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>

<span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>p<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>Part of the adventure is not seeing the way ahead and going anyway.<span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>/p<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>
<span class="token operator">&lt;</span>/description<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>pubDate<span class="token operator">&gt;</span>Mon, 05 Oct <span class="token number">2015</span> 00:00:00 +000<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>/pubDate<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>link<span class="token operator">&gt;</span>http://www.jonathanturner.org/2015/10/off-to-new-adventures.html<span class="token operator">&lt;</span>/link<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>guid <span class="token assign-left variable">isPermaLink</span><span class="token operator">=</span><span class="token string">&quot;true&quot;</span><span class="token operator">&gt;</span>http://www.jonathanturner.org/2015/10/off-to-new-adventures.html<span class="token operator">&lt;</span>/guid<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/item<span class="token operator">&gt;</span>

        <span class="token operator">&lt;</span>/channel<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>/rss<span class="token operator">&gt;</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> jonathan.xml <span class="token operator">|</span> to xml --pretty <span class="token number">2</span>
<span class="token operator">&lt;</span>rss <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&quot;2.0&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>channel<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Jonathan Turner<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>link<span class="token operator">&gt;</span>http://www.jonathanturner.org<span class="token operator">&lt;</span>/link<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>link <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;http://www.jonathanturner.org/feed.xml&quot;</span> <span class="token assign-left variable">rel</span><span class="token operator">=</span><span class="token string">&quot;self&quot;</span> <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;application/rss+xml&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>/link<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>item<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Creating crossplatform Rust terminal apps<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>description<span class="token operator">&gt;&amp;</span>lt<span class="token punctuation">;</span>p<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>img <span class="token assign-left variable">src</span><span class="token operator">=</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>/images/pikachu.jpg<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span> <span class="token assign-left variable">alt</span><span class="token operator">=</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>Pikachu animation <span class="token keyword">in</span> Windows<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span> /<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>/p<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>

<span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>p<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>em<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>Look Mom, Pikachu running <span class="token keyword">in</span> Windows CMD<span class="token operator">!</span><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>/em<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>/p<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>

<span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>p<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>Part of the adventure is not seeing the way ahead and going anyway.<span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>/p<span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>
<span class="token operator">&lt;</span>/description<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>pubDate<span class="token operator">&gt;</span>Mon, 05 Oct <span class="token number">2015</span> 00:00:00 +000<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>/pubDate<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>link<span class="token operator">&gt;</span>http://www.jonathanturner.org/2015/10/off-to-new-adventures.html<span class="token operator">&lt;</span>/link<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>guid <span class="token assign-left variable">isPermaLink</span><span class="token operator">=</span><span class="token string">&quot;true&quot;</span><span class="token operator">&gt;</span>http://www.jonathanturner.org/2015/10/off-to-new-adventures.html<span class="token operator">&lt;</span>/guid<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/item<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/channel<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/rss<span class="token operator">&gt;</span>
</code></pre></div><p>Due to XML and internal representation, <code>to xml</code> is currently limited, it will:</p><ul><li>Only process table data loaded from XML files (e.g. <code>open file.json | to xml</code> will fail)</li><li>Drop XML prolog declarations</li><li>Drop namespaces</li><li>Drop comments</li></ul>`,9),e=[o];function r(l,c){return s(),n("div",null,e)}var i=a(p,[["render",r],["__file","to-xml.html.vue"]]);export{i as default};
