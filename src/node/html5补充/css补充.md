##  css 变量概念

```css
html {
    --color:"#bfa"; 这里创建一个变量
}


div {
    color: var(--color)  //使用变量 
        
}
```
一、css变量
我们为何要使用css变量，css变量好用在那里？下面介绍下css变量的各种优点。

如何定义一个css变量：
:root {
    --red: #f30a0a;
}
.box {
    color: var(--red);
}
复制代码
变量定义语法是：--*
变量使用语法是: var(--*)

css变量命名规则：
body {
    --深蓝: #369;
    background-color: var(--深蓝);
}
复制代码
变量命名不能包含 $,[,^,(,% 等字符 普通字符局限在只要是数字[0-9]／字母[a-zA-Z]／_／-这些组合。 还可以是中文，日文或者韩文； 变量名大小写敏感， --blue 和 --Blue 是两个不同变量。

变量值只能作用属性值，不能用作属性名，以下是变量的错误定义：

.foo {
    --side: margin-top;
    var(--side): 20px;
}
复制代码
变量值带有单位，不能写成字符串： 错误定义：

body {
    --size: 20;
    font-size: var(--size)px;
}
复制代码
正确定义：

body {
    --size: 20px;
    font-size: var(--size);
}
复制代码
或:

body {
    --size: 20;
    font-size: calc(var(--size) * 1px);
}
复制代码
css变量中 sass / less / css 表达的差异：

sass:  $black: #333;
less:  @black: #333;
css:   --black: #333;
复制代码
可以看出 css 变量为我们带来一些预处理器的便利，并且不需要额外的编译；



### js 操作 css 变量

```
:root {
    --red: red;
    --blue: blue;
}
.box {
    width: 100px;
    height: 100px;
    background: var(--blue);
}




<div class="box"></div>



var box = document.querySelector('div');

box.style.setProperty('--blue','var(--red)');
```

## css函数

```css
div{
    width: calc(1000px/20) 
}
可以支持 函数  calc是计算函数
```

