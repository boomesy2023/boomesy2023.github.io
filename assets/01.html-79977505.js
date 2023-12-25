import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as e,f as n}from"./app-46202b86.js";const s={},d=n(`<h1 id="rust-和-java-对比-数据类型" tabindex="-1"><a class="header-anchor" href="#rust-和-java-对比-数据类型" aria-hidden="true">#</a> Rust 和 Java 对比--数据类型</h1><blockquote><p><strong>Rust 和 Java 都是一种静态类型的语言。这意味着它必须在编译期知道所有变量的类型</strong> 💬。</p></blockquote><h2 id="整形" tabindex="-1"><a class="header-anchor" href="#整形" aria-hidden="true">#</a> 整形</h2><h4 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h4><table><thead><tr><th>长度</th><th>有符号类型</th><th>无符号类型</th></tr></thead><tbody><tr><td>8bit</td><td>i8</td><td>u8</td></tr><tr><td>16bit</td><td>i16</td><td>u16</td></tr><tr><td>32bit</td><td>i32</td><td>u32</td></tr><tr><td>64bit</td><td>i64</td><td>u64</td></tr><tr><td>128bit</td><td>i128</td><td>u128</td></tr><tr><td>arch</td><td>isize</td><td>usize</td></tr></tbody></table><h4 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h4><table><thead><tr><th>长度</th><th>有符号类型</th><th>无符号类型</th></tr></thead><tbody><tr><td>8</td><td>byte</td><td>byte</td></tr><tr><td>16</td><td>short</td><td>short</td></tr><tr><td>32</td><td>int</td><td>int</td></tr><tr><td>64</td><td>long</td><td>long</td></tr></tbody></table><blockquote><p>java 没有在类型表达上区分有符号或者无符号类型。但是可以使用对应的引用类型调用无符号的操作。例如：Integer 的 Static methods like compareUnsigned, divideUnsigned。</p></blockquote><blockquote><p><strong>数字范围</strong></p><p>有符号类型规定的数字范围是 $-(2^{n-1})$ ~ $2^{n-1}-1$。</p><p>无符号类型可以存储的数字范围是 0 ～ $2^n-1$。</p></blockquote><div class="hint-container danger"><p class="hint-container-title">整型溢出</p><blockquote><p>比方说有一个 <code>u8</code> ，它可以存放从 0 到 255 的值。那么当你将其修改为范围之外的值，比如 256，则会发生<strong>整型溢出</strong>（<em>integer overflow</em>）。</p><p>大于该类型最大值的数值会被“包裹”成该类型能够支持的对应数字的最小值。比如在 <code>u8</code> 的情况下，256 变成 0，257 变成 1，129 会变成-127，依此类推。程序不会 panic，但是该变量的值可能不是你期望的值。依赖整型溢出包裹的行为不是一种正确的做法。</p></blockquote></div><h2 id="浮点型" tabindex="-1"><a class="header-anchor" href="#浮点型" aria-hidden="true">#</a> 浮点型</h2><h4 id="rust-1" tabindex="-1"><a class="header-anchor" href="#rust-1" aria-hidden="true">#</a> Rust</h4><p>f32：32 位单精度浮点型</p><p>f64：64 位双精度浮点型</p><h4 id="java-1" tabindex="-1"><a class="header-anchor" href="#java-1" aria-hidden="true">#</a> Java</h4><p>float：32 位单精度浮点型</p><p>double：64 位双精度浮点型</p><blockquote><p>都按照 IEEE-754 标准表示。</p><p>Java 中不建议使用 float 和 double 表示精确值，例如货币。可以使用 java.math.BigDecimal。</p></blockquote><h2 id="布尔型" tabindex="-1"><a class="header-anchor" href="#布尔型" aria-hidden="true">#</a> 布尔型</h2><h4 id="rust-2" tabindex="-1"><a class="header-anchor" href="#rust-2" aria-hidden="true">#</a> Rust</h4><p>布尔类型有两个可能的值：<code>true</code> 和 <code>false</code>。布尔值的大小为 1 个字节。</p><h4 id="java-2" tabindex="-1"><a class="header-anchor" href="#java-2" aria-hidden="true">#</a> Java</h4><p>布尔类型有两个可能的值：<code>true</code> 和 <code>false</code>。使用 1bit 存储，长度不固定。JVM 会在编 译时期将 boolean 类型的数据转换为 int，使⽤ 1 来表示 true，0 表示 false。JVM ⽀持 boolean 数组， 但是是通过读写 byte 数组来实现的。</p><h2 id="字符型" tabindex="-1"><a class="header-anchor" href="#字符型" aria-hidden="true">#</a> 字符型</h2><h4 id="rust-3" tabindex="-1"><a class="header-anchor" href="#rust-3" aria-hidden="true">#</a> Rust</h4><p>char：<code>char</code>（字符）类型是该语言最基本的字母类型。</p><p>声明的 <code>char</code> 字面量采用单引号括起来，这与字符串字面量不同，字符串字面量是用双引号括起来。</p><p>Rust 的字符类型大小为 4 个字节，表示的是一个 Unicode 标量值。</p><h4 id="java-3" tabindex="-1"><a class="header-anchor" href="#java-3" aria-hidden="true">#</a> Java</h4><p>char：char 数据类型是单个 16 位 Unicode 字符。</p><blockquote><p>Unicode 值的范围为 <code>U+0000</code> ~ <code>U+D7FF</code> 和 <code>U+E000</code>~<code>U+10FFFF</code>。</p><p>Java 中可以直接使用数字值。</p></blockquote><p>Rust 举例：</p><div class="language-rus line-numbers-mode" data-ext="rus"><pre class="language-rus"><code>let string1 = String::from(&quot;abcd&quot;);
for ele in string1.chars() {
  if ele &gt; &#39;a&#39; &amp;&amp; ele &lt; &#39;z&#39; {
	  println!(&quot;{}&quot;, ele)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java 举例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> he <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">char</span> c1 <span class="token operator">:</span> he<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>c1 <span class="token operator">&gt;</span> <span class="token char">&#39;a&#39;</span> <span class="token operator">&amp;&amp;</span> c1 <span class="token operator">&lt;</span> <span class="token char">&#39;z&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，基本数据方面，Rust 和 Java 还是很相似的。</p>`,36),r=[d];function o(c,i){return t(),e("div",null,r)}const u=a(s,[["render",o],["__file","01.html.vue"]]);export{u as default};
