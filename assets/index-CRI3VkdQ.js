import{c as x,j as n,r as f,a as N}from"./index-B75hTygv.js";import{C as k}from"./Cardruntime-tmsTwtfU.js";import{A as L}from"./index-Qgvc3jsz.js";import"./Preview-Bj6s79pd.js";import"./atom-one-light-BQMUJUMb.js";const A=`import {useState, Suspense, useRef} from 'react'
import Tabs from './Tabs'

import Account from './Account'
import Search from './Search'

const tabs = [
  { name: 'My Account', href: '#', current: true, element: Account },
  { name: 'Company', href: '#', current: false, element: Account },
  { name: 'Team Members', href: '#', current: false, element: Account },
  { name: 'Billing', href: '#', current: false, element: Search },
]

export default function Example() {
  const [current, switchToSelected] = useState(0)
  const map = useRef(new Set([tabs[current]]))

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true

    const item = tabs[index]
    if (!map.current.has(item)) {
      map.current.add(item)
    }

    switchToSelected(index)
  }

  let arr = Array.from(map.current)

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />

      {arr.map((item, index) => (
        <item.element selected={item.current} key={\`z-\${index}\`}/>
      ))}
    </div>
  )
}
`,T=`export const fetchList = async (number) => {
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
`,$=`document.documentElement.style.fontSize = '14px'

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
`,E=`<!DOCTYPE html>
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
`,I=`import { use } from 'react';
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
`,W=`export default function Input(props) {
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
`,M=`import clsx from 'clsx'
import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'

export default function Account(props) {
  const [promise, update] = useState(() => fetchListWithCancel(5))

  const cls = clsx({
    ['hidden']: !props.selected
  })

  return (
    <div className={cls}>
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,R=`import clsx from 'clsx'
import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'
import Input from './Input'

export default function Search(props) {
  const [promise, update] = useState(() => fetchListWithCancel(10))

  function __inputChange(e) {
    promise.cancel()
    const len = e.target.value.length % 10
    update(fetchListWithCancel(len))
  }

  const cls = clsx('pt-4', {
    ['hidden']: !props.selected
  })

  return (
    <div className={cls}>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,z=`function classNames(...classes) {
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
`;document.documentElement.style.fontSize="14px";function y(c){const e=x.c(3);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=n.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e[0]=t):t=e[0];let s;e[1]===Symbol.for("react.memo_cache_sentinel")?(s=n.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e[1]=s):s=e[1];let l;return e[2]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:n.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t,n.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[s,n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),n.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})}),e[2]=l):l=e[2],l}const b=c=>{let e=new AbortController,t=e.signal;const s=new Promise(l=>{fetch(`https://randomuser.me/api/?results=${c}&inc=name,gender,email,nat,picture&noinfo`,{signal:t}).then(r=>{l(r.json())}).catch(()=>{console.log("接口成功取消！")})});return s.cancel=()=>{e&&e.abort()},s};function B(...c){return c.filter(Boolean).join(" ")}function D(c){const e=x.c(23),{tabs:t,onSwitch:s}=c;let l;e[0]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),e[0]=l):l=e[0];let r;if(e[1]!==t){let i;e[3]===Symbol.for("react.memo_cache_sentinel")?(i=p=>p.current,e[3]=i):i=e[3],r=t.find(i),e[1]=t,e[2]=r}else r=e[2];let a;e[4]!==s?(a=i=>s(i.target.selectedIndex),e[4]=s,e[5]=a):a=e[5];let d;if(e[6]!==t){let i;e[8]===Symbol.for("react.memo_cache_sentinel")?(i=p=>n.jsx("option",{children:p.name},p.name),e[8]=i):i=e[8],d=t.map(i),e[6]=t,e[7]=d}else d=e[7];let o;e[9]!==r.name||e[10]!==a||e[11]!==d?(o=n.jsxs("div",{className:"hidden",children:[l,n.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:r.name,onChange:a,children:d})]}),e[9]=r.name,e[10]=a,e[11]=d,e[12]=o):o=e[12];let m;if(e[13]!==s||e[14]!==t){let i;e[16]!==s?(i=(p,v)=>n.jsx("a",{href:p.href,className:B(p.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":p.current?"page":void 0,onClick:()=>s(v),children:p.name},p.name),e[16]=s,e[17]=i):i=e[17],m=t.map(i),e[13]=s,e[14]=t,e[15]=m}else m=e[15];let u;e[18]!==m?(u=n.jsx("div",{className:"block",children:n.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:m})}),e[18]=m,e[19]=u):u=e[19];let h;return e[20]!==o||e[21]!==u?(h=n.jsxs("div",{children:[o,u]}),e[20]=o,e[21]=u,e[22]=h):h=e[22],h}function _(c){const e=x.c(5),{promise:t}=c,{results:s}=f.use(t);let l;if(e[0]!==s){let a;e[2]===Symbol.for("react.memo_cache_sentinel")?(a=(d,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:d.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:d.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${o}`),e[2]=a):a=e[2],l=s.map(a),e[0]=s,e[1]=l}else l=e[1];let r;return e[3]!==l?(r=n.jsx("div",{children:l}),e[3]=l,e[4]=r):r=e[4],r}function j(c){const e=x.c(9);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=()=>b(5),e[0]=t):t=e[0];const[s]=f.useState(t),l=!c.selected;let r;e[1]!==l?(r=N({hidden:l}),e[1]=l,e[2]=r):r=e[2];const a=r;let d;e[3]===Symbol.for("react.memo_cache_sentinel")?(d=n.jsx(y,{}),e[3]=d):d=e[3];let o;e[4]!==s?(o=n.jsx(f.Suspense,{fallback:d,children:n.jsx(_,{promise:s})}),e[4]=s,e[5]=o):o=e[5];let m;return e[6]!==a||e[7]!==o?(m=n.jsx("div",{className:a,children:o}),e[6]=a,e[7]=o,e[8]=m):m=e[8],m}function F(c){const e=x.c(6);let t;e[0]!==c?({...t}=c,e[0]=c,e[1]=t):t=e[1];let s;e[2]===Symbol.for("react.memo_cache_sentinel")?(s=n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),e[2]=s):s=e[2];let l;e[3]===Symbol.for("react.memo_cache_sentinel")?(l={outline:"none"},e[3]=l):l=e[3];let r;return e[4]!==t?(r=n.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[s,n.jsx("input",{className:"flex-1 !border-none p-2",style:l,type:"text",...t})]}),e[4]=t,e[5]=r):r=e[5],r}function P(c){const e=x.c(14);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=()=>b(10),e[0]=t):t=e[0];const[s,l]=f.useState(t);let r;e[1]!==s?(r=function(w){s.cancel();const C=w.target.value.length%10;l(b(C))},e[1]=s,e[2]=r):r=e[2];const a=r,d=!c.selected;let o;e[3]!==d?(o=N("pt-4",{hidden:d}),e[3]=d,e[4]=o):o=e[4];const m=o;let u;e[5]!==a?(u=n.jsx(F,{onChange:a,placeholder:"Enter something"}),e[5]=a,e[6]=u):u=e[6];let h;e[7]===Symbol.for("react.memo_cache_sentinel")?(h=n.jsx(y,{}),e[7]=h):h=e[7];let i;e[8]!==s?(i=n.jsx(f.Suspense,{fallback:h,children:n.jsx(_,{promise:s})}),e[8]=s,e[9]=i):i=e[9];let p;return e[10]!==m||e[11]!==u||e[12]!==i?(p=n.jsxs("div",{className:m,children:[u,i]}),e[10]=m,e[11]=u,e[12]=i,e[13]=p):p=e[13],p}const g=[{name:"My Account",href:"#",current:!0,element:j},{name:"Company",href:"#",current:!1,element:j},{name:"Team Members",href:"#",current:!1,element:j},{name:"Billing",href:"#",current:!1,element:P}];function U(){const[c,e]=f.useState(0),t=f.useRef(new Set([g[c]]));function s(r){g[c].current=!1,g[r].current=!0;const a=g[r];t.current.has(a)||t.current.add(a),e(r)}let l=Array.from(t.current);return n.jsxs("div",{children:[n.jsx(D,{tabs:g,onSwitch:s}),l.map((r,a)=>n.jsx(r.element,{selected:r.current},`z-${a}`))]})}function S(c){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"Tab 切换的过程中，请求接口也是日常开发中非常常见的交互方式。"}),`
`,n.jsx(k,{reload:!0,children:n.jsx(U,{})}),`
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
`,n.jsx(e.p,{children:"其他的逻辑基本保持不变，完整代码和演示效果请在右侧区域查看。请务必结合调试工具中的网络请求一起观察演示效果。"})]})}function V(c={}){const{wrapper:e}=c.components||{};return e?n.jsx(e,{...c,children:n.jsx(S,{...c})}):S(c)}const X={"App.js":A,"Account.jsx":M,"Search.jsx":R,"api.js":T,"Tabs.jsx":z,"List.jsx":I,"Input.jsx":W,"Skeleton.jsx":$,"/public/index.html":{code:E,hidden:!0}};function G(){const c=x.c(1);let e;return c[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(L,{files:X,renderArticle:t=>n.jsx(V,{components:{code:t}})}),c[0]=e):e=c[0],e}export{G as default};
