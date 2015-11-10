---
layout: docs
title: Reboot
group: content
redirect_from: "/content/"
---

Reboot 提供一个优雅、简洁的基准，以此为基础进行项目开发。

Reboot 构建在 normalize 之上，规范统一 html 标签的自有属性，而额外的样式通过类来规范。例如，设置 `<table>` 提供基础样式，基础之上构建提供了 `.table`、`.table-bordered` 等样式。

以下内容，除基础部分，其他将迁移到 Content 的具体分类中。

## 目录

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## 规划

这里是我们在重置中选择覆盖掉哪些的指导方针和理由：

- 更新一些浏览器默认值，使用 `rem` 代替 `em` 用于指定可缩放的组件的间隙。
- 避免使用 `margin-top`。使用它，垂直外边距可以崩溃，导致意想不到的结果。更重要的是，一个单一方向的 `margin` 是一个简单的构思模型。
- 为了易于跨设备缩放，块元素必须使用 `rem` 作为 `margin` 的单位。
- 保持 `font` 相关属性最小的声明，尽可能地使用 `inherit`。

## 页面默认值

更新了 `<html>` 和 `<body>` 元素，提供更好的默认页面宽度。具体如下：

- 全局性地将每一个元素的 `box-sizing` 属性——包括 `*:before` 和 `*:after` ——都设置为 `border-box`。这样确保了声明的宽度不会因为 `border` 或 `padding` 而超过。
- 针对通过媒体查询的易响应型缩放，`<html>` 上面声明了一个基本的 `font-size: 16px`，而且 `<body>` 上面声明了一个 `font-size: 1rem`。
- `<body>` 还设置了一个全局性的 `font-family` 以及 `line-height`，之后一些表单元素继承了它，以防止字体大小矛盾。
- 为了安全，`<body>` 有一个网页背景色 `background-color` 声明，默认为 `#fff`。

## 标题和段落

所有的标题元素，比如说 `<h1>`以及 `<p>` 都被重置，移除了它们的上外边距 `margin-top`。标题添加外边距为 `margin-bottom: .5rem`，段落元素 `<p>` 添加了外边距 `margin-bottom:1rem` 以形成简单间距。

`````html
`````


## 列表

所有的列表——`<ul>`、`<ol>`以及 `<dl>`——移除了它们的外边距 `margin-top`，并设置了 `margin-bottom: 1rem`。嵌套的列表没有 `margin-bottom`。

`````html
`````

为了得到更简单的样式、清晰的等级以及更好的间距，描述列表 `<dl>` 有了一个更新的 `margin` 值。`<dd>` 的 `margin-left` 被重置为0，添加了 `margin-bottom: .5rem`。`<dt>` 的字体为粗体。


## 预格式化文本 (`<pre>`)

重置了 `<pre>` 元素，移除了它的 `margin-top` 并用 `rem` 作为 `margin-bottom` 的单位。

`````html
<pre>
window.addEventListener('load', function() {
  FastClick.attach(document.body);
}, false);
</pre>
`````


## 表格 (`<table>`)

微调了表格的样式 `<caption>`，而且确保了 `text-align` 文本对齐始终一致。另外，边框、内边距也有变化，详参 [`.table` 实现]({{ site.baseurl }}/content/tables/)。




## 表单 (`<form>`)

各种表单元素重置为更简单的样式，最明显的几点变化如下：

- `<fieldset>` 没有边框、内填充、外边距，所以它们可以轻松地用作单一的输入框或者输入框组的外包装。
- `<legend>` 和 fieldset 一样，已经被重新设计过，显示为不同种类的标题。
- `<label>` 被设置为 `display: inline-block` 以允许应用 `margin`。
- `<input>`、`<select>`、`<textarea>` 以及 `<button>` 基本本来都被规范化处理了，但是重置移除了它们的 `margin`，并且设置了 `inline-height: inherit`。
- `<textarea>` 被修改为只能竖直方向上调整大小，因为水平方向上调整大小经常会“破坏”页面布局。

这些变化等等，请看下面示例。

`````html
<form>
  <fieldset>
    <legend>示例 legend</legend>
    <p>
      <label for="input">示例 input 文本框</label>
      <input type="text" id="input" placeholder="请输入姓名">
    </p>
    <p>
      <label for="select">示例 select</label>
      <select id="select">
        <option value="">请选择...</option>
        <optgroup label="选项组 1">
          <option value="">选项 1</option>
          <option value="">选项 2</option>
          <option value="">选项 3</option>
        </optgroup>
        <optgroup label="选项组 2">
          <option value="">选项 4</option>
          <option value="">选项 5</option>
          <option value="">选项 6</option>
        </optgroup>
      </select>
    </p>
    <p>
      <label>
        <input type="checkbox" value="">
        复选框
      </label>
    </p>
    <p>
      <label>
        <input type="radio" name="sex" id="" value="男" checked>
        单选框 男
      </label><br>
      <label>
        <input type="radio" name="sex" id="" value="女">
        单选框 女
      </label><br>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
        单选框（禁用）
      </label>
    </p>
    <p>
      <label for="textarea">示例 textarea 文本域</label>
      <textarea id="textarea" rows="3"></textarea>
    </p>
    <p>
      <label for="time">示例 temporal</label>
      <input type="datetime" id="time">
    </p>
    <p>
      <label for="output">示例 output</label>
      <output name="result" id="output">100</output>
    </p>
    <p>
      <button type="submit">Button submit 按钮</button>
      <input type="submit" value="Input submit 按钮">
      <input type="button" value="Input button 按钮">
    </p>
    <p>
      <button type="submit" disabled>Button submit 禁用</button>
      <input type="submit" value="Input submit 禁用" disabled>
      <input type="button" value="Input button 禁用" disabled>
    </p>
  </fieldset>
</form>
`````


## 杂项元素

### Address

更新了 `<address>` 元素，重置了浏览器默认的 `font-style`，由 `italic` 改为 `normal`。`line-height` 同样是继承来的，并添加了 `margin-bottom: 1rem`。`<address>` 是为最靠近祖先元素（或整个正文）提供联系信息。用 `<br>`结束行可保持格式。

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

### 引用 (`<blockquote>`)

引用块的默认属性 `margin`是 `1em 40px`。所以我们把它重置为 `0 0 1rem`，使其与其它元素更一致。


`````html
<blockquote class="blockquote">
  <p>远看山有色，近听水无声。春去花还在，人来鸟不惊。</p>
  <footer>王维<cite title="《画》">《画》</cite></footer>
</blockquote>
`````

### 内联元素

`<abbr>` 元素接受基本的样式，使其在段落文本中突出。

`````html
响应式设计缩写 <abbr title="Responsive web design">RWD</abbr>
`````
