import{c,j as e}from"./index-oFmtIK6i.js";import{C as o}from"./Cardruntime-CDREzpNb.js";import{A as l}from"./index-CagVbUBf.js";import"./index-DiYRcp-t.js";import"./atom-one-light-q7r8Raww.js";function m(){const t=c.c(3);let n;t[0]===Symbol.for("react.memo_cache_sentinel")?(n=e.jsxs("div",{className:"flex items-center",children:[e.jsx("label",{className:"w-[100px]",children:"First name: "}),e.jsx("input",{type:"text",defaultValue:"Jake",name:"fname"})]}),t[0]=n):n=t[0];let s;t[1]===Symbol.for("react.memo_cache_sentinel")?(s=e.jsxs("div",{className:"flex items-center",children:[e.jsx("label",{className:"w-[100px]",children:"Last name: "}),e.jsx("input",{type:"text",defaultValue:"Ma",name:"lname"})]}),t[1]=s):s=t[1];let a;return t[2]===Symbol.for("react.memo_cache_sentinel")?(a=e.jsxs("form",{id:"form",method:"get",className:"space-y-3",children:[n,s,e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{type:"submit",children:"提交"})})]}),t[2]=a):a=t[2],a}function r(t){const n={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"在 html 的基础知识中，表单是很重要的一个环节"}),"，但是由于前端框架的盛行，原生表单开发方式相关的知识被部分前端框架所遗忘，很多人对 form action，formdata 很陌生。因此，当看到有消息称 React 19 支持了 form action 之后，许多前端感觉有点懵。这是啥？"]}),`
`,e.jsxs(n.p,{children:["React 19 在开发方式的引导上，意图非常明显，那就是希望开发者能尽量减少对 useState 与 useEffect 的使用。因此，在获取数据时，提供了 ",e.jsx(n.code,{children:"use(promise)"})," 开发方式，在提交数据时，则提供了 ",e.jsx(n.code,{children:"formaction"})," 的方式，这实际上是更加靠近原生 html 的思路。因此在学习 form action 时，需要道友们对 html 中的表单元素，有一个基础的认识。"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{children:"HTML form action"}),`
`,e.jsx(n.p,{children:"先来看一段简单的代码"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form id="form" method="get">
  First name:
  <input type="text" value="Jake" name="fname">
  Last name:
  <input type="text" value="Ma" name="lname">
  <input type="submit" value="提交">
</form>
`})}),`
`,e.jsx(o,{reload:!0,children:e.jsx(m,{})}),`
`,e.jsx(n.p,{children:"大家可以在 input 中修改输入内容，然后点击提高，此时页面会刷新，然后观察 url 中参数的变化。"}),`
`,e.jsxs(n.p,{children:["当我们使用表单 form 元素时，内部的表单元素可以根据 ",e.jsx(n.code,{children:"name"})," 属性与 ",e.jsx(n.code,{children:"value | defaultValue"})," 值自动组合成一个完整的序列化表单对象。我们不再需要额外去拼接他们。"]}),`
`,e.jsx(n.p,{children:"合成的序列化对象，我们称之为 FormData， 这是一个特殊的对象。我们可以直接通过如下方式获取到该对象"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`let formdata = new FormData(form)

formdata.get('fname')
formdata.get('lname')
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["我们无法直接观察到 FormData 的值，需要使用 ",e.jsx(n.code,{children:".get"})," 方法来获取。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["FormData 也可以被网络请求支持，例如我们可以把 ",e.jsx(n.code,{children:"FormData"})," 对象作为 fetch 请求的 ",e.jsx(n.code,{children:"body"}),"，直接发送"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`form.onsubmit = async e => {
  e.preventDefault()

  const response = await fetch('/post/user', {
    method: 'POST',
    body: new FormData(form)
  })
  let res = await response.json()
  // do something
}
`})}),`
`,e.jsxs(n.p,{children:["在这个案例中，当 ",e.jsx(n.code,{children:"type='submit'"})," 的按钮点击提交时，",e.jsx(n.code,{children:"onsubmit"})," 就会触发，我们可以在这个回调函数里执行自己的提交逻辑。"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"HTTP 中 content-type 字段有专门支持 FormData 的值，如下所示"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`Content-Type: multipart/form-data
`})}),`
`,e.jsxs(n.p,{children:["除此之外，我们可以使用 form 元素的 ",e.jsx(n.code,{children:"action"})," 属性来简化提交。不过它的表现会不太一样。"]}),`
`,e.jsxs(n.p,{children:["action 接收一个 ",e.jsx(n.code,{children:"URL"})," 作为参数，可以是绝对路径，也是可以相对路径。它表示携带表单数据向该地址发送请求。默认情况下页面会跳转到指定的 URL 地址。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form id="form" action="xx.html" method="post">
  First name:
  <input type="text" value="Jake" name="fname">
  Last name:
  <input type="text" value="Ma" name="lname">
  <input type="submit" value="提交">
</form>
`})}),`
`,e.jsx(n.p,{children:"服务端可以拦截该地址，并定义响应行为。"}),`
`,e.jsx(n.p,{children:"这样做的好处就是我们可以简化提交行为的代码。无需使用 JavaScript 对逻辑进行任何额外的处理，就能完成一次提交操作。在没有额外要求的情况下，我们可以非常方便的使用这种方式来提交表单数据，上传文件等。"}),`
`,e.jsx(n.p,{children:"了解了这些html form 元素中的基础知识之后，我们下一章再来详细的学习一下 FormData 的基础知识。"})]})}function i(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}function u(){const t=c.c(1);let n;return t[0]===Symbol.for("react.memo_cache_sentinel")?(n=e.jsx(l,{renderArticle:s=>e.jsx(i,{components:{code:s}})}),t[0]=n):n=t[0],n}export{u as default};
