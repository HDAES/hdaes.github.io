import{_ as s,c as n,o as a,O as l}from"./chunks/framework.4f00588c.js";const u=JSON.parse('{"title":"TypeScript 抽象类和抽象方法","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd-story/ts/ts-abstract.md","filePath":"frontEnd-story/ts/ts-abstract.md","lastUpdated":1683697709000}'),p={name:"frontEnd-story/ts/ts-abstract.md"},e=l(`<h1 id="typescript-抽象类和抽象方法" tabindex="-1">TypeScript 抽象类和抽象方法 <a class="header-anchor" href="#typescript-抽象类和抽象方法" aria-label="Permalink to &quot;TypeScript 抽象类和抽象方法&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>抽象方法或抽象字段是一个没有提供实现的方法或字段。这些成员必须存在于一个抽象类中，不能被直接实例化。</p><p>抽象类的作用是作为子类的基类，实现所有的抽象成员。当一个类没有任何抽象成员时，它被称为是具体的。</p><h2 id="抽象类-属性-方法" tabindex="-1">抽象类，属性，方法 <a class="header-anchor" href="#抽象类-属性-方法" aria-label="Permalink to &quot;抽象类，属性，方法&quot;">​</a></h2><p>加<code>abstract</code>关键就成抽象类</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract class People {</span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * 移动</span></span>
<span class="line"><span style="color:#A6ACCD;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  abstract move(): void</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * 跑</span></span>
<span class="line"><span style="color:#A6ACCD;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  abstract run():void{} //方法“run”不能具有实现，因为它标记为抽象。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * 名字</span></span>
<span class="line"><span style="color:#A6ACCD;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  abstract name: string = &#39;小明&#39; //属性“name”不能具有初始化表杰式，因为它标记为摘要。</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">new People()  //无法创建抽象类的实例</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ol><li>抽象类不能被实例化。</li><li>抽象方法只能定义，不能实现，即没有函数体.</li><li>抽象属性不能有实现</li></ol><h2 id="抽象类使用方法" tabindex="-1">抽象类使用方法 <a class="header-anchor" href="#抽象类使用方法" aria-label="Permalink to &quot;抽象类使用方法&quot;">​</a></h2><p>通过类的继承并实现抽象方法和属性</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract class People {</span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * 移动</span></span>
<span class="line"><span style="color:#A6ACCD;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  abstract move(): void</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * 跑步</span></span>
<span class="line"><span style="color:#A6ACCD;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  abstract run(): void</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * 名字</span></span>
<span class="line"><span style="color:#A6ACCD;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  abstract name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Man extends People {</span></span>
<span class="line"><span style="color:#A6ACCD;">  run(): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new Error(&#39;Method not implemented.&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  name!: string</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  move(): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new Error(&#39;Method not implemented.&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">new Man()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>TypeScript也支持定义抽象类和抽象类成员。抽象类和抽象类成员都使用<code>abstract</code>关键字来定义</p><ul><li>抽象类可以不包含抽象方法，但抽象方法必须存在于抽象类中</li><li>抽象方法只能定义，不能实现，即没有函数体</li><li>抽象类不能被直接使用，只能被继承，非抽象子类必须实现父类的抽象方法和抽象属性</li><li>抽象类类似于类的模板，实现规范的代码定义</li></ul>`,14),r=[e];function c(o,i,t,b,C,A){return a(),n("div",null,r)}const d=s(p,[["render",c]]);export{u as __pageData,d as default};
