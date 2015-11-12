---
layout: docs
title: 实用工具类
titleEn: Utility classes
group: components
---

提供十几个实用工具类，各有各的目的。它们的设计用途是在你的CSS中减少高度重复的声明的频率，让开发更快捷和简单。

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## 间距

用缩写的类向一个元素或者它的边的子集分配 `margin` 或者 `padding` 属性。包括支持单个属性、所有属性，以及垂直或水平属性。所有的类都使用全局默认的长度倍数：`1rem`。


### 外边距 Margin

```css
.m-a-0 { margin:        0 !important; }
.m-t-0 { margin-top:    0 !important; }
.m-r-0 { margin-right:  0 !important; }
.m-b-0 { margin-bottom: 0 !important; }
.m-l-0 { margin-left:   0 !important; }
.m-x-0 { margin-right:  0 !important; margin-left:   0 !important; }
.m-y-0 { margin-top:    0 !important; margin-bottom: 0 !important; }

.m-a { margin:        $spacer !important; }
.m-t { margin-top:    $spacer-y !important; }
.m-r { margin-right:  $spacer-x !important; }
.m-b { margin-bottom: $spacer-y !important; }
.m-l { margin-left:   $spacer-x !important; }
.m-x { margin-right:  $spacer-x !important; margin-left: $spacer-x !important; }
.m-y { margin-top:    $spacer-y !important; margin-bottom: $spacer-y !important; }
.m-x-auto { margin-right: auto !important; margin-left: auto !important; }

.m-a-md { margin:        ($spacer * 1.5) !important; }
.m-t-md { margin-top:    ($spacer-y * 1.5) !important; }
.m-r-md { margin-right:  ($spacer-y * 1.5) !important; }
.m-b-md { margin-bottom: ($spacer-y * 1.5) !important; }
.m-l-md { margin-left:   ($spacer-y * 1.5) !important; }
.m-x-md { margin-right:  ($spacer-x * 1.5) !important; margin-left:   ($spacer-x * 1.5) !important; }
.m-y-md { margin-top:    ($spacer-y * 1.5) !important; margin-bottom: ($spacer-y * 1.5) !important; }

.m-a-lg { margin:        ($spacer * 3) !important; }
.m-t-lg { margin-top:    ($spacer-y * 3) !important; }
.m-r-lg { margin-right:  ($spacer-y * 3) !important; }
.m-b-lg { margin-bottom: ($spacer-y * 3) !important; }
.m-l-lg { margin-left:   ($spacer-y * 3) !important; }
.m-x-lg { margin-right:  ($spacer-x * 3) !important; margin-left:   ($spacer-x * 3) !important; }
.m-y-lg { margin-top:    ($spacer-y * 3) !important; margin-bottom: ($spacer-y * 3) !important; }
```

### 内填充 Padding

```css
.p-a-0 { padding:        0 !important; }
.p-t-0 { padding-top:    0 !important; }
.p-r-0 { padding-right:  0 !important; }
.p-b-0 { padding-bottom: 0 !important; }
.p-l-0 { padding-left:   0 !important; }
.p-x-0 { padding-left:   0 !important; padding-right: 0 !important; }
.p-y-0 { padding-top:    0 !important; padding-bottom: 0 !important; }

.p-a { padding:        $spacer !important; }
.p-t { padding-top:    $spacer-y !important; }
.p-r { padding-right:  $spacer-x !important; }
.p-b { padding-bottom: $spacer-y !important; }
.p-l { padding-left:   $spacer-x !important; }
.p-x { padding-right:  $spacer-x !important; padding-left:   $spacer-x !important; }
.p-y { padding-top:    $spacer-y !important; padding-bottom: $spacer-y !important; }

.p-a-md { padding:        ($spacer * 1.5) !important; }
.p-t-md { padding-top:    ($spacer-y * 1.5) !important; }
.p-r-md { padding-right:  ($spacer-y * 1.5) !important; }
.p-b-md { padding-bottom: ($spacer-y * 1.5) !important; }
.p-l-md { padding-left:   ($spacer-y * 1.5) !important; }
.p-x-md { padding-right:  ($spacer-x * 1.5) !important; padding-left:   ($spacer-x * 1.5) !important; }
.p-y-md { padding-top:    ($spacer-y * 1.5) !important; padding-bottom: ($spacer-y * 1.5) !important; }

.p-a-lg { padding:        ($spacer * 3) !important; }
.p-t-lg { padding-top:    ($spacer-y * 3) !important; }
.p-r-lg { padding-right:  ($spacer-y * 3) !important; }
.p-b-lg { padding-bottom: ($spacer-y * 3) !important; }
.p-l-lg { padding-left:   ($spacer-y * 3) !important; }
.p-x-lg { padding-right:  ($spacer-x * 3) !important; padding-left:   ($spacer-x * 3) !important; }
.p-y-lg { padding-top:    ($spacer-y * 3) !important; padding-bottom: ($spacer-y * 3) !important; }
```


## 文本对齐

使用文本对齐类，可以方便地将文本重新对齐。

`````html
<p class="text-left">左对齐</p>
<p class="text-center">居中对齐</p>
<p class="text-right">右对齐</p>
<p class="text-justify">两端对齐</p>
<p class="text-nowrap">强制不换行</p>
`````
```html
<p class="text-left">左对齐</p>
<p class="text-center">居中对齐</p>
<p class="text-right">右对齐</p>
<p class="text-justify">两端对齐</p>
<p class="text-nowrap">强制不换行</p>
```

## 文本转变

使用文字大小写设定类，可以转换文本大小写。

`````html
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
`````
```html
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
```

## 通过颜色来强调文本

用少量的颜色强调实用工具类传达意思。它们同样会被应用在链接上，当鼠标悬停在链接上时会加深字色，就像默认的链接样式那样。

`````html
<p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
<p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
<p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
<p class="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
`````
```html
<p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
<p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
<p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
<p class="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
```

与上下文语境字色类相似，对一个元素使用上下文语境类可以轻松设置一个元素的底色。鼠标悬停在链接上时将会加深字色，就和文字类差不多。

`````html
<div class="bg-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</div>
<div class="bg-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</div>
<div class="bg-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</div>
<div class="bg-warning">Etiam porta sem malesuada magna mollis euismod.</div>
<div class="bg-danger">Donec ullamcorper nulla non metus auctor fringilla.</div>
<div class="bg-inverse">Cras mattis consectetur purus sit amet fermentum.</div>
`````
```html
<div class="bg-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</div>
<div class="bg-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</div>
<div class="bg-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</div>
<div class="bg-warning">Etiam porta sem malesuada magna mollis euismod.</div>
<div class="bg-danger">Donec ullamcorper nulla non metus auctor fringilla.</div>
<div class="bg-inverse">Cras mattis consectetur purus sit amet fermentum.</div>
```

`````html-info
#### 处理特殊性

有时候不能应用上下文语境类，因为另一个选择器的特殊性。在一些情形中，一个满足需要的变通是把内容包括在一个 `<div>` 中，用上这个类。
`````

`````html-warning
#### 向辅助技术传达意义

确保任何通过颜色传达的意义也能通过某种并非纯视觉的形式传达。
`````

## 关闭图标

使用一个通用的关闭图标来抹除内容，比如说模态框或alert。__确保尽可能地包含了屏幕阅读器文本__，我们用 `.sr-only` 做到它。

`````html
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
  <span class="sr-only">关闭</span>
</button>
`````
```html
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
  <span class="sr-only">关闭</span>
</button>
```

## 浮动

用一个类把一个元素向左或向右浮动。包含了 `!important` 以避免特殊性问题。这些类也可以用作mixins。

`````html
<div class="pull-left">Float left</div>
<div class="pull-right">Float right</div>
`````
```html
<div class="pull-left">Float left</div>
<div class="pull-right">Float right</div>
```

```css
// Classes
.pull-left {
  float: left !important;
}
.pull-right {
  float: right !important;
}

// Usage as mixins
.element {
  @include pull-left;
}
.another-element {
  @include pull-right;
}
```

## 内容居中

把一个元素设置为 `display: block`，并利用 `margin` 居中。这也可以用作mixin或类。

`````html
<div class="center-block">Centered block</div>
`````
```html
<div class="center-block">Centered block</div>
```

```css
// Class
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

// Usage as a mixin
.element {
  @include center-block;
}
```

向父元素添加 `.clearfix` 类可以轻松清除 `float`。利用 Nicolas Gallagher 发布的[the micro clearfix](http://nicolasgallagher.com/micro-clearfix-hack/)。这也可以用作mixin。

`````html
<div class="clearfix">...</div>
`````
```html
<div class="clearfix">...</div>
```

```css
// Mixin itself
.clearfix() {
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
}

// Usage as a mixin
.element {
  @include clearfix;
}
```

## 隐藏内容

用 `[hidden]` 属性可以隐藏任何HTML元素。以前，v3.x 包含了一个 `.hidden` 类，强制隐藏。然而，由于其与jQuery的 `hide()`函数存在冲突，我们移除了它。它来自于[PureCSS](http://purecss.io/)。因为IE9-10并不原生支持 `[hidden]`，所以在我们的CSS中对它声明了 `display: none` 来绕过这个问题。

`````html
<input type="text" hidden>
`````
```html
<input type="text" hidden>
```

## 不可见的内容

此外，`.invisible` 可以用来改变元素的可见性，意味着它的 `display` 没有被修改，而且这个元素仍然可以影响文档流。

`````html
<div class="invisible">...</div>
`````
```html
<div class="invisible">...</div>
```

```css
// Class
.invisible {
  visibility: hidden;
}

// Usage as a mixin
.element {
  .invisible();
}
```

## 屏幕阅读器

使用 `.sr-only` 可以对所有的设备隐藏某个元素，除了在屏幕阅读器里。组合使用 `.sr-only` 以及 `.sr-only-focusable` 可以让元素获得焦点时再次显示元素（即，键盘的用户用Tab键使它获得焦点）。它也可以用作mixins。


`````html-comment
必要参考如下[无障碍最佳实践](../getting-started/#accessibility).
`````

```html
<a class="sr-only sr-only-focusable" href="#content">跳过主要内容</a>
```
```css
// Usage as a mixin
.skip-navigation {
  @include sr-only;
  @include sr-only-focusable;
}
```


## 图片替换

利用 `.text-hide` 类或者mixin可以帮助用一个背景图片替换一个元素的文本内容。

`````html
<h1 class="text-hide">自定义标题</h1>
`````
```html
<h1 class="text-hide">自定义标题</h1>
```

```css
// Usage as a mixin
.heading {
  @include text-hide;
}
```

## 响应式嵌入

创建一个可以适应任何设备的尺寸的内在的比率，允许浏览器基于容器块的宽度确定视频或幻灯片的大小。

规则可以直接应用在 `<iframe>`、`<embed>`、`<video>` 和 `<object>` 元素上。如果你想要为别的属性匹配样式，视情况添加一个明确的后代类 `.embed-responsive-item`。

__编辑建议！__你不需要在 `<iframe>` 中包含 `frameborder="0"`，因为我们已经为你覆盖掉它了。

`````html
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="//www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
`````
```html
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="//www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
```

长宽比，可定制的修饰符的类。

```html
<!-- 21:9 aspect ratio -->
<div class="embed-responsive embed-responsive-21by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 4:3 aspect ratio -->
<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>
```

## HTML5 `[hidden]` attribute

HTML5 adds [a new global attribute named `[hidden]`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden), which is styled as `display: none` by default. Borrowing an idea from [PureCSS](http://purecss.io), we improve upon this default by making `[hidden] { display: none !important; }` to help prevent its `display` from getting accidentally overridden. While `[hidden]` isn't natively supported by IE9-10, the explicit declaration in our CSS gets around that problem.

{% highlight html %}
<input type="text" hidden>
{% endhighlight %}

{% callout warning %}
#### jQuery incompatibility

`[hidden]` is not compatible with jQuery's `$(...).hide()` and `$(...).show()` methods. This could potentially change in jQuery 3, but we're not holding our breath. Therefore, we don't currently especially endorse `[hidden]` over other techniques for managing the `display` of elements.
{% endcallout %}

To merely toggle the visibility of an element, meaning its `display` is not modified and the element can still affect the flow of the document, use [the `.invisible` class](#invisible-content) instead.
