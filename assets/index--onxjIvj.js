import{c as p,j as n,r as m}from"./index-WxVCoI3R.js";import{C as g}from"./Cardruntime-CkAYSVvf.js";import{A as v}from"./index-z4EEj1-x.js";import"./activecode-B_nYYbD8.js";import"./index-DMQVh9lL.js";import"./Preview-B0JUZwug.js";import"./atom-one-light-CeVHWIu6.js";const j=`import {useState, Suspense, useCallback} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import Tabs from './Tabs'
import List from './List'

const config = [
  { name: 'Applied', href: '#', count: 0, current: true },
  { name: 'Phone Screening', href: '#', count: 0, current: false },
  { name: 'Interview', href: '#', count: 0, current: false }
]

export default function Example() {
  const [current, switchToSelected] = useState(0)
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const [tabs, changeTabs] = useState(config)

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)
    changeTabs([...tabs])

    promise.cancel()
    const len = Math.floor(Math.random() * 10)
    update(fetchListWithCancel(len))
  }

  function __complete(number) {
    tabs[current].count = number
    changeTabs([...tabs])
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />

      <Suspense fallback={<Skeleton />}>
        <List promise={promise} onComplete={__complete} />
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
      localStorage.setItem('modal', 'xxx')
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
`,y=`import { use, useEffect } from 'react';

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
`,C=`function classNames(...classes) {
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
                    'ml-3 rounded-full px-2.5 py-0.5 text-xs font-medium inline-block',
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
`;document.documentElement.style.fontSize="14px";function w(s){const e=p.c(3);let a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=n.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e[0]=a):a=e[0];let r;e[1]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e[1]=r):r=e[1];let t;return e[2]===Symbol.for("react.memo_cache_sentinel")?(t=n.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:n.jsxs("div",{className:"animate-pulse flex space-x-4",children:[a,n.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[r,n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),n.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})}),e[2]=t):t=e[2],t}const f=s=>{let e=new AbortController,a=e.signal;const r=new Promise(t=>{fetch(`https://randomuser.me/api/?results=${s}&inc=name,gender,email,nat,picture&noinfo`,{signal:a}).then(l=>{localStorage.setItem("modal","xxx"),t(l.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{e&&e.abort()},r};function h(...s){return s.filter(Boolean).join(" ")}function _(s){const e=p.c(7),{tabs:a,onSwitch:r}=s;let t;if(e[0]!==r||e[1]!==a){let c;e[3]!==r?(c=(o,i)=>n.jsxs("a",{href:"#",onClick:()=>r(i),className:h(o.current?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700","flex whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"),"aria-current":o.current?"page":void 0,children:[o.name,o.count?n.jsx("span",{className:h(o.current?"bg-indigo-100 text-indigo-600":"bg-gray-100 text-gray-900","ml-3 rounded-full px-2.5 py-0.5 text-xs font-medium inline-block"),children:o.count}):null]},o.name),e[3]=r,e[4]=c):c=e[4],t=a.map(c),e[0]=r,e[1]=a,e[2]=t}else t=e[2];let l;return e[5]!==t?(l=n.jsx("div",{children:n.jsx("div",{className:"border-b border-gray-200",children:n.jsx("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:t})})}),e[5]=t,e[6]=l):l=e[6],l}function T(s){const e=p.c(10),{promise:a,onComplete:r}=s,{results:t}=m.use(a);let l;e[0]!==r||e[1]!==t.length?(l=()=>{r&&r(t.length)},e[0]=r,e[1]=t.length,e[2]=l):l=e[2];let c;e[3]!==t.length?(c=[t.length],e[3]=t.length,e[4]=c):c=e[4],m.useEffect(l,c);let o;if(e[5]!==t){let d;e[7]===Symbol.for("react.memo_cache_sentinel")?(d=(u,b)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:u.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:u.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${b}`),e[7]=d):d=e[7],o=t.map(d),e[5]=t,e[6]=o}else o=e[6];let i;return e[8]!==o?(i=n.jsx("div",{children:o}),e[8]=o,e[9]=i):i=e[9],i}const k=[{name:"Applied",href:"#",count:0,current:!0},{name:"Phone Screening",href:"#",count:0,current:!1},{name:"Interview",href:"#",count:0,current:!1},{name:"Offer",href:"#",count:0,current:!1},{name:"Disqualified",href:"#",count:0,current:!1}];function L(){const[s,e]=m.useState(0),[a,r]=m.useState(()=>f(5)),[t,l]=m.useState(k);function c(i){t.forEach(u=>{u.current=!1}),t[i].current=!0,e(i),l([...t]),a.cancel();const d=Math.floor(Math.random()*10);r(f(d))}function o(i){t[s].count=i,l([...t])}return n.jsxs("div",{children:[n.jsx(_,{tabs:t,onSwitch:c}),n.jsx(m.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(T,{promise:a,onComplete:o})})]})}function x(s){const e={code:"code",p:"p",pre:"pre",...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(g,{reload:!0,children:n.jsx(L,{})}),`
`,n.jsx(e.p,{children:"有的时候我们需要从 Suspense 包裹的子组件中获取数据。"}),`
`,n.jsx(e.p,{children:"注意看这个案例。我设计了一个随机数量的请求，每一次请求返回随机数量的列表，Tabs 中的按钮旁边需要显示当前列表的长度。"}),`
`,n.jsx(e.p,{children:"但是此时，和将列表数据直接维护到 state 中不同，此时我们在 state 中维护的是 promise ，然后我们使用 use 从 promise 中读取数据。所以只有子组件使用 use 读取才能获得列表的长度。这个时候，我们如何在保持现有解决方案的前提之下，在父组件中拿到列表的数据呢？"}),`
`,n.jsx(e.p,{children:"首先父组件要拿到子组件的数据，我们可以给子组件传一个事件进去，让子组件在得到数据时，执行这个事件回调。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`<Suspense fallback={<Skeleton />}>
  <List promise={promise} onComplete={__complete} />
</Suspense>
`})}),`
`,n.jsxs(e.p,{children:["子组件在执行 ",n.jsx(e.code,{children:"onComplete"})," 的时候，把父组件需要的数据作为参数返回出来即可"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function CurrentList({promise, onComplete}) {
  const {results} = use(promise)
  onComplete && onComplete(results.length)

  return (...)
}
`})}),`
`,n.jsxs(e.p,{children:["这里我们需要考虑的一个问题就是 ",n.jsx(e.code,{children:"onComplete"})," 的执行时机要怎么比较合适。因为如果 onComplete 中执行逻辑在父组件中，子组件无法控制，因此父组件的执行逻辑有可能会导致子组件re-render，因此我们可以简单使用 useEffect 来防止 onComplete 反复执行"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`function CurrentList({promise, onComplete}) {
  const {results} = use(promise)
+ useEffect(() => {
    onComplete && onComplete(results.length)
+ }, [results.length]);

  return (...)
}
`})}),`
`,n.jsx(e.p,{children:"这样处理之后，我们就可以轻松在父组件中，无压力拿到子组件中的数据了。父组件的代码示例如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function __complete(number) {
  tabs[current].count = number
  changeTabs([...tabs])
}
`})}),`
`,n.jsx(e.p,{children:"完整代码与案例演示查看右侧区域。"})]})}function E(s={}){const{wrapper:e}=s.components||{};return e?n.jsx(e,{...s,children:n.jsx(x,{...s})}):x(s)}const A={"App.js":j,"api.js":N,"List.jsx":y,"Tabs.jsx":C,"Skeleton.jsx":S};function B(){const s=p.c(1);let e;return s[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(v,{files:A,renderArticle:a=>n.jsx(E,{components:{code:a}})}),s[0]=e):e=s[0],e}export{B as default};
