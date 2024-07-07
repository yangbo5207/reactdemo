import{c as x,j as n,r as h,a as S}from"./index-BU66eoMn.js";import{C as w}from"./Cardruntime-i1Xwjvd9.js";import{A as C}from"./index-D85g-oA7.js";import"./index-DVoFd2M3.js";import"./index-DMQVh9lL.js";import"./Preview-Cj2Cm_i6.js";import"./atom-one-light-Lmvsdv_-.js";const A=`import {useState, Suspense, useRef} from 'react'
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
`,L=`export const fetchListWithCancel = (number) => {
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
`,T=`document.documentElement.style.fontSize = '14px'

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
`,$=`import { use } from 'react';
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
`,E=`import clsx from 'clsx'
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
`,I=`import clsx from 'clsx'
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
`,M=`function classNames(...classes) {
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
`;function R(...s){return s.filter(Boolean).join(" ")}function B(s){const e=x.c(23),{tabs:r,onSwitch:t}=s;let l;e[0]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),e[0]=l):l=e[0];let c;if(e[1]!==r){let a;e[3]===Symbol.for("react.memo_cache_sentinel")?(a=p=>p.current,e[3]=a):a=e[3],c=r.find(a),e[1]=r,e[2]=c}else c=e[2];let m;e[4]!==t?(m=a=>t(a.target.selectedIndex),e[4]=t,e[5]=m):m=e[5];let o;if(e[6]!==r){let a;e[8]===Symbol.for("react.memo_cache_sentinel")?(a=p=>n.jsx("option",{children:p.name},p.name),e[8]=a):a=e[8],o=r.map(a),e[6]=r,e[7]=o}else o=e[7];let i;e[9]!==c.name||e[10]!==m||e[11]!==o?(i=n.jsxs("div",{className:"hidden",children:[l,n.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:c.name,onChange:m,children:o})]}),e[9]=c.name,e[10]=m,e[11]=o,e[12]=i):i=e[12];let d;if(e[13]!==t||e[14]!==r){let a;e[16]!==t?(a=(p,j)=>n.jsx("a",{href:p.href,className:R(p.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":p.current?"page":void 0,onClick:()=>t(j),children:p.name},p.name),e[16]=t,e[17]=a):a=e[17],d=r.map(a),e[13]=t,e[14]=r,e[15]=d}else d=e[15];let u;e[18]!==d?(u=n.jsx("div",{className:"block",children:n.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:d})}),e[18]=d,e[19]=u):u=e[19];let f;return e[20]!==i||e[21]!==u?(f=n.jsxs("div",{children:[i,u]}),e[20]=i,e[21]=u,e[22]=f):f=e[22],f}document.documentElement.style.fontSize="14px";function N(s){const e=x.c(3);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e[0]=r):r=e[0];let t;e[1]===Symbol.for("react.memo_cache_sentinel")?(t=n.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e[1]=t):t=e[1];let l;return e[2]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:n.jsxs("div",{className:"animate-pulse flex space-x-4",children:[r,n.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t,n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),n.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})}),e[2]=l):l=e[2],l}const g=s=>{let e=new AbortController,r=e.signal;const t=new Promise(l=>{fetch(`https://randomuser.me/api/?results=${s}&inc=name,gender,email,nat,picture&noinfo`,{signal:r}).then(c=>{l(c.json())}).catch(()=>{console.log("接口成功取消！")})});return t.cancel=()=>{e&&e.abort()},t};function y(s){const e=x.c(5),{promise:r}=s,{results:t}=h.use(r);let l;if(e[0]!==t){let m;e[2]===Symbol.for("react.memo_cache_sentinel")?(m=(o,i)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:o.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:o.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${i}`),e[2]=m):m=e[2],l=t.map(m),e[0]=t,e[1]=l}else l=e[1];let c;return e[3]!==l?(c=n.jsx("div",{children:l}),e[3]=l,e[4]=c):c=e[4],c}function b(s){const e=x.c(9);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=()=>g(5),e[0]=r):r=e[0];const[t]=h.useState(r),l=!s.selected;let c;e[1]!==l?(c=S({hidden:l}),e[1]=l,e[2]=c):c=e[2];const m=c;let o;e[3]===Symbol.for("react.memo_cache_sentinel")?(o=n.jsx(N,{}),e[3]=o):o=e[3];let i;e[4]!==t?(i=n.jsx(h.Suspense,{fallback:o,children:n.jsx(y,{promise:t})}),e[4]=t,e[5]=i):i=e[5];let d;return e[6]!==m||e[7]!==i?(d=n.jsx("div",{className:m,children:i}),e[6]=m,e[7]=i,e[8]=d):d=e[8],d}function z(s){const e=x.c(6);let r;e[0]!==s?({...r}=s,e[0]=s,e[1]=r):r=e[1];let t;e[2]===Symbol.for("react.memo_cache_sentinel")?(t=n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),e[2]=t):t=e[2];let l;e[3]===Symbol.for("react.memo_cache_sentinel")?(l={outline:"none"},e[3]=l):l=e[3];let c;return e[4]!==r?(c=n.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[t,n.jsx("input",{className:"flex-1 !border-none p-2",style:l,type:"text",...r})]}),e[4]=r,e[5]=c):c=e[5],c}function q(s){const e=x.c(14);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=()=>g(10),e[0]=r):r=e[0];const[t,l]=h.useState(r);let c;e[1]!==t?(c=function(_){t.cancel();const k=_.target.value.length%10;l(g(k))},e[1]=t,e[2]=c):c=e[2];const m=c,o=!s.selected;let i;e[3]!==o?(i=S("pt-4",{hidden:o}),e[3]=o,e[4]=i):i=e[4];const d=i;let u;e[5]!==m?(u=n.jsx(z,{onChange:m,placeholder:"Enter something"}),e[5]=m,e[6]=u):u=e[6];let f;e[7]===Symbol.for("react.memo_cache_sentinel")?(f=n.jsx(N,{}),e[7]=f):f=e[7];let a;e[8]!==t?(a=n.jsx(h.Suspense,{fallback:f,children:n.jsx(y,{promise:t})}),e[8]=t,e[9]=a):a=e[9];let p;return e[10]!==d||e[11]!==u||e[12]!==a?(p=n.jsxs("div",{className:d,children:[u,a]}),e[10]=d,e[11]=u,e[12]=a,e[13]=p):p=e[13],p}function F(){const s=x.c(6),[e,r]=h.useState(0),t=h.useRef([{name:"My Account",href:"#",current:!0,element:b},{name:"Company",href:"#",current:!1,element:b},{name:"Team Members",href:"#",current:!1,element:b},{name:"Billing",href:"#",current:!1,element:q}]),l=h.useRef(new Set([t.current[e]])),c=function(a){t.current[e].current=!1,t.current[a].current=!0;const p=t.current[a];l.current.has(p)||l.current.add(p),r(a)},m=Array.from(l.current);let o;s[0]!==c?(o=n.jsx(B,{tabs:t.current,onSwitch:c}),s[0]=c,s[1]=o):o=s[1];let i;s[2]===Symbol.for("react.memo_cache_sentinel")?(i=(f,a)=>n.jsx(f.element,{selected:f.current},`z-${a}`),s[2]=i):i=s[2];const d=m.map(i);let u;return s[3]!==o||s[4]!==d?(u=n.jsxs("div",{children:[o,d]}),s[3]=o,s[4]=d,s[5]=u):u=s[5],u}function v(s){const e={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(w,{reload:!0,children:n.jsx(F,{})}),`
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
`,n.jsx(e.p,{children:"完整代码与案例演示请看右侧区域。"})]})}function D(s={}){const{wrapper:e}=s.components||{};return e?n.jsx(e,{...s,children:n.jsx(v,{...s})}):v(s)}const P={"App.js":A,"Account.jsx":E,"Search.jsx":I,"api.js":L,"Tabs.jsx":M,"List.jsx":$,"Input.jsx":{code:W,hidden:!0},"Skeleton.jsx":{code:T,hidden:!0}};function K(){const s=x.c(1);let e;return s[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(C,{files:P,renderArticle:r=>n.jsx(D,{components:{code:r}})}),s[0]=e):e=s[0],e}export{K as default};
