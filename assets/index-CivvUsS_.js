import{j as e,r as o}from"./index-BxXbnW9e.js";import{C as h}from"./Cardruntime-DF2YgfxL.js";import{A as b}from"./index-LK1iCBIb.js";import"./index-BEsnAH_r.js";import"./activecode-BfSkJlGQ.js";import"./index-DMQVh9lL.js";import"./Preview-Cfw1m546.js";const g=`import {useState, Suspense, useCallback} from 'react'
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
`,v=`export const fetchList = async (number) => {
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

`,j=`document.documentElement.style.fontSize = '14px'

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
`,N=`import { use, useEffect } from 'react';

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
`,S=`function classNames(...classes) {
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
`;document.documentElement.style.fontSize="14px";function C(t){return e.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:e.jsxs("div",{className:"animate-pulse flex space-x-4",children:[e.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),e.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const i=t=>{let n=new AbortController,s=n.signal;const a=new Promise(r=>{fetch(`https://randomuser.me/api/?results=${t}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(l=>{localStorage.setItem("modal","xxx"),r(l.json())}).catch(()=>{console.log("接口成功取消！")})});return a.cancel=()=>{n&&n.abort()},a};function d(...t){return t.filter(Boolean).join(" ")}function y({tabs:t,onSwitch:n}){return e.jsx("div",{children:e.jsx("div",{className:"border-b border-gray-200",children:e.jsx("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:t.map((s,a)=>e.jsxs("a",{href:"#",onClick:()=>n(a),className:d(s.current?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700","flex whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"),"aria-current":s.current?"page":void 0,children:[s.name,s.count?e.jsx("span",{className:d(s.current?"bg-indigo-100 text-indigo-600":"bg-gray-100 text-gray-900","ml-3 rounded-full px-2.5 py-0.5 text-xs font-medium inline-block"),children:s.count}):null]},s.name))})})})}function w({promise:t,onComplete:n}){const{results:s}=o.use(t);return o.useEffect(()=>{n&&n(s.length)},[s.length]),e.jsx("div",{children:s.map((a,r)=>e.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[e.jsx("img",{className:"w-12 h-12 rounded-full",src:a.picture.large,alt:""}),e.jsxs("div",{className:"flex-1 ml-4",children:[e.jsx("div",{className:"font-bold",children:a.name.last}),e.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}const T=[{name:"Applied",href:"#",count:0,current:!0},{name:"Phone Screening",href:"#",count:0,current:!1},{name:"Interview",href:"#",count:0,current:!1},{name:"Offer",href:"#",count:0,current:!1},{name:"Disqualified",href:"#",count:0,current:!1}];function k(){const[t,n]=o.useState(0),[s,a]=o.useState(()=>i(5)),[r,l]=o.useState(T);function u(c){r.forEach(f=>{f.current=!1}),r[c].current=!0,n(c),l([...r]),s.cancel();const x=Math.floor(Math.random()*10);a(i(x))}function p(c){r[t].count=c,l([...r])}return e.jsxs("div",{children:[e.jsx(y,{tabs:r,onSwitch:u}),e.jsx(o.Suspense,{fallback:e.jsx(C,{}),children:e.jsx(w,{promise:s,onComplete:p})})]})}function m(t){const n={code:"code",p:"p",pre:"pre",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{reload:!0,children:e.jsx(k,{})}),`
`,e.jsx(n.p,{children:"有的时候我们需要从 Suspense 包裹的子组件中获取数据。"}),`
`,e.jsx(n.p,{children:"注意看这个案例。我设计了一个随机数量的请求，每一次请求返回随机数量的列表，Tabs 中的按钮旁边需要显示当前列表的长度。"}),`
`,e.jsx(n.p,{children:"但是此时，和将列表数据直接维护到 state 中不同，此时我们在 state 中维护的是 promise ，然后我们使用 use 从 promise 中读取数据。所以只有子组件使用 use 读取才能获得列表的长度。这个时候，我们如何在保持现有解决方案的前提之下，在父组件中拿到列表的数据呢？"}),`
`,e.jsx(n.p,{children:"首先父组件要拿到子组件的数据，我们可以给子组件传一个事件进去，让子组件在得到数据时，执行这个事件回调。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`<Suspense fallback={<Skeleton />}>
  <List promise={promise} onComplete={__complete} />
</Suspense>
`})}),`
`,e.jsxs(n.p,{children:["子组件在执行 ",e.jsx(n.code,{children:"onComplete"})," 的时候，把父组件需要的数据作为参数返回出来即可"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function CurrentList({promise, onComplete}) {
  const {results} = use(promise)
  onComplete && onComplete(results.length)

  return (...)
}
`})}),`
`,e.jsxs(n.p,{children:["这里我们需要考虑的一个问题就是 ",e.jsx(n.code,{children:"onComplete"})," 的执行时机要怎么比较合适。因为如果 onComplete 中执行逻辑在父组件中，子组件无法控制，因此父组件的执行逻辑有可能会导致子组件re-render，因此我们可以简单使用 useEffect 来防止 onComplete 反复执行"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`function CurrentList({promise, onComplete}) {
  const {results} = use(promise)
+ useEffect(() => {
    onComplete && onComplete(results.length)
+ }, [results.length]);

  return (...)
}
`})}),`
`,e.jsx(n.p,{children:"这样处理之后，我们就可以轻松在父组件中，无压力拿到子组件中的数据了。父组件的代码示例如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function __complete(number) {
  tabs[current].count = number
  changeTabs([...tabs])
}
`})}),`
`,e.jsx(n.p,{children:"完整代码与案例演示查看右侧区域。"})]})}function L(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(m,{...t})}):m(t)}const _={"App.js":g,"api.js":v,"List.jsx":N,"Tabs.jsx":S,"Skeleton.jsx":j};function D(){return e.jsx(b,{files:_,renderArticle:t=>e.jsx(L,{components:{code:t}})})}export{D as default};
