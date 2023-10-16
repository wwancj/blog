# set

## 作用

用于构造函数，构建某一类型的对象- 对象的实例化
## 去重数组中的重复数据

```js
let arr=[1,2,5,6,2,5,"hello"]
let arr2=new set(arr)//或者
let arr3=new set([1,2,3,4,2,3])
console.log(arr2)//返回一个objec {0:1,1:2,2:3,3:6}
console.log(arr3)//返回一个object{0:1,1:2,2:3,3:4}
//利用解构赋值去把 object转化为array
var b=[...arr2]
```



# Set的方法

## size

计算去重数组的个数，‘长度’  size==>lenght

## clear

清空所有值

## delete

删除某一项值arr2.delete("hello")==>返回值 true

## has

查看set数组中是否含有某个值arr2.has("hello")==>返回值 true

## add

向set数组中添加一项值



