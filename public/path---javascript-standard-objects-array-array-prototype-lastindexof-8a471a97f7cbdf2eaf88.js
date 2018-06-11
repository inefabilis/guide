webpackJsonp([0x9b0d4bcbf70f],{4577:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Array.prototype.lastIndexof</h2>\n<p>The <code>lastIndexOf()</code> method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at <code>fromIndex</code>.</p>\n<p><strong>Syntax</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>  arr<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span>searchElement<span class="token punctuation">,</span> fromIndex <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2>Parameters</h2>\n<ul>\n<li>\n<p><strong>searchElement</strong></p>\n<ul>\n<li>Element to locate in the array.</li>\n</ul>\n</li>\n<li>\n<p><strong>fromIndex</strong></p>\n<ul>\n<li><em>Optional</em>. The index at which to start searching backwards. Defaults to the array’s length minus one, i.e. the whole array will be searched. If the index is greater than or equal to the length of the array, the whole array will be searched. If negative, it is taken as the offset from the end of the array. Note that even when the index is negative, the array is still searched from back to front. If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.</li>\n</ul>\n</li>\n</ul>\n<p><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf\' target=\'_blank\' rel=\'nofollow\'>MDN link</a> | <a href=\'https://msdn.microsoft.com/en-us/LIBRary/ff679972%28v=vs.94%29.aspx\' target=\'_blank\' rel=\'nofollow\'>MSDN link</a></p>\n<h2>Returns</h2>\n<p>The index of the last occurrence of <code>searchElement</code> in the array, or -1 if <code>searchElement</code> is not found.</p>\n<h2>Description</h2>\n<p><code>lastIndexOf</code> compares <code>searchElement</code> to elements of the Array using strict equality (the same method used by the ===, or triple-equals, operator).</p>\n<h2>Remarks</h2>\n<p>The search occurs in descending index order (last member first). To search in ascending order, use the <code>indexOf</code> method.</p>\n<p>The optional <code>fromIndex</code> argument specifies the array index at which to begin the search. If <code>fromIndex</code> is greater than or equal to the array length, the whole array is searched. If <code>fromIndex</code> is negative, the search starts at the array length plus <code>fromIndex</code>. If the computed index is less than 0, -1 is returned.</p>\n<h2>Examples</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>  <span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  array<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment" spellcheck="true">// 3</span>\n  array<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment" spellcheck="true">// -1</span>\n  array<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// 3</span>\n  array<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// 0</span>\n  array<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 0</span>\n  array<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 3</span>\n\n  <span class="token comment" spellcheck="true">// Create an array.</span>\n  <span class="token keyword">var</span> ar <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"ab"</span><span class="token punctuation">,</span> <span class="token string">"cd"</span><span class="token punctuation">,</span> <span class="token string">"ef"</span><span class="token punctuation">,</span> <span class="token string">"ab"</span><span class="token punctuation">,</span> <span class="token string">"cd"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token comment" spellcheck="true">// Determine the first location, in descending order, of "cd".</span>\n  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>ar<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">"cd"</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"&lt;br/>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment" spellcheck="true">// Output: 4</span>\n\n  <span class="token comment" spellcheck="true">// Find "cd" in descending order, starting at index 2.</span>\n  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>ar<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">"cd"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"&lt;br/>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment" spellcheck="true">// Output: 1</span>\n\n  <span class="token comment" spellcheck="true">// Search for "gh" (which is not found).</span>\n  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>ar<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">"gh"</span><span class="token punctuation">)</span><span class="token operator">+</span> <span class="token string">"&lt;br/>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment" spellcheck="true">// Output: -1</span>\n\n  <span class="token comment" spellcheck="true">// Find "ab" with a fromIndex argument of -3.</span>\n  <span class="token comment" spellcheck="true">// The search in descending order starts at index 3,</span>\n  <span class="token comment" spellcheck="true">// which is the array length minus 2.</span>\n  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>ar<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">"ab"</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"&lt;br/>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment" spellcheck="true">// Output: 0</span>\n</code></pre>\n      </div>',fields:{slug:"/javascript/standard-objects/array/array-prototype-lastindexof/"},frontmatter:{title:"Array.prototype.lastIndexOf"}}},pathContext:{slug:"/javascript/standard-objects/array/array-prototype-lastindexof/"}}}});
//# sourceMappingURL=path---javascript-standard-objects-array-array-prototype-lastindexof-8a471a97f7cbdf2eaf88.js.map