import{c as p,j as n,r as m}from"./index-Di4F1x74.js";import{C as j}from"./Cardruntime-Cp1f-EP2.js";import{A as b}from"./index-DrkOu_iN.js";import"./Preview-BBadGkLg.js";import"./atom-one-light-C8MDVoqG.js";const v=`import {useState, Suspense} from 'react'
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
`,N=`export const fetchList = async (number) => {
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
`,S=`document.documentElement.style.fontSize = '14px'

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
`,y=`<!DOCTYPE html>
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
`,C=`import { use, useEffect } from 'react';

function CurrentList({promise, onComplete}) {
  const {results} = use(promise)

  useEffect(() => {
    onComplete && onComplete(results.length)
  }, [results.length]);

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

export default CurrentList
`,w=`function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs({tabs, onSwitch}) {
  return (
    <div>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <a
              key={tab.name}
              href="#"
              onClick={() => onSwitch(index)}
              className={classNames(
                tab.current
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700',
                'flex whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
              {tab.count ? (
                <span
                  className={classNames(
                    tab.current ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900',
                    'ml-3 hidden rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block',
                  )}
                >
                  {tab.count}
                </span>
              ) : null}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
`;document.documentElement.style.fontSize="14px";function L(s){const e=p.c(3);let l;e[0]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e[0]=l):l=e[0];let r;e[1]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e[1]=r):r=e[1];let t;return e[2]===Symbol.for("react.memo_cache_sentinel")?(t=n.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:n.jsxs("div",{className:"animate-pulse flex space-x-4",children:[l,n.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[r,n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),n.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})}),e[2]=t):t=e[2],t}const h=s=>{let e=new AbortController,l=e.signal;const r=new Promise(t=>{fetch(`https://randomuser.me/api/?results=${s}&inc=name,gender,email,nat,picture&noinfo`,{signal:l}).then(c=>{t(c.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function x(...s){return s.filter(Boolean).join(" ")}function _(s){const e=p.c(7),{tabs:l,onSwitch:r}=s;let t;if(e[0]!==r||e[1]!==l){let i;e[3]!==r?(i=(a,o)=>n.jsxs("a",{href:"#",onClick:()=>r(o),className:x(a.current?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700","flex whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"),"aria-current":a.current?"page":void 0,children:[a.name,a.count?n.jsx("span",{className:x(a.current?"bg-indigo-100 text-indigo-600":"bg-gray-100 text-gray-900","ml-3 hidden rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block"),children:a.count}):null]},a.name),e[3]=r,e[4]=i):i=e[4],t=l.map(i),e[0]=r,e[1]=l,e[2]=t}else t=e[2];let c;return e[5]!==t?(c=n.jsx("div",{children:n.jsx("div",{className:"border-b border-gray-200",children:n.jsx("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:t})})}),e[5]=t,e[6]=c):c=e[6],c}function k(s){const e=p.c(10),{promise:l,onComplete:r}=s,{results:t}=m.use(l);let c;e[0]!==r||e[1]!==t.length?(c=()=>{r&&r(t.length)},e[0]=r,e[1]=t.length,e[2]=c):c=e[2];let i;e[3]!==t.length?(i=[t.length],e[3]=t.length,e[4]=i):i=e[4],m.useEffect(c,i);let a;if(e[5]!==t){let d;e[7]===Symbol.for("react.memo_cache_sentinel")?(d=(u,g)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:u.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:u.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${g}`),e[7]=d):d=e[7],a=t.map(d),e[5]=t,e[6]=a}else a=e[6];let o;return e[8]!==a?(o=n.jsx("div",{children:a}),e[8]=a,e[9]=o):o=e[9],o}const T=[{name:"Applied",href:"#",count:0,current:!0},{name:"Phone Screening",href:"#",count:0,current:!1},{name:"Interview",href:"#",count:0,current:!1},{name:"Offer",href:"#",count:0,current:!1},{name:"Disqualified",href:"#",count:0,current:!1}];function A(){const[s,e]=m.useState(0),[l,r]=m.useState(()=>h(5)),[t,c]=m.useState(T);function i(o){t[s].current=!1,t[o].current=!0,e(o),c([...t]),l.cancel();const d=Math.floor(Math.random()*10);r(h(d))}function a(o){t[s].count=o,c([...t])}return n.jsxs("div",{children:[n.jsx(_,{tabs:t,onSwitch:i}),n.jsx(m.Suspense,{fallback:n.jsx(L,{}),children:n.jsx(k,{promise:l,onComplete:a})})]})}function f(s){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"Tab 切换的过程中，请求接口也是日常开发中非常常见的交互方式。"}),`
`,n.jsx(j,{reload:!0,children:n.jsx(A,{})}),`
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
`,n.jsx(e.p,{children:"其他的逻辑基本保持不变，完整代码和演示效果请在右侧区域查看。请务必结合调试工具中的网络请求一起观察演示效果。"})]})}function E(s={}){const{wrapper:e}=s.components||{};return e?n.jsx(e,{...s,children:n.jsx(f,{...s})}):f(s)}const $={"App.js":v,"api.js":N,"List.jsx":C,"Tabs.jsx":w,"Skeleton.jsx":S,"/public/index.html":y};function B(){const s=p.c(1);let e;return s[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(b,{files:$,renderArticle:l=>n.jsx(E,{components:{code:l}})}),s[0]=e):e=s[0],e}export{B as default};
