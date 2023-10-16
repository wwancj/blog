## grid 布局

- 使用grid 布局 首先给当前元素 displa 设定  grid

- grid-template-colums grid-template-rows 给元素划定网格

  ```css
         .a {
              display: grid;
              width: 600px;
              height: 600px;
              background-color: blue;
              grid-template-columns: [x1] 100px [x2] 100px [x3]100px [x4] 100px [x5]100px 100px;
              grid-template-rows: 100px 100px 100px 100px 100px 100px;
          }
  其中[x1][x2]...是给坐标取别名  可以使用 fr 作为单位 1fr 就是一份空间
  可以使用 repeat() 函数  repeat(4,1fr) ==> 开辟出四份 1fr 的空间
  
  
  grid-template-areas:"header header header header"
  				"main main mian mian main";
  可以给空间取别名 子空间 使用grid-areas:header; 就可以占据 名字为 header 的空间
  row-gap:20px ==> 设定列的间距
  colums-gap:20px ==>设定行的间距
  
  ```

  

  

