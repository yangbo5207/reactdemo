import{j as e}from"./index-BxXbnW9e.js";import{A as s}from"./index-B1rMsFzY.js";import"./activecode-BfSkJlGQ.js";function r(a){const n={code:"code",h3:"h3",p:"p",pre:"pre",...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{children:"FormData 使用详解"}),`
`,e.jsx(n.p,{children:"FormData API 如下所示。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-c++",children:`FormData
  [[Prototype]]
    .append: f append()
    .delete: f delete()
    .entries: f entries()
    .forEach: f forEach()
    .get: f ()
    .getAll: f getAll()
    .has: f has()
    .keys: f keys()
    .set: f ()
    .values: f values()
`})}),`
`,e.jsxs(n.p,{children:["我们可以先创建一个空的 FormData 对象，然后通过 ",e.jsx(n.code,{children:"append"})," 方法来添加属性。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const formdata = new FormData()
formdata.append('title', 'hello world')
`})}),`
`,e.jsx(n.p,{children:"也可以直接使用 form 元素对象进行初始化。并在子表单元素中合并具体的字段和值。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form id="form" method="post">
  First name:
  <input type="text" value="Jake" name="fname">
  Last name:
  <input type="text" value="Ma" name="lname">
  <input type="submit" value="提交">
</form>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const formdata = new FormData(form)
`})}),`
`,e.jsxs(n.p,{children:["我们可以通过 ",e.jsx(n.code,{children:".get"})," 方法获取具体字段的值。在表单元素中，",e.jsx(n.code,{children:"name"})," 属性表示字段名。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`formdata.get('fname')
`})}),`
`,e.jsxs(n.p,{children:["可以有多个同名的 name，因此 ",e.jsx(n.code,{children:".get()"})," 表示获取第一个，",e.jsx(n.code,{children:".getAll()"})," 表示获取所有"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// 获取所有 name 为 age 的字段，返回数组
formdata.getAll('age')
`})}),`
`,e.jsxs(n.p,{children:["我们可以通过 ",e.jsx(n.code,{children:".set"})," 方法设置对应字段的值。如果字段名不存在，则添加该字段。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`formdata.set('fname', 'Jake')
`})}),`
`,e.jsxs(n.p,{children:["可以通过 ",e.jsx(n.code,{children:".has(key)"})," 来判断是否存在某个字段。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`formdata.has('fname') // true
`})}),`
`,e.jsxs(n.p,{children:["可以通过 ",e.jsx(n.code,{children:".delete(key)"})," 删除某一个字段。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`formdata.delete('fname')
`})}),`
`,e.jsx(n.p,{children:"我们可以使用 formdata 来实现一个上传文件的功能。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form id="form">
  <input type="text" name="firstName" value="John">
  Picture:
  <input type="file" name="picture" accept="image/*">
  <input type="submit">
</form>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`form.onsubmit = async e => {
  e.preventDefault()

  const response = await fetch('/post/file', {
    method: 'POST',
    body: new FormData(form)
  })
  let res = await response.json()
  // do something
}
`})}),`
`,e.jsx(n.p,{children:"OK，简单了解了 FormData 的常用方式之后，有了这个基础，我们再来学习 react 中的 form action."})]})}function t(a={}){const{wrapper:n}=a.components||{};return n?e.jsx(n,{...a,children:e.jsx(r,{...a})}):r(a)}function o(){return e.jsx(s,{renderArticle:a=>e.jsx(t,{components:{code:a}})})}export{o as default};
