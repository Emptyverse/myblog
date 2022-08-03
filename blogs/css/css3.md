---
title: css
date: 2020-05-18
sidebar: auto
tags:
 - CSS
categories: 
 - css
---

## 样式

### 1、背景

- `background`
- `background-img`
- `background-repeat`
- `background-size`

```js
background-img:url() url();  // 背景图,可以同时设置两个背景图
background-repeat:no-repeat,repeat; // 第一个不平铺，第二个平铺(重复和不重复的意思)
background-position: center top,center center; // 第一个在上方居中，第二个中间居中
background: url() no-repect center top,url() repeat center center
// 可以直接background里写所有东西
background-size: 100% 100%; // 在指定的div下，背景图规定大小布满div，等比缩放
background-size: contain; // 要指定的width和height具体大小，如果width、height:100%则不生效
background-size: cover;  //可以用width:100%;height:100%，直接填充整个页面并且是响应式的
```

- `background-origin` : border-box | content-box | padding-box

  > 设置背景图片填充的区域

  - `padding-box` 背景图像相对于内边距框来填充。【默认】
  - `border-box` 背景图像相对于边框盒来填充。
  - `content-box` 背景图像相对于内容框来填充。

- `background-clip` border-box | padding-box | content-box

  > 指定背景绘制区域。
  - `border-box` 背景绘制在边框方框内（剪切成边框方框）【默认】
  - `padding-box` 背景绘制在衬距方框内（剪切成衬距方框）
  - `content-box` 背景绘制在内容方框内（剪切成内容方框）

- `box-shadow` 边框阴影【水平阴影 垂直阴影 模糊程度 阴影大小 阴影颜色】水平和垂直阴影(负左/上、正右/下)

- `border-radius` 设置圆角 【左上角 右上角 右下角 左下角 (顺时针方向)】50%则为圆

- `border-image-source` 设置边框图片

- `border-image-repeat` 用于图像边界是否应重复（repeated）、拉伸（stretched）或铺满（rounded）

- `border-image-slice` 属性指定图像的边界向内偏移。

### 2、文本

- `text-shadow` **文字的阴影**【水平阴影，垂直阴影，模糊程度，阴影颜色】
- `white-space` 属性设置如何处理元素内的空白。
  - `normal` 空白会被浏览器忽略。
  - `pre` 空白会被浏览器保留。其行为方式类似 HTML 中的
     标签。
  - `nowrap` 文本不会换行，文本会在在同一行上继续，直到遇到标签为止。
  - `pre-wrap` 保留空白符序列，但是正常地进行换行。
  - `pre-line` 合并空白符序列，但是保留换行符。
  - `inherit` 规定应该从父元素继承 white-space 属性的值。
- `overflow` **规定当内容溢出元素框时的解决方案。**
  - `visible` 内容溢出不会被修剪，会呈现在元素框之外。【默认】
  - `hidden` 内容溢出会被修剪，并且其余内容是不可见的
  - `scroll` 内容溢出被剪裁，同时添加滚动条以查看其余内容
  - `auto` 与 scroll 类似，仅在必要时添加滚动条
  - `inherit` 规定应该从父元素继承 overflow 属性的值

- `text-overflow` **规定当文本溢出包含元素时的解决方案。**
  - `clip` 修剪文本
  - `ellipsis` 显示省略符号来代表被修剪的文本
  - `string` 使用给定的字符串来代表被修剪的文本

### 3、CSS3新选择器

**3.1属性选择器**

```js
/*样例*/
/*标签[属性=值]*/
input[type=text]{
	background-color:red;
}
<input type="text">
--------------------------------------
a[data-title=hello]{
    color;red;
}
<a href="" data-title="hello">
```

**3.2伪类选择器**

```js
/*样例*/ 一个冒号：
a:link{
	/*未被访问过标签的样式*/
}
a:visited{
    /*访问过后的显示样式*/
}
a:hover{
    /*鼠标悬停的时候的显示样式*/
}
a:active{
    /*鼠标按住的时候显示的样式*/
}
```

**3.3伪元素选择器**

```js
p::after{
    content:'很帅'; /*在 p 标签的后面添加内容*/
    color:red; /* 单独设置颜色 */
}
p::before{
    content:'很帅'; /*在 p 标签的前面添加内容*/
    color:red; /* 单独设置颜色 */
}
```

**3.4后代选择器**

```js
ul li:first-child{
    color:red; /* 第一个 li 元素显示红色 */
}
ul li:last-child{
    color:red  /* 最后一个 li 元素显示红色 */
}
ul li:nth-child(x){
	color:red; /* 第 x 个元素显示红色*/
}
ul li:nth-child(2n){
    color:red; /* 偶数元素显示红色 */
}
```

【1】伪类：首先来说下伪类，CSS 伪类用于向某些选择器添加特殊的效果。它并不改变任何DOM内容。只是插入了一些修饰类的元素，这些元素对于用户来说是可见的，但是对于DOM来说不可见。伪类的效果可以通过添加一个实际的类来达到 。

【2】伪元素：接下来说下伪元素，简单来说，伪元素创建了一个虚拟容器，这个容器不包含任何DOM元素，但是可以包含内容。另外，开发者还可以为伪元素定制样式。清除浮动  

### 4、渐变

> `linear-gradient`   `radial-gradient`    还有添加浏览器前缀

```js
background:linear-gradient(red,blue,yellow,green); // 默认从上往下 
background:linear-gradient(to right,red,blue,yellow,green)// 从左往右 to是指走向
background:linear-gradient(to buttom right,red,blue,yellow,green)// 从左上角往右下角
```

### 5、2D  transform

> 平移 缩放 转动 拉长或拉伸  x轴→  y轴 ⬇

```js
transform:translate(30px,30px)  // 水平坐标平移 【x,y】以中心点为基准点，x、y可以是百分比 
transform:rotate(30deg)  // 顺时针旋转 
transform:rotate(-30deg) // 逆时针旋转 
transform:scale(2,3)  // 定义 2D 缩放转换。 x轴 2 倍，y轴3倍 【x,y】
transform:skew(30deg,20deg) // 定义沿着 X 和 Y 轴的 2D 倾斜转换。【x,y】
```

### 6、3D   transform

> transform注意事项
>
> 变形操作不会影响其他元素
>
> 只能添加在块元素中
>
> 复合写法 操作顺序由后到前
>
> 基准点设置 transform-origin   旋转基准点

### 7、transition过渡

- `transition-property`
- `transition-duration`
- `transition-timing-function`
  - `ease` 默认 慢->快->慢
  - `ease-in` 慢速开始
  - `ease-out` 慢速结束
  - `ease-in-out` 慢->快->慢
  - `linear` 匀速
  - `transition-delay`

- `transition-delay`

```js
transition-propery /*规定设置过渡效果的 css 属性名称*/
transition-duration /*规定完成过渡效果需要多少秒或者毫秒*/
transition-timing-function /*规定速度效果的速度曲线*/
transition-delay /*定义过渡效果何时开始*/
```

### 8 、动画

> 运动结束默认停留在起始位置
>
> @Keyframes: from -> 0%，to -> 100%
>
> 必须定义animation-duration 才会播放动画

- animation 使用简写属性，将动画与 div 元素绑定
  - `animation-name` 规定需要绑定到选择器的 keyframe 名称。
  - `animation-duration` 规定完成动画所花费的时间，以秒或毫秒计。
  - `animation-timing-function` 规定动画的速度曲线。
  - `animation-delay` 规定在动画开始之前的延迟。
  - `animation-iteration-count` 规定动画应该播放的次数。
  - `animation-direction` 规定是否应该轮流反向播放动画。

```js
/* 动画的起始和终点位置 
  change 为名称（可修改）
*/
@keyframes change{
    from{
        background-color:red;
    }
    to{
        background-color:green;
    }
}
/* 动画的不同时期的效果 
	move 为名称（可修改）
*/
@keyframes move{
    0%{
        background-color:red;
    }
    25%
        background-color:green;
    }
    75%
        background-color:yellow;
    }
    100%
        background-color:blue;
    }
}
```

### 9、字体图标iconfont

> 一种字体，不过显示的不是具体文字，而是图标。原理是将图标做成字体库，通过样式或者字体对应的字符集来显示这个icon图标

https://www.jianshu.com/p/a653c5f8d77d

