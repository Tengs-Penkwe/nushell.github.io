import{_ as e,o as t,c as o,e as a}from"./app.6670dc1a.js";const n={},r=a(`<h1 id="\u30E1\u30BF\u30C6\u3099\u30FC\u30BF" tabindex="-1"><a class="header-anchor" href="#\u30E1\u30BF\u30C6\u3099\u30FC\u30BF" aria-hidden="true">#</a> \u30E1\u30BF\u30C7\u30FC\u30BF</h1><p>Nu \u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u3068\u88CF\u3067\u306A\u306B\u304B\u7279\u5225\u306A\u3053\u3068\u304C\u304A\u304D\u3066\u3044\u308B\u306E\u3067\u306F\u306A\u3044\u304B\u3068\u601D\u3046\u3053\u3068\u304C\u3042\u308B\u3067\u3057\u3087\u3046\u3002\u4F8B\u3048\u3070\u3001Nu \u304C\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u308B\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F\u3092\u5FD8\u308C\u3066\u3044\u3066\u3001\u4F59\u8A08\u306B\u5909\u63DB\u3057\u3088\u3046\u3068\u3057\u3066\u3057\u307E\u3063\u305F\u3068\u3057\u307E\u3057\u3087\u3046\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.toml | from toml
error: Expected a string from pipeline
- shell:1:18
1 | open Cargo.toml | from toml
  |                   ^^^^^^^^^ requires string input
- shell:1:5
1 | open Cargo.toml | from toml
  |      ---------- object originates from here
</code></pre></div><p>\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u3001<code>from toml</code>\u306B\u6E21\u3057\u305F\u3082\u306E\u304C\u6587\u5B57\u5217\u3067\u306F\u306A\u304B\u3063\u305F\u3053\u3068\u3060\u3051\u3067\u306F\u306A\u304F\u3001\u5143\u306E\u5024\u304C\u3069\u3053\u304B\u3089\u6765\u305F\u304B\u3082\u793A\u3057\u3066\u3044\u307E\u3059\u3002\u3069\u3046\u3084\u3063\u3066\u3053\u308C\u3092\u77E5\u308B\u306E\u3067\u3057\u3087\u3046\u304B\u3002</p><p>Nu \u306E\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u3092\u6D41\u308C\u308B\u5024\u306B\u306F\u3001\u591A\u304F\u306E\u5834\u5408\u3001\u30E1\u30BF\u30C7\u30FC\u30BF\u3068\u547C\u3070\u308C\u308B\u4E00\u9023\u306E\u8FFD\u52A0\u60C5\u5831\u304C\u4ED8\u52A0\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u3089\u306F\u30B9\u30C8\u30A2\u306B\u3042\u308B\u30A2\u30A4\u30C6\u30E0\u306B\u3064\u3051\u3089\u308C\u3066\u3044\u308B\u30BF\u30B0\u306E\u3088\u3046\u306B\u30BF\u30B0\u3068\u547C\u3070\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u30BF\u30B0\u306F\u30C7\u30FC\u30BF\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u304C\u3001\u30C7\u30FC\u30BF\u3092\u64CD\u4F5C\u3059\u308B\u969B\u306E\u4F53\u9A13\u3092\u5411\u4E0A\u3055\u305B\u307E\u3059\u3002</p><p>\u3082\u3046\u4E00\u5EA6<code>open</code>\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3001\u305F\u3060\u3057\u4ECA\u56DE\u306F\u3001\u8FD4\u3055\u308C\u308B\u30BF\u30B0\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.toml | tags
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 span   \u2502 [row end start]
 anchor \u2502 /home/jonathant/Source/nushell/Cargo.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u73FE\u5728\u3001\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u4E0A\u306E\u5024\u306B\u3064\u3044\u3066\uFF12\u3064\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u8FFD\u8DE1\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u30C7\u30FC\u30BF\u304C\u3069\u3053\u304B\u3089\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u304B\u3092\u3057\u3081\u3059 anchor \u304C\u3042\u308B\u3053\u3068\u306B\u6C17\u3065\u304F\u3067\u3057\u3087\u3046\u3002\u3053\u308C\u306B\u3088\u308A Nu \u306F\u30C7\u30FC\u30BF\u306E\u8868\u793A\u65B9\u6CD5\u3092\u3088\u308A\u3088\u304F\u7406\u89E3\u3067\u304D\u308B\u306E\u3067\u3059\u3002</p><p>\u4ECA\u5EA6\u306F span \u3092\u307F\u3066\u307F\u307E\u3057\u3087\u3046\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.toml | tags | get span
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500
 start \u2502 5
 end   \u2502 15
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500
</code></pre></div><p>\u3053\u3053\u3067\u306E&quot;start&quot;\u3068&quot;end&quot;\u306E span \u306F\u4E0B\u7DDA\u304C\u884C\u306E\u3069\u3053\u306B\u3042\u308B\u306E\u304B\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u30025 \u304B\u3089 15 \u307E\u3067\u6570\u3048\u3066\u307F\u308B\u3068\u305D\u308C\u304C&quot;Cargo.toml&quot;\u30D5\u30A1\u30A4\u30EB\u540D\u3068\u4E00\u81F4\u3059\u308B\u3053\u3068\u304C\u308F\u304B\u308B\u3067\u3057\u3087\u3046\u3002\u3053\u306E\u3088\u3046\u306B\u3057\u3066\u3001\u3055\u304D\u307B\u3069\u307F\u305F\u30A8\u30E9\u30FC\u306F\u3069\u3053\u306B\u4E0B\u7DDA\u3092\u3072\u304F\u3079\u304D\u304B\u3092\u3057\u3063\u305F\u306E\u3067\u3059\u3002</p>`,11),s=[r];function l(c,p){return t(),o("div",null,s)}var g=e(n,[["render",l],["__file","metadata.html.vue"]]);export{g as default};
