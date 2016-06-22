# 样式文件引用

使用软链接 ln –s 源文件 目标文件

```
ln -s ~/github/pandoraui/smacss-extend/src/_style/ _style
```

## 整体结构如下：【命名全为单数形式】

```
/_helper
  mixin
  function
  *placeholder
  animation
      index

_gray
_var
          _help_var.scss

/_vendor

  normalize
  reboot
      index

/base
  base
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
/component
  各种组件
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
