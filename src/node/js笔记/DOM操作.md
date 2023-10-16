一、节点创建型API

- 1.1 createElement
- 1.2 createTextNode
- 1.3 cloneNode
- 1.4 createDocumentFragment

二、页面修改形API（包括删除和添加）（删）（改）

- 2.1 appendChild(追加为子元素)
- 2.2 insertBefore(插入前面)
- 2.3 removeChild(删除子元素)
- 2.4 replaceChild(替换子元素)

三 节点查询型API(查)

- 3.1 document.getElementById
- 3.2 document.getElementsByTagName
- 3.3 document.getElementsByName
- 3.4 document.getElementsByClassName
- 3.5 document.querySelector和document.querySelectorAll
- 3.6 elementFromPoint()



4.1 getAttribute()  (获取属性)

4.2 createAttribute()  (创建属性)

4.3 setAttribute()  (设置属性)

4.4 romoveAttribute()  (删除属性)

4.5 element.attributes（将属性生成数组对象）



## 类的操作

```js
div1.classList.add("")//添加类
div1.classList.remove("")//删除类
div1.classList.length//类的个数
div1.classList.toggle("")//切换类
div1.classList.item("")//根据索引值获取类
div1.classList.contains("")//判断是否含有某个类 返回布尔值
```

 

## dom 插入  （文档碎片概念）

- 文档在dom  操作时候十分消耗性能  （插入一次刷新一次 ）

- 这时候需要用到一个虚拟dom 来作为中间件 

    ```js
    let ul=document.queryseletor("ul")
    
    let fragment=document.createDocumentFragment()
    
    
    for(let i=0;i<100;i++){
        const li=document.createElement("li")
        fragment.appendChild(item)
    }
    
    ul.appendChild(fragment)
    ```

    



# CSSRule.cssText

 

**概述**

**cssText** 返回样式规则所包含的实际文本.想要能够动态的设置一个样式表规则,查看[使用动态样式信息.](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/API/CSSRule/cssText#syntax)

```
string = cssRule.cssText
```

## [例子](https://developer.mozilla.org/zh-CN/docs/Web/API/CSSRule/cssText#example)

```
<style>
body { background-color: darkblue; }
</style>
<script>
  var stylesheet = document.styleSheets[0];
  alert(stylesheet.cssRules[0].cssText); // body { background-color: darkblue; }
</script>
```