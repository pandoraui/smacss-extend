---
layout: docs
title: 图片
titleEn: Images
group: content
---

定义图片样式，添加响应式的行为优化图片（使它们绝不会大过其父元素），并通过样式类给它添加轻量级的样式。

注意：

## 目录

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## 基础样式

基础样式定义在 `reboot` 中。

```css
img {
  /* 全局 img 属性移除以下代码，详见 img max-width100% 引起地图不显示图片 */
  /* max-width: 100%;*/
  vertical-align: middle;
}
```

<del>曾经 `<img>` 设置 `max-width: 100%`，图片会自动适应到容器的宽度（且不会超过图片原始宽度），不需要添加额外的 class。如果要让图片始终和容器一样宽，需要设置 width: 100%。</del>

为什么取消以上属性？参见：[img max-width100% 引起地图不显示图片](https://github.com/amazeui/amazeui/issues/502)，有影响的地图：百度、高德、腾讯，[DEMO](http://bin.amazeui.org/xehugufogu/1/)

现改为在需要时自己添加响应式图片类。

## 响应式图片

给图片应用 `.img-reponsive` 类以及 `max-width: 100%;`、`height: auto;` 样式使其具有响应性，并根据父元素的大小缩放。

`````html
<img data-src="holder.js/100px250" class="img-fluid" alt="通用响应式图片">
`````
```html
<img src="..." class="img-fluid" alt="响应式图片">
```

`````html-warning
#### SVG images and IE 9-10

在IE9和IE10浏览器中，带着 `.img-responsive` 类的SVG图片是尺寸不均称的。为了修正它，在必要的地方添加 `width: 100% \9` 属性。由于它会导致其它图片格式的混乱，所以样式库没有默认应用它。
`````

## 图片增强样式

给一个 `<img>` 元素添加类，轻松地在项目中样式化图片。

- `.img-rounded` 圆角
- `.img-circle` 正圆形，一般用于正方形的图片
- `.img-thumbnail` 带边框

`````html
<img data-src="holder.js/200x200" class="img-rounded" alt="圆角图片">
<img data-src="holder.js/200x200" class="img-circle" alt="正圆形图片">
<img data-src="holder.js/200x200" class="img-thumbnail" alt="带边框图片">
`````
```html
<img src="..." alt="..." class="img-rounded">
<img src="..." alt="..." class="img-circle">
<img src="..." alt="..." class="img-thumbnail">
```

## 图片对齐方式

使用[浮动助手类]({{ site.baseurl }}/components/utilities/#floats)或者[文本对齐类]({{ site.baseurl }}/components/utilities/#text-alignment)可以实现图片对齐。一个简单的居中类也可以用在 `block` 块级图片上。

`````html
<img data-src="holder.js/200x200" class="img-rounded pull-left" alt="圆角图片">
<img data-src="holder.js/200x200" class="img-rounded pull-right" alt="圆角图片">
`````
```html
<img src="..." class="img-rounded pull-left" alt="...">
<img src="..." class="img-rounded pull-right" alt="...">
```

`````html
<img data-src="holder.js/200x200" class="img-rounded center-block" style="display: block;" alt="圆角图片">
`````
```html
<img src="..." class="img-rounded center-block" style="display: block;" alt="...">
```

`````html
<div class="text-center">
  <img data-src="holder.js/200x200" class="img-rounded" alt="圆角图片">
</div>
`````
```html
<div class="text-center">
  <img src="..." class="img-rounded" alt="...">
</div>
```
