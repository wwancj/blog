## label

- label 元素不会向用户呈现任何特殊效果。不过，它为鼠标用户改进了可用性。如果您在 label 元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。
- 一个label和一个input绑定在一起

```html
<label for="user">
  <input type="text" id="user">  
</label>

```

### button

```html
<button disabled="">
    //disabled可以决定按钮能否被点击
</button>
```

### select

```html
<select>
    <option></option>
   <option></option>
     <option></option>
</select> 
//下拉选项框
<select multiple>//可以多选
```

