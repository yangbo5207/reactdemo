import{c as p,j as n,r as m}from"./index-Di4F1x74.js";import{C as b}from"./Cardruntime-Cp1f-EP2.js";import{A as N}from"./index-DrkOu_iN.js";import"./Preview-BBadGkLg.js";import"./atom-one-light-C8MDVoqG.js";const y=`import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import Tabs from './Tabs'
import List from './List'

const tabs = [
  { name: 'My Account', href: '#', current: true },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
]


export default function Example() {
  const [current, switchToSelected] = useState(0)
  const [promise, update] = useState(() => fetchListWithCancel(5))

  function __handler(index) {
    console.log(index)
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)

    promise.cancel()
    const len = Math.floor(Math.random() * 10)
    update(fetchListWithCancel(len))
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />

      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,S=`export const fetchList = async (number) => {
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
`,_=`document.documentElement.style.fontSize = '14px'

export default function Skeleton(props) {
  if (props.type === 'card') {
    return (
      <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
        <div className="animate-pulse flex space-x-4 items-center">
          {[1, 2, 3].map((_, i) => (
            <div className="flex-1" key={\`z-\${i}\`}>
              <div className='rounded-md bg-slate-200  h-32'></div>
              <div className="grid grid-cols-3 gap-4 mt-2">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-2">
                <div className="h-2 bg-slate-200 rounded col-span-3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (props.type === 'header') {
    return (
      <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
        <div className="animate-pulse flex space-x-4 items-center">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <div className="flex-1 space-y-3 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
`,w=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <script src="https://cdn.tailwindcss.com"><\/script>
    <title>案例演示</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`,L=`import { use } from 'react';
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
`,C=`function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs({tabs, onSwitch}) {
  return (
    <div>
      <div className="hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current).name}
          onChange={(e) => onSwitch(e.target.selectedIndex)}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab, i) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
              aria-current={tab.current ? 'page' : undefined}
              onClick={() => onSwitch(i)}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
`;document.documentElement.style.fontSize="14px";function g(s){const e=p.c(7);if(s.type==="card"){let t;return e[0]===Symbol.for("react.memo_cache_sentinel")?(t=n.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:n.jsx("div",{className:"animate-pulse flex space-x-4 items-center",children:[1,2,3].map((r,i)=>n.jsxs("div",{className:"flex-1",children:[n.jsx("div",{className:"rounded-md bg-slate-200  h-32"}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),n.jsx("div",{className:"grid grid-cols-4 gap-4 mt-2",children:n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-3"})})]},`z-${i}`))})}),e[0]=t):t=e[0],t}if(s.type==="header"){let t;e[1]===Symbol.for("react.memo_cache_sentinel")?(t=n.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e[1]=t):t=e[1];let r;e[2]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e[2]=r):r=e[2];let i;return e[3]===Symbol.for("react.memo_cache_sentinel")?(i=n.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:n.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[t,n.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[r,n.jsx("div",{className:"space-y-3",children:n.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})}),e[3]=i):i=e[3],i}let c;e[4]===Symbol.for("react.memo_cache_sentinel")?(c=n.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e[4]=c):c=e[4];let a;e[5]===Symbol.for("react.memo_cache_sentinel")?(a=n.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e[5]=a):a=e[5];let l;return e[6]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:n.jsxs("div",{className:"animate-pulse flex space-x-4",children:[c,n.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[a,n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),n.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})}),e[6]=l):l=e[6],l}const v=async s=>(await fetch(`https://randomuser.me/api/?results=${s}&inc=name,gender,email,nat,picture&noinfo`)).json();function k(s){const e=p.c(5),{promise:c}=s,{results:a}=m.use(c);console.log("我会执行几次呢");let l;if(e[0]!==a){let r;e[2]===Symbol.for("react.memo_cache_sentinel")?(r=(i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${o}`),e[2]=r):r=e[2],l=a.map(r),e[0]=a,e[1]=l}else l=e[1];let t;return e[3]!==l?(t=n.jsx("div",{children:l}),e[3]=l,e[4]=t):t=e[4],t}function T(){const s=p.c(4);let e;s[0]===Symbol.for("react.memo_cache_sentinel")?(e=()=>v(3),s[0]=e):e=s[0];const[c]=m.useState(e);let a;s[1]===Symbol.for("react.memo_cache_sentinel")?(a=n.jsx(g,{type:"card"}),s[1]=a):a=s[1];let l;return s[2]!==c?(l=n.jsx("div",{children:n.jsx(m.Suspense,{fallback:a,children:n.jsx($,{promise:c})})}),s[2]=c,s[3]=l):l=s[3],l}function $(s){const e=p.c(13),{results:c}=m.use(s.promise);let a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=()=>v(5),e[0]=a):a=e[0];const[l]=m.useState(a);let t;if(e[1]!==c){let u;e[3]===Symbol.for("react.memo_cache_sentinel")?(u=(x,j)=>n.jsxs("div",{className:"flex-1",children:[n.jsx("div",{className:"rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${x.picture.large})`}}),n.jsx("div",{className:"mt-4 font-bold",children:x.name.last}),n.jsx("div",{className:"mt-1 text-gray-400 text-sm",children:x.email})]},`z-${j}`),e[3]=u):u=e[3],t=c.map(u),e[1]=c,e[2]=t}else t=e[2];let r;e[4]!==t?(r=n.jsx("div",{className:"flex space-x-4",children:t}),e[4]=t,e[5]=r):r=e[5];let i;e[6]===Symbol.for("react.memo_cache_sentinel")?(i=n.jsx("div",{className:"mt-8 text-gray-400 text-sm",children:"Account users"}),e[6]=i):i=e[6];let o;e[7]===Symbol.for("react.memo_cache_sentinel")?(o=n.jsx(g,{}),e[7]=o):o=e[7];let d;e[8]!==l?(d=n.jsx(m.Suspense,{fallback:o,children:n.jsx(k,{promise:l})}),e[8]=l,e[9]=d):d=e[9];let h;return e[10]!==r||e[11]!==d?(h=n.jsxs("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:[r,i,d]}),e[10]=r,e[11]=d,e[12]=h):h=e[12],h}function A(){const s=p.c(1);let e;return s[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx("div",{children:n.jsx(T,{})}),s[0]=e):e=s[0],e}function f(s){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"Tab 切换的过程中，请求接口也是日常开发中非常常见的交互方式。"}),`
`,n.jsx(b,{reload:!0,children:n.jsx(A,{})}),`
`,n.jsx(e.p,{children:"这是一个搜索的案例。当我们学会把数据存放在 promise 中时，实现这个案例的代码将会非常简单。案例演示如上面所示。"}),`
`,n.jsx(e.p,{children:"首先，我们需要定义一个 List 组件，用于显示列表数据。我们计划将列表数据存放在一个 promise 中，然后使用 use 从该 promise 中读取列表然后渲染。"}),`
`,n.jsx(e.p,{children:"因此，该 List 组件的代码如下所示"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { use } from 'react';
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
`,n.jsx(e.p,{children:"然后，我们只需要在 useState 中存储一个 promise 即可"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const [promise, update] = useState(() => fetchList(10))
`})}),`
`,n.jsx(e.p,{children:"更新时，更改该 promise"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function __inputChange(e) {
  const len = e.target.value.length % 10
  update(fetchList(len))
}
`})}),`
`,n.jsx(e.p,{children:"最后结合 Suspense，完整代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import {useState, Suspense} from 'react'
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
`,n.jsx(e.p,{children:"在演示这个例子时，我们要结合 chrome 开发者工具一起查看。观察接口请求的情况。我们发现，当我们快速输入时，此时会发起多个接口请求。React 会帮助我们解决竞态的问题，将接口任务依次排列好执行。"}),`
`,n.jsx(e.p,{children:"但是在请求结果的获取上，反馈到页面上只会获取最后一次请求的结果。这一点非常舒适。"}),`
`,n.jsx(e.p,{children:"与此同时，本次案例演示了一个需要传入参数的接口应该如何处理。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"取消上一次请求"})}),`
`,n.jsx(e.p,{children:"由于上面的实现方式，每次都会发送接口请求，因此在耗时上可能会比较久，所以我们可以使用防抖或者节流的方式减少请求次数。这两个也是面试中比较常见的需要考察的小知识点。"}),`
`,n.jsx(e.p,{children:"除此之外，我们这里介绍一种新的方案来解决这个问题，那就是在新的请求发生时，取消上一次还未完成的请求。我们一起来学习一下"}),`
`,n.jsxs(e.p,{children:["在 JavaScript 中，有一个特殊的内建对象 ",n.jsx(e.code,{children:"AbortController"})," 可以终止异步任务。我们可以利用该对象实例来终止 ",n.jsx(e.code,{children:"fetch"})," 请求。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`let controller = new AbortController();
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"controller"})," 具有单个属性 ",n.jsx(e.code,{children:"signal"}),"，我们可以在这个属性上设置事件监听。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`let signal = controller.signal
signal.addEventListener('abort', () => alert("abort!"));
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"controller"})," 具有单个方法：",n.jsx(e.code,{children:"abort()"}),"，当 ",n.jsx(e.code,{children:"abort()"})," 调用时，signal 的事件监听就会执行。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`controller.abort();

// 事件触发，signal.aborted 变为 true
alert(signal.aborted); // true
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"fetch"})," 中封装了 ",n.jsx(e.code,{children:"signal"})," 的事件监听，因此它可以很好的与 ",n.jsx(e.code,{children:"AbortController"})," 对象一起工作。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"fetch"})," 的第二个参数 option 可以接收 ",n.jsx(e.code,{children:"signal"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`fetch(url, {
  signal: controller.signal
});
`})}),`
`,n.jsxs(e.p,{children:["当我们在任意地方调用 ",n.jsx(e.code,{children:"abort"})," 时，对应的请求就会被取消"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`controller.abort();
`})}),`
`,n.jsx(e.p,{children:"借助这些基础知识，我们就可以封装一个可以被取消的 promise。"}),`
`,n.jsx(e.h2,{children:"2"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"封装一个新的 api 函数"})}),`
`,n.jsx(e.p,{children:"封装代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`export const fetchListWithCancel = (number) => {
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
`,n.jsxs(e.p,{children:["我这里使用了一个返回结果是一个列表的案例接口。然后将 ",n.jsx(e.code,{children:"abort"})," 函数挂载到返回的 ",n.jsx(e.code,{children:"promise"})," 中"]}),`
`,n.jsxs(e.p,{children:["使用时，只需要调用 ",n.jsx(e.code,{children:"promise.cancel()"})," 就可以取消对应的请求了。"]}),`
`,n.jsx(e.h2,{children:"3"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"结合 react 19 使用"})}),`
`,n.jsx(e.p,{children:"我们接下来要完成右侧案例的演示效果。注意仔细感受一下代码的简洁性。逻辑和之前没有发生任何明显的变化，只是我们需要切换我们新封装的 api 来发送请求。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const [promise, update] = useState(() => fetchListWithCancel(10))
`})}),`
`,n.jsx(e.p,{children:"然后在新的请求发生之前，取消还未完成的请求"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function __inputChange(e) {
  promise.cancel()
  const len = e.target.value.length % 10
  update(fetchListWithCancel(len))
}
`})}),`
`,n.jsx(e.p,{children:"其他的逻辑基本保持不变，完整代码和演示效果请在右侧区域查看。请务必结合调试工具中的网络请求一起观察演示效果。"})]})}function E(s={}){const{wrapper:e}=s.components||{};return e?n.jsx(e,{...s,children:n.jsx(f,{...s})}):f(s)}const M={"App.js":y,"api.js":S,"List.jsx":L,"Tabs.jsx":C,"Skeleton.jsx":_,"/public/index.html":w};function U(){const s=p.c(1);let e;return s[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(N,{files:M,renderArticle:c=>n.jsx(E,{components:{code:c}})}),s[0]=e):e=s[0],e}export{U as default};
