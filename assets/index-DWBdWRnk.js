import{j as e,D as x,r as c}from"./index-BxXbnW9e.js";import{C as i}from"./Cardruntime-DF2YgfxL.js";import{C as u}from"./CodeFinder-CVCKvQ-6.js";import{I as o}from"./activecode-BfSkJlGQ.js";import"./index-BEsnAH_r.js";import{A as h}from"./index-B1rMsFzY.js";import"./index-DMQVh9lL.js";function f(){function s(t){const r=t.get("fname"),n=t.get("lname");alert(`输入内容：FirstName: ${r}, LastName: ${n}`)}return e.jsxs("form",{action:s,className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("label",{className:"w-[100px]",children:"First name: "}),e.jsx("input",{type:"text",defaultValue:"Jake",name:"fname"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("label",{className:"w-[100px]",children:"Last name: "}),e.jsx("input",{type:"text",defaultValue:"Ma",name:"lname"})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{type:"submit",children:"提交"})})]})}function p(){for(var s=[],t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",r=0;r<16;r++)s[r]=t.substr(Math.floor(Math.random()*16),1);return s[8]="-",s.join("")}function g(s){const{ref:t,onChange:r}=s;function n(l){const a={id:p(),name:l.get("name"),desc:l.get("desc"),hours:l.get("hours"),rate:l.get("rate"),price:l.get("price")};t.current.close(),r&&r(a)}return e.jsx(x,{ref:t,footer:!0,children:e.jsxs("form",{action:n,children:[e.jsx(o,{label:"Name",name:"name",placeholder:"Plase input your project name.",required:!0}),e.jsx(o,{label:"Desc",name:"desc",placeholder:"please input your project description.",required:!0}),e.jsx(o,{label:"Hours",name:"hours",type:"number",placeholder:"please input hours.",required:!0}),e.jsx(o,{label:"Rate",name:"rate",type:"number",placeholder:"please input rate.",required:!0}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{type:"submit",children:"Submit"})})]})})}function j(){const s=c.useRef(null),[t,r]=c.useState([{id:p(),name:"Logo redesign",desc:"New logo and digital asset playbook.",hours:"20.0",rate:"100.00"}]);function n(a){r([...t,a])}const l=t.reduce((a,m)=>a+m.hours*m.rate,0);return e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:flex sm:items-center",children:[e.jsxs("div",{className:"sm:flex-auto",children:[e.jsx("h1",{className:"text-base font-semibold leading-6 text-gray-900",children:"Invoice"}),e.jsxs("p",{className:"mt-2 text-sm text-gray-700",children:["For work completed from ",e.jsx("time",{dateTime:"2022-08-01",children:"August 1, 2022"})," to"," ",e.jsx("time",{dateTime:"2022-08-31",children:"August 31, 2022"}),"."]})]}),e.jsx("div",{className:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:e.jsx("button",{className:"primary",onClick:()=>s.current.show(),children:"Add"})})]}),e.jsx(g,{ref:s,onChange:n}),e.jsx("div",{className:"-mx-4 mt-8 flow-root sm:mx-0",children:e.jsxs("table",{className:"min-w-full",children:[e.jsxs("colgroup",{children:[e.jsx("col",{className:"w-full sm:w-1/2"}),e.jsx("col",{className:"sm:w-1/6"}),e.jsx("col",{className:"sm:w-1/6"}),e.jsx("col",{className:"sm:w-1/6"})]}),e.jsx("thead",{className:"border-b border-gray-300 text-gray-900",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0",children:"Project"}),e.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Hours"}),e.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Rate"}),e.jsx("th",{scope:"col",className:"py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:"Price"})]})}),e.jsx("tbody",{children:t.map(a=>e.jsxs("tr",{className:"border-b border-gray-200",children:[e.jsxs("td",{className:"max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0",children:[e.jsx("div",{className:"font-medium text-gray-900",children:a.name}),e.jsx("div",{className:"mt-1 truncate text-gray-500",children:a.desc})]}),e.jsx("td",{className:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:a.hours}),e.jsxs("td",{className:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:["$",a.rate]}),e.jsxs("td",{className:"py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0",children:["$",a.hours*a.rate]})]},a.id))}),e.jsxs("tfoot",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Subtotal"}),e.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Subtotal"}),e.jsxs("td",{className:"pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-0",children:["$",l]})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Tax"}),e.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Tax"}),e.jsx("td",{className:"pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-0",children:"$1760.00"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0",children:"Total"}),e.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden",children:"Total"}),e.jsxs("td",{className:"pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:["$",l-1760]})]})]})]})})]})}const b=`import Dialog from 'components/Dialog'
import Input from "components/Input";
import getUuid from "@/utils/uuid";

export default function Modal(props) {
  const {ref, onChange} = props

  function action(f) {
    const item = {
      id: getUuid(),
      name: f.get('name'),
      desc: f.get('desc'),
      hours: f.get('hours'),
      rate: f.get('rate'),
      price: f.get('price'),
    }
    ref.current.close()
    onChange && onChange(item)
  }

  return (
    <Dialog ref={ref} footer>
      <form action={action}>
        <Input label='Name' name='name' placeholder='Plase input your project name.' required />
        <Input label='Desc' name='desc' placeholder='please input your project description.' required/>
        <Input label='Hours' name='hours' type='number' placeholder='please input hours.' required/>
        <Input label='Rate' name='rate' type='number' placeholder='please input rate.' required/>

        <div className='flex justify-end'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </Dialog>
  )
}`,y=`import { useState, useRef } from 'react'
import Modal from './Modal'
import getUuid from "@/utils/uuid.js";


export default function Table() {
  const modal = useRef(null)

  const [revenues, setRevenues] = useState([{
    id: getUuid(),
    name: 'Logo redesign',
    desc: 'New logo and digital asset playbook.',
    hours: '20.0',
    rate: '100.00',
  }])

  function __onChange(data) {
    setRevenues([...revenues, data])
  }

  const subtotal = revenues.reduce((pre, cur) => {
    return pre + cur.hours * cur.rate
  }, 0)

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Invoice</h1>
          <p className="mt-2 text-sm text-gray-700">
            For work completed from <time dateTime="2022-08-01">August 1, 2022</time> to{' '}
            <time dateTime="2022-08-31">August 31, 2022</time>.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button className='primary' onClick={() => modal.current.show()}>Add</button>
        </div>
      </div>
      <Modal ref={modal} onChange={__onChange} />

      <div className="-mx-4 mt-8 flow-root sm:mx-0">
        <table className="min-w-full">
          <colgroup>
            <col className="w-full sm:w-1/2" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
          </colgroup>
          <thead className="border-b border-gray-300 text-gray-900">
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              Project
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Hours
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Rate
            </th>
            <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
              Price
            </th>
          </tr>
          </thead>
          <tbody>
          {revenues.map((project) => (
            <tr key={project.id} className="border-b border-gray-200">
              <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                <div className="font-medium text-gray-900">{project.name}</div>
                <div className="mt-1 truncate text-gray-500">{project.desc}</div>
              </td>
              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">{project.hours}</td>
              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">\${project.rate}</td>
              <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">\${project.hours * project.rate}</td>
            </tr>
          ))}
          </tbody>
          <tfoot>
          <tr>
            <th
              scope="row"
              colSpan={3}
              className="hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
            >
              Subtotal
            </th>
            <th scope="row" className="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden">
              Subtotal
            </th>
            <td className="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-0">\${subtotal}</td>
          </tr>
          <tr>
            <th
              scope="row"
              colSpan={3}
              className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
            >
              Tax
            </th>
            <th scope="row" className="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden">
              Tax
            </th>
            <td className="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-0">$1760.00</td>
          </tr>
          <tr>
            <th
              scope="row"
              colSpan={3}
              className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
            >
              Total
            </th>
            <th scope="row" className="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden">
              Total
            </th>
            <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">\${subtotal - 1760}</td>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}`;function d(s){const t={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.p,{children:"React 19 在表单上提供了更多充满想象空间的 API，它们用好了非常爽，不过一个麻烦的事情是如果你通过自学，想要透彻理解并找到最佳实践可能会非常困难。"}),`
`,e.jsx(t.p,{children:"这里最核心的原因是因为开发思维发生了比较彻底的变化，主要体现在 React19 在尝试弱化受控组件的概念，尝试引导开发者尽可能少的使用 useEffect，并且尽可能少的使用 useState 存储数据。"}),`
`,e.jsx(t.p,{children:"抛开学习成本不谈，我个人认为这是一个非常好的变化，新的开发方式上在开发体验和性能表现上都有非常大的提升。它充分利用了 HTML 中表单元素本身已经支持的能力，例如表单验证，自定义异常样式，自定义错误信息等。"}),`
`,e.jsx(t.p,{children:"不过没关系，我会尽量拆分去学习。确保大家都能读有所得。这一章节就先简单给大家介绍一下 React 在表单上的基础表现。"}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h3,{children:"action 基础"}),`
`,e.jsxs(t.p,{children:["在 HTML 的表单元素中，我们可以通过监听 form 对象的 onsubmit 来回调函数的执行。也可以通过 ",e.jsx(t.code,{children:"action"})," 属性来直接向服务端发送请求。"]}),`
`,e.jsx(t.p,{children:"在 React 19 中，form 元素支持的 action 在这个基础之上发生了一些变化。它支持给 action 传递一个回调函数以供我们使用。该回调函数会将 FormData 作为参数传入。我们可以通过这种方式拿到表单里的所有数据。"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"这个变化主要是 React 中并不提倡直接获取元素对象，以及直接往后端发送请求的方式并不常用"}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`export default function Demo01() {
  function __formAction(formData) {
    const fname = formData.get('fname')
    const lname = formData.get('lname')
    alert(\`输入内容：FirstName: \${fname}, LastName: \${lname}\`)
  }
  return (
    <form action={__formAction} className='space-y-3'>
      <div className='flex items-center'>
        <label className='w-[100px]'>First name: </label>
        <input type="text" defaultValue="Jake" name="fname" />
      </div>
      <div className='flex items-center'>
        <label className='w-[100px]'>Last name: </label>
        <input type="text" defaultValue="Ma" name="lname" />
      </div>
      <div className='flex justify-end'>
        <button type='submit'>提交</button>
      </div>
    </form>
  )
}
`})}),`
`,e.jsx(i,{children:e.jsx(f,{})}),`
`,e.jsxs(t.p,{children:["当我们点击提交按钮时，action 方法就会触发执行。当然，我们也可以给 ",e.jsx(t.code,{children:"submit"})," 一个 ",e.jsx(t.code,{children:"formAction"})," 属性来达到同样的效果"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`<form>
  ...
  <button formAction={__formAction} type='submit'>提交</button>
</form>
`})}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["默认情况下，当我们点击提交之后，form 会自动清空内部的所有数据，或者重置回  ",e.jsx(t.code,{children:"defaultValue"})]}),`
`,e.jsxs(t.p,{children:["如果你在设置了 action 的同时，又设置了 onSubmit 回调，那么 onSubmit 会优先执行，我们可以通过在 onSbumit 中执行 ",e.jsx(t.code,{children:"e.preventDefault()"})," 来阻止 action 回调的执行"]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`function __onSubmit(e) {
  e.preventDefault()
  ...
}
`})}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h3,{children:"案例"}),`
`,e.jsx(t.p,{children:"学习了这些基础知识之后，我们来完成一个比较简单的案例。我们在表单中输入信息，并把信息记录展示在一个列表中。案例演示效果如下"}),`
`,e.jsx(i,{children:e.jsx(j,{})}),`
`,e.jsxs(t.p,{children:["在这个案例中，我们提供了一个 ",e.jsx(t.code,{children:"Add"})," 按钮，点击该按钮之后，会出现一个弹窗。在弹窗中，我们可以输入每一条信息。输入完成之后，点击提交，输入的信息就会展示在列表中。"]}),`
`,e.jsx(t.p,{children:"完整代码如下"}),`
`,e.jsx(u,{files:{"index.jsx":y,"Modal.jsx":b},activeFile:"index.jsx"})]})}function N(s={}){const{wrapper:t}=s.components||{};return t?e.jsx(t,{...s,children:e.jsx(d,{...s})}):d(s)}function M(){return e.jsx(h,{renderArticle:s=>e.jsx(N,{components:{code:s}})})}export{M as default};
