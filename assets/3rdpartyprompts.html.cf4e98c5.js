import{_ as o,r as i,o as a,c as d,a as e,b as r,d as n,e as s}from"./app.6670dc1a.js";const h={},l=e("h1",{id:"konfiguration-von-drittanbieter-prompts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#konfiguration-von-drittanbieter-prompts","aria-hidden":"true"},"#"),n(" Konfiguration von Drittanbieter-Prompts")],-1),c=e("h2",{id:"nerdfonts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nerdfonts","aria-hidden":"true"},"#"),n(" nerdfonts")],-1),_=e("p",null,"nerdfonts sind nicht zwangsweise notwendig, machen aber die Darstellung viel besser. Sie enthalten unter anderem Symbole f\xFCr Betriebssysteme oder den Git-Status und graphische Formen f\xFCr einen ansprechenden Prompt.",-1),p={href:"https://www.nerdfonts.com",target:"_blank",rel:"noopener noreferrer"},u=n("Webseite"),f={href:"https://github.com/ryanoasis/nerd-fonts",target:"_blank",rel:"noopener noreferrer"},m=n("Repository"),g=e("h2",{id:"oh-my-posh",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#oh-my-posh","aria-hidden":"true"},"#"),n(" oh-my-posh")],-1),b={href:"https://ohmyposh.dev/",target:"_blank",rel:"noopener noreferrer"},k=n("Webseite"),w={href:"https://github.com/JanDeDobbeleer/oh-my-posh",target:"_blank",rel:"noopener noreferrer"},v=n("Repository"),P=n("Wenn "),D={href:"https://ohmyposh.dev/",target:"_blank",rel:"noopener noreferrer"},y=n("oh-my-posh"),M=n(" verwendet werden soll, kann dies in wenigen Schritten f\xFCr Nushell erreicht werden. Die Integration in Nushell funktioniert sehr gut. Die folgenden Schritte werden dazu ben\xF6tigt:"),S=n("oh-my-posh installieren und die Farbschemata herunterladen entsprechend dieser "),N={href:"https://ohmyposh.dev/docs/linux#installation",target:"_blank",rel:"noopener noreferrer"},R=n("Anleitung"),x=n("Herunterladen und installieren einer "),T={href:"https://github.com/ryanoasis/nerd-fonts",target:"_blank",rel:"noopener noreferrer"},O=n("nerd font"),I=n("."),z=n("Die Umgebungsvariable "),A=e("code",null,"PROMPT_COMMAND",-1),E=n(" durch hinzuf\xFCgen der folgenden Zeile in "),B=e("code",null,"~/.config/nushell/config.nu",-1),C=n(" setzen. Den Style "),L=e("code",null,"M365Princess.omp.json",-1),H=n(" kann man entsprechend der "),W={href:"https://ohmyposh.dev/docs/themes",target:"_blank",rel:"noopener noreferrer"},U=n("Demo"),q=n(" beliebig \xE4ndern ."),V=s(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env PROMPT_COMMAND <span class="token operator">=</span> <span class="token punctuation">{</span> oh-my-posh --config ~/.poshthemes/M365Princess.omp.json <span class="token punctuation">}</span>
</code></pre></div><h2 id="starship" tabindex="-1"><a class="header-anchor" href="#starship" aria-hidden="true">#</a> Starship</h2>`,2),Z={href:"https://starship.rs/",target:"_blank",rel:"noopener noreferrer"},G=n("Website"),$={href:"https://github.com/starship/starship",target:"_blank",rel:"noopener noreferrer"},j=n("Repository"),F=s('<ol><li>Den obigen Links folgen und starship installieren.</li><li>nerdfonts entsprechend pers\xF6nlicher Pr\xE4ferenzen installieren.</li><li>Die <code>STARSHIP_SHELL</code> Umgebungsvariable auf <code>nu</code> setzen, indem der folgende Befehl ausgef\xFChrt wird: <code>let-env STARSHIP_SHELL = &quot;nu&quot;</code></li><li>Wenn die standardm\xE4\xDFige Uhr mit Zeit und Datum auf der rechten Seite dargestellt werden soll, sollte der folgende Befehl ausgef\xFChrt werden: <code>hide PROMPT_COMMAND_RIGHT</code></li><li>Wenn der standardm\xE4\xDFige Indikator verwendet werden soll, kann der folgende Befehl ausgef\xFChrt werden: <code>let-env PROMPT_INDICATOR = &quot; &quot;</code></li><li>starship kann als Prompt auf der linken Seite mit dem folgenden Befehl festgelegt werden: <code>let-env PROMPT_COMMAND = { starship prompt --cmd-duration $env.CMD_DURATION_MS $&#39;--status=($env.LAST_EXIT_CODE)&#39; | str trim }</code>. Ein Hinweis: Unter Umst\xE4nden muss <code>str trim</code> in der Nushell-Prompt nicht verwendet werden, wenn starship&#39;s standardm\xE4\xDFig aktive Einstellung f\xFCr neue Zeilen in der <code>starship.toml</code> mittels <code>add_newline = false</code> deaktiviert wurde. Es gibt Berichte, dass dies teilweise nicht gut im Zusammenspiel mit Nushell-Prompts funktioniert. Wir arbeiten noch daran!</li><li>Da Nushell Prompts auf der rechten Seite unterst\xFCtzt, kann auch mit starship&#39;s M\xF6glichkeit einer solchen Prompt experimentiert werden. Die rechte Prompt in Nushell zu setzen funktioniert identisch, wie das Setzen der Linken. Es muss lediglich <code>PROMPT_COMMAND_RIGHT</code> gesetzt werden.</li></ol><h2 id="purs" tabindex="-1"><a class="header-anchor" href="#purs" aria-hidden="true">#</a> Purs</h2>',2),J={href:"https://github.com/xcambar/purs",target:"_blank",rel:"noopener noreferrer"},K=n("Repository");function X(Q,Y){const t=i("ExternalLinkIcon");return a(),d("div",null,[l,c,_,e("p",null,[e("a",p,[u,r(t)])]),e("p",null,[e("a",f,[m,r(t)])]),g,e("p",null,[e("a",b,[k,r(t)])]),e("p",null,[e("a",w,[v,r(t)])]),e("p",null,[P,e("a",D,[y,r(t)]),M]),e("ol",null,[e("li",null,[S,e("a",N,[R,r(t)])]),e("li",null,[x,e("a",T,[O,r(t)]),I]),e("li",null,[z,A,E,B,C,L,H,e("a",W,[U,r(t)]),q])]),V,e("p",null,[e("a",Z,[G,r(t)])]),e("p",null,[e("a",$,[j,r(t)])]),F,e("p",null,[e("a",J,[K,r(t)])])])}var ne=o(h,[["render",X],["__file","3rdpartyprompts.html.vue"]]);export{ne as default};
