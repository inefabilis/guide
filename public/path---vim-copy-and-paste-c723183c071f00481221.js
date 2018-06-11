webpackJsonp([80579637150042],{6324:function(e,o){e.exports={data:{markdownRemark:{html:'<h1>Copying and Pasting in Vim</h1>\n<p>In Vim, copying is commonly refered to as ‘yanking’, and pasting remains the same.</p>\n<h3>Command Keys</h3>\n<p>The keys used for yanking and pasting in Vim are:</p>\n<ul>\n<li><code>y</code> to yank</li>\n<li><code>p</code> to paste</li>\n<li><code>d</code> to cut</li>\n<li><code>"</code> to cut or yank to a register</li>\n</ul>\n<h3>Copying</h3>\n<p>To yank or cut, type <code>y</code> or <code>d</code>, followed by a ‘text object’.  These describe how much text should be yanked or deleted.  For example, <code>yw</code> copies one word and <code>d$</code> deletes from the cursor to the end of the line.  They can also both be used in visual mode, pressing <code>v</code> and moving the cursor and then pressing <code>d</code> deletes all text inside of the selection.</p>\n<h3>Registers</h3>\n<p>A register is just another name for clipboard. But unlike other text editors, Vim has many of such “clipboards”.</p>\n<p>To yank or delete to a register, type <code>"&#x3C;register name>&#x3C;command></code> (e.g.: <code>"ayw</code> to [y]ank [w]ord to register <code>a</code>). Register names can be only one character long for obvious reasons (<code>"m</code>,<code>"M</code>, <code>"3</code> are allowed, but <code>"mr</code>, <code>"MyReg</code>, <code>"MyRegisterName</code> are not).  The default register that is stored to when no register is specified is <code>"</code> and the system clipboard that can be accessed in other programs is <code>+</code>.  You can also use lower case characters to access registers and use upper case characters to append to registers.  For example <code>"dyy</code> copies the current line to the <code>d</code> register, typing <code>"D3yw</code> copies the next 3 words and adds them to what is already stored in <code>d</code>.</p>\n<h3>Pasting</h3>\n<p>Pasting can be done in normal mode or in insert mode.\nIn normal mode:</p>\n<ul>\n<li><code>p</code> pastes after the cursor</li>\n<li><code>P</code> pastes before the cursor</li>\n<li><code>gp</code> pastes after the cursor and moves the cursor to the end of the paste</li>\n<li><code>gP</code> pastes before the cursor and moves the cursor to the end of the paste</li>\n</ul>\n<p>In insert mode type <code>Ctrl-r</code> to paste and then type a register, normally <code>"</code>, this will paste from that register where the cursor is and move the cursor to after the paste.</p>',fields:{slug:"/vim/copy-and-paste/"},frontmatter:{title:"Copy and Paste"}}},pathContext:{slug:"/vim/copy-and-paste/"}}}});
//# sourceMappingURL=path---vim-copy-and-paste-c723183c071f00481221.js.map