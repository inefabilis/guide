webpackJsonp([0xc0717d4fd061],{5676:function(e,t){e.exports={data:{markdownRemark:{html:"<p>This wiki will instruct you how to set up a bare-bones project that uses React, Webpack and ES6. We’ll go over getting everything set up in depth.</p>\n<ul>\n<li><a href='https://facebook.github.io/react/docs/why-react.html' target='_blank' rel='nofollow'>Help: More about React</a></li>\n</ul>\n<p>For this project we will make use of Webpack, which is a module bundler, and is commonly used in React projects.</p>\n<ul>\n<li><a href='https://webpack.github.io/docs/what-is-webpack.html' target='_blank' rel='nofollow'>Help: More about Webpack</a></li>\n</ul>\n<p><a href='https://babeljs.io/blog/2015/06/07/react-on-es6-plus' target='_blank' rel='nofollow'>React goes well with ES6</a>, so we’re going to use ES6 in our code.</p>\n<blockquote>\n<p>ES6 is a significant update to the language, and the first update to the language since ES5 was standardized in 2009.<br>\n— <a href='https://github.com/lukehoban/es6features' target='_blank' rel='nofollow'>lukehoban</a></p>\n</blockquote>\n<p>ES6 doesn’t work in browsers on its own yet, but we can make it work manually using Babel to transpile it to ES5.</p>\n<p>A key feature of the technologies we are using is that our <code>index.html</code> file will refer to one bundled JavaScript file from which we can refer in other JavaScript files, rather than referring to them from the HTML file with <code>script</code> tags.</p>\n<ul>\n<li><a href='http://dev.venntro.com/2013/09/es6-part-1/' target='_blank' rel='nofollow'>Help: More about ES6</a></li>\n</ul>\n<h2>Prerequisites</h2>\n<p>This tutorial is intended to give you a bare bones structure upon which to expand. It should be a good starting point for anyone that wants to learn React and ES6. If you haven’t built anything with JavaScript or jQuery yet, you should go through some of the exercises in the <a href='http://www.freecodecamp.com/map' target='_blank' rel='nofollow'>FreeCodeCamp map</a> first.</p>\n<p>Before you start, make sure you have <a href='https://nodejs.org/en/download/' target='_blank' rel='nofollow'>NodeJS</a> and <a href='http://blog.npmjs.org/post/85484771375/how-to-install-npm' target='_blank' rel='nofollow'>Node Package Manager</a> installed at their most recent versions.</p>\n<h1>Quick Instructions</h1>\n<p>Here is a list of all the instructions mentioned in this tutorial.</p>\n<ul>\n<li><code>npm install webpack webpack-dev-server -g</code></li>\n<li><code>mkdir react-webpack-example &#x26;&#x26; cd $_</code></li>\n<li><code>touch webpack.config.js</code></li>\n<li><code>npm init</code></li>\n<li><code>npm install --save-dev react react-dom webpack webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react</code></li>\n<li><code>touch .gitignore</code></li>\n<li>write <code>.gitignore</code> (use <a href='https://www.gitignore.io/api/node' target='_blank' rel='nofollow'>https://www.gitignore.io/api/node</a>)</li>\n<li><code>mkdir src</code></li>\n<li><code>mkdir dist</code></li>\n<li><code>mkdir src/js</code></li>\n<li><code>touch src/js/client.js</code></li>\n<li><code>touch dist/index.html</code></li>\n<li>write <code>dist/index.html</code></li>\n<li>write <code>src/js/client.js</code></li>\n<li>write <code>webpack.config.js</code></li>\n<li><code>webpack</code></li>\n<li><code>webpack-dev-server --content-base dist</code></li>\n<li>Open Webpack Dev Server route in browser. Done!</li>\n</ul>",fields:{slug:"/miscellaneous/setting-up-a-react-es6-and-webpack-project/"},frontmatter:{title:"Setting Up a React Es6 and Webpack Project"}}},pathContext:{slug:"/miscellaneous/setting-up-a-react-es6-and-webpack-project/"}}}});
//# sourceMappingURL=path---miscellaneous-setting-up-a-react-es-6-and-webpack-project-c71bb966444cbed45480.js.map