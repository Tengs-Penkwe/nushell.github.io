import{_ as p,r as c,o as l,c as r,a as s,b as o,w as t,e as n,d as a}from"./app.6670dc1a.js";const i={},d=n(`<h1 id="\u53D8\u91CF\u548C\u5B50\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u548C\u5B50\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u53D8\u91CF\u548C\u5B50\u8868\u8FBE\u5F0F</h1><p>\u5728 Nushell \u4E2D\u6709\u4E24\u79CD\u7C7B\u578B\u7684\u6C42\u503C\u8868\u8FBE\u5F0F\uFF1A\u53D8\u91CF\u548C\u5B50\u8868\u8FBE\u5F0F\u3002\u5982\u679C\u4F60\u770B\u5230\u4E00\u4E2A\u4EE5\u7F8E\u5143\u7B26\u53F7\uFF08<code>$</code>\uFF09\u5F00\u5934\u7684\u5B57\u7B26\u4E32\u7684\u8BDD\uFF0C\u4F60\u5C31\u5E94\u8BE5\u77E5\u9053\u4F60\u770B\u5230\u7684\u662F\u4E00\u4E2A\u6C42\u503C\u8868\u8FBE\u5F0F\u3002\u8FD9\u8868\u660E\u5F53 Nushell \u8FD0\u884C\u5230\u6B64\u5904\u65F6\u9700\u8981\u6267\u884C\u4E00\u4E2A\u6C42\u503C\u64CD\u4F5C\u6765\u5904\u7406\u8FD9\u4E2A\u8868\u8FBE\u5F0F\u5E76\u4F7F\u7528\u6B64\u7ED3\u679C\u503C\u3002\u8FD9\u4E24\u79CD\u6C42\u503C\u8868\u8FBE\u5F0F\u90FD\u652F\u6301\u4E00\u4E2A\u7B80\u5355\u5F62\u5F0F\u548C\u4E00\u4E2A&quot;\u8DEF\u5F84&quot;\u5F62\u5F0F\uFF0C\u7528\u4E8E\u5904\u7406\u66F4\u590D\u6742\u7684\u6570\u636E\u3002</p><h2 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h2><p>\u5728\u4E24\u79CD\u6C42\u503C\u8868\u8FBE\u5F0F\u4E2D\u6BD4\u8F83\u7B80\u5355\u7684\u662F\u53D8\u91CF\u3002\u5728\u6C42\u503C\u8FC7\u7A0B\u4E2D\uFF0C\u53D8\u91CF\u88AB\u5176\u503C\u6240\u53D6\u4EE3\u3002</p><p>\u5982\u679C\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A\u53D8\u91CF\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528<code>$</code>\u6765\u5F15\u7528\u5B83\u5E76\u6253\u5370\u5176\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> my-value <span class="token operator">=</span> <span class="token number">4</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$my</span>-value
<span class="token number">4</span>
</code></pre></div><p>Nushell \u4E2D\u7684\u53D8\u91CF\u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u8FD9\u610F\u5473\u7740\u4F60\u4E0D\u80FD\u5728\u58F0\u660E\u540E\u4FEE\u6539\u5B83\u7684\u503C\u3002 \u4E0D\u8FC7\u5B83\u4EEC\u53EF\u4EE5\u5728\u5D4C\u5957\u5757\u4E2D\u88AB\u9690\u85CF\uFF0C\u8FD9\u5BFC\u81F4\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> my-value <span class="token operator">=</span> <span class="token number">4</span>
<span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token punctuation">{</span> <span class="token builtin class-name">let</span> my-value <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$my</span>-value <span class="token punctuation">}</span>
<span class="token number">5</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$my</span>-value
<span class="token number">4</span>
</code></pre></div><h2 id="\u53D8\u91CF\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u8DEF\u5F84" aria-hidden="true">#</a> \u53D8\u91CF\u8DEF\u5F84</h2><p>\u53D8\u91CF\u8DEF\u5F84\u901A\u8FC7\u6DF1\u5165\u53D8\u91CF\u7684\u5185\u5BB9\uFF0C\u627E\u5230\u5176\u4E2D\u7684\u5217\uFF0C\u5E76\u6700\u7EC8\u83B7\u5F97\u4E00\u4E2A\u503C\u3002\u6BD4\u5982\uFF0C\u5BF9\u4E8E\u524D\u9762\u7684\u4F8B\u5B50\u5982\u679C\u6211\u4EEC\u4E0D\u662F\u8D4B\u503C<code>4</code>\uFF0C\u800C\u662F\u8D4B\u503C\u4E86\u4E00\u4E2A\u8868\u7684\u503C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> my-value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>testuser<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u53D8\u91CF\u8DEF\u5F84\u6765\u8BBF\u95EE\u53D8\u91CF<code>$my-value</code>\u5E76\u53EA\u7528\u4E00\u6B65\u4ECE<code>name</code>\u5217\u83B7\u5F97\u6570\u503C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$my</span>-value.name
testuser
</code></pre></div><h2 id="\u5B50\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5B50\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u5B50\u8868\u8FBE\u5F0F</h2><p>\u4F60\u603B\u662F\u53EF\u4EE5\u901A\u8FC7\u7528\u5706\u62EC\u53F7<code>()</code>\u6765\u6267\u884C\u4E00\u4E2A\u5B50\u8868\u8FBE\u5F0F\u5E76\u4F7F\u7528\u5176\u7ED3\u679C\u3002\u8BF7\u6CE8\u610F\uFF0CNushell \u4EE5\u524D\u7684\u7248\u672C\uFF080.32 \u4EE5\u524D\uFF09\u4F7F\u7528<code>$()</code>\u3002</p>`,15),u=a("\u62EC\u53F7\u4E2D\u5305\u542B\u4E86\u4E00\u4E2A\u6D41\u6C34\u7EBF\uFF0C\u8BE5\u6D41\u6C34\u7EBF\u5C06\u88AB\u6267\u884C\u5B8C\u6BD5\u7136\u540E\u4F7F\u7528\u7ED3\u679C\u503C\u3002\u4F8B\u5982\uFF0C"),h=s("code",null,"(ls)",-1),k=a("\u5C06\u8FD0\u884C"),_=s("code",null,"ls",-1),b=a("\u547D\u4EE4\u5E76\u8FD4\u56DE\u7ED3\u679C\u8868\u683C\uFF0C"),g=s("code",null,"(git branch --show-current)",-1),m=a("\u8FD0\u884C\u5916\u90E8"),v=s("code",null,"git",-1),f=a("\u547D\u4EE4\u5E76\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u5F53\u524D\u5206\u652F\u540D\u79F0\u7684\u5B57\u7B26\u4E32\u3002\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u62EC\u53F7\u6765\u8FD0\u884C\u6570\u5B66\u8868\u8FBE\u5F0F\uFF0C\u5982"),x=s("code",null,"(2 + 3)",-1),$=a("\u3002"),w=n(`<p>\u5B50\u8868\u8FBE\u5F0F\u4E5F\u53EF\u4EE5\u662F\u7BA1\u9053\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u5355\u4E2A\u547D\u4EE4\u3002\u5982\u679C\u6211\u4EEC\u60F3\u5F97\u5230\u4E00\u4E2A\u5927\u4E8E 10KB \u7684\u6587\u4EF6\u540D\u5217\u8868\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5B50\u8868\u8FBE\u5F0F\u6765\u8FD0\u884C\u4E00\u4E2A\u7BA1\u9053\uFF0C\u5E76\u5C06\u5176\u8D4B\u503C\u7ED9\u4E00\u4E2A\u53D8\u91CF\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> names-of-big-files <span class="token operator">=</span> <span class="token punctuation">(</span>ls <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 10kb<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$names</span>-of-big-files
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502    name    \u2502 type \u2502   size   \u2502   modified</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Cargo.lock \u2502 File \u2502 <span class="token number">155.3</span> KB \u2502 <span class="token number">17</span> hours ago
 <span class="token number">1</span> \u2502 README.md  \u2502 File \u2502  <span class="token number">15.9</span> KB \u2502 <span class="token number">17</span> hours ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="\u5B50\u8868\u8FBE\u5F0F\u548C\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u5B50\u8868\u8FBE\u5F0F\u548C\u8DEF\u5F84" aria-hidden="true">#</a> \u5B50\u8868\u8FBE\u5F0F\u548C\u8DEF\u5F84</h2><p>\u5B50\u8868\u8FBE\u5F0F\u4E5F\u652F\u6301\u8DEF\u5F84\uFF0C\u4F8B\u5982\uFF0C\u5047\u8BBE\u6211\u4EEC\u60F3\u83B7\u5F97\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u540D\u5217\u8868\uFF0C\u5176\u4E2D\u4E00\u4E2A\u529E\u6CD5\u662F\u4F7F\u7528\u7BA1\u9053\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get name
</code></pre></div><p>\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B50\u8868\u8FBE\u5F0F\u8DEF\u5F84\u53EA\u9700\u4E00\u6B65\u5373\u53EF\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">(</span>ls<span class="token punctuation">)</span>.name
</code></pre></div><p>\u8FD9\u53D6\u51B3\u4E8E\u4EE3\u7801\u7684\u9700\u8981\u548C\u4F60\u4E2A\u4EBA\u559C\u6B22\u7684\u7F16\u7801\u98CE\u683C\u3002</p><h2 id="\u7B80\u5316\u5B50\u8868\u8FBE\u5F0F-\u884C\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5316\u5B50\u8868\u8FBE\u5F0F-\u884C\u6761\u4EF6" aria-hidden="true">#</a> \u7B80\u5316\u5B50\u8868\u8FBE\u5F0F (\u884C\u6761\u4EF6)</h2>`,9),z=a("Nushell \u652F\u6301\u4F7F\u7528\u4E00\u79CD\u7B80\u5316\u7684\u65B9\u5F0F\u8BBF\u95EE\u5B50\u8868\u8FBE\u5F0F\u4E2D\u7684\u5217\uFF0C\u4F60\u53EF\u80FD\u5DF2\u7ECF\u4F7F\u7528\u8FC7\u8FD9\u4E2A\u529F\u80FD\u4E86\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u53EA\u770B\u5230"),y=s("code",null,"ls",-1),N=a("\u4E2D\u5927\u5C0F\u81F3\u5C11\u4E3A 10KB \u7684\u884C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\uFF1A"),B=n(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 10kb
</code></pre></div>`,1),K=s("code",null,"where size > 10kb",-1),V=a("\u662F\u4E00\u4E2A\u7531\u4E24\u90E8\u5206\u7EC4\u6210\u7684\u547D\u4EE4\uFF1A\u547D\u4EE4\u540D"),C=s("code",null,"where",-1),E=a("\u548C\u7B80\u5316\u7684\u8868\u8FBE\u5F0F"),R=s("code",null,"size > 10kb",-1),q=a("\u3002\u6211\u4EEC\u8BF4\u7B80\u5316\u662F\u56E0\u4E3A\u8FD9\u91CC\u7684"),F=s("code",null,"size",-1),L=a("\u662F"),A=s("code",null,"$it.size",-1),D=a("\u7684\u7B80\u6D01\u7248\u3002\u4E5F\u53EF\u4EE5\u7528\u4EE5\u4E0B\u4EFB\u4F55\u4E00\u79CD\u65B9\u5F0F\u6765\u5199\uFF1A"),M=n(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where <span class="token variable">$it</span>.size <span class="token operator">&gt;</span> 10kb
<span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where <span class="token punctuation">(</span><span class="token variable">$it</span>.size <span class="token operator">&gt;</span> 10kb<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where <span class="token punctuation">{</span><span class="token operator">|</span><span class="token variable">$it</span><span class="token operator">|</span> <span class="token variable">$it</span>.size <span class="token operator">&gt;</span> 10kb <span class="token punctuation">}</span>
</code></pre></div><p>\u4E3A\u4E86\u4F7F\u7B80\u5316\u8BED\u6CD5\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u5217\u540D\u5FC5\u987B\u51FA\u73B0\u5728\u64CD\u4F5C\u7684\u5DE6\u4FA7\uFF08\u5982<code>size &gt; 10kb</code>\u4E2D\u7684<code>size</code>\uFF09\u3002</p>`,2);function S(T,j){const e=c("RouterLink");return l(),r("div",null,[d,s("p",null,[u,h,k,o(e,{to:"/book/commands/ls.html"},{default:t(()=>[_]),_:1}),b,g,m,v,f,x,$]),w,s("p",null,[z,o(e,{to:"/book/commands/ls.html"},{default:t(()=>[y]),_:1}),N]),B,s("p",null,[K,V,o(e,{to:"/book/commands/where.html"},{default:t(()=>[C]),_:1}),E,R,q,F,L,A,D]),M])}var H=p(i,[["render",S],["__file","variables_and_subexpressions.html.vue"]]);export{H as default};
