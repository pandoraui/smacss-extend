---
layout: docs
title: 基础设置
titleEn: Base
group: content
---

基础设置定义的一些基础样式。此文档取自 amazeui。

## CSS 盒模型

曾几何时，IE 6 及更低版本的___非标准___盒模型被喷得体无完肤。IE 原来的盒模型真的不好么？最终，时间给了另外一个答案。
W3C 终认识到所谓标准盒模型在实际使用中的复杂性，于是在 CSS3 中增加 `box-sizing` 这一属性，允许用户自定义盒模型。

<blockquote class="blockquote">
<p><strong>You tell me I'm wrong, Then you better prove you're right.</strong></p>
<footer><cite title="King of Pop – Scream">King of Pop – Scream</cite></footer>
</blockquote>

这就是 W3C 的证明。

扯远了，样式库将所有元素的盒模型设置为 `border-box`。这下好了，妈妈再也不用担心你没计算好 `padding`、`border` 而使布局破相了。咱来写样式，不是来学算术。

```css
 *,
 *:before,
 *:after {
   -moz-box-sizing: border-box;
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
 }
```

盒模型区别示例：

`````html
<style type="text/css">
.box-sizing-border-box,
.box-sizing-content-box {
  display: inline-block;
  white-space: nowrap;
  font-size: 0.75rem;
  margin: 20px;
  padding: 20px;
  border: 20px solid #FCD7D7;
  box-shadow: inset 20px 20px #C9F8F3,
              inset -20px -20px #C9F8F3,
              20px 20px #FCEED7,
              -20px 20px #FCEED7,
              20px -20px #FCEED7,
              -20px -20px #FCEED7;
}
.box-sizing-border-box i,
.box-sizing-content-box i{
  color: #f00;
}
.box-sizing-border-box {
  box-sizing: border-box;
  width: 180px;
  height: 180px;
}
.box-sizing-content-box {
  box-sizing: content-box;
  width: 100px;
  height: 100px;
}
</style>
<span class="box-sizing-border-box">
<i>box-sizing: border-box</i><br>
<b>默认 W3c</b><br>
width: 180px<br>
height: 180px<br>
</span>
<span class="box-sizing-content-box">
<i>box-sizing: content-box</i><br>
<b>css3 新增-IE</b><br>
width: 100px<br>
height: 100px<br>
</span>
<pre>
//借用 box-shadow 不同颜色展示 margin 和 padding 区域。

display: inline-block;
margin: 20px;
padding: 20px;
border: 20px solid #FCD7D7;

//核心区别：整体宽度计算方法不同
//border-box 模型的 width 是总宽，包含 border 和 padding 的宽度。
//content-box 模型的 width 仅仅是内容宽度，型如其名。
</pre>
`````


参考链接：

- https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
- http://www.paulirish.com/2012/box-sizing-border-box-ftw/
- [Box Sizing](http://css-tricks.com/box-sizing/)


## 字号及单位

样式库将浏览器的基准字号设置为 `16px`（有些浏览器默认不是 16px），现在 `1rem = 16px` —— 为了计算方便，可以使用下面最常用的值。

```css
html {
  font-size: 16px;
}

body {
  font-size: 0.875rem; /* 14px */
}

0.125rem  2px
0.25rem   4px
0.5rem    8px

0.75rem   12px
0.875rem  14px
1rem      16px
1.125rem  18px
1.25rem   20px
1.5rem    24px
2rem      32px
```

__方便计算，为什么不使用基准 10px？__有些浏览器最低不支持10px，结果设置后不同设备上有的浏览器基准竟然变成了 12px，影响了上层布局，这不能接受。

与 `em` 根据上下文变化不同，`rem` 只跟基准设置关联，只要修改基准字号，所有使用 `rem` 作为单位的设置都会相应改变。

当然，并非所有所有浏览器的默认字号都是 `16px`，所以在不同的浏览器上会有细微差异。

另外，一些需要根据字号做相应变化的场景也使用了 `em`，需要像素级别精确的场景也使用了 `px`。

__参考资源：__

- [FONT SIZING WITH REM](http://snook.ca/archives/html_and_css/font-size-with-rem)
- [Type study: Sizing the legible letter](http://blog.typekit.com/2011/11/09/type-study-sizing-the-legible-letter/)
- [The rem checker](https://offroadcode.com/prototypes/rem-calculator/)
- [Mixins for Rem Font Sizing](http://css-tricks.com/snippets/css/less-mixin-for-rem-font-sizing/)
