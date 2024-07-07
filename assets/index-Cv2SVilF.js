import{j as n,c as t}from"./index-BU66eoMn.js";import{A as c}from"./index-DfeLcAlv.js";import"./index-DVoFd2M3.js";import"./atom-one-light-Lmvsdv_-.js";function r(a){const e={code:"code",h3:"h3",p:"p",pre:"pre",...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{children:"FormData 使用详解"}),`
`,n.jsx(e.p,{children:"FormData API 如下所示。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-c++",children:`FormData
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
`,n.jsxs(e.p,{children:["我们可以先创建一个空的 FormData 对象，然后通过 ",n.jsx(e.code,{children:"append"})," 方法来添加属性。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const formdata = new FormData()
formdata.append('title', 'hello world')
`})}),`
`,n.jsx(e.p,{children:"也可以直接使用 form 元素对象进行初始化。并在子表单元素中合并具体的字段和值。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<form id="form" method="post">
  First name:
  <input type="text" value="Jake" name="fname">
  Last name:
  <input type="text" value="Ma" name="lname">
  <input type="submit" value="提交">
</form>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const formdata = new FormData(form)
`})}),`
`,n.jsxs(e.p,{children:["我们可以通过 ",n.jsx(e.code,{children:".get"})," 方法获取具体字段的值。在表单元素中，",n.jsx(e.code,{children:"name"})," 属性表示字段名。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`formdata.get('fname')
`})}),`
`,n.jsxs(e.p,{children:["可以有多个同名的 name，因此 ",n.jsx(e.code,{children:".get()"})," 表示获取第一个，",n.jsx(e.code,{children:".getAll()"})," 表示获取所有"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 获取所有 name 为 age 的字段，返回数组
formdata.getAll('age')
`})}),`
`,n.jsxs(e.p,{children:["我们可以通过 ",n.jsx(e.code,{children:".set"})," 方法设置对应字段的值。如果字段名不存在，则添加该字段。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`formdata.set('fname', 'Jake')
`})}),`
`,n.jsxs(e.p,{children:["可以通过 ",n.jsx(e.code,{children:".has(key)"})," 来判断是否存在某个字段。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`formdata.has('fname') // true
`})}),`
`,n.jsxs(e.p,{children:["可以通过 ",n.jsx(e.code,{children:".delete(key)"})," 删除某一个字段。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`formdata.delete('fname')
`})}),`
`,n.jsx(e.p,{children:"我们可以使用 formdata 来实现一个上传文件的功能。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<form id="form">
  <input type="text" name="firstName" value="John">
  Picture:
  <input type="file" name="picture" accept="image/*">
  <input type="submit">
</form>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`form.onsubmit = async e => {
  e.preventDefault()

  const response = await fetch('/post/file', {
    method: 'POST',
    body: new FormData(form)
  })
  let res = await response.json()
  // do something
}
`})}),`
`,n.jsx(e.p,{children:"OK，简单了解了 FormData 的常用方式之后，有了这个基础，我们再来学习 react 中的 form action."})]})}function l(a={}){const{wrapper:e}=a.components||{};return e?n.jsx(e,{...a,children:n.jsx(r,{...a})}):r(a)}function p(){const a=t.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(c,{renderArticle:s=>n.jsx(l,{components:{code:s}})}),a[0]=e):e=a[0],e}export{p as default};
