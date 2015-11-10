---
layout: docs
title: 代码
titleEn: Code
group: content
---

定义代码样式，用于显示行内代码片断以及更长的、多行代码段。


## 行内代码 (`<code>`)

使用 `<code>` 标签包裹行内代码片段。别忘了转移 HTML 尖括号。

`````html
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
`````
```html
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
```


## 预格式化文本 (`<pre>`)

多行的代码文本，请使用 `<pre>` 标签，再次提型别忘了转义。

`````html
<pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>
`````
```html
<pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>
```


## 代码块高度

你可以视情况添加 `.pre-scrollable` 类，它将设置最大高度为350像素，并提供一个纵向滚动条。

`````html
<pre class="pre-scrollable">
.#{$ns}btn {
  display: inline-block;
  vertical-align: middle;
  font-weight: $btn-font-weight;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  border: $border-width solid transparent;
  @include button-size($btn-padding-y, $btn-padding-x, $font-size-base, $line-height, $btn-border-radius);
  @include transition(all .2s ease-in-out);

  &,
  &:active,
  &.#{$ns}active {
    &:focus,
    &.#{$ns}focus {
      @include tab-focus();
    }
  }

  @include hover-focus {
    text-decoration: none;
  }
  &.#{$ns}focus {
    text-decoration: none;
  }

  &:active,
  &.#{$ns}active {
    background-image: none;
    outline: 0;
    @include box-shadow(inset 0 3px 5px rgba(0,0,0,.125));
  }

  &.#{$ns}disabled,
  &:disabled,
  fieldset[disabled] & {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events
    pointer-events: none; // Disable mouse events
    
    cursor: $cursor-disabled;
    opacity: .65;
    @include box-shadow(none);
  }
}
</pre>
`````
```html
<pre class="pre-scrollable">
...
</pre>
```

## 变量 (`<var>`)

请用 `<var>` 标签标示变量。

`````html
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
`````
```html
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
```


## 用户输入 (`<kbd>`)

使用 `<kbd>` 来标示输入，一般是通过键盘输入的。

`````html
<p>切换文件目录，请键入 <kbd>cd</kbd> 紧跟要切换的目录。</p>
<p>要更改设置，请键入  <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd></p>
`````
```html
切换文件目录，请键入 <kbd>cd</kbd> 紧跟要切换的目录。
要更改设置，请键入  <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
```


## 示例输出 (`<samp>`)

用于标示程序示例的输出块，请使用 `<samp>` 标签。

`````html
<samp>Hello world.</samp>
`````
```html
<samp>Hello world.</samp>
```

## 参考链接

### 轻量级的代码高亮插件

- [google-code-prettify](https://github.com/google/code-prettify)
- [highlight.js](https://highlightjs.org/)
- [Rainbow](http://craig.is/making/rainbows)
