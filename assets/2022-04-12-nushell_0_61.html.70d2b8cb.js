import{_ as s,r as l,o as r,c as h,a as e,b as n,d as t,e as i}from"./app.6670dc1a.js";var _="/assets/0_61_help_menu.b2e9579f.png",a="/assets/0_61_completion_descriptions.932281e0.png";const c={},d=e("h1",{id:"nushell-0-61",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-61","aria-hidden":"true"},"#"),t(" Nushell 0.61")],-1),u=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),p=e("p",null,"Today, we're releasing version 0.61 of Nu. This release includes UI improvements, many bugfixes, improved glob support, and more.",-1),f=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),g=t("Nu 0.61 is available as "),m={href:"https://github.com/nushell/nushell/releases/tag/0.61.0",target:"_blank",rel:"noopener noreferrer"},b=t("pre-built binaries"),k=t(" or from "),w={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},v=t("crates.io"),y=t(". If you have Rust installed you can install it using "),x=e("code",null,"cargo install nu",-1),j=t("."),N=i('<p>If you want all the built-in goodies, you can install <code>cargo install nu --all-features</code>.</p><p>As part of this release, we also publish a set of optional plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="help-menu-elferherrera" tabindex="-1"><a class="header-anchor" href="#help-menu-elferherrera" aria-hidden="true">#</a> Help Menu (elferherrera)</h1><p><img src="'+_+'" alt="Help menu"></p><p>In 0.61, you can now use <code>&lt;ctrl+q&gt;</code> to ask a question/query in Nushell. Currently, this will search through the commands and show you commands that mention the word you type.</p><p>Tab lets you move between the available commands.</p><p>You can use up/down to pick the example you&#39;d like to use. Pressing enter will select the example and insert it into the input for you.</p><h1 id="completion-descriptions-elferherrera-fdncred-jt" tabindex="-1"><a class="header-anchor" href="#completion-descriptions-elferherrera-fdncred-jt" aria-hidden="true">#</a> Completion descriptions (elferherrera, fdncred, jt)</h1><p><img src="'+a+'" alt="Completion descriptions"></p><p>Completions now show you a description of the command you&#39;re completing, if it&#39;s available.</p><h1 id="introducing-env-nu-kubouch" tabindex="-1"><a class="header-anchor" href="#introducing-env-nu-kubouch" aria-hidden="true">#</a> Introducing &#39;env.nu&#39; (kubouch)</h1><p>Just as we added &#39;config.nu&#39; with 0.60, we&#39;re now adding a new additional startup file called &#39;env.nu&#39;. The job of this file is to set up the environment that you&#39;ll run Nushell in. As a result, you&#39;re able to set up important environment variables like <code>$env.NU_LIB_DIRS</code> before &#39;config.nu&#39; begins to run, let you take full advantage of the new library directories you&#39;ve configured.</p><h1 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h1>',13),I=e("code",null,"input",-1),A=t(" can now "),T={href:"https://github.com/nushell/nushell/pull/5017",target:"_blank",rel:"noopener noreferrer"},F=t("suppress output"),C=t(" (dev-msp)"),S={href:"https://github.com/nushell/nushell/pull/4956",target:"_blank",rel:"noopener noreferrer"},E=t("Termux/Android target support for new engine"),B=t(" (dscottboggs)"),L=e("code",null,"open",-1),P=t(" can now use "),R={href:"https://github.com/nushell/nushell/pull/5049",target:"_blank",rel:"noopener noreferrer"},z=e("code",null,"from ...",-1),D=t(" named custom commands"),U=t(" (neosam)"),V=t("New "),q={href:"https://github.com/nushell/nushell/pull/5054",target:"_blank",rel:"noopener noreferrer"},H=e("code",null,"sort",-1),$=t(" command for easier sorting"),J=t(" (jt)"),M=e("code",null,"date to-record",-1),O=t(" for "),W={href:"https://github.com/nushell/nushell/pull/5058",target:"_blank",rel:"noopener noreferrer"},G=t("working with structured dates"),X=t(" (jt)"),Y=t("New "),K={href:"https://github.com/nushell/nushell/pull/5061",target:"_blank",rel:"noopener noreferrer"},Q=t("starts-with operator"),Z=t(" (fdncred)"),ee=t("Can now create "),te={href:"https://github.com/nushell/nushell/pull/5085",target:"_blank",rel:"noopener noreferrer"},oe=t("generic menus for repl interactions"),ne=t(" (elferherrera)"),se=t("New "),le={href:"https://github.com/nushell/nushell/pull/5087",target:"_blank",rel:"noopener noreferrer"},re=e("code",null,"glob",-1),he=t(" command for fancier globbing"),ie=t(" (fdncred)"),_e={href:"https://github.com/nushell/nushell/pull/5111",target:"_blank",rel:"noopener noreferrer"},ae=t("Unary "),ce=e("code",null,"not",-1),de=t(" support"),ue=t(" (jt)"),pe=t("Startup and pre-prompt setup should now be "),fe={href:"https://github.com/nushell/nushell/pull/5115",target:"_blank",rel:"noopener noreferrer"},ge=t("significantly faster"),me=t(" (jt)"),be={href:"https://github.com/nushell/nushell/pull/5149",target:"_blank",rel:"noopener noreferrer"},ke=e("code",null,"0b[...]",-1),we=t(" support for binary literals"),ve=t(" (merkrafter)"),ye=e("h1",{id:"improvements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#improvements","aria-hidden":"true"},"#"),t(" Improvements")],-1),xe=e("li",null,"Parser improvements by uasi, jt, rgwood",-1),je=e("li",null,"Error improvements by jmoore34, jt, rgwood",-1),Ne=e("li",null,"Documentation updates by hustcer, vishalsodani, fdncred, futile, kubouch, stormasm, Hofer-Julian, herlon214, rgwood, michel-slm",-1),Ie=e("li",null,"General code cleanliness fixes by stormasm, bowlofeggs, rgwood, sholderbach, fdncred, herlon214, elferherrera, boyvanduuren, jt",-1),Ae=e("li",null,"Multiple improvements to known external commands (filaretov, jt)",-1),Te={href:"https://github.com/nushell/nushell/pull/5167",target:"_blank",rel:"noopener noreferrer"},Fe=t("Use recent miette"),Ce=t(" (zkat)"),Se={href:"https://github.com/nushell/nushell/pull/5153",target:"_blank",rel:"noopener noreferrer"},Ee=t("Improved logic to path expansion"),Be=t(" (strega-nil-ms)"),Le={href:"https://github.com/nushell/nushell/pull/5141",target:"_blank",rel:"noopener noreferrer"},Pe=e("code",null,"ls",-1),Re=t(" now outputs date in local time"),ze=t(" (fdncred)"),De={href:"https://github.com/nushell/nushell/pull/5137",target:"_blank",rel:"noopener noreferrer"},Ue=e("code",null,"$in",-1),Ve=t(" should now work in more places"),qe=t(" (jt)"),He={href:"https://github.com/nushell/nushell/pull/5136",target:"_blank",rel:"noopener noreferrer"},$e=e("code",null,"each",-1),Je=t(" now also pipes each item as input to the block"),Me=t(" (jt)"),Oe=t("Add ability to "),We={href:"https://github.com/nushell/nushell/pull/5133",target:"_blank",rel:"noopener noreferrer"},Ge=t("opt-in to normal strings in "),Xe=e("code",null,"str replace",-1),Ye=t(" (fdncred)"),Ke=e("code",null,"touch",-1),Qe=t(" now "),Ze={href:"https://github.com/nushell/nushell/pull/5119",target:"_blank",rel:"noopener noreferrer"},et=t("includes all common flags"),tt=t(" (rybertm)"),ot=e("code",null,"=~",-1),nt=t(" and "),st=e("code",null,"!~",-1),lt=t(" now "),rt={href:"https://github.com/nushell/nushell/pull/5117",target:"_blank",rel:"noopener noreferrer"},ht=t("use regex"),it=t(" (rgwood)"),_t=e("code",null,"describe",-1),at=t(" should now be "),ct={href:"https://github.com/nushell/nushell/pull/5116",target:"_blank",rel:"noopener noreferrer"},dt=t("more precise"),ut=t("completions now "),pt={href:"https://github.com/nushell/nushell/pull/5108",target:"_blank",rel:"noopener noreferrer"},ft=t("give priority to non-hidden folders"),gt=t(" (herlon214)"),mt={href:"https://github.com/nushell/nushell/pull/5105",target:"_blank",rel:"noopener noreferrer"},bt=t("plugins are now loaded for scripts and commands"),kt=t(" (jt)"),wt={href:"https://github.com/nushell/nushell/pull/5097",target:"_blank",rel:"noopener noreferrer"},vt=e("code",null,"input",-1),yt=t(" now trims the newline"),xt=t(" (rgwood)"),jt={href:"https://github.com/nushell/nushell/pull/5100",target:"_blank",rel:"noopener noreferrer"},Nt=t("regex "),It=e("code",null,"find",-1),At=t(" now works with records"),Tt=t(" (fdncred)"),Ft=t("Fixes to "),Ct={href:"https://github.com/nushell/nushell/pull/5095",target:"_blank",rel:"noopener noreferrer"},St=e("code",null,"format",-1),Et=t(" for non-basic datatypes"),Bt=t(" (rgwood)"),Lt=t("Added "),Pt={href:"https://github.com/nushell/nushell/pull/5090",target:"_blank",rel:"noopener noreferrer"},Rt=t("raw string support via backticks"),zt=t(" (jt)"),Dt=t("Switched to "),Ut={href:"https://github.com/nushell/nushell/pull/5001",target:"_blank",rel:"noopener noreferrer"},Vt=t("levenshtein distance sorting for completions"),qt=t(" (jt)"),Ht=t("Improvements to "),$t={href:"https://github.com/nushell/nushell/pull/5041",target:"_blank",rel:"noopener noreferrer"},Jt=t("line editor state handling"),Mt=t(" (sholderbach)"),Ot=t("Treat "),Wt={href:"https://github.com/nushell/nushell/pull/5026",target:"_blank",rel:"noopener noreferrer"},Gt=t("prompt indicators as commands"),Xt=t(" (elferherrera)"),Yt=t("Added "),Kt={href:"https://github.com/nushell/nushell/pull/5040",target:"_blank",rel:"noopener noreferrer"},Qt=t("record, list, and table to signature types"),Zt=t(" (kubouch)"),eo=t("Improvements to "),to={href:"https://github.com/nushell/nushell/pull/5016",target:"_blank",rel:"noopener noreferrer"},oo=t("default git completions"),no=t(" (naufraghi)"),so=t("Prompts "),lo={href:"https://github.com/nushell/nushell/pull/5052",target:"_blank",rel:"noopener noreferrer"},ro=t("can now be simple strings"),ho=t(" (jt)"),io=t("Sets "),_o={href:"https://github.com/nushell/nushell/pull/5084",target:"_blank",rel:"noopener noreferrer"},ao=t("LAST_EXIT_CODE on parse errors"),co=t(" (rgwood)"),uo=t("Passed "),po={href:"https://github.com/nushell/nushell/pull/5009",target:"_blank",rel:"noopener noreferrer"},fo=t("more metadata through filter commands"),go=t(" (rrcwang)"),mo=e("code",null,"last",-1),bo=t(" now returns a "),ko={href:"https://github.com/nushell/nushell/pull/5060",target:"_blank",rel:"noopener noreferrer"},wo=t("simple value for single items"),vo=t(" (jt)"),yo=t("Fixed "),xo={href:"https://github.com/nushell/nushell/pull/5003",target:"_blank",rel:"noopener noreferrer"},jo=t("loops not terminating with ctrl-c"),No=t(" (jt)"),Io=t("Added "),Ao={href:"https://github.com/nushell/nushell/pull/4986",target:"_blank",rel:"noopener noreferrer"},To=t("bounded channels for backpressure"),Fo=t(" (b333z)"),Co=t("Added "),So={href:"https://github.com/nushell/nushell/pull/4985",target:"_blank",rel:"noopener noreferrer"},Eo=t("streaming support to "),Bo=e("code",null,"save",-1),Lo=t(" (b333z)"),Po={href:"https://github.com/nushell/nushell/pull/4984",target:"_blank",rel:"noopener noreferrer"},Ro=t("Support for passing binary data into run-external"),zo=t(" (b333z)"),Do={href:"https://github.com/nushell/nushell/pull/4968",target:"_blank",rel:"noopener noreferrer"},Uo=t("Fix for alias imports"),Vo=t(" (filaretov, jt)"),qo={href:"https://github.com/nushell/nushell/pull/4983",target:"_blank",rel:"noopener noreferrer"},Ho=t("Fix for "),$o=e("code",null,"ls",-1),Jo=t(" when file is a socket on macOS"),Mo=t(" (fdncred)"),Oo={href:"https://github.com/nushell/nushell/pull/4974",target:"_blank",rel:"noopener noreferrer"},Wo=t("Better tilde expansion"),Go=t(" (filaretov)"),Xo=t("Added "),Yo={href:"https://github.com/nushell/nushell/pull/4978",target:"_blank",rel:"noopener noreferrer"},Ko=t("keywords to help messages"),Qo=t(" (kubouch)"),Zo=t("Removed "),en={href:"https://github.com/nushell/nushell/pull/4979",target:"_blank",rel:"noopener noreferrer"},tn=t("is_private from "),on=e("code",null,"$nu.scope.commands",-1),nn=t(" (kubouch)"),sn={href:"https://github.com/nushell/nushell/pull/4959",target:"_blank",rel:"noopener noreferrer"},ln=t("Fix for "),rn=e("code",null,"path join",-1),hn=t(" on streams"),_n=t(" (jt)"),an={href:"https://github.com/nushell/nushell/pull/4960",target:"_blank",rel:"noopener noreferrer"},cn=t("Fixes to environment defaults"),dn=t(" (jt)"),un={href:"https://github.com/nushell/nushell/pull/4964",target:"_blank",rel:"noopener noreferrer"},pn=t("Adding escapes to "),fn=e("code",null,"to nuon",-1),gn=t(" (jt)"),mn=t("Improvements to the "),bn={href:"https://github.com/nushell/nushell/pull/4951",target:"_blank",rel:"noopener noreferrer"},kn=e("code",null,"reject",-1),wn=t(" command"),vn=t(" (jt)"),yn=t("Fix to the "),xn={href:"https://github.com/nushell/nushell/pull/4947",target:"_blank",rel:"noopener noreferrer"},jn=t("precedence parser"),Nn=t(" (jt)"),In=t("Calling out through "),An=e("code",null,"cmd.exe",-1),Tn=t(),Fn={href:"https://github.com/nushell/nushell/pull/4903",target:"_blank",rel:"noopener noreferrer"},Cn=t("no longer uses AutoRun"),Sn=t(" (LebsterFace)"),En=e("h1",{id:"breaking-changes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#breaking-changes","aria-hidden":"true"},"#"),t(" Breaking changes")],-1),Bn={href:"https://github.com/nushell/nushell/pull/5120",target:"_blank",rel:"noopener noreferrer"},Ln=e("code",null,"str find-replace",-1),Pn=t(" is now "),Rn=e("code",null,"str replace",-1),zn={href:"https://github.com/nushell/nushell/pull/5123",target:"_blank",rel:"noopener noreferrer"},Dn=e("code",null,"keep",-1),Un=t(" is now "),Vn=e("code",null,"take",-1),qn=e("h1",{id:"looking-ahead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),t(" Looking ahead")],-1),Hn=e("p",null,"The 0.61 release, despite slowing down a little to recoup from the 0.60 release, is one of our largest releases. We averaged over 7 PRs/day over the last three weeks, as many new people joined on and more took an interest in Nushell.",-1),$n=e("p",null,"Areas of upcoming focus will be on improving dataframe support, adding IDE support, and exploring new ways of working with Nushell.",-1);function Jn(Mn,On){const o=l("ExternalLinkIcon");return r(),h("div",null,[d,u,p,f,e("p",null,[g,e("a",m,[b,n(o)]),k,e("a",w,[v,n(o)]),y,x,j]),N,e("ul",null,[e("li",null,[I,A,e("a",T,[F,n(o)]),C]),e("li",null,[e("a",S,[E,n(o)]),B]),e("li",null,[L,P,e("a",R,[z,D,n(o)]),U]),e("li",null,[V,e("a",q,[H,$,n(o)]),J]),e("li",null,[M,O,e("a",W,[G,n(o)]),X]),e("li",null,[Y,e("a",K,[Q,n(o)]),Z]),e("li",null,[ee,e("a",te,[oe,n(o)]),ne]),e("li",null,[se,e("a",le,[re,he,n(o)]),ie]),e("li",null,[e("a",_e,[ae,ce,de,n(o)]),ue]),e("li",null,[pe,e("a",fe,[ge,n(o)]),me]),e("li",null,[e("a",be,[ke,we,n(o)]),ve])]),ye,e("ul",null,[xe,je,Ne,Ie,Ae,e("li",null,[e("a",Te,[Fe,n(o)]),Ce]),e("li",null,[e("a",Se,[Ee,n(o)]),Be]),e("li",null,[e("a",Le,[Pe,Re,n(o)]),ze]),e("li",null,[e("a",De,[Ue,Ve,n(o)]),qe]),e("li",null,[e("a",He,[$e,Je,n(o)]),Me]),e("li",null,[Oe,e("a",We,[Ge,Xe,n(o)]),Ye]),e("li",null,[Ke,Qe,e("a",Ze,[et,n(o)]),tt]),e("li",null,[ot,nt,st,lt,e("a",rt,[ht,n(o)]),it]),e("li",null,[_t,at,e("a",ct,[dt,n(o)])]),e("li",null,[ut,e("a",pt,[ft,n(o)]),gt]),e("li",null,[e("a",mt,[bt,n(o)]),kt]),e("li",null,[e("a",wt,[vt,yt,n(o)]),xt]),e("li",null,[e("a",jt,[Nt,It,At,n(o)]),Tt]),e("li",null,[Ft,e("a",Ct,[St,Et,n(o)]),Bt]),e("li",null,[Lt,e("a",Pt,[Rt,n(o)]),zt]),e("li",null,[Dt,e("a",Ut,[Vt,n(o)]),qt]),e("li",null,[Ht,e("a",$t,[Jt,n(o)]),Mt]),e("li",null,[Ot,e("a",Wt,[Gt,n(o)]),Xt]),e("li",null,[Yt,e("a",Kt,[Qt,n(o)]),Zt]),e("li",null,[eo,e("a",to,[oo,n(o)]),no]),e("li",null,[so,e("a",lo,[ro,n(o)]),ho]),e("li",null,[io,e("a",_o,[ao,n(o)]),co]),e("li",null,[uo,e("a",po,[fo,n(o)]),go]),e("li",null,[mo,bo,e("a",ko,[wo,n(o)]),vo]),e("li",null,[yo,e("a",xo,[jo,n(o)]),No]),e("li",null,[Io,e("a",Ao,[To,n(o)]),Fo]),e("li",null,[Co,e("a",So,[Eo,Bo,n(o)]),Lo]),e("li",null,[e("a",Po,[Ro,n(o)]),zo]),e("li",null,[e("a",Do,[Uo,n(o)]),Vo]),e("li",null,[e("a",qo,[Ho,$o,Jo,n(o)]),Mo]),e("li",null,[e("a",Oo,[Wo,n(o)]),Go]),e("li",null,[Xo,e("a",Yo,[Ko,n(o)]),Qo]),e("li",null,[Zo,e("a",en,[tn,on,n(o)]),nn]),e("li",null,[e("a",sn,[ln,rn,hn,n(o)]),_n]),e("li",null,[e("a",an,[cn,n(o)]),dn]),e("li",null,[e("a",un,[pn,fn,n(o)]),gn]),e("li",null,[mn,e("a",bn,[kn,wn,n(o)]),vn]),e("li",null,[yn,e("a",xn,[jn,n(o)]),Nn]),e("li",null,[In,An,Tn,e("a",Fn,[Cn,n(o)]),Sn])]),En,e("ul",null,[e("li",null,[e("a",Bn,[Ln,Pn,Rn,n(o)])]),e("li",null,[e("a",zn,[Dn,Un,Vn,n(o)])])]),qn,Hn,$n])}var Gn=s(c,[["render",Jn],["__file","2022-04-12-nushell_0_61.html.vue"]]);export{Gn as default};
