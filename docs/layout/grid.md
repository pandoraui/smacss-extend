---
layout: docs
title: 网格系统
titleEn: Grid system
group: layout
---

Bootstrap包含了一个强大的移动优先的网格系统，用来创建各种形状和尺寸的布局。它基于一个12列的布局，有很多的等级，为每个媒体查询范围创建了一个[区间]({{ site.baseurl }}/layout/overview/#responsive-breakpoints)。你可以与Sass mixins配合使用它，或者与我们预定义的类配合使用它。


## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## 工作机制

在一个较高的水平，下面介绍下网格系统的工作原理：

- 总共有三个主要的组件：容器、行和列。
- 容器——`.container` 实现固定的宽度，`.container-fluid` 实现全宽度，会将你的页面的内容居中，帮助你对齐网格系统。
- 行是列的横向组合，确保适当地排列你的列。
- 内容必须放置在列中，而且只有列可以是行的直接子元素。
- 列类表明你想要占用的列的数量，每行最多可用12列。所以如果你想用三个等宽列，你可以使用 `.col-sm-4`。
- 列的 `width` 是用百分比设置的。所以它们总是是流式的，而且尺寸与父元素相关。
- 列拥有水平的 `padding`，以创建列与列之间的间隙。
- 总共有五个网格等级，每个[响应式分界点]({{ site.baseurl }}/layout/overview/#responsive-breakpoints)隔出一个等级：特小，小，中，大，特大。
- 网格等级基于宽度的最小值，意味着它们应用到某一等级以及这一等级之上的所有（比如，`.col-sm-4` 应用到小、中、大、特大设备）
- 要更多的语义标记，你可以使用预定义的网格类或者Sass mixins实现。

听起来不错？很好，那么让我们在一个实例中进一步学习吧。

## 快速开始示例

如果你正在使用 Bootstrap编译好的CSS, 就从下面的例子开始吧！

`````html
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      One of three columns
    </div>
    <div class="col-sm-4">
      One of three columns
    </div>
    <div class="col-sm-4">
      One of three columns
    </div>
  </div>
</div>
`````
```html
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      One of three columns
    </div>
    <div class="col-sm-4">
      One of three columns
    </div>
    <div class="col-sm-4">
      One of three columns
    </div>
  </div>
</div>
```

上面的例子中，使用[预定义网格类](#predefined-classes)，在小屏、中等屏、大屏、特大屏的设备创建了三个等宽的列。这些列和父 `.container` 位于页面的中央。


## 网格选项

通过一个简单的表格查看Bootstrap的网格系统在多种设备上的工作的方方面面：

While Bootstrap uses `em`s or `rem`s for defining most sizes, `px`s are used for grid breakpoints and container widths.
This is because the viewport width is in pixels and does not change with the [font size](https://drafts.csswg.org/mediaqueries-3/#units).

See how aspects of the Bootstrap grid system work across multiple devices with a handy table.

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th></th>
        <th class="text-center">
          Extra small<br>
          <small>&lt;544px</small>
        </th>
        <th class="text-center">
          Small<br>
          <small>&ge;544px</small>
        </th>
        <th class="text-center">
          Medium<br>
          <small>&ge;768px</small>
        </th>
        <th class="text-center">
          Large<br>
          <small>&ge;992px</small>
        </th>
        <th class="text-center">
          Extra large<br>
          <small>&ge;1200px</small>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-nowrap" scope="row">Grid behavior</th>
        <td>Horizontal at all times</td>
        <td colspan="4">Collapsed to start, horizontal above breakpoints</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Container width</th>
        <td>None (auto)</td>
        <td>576px</td>
        <td>720px</td>
        <td>940px</td>
        <td>1140px</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Class prefix</th>
        <td><code>.col-xs-</code></td>
        <td><code>.col-sm-</code></td>
        <td><code>.col-md-</code></td>
        <td><code>.col-lg-</code></td>
        <td><code>.col-xl-</code></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row"># of columns</th>
        <td colspan="5">12</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Gutter width</th>
        <td colspan="5">1.875rem / 30px (15px on each side of a column)</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Nestable</th>
        <td colspan="5">Yes</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Offsets</th>
        <td colspan="5">Yes</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Column ordering</th>
        <td colspan="5">Yes</td>
      </tr>
    </tbody>
  </table>
</div>

## Sass mixins

When using Bootstrap's source Sass files, you have the option of using Sass variables and mixins to create custom, semantic, and responsive page layouts. Our [predefined grid classes](#predefined-classes) use these same variables and mixins to provide a whole suite of ready-to-use classes for fast responsive layouts.

### Variables

Variables determine the number of columns, the gutter width, and the media query point at which to begin floating columns. We use these to generate the predefined grid classes documented above, as well as for the custom mixins listed below.

```scss
$grid-breakpoints: (
  // Extra small screen / phone
  xs: 0,
  // Small screen / phone
  sm: 544px,
  // Medium screen / tablet
  md: 768px,
  // Large screen / desktop
  lg: 992px,
  // Extra large screen / wide desktop
  xl: 1200px
) !default;


$grid-columns:      12;
$grid-gutter-width: 1.875rem;
```

### Mixins

Mixins are used in conjunction with the grid variables to generate semantic CSS for individual grid columns.

```scss
// Creates a wrapper for a series of columns
@mixin make-row($gutter: $grid-gutter-width) {
  margin-left:  ($gutter / -2);
  margin-right: ($gutter / -2);
  @include clearfix();
}

// Make the element grid-ready (applying everything but the width)
@mixin make-col($gutter: $grid-gutter-width) {
  position: relative;
  float: left;
  min-height: 1px;
  padding-left:  ($gutter / 2);
  padding-right: ($gutter / 2);
}

// Set a width (to be used in or out of media queries)
@mixin make-col-span($columns) {
  width: percentage(($columns / $grid-columns));
}

// Get fancy by offsetting, or changing the sort order
@mixin make-col-offset($columns) {
  margin-left: percentage(($columns / $grid-columns));
}
@mixin make-col-push($columns) {
  left: percentage(($columns / $grid-columns));
}
@mixin make-col-pull($columns) {
  right: percentage(($columns / $grid-columns));
}
```

### Example usage

You can modify the variables to your own custom values, or just use the mixins with their default values. Here's an example of using the default settings to create a two-column layout with a gap between.

See it in action in <a href="http://jsbin.com/ruxona/edit">this rendered example</a>.

```scss
.container {
  max-width: 60em;
  @include make-container();
}
.row {
  @include make-row();
}
.content-main {
  @include make-col();

  @media (max-width: 32em) {
    @include make-col-span(6);
  }
  @media (min-width: 32.1em) {
    @include make-col-span(8);
  }
}
.content-secondary {
  @include make-col();

  @media (max-width: 32em) {
    @include make-col-span(6);
  }
  @media (min-width: 32.1em) {
    @include make-col-span(4);
  }
}
```

```html
<div class="container">
  <div class="row">
    <div class="content-main">...</div>
    <div class="content-secondary">...</div>
  </div>
</div>
```

## Predefined classes

In addition to our semantic mixins, Bootstrap includes an extensive set of prebuilt classes for quickly creating grid columns. It includes options for device-based column sizing, reordering columns, and more.

### Example: Stacked-to-horizontal

Using a single set of `.col-md-*` grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any `.row`.

<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
</div>
<div class="row">
  <div class="col-md-8">.col-md-8</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
  <div class="col-md-6">.col-md-6</div>
  <div class="col-md-6">.col-md-6</div>
</div>
{% endexample %}
</div>

### Example: Mobile and desktop

Don't want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding `.col-xs-*` and `.col-md-*` to your columns. See the example below for a better idea of how it all works.

<div class="bd-example-row">
{% example html %}
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="row">
  <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="row">
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="row">
  <div class="col-xs-6">.col-xs-6</div>
  <div class="col-xs-6">.col-xs-6</div>
</div>
{% endexample %}
</div>

### Example: Mobile, tablet, desktop

Build on the previous example by creating even more dynamic and powerful layouts with tablet `.col-sm-*` classes.

<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col-xs-12 col-sm-6 col-md-8">.col-xs-12 .col-sm-6 .col-md-8</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
</div>
<div class="row">
  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
  <!-- Optional: clear the XS cols if their content doesn't match in height -->
  <div class="clearfix hidden-sm-up"></div>
  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
</div>
{% endexample %}
</div>

### Example: Column wrapping

If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.

<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col-xs-9">.col-xs-9</div>
  <div class="col-xs-4">.col-xs-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
  <div class="col-xs-6">.col-xs-6<br>Subsequent columns continue along the new line.</div>
</div>
{% endexample %}
</div>

### Example: Responsive column resets

With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix that, use a combination of a `.clearfix` and our [responsive utility classes]({{ site.baseurl }}/layout/responsive-utilities/).

<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>

  <!-- Add the extra clearfix for only the required viewport -->
  <div class="clearfix hidden-sm-up"></div>

  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
</div>
{% endexample %}
</div>

In addition to column clearing at responsive breakpoints, you may need to **reset offsets, pushes, or pulls**. See this in action in [the grid example]({{ site.baseurl }}/examples/grid/).

<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
  <div class="col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0">.col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0</div>
</div>

<div class="row">
  <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
  <div class="col-sm-6 col-md-5 col-md-offset-2 col-lg-6 col-lg-offset-0">.col-sm-6 .col-md-5 .col-md-offset-2 .col-lg-6 .col-lg-offset-0</div>
</div>
{% endexample %}
</div>

### Example: Offsetting columns

Move columns to the right using `.col-md-offset-*` classes. These classes increase the left margin of a column by `*` columns. For example, `.col-md-offset-4` moves `.col-md-4` over four columns.

<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 col-md-offset-4">.col-md-4 .col-md-offset-4</div>
</div>
<div class="row">
  <div class="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
  <div class="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
</div>
<div class="row">
  <div class="col-md-6 col-md-offset-3">.col-md-6 .col-md-offset-3</div>
</div>
{% endexample %}
</div>

### Example: Nesting columns

To nest your content with the default grid, add a new `.row` and set of `.col-sm-*` columns within an existing `.col-sm-*` column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).

<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col-sm-9">
    Level 1: .col-sm-9
    <div class="row">
      <div class="col-xs-8 col-sm-6">
        Level 2: .col-xs-8 .col-sm-6
      </div>
      <div class="col-xs-4 col-sm-6">
        Level 2: .col-xs-4 .col-sm-6
      </div>
    </div>
  </div>
</div>
{% endexample %}
</div>

### Example: Column ordering

Easily change the order of our built-in grid columns with `.col-md-push-*` and `.col-md-pull-*` modifier classes.

<div class="bd-example-row">
{% example html %}
<div class="row">
  <div class="col-md-9 col-md-push-3">.col-md-9 .col-md-push-3</div>
  <div class="col-md-3 col-md-pull-9">.col-md-3 .col-md-pull-9</div>
</div>
{% endexample %}
</div>
