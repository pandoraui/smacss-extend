# 样式文件引用

使用软链接 ln –s 源文件 目标文件

```
ln -s ~/github/pandoraui/smacss-extend/src/_style/ _style
```

## 整体结构如下：

本是想写一个符合 SMACSS 的样式实现，但实现时，又觉得太过细分了，又看了 BEM，觉得其实现有可能让人疑惑到底该选择那种链接符，我认为无思考，就是优良实现，最终调整为四层实现 base core extend theme。



#### 结构说明

  - 文件结构命名全用单数形式
  - 递进实现
    - _helper 助手
      - _function  为最底层函数，定义了 px2rem size等基础函数，在 var 变量定义中已有使用
      - _mixin     mixin 方法，且包含 mixin文件夹，其中收纳很多有用的设定，可选用
    - base/   包含 vender 等
    - core/   核心文件，并实现基本的功能，类似 pure，可基于此扩展，定制自己需要的组件库
    - extend/ 包含各种组件的扩展，别名 component
    - theme/  主题设定
    - 其他
      - var
      - gray
      - status
      - fixed
  - 样式命名同样全用单数
  - 取消 element/ 相关文件，收纳到 core/typo 排版文件中


```
/_helper
  /_mixin
  function
  animation
  mixin.scss
      index

_gray
_var
          _help_var.scss

/base

  _vender_normalize
  _vender_reboot
  _base
  _tool
      index

/core
  element
  typography
  _table
  _button
  _form
  _grid
  _menu
      index
/extend
  各种组件、扩展
      index

/theme
  /default
    custom
    _icon
    smacss


status
bugs
          output
```


## 一些说明

关于状态 status，收集了一些公共状态，如 block，radius，round，link，disabled 等，但还有 :hover :active 这些状态，无法全局设置，也许后面研究下滤镜没准可以实现个全局设定，这里暂定此种状态，:hover 时变亮，:active 时变暗。

## 样式组件结构

```
// 举例

@mixin component-style($color, $background, $border: transparent) {
  @include component-color($background; $color; $border);

  &:hover {
    @include component-color(islight($background, 20%); islight($color, 20%); islight($border, 20%));
  }

  &:active,
  &.active {
    @include component-color(darken($background, 5%); darken($color, 5%); darken($border, 5%));
  }
}

@mixin component-color($color, $background,  $border: transparent) {
  color: $color;
  border-color: $border;
  background-color: $background;
}

@mixin component-size(
    $padding: $component-padding,
    $font-size: $font-size-base,
    $line-height: $line-height-base) {

  padding: $padding;
  font-size: $font-size;
  line-height: $line-height;
}

@mixin component-group() {

}

// 基础样式
%button {

}
```
