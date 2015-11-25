---
layout: docs
title: 概述
titleEn: Overview
group: layout
redirect_from: "/layout/"
---

该样式库，出自 Bootstrap，稍作中文化调整。其中包含了一些供项目使用的组件和选项，包括外包裹容器、网格系统、以及灵活多变的媒体对象和响应式的工具类。

## 样式概述

样式库文件 SASS 源码大致分为六部分（参照 SMACSS 层次划分，稍作调整）。

- Base 基础样式 使用 reboot 统一浏览器差异，以及一些基础的元素样式（含 normalize）。
- Layout 布局样式 包含用于布局的 Grid、AVG Grid，以及一些辅助 Class。
- Elements 元素样式 对 `code`、`form`、`table` 等 HTML 元素定义更多的样式。
- Components 组件样式，定义网页中常用的、多个元素组合在一起的组件样式，如分页，面包屑导航等。
- States 状态样式 定义不同状态需要的样式，打印样式等。
- Themes 主题样式 通过设定色系，尺寸，排版，实现不同的主题，如 bootstrap、pure 等。

### 浏览器前缀

移除所有标准属性的浏览器前缀，构建时通过 [AutoPrefixer](https://github.com/postcss/autoprefixer) 自动添加。

当前的 AutoPrefixer 浏览器支持设置为：

```js
[
  'ie >= 8',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 2.3',
  'bb >= 10'
]
```

## 容器 Containers

窗口是最基本的布局元素。**在使用网格系统中它是必不可少的。**选择一个响应式的、固定宽度的容器（意味着它的 `max-width` 在每个节点都会改变），或者选择一个流式宽度的窗口（意味着任何时候它的宽度总是 `100%`）。

虽然容器**可以**被嵌套，但是大多数布局并不需要嵌套。

`````html
<div class="bd-example-container">
  <div class="bd-example-container-header"></div>
  <div class="bd-example-container-sidebar"></div>
  <div class="bd-example-container-body"></div>
</div>
`````
```html
<div class="container">
  <!-- Content here -->
</div>
```

使用 `.container-fluid` 类可以显示为全宽容器，在浏览器中扩展到整个宽度。

`````html
  <div class="bd-example-container bd-example-container-fluid">
    <div class="bd-example-container-header"></div>
    <div class="bd-example-container-sidebar"></div>
    <div class="bd-example-container-body"></div>
  </div>
`````
```html
<div class="container-fluid">
  ...
</div>
```


## 响应式断点

因为 Bootstrap 基于移动优先的原则开发，所以使用了一系列的[媒体查询](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries)，给我们的布局和界面创建感应性的分界点。这些分界点主要是基于视口宽度的最小值，并且当窗口视图改变的时候允许元素缩放。

目前对大于 1200px 的屏幕并没有做划分，虽然现在大屏显示器越来越多，但是设计一个过宽的网页对用户来说并不友好，用户眼睛左右移动的区间太大，浏览起来比较累。当然，一些特殊类型（购物、视频等）的网站例外。

在Sass源文件中，为了实现布局、网格系统以及组件，首先使用下面的媒体查询范围——或者说分界点：


```css
// 超小型设备 (小屏手机, < 34em)
// 没有媒体查询，这个作为样式库默认设置

// 小型设备 (大屏手机, >= 34em)
@media (min-width: 34em) { ... }

// 中型设备 (平板, >= 48em)
@media (min-width: 48em) { ... }

// 大型设备 (桌面屏幕, >= 62em)
@media (min-width: 62em) { ... }

// 超大型设备 (超大屏幕, >= 75em)
@media (min-width: 75em) { ... }
```


因为已经写入Sass源文件中，所有的媒体查询都可通过Sass mixins使用。

```css
@include media-breakpoint-up(xs) { ... }
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }

// Example usage:
@include media-breakpoint-up(sm) {
  .some-class {
    display: block;
  }
}
```


偶尔也使用其它的媒体查询（比如：针对给定的屏幕尺寸或更小屏幕）：

```css
// 超小型设备 (小屏手机, < 33.9em)
@media (max-width: 33.9em) { ... }

// 小型设备 (大屏手机, < 47.9em)
@media (max-width: 47.9em) { ... }

// 中型设备 (平板, < 61.9em)
@media (max-width: 61.9em) { ... }

// 大型设备 (桌面屏幕, < 74.9em)
@media (max-width: 74.9em) { ... }

// 超大型设备 (超大屏幕)
// 没有媒体查询，因为超大型设备的宽度没有上限
```

并且，这些媒体查询也可以通过Sass mixins使用：

```css
@include media-breakpoint-down(xs) { ... }
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
```
