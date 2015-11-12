---
layout: docs
title: 按钮
titleEn: Buttons
group: components
redirect_from: "/components/"
---

按钮是一个基础的组件，很多场合都会用到，如表单、对话框等。样式库支持一系列支持，可控制按钮颜色、尺寸、状态等等。

具体的参数有：颜色，尺寸，风格，圆角，状态(激活、禁用)，按钮 ICON，单选按钮，复选按钮。

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## 示例

样式库包含 N 种预定义的按钮样式，每种样式都与其语义相符合。

`````html
<button type="button" class="btn btn-default">默认样式</button>

<!-- 提供视觉行为，标识主要操作-->
<button type="button" class="btn btn-primary">主色按钮</button>

<!-- 次级操作 -->
<button type="button" class="btn btn-secondary">次色按钮</button>

<!-- 标识成功或积极的行动 -->
<button type="button" class="btn btn-success">绿色按钮</button>

<!-- 标识信息，提醒消息 -->
<button type="button" class="btn btn-info">Info</button>

<!-- 标识警告，应谨慎采取这一行动 -->
<button type="button" class="btn btn-warning">Warning</button>

<!-- 标识危险或潜在有负面影响的行为 -->
<button type="button" class="btn btn-danger">Danger</button>

<!-- 使它看起来像一个连接，并淡化按钮 -->
<button type="button" class="btn btn-link">链接</button>
<a class="btn btn-link">链接</a>

<a class="btn btn-link" href="http://www.baidu.com">应用按钮样式的链接</a>
`````

`````html-warning
#### 向使用辅助技术的人传达含义

对一个按钮使用色彩以添加其含义，只是提供了视觉表达，但是不会传达给使用辅助技术的用户——比如说使用屏幕阅读器的用户。请确保按钮自身的内容（即按钮上的文本）也表达了这些由颜色表达出来的信息，或者通过替补的文字表达它，比如说添加额外的文本，用 `.sr-only` 类隐藏它。
`````

## 按钮标签

`.btn` 类本是设计用在 `<button>` 元素上的。然而，你同样可以在 `<a>` 或者 `<input>` 元素上使用这个类（虽然一些浏览器可能产生稍微不同的外观）。

如果在 `<a>` 元素上使用按钮类，这个 `<a>` 只能用来触发页面内的功能（比如折叠内容），而不是链接到一个新页面或者当前页面的另一章节。这些链接必须给一个 `role="button"` 从而向使用辅助技术（比如屏幕阅读器）的用户恰当地传达它们的目的。

`````html
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
`````


## 描边按钮

需要一个按钮，但是不要他们自带的背景颜色？请用 `.btn-*-outline` 代替默认的修饰类，移除这些按钮上面的所有的背景底图和底色。

`````html
<button type="button" class="btn btn-primary-outline">Primary</button>
<button type="button" class="btn btn-secondary-outline">Secondary</button>
<button type="button" class="btn btn-success-outline">Success</button>
<button type="button" class="btn btn-info-outline">Info</button>
<button type="button" class="btn btn-warning-outline">Warning</button>
<button type="button" class="btn btn-danger-outline">Danger</button>
`````


## 按钮尺寸

更喜欢大一点或者小一点的按钮？给按钮添加 `.btn-lg` 或者 `.btn-sm` 类以实现别的尺寸大小。

`````html
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
`````

`````html
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
`````

给按钮添加 `.btn-block` 类，可以创建一个块区域按钮——即那种延展到父元素全宽的按钮。

`````html
<button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
<button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
`````

## 激活状态

激活的按钮将呈现按下的外观（一个更深的底色、更深的边框，以及嵌入的影子）。__没有必要为 `<button>` 添加一个类，因为他们使用伪类__。然而，如果你需要程序化重设按钮的状态，你还可以用 `.active`（以及 `aria-pressed="true"` 属性）强迫按钮呈现激活的外观。

`````html
<a href="#" class="btn btn-primary btn-lg active" role="button">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg active" role="button">Link</a>
`````

## 禁用状态

给任何 `<button>` 元素添加 `disabled` 布尔属性，能使按钮呈现禁用状态。

`````html-warning
__注意！__ IE 9以及更低的版本会把禁用的按钮的文字渲染成灰色的、带阴影的文字，这个我们改变不了。
`````

`````html
<button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
`````

因为 `<a>` 元素不支持 `disabled` 属性，所以你必须添加 `.disabled` 类以伪装它。

`````html
<a href="#" class="btn btn-primary btn-lg disabled" role="button">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg disabled" role="button">Link</a>
`````

`````html-warning
#### 链接功能警告

这个类使用 `pointer-events:none` 会试图禁用 `<a>` 的链接功能。但是那个CSS特性还没有标准化，因此在Opera 18以及以下版本中不完全支持，IE 11中也没有完全支持。另外，即使在支持 `pointer-events: none` 的浏览器中，键盘导航依然不受影响。这意味着不盲的键盘用户以及使用辅助技术的用户依然能够激活那些链接。所以为了安全起见，使用自定义JavaScript来禁用这些链接吧。
`````

## 按钮插件

还可以对按钮做更多。可以控制按钮的状态或者为更多组件创建按钮组，像工具栏之类的。

### 切换状态

添加 `data-toggle="button"` 以切换一个按钮的 `active` 状态。如果你想提前切换一个按钮的状态，你必须为 `<button>`人为添加 `.active` 类以及 `aria-pressed="true"`。

`````html
<button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
  Single toggle
</button>
`````

### 复选按钮和单选按钮

`.button` 样式可以应用到别的元素上，比如说 `<label>`，它提供了复选框或单选钮切换。在一个包含了那些按钮的 `.btn-group` 上添加 `data-toggle="button"`，可以在他们各自的样式中启用切换。

这些按钮的checked状态__只能通过按钮上的 `click` 事件更新__。如果你使用别的方法更新这个按钮——比如说，用 `<input type="reset">` 或者手动修改输入控件的 `checked` 属性——你就必须手动切换 `<label>` 的 `.active` 类。

注意：提前选中的按钮要求你手动在输入控件的 `<label>` 上添加 `.active` 类。

`````html
<div class="btn-group" data-toggle="buttons">
  <label class="btn btn-primary active">
    <input type="checkbox" checked autocomplete="off"> Checkbox 1 (pre-checked)
  </label>
  <label class="btn btn-primary">
    <input type="checkbox" autocomplete="off"> Checkbox 2
  </label>
  <label class="btn btn-primary">
    <input type="checkbox" autocomplete="off"> Checkbox 3
  </label>
</div>
`````
`````html
<div class="btn-group" data-toggle="buttons">
  <label class="btn btn-primary active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1 (preselected)
  </label>
  <label class="btn btn-primary">
    <input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
  </label>
  <label class="btn btn-primary">
    <input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
  </label>
</div>
`````

### 方法

| 方法 | 描述 |
| --- | --- |
| `$().button('toggle')` |切换到按下状态。给按钮一个它已经被激活的外观。 |
