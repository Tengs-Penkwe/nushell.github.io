(window.webpackJsonp=window.webpackJsonp||[]).push([[492],{1002:function(a,e,s){"use strict";s.r(e);var t=s(34),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"configuracion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuracion"}},[a._v("#")]),a._v(" Configuración")]),a._v(" "),s("p",[a._v("Nu tiene un número pequeño, pero creciente, de variables internas que puedes establecer cambios en su aspecto y funcionamiento. A continuación una lista de las variables actuales, sus tipos, y una descripción de cómo se utilizan:")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Variable")]),a._v(" "),s("th",[a._v("Tipo")]),a._v(" "),s("th",[a._v("Descripción")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("completion_mode")]),a._v(" "),s("td",[a._v('"list" o "circular"')]),a._v(" "),s("td",[a._v("el estilo de autocompletar a usar")])]),a._v(" "),s("tr",[s("td",[a._v("ctrlc_exit")]),a._v(" "),s("td",[a._v("booleano")]),a._v(" "),s("td",[a._v("salir o no de Nu después de presionar ctrl-c varias veces")])]),a._v(" "),s("tr",[s("td",[a._v("disable_table_indexes")]),a._v(" "),s("td",[a._v("booleano")]),a._v(" "),s("td",[a._v("elimina la columna de índice de la tabla")])]),a._v(" "),s("tr",[s("td",[a._v("edit_mode")]),a._v(" "),s("td",[a._v('"vi" o "emacs"')]),a._v(" "),s("td",[a._v('cambia edición de línea a modo "vi" o "emacs"')])]),a._v(" "),s("tr",[s("td",[a._v("env")]),a._v(" "),s("td",[a._v("fila")]),a._v(" "),s("td",[a._v("variables de entorno que serán pasadas a comandos externos")])]),a._v(" "),s("tr",[s("td",[a._v("header_align")]),a._v(" "),s("td",[a._v('"center", "right", u otro')]),a._v(" "),s("td",[a._v("alinea los encabezados de la tabla alineados al centro, a la derecha o a la izquierda")])]),a._v(" "),s("tr",[s("td",[a._v("key_timeout")]),a._v(" "),s("td",[a._v("entero")]),a._v(" "),s("td",[a._v("el tiempo de espera utilizado para cambiar entre los modos de edición")])]),a._v(" "),s("tr",[s("td",[a._v("nonzero_exit_errors")]),a._v(" "),s("td",[a._v("booleano")]),a._v(" "),s("td",[a._v("si imprimir errores para códigos de salida no-ceros para externos")])]),a._v(" "),s("tr",[s("td",[a._v("path")]),a._v(" "),s("td",[a._v("tabla de cadenas")]),a._v(" "),s("td",[a._v("PATH para usar en búsqueda de binarios")])]),a._v(" "),s("tr",[s("td",[a._v("startup")]),a._v(" "),s("td",[a._v("lista de cadenas")]),a._v(" "),s("td",[a._v("comandos, como "),s("code",[a._v("alias")]),a._v("es, para ejecutar cuando nushell arranca")])]),a._v(" "),s("tr",[s("td",[a._v("table_mode")]),a._v(" "),s("td",[a._v('"light" o otro')]),a._v(" "),s("td",[a._v("habilitar tablas livianas o normales")])])])]),a._v(" "),s("h2",{attrs:{id:"uso"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uso"}},[a._v("#")]),a._v(" Uso")]),a._v(" "),s("h3",{attrs:{id:"configuracion-de-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-de-variables"}},[a._v("#")]),a._v(" Configuración de variables")]),a._v(" "),s("p",[a._v("Para establecer una de estas variables, puedes usar "),s("code",[a._v("config set")]),a._v(". Por ejemplo:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('> config set edit_mode "vi"\n')])])]),s("h3",{attrs:{id:"estableciendo-una-variable-desde-la-tuberia"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#estableciendo-una-variable-desde-la-tuberia"}},[a._v("#")]),a._v(" Estableciendo una variable desde la tubería")]),a._v(" "),s("p",[a._v("Hay una manera adicional de establecer una variable, y es usar el contenido de la tubería como el valor deseado para la variable. Para esto usa la bandera "),s("code",[a._v("set-into")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('> echo "bar" | config set_into foo\n')])])]),s("p",[a._v("Esto es de utilidad cuando se trabaja con las variables "),s("code",[a._v("env")]),a._v(" y "),s("code",[a._v("path")]),a._v(".")]),a._v(" "),s("h3",{attrs:{id:"listado-de-todas-las-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#listado-de-todas-las-variables"}},[a._v("#")]),a._v(" Listado de todas las variables.")]),a._v(" "),s("p",[a._v("Ejecutando el comando "),s("code",[a._v("config")]),a._v(" sin argumentos mostrará una tabla de las preferencias de configuración actuales:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> config\n━━━━━━━━━━━┯━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━\n edit_mode │ env            │ path             │ table_mode\n───────────┼────────────────┼──────────────────┼────────────\n emacs     │ [table: 1 row] │ [table: 10 rows] │ normal\n━━━━━━━━━━━┷━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━\n")])])]),s("p",[a._v("Nota: si por el momento no has establecido variables de configuración, puede estar vacía.")]),a._v(" "),s("h3",{attrs:{id:"obteniendo-una-variable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#obteniendo-una-variable"}},[a._v("#")]),a._v(" Obteniendo una variable")]),a._v(" "),s("p",[a._v("Usando la bandera "),s("code",[a._v("get")]),a._v(", puedes conseguir el valor de una variable:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> config get edit_mode\n")])])]),s("h3",{attrs:{id:"eliminando-una-variable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eliminando-una-variable"}},[a._v("#")]),a._v(" Eliminando una variable")]),a._v(" "),s("p",[a._v("Para eliminar una variable de la configuración, usa la bandera "),s("code",[a._v("remove")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> config remove edit_mode\n")])])]),s("h3",{attrs:{id:"borrar-toda-la-configuracion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#borrar-toda-la-configuracion"}},[a._v("#")]),a._v(" Borrar toda la configuración")]),a._v(" "),s("p",[a._v("Si deseas borrar toda la configuración y empezar de cero, puedes usar la bandera "),s("code",[a._v("clear")]),a._v(". Por supuesto, tenga precaución con esto ya que una vez ejecutado el archivo de configuración también se eliminará.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> config clear\n")])])]),s("h3",{attrs:{id:"encontrar-donde-se-almacena-el-archivo-de-configuracion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encontrar-donde-se-almacena-el-archivo-de-configuracion"}},[a._v("#")]),a._v(" Encontrar dónde se almacena el archivo de configuración")]),a._v(" "),s("p",[a._v("El archivo de configuración se carga desde una ubicación predeterminada. Para encontrar esta ubicación en el sistema, puedes solicitarla usando la bandera "),s("code",[a._v("path")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("config path\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n <value>\n───────────────────────────────────────\n /home/nusheller/.config/nu/config.toml\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")])])]),s("h3",{attrs:{id:"cargando-la-configuracion-desde-un-archivo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cargando-la-configuracion-desde-un-archivo"}},[a._v("#")]),a._v(" Cargando la configuración desde un archivo")]),a._v(" "),s("p",[a._v("Es posible que desees cargar la configuración desde una ubicación distinta a la predeterminada. Para hacerlo, usa la bandera "),s("code",[a._v("load")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> config load myconfiguration.toml\n")])])]),s("h2",{attrs:{id:"configurando-nu-como-shell-de-inicio-de-sesion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configurando-nu-como-shell-de-inicio-de-sesion"}},[a._v("#")]),a._v(" Configurando Nu como shell de inicio de sesión")]),a._v(" "),s("p",[a._v("Para usar Nu como shell de inicio de sesión, necesitarás configurar las variables "),s("code",[a._v("path")]),a._v(" y "),s("code",[a._v("env")]),a._v(". Con estos, obtendrás suficiente soporte para ejecutar comandos externos como shell de inicio de sesión.")]),a._v(" "),s("p",[a._v("Antes de cambiarlo, ejecuta Nu dentro de otra shell, como Bash. Luego, obtén el entorno y PATH desde esa shell con los siguientes comandos:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> config set path $nu.path\n> config set env $nu.env\n")])])]),s("p",[s("code",[a._v("$nu.path")]),a._v(" y "),s("code",[a._v("$nu.env")]),a._v(" son valores que están prestablecidas a las variables actuales de entorno y PATH, respectivamente. Una vez que las estableces a la configuración, estarán disponibles cuando uses Nu como shell de inicio de sesión.")]),a._v(" "),s("p",[a._v("A continuación, en algunas distribuciones también deberás asegurarte de que Nu esté en la lista en "),s("code",[a._v("/etc/shells")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("❯ cat /etc/shells\n# /etc/shells: valid login shells\n/bin/sh\n/bin/dash\n/bin/bash\n/bin/rbash\n/usr/bin/screen\n/usr/bin/fish\n/home/jonathan/.cargo/bin/nu\n")])])]),s("p",[a._v("Con esto, deberías de poder hacer "),s("code",[a._v("chsh")]),a._v(" y establecer Nu como la shell de inicio de sesión. Luego de cerrar sesión, en el próximo inicio de sesión deberías de recibir un brillante mensaje de Nu.")]),a._v(" "),s("h2",{attrs:{id:"configuracion-del-prompt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-del-prompt"}},[a._v("#")]),a._v(" Configuración del prompt")]),a._v(" "),s("p",[a._v("Actualmente, la configuración del prompt es manejada instalando Nu con el soporte prompt proporcionado con "),s("a",{attrs:{href:"https://github.com/starship/starship",target:"_blank",rel:"noopener noreferrer"}},[a._v("starship"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nushell on 📙 master [$] is 📦 v0.5.1 via 🦀 v1.40.0-nightly\n❯\n")])])]),s("p",[a._v("Starship es un prompt divertido, colorido y sorprendentemente poderoso. Para configurarlo, sigue los pasos en su "),s("a",{attrs:{href:"https://starship.rs/config/",target:"_blank",rel:"noopener noreferrer"}},[a._v("manual de configuración"),s("OutboundLink")],1),a._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);