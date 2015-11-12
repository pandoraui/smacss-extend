---
layout: docs
title: 弹性盒
titleEn: Flexbox
group: getting-started
---

终于支持了弹性盒。只需用少量变量或者交换一下样式表就可以使用这个崭新的CSS布局样式。

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## 它包含了什么？

在一系列Bootstrap的组件中，弹性盒支持都是可用的。

- 整个网格系统（混合和预定义的类），`float` 变换成 `display: flex;`。
- 输入框组，由 `display: table;` 变成 `display: flex;`。
- 媒体组件 `display: table;` 和一系列hacky样式变换到简单的 `display: flex;`。

通过Gulp，我们编译的 CSS 里面通过 Autoprefixer 提供第三方前缀。

## 为什么要用弹性盒？

一言蔽之，flexbox在CSS中提供了更加简单、灵活多变的布局选项，更具体一点，它提供了下面这些：

- 在父元素里面内容的简单的垂直对齐。
- 通过使用媒体查询，可以简单的根据设备和屏幕分辨率来对内容重新排序。
- 只用 CSS 在网格系统中实现等高列的布局。

所有这些东西不用弹性盒也能够实现，但是通常需要使用额外的hacks以及变通来实现它。


## 工作机制

如果你对在Sass中修改变量很熟悉，或者对其它CSS预处理器很熟悉，那么你将能够自如地迁移到弹性盒模型。

1 打开 `_variables.scss` 这个文件，找到 `$enable-flex` 这个变量。
2 把值由 `false` 改为 `true`。
3 重新编译，搞定了！

此外，如果你不需要Sass的源代码文件，默认的Bootstrap编译的CSS你可以替换掉编译的弹性盒变量。[前往下载页面]({{ site.baseurl }}/getting-started/download)以了解更多信息。

## 浏览器支持

启用弹性盒意味着__减少了支持的浏览器和设备__：

- Internet Explorer 9 及其以下不支持弹性盒。
- Internet Explorer 10 有一些已知的问题（在 [Can I use…](http://caniuse.com/#feat=flexbox) 的 “已知问题”标签里面），需要使用 prefix，这只支持老的 2012 版本语法。

当你在你的项目中启用弹性盒的时候请务必注意你的用户群体。访问 [Can I use…](http://caniuse.com/#feat=flexbox) 来了解更多浏览器对弹性盒的支持细节。
