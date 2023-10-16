### for of遍历

- 使用条件：具有iterator接口的数据结构就可以使用for of循环遍历和（“for in 也是一样”）

    常见的有

    Array

    arguments

    set

    map

    string

    typedarray

    Nodelist

    iterator接口就是对象的一个属性

- for of 遍历的是键值
- for  in遍历的是键名
- object不能使用for of 遍历

### 工作原理

- 创建一个指针对像，指向当前的数据结构的起始位置
- 第一次调用对象的next方法，指针自动指向数据结构的第一个成员
- 接下来不断调用next方法，指针一直往后移动，直到最后一个成员