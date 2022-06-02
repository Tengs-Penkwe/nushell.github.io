import{_ as o,r,o as i,c as l,a as e,b as n,d as t,e as h}from"./app.6670dc1a.js";const a={},d=e("h1",{id:"nushell-0-31",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-31","aria-hidden":"true"},"#"),t(" Nushell 0.31")],-1),c=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),_=e("p",null,"Today, we're releasing 0.31 of Nu. This release includes continued polish of the engine and commands.",-1),u=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),p=t("Nu 0.31 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.31.0",target:"_blank",rel:"noopener noreferrer"},g=t("pre-built binaries"),m=t(" or from "),b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},k=t("crates.io"),w=t(". If you have Rust installed you can install it using "),x=e("code",null,"cargo install nu",-1),y=t("."),v=h('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>If you&#39;d like to try the experimental paging feature in this release, you can install with <code>cargo install nu --features=table-pager</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><p>This release is largely around polish. We&#39;ve continued to improve Nushell&#39;s engine to work in the more streamlined style, improved the performance of commands like <code>ps</code> and the appearance of commands like <code>binaryview</code>.</p><h2 id="new-commands-fdncred" tabindex="-1"><a class="header-anchor" href="#new-commands-fdncred" aria-hidden="true">#</a> New commands (fdncred)</h2>',6),N={href:"https://github.com/nushell/nushell/issues/3403",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"into string",-1),I=t(" to convert values to strings"),L={href:"https://github.com/nushell/nushell/issues/3370",target:"_blank",rel:"noopener noreferrer"},W=e("code",null,"into binary",-1),B=t(" to convert values to binary"),E=e("h2",{id:"improvements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#improvements","aria-hidden":"true"},"#"),t(" Improvements")],-1),V=e("h3",{id:"nushell",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell","aria-hidden":"true"},"#"),t(" Nushell")],-1),j=t("natemara fixed "),C={href:"https://github.com/nushell/nushell/pull/3407",target:"_blank",rel:"noopener noreferrer"},S=t("a slowness in the "),q=e("code",null,"ps",-1),A=t(" command"),K=e("li",null,"elferherrera, kubouch, stormasm, LhKipp ported commands to the new engine-p style",-1),z=t("fdncred improved "),D={href:"https://github.com/nushell/nushell/issues/3370",target:"_blank",rel:"noopener noreferrer"},R=t("binaryview"),F=t(", "),G={href:"https://github.com/nushell/nushell/issues/3375",target:"_blank",rel:"noopener noreferrer"},H=t("added check for endian-ness, added a bytes and skip"),J=t(", "),M={href:"https://github.com/nushell/nushell/issues/3374",target:"_blank",rel:"noopener noreferrer"},O=t('added ability to change "#" color using header_color'),P=t(", "),Q={href:"https://github.com/nushell/nushell/issues/3367",target:"_blank",rel:"noopener noreferrer"},U=t("tweaked the error handling to show specific errors"),X=t(", "),Y={href:"https://github.com/nushell/nushell/issues/3366",target:"_blank",rel:"noopener noreferrer"},Z=t("updated to a quicker Levenshtein implementation"),$=t(", and "),ee={href:"https://github.com/nushell/nushell/issues/3351",target:"_blank",rel:"noopener noreferrer"},te=t("allowed start to handle urls"),se=t("kubouch "),ne={href:"https://github.com/nushell/nushell/issues/3359",target:"_blank",rel:"noopener noreferrer"},oe=t("fixed table-pager feature compilation"),re=t("Azgrom created a "),ie={href:"https://github.com/nushell/nushell/issues/3388",target:"_blank",rel:"noopener noreferrer"},le=t("features cargo installer wrapper"),he=t("jgoday added "),ae={href:"https://github.com/nushell/nushell/issues/3387",target:"_blank",rel:"noopener noreferrer"},de=t("ignore-case and duplicated options to "),ce=e("code",null,"uniq",-1),_e=t(" command "),ue=t(", and fixed a "),pe={href:"https://github.com/nushell/nushell/issues/3354",target:"_blank",rel:"noopener noreferrer"},fe=t("reduce --numbered bug"),ge=t("ammkrn fixed a panic in the "),me={href:"https://github.com/nushell/nushell/issues/3382",target:"_blank",rel:"noopener noreferrer"},be=t("rustyline helper"),ke=t("Sciencentistguy fixed an "),we={href:"https://github.com/nushell/nushell/issues/3358",target:"_blank",rel:"noopener noreferrer"},xe=t("array index out of bounds error in nu_protocol::value::levenshtein_distance()"),ye=t("ccde177b5fb9b8c55078417b4c9fee removed "),ve={href:"https://github.com/nushell/nushell/issues/3349",target:"_blank",rel:"noopener noreferrer"},Ne=t("ichwh"),Te=t("LhKipp fixed an issue "),Ie={href:"https://github.com/nushell/nushell/issues/3344",target:"_blank",rel:"noopener noreferrer"},Le=t("in nu-env if "),We=e("code",null,"cd",-1),Be=t(" with shortcuts"),Ee=e("h3",{id:"extension",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#extension","aria-hidden":"true"},"#"),t(" Extension")],-1),Ve=t("fdncred fixed "),je={href:"https://github.com/nushell/vscode-nushell-lang/issues/32",target:"_blank",rel:"noopener noreferrer"},Ce=t("a bug in the syntax highlighting"),Se=e("h3",{id:"documentation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),t(" Documentation")],-1),qe=t("nalpine fixed "),Ae={href:"https://github.com/nushell/nushell.github.io/issues/126",target:"_blank",rel:"noopener noreferrer"},Ke=t("dead links"),ze=t("ChristopherBiscardi updated "),De={href:"https://github.com/nushell/nushell.github.io/issues/125",target:"_blank",rel:"noopener noreferrer"},Re=t("starship prompt integration"),Fe=t("ammkrn updated "),Ge={href:"https://github.com/nushell/nushell.github.io/issues/123",target:"_blank",rel:"noopener noreferrer"},He=t("ls -f -> ls -la"),Je=e("h3",{id:"nu-scripts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nu-scripts","aria-hidden":"true"},"#"),t(" Nu Scripts")],-1),Me=t("fdncred created "),Oe={href:"https://github.com/nushell/nu_scripts/issues/48",target:"_blank",rel:"noopener noreferrer"},Pe=t("table grouping experiment, update twin to support single user per row"),Qe=t(", "),Ue={href:"https://github.com/nushell/nu_scripts/issues/46",target:"_blank",rel:"noopener noreferrer"},Xe=t("twin weeknum guess"),Ye=t(", and a "),Ze={href:"https://github.com/nushell/nu_scripts/issues/44",target:"_blank",rel:"noopener noreferrer"},$e=t("prototype of TWiN automation script"),et=t("efx added "),tt={href:"https://github.com/nushell/nu_scripts/issues/47",target:"_blank",rel:"noopener noreferrer"},st=t("a one liner to parse aws s3 ls output"),nt=t("jonathandturner fixed "),ot={href:"https://github.com/nushell/nu_scripts/issues/45",target:"_blank",rel:"noopener noreferrer"},rt=t("TWiN range"),it=e("h1",{id:"looking-ahead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),t(" Looking ahead")],-1),lt=t("Coming soon after the 0.31 release, we'll be landing "),ht={href:"https://github.com/nushell/nushell/pull/3389",target:"_blank",rel:"noopener noreferrer"},at=t("some improvements"),dt=t(" to Nushell's syntax. These fixes will be breaking changes, but they're for a good reason. The simplification of the syntax will make Nushell both more consistent and more approachable for new users and experienced users alike."),ct=t("We're also continuing to improve the command implementations. If you'd like to help, you can join in by "),_t={href:"https://github.com/nushell/nushell/issues/3390",target:"_blank",rel:"noopener noreferrer"},ut=t("signing up here"),pt=t(".");function ft(gt,mt){const s=r("ExternalLinkIcon");return i(),l("div",null,[d,c,_,u,e("p",null,[p,e("a",f,[g,n(s)]),m,e("a",b,[k,n(s)]),w,x,y]),v,e("ul",null,[e("li",null,[e("a",N,[T,n(s)]),I]),e("li",null,[e("a",L,[W,n(s)]),B])]),E,V,e("ul",null,[e("li",null,[j,e("a",C,[S,q,A,n(s)])]),K,e("li",null,[z,e("a",D,[R,n(s)]),F,e("a",G,[H,n(s)]),J,e("a",M,[O,n(s)]),P,e("a",Q,[U,n(s)]),X,e("a",Y,[Z,n(s)]),$,e("a",ee,[te,n(s)])]),e("li",null,[se,e("a",ne,[oe,n(s)])]),e("li",null,[re,e("a",ie,[le,n(s)])]),e("li",null,[he,e("a",ae,[de,ce,_e,n(s)]),ue,e("a",pe,[fe,n(s)])]),e("li",null,[ge,e("a",me,[be,n(s)])]),e("li",null,[ke,e("a",we,[xe,n(s)])]),e("li",null,[ye,e("a",ve,[Ne,n(s)])]),e("li",null,[Te,e("a",Ie,[Le,We,Be,n(s)])])]),Ee,e("ul",null,[e("li",null,[Ve,e("a",je,[Ce,n(s)])])]),Se,e("ul",null,[e("li",null,[qe,e("a",Ae,[Ke,n(s)])]),e("li",null,[ze,e("a",De,[Re,n(s)])]),e("li",null,[Fe,e("a",Ge,[He,n(s)])])]),Je,e("ul",null,[e("li",null,[Me,e("a",Oe,[Pe,n(s)]),Qe,e("a",Ue,[Xe,n(s)]),Ye,e("a",Ze,[$e,n(s)])]),e("li",null,[et,e("a",tt,[st,n(s)])]),e("li",null,[nt,e("a",ot,[rt,n(s)])])]),it,e("p",null,[lt,e("a",ht,[at,n(s)]),dt]),e("p",null,[ct,e("a",_t,[ut,n(s)]),pt])])}var kt=o(a,[["render",ft],["__file","2021-05-11-nushell_0_31.html.vue"]]);export{kt as default};
