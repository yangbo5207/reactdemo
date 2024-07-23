import{j as e,r as c,c as p}from"./index-BxXbnW9e.js";import{C as f}from"./Cardruntime-DF2YgfxL.js";import{A as b}from"./index-LK1iCBIb.js";import"./index-BEsnAH_r.js";import"./activecode-BfSkJlGQ.js";import"./index-DMQVh9lL.js";import"./Preview-Cfw1m546.js";const j=`import {useState, Suspense, useRef} from 'react'
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
`,g=`export const fetchListWithCancel = (number) => {
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
`,v=`document.documentElement.style.fontSize = '14px'

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
`,N=`import { use } from 'react';
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
`,S=`export default function Input(props) {
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
`,k=`import clsx from 'clsx'
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
`,y=`import clsx from 'clsx'
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
`,w=`function classNames(...classes) {
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
`;function C(...t){return t.filter(Boolean).join(" ")}function A({tabs:t,onSwitch:n}){return e.jsxs("div",{children:[e.jsxs("div",{className:"hidden",children:[e.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),e.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:t.find(s=>s.current).name,onChange:s=>n(s.target.selectedIndex),children:t.map(s=>e.jsx("option",{children:s.name},s.name))})]}),e.jsx("div",{className:"block",children:e.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:t.map((s,r)=>e.jsx("a",{href:s.href,className:C(s.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":s.current?"page":void 0,onClick:()=>n(r),children:s.name},s.name))})})]})}document.documentElement.style.fontSize="14px";function h(t){return e.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:e.jsxs("div",{className:"animate-pulse flex space-x-4",children:[e.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),e.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const m=t=>{let n=new AbortController,s=n.signal;const r=new Promise(l=>{fetch(`https://randomuser.me/api/?results=${t}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(o=>{l(o.json())}).catch(()=>{console.log("接口成功取消！")})});return r.cancel=()=>{n&&n.abort()},r};function x({promise:t}){const{results:n}=c.use(t);return e.jsx("div",{children:n.map((s,r)=>e.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[e.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),e.jsxs("div",{className:"flex-1 ml-4",children:[e.jsx("div",{className:"font-bold",children:s.name.last}),e.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${r}`))})}function d(t){const[n,s]=c.useState(()=>m(5)),r=p({hidden:!t.selected});return e.jsx("div",{className:r,children:e.jsx(c.Suspense,{fallback:e.jsx(h,{}),children:e.jsx(x,{promise:n})})})}function L(t){const{...n}=t;return e.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),e.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...n})]})}function T(t){const[n,s]=c.useState(()=>m(10));function r(o){n.cancel();const a=o.target.value.length%10;s(m(a))}const l=p("pt-4",{hidden:!t.selected});return e.jsxs("div",{className:l,children:[e.jsx(L,{onChange:r,placeholder:"Enter something"}),e.jsx(c.Suspense,{fallback:e.jsx(h,{}),children:e.jsx(x,{promise:n})})]})}function _(){const[t,n]=c.useState(0),s=c.useRef([{name:"My Account",href:"#",current:!0,element:d},{name:"Company",href:"#",current:!1,element:d},{name:"Team Members",href:"#",current:!1,element:d},{name:"Billing",href:"#",current:!1,element:T}]),r=c.useRef(new Set([s.current[t]]));function l(a){s.current[t].current=!1,s.current[a].current=!0;const i=s.current[a];r.current.has(i)||r.current.add(i),n(a)}let o=Array.from(r.current);return e.jsxs("div",{children:[e.jsx(A,{tabs:s.current,onSwitch:l}),o.map((a,i)=>e.jsx(a.element,{selected:a.current},`z-${i}`))]})}function u(t){const n={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{reload:!0,children:e.jsx(_,{})}),`
`,e.jsx(n.p,{children:"这个案例的实现就稍微有点难度了。我们需要满足如下条件"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"1、初始化时，只渲染默认的当前列页，而不会渲染其他任何未被点击过的页面/组件。"}),`
`,e.jsx(n.li,{children:"2、渲染过的页面，在切换离开之后，需要缓存下来，下一次切换回事来直接显示即可，效果类似于 keep-alive"}),`
`,e.jsx(n.li,{children:"3、每个 tab 按钮，对应一个页面，按钮与页面之间应该是 1 对 1 的关系"}),`
`]}),`
`,e.jsx(n.p,{children:"首先，我们应该设计 tabs 的格式如下。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const tabs = [
  { name: 'My Account', href: '#', current: true, element: Account },
  { name: 'Company', href: '#', current: false, element: Account },
  { name: 'Team Members', href: '#', current: false, element: Account },
  { name: 'Billing', href: '#', current: false, element: Search },
]
`})}),`
`,e.jsx(n.p,{children:"由于是一对一的关系，因此每个项可以自由对应需求所需要的页面组件"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"这里需要注意的是，虽然有几个对应的组件名是一样的，但是他们最终的实例是不同的"}),`
`]}),`
`,e.jsx(n.p,{children:"接下来比较难的是，如何设计数据来确保同时满足上面的几个需求。"}),`
`,e.jsx(n.p,{children:"我的方案如下"}),`
`,e.jsx(n.p,{children:"首先，定义一个 map 对象，用于存储已经渲染过的页面。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const map = useRef(new Set([tabs[current]]))
`})}),`
`,e.jsx(n.p,{children:"每次点击时，将页面案例加进来，但是在这之前，需要判断是否已经存在"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function __handler(index) {
  tabs[current].current = false
  tabs[index].current = true

  const item = tabs[index]
  if (!map.current.has(item)) {
    map.current.add(item)
  }

  switchToSelected(index)
}
`})}),`
`,e.jsx(n.p,{children:"最后遍历 map 中的数据将页面渲染出来即可。"}),`
`,e.jsx(n.p,{children:"这里需要注意的是，由于页面是 1 对 1 的关系，因此，每个页面的数据单独维护即可。"}),`
`,e.jsx(n.p,{children:"例如其中一个组件代码如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import clsx from 'clsx'
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
`})}),`
`,e.jsxs(n.p,{children:["这里我们还要考虑一个布局的问题。只能当前选中的页面显示出来。因此我们这里通过利用 ",e.jsx(n.code,{children:"display"})," 的值来控制。传入一个 ",e.jsx(n.code,{children:"selected"})," 来判断是否需要将其值从 ",e.jsx(n.code,{children:"block"})," 改变为 ",e.jsx(n.code,{children:"none"})]}),`
`,e.jsx(n.p,{children:"完整代码与案例演示请看右侧区域。"})]})}function W(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(u,{...t})}):u(t)}const I={"App.js":j,"Account.jsx":k,"Search.jsx":y,"api.js":g,"Tabs.jsx":w,"List.jsx":N,"Input.jsx":{code:S,hidden:!0},"Skeleton.jsx":{code:v,hidden:!0}};function F(){return e.jsx(b,{files:I,renderArticle:t=>e.jsx(W,{components:{code:t}})})}export{F as default};
