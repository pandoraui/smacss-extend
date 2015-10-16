# SMACSS-extend Change Log
--------------------------

## SMACSS Extend 0.0.1 （2015.08.06）

### 2015.08

base 部分，完成基础的 reset 样式，使用 mormalize 并增加一部分扩展实现

- 字体抗锯齿 -webkit-font-smoothing: antialiased;
- 重置 html 字体，方便使用 rem 单位
- 图片 max-width:100%; 限制显示宽度
- 其他一些小的视觉改动

增加 Typography 样式 type.less，专门维护使用的字体，此处我们会有默认设置

增加工具类 Utility 样式，集合清除浮动、隐藏样式等一些布局辅助的样式