---
layout: docs
title: 介绍
titleEn: Introduction
group: getting-started
redirect_from: "/getting-started/"
---

Bootstrap 是当前世界最受欢迎的用于建立响应式、移动设备优先的站点和应用的框架。在其中，你将发现高质量的HTML、CSS以及JavaScript，使你的工程项目变得无比简单。

下面教你如何快速上手这个样式库，并建立一个模板化的起始页面。

## 开始之前

很多时候，我们选择使用一个样式库，尤其是在一个长期且自定义控制的项目中，我们面临的不仅仅是要使用，还要定制需求，难免发生改动，这要求我们要知道里面的设定，为什么如此？

所谓知其然亦知其所以然。所以在开始之前，规范的文档有必要指出为什么这么设定！！！

- 可维护性第一

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
<!-- *toc -->
{:toc}


## 快速开始

想要快速地把BootStrap添加到你的工程项目中？那就使用Bootstrap CDN吧，它由 MaxCDN 提供。想使用一个程序包管理器或者想下载源文件？ [前往下载页面]({{ site.baseurl }}/getting-started/download)。

Looking to quickly add Bootstrap to your project? Use the Bootstrap CDN, provided for free by the folks at MaxCDN. Using a package manager or need to download the source files? [Head to the downloads page.]({{ site.baseurl }}/getting-started/download)

复制下面的 `<link>` 样式表粘贴到你的网页的` <head>` 里面，放在在其他样式表文件之前。

```html
<link rel="stylesheet" href="{{ site.cdn.css }}">
```

把这个JavaScript插件以及JQuery放在你的网页的末尾附近，就在 `</body>` 标签前面。记住需要先添加jQuery，因为我们的代码依赖于它。

```html
<script src="{{ site.cdn.jquery }}"></script>
<script src="{{ site.cdn.js }}"></script>
```

这就行了——你已经迈步走上了创建完全使用Bootstrap站点的道路。如果你对一般的页面结构还不是很熟悉的话，请继续参看一些网页模板案例的代码。

## 起始模板

确保你的网页是建立在最新的设计和开发标准之上的。这意味着：

- 使用HTML5文档类型
- 强制Internet Explorer使用最新的渲染模式（[详情](http://stackoverflow.com/q/6771258)）
- 然后，使用视口meta标签


页面代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ site.cdn.css }}">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <!-- jQuery first, then Bootstrap JS. -->
    <script src="{{ site.cdn.jquery }}"></script>
    <script src="{{ site.cdn.js }}"></script>
  </body>
</html>
```

这是就你需要完成的页面配置。请参阅[布局文档]({{ site.baseurl }}/layout/overview)[或者官方案例]({{ site.baseurl }}/examples/)来布置你的站点内容和元件。


## 重要使命

Bootstrap使用了少数重要的全局样式和设置。在使用过程中，你需要留意：一旦用了它，所有这些几乎都是导致跨浏览器的风格__标准化__。让我们深入了解它们：

### HTML5文档类型

Bootstrap要求使用HTML5文档类型。没有它，你就会看到一些并不完整的样式。只有把它包含进去才不会造成显著的问题。

```html
<!DOCTYPE html>
<html lang="en">
  ...
</html>
```

### 响应式meta标签

基于__移动设备优先__的原则开发了Bootstrap，基于这个原则我们先为移动设备优化代码，然后使用CSS媒体查询来扩大组件。为了确保所有的设备的渲染和触摸效果，必须给网页的 `<head>` __添加响应式的视图标签__。

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

你可以在[起始模板](#starter-template)中看到这样的一个例子：


### 合模型

为了更直观地用CSS设置尺寸，我们把将全局 `box-sizing` 的值改成了 `border-box`（原本值是 `content-box`）。这就保证了 `padding` 不会影响一个元素的最后计算宽度。但是它将导致一些问题，比如说第三方软件谷歌地图以及谷歌自定义搜索引擎出问题。

在极少数情况下你需要推翻它，你可以这么写：

```css
.selector-for-some-widget {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
}
```

用了上面的代码片段，所有嵌套在内的元素——包括通过 `:before` 以及 `:after` 生产的内容，都会继承 `.selector-for-some-widget` 所指定的 `box-sizing`。

点此可以解更多关于[盒模型和用CSS制定尺寸的技巧](https://css-tricks.com/box-sizing/)的知识。


### Normalize.css

为了改进跨浏览器渲染效果，我们使用了 [Normalize.css](http://necolas.github.io/normalize.css/) 来校正不同设备和浏览器之间的细小的不一致。之后我们会基于它创建 [Reboot]({{ site.baseurl }}/content/reboot/) 来创造出我们自己的、稍微有点固执己见的样式风格。


## Community

Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources.

- Follow [@getbootstrap on Twitter](https://twitter.com/getbootstrap).
- Read and subscribe to [The Official Bootstrap Blog](http://blog.getbootstrap.com).
- Join [the official Slack room](https://bootstrap-slack.herokuapp.com).
- Chat with fellow Bootstrappers in IRC. On the `irc.freenode.net` server, in the `##bootstrap` channel.
- Implementation help may be found at Stack Overflow (tagged [`bootstrap-4`](https://stackoverflow.com/questions/tagged/bootstrap-4)).
- Developers should use the keyword `bootstrap` on packages which modify or add to the functionality of Bootstrap when distributing through [npm](https://www.npmjs.com/browse/keyword/bootstrap) or similar delivery mechanisms for maximum discoverability.

You can also follow [@getbootstrap on Twitter](https://twitter.com/getbootstrap) for the latest gossip and awesome music videos.
