**1、for...in 对数组或对象的循环/迭代操作**

对于数组循环出来的是数组元素；对于对象循环出来的是对象属性

```js
let names=["tom","jerry"]
for (let i in names){
    console.log(names[i])
}
//tom  jerry
```

```js
let obj={a:"12",b:"34",c:"56"}
for(let i in obj){
    console.log(i)
}
//a b c
```

 **2、判断对象是否是数组/对象的元素/属性**

格式：（变量 in 对象）

当‘对象’是数组时：“变量”指的是数组的“索引”；

当‘对象’为对象是，“变量”指的是对象的“属性”。

```js
console.log(i in arr)//判断“i”是不是数组的索引
console.log(j in obj)//判断“j”是不是对象的属性
```

