(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{1005:function(e,t,n){"use strict";n.r(t);var r=n(34),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"konfiguration-von-drittanbieter-prompts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#konfiguration-von-drittanbieter-prompts"}},[e._v("#")]),e._v(" Konfiguration von Drittanbieter-Prompts")]),e._v(" "),n("h2",{attrs:{id:"nerdfonts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nerdfonts"}},[e._v("#")]),e._v(" nerdfonts")]),e._v(" "),n("p",[e._v("nerdfonts sind nicht zwangsweise notwendig, machen aber die Darstellung viel besser.\nSie enthalten unter anderem Symbole für Betriebssysteme oder den Git-Status und graphische Formen für einen ansprechenden Prompt.")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.nerdfonts.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webseite"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Repository"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"oh-my-posh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-posh"}},[e._v("#")]),e._v(" oh-my-posh")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://ohmyposh.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webseite"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/JanDeDobbeleer/oh-my-posh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Repository"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Wenn "),n("a",{attrs:{href:"https://ohmyposh.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("oh-my-posh"),n("OutboundLink")],1),e._v(" verwendet werden soll, kann dies in wenigen Schritten für Nushell erreicht werden. Die Integration in Nushell funktioniert sehr gut. Die folgenden Schritte werden dazu benötigt:")]),e._v(" "),n("ol",[n("li",[e._v("oh-my-posh installieren und die Farbschemata herunterladen entsprechend dieser "),n("a",{attrs:{href:"https://ohmyposh.dev/docs/linux#installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Anleitung"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Herunterladen und installieren einer "),n("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts",target:"_blank",rel:"noopener noreferrer"}},[e._v("nerd font"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("li",[e._v("Die Umgebungsvariable "),n("code",[e._v("PROMPT_COMMAND")]),e._v(" durch hinzufügen der folgenden Zeile in "),n("code",[e._v("~/.config/nushell/config.nu")]),e._v(" setzen. Den Style "),n("code",[e._v("M365Princess.omp.json")]),e._v(" kann man entsprechend der "),n("a",{attrs:{href:"https://ohmyposh.dev/docs/themes",target:"_blank",rel:"noopener noreferrer"}},[e._v("Demo"),n("OutboundLink")],1),e._v(" beliebig ändern .")])]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" let-env PROMPT_COMMAND "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" oh-my-posh --config ~/.poshthemes/M365Princess.omp.json "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),n("h2",{attrs:{id:"starship"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#starship"}},[e._v("#")]),e._v(" Starship")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://starship.rs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Website"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/starship/starship",target:"_blank",rel:"noopener noreferrer"}},[e._v("Repository"),n("OutboundLink")],1)]),e._v(" "),n("ol",[n("li",[e._v("Den obigen Links folgen und starship installieren.")]),e._v(" "),n("li",[e._v("nerdfonts entsprechend persönlicher Präferenzen installieren.")]),e._v(" "),n("li",[e._v("Die "),n("code",[e._v("STARSHIP_SHELL")]),e._v(" Umgebungsvariable auf "),n("code",[e._v("nu")]),e._v(" setzen, indem der folgende Befehl ausgeführt wird: "),n("code",[e._v('let-env STARSHIP_SHELL = "nu"')])]),e._v(" "),n("li",[e._v("Wenn die standardmäßige Uhr mit Zeit und Datum auf der rechten Seite dargestellt werden soll, sollte der folgende Befehl ausgeführt werden: "),n("code",[e._v("hide PROMPT_COMMAND_RIGHT")])]),e._v(" "),n("li",[e._v("Wenn der standardmäßige Indikator verwendet werden soll, kann der folgende Befehl ausgeführt werden: "),n("code",[e._v('let-env PROMPT_INDICATOR = " "')])]),e._v(" "),n("li",[e._v("starship kann als Prompt auf der linken Seite mit dem folgenden Befehl festgelegt werden: "),n("code",[e._v("let-env PROMPT_COMMAND = { starship prompt --cmd-duration $env.CMD_DURATION_MS $'--status=($env.LAST_EXIT_CODE)' | str trim }")]),e._v(". Ein Hinweis: Unter Umständen muss "),n("code",[e._v("str trim")]),e._v(" in der Nushell-Prompt nicht verwendet werden, wenn starship's standardmäßig aktive Einstellung für neue Zeilen in der "),n("code",[e._v("starship.toml")]),e._v(" mittels "),n("code",[e._v("add_newline = false")]),e._v(" deaktiviert wurde. Es gibt Berichte, dass dies teilweise nicht gut im Zusammenspiel mit Nushell-Prompts funktioniert. Wir arbeiten noch daran!")]),e._v(" "),n("li",[e._v("Da Nushell Prompts auf der rechten Seite unterstützt, kann auch mit starship's Möglichkeit einer solchen Prompt experimentiert werden. Die rechte Prompt in Nushell zu setzen funktioniert identisch, wie das Setzen der Linken. Es muss lediglich "),n("code",[e._v("PROMPT_COMMAND_RIGHT")]),e._v(" gesetzt werden.")])]),e._v(" "),n("h2",{attrs:{id:"purs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#purs"}},[e._v("#")]),e._v(" Purs")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/xcambar/purs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Repository"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);