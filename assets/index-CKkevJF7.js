import{j as e,r as l}from"./index-BxXbnW9e.js";import{C as c}from"./Cardruntime-DF2YgfxL.js";import{A as d}from"./index-LK1iCBIb.js";import"./index-BEsnAH_r.js";import"./activecode-BfSkJlGQ.js";import"./index-DMQVh9lL.js";import"./Preview-Cfw1m546.js";const p=`import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'
import Input from './Input'

export default function Demo01() {
  const [promise, update] = useState(() => fetchListWithCancel(10))

  function __inputChange(e) {
    promise.cancel()
    const len = e.target.value.length % 10
    update(fetchListWithCancel(len))
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,m=`export const fetchList = async (number) => {
  const res = await fetch(\`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const fetchListWithCancel = (number) => {
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(
      \`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`,
      {signal}
    ).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,u=`document.documentElement.style.fontSize = '14px'

export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
`,h=`import { use } from 'react';
export default function CurrentList({promise}) {
  const {results} = use(promise)
  console.log('我会执行几次呢')
  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,x=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`;document.documentElement.style.fontSize="14px";function j(s){return e.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:e.jsxs("div",{className:"animate-pulse flex space-x-4",children:[e.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),e.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const i=async s=>(await fetch(`https://randomuser.me/api/?results=${s}&inc=name,gender,email,nat,picture&noinfo`)).json();function g({promise:s}){const{results:n}=l.use(s);return console.log("我会执行几次呢"),e.jsx("div",{children:n.map((r,t)=>e.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[e.jsx("img",{className:"w-12 h-12 rounded-full",src:r.picture.large,alt:""}),e.jsxs("div",{className:"flex-1 ml-4",children:[e.jsx("div",{className:"font-bold",children:r.name.last}),e.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${t}`))})}function f(s){const{...n}=s;return e.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),e.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...n})]})}function v(){const[s,n]=l.useState(()=>i(5));function r(t){const a=t.target.value.length%10;n(i(a))}return e.jsxs("div",{children:[e.jsx(f,{onChange:r,placeholder:"Enter something"}),e.jsx(l.Suspense,{fallback:e.jsx(j,{}),children:e.jsx(g,{promise:s})})]})}function o(s){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx(v,{})}),`
`,e.jsx(n.p,{children:"这是一个搜索的案例。当我们学会把数据存放在 promise 中时，实现这个案例的代码将会非常简单。案例演示如上面所示。"}),`
`,e.jsx(n.p,{children:"首先，我们需要定义一个 List 组件，用于显示列表数据。我们计划将列表数据存放在一个 promise 中，然后使用 use 从该 promise 中读取列表然后渲染。"}),`
`,e.jsx(n.p,{children:"因此，该 List 组件的代码如下所示"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { use } from 'react';
export default function CurrentList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`})}),`
`,e.jsx(n.p,{children:"然后，我们只需要在 useState 中存储一个 promise 即可"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const [promise, update] = useState(() => fetchList(10))
`})}),`
`,e.jsx(n.p,{children:"更新时，更改该 promise"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function __inputChange(e) {
  const len = e.target.value.length % 10
  update(fetchList(len))
}
`})}),`
`,e.jsx(n.p,{children:"最后结合 Suspense，完整代码如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchList} from './api'
import List from './List'
import Input from './Input'

export default function Demo01() {
  const [promise, update] = useState(() => fetchList(10))

  function __inputChange(e) {
    const len = e.target.value.length % 10
    update(fetchList(len))
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`})}),`
`,e.jsx(n.p,{children:"在演示这个例子时，我们要结合 chrome 开发者工具一起查看。观察接口请求的情况。我们发现，当我们快速输入时，此时会发起多个接口请求。React 会帮助我们解决竞态的问题，将接口任务依次排列好执行。"}),`
`,e.jsx(n.p,{children:"但是在请求结果的获取上，反馈到页面上只会获取最后一次请求的结果。这一点非常舒适。"}),`
`,e.jsx(n.p,{children:"与此同时，本次案例演示了一个需要传入参数的接口应该如何处理。"}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"1"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"取消上一次请求"})}),`
`,e.jsx(n.p,{children:"由于上面的实现方式，每次都会发送接口请求，因此在耗时上可能会比较久，所以我们可以使用防抖或者节流的方式减少请求次数。这两个也是面试中比较常见的需要考察的小知识点。"}),`
`,e.jsx(n.p,{children:"除此之外，我们这里介绍一种新的方案来解决这个问题，那就是在新的请求发生时，取消上一次还未完成的请求。我们一起来学习一下"}),`
`,e.jsxs(n.p,{children:["在 JavaScript 中，有一个特殊的内建对象 ",e.jsx(n.code,{children:"AbortController"})," 可以终止异步任务。我们可以利用该对象实例来终止 ",e.jsx(n.code,{children:"fetch"})," 请求。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`let controller = new AbortController();
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"controller"})," 具有单个属性 ",e.jsx(n.code,{children:"signal"}),"，我们可以在这个属性上设置事件监听。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`let signal = controller.signal
signal.addEventListener('abort', () => alert("abort!"));
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"controller"})," 具有单个方法：",e.jsx(n.code,{children:"abort()"}),"，当 ",e.jsx(n.code,{children:"abort()"})," 调用时，signal 的事件监听就会执行。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`controller.abort();

// 事件触发，signal.aborted 变为 true
alert(signal.aborted); // true
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"fetch"})," 中封装了 ",e.jsx(n.code,{children:"signal"})," 的事件监听，因此它可以很好的与 ",e.jsx(n.code,{children:"AbortController"})," 对象一起工作。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"fetch"})," 的第二个参数 option 可以接收 ",e.jsx(n.code,{children:"signal"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`fetch(url, {
  signal: controller.signal
});
`})}),`
`,e.jsxs(n.p,{children:["当我们在任意地方调用 ",e.jsx(n.code,{children:"abort"})," 时，对应的请求就会被取消"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`controller.abort();
`})}),`
`,e.jsx(n.p,{children:"借助这些基础知识，我们就可以封装一个可以被取消的 promise。"}),`
`,e.jsx(n.h2,{children:"2"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"封装一个新的 api 函数"})}),`
`,e.jsx(n.p,{children:"封装代码如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`export const fetchListWithCancel = (number) => {
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(
      \`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`,
      {signal}
    ).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`})}),`
`,e.jsxs(n.p,{children:["我这里使用了一个返回结果是一个列表的案例接口。然后将 ",e.jsx(n.code,{children:"abort"})," 函数挂载到返回的 ",e.jsx(n.code,{children:"promise"})," 中"]}),`
`,e.jsxs(n.p,{children:["使用时，只需要调用 ",e.jsx(n.code,{children:"promise.cancel()"})," 就可以取消对应的请求了。"]}),`
`,e.jsx(n.h2,{children:"3"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"结合 react 19 使用"})}),`
`,e.jsx(n.p,{children:"我们接下来要完成右侧案例的演示效果。注意仔细感受一下代码的简洁性。逻辑和之前没有发生任何明显的变化，只是我们需要切换我们新封装的 api 来发送请求。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const [promise, update] = useState(() => fetchListWithCancel(10))
`})}),`
`,e.jsx(n.p,{children:"然后在新的请求发生之前，取消还未完成的请求"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function __inputChange(e) {
  promise.cancel()
  const len = e.target.value.length % 10
  update(fetchListWithCancel(len))
}
`})}),`
`,e.jsx(n.p,{children:"其他的逻辑基本保持不变，完整代码和演示效果请在右侧区域查看。请务必结合调试工具中的网络请求一起观察演示效果。"})]})}function b(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}const N={"App.js":p,"api.js":m,"List.jsx":h,"Input.jsx":x,"Skeleton.jsx":u};function A(){return e.jsx(d,{files:N,renderArticle:s=>e.jsx(b,{components:{code:s}})})}export{A as default};
