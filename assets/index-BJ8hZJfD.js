import{c as x,j as n,r as h,a as N}from"./index-CChRFWmF.js";import{C}from"./Cardruntime-DUSy2C1S.js";import{A}from"./index-CJl_FuZi.js";import"./index-BgxcxkDL.js";import"./atom-one-light-CiE-g8ab.js";import"./Preview-DUFWuue_.js";const L=`import {useState, Suspense, useRef} from 'react'
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
`,T=`export const fetchListWithCancel = (number) => {
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
`,W=`import { use } from 'react';
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
`,E=`export default function Input(props) {
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
`,I=`import clsx from 'clsx'
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
`,M=`import clsx from 'clsx'
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
`,B=`function classNames(...classes) {
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
`;function R(...c){return c.filter(Boolean).join(" ")}function z(c){const e=x.c(23),{tabs:t,onSwitch:s}=c;let l;e[0]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),e[0]=l):l=e[0];let r;if(e[1]!==t){let o;e[3]===Symbol.for("react.memo_cache_sentinel")?(o=u=>u.current,e[3]=o):o=e[3],r=t.find(o),e[1]=t,e[2]=r}else r=e[2];let a;e[4]!==s?(a=o=>s(o.target.selectedIndex),e[4]=s,e[5]=a):a=e[5];let m;if(e[6]!==t){let o;e[8]===Symbol.for("react.memo_cache_sentinel")?(o=u=>n.jsx("option",{children:u.name},u.name),e[8]=o):o=e[8],m=t.map(o),e[6]=t,e[7]=m}else m=e[7];let i;e[9]!==r.name||e[10]!==a||e[11]!==m?(i=n.jsxs("div",{className:"hidden",children:[l,n.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:r.name,onChange:a,children:m})]}),e[9]=r.name,e[10]=a,e[11]=m,e[12]=i):i=e[12];let d;if(e[13]!==s||e[14]!==t){let o;e[16]!==s?(o=(u,v)=>n.jsx("a",{href:u.href,className:R(u.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":u.current?"page":void 0,onClick:()=>s(v),children:u.name},u.name),e[16]=s,e[17]=o):o=e[17],d=t.map(o),e[13]=s,e[14]=t,e[15]=d}else d=e[15];let p;e[18]!==d?(p=n.jsx("div",{className:"block",children:n.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:d})}),e[18]=d,e[19]=p):p=e[19];let f;return e[20]!==i||e[21]!==p?(f=n.jsxs("div",{children:[i,p]}),e[20]=i,e[21]=p,e[22]=f):f=e[22],f}document.documentElement.style.fontSize="14px";function y(c){const e=x.c(3);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=n.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e[0]=t):t=e[0];let s;e[1]===Symbol.for("react.memo_cache_sentinel")?(s=n.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e[1]=s):s=e[1];let l;return e[2]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:n.jsxs("div",{className:"animate-pulse flex space-x-4",children:[t,n.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[s,n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),n.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})}),e[2]=l):l=e[2],l}const j=c=>{let e=new AbortController,t=e.signal;const s=new Promise(l=>{fetch(`https://randomuser.me/api/?results=${c}&inc=name,gender,email,nat,picture&noinfo`,{signal:t}).then(r=>{l(r.json())}).catch(()=>{console.log("接口成功取消！")})});return s.cancel=()=>{e&&e.abort()},s};function k(c){const e=x.c(5),{promise:t}=c,{results:s}=h.use(t);let l;if(e[0]!==s){let a;e[2]===Symbol.for("react.memo_cache_sentinel")?(a=(m,i)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:m.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:m.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${i}`),e[2]=a):a=e[2],l=s.map(a),e[0]=s,e[1]=l}else l=e[1];let r;return e[3]!==l?(r=n.jsx("div",{children:l}),e[3]=l,e[4]=r):r=e[4],r}function g(c){const e=x.c(9);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=()=>j(5),e[0]=t):t=e[0];const[s]=h.useState(t),l=!c.selected;let r;e[1]!==l?(r=N({hidden:l}),e[1]=l,e[2]=r):r=e[2];const a=r;let m;e[3]===Symbol.for("react.memo_cache_sentinel")?(m=n.jsx(y,{}),e[3]=m):m=e[3];let i;e[4]!==s?(i=n.jsx(h.Suspense,{fallback:m,children:n.jsx(k,{promise:s})}),e[4]=s,e[5]=i):i=e[5];let d;return e[6]!==a||e[7]!==i?(d=n.jsx("div",{className:a,children:i}),e[6]=a,e[7]=i,e[8]=d):d=e[8],d}function q(c){const e=x.c(6);let t;e[0]!==c?({...t}=c,e[0]=c,e[1]=t):t=e[1];let s;e[2]===Symbol.for("react.memo_cache_sentinel")?(s=n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),e[2]=s):s=e[2];let l;e[3]===Symbol.for("react.memo_cache_sentinel")?(l={outline:"none"},e[3]=l):l=e[3];let r;return e[4]!==t?(r=n.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[s,n.jsx("input",{className:"flex-1 !border-none p-2",style:l,type:"text",...t})]}),e[4]=t,e[5]=r):r=e[5],r}function F(c){const e=x.c(14);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=()=>j(10),e[0]=t):t=e[0];const[s,l]=h.useState(t);let r;e[1]!==s?(r=function(_){s.cancel();const w=_.target.value.length%10;l(j(w))},e[1]=s,e[2]=r):r=e[2];const a=r,m=!c.selected;let i;e[3]!==m?(i=N("pt-4",{hidden:m}),e[3]=m,e[4]=i):i=e[4];const d=i;let p;e[5]!==a?(p=n.jsx(q,{onChange:a,placeholder:"Enter something"}),e[5]=a,e[6]=p):p=e[6];let f;e[7]===Symbol.for("react.memo_cache_sentinel")?(f=n.jsx(y,{}),e[7]=f):f=e[7];let o;e[8]!==s?(o=n.jsx(h.Suspense,{fallback:f,children:n.jsx(k,{promise:s})}),e[8]=s,e[9]=o):o=e[9];let u;return e[10]!==d||e[11]!==p||e[12]!==o?(u=n.jsxs("div",{className:d,children:[p,o]}),e[10]=d,e[11]=p,e[12]=o,e[13]=u):u=e[13],u}const b=[{name:"My Account",href:"#",current:!0,element:g},{name:"Company",href:"#",current:!1,element:g},{name:"Team Members",href:"#",current:!1,element:g},{name:"Billing",href:"#",current:!1,element:F}];function D(){const[c,e]=h.useState(0),t=h.useRef(new Set([b[c]]));function s(r){b[c].current=!1,b[r].current=!0;const a=b[r];t.current.has(a)||t.current.add(a),e(r)}let l=Array.from(t.current);return n.jsxs("div",{children:[n.jsx(z,{tabs:b,onSwitch:s}),l.map((r,a)=>n.jsx(r.element,{selected:r.current},`z-${a}`))]})}function S(c){const e={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(C,{reload:!0,children:n.jsx(D,{})}),`
`,n.jsx(e.p,{children:"这个案例的实现就稍微有点难度了。我们需要满足如下条件"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"1、初始化时，只渲染默认的当前列页，而不会渲染其他任何未被点击过的页面/组件。"}),`
`,n.jsx(e.li,{children:"2、渲染过的页面，在切换离开之后，需要缓存下来，下一次切换回事来直接显示即可，效果类似于 keep-alive"}),`
`,n.jsx(e.li,{children:"3、每个 tab 按钮，对应一个页面，按钮与页面之间应该是 1 对 1 的关系"}),`
`]}),`
`,n.jsx(e.p,{children:"首先，我们应该设计 tabs 的格式如下。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const tabs = [
  { name: 'My Account', href: '#', current: true, element: Account },
  { name: 'Company', href: '#', current: false, element: Account },
  { name: 'Team Members', href: '#', current: false, element: Account },
  { name: 'Billing', href: '#', current: false, element: Search },
]
`})}),`
`,n.jsx(e.p,{children:"由于是一对一的关系，因此每个项可以自由对应需求所需要的页面组件"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"这里需要注意的是，虽然有几个对应的组件名是一样的，但是他们最终的实例是不同的"}),`
`]}),`
`,n.jsx(e.p,{children:"接下来比较难的是，如何设计数据来确保同时满足上面的几个需求。"}),`
`,n.jsx(e.p,{children:"我的方案如下"}),`
`,n.jsx(e.p,{children:"首先，定义一个 map 对象，用于存储已经渲染过的页面。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const map = useRef(new Set([tabs[current]]))
`})}),`
`,n.jsx(e.p,{children:"每次点击时，将页面案例加进来，但是在这之前，需要判断是否已经存在"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function __handler(index) {
  tabs[current].current = false
  tabs[index].current = true

  const item = tabs[index]
  if (!map.current.has(item)) {
    map.current.add(item)
  }

  switchToSelected(index)
}
`})}),`
`,n.jsx(e.p,{children:"最后遍历 map 中的数据将页面渲染出来即可。"}),`
`,n.jsx(e.p,{children:"这里需要注意的是，由于页面是 1 对 1 的关系，因此，每个页面的数据单独维护即可。"}),`
`,n.jsx(e.p,{children:"例如其中一个组件代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import clsx from 'clsx'
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
`,n.jsxs(e.p,{children:["这里我们还要考虑一个布局的问题。只能当前选中的页面显示出来。因此我们这里通过利用 ",n.jsx(e.code,{children:"display"})," 的值来控制。传入一个 ",n.jsx(e.code,{children:"selected"})," 来判断是否需要将其值从 ",n.jsx(e.code,{children:"block"})," 改变为 ",n.jsx(e.code,{children:"none"})]}),`
`,n.jsx(e.p,{children:"完整代码与案例演示请看右侧区域。"})]})}function P(c={}){const{wrapper:e}=c.components||{};return e?n.jsx(e,{...c,children:n.jsx(S,{...c})}):S(c)}const U={"App.js":L,"Account.jsx":I,"Search.jsx":M,"api.js":T,"Tabs.jsx":B,"List.jsx":W,"Input.jsx":{code:E,hidden:!0},"Skeleton.jsx":{code:$,hidden:!0}};function K(){const c=x.c(1);let e;return c[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(A,{files:U,renderArticle:t=>n.jsx(P,{components:{code:t}})}),c[0]=e):e=c[0],e}export{K as default};
