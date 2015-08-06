# smacss-extend
一个可随意组合适应不同场景的便于扩展、易维护的 css 样式库

### 参考项目

- [minamarkham_SCSS (SMACSS)](https://github.com/minamarkham/sassy-starter)
- [yahoo_pure](https://github.com/yahoo/pure/)
- [google_web-starter-kit](https://github.com/google/web-starter-kit)
- [twbs_bootstrap](https://github.com/twbs/bootstrap)
- [pandora](https://github.com/pandoraui/pandora)

### 参考文档



目前基于 less 开发

目标：充分挖掘继承、组合、扩展定制

## 结构

```
+ css-extend/
  |
  | + base/                     # reset, typography
  |   |-- _base-simple.less     # simple reset
  |   |-- _normalize.less       # normalize v3.0.3
  |   |-- _normalize-extend.less  # normalize Extras
  |   |-- _base.less            # base styles
  |   |-- _default.less         # imports for all base styles
  |
  | + layout/                   # major components, e.g., header, footer etc.
  |   |-- _layout.less          # layout styles
  |   |-- _grids.less           # grid stytem
  |
  | + modules/                  # minor components, e.g., buttons, widgets etc.
  |   |-- _buttons.less         # buttons
  |
  | + states/                   # js-based classes, e.g., is-active or is-error state
  |   |-- _states.less          # state rules
  |   |-- _print.less           # print styles
  |   |-- _touch.less           # touch styles
  |
  | + themes/                   # (optional) separate theme files
  |   |-- simple.less           # imports for all simple styles
  |   |-- default.less          # rename to appropriate theme name
  |
  | + utilities/                # non-CSS outputs (i.e. mixins, variables) & non-modules
  |   |-- _global.less          # imports for all mixins + global project variables
  |   |-- _fonts.less           # @font-face mixins
  |   |-- _functions.less       # ems to rems conversion, etc.
  |   |-- _global.less          # global variables
  |   |-- _helpers.less         # placeholder helper classes
  |   |-- _mixins.less          # media queries, CSS3, etc.
  |   |-- _lib.less             # imports for third party styles
  |   |-- + lib/                # third party styles
  |       | _pesticide.less     # CSS pesticide
  |       | ...
  |
  | + extend/                   # extend
  |   |-- _base-extend.less     # base extend styles
  |   |-- _grids-extend.less    # grids extend
  |
  |   + ie.less                 # IE specific Sass file
  |   + styles.less             # primary Sass file
  |   + _shame.less             # because hacks happen
  |
  + .htaccess                   # Apache server configs
  + config.js                   # Compass configuration file
  + crossdomain.xml             # cross-domain requests
  + docs/                       # Doc generated documentation
  + gulpfile.js                 # Gulp configuration & tasks
  + package.json                # Gult metadata & dependencies
```


## 顺序

```
// Contents:

// 01. Utilities ( COMPASS, Variables, Functions, Mixins, etc... )
// 02. Libraries
// 03. Base ( regular elements )
// 04. Layout ( layout template, grid structure )
// 05. Modules ( modules, background, colors, typography.. )
// 06. States
// 07. @font-face
// 08. Print
// 09. Shame
```