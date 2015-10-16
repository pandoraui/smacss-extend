# SMACSS

## 结构规划如下：

发下所谓的 SMACSS，bootstrap 已经按照这种结构实现了，只是没分那样的层级结构，但具体模块却是这样结构实现的。赞一个

以下即 bootstrap 的划分，只是放在不同的文件夹里了，稍有改动。

问：为什么没按照物理文件夹结构细分下 SMACSS 实现？

答：细分物理文件夹结构后，会遇到不同时序优先级的文件，分在同一个文件夹中的情况，这样维护起来就有点混乱了，所以 bootstrap 才放在一起的吧

目标：期望实现各组件能独立存在并能被独立引用。另外可以学习了这些组件，可以再扩展一些常用的组件。

```
styles/
├── README.md
├── .csscomb.json
├── .scss-lint.yml
│
├── utilities/          //时序相关 00
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
│   ├── _type.scss
│   └── _base.scss
│
├── core/
│   ├── _code.scss
│   ├── _images.scss
│   ├── _tables.scss
│   ├── _buttons.scss
│   ├── _forms.scss
│   └── _grid.scss
│
├── states/
│   └── _print.scss
│
├── components/         //主要调整这里，改为独立组件
│   ├── _alert.scss
│   ├── _animation.scss
│   ├── _breadcrumb.scss
│   ├── _button-group.scss
│   ├── _card.scss
│   ├── _close.scss
│   ├── _custom-forms.scss
│   ├── _dropdown.scss
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
