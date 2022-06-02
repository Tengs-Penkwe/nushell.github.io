import{_ as d,r as a,o as c,c as l,a as t,b as o,w as r,e as n,d as e}from"./app.6670dc1a.js";const h={},p=n(`<h1 id="pipelines" tabindex="-1"><a class="header-anchor" href="#pipelines" aria-hidden="true">#</a> Pipelines</h1><p>One of the core designs of Nu is the pipeline, a design idea that traces its roots back decades to some of the original philosophy behind Unix. Just as Nu extends from the single string data type of Unix, Nu also extends the idea of the pipeline to include more than just text.</p><h2 id="basics" tabindex="-1"><a class="header-anchor" href="#basics" aria-hidden="true">#</a> Basics</h2><p>A pipeline is composed of three parts: the input, the filter, and the output.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open &quot;Cargo.toml&quot; | inc package.version | save &quot;Cargo_new.toml&quot;
</code></pre></div><p>The first command, <code>open &quot;Cargo.toml&quot;</code>, is an input (sometimes also called a &quot;source&quot; or &quot;producer&quot;). This creates or loads data and feeds it into a pipeline. It&#39;s from input that pipelines have values to work with. Commands like <code>ls</code> are also inputs, as they take data from the filesystem and send it through the pipelines so that it can be used.</p><p>The second command, <code>inc package.version</code>, is a filter. Filters take the data they are given and often do something with it. They may change it (as with the <code>inc</code> command in our example), or they may do another operation, like logging, as the values pass through.</p><p>The last command, <code>save &quot;Cargo_new.toml&quot;</code>, is an output (sometimes called a &quot;sink&quot;). An output takes input from the pipeline and does some final operation on it. In our example, we save what comes through the pipeline to a file as the final step. Other types of output commands may take the values and view them for the user.</p><h2 id="multi-line-pipelines" tabindex="-1"><a class="header-anchor" href="#multi-line-pipelines" aria-hidden="true">#</a> Multi-line pipelines</h2><p>If a pipeline is getting a bit long for one line, you can enclose it within <code>(</code> and <code>)</code> to create a subexpression:</p><div class="language-text ext-text"><pre class="language-text"><code>(
    &quot;01/22/2021&quot; |
    parse &quot;{month}/{day}/{year}&quot; |
    get year
)
</code></pre></div>`,11),m=e("Also see "),u={href:"https://www.nushell.sh/book/variables_and_subexpressions.html#subexpressions",target:"_blank",rel:"noopener noreferrer"},_=e("Subexpressions"),g=t("h2",{id:"working-with-external-commands",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#working-with-external-commands","aria-hidden":"true"},"#"),e(" Working with external commands")],-1),x=e("Nu commands communicate with each other using the Nu data types (see "),f=e("types of data"),w=e("), but what about commands outside of Nu? Let's look at some examples of working with external commands:"),b=n(`<p><code>internal_command | external_command</code></p><p>Data will flow from the internal_command to the external_command. This data is expected to be strings, so that they can be sent to the <code>stdin</code> of the external_command.</p><p><code>external_command | internal_command</code></p><p>Data coming from an external command into Nu will collect into a single string, and then will be passed into internal_command. Commands like <code>lines</code> help make it easier to bring in data from external commands in such a way that it&#39;s easier to work with.</p><p><code>external_command_1 | external_command_2</code></p><p>Nu works with data piped between two external commands in the same way as other shells, like Bash would. The <code>stdout</code> of external_command_1 is connected to the <code>stdin</code> of external_command_2. This lets data flow naturally between the two commands.</p><h2 id="behind-the-scenes" tabindex="-1"><a class="header-anchor" href="#behind-the-scenes" aria-hidden="true">#</a> Behind the scenes</h2><p>You may have wondered how we see a table if <code>ls</code> is an input and not an output. Nu adds this output for us automatically using another command called <code>autoview</code>. The <code>autoview</code> command is appended to any pipeline that doesn&#39;t have an output allowing us to see the result.</p><p>In effect, the command:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls
</code></pre></div><p>And the pipeline:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | autoview
</code></pre></div><p>Are one and the same.</p>`,13);function k(v,y){const s=a("ExternalLinkIcon"),i=a("RouterLink");return c(),l("div",null,[p,t("p",null,[m,t("a",u,[_,o(s)])]),g,t("p",null,[x,o(i,{to:"/old_book/types_of_data.html"},{default:r(()=>[f]),_:1}),w]),b])}var N=d(h,[["render",k],["__file","pipeline.html.vue"]]);export{N as default};
