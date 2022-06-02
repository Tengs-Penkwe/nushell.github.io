import{_ as s,r,o as l,c as a,a as e,b as o,d as t}from"./app.6670dc1a.js";const i={},h=e("h1",{id:"nushell-0-41",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-41","aria-hidden":"true"},"#"),t(" Nushell 0.41")],-1),d=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),c=e("p",null,"Today, we're releasing 0.41 of Nu. This release is a bugfix release of 0.41.",-1),_=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),u=t("Nu 0.41 is available as "),p={href:"https://github.com/nushell/nushell/releases/tag/0.41.0",target:"_blank",rel:"noopener noreferrer"},f=t("pre-built binaries"),g=t(" or from "),b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},m=t("crates.io"),w=t(". If you have Rust installed you can install it using "),k=e("code",null,"cargo install nu",-1),y=t("."),x=e("p",null,[t("If you want all the goodies, you can install "),e("code",null,"cargo install nu --features=extra"),t(".")],-1),v=e("p",null,[t("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),e("code",null,"cargo install nu_plugin_<plugin name>"),t(".")],-1),N=e("h1",{id:"what-s-new",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-s-new","aria-hidden":"true"},"#"),t(" What's New")],-1),q=e("h2",{id:"features",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#features","aria-hidden":"true"},"#"),t(" Features")],-1),A={href:"https://github.com/nushell/nushell/pull/4175",target:"_blank",rel:"noopener noreferrer"},B=t("Add -l/--login flag for compat with other shells"),I=t(" (ahouts)"),E=e("h2",{id:"fixes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fixes","aria-hidden":"true"},"#"),t(" Fixes")],-1),T={href:"https://github.com/nushell/nushell/pull/4156",target:"_blank",rel:"noopener noreferrer"},V=e("code",null,"save --append",-1),j=t(" will now create a file if missing"),W=t(" (BraulioVM)"),C={href:"https://github.com/nushell/nushell/pull/4135",target:"_blank",rel:"noopener noreferrer"},F=t("Upgraded dependencies"),L=t(" (ahkrr)"),R={href:"https://github.com/nushell/nushell/pull/4152",target:"_blank",rel:"noopener noreferrer"},M=t("Corrected spelling in crate docs and code docs"),O=t(" (EdwardBetts)"),z={href:"https://github.com/nushell/nushell/pull/4155",target:"_blank",rel:"noopener noreferrer"},G=t("Fixed the markup in some of the crate docs"),P=t(" (tshepang)"),U={href:"https://github.com/nushell/nushell/pull/4157",target:"_blank",rel:"noopener noreferrer"},D=t("external arguments are now sanitized more"),H=t(" (BraulioVM)"),J={href:"https://github.com/nushell/nushell/pull/4173",target:"_blank",rel:"noopener noreferrer"},K=t("upx/strip has been removed after feedback from users"),Q=t(" (fdncred)"),S={href:"https://github.com/nushell/nushell/pull/4174",target:"_blank",rel:"noopener noreferrer"},X=t("Clipboard capability via arboard removed"),Y=t(" (jt)"),Z={href:"https://github.com/nushell/nushell/pull/4178",target:"_blank",rel:"noopener noreferrer"},$=t("Removed some unnecessary allocation"),ee=t(" (ahouts)"),te=e("h1",{id:"engine-q-progress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#engine-q-progress","aria-hidden":"true"},"#"),t(" Engine-q progress")],-1),ne=t("As engine-q matures, our energy continues to be directed towards it. Over "),oe={href:"https://github.com/nushell/engine-q/pulls?page=1&q=is%3Apr+is%3Aclosed",target:"_blank",rel:"noopener noreferrer"},se=t("80 PRs"),re=t(" have been merged into engine-q since the last Nushell release. As engine-q nears readiness for early adopters to begin using it, we've begun concentrating on closing the remaining gaps in functionality so that it can be used as a daily shell. Once ready, Nushell will have its core functionality replaced by engine-q and from there on we'll be using the new engine. We're planning to change the version number significantly to reflect the jump in features."),le=e("h1",{id:"looking-forward",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-forward","aria-hidden":"true"},"#"),t(" Looking forward")],-1),ae=t("As we enter the holidays, the focus of the Nushell effort continues to be on engine-q. There are still "),ie={href:"https://github.com/nushell/engine-q/issues/242",target:"_blank",rel:"noopener noreferrer"},he=t("many commands left to port"),de=t(" and more places to jump in. If you'd like to help, come join us on the "),ce={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},_e=t("discord"),ue=t(". We'd be happy to show you around.");function pe(fe,ge){const n=r("ExternalLinkIcon");return l(),a("div",null,[h,d,c,_,e("p",null,[u,e("a",p,[f,o(n)]),g,e("a",b,[m,o(n)]),w,k,y]),x,v,N,q,e("ul",null,[e("li",null,[e("a",A,[B,o(n)]),I])]),E,e("ul",null,[e("li",null,[e("a",T,[V,j,o(n)]),W]),e("li",null,[e("a",C,[F,o(n)]),L]),e("li",null,[e("a",R,[M,o(n)]),O]),e("li",null,[e("a",z,[G,o(n)]),P]),e("li",null,[e("a",U,[D,o(n)]),H]),e("li",null,[e("a",J,[K,o(n)]),Q]),e("li",null,[e("a",S,[X,o(n)]),Y]),e("li",null,[e("a",Z,[$,o(n)]),ee])]),te,e("p",null,[ne,e("a",oe,[se,o(n)]),re]),le,e("p",null,[ae,e("a",ie,[he,o(n)]),de,e("a",ce,[_e,o(n)]),ue])])}var me=s(i,[["render",pe],["__file","2021-12-07-nushell_0_41.html.vue"]]);export{me as default};
