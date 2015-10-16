# smacss-extend

按 samcss 结构实现样式规划，实现易维护、易使用，侧重继承、组合、扩展、场景层次划分。

### 参考项目

- [yahoo_pure](https://github.com/yahoo/pure/)
- [twbs_bootstrap](https://github.com/twbs/bootstrap)
- [allmobilize_amazeui](https://github.com/allmobilize/amazeui)
- [google_web-starter-kit](https://github.com/google/web-starter-kit)
- [minamarkham_SCSS (SMACSS)](https://github.com/minamarkham/sassy-starter)
- [pandora](https://github.com/pandoraui/pandora)


### 参考文档

目标：易维护、易使用（选用 sass 实现代码）

**SMACSS 设计模式**：SMACSS 的结构划分和我理解的层次实现有一定对立性，在具备一定结构划分后，我更偏向按功用、层级划分实现粒度，然后组合使用。比如 bootstrap 的实现就非常容易理解以及定位源代码维护，这点上我非常赞同阿当的理念：写在规则前面的话——项目的可维护性第一。

项目是给人用的，无论结构如何，一定要易于理解及定位，所以此项目虽是 SMACSS 但会有改动。

实现：通过继承、组合、扩展、场景层次划分，对应不同的场景级别实现不同的粒度层级，目前划分如下：

```
reset         reset级，(类似 normalize 粒度)
base          基础级，包含 reset 及 typo
core          底层组件级别，包含所有组件的底层实现，但不引用是不输出的(样式主题按灰度实现)
simple        轻量级，在 core 级别基础扩展，(类似 pure 粒度的实现，包含核心组件)
                开发者可基于此级别（推荐）或 core 级别 扩展适用于自己项目的定制包，
                扩展实现方法可参看此实现或更高等级的实现方法
default       default 默认主题级别 (比较完整的主题实现，类似 bootstrap 或 amazeui 粒度)
themes        自定义扩展主题 (themes级别)
fixed         修复低版本级别，针对低版本 IE 等，如 fixed-ie7 fixed-ie8
```

针对不同级别，实现颗粒度不同（代码量也会有差异），但每个级别的实现，都是细粒度的，这样便于基此扩展以及自定义

## 实现顺序

```
// Contents:

// 01. Utilities ( COMPASS, Variables, Functions, Mixins, etc... )
// 02. Libraries ???
// 03. Base ( regular elements )
// 04. Layout ( layout template, grid structure )
// 05. Modules ( modules, background, colors, typography.. )
// 06. States
// 07. @font-face
// 08. Print
// 09. Shame/Themes
```

根据以上对输出级别的规划，按照上面的顺序步骤，文档结构如下，有部分调整

## 具体实现细节

组件结构参看 [SMACSS 结构规划](./src/styles/README.md) ，本质上 bootstrap 的样式组件已经是 SMACSS 结构了，放在对应的文件夹划分一下，更清晰明了了。

在更底层实现中，每个样式应该是独立的（独自引用了其依赖），举例如下：

```
buttons
|- @import "base";
   |- @import "../utilities/variables";
   |- @import "../utilities/mixins";
```

这样这个组件就可以外部独立引用（而不用引用整个样式库），也支持 webpack 这样的工具打包。


## 结构

最终实现结构向这个靠拢，但也会有调整变动。

```
+ css-extend/
  |
  | + base/                   # reset, typography
  |   |-- _reset                # simple reset, 类似 normalize
  |   |-- _base                 # base styles
  |   |-- _typo                 # typography
  |   |-- _default              # imports for all base styles
  |   |
  |   |-- _normalize            # normalize v3.0.3
  |   |-- _normalize-extend     # normalize Extras
  |
  | + layout/                 # major components, e.g., header, footer etc.
  |   |-- _layout               # layout styles
  |   |-- _grids                # grid stytem
  |   |   |-- grids-core     
  |
  | + modules/                # minor components, e.g., buttons, widgets etc.
  |   |-- mixins                # 各种混入
  |   |-- _mixins               # mixins的集合
  |   |-- buttons
  |   |   |--_buttons-core              # 组件核心实现
  |   |   |--_buttons-base              # 基础实现
  |   |   |--_buttons-extend            # 增强实现
  |   |-- ...
  |
  | + states/                 # js-based classes, e.g., is-active or is-error state
  |   |-- _states               # state rules
  |   |-- _print                # print styles
  |   |-- _touch                # touch styles
  |
  | + themes/                 # 输出级别(optional) separate theme files
  |   |-- reset-simple          # only reset-simple styles
  |   |-- base                  # imports base && typo styles
  |   |-- core                  # imports for all core styles
  |   |-- simple                # imports for all simple styles
  |   |-- default               # rename to appropriate theme name
  |
  | + utilities/              # 待定 non-CSS outputs (i.e. mixins, variables) & non-modules
  |   |-- _global               # imports for all mixins + global project variables
  |   |-- _fonts                # @font-face mixins
  |   |-- _functions            # ems to rems conversion, etc.
  |   |-- _global               # global variables
  |   |-- _helpers              # placeholder helper classes
  |   |-- _mixins               # media queries, CSS3, etc.
  |   |-- _lib                  # imports for third party styles
  |   |-- + lib/                # third party styles
  |       | _pesticide          # CSS pesticide
  |       | ...
  |
  | + extend/                 # extend
  |   |-- _base-extend          # base extend styles
  |   |-- _grids-extend         # grids extend
  |
  |   + ie                      # IE specific Sass file
  |   + styles                  # primary Sass file
  |   + _shame                  # because hacks happen
  |
  + .htaccess                 # Apache server configs
  + config.js                 # Compass configuration file
  + crossdomain.xml           # cross-domain requests
  + docs/                     # Doc generated documentation
  + gulpfile.js               # Gulp configuration & tasks
  + package.json              # Gult metadata & dependencies
                                包含配置输出等级级别，在 themes 中定义
```
