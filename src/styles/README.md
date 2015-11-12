# SMACSS-BEM

随着CSS的发展，使用CSS有语义化的命名约定和CSS层的分离，将有助于它的可扩展性，性能的提高和代码的组织管理。

## BEM 是什么？

BEM（block：块，Element：元素，Modifier：修饰符）是最流行的命名规则之一。通过给每个元素添加它的父级block模块作为前缀，使得目标的安全性变得更加简单了。BEM还有助于消除页面和body类对嵌套或者附加样式依赖。

```
.block {}
.block__element {}
.block--modifier {}

.product-details {}
.product-details__price {}
.product-details__price--sale {}

.product-details {}
.product-details__title {}
.product-details__title--small {}
```

下划线（__）被用来区分元素，而用连字符(--)是用来修饰元素的。

## SMACSS 是什么？参看 [SMACSS](https://smacss.com/)

SMACSS定义了五种样式类型：

- Base (基本)
- Layout（布局）
- Module (模块)
- State (状态)
- Theme (皮肤)


我们的方法看起来像这样：

- __Base (基本)__
- <del>Layout（布局）</del>
- __Module (模块)__
- __State (状态)__
- <del>Theme (皮肤)</del>

而之前在 pandora 项目中，也具备了 SMACSS 雏形，有 typo 排版布局属性，以及模块皮肤定制，只是抽离得不够彻底。而最新的 bootstrap 也按照这种 SMACSS 层次划分实现，抽离的很彻底很合我意，赞一个。


我想以 BT 的实现，抽离出一个基础层，作为 core 版本，即精简版样式库，主题也依附在此层次之上实现。


## 结构规划如下：

bootstrap 已经按照 SMACSS 结构实现，我们直接用，不过要针对中文以及常用布局，稍作变更。

问：为什么没按照物理文件夹结构细分下 SMACSS 实现？

答：细分物理文件夹结构后，会遇到不同时序优先级的文件，分在同一个文件夹中的情况，这样维护起来就有点混乱了，所以 bootstrap 才放在一起的吧

我们怎么实现？虽然物理结构没法一致，但是我们依然可以按照功能、实现粒度、以及从属关系划分。

目标：期望实现各组件能独立存在并能被独立引用。另外可以学习了这些组件，可以再扩展一些常用的组件。

```
styles/
├── README.md
├── .csscomb.json
├── .scss-lint.yml
│
├── utilities/          //最底层 00
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _utilities-responsive.scss
│   ├── _utilities-spacing.scss
│   ├── _utilities.scss
│   └── mixins/
│       └── _...    //All mixins
│
├── base/
│   ├── _normalize.scss
│   ├── _reset.scss
│   ├── _reboot.scss
│   └── _base.scss
│
├── elements/
│   ├── _typo.scss
│   ├── _code.scss
│   ├── _images.scss
│   └── _tables.scss
│
├── layout/
│   └── _grid.scss
│
├── states/
│   └── _print.scss
│
├── components/         //组件
│   ├── _alert.scss
│   ├── _animation.scss
│   ├── _breadcrumb.scss
│   ├── _buttons.scss
│   ├── _button-group.scss
│   ├── _card.scss
│   ├── _close.scss
│   ├── _custom-forms.scss
│   ├── _dropdown.scss
│   ├── _forms.scss
│   ├── _input-group.scss
│   ├── _jumbotron.scss
│   ├── _labels.scss
│   ├── _list-group.scss
│   ├── _media.scss
│   ├── _nav.scss
│   ├── _navbar.scss
│   ├── _pager.scss
│   ├── _pagination.scss
│   ├── _progress.scss
│   ├── _responsive-embed.scss
│   │ 
││││├── _carousel.scss      //下面几个要依赖 js
│   ├── _modal.scss
│   ├── _popover.scss
│   └── _tooltip.scss
│
└── themes/                 //千变万变，变的只是配置，怎么配置最简单
    ├── pure/
    │   ├── _variables.scss
    │   └── _pure.scss
    │
    ├── amazeui/
    │   ├── _variables.scss
    │   └── _amazeui.scss
    │
    └── bootstrap/
        ├── bootstrap-flex.scss
        ├── bootstrap-grid.scss
        ├── bootstrap-reboot.scss
        └── bootstrap.scss
```

## 实现细节

为了实现目标，我们按照顺序对各个组件进行改造，依次进行，我们的文档跟着代码的完善，也充当 demo 以及预览，同步进行完善。

```
// Core variables and mixins
@import "variables";            done
@import "mixins";               doing


// base Reset and dependencies
@import "normalize";            
@import "reboot";               


// states
@import "print";                


// Elements && Layout
@import "type";                 
@import "images";               
@import "code";                 
@import "tables";               
@import "buttons";              
@import "forms";                

@import "grid";                 


// Components
@import "animation";            
@import "dropdown";             
@import "button-group";         
@import "input-group";          
@import "custom-forms";         
@import "nav";                  
@import "navbar";               
@import "card";                 
@import "breadcrumb";           
@import "pagination";           
@import "pager";                
@import "labels";               
@import "jumbotron";            
@import "alert";                
@import "progress";             
@import "media";                
@import "list-group";           
@import "responsive-embed";     
@import "close";                

// Components / JavaScript
@import "modal";                
@import "tooltip";              
@import "popover";              
@import "carousel";             

// Utility classes
@import "utilities";            
@import "utilities-spacing";    
@import "utilities-responsive"; 
```
