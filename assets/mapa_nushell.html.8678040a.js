import{_ as t,o as d,c as r,e}from"./app.6670dc1a.js";const o={},s=e('<h1 id="mapa-nushell-de-otras-shells-y-lenguajes-dsls" tabindex="-1"><a class="header-anchor" href="#mapa-nushell-de-otras-shells-y-lenguajes-dsls" aria-hidden="true">#</a> Mapa nushell de otras shells y lenguajes DSLs</h1><p>La idea detr\xE1s de esta tabla is ayudarte a entender como los comandos internos y plugins en Nu se relacionan con otras shells conocidas y lenguajes de dominio espec\xEDficos. Hemos intentado producir un mapa de los comandos internos y sus equivalentes en otros lenguajes. Contribuciones son bienvenidas.</p><p>Nota: Esta tabla asume Nu 0.14.1 o posterior.</p><table><thead><tr><th>Nushell</th><th>SQL</th><th>.Net LINQ (C#)</th><th>PowerShell (without external modules)</th><th>Bash</th></tr></thead><tbody><tr><td>alias</td><td>N/A</td><td>N/A</td><td>alias</td><td>alias</td></tr><tr><td>append</td><td>N/A</td><td>Append()</td><td>-Append</td><td></td></tr><tr><td>args</td><td>N/A</td><td>N/A</td><td></td><td></td></tr><tr><td>autoview</td><td>N/A</td><td>N/A</td><td></td><td></td></tr><tr><td>average(<code>*</code>)</td><td>avg</td><td>Average()</td><td>Measure-Object, measure</td><td></td></tr><tr><td>binaryview(<code>*</code>)</td><td>N/A</td><td></td><td>Format-Hex</td><td></td></tr><tr><td>calc, = math</td><td>math operators</td><td>Aggregate, Average, Count, Max, Min, Sum</td><td></td><td>bc</td></tr><tr><td>cd</td><td>N/A</td><td>N/A</td><td>Set-Location, cd</td><td>cd</td></tr><tr><td>clear</td><td>N/A</td><td>N/A</td><td>Clear-Host</td><td>clear</td></tr><tr><td>clip</td><td>N/A</td><td>N/A</td><td>Set-Clipboard, scb</td><td>clip, clipboard, xclip, pbcopy</td></tr><tr><td>compact</td><td></td><td></td><td></td><td></td></tr><tr><td>config</td><td>N/A</td><td>N/A</td><td>$Profile</td><td>vi .bashrc, .profile</td></tr><tr><td>count</td><td>count</td><td>Count</td><td>Measure-Object, measure</td><td>wc</td></tr><tr><td>cp</td><td>N/A</td><td>N/A</td><td>Copy-Item, cp, copy</td><td>cp</td></tr><tr><td>date</td><td>NOW() / getdate()</td><td>DateTime class</td><td>Get-Date</td><td>date</td></tr><tr><td>debug</td><td></td><td></td><td></td><td></td></tr><tr><td>= dec</td><td></td><td>x--</td><td></td><td></td></tr><tr><td>default</td><td></td><td></td><td></td><td></td></tr><tr><td>drop</td><td></td><td></td><td></td><td></td></tr><tr><td>du</td><td>N/A</td><td>N/A</td><td></td><td>du</td></tr><tr><td>each</td><td>cursor</td><td></td><td>ForEach-Object, foreach, for</td><td></td></tr><tr><td>echo</td><td>print</td><td>N/A</td><td>Write-Output, write</td><td>echo</td></tr><tr><td>enter</td><td>N/A</td><td>N/A</td><td></td><td></td></tr><tr><td>evaluate_by</td><td></td><td></td><td></td><td></td></tr><tr><td>exit</td><td>N/A</td><td></td><td>exit</td><td>exit</td></tr><tr><td>fetch(<code>*</code>)</td><td>N/A</td><td>HttpClient,WebClient, HttpWebRequest/Response</td><td>Invoke-WebRequest</td><td>wget</td></tr><tr><td>first</td><td>top, limit</td><td>First, FirstOrDefault</td><td>Select-Object -First</td><td>head</td></tr><tr><td>format</td><td></td><td>String.Format()</td><td>String.Format()</td><td></td></tr><tr><td>from bson</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>from csv</td><td>import flatfile</td><td>N/A</td><td>Import-Csv, ConvertFrom-Csv</td><td></td></tr><tr><td>from eml</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>from ics</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>from ini</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>from json</td><td>openjson</td><td>N/A</td><td>ConvertFrom-Json</td><td></td></tr><tr><td>from ods</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>from sqlite</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>from ssv</td><td>import flatfile</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>from toml</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>from tsv</td><td>import flatfile</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>from url</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>from vcf</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>from xlsx</td><td>import</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>from xml</td><td>cast(variable as xml)</td><td>N/A</td><td>ConvertFrom-Xml</td><td></td></tr><tr><td>from yaml</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>get</td><td></td><td>Select</td><td>(cmd).column</td><td></td></tr><tr><td>group_by</td><td>group by</td><td>GroupBy, group</td><td>Group-Object, group</td><td></td></tr><tr><td>headers</td><td></td><td></td><td></td><td></td></tr><tr><td>help</td><td>sp_help</td><td>N/A</td><td>Get-Help, help, man</td><td>man</td></tr><tr><td>histogram</td><td>N/A</td><td>N/A</td><td></td><td></td></tr><tr><td>history</td><td>N/A</td><td>N/A</td><td>Get-History, history</td><td>history</td></tr><tr><td>inc(<code>*</code>)</td><td>N/A</td><td></td><td>N/A</td><td>N/A</td></tr><tr><td>insert</td><td></td><td></td><td>Add-Member</td><td></td></tr><tr><td>is_empty</td><td>is null</td><td>String.InNullOrEmpty()</td><td>String.InNullOrEmpty()</td><td></td></tr><tr><td>keep</td><td>top,limit</td><td>Take</td><td>Select-Object -First</td><td>head</td></tr><tr><td>keep_until</td><td></td><td></td><td></td><td></td></tr><tr><td>keep_while</td><td></td><td>TakeWhile</td><td></td><td></td></tr><tr><td>kill</td><td>N/A</td><td>N/A</td><td>Stop-Process, kill</td><td>kill</td></tr><tr><td>last</td><td></td><td>Last, LastOrDefault</td><td>Select-Object -Last</td><td>tail</td></tr><tr><td>lines</td><td>N/A</td><td>N/A</td><td>File.ReadAllLines()</td><td></td></tr><tr><td>ls</td><td>N/A</td><td>N/A</td><td>Get-ChildItem, dir, ls</td><td>ls</td></tr><tr><td>map_max_by</td><td></td><td></td><td></td><td></td></tr><tr><td>match(<code>*</code>)</td><td>case when</td><td>RegEx</td><td>[regex]</td><td></td></tr><tr><td>merge</td><td></td><td></td><td></td><td></td></tr><tr><td>mkdir</td><td>N/A</td><td>N/A</td><td>mkdir, md</td><td>mkdir</td></tr><tr><td>mv</td><td>N/A</td><td>N/A</td><td>Move-Item, mv, move, mi</td><td>mv</td></tr><tr><td>next</td><td></td><td></td><td></td><td></td></tr><tr><td>nth</td><td>limit x offset y, rownumber =</td><td>ElemantAt(x)</td><td>[x], indexing operator, ElementAt(x)</td><td></td></tr><tr><td>open</td><td></td><td></td><td>Get-Content, gc, cat, type</td><td>cat</td></tr><tr><td>parse</td><td></td><td></td><td></td><td></td></tr><tr><td>pivot</td><td>pivot</td><td>N/A</td><td></td><td></td></tr><tr><td>post(<code>*</code>)</td><td>N/A</td><td>HttpClient,WebClient, HttpWebRequest/Response</td><td>Invoke-WebRequest</td><td></td></tr><tr><td>prepend</td><td></td><td></td><td></td><td></td></tr><tr><td>prev</td><td></td><td></td><td></td><td></td></tr><tr><td>ps(<code>*</code>)</td><td>N/A</td><td>N/A</td><td>Get-Process, ps, gps</td><td>ps</td></tr><tr><td>pwd</td><td>N/A</td><td>N/A</td><td>Get-Location, pwd</td><td>pwd</td></tr><tr><td>range</td><td></td><td>Range</td><td>1..10, &#39;a&#39;..&#39;f&#39;</td><td></td></tr><tr><td>reduce_by</td><td></td><td></td><td></td><td></td></tr><tr><td>reject</td><td></td><td></td><td></td><td></td></tr><tr><td>rename</td><td>N/A</td><td>N/A</td><td>Rename-Item, ren, rni</td><td>mv</td></tr><tr><td>reverse</td><td></td><td>Reverse</td><td>[Array]::Reverse($var)</td><td></td></tr><tr><td>rm</td><td>N/A</td><td>N/A</td><td>Remove-Item, del, erase, rd, ri, rm, rmdir</td><td>rm</td></tr><tr><td>save</td><td>N/A</td><td>N/A</td><td>Write-Output, Out-File</td><td>&gt; foo.txt</td></tr><tr><td>select(<code>***</code>)</td><td>select</td><td>Select</td><td>Select-Object, select</td><td></td></tr><tr><td>shells</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>shuffle</td><td></td><td>Random</td><td>$var</td><td>Sort-Object {Get-Random}</td></tr><tr><td>size</td><td></td><td></td><td>Measure-Object, measure</td><td>wc</td></tr><tr><td>skip</td><td>where row_number()</td><td>Skip</td><td>Select-Object -Skip</td><td></td></tr><tr><td>skip_until</td><td></td><td></td><td></td><td></td></tr><tr><td>skip_while</td><td></td><td>SkipWhile</td><td></td><td></td></tr><tr><td>sort-by</td><td>order by</td><td>OrderBy, OrderByDescending, ThenBy, ThenByDescending</td><td>Sort-Object, sort</td><td></td></tr><tr><td>split_by</td><td></td><td>String.Split()</td><td>String.Split()</td><td></td></tr><tr><td>split_column</td><td></td><td>N/A</td><td></td><td></td></tr><tr><td>split_row</td><td></td><td>N/A</td><td></td><td></td></tr><tr><td>str(<code>*</code>)</td><td>string functions</td><td>String class</td><td>String class</td><td></td></tr><tr><td>sum</td><td>sum</td><td>Sum()</td><td>Measure-Object, measure</td><td></td></tr><tr><td>sys(<code>*</code>)</td><td>N/A</td><td>N/A</td><td>Get-ComputerInfo</td><td>uname, lshw, lsblk, lscpu, lsusb, hdparam, free</td></tr><tr><td>table</td><td></td><td></td><td>Format-Table, ft, Format-List, fl</td><td></td></tr><tr><td>tags</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>textview(<code>*</code>)</td><td>N/A</td><td>N/A</td><td>Get-Content, cat</td><td></td></tr><tr><td>tree(<code>*</code>)</td><td>N/A</td><td>N/A</td><td>tree</td><td></td></tr><tr><td>to bson</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>to csv</td><td>N/A</td><td>N/A</td><td>Export-Csv, ConvertTo-Csv</td><td></td></tr><tr><td>to html</td><td>N/A</td><td>N/A</td><td>ConvertTo-Html</td><td></td></tr><tr><td>to json</td><td>N/A</td><td>N/A</td><td>ConvertTo-Json</td><td></td></tr><tr><td>to md</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>to sqlite</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>to toml</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>to tsv</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>to url</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>to yaml</td><td>N/A</td><td>N/A</td><td>N/A</td><td></td></tr><tr><td>touch</td><td>N/A</td><td>N/A</td><td>Set-Content</td><td>touch</td></tr><tr><td>trim</td><td>rtrim, ltrim</td><td>String.Trim()</td><td>String.Trim()</td><td></td></tr><tr><td>uniq</td><td>distinct</td><td>Distinct</td><td>Get-Unique, gu</td><td>uniq</td></tr><tr><td>update(<code>**</code>)</td><td>As</td><td>N/A</td><td></td><td></td></tr><tr><td>version</td><td>select @@version</td><td>N/A</td><td>$PSVersionTable</td><td></td></tr><tr><td>with_env</td><td>N/A</td><td>N/A</td><td>$env:FOO = &#39;bar&#39;</td><td>export foo = &quot;bar&quot;</td></tr><tr><td>what</td><td></td><td></td><td></td><td></td></tr><tr><td>where</td><td>where</td><td>Where</td><td>Where-Object, where, &quot;?&quot; operator</td><td></td></tr><tr><td>which</td><td>N/A</td><td>N/A</td><td>N/A</td><td>which</td></tr><tr><td>wrap</td><td></td><td></td><td></td><td></td></tr></tbody></table><ul><li><code>*</code> - Pertenecen de los plugins standard</li><li><code>**</code> - renombrada de <code>edit</code> a <code>update</code> en 0.13.1</li><li><code>***</code> - renombrada de <code>pick</code> a <code>select</code> en 0.13.1</li></ul>',5),a=[s];function l(i,c){return d(),r("div",null,a)}var A=t(o,[["render",l],["__file","mapa_nushell.html.vue"]]);export{A as default};
