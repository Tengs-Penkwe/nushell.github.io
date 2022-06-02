import{_ as t,r,o as i,c,a,b as o,d as e,e as n}from"./app.6670dc1a.js";const l={},d=a("h1",{id:"instalando-nu",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#instalando-nu","aria-hidden":"true"},"#"),e(" Instalando Nu")],-1),p=e("Atualmente, as melhores maneiras de instalar o Nu s\xE3o a partir do "),u={href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"},h=e("crates.io"),m=e(", fazer o download dos bin\xE1rios da nossa "),g={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},b=e("p\xE1gina de releases"),f=e(", fazer o build a partir dos fontes ou baixar um container pronto com o Docker."),_=a("h2",{id:"binarios",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#binarios","aria-hidden":"true"},"#"),e(" Bin\xE1rios")],-1),v=e("Voc\xEA pode baixar o Nu da "),k={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},x=e("p\xE1gina de releases"),q=e(". Alternativamente, se voc\xEA usa o "),N={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},z=e("Homebrew"),w=e(" para macOS, pode instalar o bin\xE1rio executando o comando "),y=a("code",null,"brew install nushell",-1),A=e("."),R=a("h2",{id:"preparando",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#preparando","aria-hidden":"true"},"#"),e(" Preparando")],-1),V=a("p",null,"Antes de instalar o Nu, precisamos nos certificar de que nosso sistema tem os requisitos necess\xE1rios. Atualmente, isso significa ter certeza de que temos tanto o conjunto de ferramentas do Rust como as depend\xEAncias locais instaladas.",-1),C=a("h3",{id:"instalando-o-rust",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#instalando-o-rust","aria-hidden":"true"},"#"),e(" Instalando o Rust")],-1),P=e("Se ainda n\xE3o tivermos o Rust instalado no sistema, a melhor maneira de instalar \xE9 via "),S={href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"},I=e("rustup"),O=e(". Rustup \xE9 uma maneira de gerenciar instala\xE7\xF5es, inclusive de vers\xF5es diferentes de Rust."),H=n(`<p>O Nu atualmente requer a vers\xE3o <strong>nightly</strong> do Rust. Quando voc\xEA abrir o &quot;rustup&quot; pela primeira vez, ele vai perguntar qual vers\xE3o do Rust voc\xEA quer instalar:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Current installation options:

   default <span class="token function">host</span> triple: x86_64-unknown-linux-gnu
     default toolchain: stable
  modify <span class="token environment constant">PATH</span> variable: <span class="token function">yes</span>

<span class="token number">1</span><span class="token punctuation">)</span> Proceed with installation <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
<span class="token number">2</span><span class="token punctuation">)</span> Customize installation
<span class="token number">3</span><span class="token punctuation">)</span> Cancel installation
</code></pre></div><p>Selecione a op\xE7\xE3o #2 para customizar a instala\xE7\xE3o.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Default <span class="token function">host</span> triple?
</code></pre></div><p>Aperte enter aqui para selecionar o default.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Default toolchain? <span class="token punctuation">(</span>stable/beta/nightly/none<span class="token punctuation">)</span>
</code></pre></div><p>Certifique-se de digitar &quot;nightly&quot; aqui e pressionar enter. Isso vai levar \xE0 configura\xE7\xE3o seguinte:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Modify <span class="token environment constant">PATH</span> variable? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>
</code></pre></div><p>Voc\xEA pode opcionalmente atualizar o seu <em>path</em>. Normalmente \xE9 uma boa ideia, pois torna os passos seguintes mais f\xE1ceis.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Current installation options:

   default <span class="token function">host</span> triple: x86_64-unknown-linux-gnu
     default toolchain: nightly
  modify <span class="token environment constant">PATH</span> variable: <span class="token function">yes</span>

<span class="token number">1</span><span class="token punctuation">)</span> Proceed with installation <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
<span class="token number">2</span><span class="token punctuation">)</span> Customize installation
<span class="token number">3</span><span class="token punctuation">)</span> Cancel installation
</code></pre></div><p>Voc\xEA pode ver que o toolchain agora mudou para a vers\xE3o nightly. Se isso parece um pouco arriscado, n\xE3o se preocupe. O compilador do Rust passa por uma bateria completa de testes. O compilador nightly \xE9 praticamente t\xE3o confi\xE1vel quanto a vers\xE3o est\xE1vel.</p><p>Quando estiver pronto, pressione 1 e enter. Depois desse ponto, podemos seguir as instru\xE7\xF5es que o &quot;rustup&quot; nos der e teremos um compilador Rust funcionando no nosso sistema.</p><p>Se voc\xEA preferir n\xE3o instalar o Rust via &quot;rustup&quot;, voc\xEA pode tamb\xE9m instalar por outros m\xE9todos (por exemplo, a partir de um pacote em uma distribui\xE7\xE3o Linux). Apenas se certifique de instalar uma vers\xE3o nightly recente.</p><h2 id="dependencias" tabindex="-1"><a class="header-anchor" href="#dependencias" aria-hidden="true">#</a> Depend\xEAncias</h2><h3 id="debian-ubuntu" tabindex="-1"><a class="header-anchor" href="#debian-ubuntu" aria-hidden="true">#</a> Debian/Ubuntu</h3><p>Voc\xEA vai precisar instalar os pacotes &quot;pkg-config&quot; e &quot;libssl-dev&quot;:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> pkg-config libssl-dev
</code></pre></div><p>Usu\xE1rios Linux que quiserem usar as funcionalidades opcionais <code>rawkey</code> ou <code>clipboard</code> precisar\xE3o instalar os pacotes &quot;libx11-dev&quot; and &quot;libxcb-composite0-dev&quot;:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> libxcb-composite0-dev libx11-dev
</code></pre></div><h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macOS</h3>`,20),D=e("Ao usar o "),j={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},B=e("Homebrew"),L=e(', voc\xEA precisar\xE1 instalar o "openssl" e o "cmake" usando:'),T=a("div",{class:"language-bash ext-sh"},[a("pre",{class:"language-bash"},[a("code",null,[e("brew "),a("span",{class:"token function"},"install"),e(` openssl cmake
`)])])],-1),E={id:"instalando-a-partir-do-crates-io",tabindex:"-1"},Q=a("a",{class:"header-anchor",href:"#instalando-a-partir-do-crates-io","aria-hidden":"true"},"#",-1),U=e(" Instalando a partir do "),G={href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"},M=e("crates.io"),$=n(`<p>Quando tivermos todas as depend\xEAncias de que o Nu precisa, podemos instal\xE1-lo usando o comando <code>cargo</code>, que vem junto com o compilador Rust.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> cargo <span class="token function">install</span> nu
</code></pre></div><p>Pronto! A ferramenta cargo far\xE1 o download do Nu e das depend\xEAncias do fonte, o build e a instala\xE7\xE3o no caminho bin do cargo, de forma que possamos rod\xE1-lo.</p><p>Se quiser instalar todas as funcionalidades, inclusive algumas opcionais divertidas, voc\xEA pode usar:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> cargo <span class="token function">install</span> nu --features<span class="token operator">=</span>stable
</code></pre></div><p>Para esse comando funcionar, certifique-se de ter todas as depend\xEAncias (mostradas acima) instaladas no seu sistema.</p><p>Uma vez instalado, podemos rodar o Nu usando o comando <code>nu</code>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ nu
/home/jonathan/Source<span class="token operator">&gt;</span>
</code></pre></div><h2 id="fazendo-o-build-a-partir-dos-fontes" tabindex="-1"><a class="header-anchor" href="#fazendo-o-build-a-partir-dos-fontes" aria-hidden="true">#</a> Fazendo o Build a partir dos fontes</h2><p>Tamb\xE9m podemos fazer o build do c\xF3digo fonte diretamente do GitHub. Isso nos d\xE1 acesso imediato \xE0s \xFAltimas funcionalidades e corre\xE7\xF5es do Nu.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> clone https://github.com/nushell/nushell.git
</code></pre></div><p>O Git vai clonar o reposit\xF3rio principal do nushell e da\xED podemos fazer o build e rodar o Nu:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> nushell
nushell<span class="token operator">&gt;</span> cargo build --workspace --features<span class="token operator">=</span>stable <span class="token operator">&amp;&amp;</span> cargo run --features<span class="token operator">=</span>stable
</code></pre></div><p>Voc\xEA tamb\xE9m pode fazer o build e rodar o Nu em modo release:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>nushell<span class="token operator">&gt;</span> cargo build --release --workspace --features<span class="token operator">=</span>stable <span class="token operator">&amp;&amp;</span> cargo run --release --features<span class="token operator">=</span>stable
</code></pre></div><p>Pessoas mais acostumadas com Rust podem se perguntar por que fazemos tanto o &quot;build&quot; como o &quot;run&quot; se o &quot;run&quot; j\xE1 faz o build por padr\xE3o. Isso serve para contornar uma falha da nova op\xE7\xE3o <code>default-run</code> no Cargo e assegurar que ser\xE1 feito o build de todos os plugins, embora possa n\xE3o ser necess\xE1rio no futuro.</p><h2 id="configurando-como-login-shell" tabindex="-1"><a class="header-anchor" href="#configurando-como-login-shell" aria-hidden="true">#</a> Configurando como login shell</h2><p><strong>!!! Nushell ainda est\xE1 em desenvovlimento e pode n\xE3o estar est\xE1vel para uso di\xE1rio. !!!</strong></p>`,18),F=e("Voc\xEA pode definir o seu login shell usando o comando "),J={href:"https://linux.die.net/man/1/chsh",target:"_blank",rel:"noopener noreferrer"},K=a("code",null,"chsh",-1),W=e("."),X=n(`<p>Algumas distribui\xE7\xF5es Linux possuem uma lista de shells v\xE1lidos em <code>/etc/shells</code> e n\xE3o permitir\xE3o modificar o shell at\xE9 que o Nu esteja nessa lista branca. Voc\xEA pode ver um erro similar ao mostrado abaixo se n\xE3o tiver atualizado seu arquivo <code>shells</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>chsh: /home/username/.cargo/bin/nu is an invalid shell
</code></pre></div><p>Voc\xEA pode adicionar o Nu \xE0 lista de shell permitidos acrescentando o bin\xE1rio do Nu ao arquivo <code>shells</code>. O caminho a ser adicionado pode ser encontrado com o comando <code>which nu</code> e geralmente \xE9 <code>$HOME/.cargo/bin/nu</code>.</p>`,3);function Y(Z,aa){const s=r("ExternalLinkIcon");return i(),c("div",null,[d,a("p",null,[p,a("a",u,[h,o(s)]),m,a("a",g,[b,o(s)]),f]),_,a("p",null,[v,a("a",k,[x,o(s)]),q,a("a",N,[z,o(s)]),w,y,A]),R,V,C,a("p",null,[P,a("a",S,[I,o(s)]),O]),H,a("p",null,[D,a("a",j,[B,o(s)]),L]),T,a("h2",E,[Q,U,a("a",G,[M,o(s)])]),$,a("p",null,[F,a("a",J,[K,o(s)]),W]),X])}var sa=t(l,[["render",Y],["__file","instalacao.html.vue"]]);export{sa as default};
