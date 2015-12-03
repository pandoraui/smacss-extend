---
layout: docs
title: 文字排版
titleEn: Typography
group: content
---

排版是非常底层的设计，在 base 基础样式之上，排版样式的优劣，直接影响上层设计实现的复杂度。良好的排版规划，能让代码更精简，维护更方便。

这里设定了一些简单易用的自定义排版，充分发挥 html 标签语义化功用，并在一定程度上考虑了中文排版特性。此文档整体基于 Amzae ui 内容修改，结合 bootstrap 以及以前整理的 typo 排版布局案例整理。

**理念：**最简的样式，达到美观的布局。

[TOC]

## 全局设置

样式库设置了基本的全局样式，包括文字排版，以及链接样式，我们特地做了这些设置：

- 设置 `<body>` 全局背景色为白色 `background-color: #ffffff;`。
- 使用 `$font-family-base`, `$font-size-base` 以及 `$line-height-base` 属性作为排版基础。
- 通过 `$link-color` 设置全局链接样式，并让链接只在鼠标悬停 `:hover` 状态下才出现下划线。

这些样式设置在 `_reboot.scss` 中。


## 字体

字体选择尤其重要，此为**布局排版基础**。良好的布局，一改字体，可能就美感全失，选对字体，排版实现会更可控、安全、美观。

此项目排版设计主要使用非衬线字体（sans-serif），在 `<code>`、`<pre>` 等元素上则设置了等宽字体（monospace）。

### 字体定义

```css
body {
  font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans","wenquanyi micro hei","Hiragino Sans GB", "Hiragino Sans GB W3", Arial, sans-serif;
}
```
- __Segoe UI__ - Windows UI 字体（从 Windows Vista 开始使用）；
- __Helvetica Neue__ 是 iOS7 及 OSX 10.10 UI 字体（在部分文字垂直居中的场景有一些小问题，暂时先使用 `Lucida Grande`）；
- 有些 Windows 用户安装了丽黑字体，丽黑字体在 Windows 上渲染出来很模糊，所以把微软雅黑放在苹果丽黑之前；
- __FreeSans__ - 包括 Ubuntu 之类的 Linux 分发版包含的字体。

### 字体辅助 Class

在框架样式中，`font-family` 设置只在 Base 样式中出现了一两次。在具体项目中，不建议到处设置 `font-family`，应在项目底层设置自己选用的字体，亦可以使用样式库提供的字体辅助 class。

- `.font-family-sans-serif` __非衬线字体__，推荐使用。
- `.font-family-serif` __衬线字体__，中文显示宋体，样式库未使用。
- `.font-family-kai` __数字英文显示衬线字体，中文显示楷体__。和 `.font-family-serif` 的区别仅在于中文字体，样式库中把 `<blockquote>` 的字体设置成了 `.font-family-kai`。
- `.font-family-monospace` __等宽字体__，Amaze UI 源代码中使用。

下面为几种字体系列的演示：

`````html
<p>
  The quick brown fox jumps over the lazy dog. <br/>
  千万不要因为走得太久，而忘记了我们为什么出发。 <br/>
  千萬不要因為走得太久，而忘記了我們為什麼出發。
</p>

<p class="font-family-serif">
  The quick brown fox jumps over the lazy dog. <br/>
  千万不要因为走得太久，而忘记了我们为什么出发。 <br/>
  千萬不要因為走得太久，而忘記了我們為什麼出發。
</p>

<p class="font-family-kai">
  The quick brown fox jumps over the lazy dog. <br/>
  千万不要因为走得太久，而忘记了我们为什么出发。 <br/>
  千萬不要因為走得太久，而忘記了我們為什麼出發。
</p>

<p class="font-family-monospace">
  The quick brown fox jumps over the lazy dog. <br/>
  千万不要因为走得太久，而忘记了我们为什么出发。 <br/>
  千萬不要因為走得太久，而忘記了我們為什麼出發。
</p>
`````

```html
<p>...</p>

<p class="font-family-serif">...</p>

<p class="font-family-kai">...</p>

<p class="font-family-monospace">...</p>
```

严格来说，楷体属于手写体系列（cursive），不过英文的手写字过于花哨，所以在 `.font-family-kai` 中英文使用 `serif`。关于五种字体的定义，可以查看 [W3C 文档](http://www.w3.org/TR/CSS2/fonts.html#value-def-generic-family)。

### Webkit 反锯齿

另外，在 Webkit 浏览器下还设置了反锯齿平滑渲染，渲染出来要纤细一些，其他内核的浏览器上看着稍粗一些。

__2014.10.10 update:__ OSX 平台的 Firefox 从 v25 增加了 `-moz-osx-font-smoothing`，实现类似 Webkit 的字体渲染效果。

```css
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

如果你不喜欢，可以重置成浏览器的默认平滑字体。

```css
body {
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
}
```

`````html
<h3>开启反锯齿 <code>-webkit-font-smoothing: antialiased;</code></h3>
<p>
  The quick brown fox jumps over the lazy dog. <br/>
  千万不要因为走的太久，而忘记了我们为什么出发。 <br/>
  千萬不要因為走得太久，而忘記了我們為什麼出發。
</p>
<br/>
<div style="-webkit-font-smoothing: subpixel-antialiased;-moz-osx-font-smoothing: auto">
  <h3>未开启反锯齿 <code>-webkit-font-smoothing: subpixel-antialiased;</code></h3>

  <p>
    The quick brown fox jumps over the lazy dog. <br/>
    千万不要因为走的太久，而忘记了我们为什么出发。 <br/>
    千萬不要因為走得太久，而忘記了我們為什麼出發。
  </p>
</div>
`````

```html
<h3>-webkit-font-smoothing: antialiased;</h3>
<p>
  The quick brown fox jumps over the lazy dog. <br/>
  千万不要因为走的太久，而忘记了我们为什么出发。 <br/>
  千萬不要因為走得太久，而忘記了我們為什麼出發。
</p>
<br/>
<div style="-webkit-font-smoothing: subpixel-antialiased; -moz-osx-font-smoothing: auto">
  <h3>-webkit-font-smoothing: subpixel-antialiased;</h3>
  <p>
    The quick brown fox jumps over the lazy dog. <br/>
    千万不要因为走的太久，而忘记了我们为什么出发。 <br/>
    千萬不要因為走得太久，而忘記了我們為什麼出發。
  </p>
</div>
```

参考链接：

- [-webkit-font-smoothing](http://ued.ctrip.com/blog/wp-content/webkitcss/prop/font-smoothing.html)
- [Better font-rendering on OSX](http://maximilianhoffmann.com/posts/better-font-rendering-on-osx)
- [跨平台字体效果浅析](http://www.woshipm.com/ucd/25682.html)

### 字体相关链接

__主流系统中附带的字体__

- [List of Microsoft Windows fonts](http://en.wikipedia.org/wiki/List_of_Microsoft_Windows_fonts)
- [List of typefaces included with OS X](http://en.wikipedia.org/wiki/List_of_typefaces_included_with_OS_X)
- [Common fonts to all versions of Windows & Mac equivalents](http://www.ampsoft.net/webdesign-l/WindowsMacFonts.html)
- [OS X：Mavericks 附带的字体](http://support.apple.com/kb/HT5944?viewlocale=zh_CN&locale=zh_CN)
- [OS X：Mountain Lion 附带的字体](http://support.apple.com/kb/HT5379?viewlocale=zh_CN&locale=zh_CN)
- [iOS 7：字体列表](http://support.apple.com/kb/HT5878?viewlocale=zh_CN&locale=zh_CN)
- [iOS 6：字体列表](http://support.apple.com/kb/HT5484?viewlocale=zh_CN&locale=zh_CN)
- [Windows UI 设计文档](http://dev.windows.com/en-us/design)
- [Supported UI Fonts in Windows Phone][wpfts]
- [Typography | Android Developers](http://developer.android.com/design/style/typography.html)

[wpfts]:http://msdn.microsoft.com/library/windows/apps/hh202920(v=vs.105).aspx#BKMK_SupportedUIFontsinWindowsPhone

__中文排版相关开源项目__

- [「漢字標準格式」——印刷品般的漢字網頁排版框架](https://github.com/ethantw/Han)
- [Entry.css - 可配置的、更适合阅读的中文文章样式库](https://github.com/zmmbreeze/Entry.css)


## 元素基本样式

### 标题 `<h1> - <h6>`

`<h1> - <h6>` 保持粗体，设置了边距；`<h1>` 为正常字号的 `1.5` 倍；`<h2>` 为正常字号的 `1.25` 倍；其他保持正常字号。默认设定：1rem = 16px;

`````html
<h1>h1. 标题1 <small>副标题或说明 1.5rem 24px</small></h1>
<h2>h2. 标题2 <small>副标题或说明 1.25rem 20px</small></h2>
<h3>h3. 标题3 <small>一些说明 1rem 16px</small></h3>
<h4>h4. 标题4 <small>一些说明 100%</small></h4>
<h5>h5. 标题5 <small>一些说明 100%</small></h5>
<h6>h6. 标题6 <small>一些说明 100%</small></h6>
`````
```html
<h1>h1 标题1 <small>副标题或说明</small></h1>
<h2>h2 标题2</h2>
<h3>h3 标题3</h3>
<h4>h4 标题4</h4>
<h5>h5 标题5</h5>
<h6>h6 标题6 <small>一些说明</small></h6>
```

### 大型标题 `display-1`

如果你想要一个标题醒目，考虑使用**大标题**——一种更大型、鲜明的标题样式。

`````html
<h1 class="display-1">大标题 1</h1>
<h1 class="display-2">大标题 2</h1>
<h1 class="display-3">大标题 3</h1>
<h1 class="display-4">大标题 4</h1>
`````
```html
<h1 class="display-1">大标题 1</h1>
<h1 class="display-2">大标题 2</h1>
<h1 class="display-3">大标题 3</h1>
<h1 class="display-4">大标题 4</h1>
```

### 段落 `<p>`

`````html
<p>无论走到哪里，都应该记住，过去都是假的，回忆是一条没有尽头的路，一切以往的春天都不复存在，就连那最坚韧而又狂乱的爱情归根结底也不过是一种转瞬即逝的现实。</p>
`````
```html
<p>无论走到哪里，都应该记住，过去都是假的，回忆是一条没有尽头的路，一切以往的春天都不复存在，就连那最坚韧而又狂乱的爱情归根结底也不过是一种转瞬即逝的现实。</p>
```

### Lead 类 `.lead`

添加 `.lead` 类使一个段落醒目。

`````html
<p class="lead">写在规则前面的话——项目的可维护性第一。</p>
`````
```html
<p class="lead">以人为本</p>
```

### 分隔线 `<hr>`

`````html
<hr/>
`````
```html
<hr/>
```


### 内联文本元素，待定

常见的内联 HTML5 元素的样式。

`````html
<p><strong>强调标签</strong></p>
<p><b>是为了 高亮词 或 短语 而不会赋予重要含义。</b></p>
<p><em>用 斜体字 强调一段文本。</em></p>
<p><i>主要被用来表示 语音、技术术语 等。</i></p>
<p><del>删除文本</del></p>
<p><small>针对不需要强调的 inline或block类型的文本 使用。</small></p>
<p><ins></ins></p>
<p><u></u></p>
`````
```html

```

注意! 在HTML5中仍然可以使用 `<b>` 和 `<i>` 标签，但是它们的用途已经发生了改变。`<b>` 在过去仅仅用来加粗单词或短语，没有任何语义上的含义，现在定义需要强调的部分（如果您希望把文本标记为相比其他文本更为重要，应该使用 `<strong>` 标签。）。而 `<i>` 主要用在语音和技术等方面。

### 缩写形式

HTML的 `<abbr>` 标签是为缩写语或缩写词在 `:hover` 状态时能显示扩展的文本。使用 title 属性的 `<abbr>` 会带有点状(dotted)底边线，鼠标经过时会显示带问号的箭头，并提示完整的字词信息。

`````html
要在缩写词上实现鼠标悬停 `:hover` 时的扩展文本，应该包含 title 属性。
<p><abbr title="attribute">attr</abbr></p>

对缩写词元素应用 .initialism 会减小一号字体大小，以协调排版效果。
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr>——超文本标记语言，是自切片面包问世以来最棒的发明。</p>
`````
```html
<abbr title="attribute">attr</abbr>
<abbr title="HyperText Markup Language" class="initialism">HTML</abbr>
```

### 地址

地址标签 `<address>` 通过行尾的 `<br>` 标签保持格式。

`````html
<address>
  <strong>某网络科技有限公司</strong><br>
  某省某市某大道404号<br>
  佚名大厦, A座49楼<br>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>
<address>
  <strong>有关负责人</strong><br>
  <a href="mailto:#">first.last@gmail.com</a>
</address>
`````
```html
<address>
  <strong>某网络科技有限公司</strong><br>
  某省某市某大道404号<br>
  佚名大厦, A座49楼<br>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>
<address>
  <strong>有关负责人</strong><br>
  <a href="mailto:#">first.last@gmail.com</a>
</address>
```

### 引用 `<blockquote>`

为了在你的文档中引用来自别处的文本内容，请在一段HTML外面包裹 `<blockquote>` 作为引用。为了显示直接引用，我们推荐使用 `<p>`。

命名来源，可添加一个 `<footer>` 用于标识来源。用 `<cite>` 包裹来源名称。

`````html
<blockquote class="blockquote">
  <p>曾经沧海难为水，除却巫山不是云。取次花丛懒回顾，半缘修道半缘君。</p>
  <footer>元稹<cite title="《离思五首》之四">《离思五首》之四</cite></footer>
</blockquote>

`````
```html
<blockquote class="blockquote">
  <p>曾经沧海难为水，除却巫山不是云。取次花丛懒回顾，半缘修道半缘君。</p>
  <footer>元稹<cite title="《离思五首》之四">《离思五首》之四</cite></footer>
</blockquote>
```

### 逆向布局

为一个右对齐内容的引用块添加一个 `.blockquote-reverse` 类。

`````html
<blockquote class="blockquote blockquote-reverse">
  <p>远看山有色，近听水无声。春去花还在，人来鸟不惊。</p>
  <footer>王维<cite title="《画》">《画》</cite></footer>
</blockquote>
`````
```html
<blockquote class="blockquote blockquote-reverse">
  <p>远看山有色，近听水无声。春去花还在，人来鸟不惊。</p>
  <footer>王维<cite title="《画》">《画》</cite></footer>
</blockquote>
```


### 列表 ul/ol

__无序列表（`<ul>`）：__ 定义一个 __没有__ 明确重要性的项目列表。

定义 `.list-unstyled` 删除列表项目上默认的 `list-style` 以及左外边距（只针对直接子元素）。这意味着你依然需要为嵌套的列表项目添加类。

`````html
<ul>
  <li>条目 #1</li>
  <li>条目 #2
    <ul>
      <li>条目 #1</li>
      <li>条目 #2
        <ul>
          <li>条目 #1</li>
          <li>条目 #2</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>条目 #3</li>
  <li>条目 #4</li>
</ul>
`````
```html
<ul>
  <li>...</li>
  <li>...
    <ul>
      <li>
        <ul>
          <li>...</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

__有序列表（`<ol>`）：__ 定义一个 __有__ 明确重要性的项目列表。

`````html
<ol>
  <li>条目 #1</li>
  <li>条目 #2
    <ol>
      <li>条目 #1</li>
      <li>条目 #2
        <ol>
          <li>条目 #1</li>
          <li>条目 #2</li>
        </ol>
      </li>
    </ol>
  </li>
  <li>条目 #3</li>
  <li>条目 #4</li>
</ol>
`````
```html
<ol>
  <li>...</li>
  <li>...
    <ol>
      <li>
        <ol>
          <li>...</li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
```

__内联列表__(`.list-inline`)：

设置 `display:inline-block` 及内边距，把所有的列表项目放在单个行内。

`````html
<ul class="list-inline">
  <li>首页</li>
  <li>前端开发</li>
  <li>项目研究</li>
  <li>关于我们</li>
</ul>
`````
```html
<ul class="list-inline">
  <li>...</li>
  <li>...</li>
</ul>
```

__字符表示法：__ 页面字体为宋体 `\5b8b\4f53` 时，使用 `&bull;` 可全兼容实现 ul 列表项前的点（&bull;）效果如下：


`````html
<ul class="list-unstyled">
  <li>• <a href="http://notepad-plus-plus.org/">Notepad++ 挺好</a></li>
  <li>• <a href="http://www.sublimetext.com/2">Sublime Text2 也不错</a></li>
  <li>• <a href="http://emmet.io/download/">配合 Zen-Coding 简直爽歪歪（现改名 emmet）</a></li>
  <li>• <a href="https://atom.io/">ATOM 虽然启动很慢，也还不错啦</a></li>
</ul>
`````
```html
<hr/>
```

__定义列表(`<dl>`)：__ 对一个列表（或条目）进行关联描述

`````html
<dl>
  <dt>描述列表</dt>
  <dd>适用于术语的定义/解释</dd>
  <dt>响应式网页设计</dt>
  <dd>自适应网页设计（英语：Responsive web design，通常缩写为RWD）是一种网页设计的技术做法，该设计可使网站在多种浏览设备（从桌面电脑显示器到移动电话或其他移动产品设备）上阅读和导航，同时减少缩放、平移和滚动。</dd>
  <dt>响应式网页设计（RWD）的元素</dt>
  <dd>采用 RWD 设计的网站 使用 CSS3 Media queries，即一种对 @media 规则的扩展，以及流式的基于比例的网格和自适应大小的图像以适应不同大小的设备。</dd>
</dl>
`````
```html
<dl>
  <dt>计算机</dt>
  <dd>用来计算的仪器...</dd>
  <dt>显示器</dt>
  <dd>以视觉方式显示信息的装置...</dd>
</dl>
```

__横向描述(`.dl-horizontal`)：__ 使 `<dl>` 中的每个条目和描述同一对一水平显示。在小分辨率下堆叠显示。

`````html
<dl class="dl-horizontal">
  <dt class="col-sm-3">Coffee</dt>
  <dd class="col-sm-9">Black hot drink. A drink made from the roasted and ground beanlike seeds of a tropical shrub, served hot or iced</dd>
  <dt class="col-sm-3">Milk</dt>
  <dd class="col-sm-9">White cold drink. An opaque white fluid rich in fat and protein, secreted by female mammals for the nourishment of their young</dd>
</dl>
`````
```html
<dl class="dl-horizontal">
  <dt class="col-sm-3">描述列表</dt>
  <dd class="col-sm-9">适用于术语的定义/解释</dd>
</dl>
```


### 表格 `<table>`

这里只是 normalize 以后的样式，更多样式查看 [Table 组件](/css/table)。

`````html
<table>
  <caption>表格标题</caption>
  <thead>
    <tr>
      <th>表头 #1</th>
      <th>表头 #2</th>
      <th>表头 #3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>数据 #1</td>
      <td>数据 #2</td>
      <td>数据 #3</td>
    </tr>
    <tr>
      <td>数据 #1</td>
      <td>数据 #2</td>
      <td>数据 #3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>表页脚 #1</td>
      <td>表页脚 #2</td>
      <td>表页脚 #3</td>
    </tr>
  </tfoot>
</table>
`````
```html
<table>
  <caption>...</caption>
  <thead>
    <tr>
      <th>...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>...</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>...</td>
    </tr>
  </tfoot>
</table>
```

### TYPO.CSS 排版偏重点

以下摘自 `typo.css` 有改动

<table class="table" summary="TYPO.CSS 排版偏重点">
  <thead>
    <tr>
      <th>类型</th>
      <th>语义</th>
      <th>标签</th>
      <th>注意点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="14">基础标签</th>
      <td>标题</td>
      <td><code>h1</code> ～ <code>h6</code></td>
      <td>保持粗体，设置了边距，且标题与其对应的内容应紧贴；<br/><code>&lt;h1&gt;</code> 为正常字号的 1.5 倍；<code>&lt;h2&gt;</code> 为正常字号的 1.25 倍；其他保持正常字号。</td>
    </tr>
    <tr>
      <td>上、下标</td>
      <td><code>sup</code>/<code>sub</code></td>
      <td title="<sup>这个标签在向文档添加脚注以及表示方程式中的指数值时非常有用。如果和<a>标签结合起来使用，就可以创建出很好的超链接脚注。<sub>在数学等式、科学符号和化学公式中都非常有用。">保持与 MicroSoft Office Word 等程序的日常排版一致。</td>
    </tr>
    <tr>
      <td>引用</td>
      <td><code>blockquote</code></td>
      <td>显示/嵌套样式</td>
    </tr>
    <tr>
      <td>缩写</td>
      <td><code>abbr</code></td>
      <td>统一都有下划线，鼠标 <code>hover</code> 为帮助手势</td>
    </tr>
    <tr>
      <td>分割线</td>
      <td><code>hr</code></td>
      <td>显示的 <code>padding</code> 和 <code>margin</code>正确</td>
    </tr>
    <tr>
      <td>列表</td>
      <td><code>ul</code>/<code>ol</code>/<code>dl</code></td>
      <td>发布版无 <code>list-style</code>及间距等，开发版与 <code>.typo</code> 中保持默认样式</td>
    </tr>
    <tr>
      <td>定义列表</td>
      <td><code>dl</code></td>
      <td>内置默认列表描述（<code>block</code>）属性及横向描述 <code>.dl-hor</code>  <code>.dl-horizontal</code> 样式 </td>
    </tr>
    <tr>
      <td>斜体</td>
      <td><code>em</code></td>
      <td>用 <em>斜体字</em> 强调一段文本，只设置此一种斜体，让 <code>i</code> 和  <code>cite</code> 显示为正体</td>
    </tr>
    <tr>
      <td>强调</td>
      <td><code>i</code></td>
      <td>显示为正体（lvmama中大量用于组合功能 如：<code>dfn&gt;i</code> 的组合<dfn>¥<i>300</i>起</dfn>）</td>
    </tr>
    <tr>
      <td>加强</td>
      <td><code>strong/b</code></td>
      <td><strong>表示强调</strong>，<b>显示为粗体</b></td>
    </tr>
    <tr>
      <td>标记</td>
      <td><code>mark</code></td>
      <td><mark><code>mark</code> 标签，类似荧光笔 background: #ff0;</mark></td>
    </tr>
    <tr>
      <td>印刷</td>
      <td><code>small</code></td>
      <td><small>保持为页面字体的 80% 大小，颜色设置为浅灰色 #333</small></td>
    </tr>
    <tr>
      <td>表格</td>
      <td><code>table</code></td>
      <td>全局不显示线条，在 <code>typo</code> 中显示表格外框，并且表头有浅灰背景（同 <code>.table-info</code>）</td>
    </tr>
    <tr>
      <td>代码</td>
      <td><code>pre</code>/<code>code</code></td>
      <td>字体使用 <code>courier</code> 系字体，保持与 <code>serif</code> 有比较一致的显示效果，详见 <code>code.css</code></td>
    </tr>
    <tr>
      <th rowspan="5">特殊符号</th>
      <td>点</td>
      <td>•  &amp;bull;</td>
      <td>字体为宋体 <code>\5b8b\4f53</code> 时，使用 <code>&amp;bull;</code> 可全兼容实现列表项前的点 •</td>
    </tr>
    <tr>
      <td>专名号</td>
      <td><u>sofish</u></td>
      <td>专名号，有下划线，可使用 <code>u</code> 或 <code>.typo-u</code> 类，此处直接指定<b>暂不</b>使用此标签。</td>
    </tr>
    <tr>
      <td>破折号</td>
      <td>——</td>
      <td>保持一划，而非两划</td>
    </tr>
    <tr>
      <td>人民币</td>
      <td><dfn>¥ / ¥</dfn></td>
      <td>使用两平等线的符号（需设置Arial字体），或者 HTML 实体符号 <code>&amp;yen;</code></td>
    </tr>
    <tr>
      <td>删除符</td>
      <td><del>已删除（deleted）</del></td>
      <td>一致化的删除符效果，中英混排正确</td>
    </tr>
    <tr>
      <th rowspan="4">加强类</th>
      <td>专名号</td>
      <td><code>.typo-u</code></td>
      <td>由于 <code>u</code> 被 HTML4 放弃，在向后兼容上推荐使用 <code>class="typo-u" …</code>，暂时我们不使用</td>
    </tr>
    <tr>
      <td>着重符</td>
      <td><code>.typo-em</code></td>
      <td>在文字下加点（•），利用 <code>:after</code> 和 <code>:before</code> 在浏览器上渐进增强实现着重符</td>
    </tr>
    <tr>
      <td>首字下沉</td>
      <td><code>.typo-first</code></td>
      <td>特殊排版</td>
    </tr>
    <tr>
      <td>清除浮动</td>
      <td><code>.clearfix</code></td>
      <td>与一般 CSS Reset 保持一对致 API</td>
    </tr>
    <tr>
      <th rowspan="5">注意点</th>
      <td colspan="3">（1）中英文混排行高/行距</td>
    </tr>
    <tr>
      <td colspan="3">（2）上下标在 IE 中显示效果</td>
    </tr>
    <tr>
      <td colspan="3">（3）块/段落分割空白是否符合设计原则</td>
    </tr>
    <tr>
      <td colspan="3">（4）input 多余空白问题</td>
    </tr>
    <tr>
      <td colspan="3">（5）默认字体色彩，目前采用 <code>#333</code> 在各种浏览显示比较好</td>
    </tr>
  </tbody>
</table>

<table class="am-table am-table-bordered am-table-hover am-table-striped">
  <thead>
  <tr>
    <th>元素</th>
    <th>基本样式</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td><code>&lt;a&gt;</code></td>
    <td><a href="#">这是一个超链接</a></td>
  </tr>
  <tr>
    <td><code>&lt;em&gt;</code></td>
    <td><em>我在 em 元素里</em></td>
  </tr>
  <tr>
    <td><code>&lt;strong&gt;</code></td>
    <td><strong>strong 元素，壮吧</strong></td>
  </tr>
  <tr>
    <td><code>&lt;code&gt;</code></td>
    <td><code>行内代码</code></td>
  </tr>
  <tr>
    <td><code>&lt;del&gt;</code></td>
    <td><del>在我的胸口划一刀</del></td>
  </tr>
  <tr>
    <td><code>&lt;ins&gt;</code></td>
    <td><ins>强势插入的元素</ins></td>
  </tr>
  <tr>
    <td><code>&lt;mark&gt;</code></td>
    <td><mark>我被贴上 mark 标签了</mark></td>
  </tr>
  <tr>
    <td><code>&lt;q&gt;</code></td>
    <td><q>我在 q 元素里面 <q>q 元素里面的 q元素</q> q 元素</q></td>
  </tr>
  <tr>
    <td><code>&lt;abbr&gt;</code></td>
    <td>响应式设计缩写 <abbr title="Responsive web design">RWD</abbr></td>
  </tr>
  <tr>
    <td><code>&lt;dfn&gt;</code></td>
    <td>定义一个东西 <dfn title="Enjoy your music, photos and videos, anywhere anytime">DLNA</dfn></td>
  </tr>
  <tr>
    <td><code>&lt;small&gt;</code></td>
    <td><small>我比别人小一些</small></td>
  </tr>
  </tbody>
</table>

### 响应式排版

<em>响应排版</em>是指在一系列媒体查询中，通过调整根元素的 `font-size`，缩放文本和组件。样式库没有为你做这些，但是你需要的话，添加它很简单。

这里有个实践例子。选择你想要的任意 `font-size` 以及媒体查询。

```css
html {
  font-size: 14px;
}

@include media-breakpoint-up(sm) {
  html {
    font-size: 16px;
  }
}

@include media-breakpoint-up(md) {
  html {
    font-size: 20px;
  }
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 28px;
  }
}
```

## 排版应用

充足的弹性，才能满足多变的需求。

`````html
<blockquote class="blockquote">
  <h3>古文排版一用 <small>充分使用原始标签实现排版</small></h3>
  <p>《学而》是《论语》第一篇的篇名。《论语》中各篇一般都是以第一章的前二三个字作为该篇的篇名。《学而》一篇包括16章，内容涉及诸多方面。其中重点是“吾日三省吾身”；“节用而爱人，使民以时”；“礼之用，和为贵”以及仁、孝、信等道德范畴。 </p>
  <blockquote class="blockquote">
    <p>子曰<sup><a href="#note1">[1]</a></sup>：“学<sup><a href="#note2">[2]</a></sup>而时习<sup><a href="#note3">[3]</a></sup>之，不亦说<sup><a href="#note4">[4]</a></sup>乎？有朋<sup><a href="#note5">[5]</a></sup>自远方来，不亦乐<sup><a href="#note6">[6]</a></sup>乎？人不知<sup><a href="#note7">[7]</a></sup>，而不愠<sup><a href="#note8">[8]</a></sup>，不亦君子<sup><a href="#note9">[9]</a></sup>乎？” </p>
    <footer>作者：<abbr title="名丘，字仲尼">孔子</abbr>（<time>前551年9月28日－前479年4月11日</time>）<cite title="论语">《论语学而篇》</cite></footer>
  </blockquote>
  <h4>注释</h4>
  <p class="small">
    <span id="note1">[1]</span> 子：中国古代对于有地位、有学问的男子的尊称，有时也泛称男子。《论语》书中“子曰”的子，都是指孔子而言。<br>
    <span id="note2">[2]</span> 学：孔子在这里所讲的“学”，主要是指学习西周的礼、乐、诗、书等传统文化典籍。 <br>
    <span id="note3">[3]</span> 时习：在周秦时代，“时”字用作副词，意为“在一定的时候”或者“在适当的时候”。但朱熹在《论语集注》一书中把“时”解释为“时常”。“习”，指演习礼、乐；复习诗、书。也含有温习、实习、练习的意思。 <br>
    <span id="note4">[4]</span> 说：音ｙｕè，同悦，愉快、高兴的意思。 <br>
    <span id="note5">[5]</span> 有朋：一本作“友朋”。旧注说，“同门曰朋”，即同在一位老师门下学习的叫朋，也就是志同道合的人。 <br>
    <span id="note6">[6]</span> 乐：与说有所区别。旧注说，悦在内心，乐则见于外。 <br>
    <span id="note7">[7]</span> 人不知：此句不完整，没有说出人不知道什么。缺少宾语。一般而言，知，是了解的意思。人不知，是说别人不了解自己。 <br>
    <span id="note8">[8]</span> 愠：音ｙùｎ，恼怒，怨恨。 <br>
    <span id="note9">[9]</span> 君子：《论语》书中的君子，有时指有德者，有时指有位者。此处指孔子理想中具有高尚人格的人。
  </p>
  <h4>译文</h4>
  <p>孔子说：“学了又时常温习和练习，不是很愉快吗？有志同道合的人从远方来，不是很令人高兴的吗？人家不了解我，我也不怨恨、恼怒，不也是一个有德的君子吗？” </p>
  <h4>评析</h4>
  <p>宋代著名学者<u title="字元晦，又字仲晦，号晦庵，晚称晦翁，谥文，世称朱文公。">朱熹</u>对此章评价极高，说它是<strong>“入道之门，积德之基”</strong>。本章这三句话是人们非常熟悉的。历来的解释都是：学了以后，又时常温习和练习，不也高兴吗等等。三句话，一句一个意思，前后句子也没有什么连贯性。但也有人认为这样解释不符合原义，指出这里的“学”不是指学习，而是指学说或主张；“时”不能解为时常，而是时代或社会的意思，“习”不是温习，而是使用，引申为采用。而且，这三句话不是孤立的，而是前后相互连贯的。这三句的意思是：<em>自己的学说，要是被社会采用了，那就太高兴了；退一步说，要是没有被社会所采用，可是很多朋友赞同<abbr title="张燕婴">我</abbr>的学说，纷纷到我这里来讨论问题，我也感到快乐；再退一步说，即使社会不采用，人们也不理解我，我也不怨恨，这样做，不也就是君子吗？</em>（见《齐鲁学刊》1986年第6期文）这种解释可以自圆其说，而且也有一定的道理，供读者在理解本章内容时参考。</p>
  <p>此外，在对“人不知，而不愠”一句的解释中，也有人认为，“人不知”的后面没有宾语，人家不知道什么呢？当时因为孔子有说话的特定环境，他不需要说出知道什么，别人就可以理解了，却给后人留下一个谜。有人说，这一句是接上一句说的，从远方来的朋友向我求教，我告诉他，他还不懂，我却不怨恨。这样，“人不知”就是“人家不知道我所讲述的”了。这样的解释似乎有些牵强。</p>
  <p>总之，本章提出以学习为乐事，做到人不知而不愠，反映出孔子学而不厌、诲人不倦、注重修养、严格要求自己的主张。这些思想主张在《论语》书中多处可见，有助于对第一章内容的深入了解。</p>
  <footer>此示例摘自 <abbr title="花名小鱼">sofish</abbr> 的 <a href="http://typo.sofish.de/">typo.css</a> (<time>2013-10-04</time>)</footer>
</blockquote>
`````
