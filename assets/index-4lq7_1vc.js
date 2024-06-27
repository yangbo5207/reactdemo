import{c as x,j as n,t as _,a as C,r as f}from"./index-CChRFWmF.js";import{I as S,S as L,a as M}from"./index-CXet4OQj.js";import{C as b}from"./Cardruntime-DUSy2C1S.js";import{A as R}from"./index-CJl_FuZi.js";import"./index-BgxcxkDL.js";import"./atom-one-light-CiE-g8ab.js";import"./Preview-DUFWuue_.js";const A=`import {useState, Suspense, useDeferredValue} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import Tabs from './Tabs'
import List from './List'
import Spin from './Spin'

const tabs = [
  { name: 'My Account', href: '#', current: true },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
]


export default function Example() {
  const [current, switchToSelected] = useState(0)
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const deferred = useDeferredValue(promise)

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)

    promise.cancel()
    update(fetchListWithCancel(5))
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />

      <Suspense fallback={<Skeleton />}>
        <Spin loading={deferred !== promise} type='mask'>
          <List promise={deferred} />
        </Spin>
      </Suspense>
    </div>
  )
}
`,D=`const random = [
  'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
  'Whether you work on your own or with thousands of other developers, using React feels the same.',
  'React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.',
  'This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ',
  'You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.'
]

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

export const getMessage = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {
    value: random[i]
  }
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
`,W=`export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full">
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
`,V=`function classNames(...classes) {
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
              onClick={(e) => {
                e.preventDefault();
                onSwitch(i)
              }}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
`,B=t=>{const e=x.c(13);let s;e[0]!==t.message?(s=unescape(t.message.replace(/\\u/gi,"%u")),e[0]=t.message,e[1]=s):s=e[1];const a=s,r=t.title||"";let i;e[2]!==r?(i=unescape(r.replace(/\\u/gi,"%u")),e[2]=r,e[3]=i):i=e[3];const c=i;if(!a){let o;return e[4]===Symbol.for("react.memo_cache_sentinel")?(o=n.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow justify-center items-center flex-col text-gray-500",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),n.jsx("div",{className:"mt-2",children:"no data."})]}),e[4]=o):o=e[4],o}let l;e[5]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),e[5]=l):l=e[5];const d=c||"Heads Up!";let m;e[6]!==d?(m=n.jsx("div",{children:d}),e[6]=d,e[7]=m):m=e[7];let u;e[8]!==a?(u=n.jsx("div",{className:"text-sm mt-1 text-gray-600",children:a}),e[8]=a,e[9]=u):u=e[9];let p;return e[10]!==m||e[11]!==u?(p=n.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[l,n.jsxs("div",{className:"flex-1 ml-3",children:[m,u]})]}),e[10]=m,e[11]=u,e[12]=p):p=e[12],p};function w(t){const e=x.c(3);let s;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=n.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e[0]=s):s=e[0];let a;e[1]===Symbol.for("react.memo_cache_sentinel")?(a=n.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e[1]=a):a=e[1];let r;return e[2]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:n.jsxs("div",{className:"animate-pulse flex space-x-4",children:[s,n.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[a,n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),n.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})}),e[2]=r):r=e[2],r}document.documentElement.style.fontSize="14px";function P(t){const e=x.c(24);let s,a,r,i,c,l,d,m;e[0]!==t?({className:d,primary:s,danger:a,sm:c,lg:l,signal:i,success:r,...m}=t,e[0]=t,e[1]=s,e[2]=a,e[3]=r,e[4]=i,e[5]=c,e[6]=l,e[7]=d,e[8]=m):(s=e[1],a=e[2],r=e[3],i=e[4],c=e[5],l=e[6],d=e[7],m=e[8]);let u;e[9]!==s||e[10]!==a||e[11]!==r||e[12]!==i||e[13]!==c||e[14]!==l||e[15]!==d?(u=_(C("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":r,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":c,"text-lg py-2 px-6":l},d)),e[9]=s,e[10]=a,e[11]=r,e[12]=i,e[13]=c,e[14]=l,e[15]=d,e[16]=u):u=e[16];const p=u;let o;e[17]!==i?(o=i&&n.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[n.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),n.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]}),e[17]=i,e[18]=o):o=e[18];let h;return e[19]!==p||e[20]!==m||e[21]!==t.children||e[22]!==o?(h=n.jsxs("button",{className:p,...m,children:[t.children,o]}),e[19]=p,e[20]=m,e[21]=t.children,e[22]=o,e[23]=h):h=e[23],h}const E=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var N=new Headers;N.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var U={method:"GET",headers:N,redirect:"follow",data:"hex"};const H="https://echo.apifox.com/delay/1",v=async()=>{await fetch(H,U);const t=Math.floor(Math.random()*10)%5;return{value:E[t]}},j=t=>{let e=new AbortController,s=e.signal;const a=new Promise(r=>{fetch(`https://randomuser.me/api/?results=${t}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(i=>{r(i.json())}).catch(()=>{console.log("接口成功取消！")})});return a.cancel=()=>{e&&e.abort()},a};function I(){const t=x.c(14);let e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e=v(),t[0]=e):e=t[0];const[s,a]=f.useState(e),[r,i]=f.useTransition();let c;t[1]!==i?(c=function(){console.log("click"),i(()=>{console.log("transition"),a(v())})},t[1]=i,t[2]=c):c=t[2];const l=c;let d;t[3]!==l?(d=n.jsx("div",{className:"text-right mb-4",children:n.jsx(P,{onClick:l,children:"更新数据"})}),t[3]=l,t[4]=d):d=t[4];let m;t[5]===Symbol.for("react.memo_cache_sentinel")?(m=n.jsx(w,{}),t[5]=m):m=t[5];let u;t[6]!==s?(u=n.jsx(q,{promise:s}),t[6]=s,t[7]=u):u=t[7];let p;t[8]!==r||t[9]!==u?(p=n.jsx(f.Suspense,{fallback:m,children:n.jsx(S,{loading:r,children:u})}),t[8]=r,t[9]=u,t[10]=p):p=t[10];let o;return t[11]!==d||t[12]!==p?(o=n.jsxs(n.Fragment,{children:[d,p]}),t[11]=d,t[12]=p,t[13]=o):o=t[13],o}function q(t){const e=x.c(2),{value:s}=f.use(t.promise);let a;return e[0]!==s?(a=n.jsx(B,{message:s}),e[0]=s,e[1]=a):a=e[1],a}function J(...t){return t.filter(Boolean).join(" ")}function z(t){const e=x.c(23),{tabs:s,onSwitch:a}=t;let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),e[0]=r):r=e[0];let i;if(e[1]!==s){let o;e[3]===Symbol.for("react.memo_cache_sentinel")?(o=h=>h.current,e[3]=o):o=e[3],i=s.find(o),e[1]=s,e[2]=i}else i=e[2];let c;e[4]!==a?(c=o=>a(o.target.selectedIndex),e[4]=a,e[5]=c):c=e[5];let l;if(e[6]!==s){let o;e[8]===Symbol.for("react.memo_cache_sentinel")?(o=h=>n.jsx("option",{children:h.name},h.name),e[8]=o):o=e[8],l=s.map(o),e[6]=s,e[7]=l}else l=e[7];let d;e[9]!==i.name||e[10]!==c||e[11]!==l?(d=n.jsxs("div",{className:"hidden",children:[r,n.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:i.name,onChange:c,children:l})]}),e[9]=i.name,e[10]=c,e[11]=l,e[12]=d):d=e[12];let m;if(e[13]!==a||e[14]!==s){let o;e[16]!==a?(o=(h,T)=>n.jsx("a",{href:h.href,className:J(h.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":h.current?"page":void 0,onClick:k=>{k.preventDefault(),a(T)},children:h.name},h.name),e[16]=a,e[17]=o):o=e[17],m=s.map(o),e[13]=a,e[14]=s,e[15]=m}else m=e[15];let u;e[18]!==m?(u=n.jsx("div",{className:"block",children:n.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:m})}),e[18]=m,e[19]=u):u=e[19];let p;return e[20]!==d||e[21]!==u?(p=n.jsxs("div",{children:[d,u]}),e[20]=d,e[21]=u,e[22]=p):p=e[22],p}function O(t){const e=x.c(5),{promise:s}=t,{results:a}=f.use(s);let r;if(e[0]!==a){let c;e[2]===Symbol.for("react.memo_cache_sentinel")?(c=(l,d)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:l.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:l.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${d}`),e[2]=c):c=e[2],r=a.map(c),e[0]=a,e[1]=r}else r=e[1];let i;return e[3]!==r?(i=n.jsx("div",{children:r}),e[3]=r,e[4]=i):i=e[4],i}const g=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function F(){const[t,e]=f.useState(0),[s,a]=f.useState(()=>j(5)),[r,i]=f.useTransition();function c(l){g[t].current=!1,g[l].current=!0,e(l),s.cancel(),i(()=>{a(j(5))})}return n.jsxs("div",{children:[n.jsx(z,{tabs:g,onSwitch:c}),n.jsx(f.Suspense,{fallback:n.jsx(w,{}),children:n.jsx(S,{loading:r,type:"mask",children:n.jsx(O,{promise:s})})})]})}function y(t){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(b,{reload:!0,children:n.jsx(I,{})}),`
`,n.jsx(e.p,{children:"useTransition 与 useDeferredValue 有几乎一致的作用。他们都可以降低 UI 任务更新的优先级。只是在语法上有一些不太一样。因此这一章我们主要重点是介绍 useTransition 的语法，以及它与 useDeferredValue 的细微差异。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const [isPending, startTransition] = useTransition()
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"startTransition"})," 可以标记一个或者多个状态的 ",n.jsx(e.code,{children:"set"})," 方法，将他们标记为 ",n.jsx(e.code,{children:"transition"}),"，也就是调低他们更新的优先级。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"但是这里需要注意的是，被调低的不是 set 方法本身的执行，而是其对应的 UI 更新。"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"isPending"})," 表示是否还有未完成的 UI 更新任务。我们可以利用这个状态来判断请求是否正在发生。"]}),`
`,n.jsx(e.p,{children:"上面的演示代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import {use, useState, Suspense, useTransition} from 'react'
import Message from './Message'
import Skeleton from './Skeleton'
import Button from './Button'
import Spin from 'components/Spin'
import {getMessage} from './api'

export default function Demo01() {
  const [promise, update] = useState(getMessage)
  const [isPending, startTransition] = useTransition()

  function __handler() {
    startTransition(() => {
      update(getMessage())
    })
  }

  return (
    <>
      <div className='text-right mb-4'>
        <Button disabled={isPending} onClick={__handler}>更新数据</Button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Spin loading={isPending}>
          <Content promise={promise} />
        </Spin>
      </Suspense>
    </>
  )
}

function Content(props) {
  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
`})}),`
`,n.jsx(e.p,{children:"但是这里需要注意的是，被调低的不是 set 方法本身的执行，而是其对应的 UI 更新。因此当我们连续点击 10 次按钮时，update 就紧跟着会执行 10 次。只是在目前的 Suspense 的机制中，会将 10 次接口请求串行执行"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"这个机制目前存在争议，可能会在未来发生改变"}),`
`]}),`
`,n.jsx(e.p,{children:"当我试图使用这种方案取消上一次请求时，我们会发生并没有效果，这里的原因是因为状态 promise 在 update 执行完之后，就已经交给 Suspense 的机制去处理了，React 并没有支持这种中断机制。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function __handler() {
  startTransition(() => {
    promise.cancel()
    update(getMessage())
  })
}
`})}),`
`,n.jsx(e.p,{children:"因此，我们可以想办法在 promise 交给 Suspense 处理之前中断请求，在上一章中，我们使用了 useDeferredValue 的机制做到了这个事情。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`export default function App() {
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const deferred = useDeferredValue(promise)


  function __inputChange(e) {
    promise.cancel()
    const len = e.target.value.length % 5
    update(fetchListWithCancel(len))
  }
  ...
`})}),`
`,n.jsx(e.p,{children:"这里我们发现，我们第一时间交给 Suspense 的处理的并不是 promise，而是 deferred，因此我们可以在这之前，中断请求。"}),`
`,n.jsx(e.p,{children:"除了这个区别之外，useTransition 可以在组件顶层同时将多个 state 的 set 方法设置为低优先级。这一点是 useDeferredValue 做不到的。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');
  const [other, setOther] = useState(false);

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
      setOther(true)
    });
  }
  // ...
}
`})}),`
`,n.jsx(e.p,{children:"useDeferredValue 可以在子组件中，设置来自 props 的状态延迟。这个也是 useTransition 不方便做到的"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`export default function Ex(props) {
  const deferred = useDeferredValue(props.value)
  ...
}
`})}),`
`,n.jsx(e.p,{children:"最后，大家可以通过连续快速点击多次 Tab 按钮，观察一下下面这种写法，与右侧区域案例的区别。这里我们使用 useTransition，右侧案例使用 useDeferredValue。两个案例在视觉上的表现是几乎一样的。区别就是，这个案例并没有成功取消上一次请求，而右侧案例取消成功了。大家可以查看接口请求验证一下结果"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"未来这种情况的区别，可能会因为 Suspense 机制的变化而发生变化"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import {useState, Suspense, useTransition} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import Tabs from './Tabs'
import List from './List'
import Spin from 'components/Spin'

const tabs = [
  { name: 'My Account', href: '#', current: true },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
]


export default function Example() {
  const [current, switchToSelected] = useState(0)
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const [isPending, startTransition] = useTransition()

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)

    promise.cancel()
    startTransition(() => {
      update(fetchListWithCancel(5))
    })
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />

      <Suspense fallback={<Skeleton />}>
        <Spin loading={isPending} type='mask'>
          <List promise={promise} />
        </Spin>
      </Suspense>
    </div>
  )
}
`})}),`
`,n.jsx(b,{reload:!0,children:n.jsx(F,{})})]})}function X(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(y,{...t})}):y(t)}const G={"App.js":A,"api.js":D,"Tabs.jsx":V,"List.jsx":$,"Skeleton.jsx":W,"Spin.jsx":{code:L,hidden:!0},"index.css":{code:M,hidden:!0}};function se(){const t=x.c(1);let e;return t[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(R,{files:G,renderArticle:s=>n.jsx(X,{components:{code:s}})}),t[0]=e):e=t[0],e}export{se as default};
