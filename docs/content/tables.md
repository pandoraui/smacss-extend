---
layout: docs
title: 表格
titleEn: Tables
group: content
---

因为在第三方部件例如日历和日期选择器中广泛使用表格，我们设计了视情况需要加入的表格类。只需要向某个 `<table>` 添加一个基类 `.table`。

此页涉及：默认表格，基本表格，反相表格，表格边框、圆角，单元格状态，hover 变色，斑马条纹，紧凑型表格，响应式表格，表格转置。

除此外，还涉及表格中的内容布局：内容居中，内容垂直居中，强制不换行等。

使用时注意 <table> HTML 结构的完整性。另外在展现大数据时，不要使用过大的表格，可能存在一定的性能问题（比如大于500行），可使用翻页或其他元素替代表格列表。

__表格相关的 JS 插件：__

- [https://github.com/amazeui/datatables](jQuery DataTables)


## 默认效果

`````html
<table>
  <tr>
    <th>项目</th>
    <th>网址</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>Bootstrap</td>
    <td>http://github.com/twbs/bootstrap</td>
    <td>非常前沿且极具创新型的前端框架。</td>
  </tr>
  <tr>
    <td>AmazeUI</td>
    <td>https://github.com/allmobilize/amazeui</td>
    <td>是一个中文化、移动优先的跨屏前端框架。</td>
  </tr>
  <tr>
    <td>待定</td>
    <td>...</td>
    <td>优秀的前端框架太多了，无法一一举例...</td>
  </tr>
</table>
`````
```html
<table>
  <tr>
    <th>标题</th>
    <th>标题</th>
    <th>标题</th>
  </tr>
  <tr>
    <td>内容</td>
    <td>内容</td>
    <td>内容</td>
  </tr>
  ...
</table>
```


## 基本样式

特点：标题栏下边框有较粗行间隔线，表格行之间以细线间隔，__只有行间隔线__，没有整个表格框线、也没有单元格的横向间隔线

`````html
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
`````
```html
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
```


## 反相表格

`````html
<table class="table table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
`````
```html
<table class="table table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
```


## 表头选项

使用两个修饰类中的一个，使 `<thead>` 显示高亮或者暗灰。

`````html
<table class="table">
  <thead class="thead-inverse">
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

<table class="table">
  <thead class="thead-default">
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
<hr/>
`````
```html

```


## 基本边框，圆角边框

添加 `.table-bordered` 可以使表格以及单元格的四边都有边框。

同时再增加 `.table-radius`，可实现表格外框圆角，外层圆角通过 `box-shadow` 实现。

`````html
<table class="table table-bordered">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@TwBootstrap</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
`````
```html

```

## 单元格状态

`````html
<table class="table table-bordered table-radius"> 
  <thead> 
    <tr> 
      <th>Class</th>
      <th>状态描述</th>
      <th>目标元素</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.active</td>
      <td class="active">激活</td>
      <td>td</td>
    </tr>
      <tr class="active">
      <td>.active</td>
      <td>激活</td>
      <td>tr</td>
    </tr>
    <tr>
      <td>.disabled</td>
      <td class="disabled">禁用</td>
      <td>td</td>
    </tr>
    <tr class="disabled">
      <td>.disabled</td>
      <td>禁用</td>
      <td>tr</td>
    </tr>
    <tr>
      <td class="primary">.primary</td>
      <td>蓝色高亮</td>
      <td>td</td>
    </tr>
    <tr class="primary">
      <td>.primary</td>
      <td>蓝色高亮</td>
      <td>tr</td>
    </tr>
    <tr>
      <td class="success">.success</td>
      <td>绿色高亮</td>
      <td>td</td>
    </tr>
      <tr class="success">
      <td>.success</td>
      <td>绿色高亮</td>
      <td>tr</td>
    </tr>
    <tr>
      <td class="warning">.warning</td>
      <td>橙色高亮</td>
      <td>td</td>
    </tr>
    <tr class="warning">
      <td>.warning</td>
      <td>橙色高亮</td>
      <td>tr</td>
    </tr>
    <tr>
      <td class="danger">.danger</td>
      <td>红色高亮</td>
      <td>td</td>
    </tr>
    <tr class="danger">
      <td>.danger</td>
      <td>红色高亮</td>
      <td>tr</td>
    </tr>
  </tbody>
</table> 
`````


## 其他效果

- `.table-striped` 斑马纹效果
- `.table-hover` hover 状态

增加效果类，可向 `<tbody>` 中的所有表行启用效果状态。

`````html
<table class="table table-hover table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
`````
```html
```


## 紧凑型表格

添加 `.table-sm` ，调整 `padding`（内填充减半）显示更紧凑(compact)的单元格。

`````html
<table class="table table-sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
`````
```html
```


## 上下文类

使用上下文类对表格或者单个单元格着色。

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <colgroup>
      <col class="col-xs-1">
      <col class="col-xs-7">
    </colgroup>
    <thead>
      <tr>
        <th>Class</th>
        <th>描述</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">
          <code>.table-active</code>
        </th>
        <td>Applies the hover color to a particular row or cell</td>
      </tr>
      <tr>
        <th scope="row">
          <code>.table-success</code>
        </th>
        <td>Indicates a successful or positive action</td>
      </tr>
      <tr>
        <th scope="row">
          <code>.table-info</code>
        </th>
        <td>Indicates a neutral informative change or action</td>
      </tr>
      <tr>
        <th scope="row">
          <code>.table-warning</code>
        </th>
        <td>Indicates a warning that might need attention</td>
      </tr>
      <tr>
        <th scope="row">
          <code>.table-danger</code>
        </th>
        <td>Indicates a dangerous or potentially negative action</td>
      </tr>
    </tbody>
  </table>
</div>

`````html
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Column heading</th>
      <th>Column heading</th>
      <th>Column heading</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-active">
      <th scope="row">1</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="table-success">
      <th scope="row">3</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="table-info">
      <th scope="row">5</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="table-warning">
      <th scope="row">7</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="table-danger">
      <th scope="row">9</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
  </tbody>
</table>
`````
```html
<!-- On rows -->
<tr class="table-active">...</tr>
<tr class="table-success">...</tr>
<tr class="table-warning">...</tr>
<tr class="table-danger">...</tr>
<tr class="table-info">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="table-active">...</td>
  <td class="table-success">...</td>
  <td class="table-warning">...</td>
  <td class="table-danger">...</td>
  <td class="table-info">...</td>
</tr>
```

## 响应式表格

将任何 `.table` 元素包裹在 `.table-responsive` 元素内，即可创建一个响应式表格，让其在小屏设备（窄于 768px）上水平滚动。如果在宽于 768px的设备上查看表格，你将看不到这些表格有什么不同。


`````html-warning
#### 垂直裁剪、截断

响应式表格使用 `overflow-y: hidde`，它会截断超出表格底部或顶部边缘的所有的内容。特别需要指出的是，它会裁剪下拉菜单以及其它第三方小部件。
`````

`````html-warning
#### 火狐浏览器和字段集

火狐浏览器有一些非常糟糕的字段集式样，涉及干扰响应式表格的 `width`。如果没有火狐浏览器特有的hack，这将不能被覆盖，所以于我们不能在样式库中提供如下代码：

```css
@-moz-document url-prefix() {
  fieldset { display: table-cell; }
}
```
欲得详细信息，请参阅[Stack Overflow](https://stackoverflow.com/questions/17408815/fieldset-resizes-wrong-appears-to-have-unremovable-min-width-min-content/17863685#17863685)上的解答。
`````

`````html
<div class="table-responsive">
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</table>

<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </table>
</div>
`````
```html
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
```


### 表格转置 (Reflow)

`````html
<table class="table table-reflow">
  <thead>
    <tr>
      <th>#</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</table>
`````
```html
<table class="table table-reflow">
  <thead>
    <tr>
      <th>#</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</table>
```

## 表格内容排版

- `.table-centered` 实现单元格居中对齐
- `.text-middle` 单元格上添加可以实现垂直居中
- `.text-nowrap`: 禁止文字换行；
- `.scrollable-horizontal`: 内容超出容器宽度时显示水平滚动条。

以上两个 class 在「__辅助类__」中定义。

同样，在__单元格__上添加其他文本对齐 class 可以实现想要的效果（参见[辅助类](../layout/utility)）



## 参考资源

- [表格排序 jQuery Table Sort](https://github.com/kylefox/jquery-tablesort)
- [Tablesaw - A set of jQuery plugins for responsive tables]()
- [FooTable - jQuery plugin to make HTML tables responsive]()
