1. onclick---鼠标点击事件
2. ondblclick---鼠标双击事件
3. onmousedown----鼠标按下事件
4. onmouseup----鼠标松开事件
5. onmousemove---鼠标移动事件
6. onmouseover---鼠标经过事件
7. onmouseout----鼠标划出事件

- clientX,clientY----点击位置距离当前body可视区域的x,y坐标

- pageX.pageY-----对于整个页面来说包括被卷进的body部分长度

- screenX,screenY----点击位置距离当前电脑屏幕的X，y坐标

- offsetX,offsetY---相对于带有定位的父盒子的x,y坐标

- x,y---和screenX,screenY一样

  

window.event 是一个由微软ie引入的属性，只有当DOM事件处理程序被调用的时候会被用到，它的值是当前正在处理的事件对象

js浏览器DOM事件的兼容性写法

```js
btn.onclick=e=>{
    let ev=e||window.event
}
```

### getcomputerstyle(ele,"::hover")

`Window.getComputedStyle()`方法返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有CSS属性的值。 私有的CSS属性值可以通过对象提供的API或通过简单地使用CSS属性名称进行索引来访问。

- 返回的`style`是一个实时的 [`CSSStyleDeclaration`](https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleDeclaration) 对象，当元素的样式更改时，它会自动更新本身。

element

 用于获取计算样式的[`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element)。

pseudoElt 可选

指定一个要匹配的伪元素的字符串。必须对普通元素省略（或`null`）。

==在定义事件时候，写方法省略了小括号，但是方法本身是需要一个参数的，这个时候，会默认将event传入到方法==

### input

- input有个input事件

- 用户在input里面输入东西会触发

