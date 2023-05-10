import{_ as s,c as n,o as a,O as e}from"./chunks/framework.4f00588c.js";const y=JSON.parse('{"title":"Typescript 装饰器","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd-story/ts/ts-decorator.md","filePath":"frontEnd-story/ts/ts-decorator.md","lastUpdated":1683696892000}'),l={name:"frontEnd-story/ts/ts-decorator.md"},p=e(`<h1 id="typescript-装饰器" tabindex="-1">Typescript 装饰器 <a class="header-anchor" href="#typescript-装饰器" aria-label="Permalink to &quot;Typescript 装饰器&quot;">​</a></h1><p><img src="https://hades0512.oss-cn-beijing.aliyuncs.com/1_h4DYwjRrrzrv6Wg5E8k2aA.png" alt=""></p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>随着TypeScript和ES6中类的引入，现在存在某些场景需要额外的功能来支持注释或修改类和类成员。装饰器提供了一种为类声明和成员添加注释和元编程语法的方法。装饰器是JavaScript的第二阶段建议，并作为TypeScript的一个实验性功能提供。</p><h2 id="如何开启" tabindex="-1">如何开启 <a class="header-anchor" href="#如何开启" aria-label="Permalink to &quot;如何开启&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">修改tsconfig.json文件</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;experimentalDecorators&quot;: true //需要手动开启</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">运行命令</span></span>
<span class="line"><span style="color:#A6ACCD;">tsc --target ES5 --experimentalDecorators</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="类装饰器-class-decorator" tabindex="-1">类装饰器（Class Decorator） <a class="header-anchor" href="#类装饰器-class-decorator" aria-label="Permalink to &quot;类装饰器（Class Decorator）&quot;">​</a></h2><p>类装饰器就在类声明之前被声明。类装饰器被应用于类的构造函数，可以用来观察、修改或替换类定义。类装饰器不能在声明文件中使用，也不能在任何其他环境下使用（比如在声明类上）。</p><p>类装饰器的表达式在运行时将作为一个函数被调用，被装饰的类的构造器是它唯一的参数。</p><p>如果类装饰器返回一个值，它将用提供的构造函数替换类声明。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const moveDecoate: ClassDecorator = (target: Function) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(target === Tank); // true  target为原型对象</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  target.prototype.name = &quot;tank&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  target.prototype.getPosition = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return { x: 100, y: 100 };</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@moveDecoate</span></span>
<span class="line"><span style="color:#A6ACCD;">class Tank {</span></span>
<span class="line"><span style="color:#A6ACCD;">  getPosition(): any {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new Error(&quot;Method not implemented.&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const t = new Tank();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(t.getPosition()); // { x: 100, y: 100 }</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log((t as any).name); //tank</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 装饰器叠加</span></span>
<span class="line"><span style="color:#A6ACCD;">const musicDecorate: ClassDecorator = (target: Function) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  target.prototype.playMusci = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;播放音乐&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">@moveDecoate</span></span>
<span class="line"><span style="color:#A6ACCD;">@musicDecorate</span></span>
<span class="line"><span style="color:#A6ACCD;">class Player {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const p = new Player();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log((p as any).getPosition()); // { x: 100, y: 100 }</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log((p as any).playMusci()); // 播放音乐</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="装饰器工厂-class-decorator-factory" tabindex="-1">装饰器工厂（Class Decorator Factory） <a class="header-anchor" href="#装饰器工厂-class-decorator-factory" aria-label="Permalink to &quot;装饰器工厂（Class Decorator Factory）&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const colorDecorateFactory = (type?: string): ClassDecorator =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (target: Function) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    switch (type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      case &quot;Car&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">        target.prototype.color = &quot;Car red&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">      case &quot;Ship&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">        target.prototype.color = &quot;Ship red&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">      default:</span></span>
<span class="line"><span style="color:#A6ACCD;">        target.prototype.color = &quot;red&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@colorDecorateFactory(&quot;Car&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">class Car {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@colorDecorateFactory(&quot;Ship&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">class Ship {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@colorDecorateFactory(&quot;Ship&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">class Train {}</span></span>
<span class="line"><span style="color:#A6ACCD;">const car = new Car();</span></span>
<span class="line"><span style="color:#A6ACCD;">const ship = new Ship();</span></span>
<span class="line"><span style="color:#A6ACCD;">const train = new Train();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log((car as any).color); // Car red</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log((ship as any).color); // Ship red</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log((train as any).color); // red</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="属性装饰器-property-decorator" tabindex="-1">属性装饰器（Property Decorator） <a class="header-anchor" href="#属性装饰器-property-decorator" aria-label="Permalink to &quot;属性装饰器（Property Decorator）&quot;">​</a></h2><p>一个属性装饰器就在一个属性声明之前被声明。一个属性装饰器不能在声明文件中使用，也不能在任何其他环境下使用（比如在声明类中）。</p><p>属性装饰器的表达式将在运行时作为一个函数被调用，有以下两个参数。</p><ol><li>对于静态成员，可以是类的构造函数，对于实例成员，可以是类的原型。</li><li>成员的名字。</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const propertyDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(target, target === Xx.prototype); // {}   true  普通属性 为构造函数原型</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(propertyKey); // name   属性名称</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">const propertyDecorator1: PropertyDecorator = (target: Object, propertyKey: string | symbol) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(target, target === Xx); //  [class Xx] { age: undefined }  true  静态属性 返回构造函数</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(propertyKey); // name   属性名称</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Xx {</span></span>
<span class="line"><span style="color:#A6ACCD;">  @propertyDecorator</span></span>
<span class="line"><span style="color:#A6ACCD;">  public name!: string;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  @propertyDecorator1</span></span>
<span class="line"><span style="color:#A6ACCD;">  public static age: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="方法装饰器-method-decorators" tabindex="-1">方法装饰器（Method Decorators） <a class="header-anchor" href="#方法装饰器-method-decorators" aria-label="Permalink to &quot;方法装饰器（Method Decorators）&quot;">​</a></h2><p>方法装饰器就在方法声明之前被声明。该装饰器被应用于方法的属性描述符，可以用来观察、修改或替换方法定义。一个方法装饰器不能在声明文件中使用，不能在重载上使用，也不能在任何其他的环境中使用（比如在声明类中）。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const showDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(target, target === User.prototype); //{}  公共方法返回构造函数原型  target === User</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(propertyKey); //show  函数的名字</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(descriptor); //{value: [Function: show],writable: true,enumerable: false,configurable: true};  函数的一些配置属性</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const method = descriptor.value; //获取到该函数</span></span>
<span class="line"><span style="color:#A6ACCD;">  descriptor.writable = true; //控制该函数是否可以修改</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const hideDecorator1: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(target, target === User); //[class User]  静态方法返回构造函数</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const hideDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  descriptor.writable = false; // 不可修改函数</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">class User {</span></span>
<span class="line"><span style="color:#A6ACCD;">  @showDecorator</span></span>
<span class="line"><span style="color:#A6ACCD;">  show() {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  @hideDecorator</span></span>
<span class="line"><span style="color:#A6ACCD;">  private static hide() {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  @hideDecorator1</span></span>
<span class="line"><span style="color:#A6ACCD;">  hide1() {}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">User.prototype.show = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;writable show&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">User.prototype.hide1 = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;writable show&quot;); //TypeError: Cannot assign to read only property &#39;hide1&#39; of object &#39;#&lt;User&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">new User().show(); //writable show</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="参数装饰器-parameter-decorators" tabindex="-1">参数装饰器（Parameter Decorators） <a class="header-anchor" href="#参数装饰器-parameter-decorators" aria-label="Permalink to &quot;参数装饰器（Parameter Decorators）&quot;">​</a></h2><p>参数装饰器就在参数声明之前被声明。参数装饰器被应用于类构造器或方法声明的函数。一个参数装饰器不能在声明文件、重载或任何其他环境中使用（比如在声明类中）。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const parameterDecorator: ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(target, target === Tk.prototype); //{} true</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(propertyKey); // show</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(parameterIndex); //1: 参数的索引值</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Tk {</span></span>
<span class="line"><span style="color:#A6ACCD;">  public show(id: number = 1, @parameterDecorator step: number) {}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><a href="https://www.typescriptlang.org/docs/handbook/decorators.html" target="_blank" rel="noreferrer">doc</a></p>`,25),r=[p];function o(c,t,i,b,C,A){return a(),n("div",null,r)}const m=s(l,[["render",o]]);export{y as __pageData,m as default};
