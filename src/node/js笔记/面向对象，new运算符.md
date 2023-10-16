### +

### new运算符(视频在面向对象一1：40：00)

//什么是构造函数：

当创建了一个函数时不能称为构造函数，只有通过new运算符调用时才能称其为构造函数

1. 作用：

   - 执行函数 

     ```js
     function Test(){console.log("test")}
     new Test
     //或者new test()
     ```

     

   - 自动创建一个对象

   - 把创建的对象指向另外一个对象

   - 把空对象和函数里的this衔接起来；//理解：创建一个名字为this的对象并返还

   - 隐式返还this、

   - 构建出来的对象prototype都是一样的

简化工厂模式---》构造函数
1. 约定俗成：首字母大写
2. 属性放在构造函数里；方法放在原型
```js
function Test(){
    this.name="tom"
    this.age="18"
}//属性放在构造函数里
Test.prototype.psfor=function(){
    console.log("psfor")
}//方法放在原型中

```

### constructor

```js
function Tab(){}
let tab1=new Tab();
console.log(tab1.constructor===Tab)//true
```

作用:检测数据类型

```js
let str="qweqwe"
//字符串的定义本质上也是通过new来构建的
//let str=new String("qweqwe")
console.log(str.constructor===String)
```

### new Function

```js
let fun=new Function("a","b","return a+b")
```

