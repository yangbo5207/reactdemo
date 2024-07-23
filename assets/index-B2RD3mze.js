import{j as e,t as j,c as y,r as i}from"./index-BxXbnW9e.js";import{I as f,S,a as N}from"./index-Cpw2Evd_.js";import{C as u}from"./Cardruntime-DF2YgfxL.js";import{A as w}from"./index-LK1iCBIb.js";import"./index-BEsnAH_r.js";import"./activecode-BfSkJlGQ.js";import"./index-DMQVh9lL.js";import"./Preview-Cfw1m546.js";const T=`import {useState, Suspense, useDeferredValue} from 'react'
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
`,k=`const random = [
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
`,C=`export default function Skeleton(props) {
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
`,L=`import { use } from 'react';
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
`,_=s=>{const n=unescape(s.message.replace(/\\u/gi,"%u")),t=unescape((s.title||"").replace(/\\u/gi,"%u"));let a="flex border border-blue-100 p-4 rounded-md shadow";return n?e.jsxs("div",{className:a,children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),e.jsxs("div",{className:"flex-1 ml-3",children:[e.jsx("div",{children:t||"Heads Up!"}),e.jsx("div",{className:"text-sm mt-1 text-gray-600",children:n})]})]}):e.jsxs("div",{className:`${a} justify-center items-center flex-col text-gray-500`,children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),e.jsx("div",{className:"mt-2",children:"no data."})]})};function x(s){return e.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:e.jsxs("div",{className:"animate-pulse flex space-x-4",children:[e.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),e.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function R(s){const{className:n,primary:t,danger:a,sm:r,lg:o,signal:c,success:l,...b}=s,v=j(y("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":t,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":l,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":c,"text-xs py-1.5 px-3":r,"text-lg py-2 px-6":o},n));return e.jsxs("button",{className:v,...b,children:[s.children,c&&e.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[e.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),e.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const A=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var g=new Headers;g.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var D={method:"GET",headers:g,redirect:"follow",data:"hex"};const W="https://echo.apifox.com/delay/1",m=async()=>{await fetch(W,D);const s=Math.floor(Math.random()*10)%5;return{value:A[s]}},p=s=>{let n=new AbortController,t=n.signal;const a=new Promise(r=>{fetch(`https://randomuser.me/api/?results=${s}&inc=name,gender,email,nat,picture&noinfo`,{signal:t}).then(o=>{r(o.json())}).catch(()=>{console.log("接口成功取消！")})});return a.cancel=()=>{n&&n.abort()},a};function V(){const[s,n]=i.useState(m()),[t,a]=i.useTransition();function r(){console.log("click"),a(()=>{console.log("transition"),n(m())})}return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-right mb-4",children:e.jsx(R,{onClick:r,children:"更新数据"})}),e.jsx(i.Suspense,{fallback:e.jsx(x,{}),children:e.jsx(f,{loading:t,children:e.jsx(B,{promise:s})})})]})}function B(s){const{value:n}=i.use(s.promise);return e.jsx(_,{message:n})}function P(...s){return s.filter(Boolean).join(" ")}function U({tabs:s,onSwitch:n}){return e.jsxs("div",{children:[e.jsxs("div",{className:"hidden",children:[e.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),e.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:s.find(t=>t.current).name,onChange:t=>n(t.target.selectedIndex),children:s.map(t=>e.jsx("option",{children:t.name},t.name))})]}),e.jsx("div",{className:"block",children:e.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:s.map((t,a)=>e.jsx("a",{href:t.href,className:P(t.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":t.current?"page":void 0,onClick:r=>{r.preventDefault(),n(a)},children:t.name},t.name))})})]})}function E({promise:s}){const{results:n}=i.use(s);return e.jsx("div",{children:n.map((t,a)=>e.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[e.jsx("img",{className:"w-12 h-12 rounded-full",src:t.picture.large,alt:""}),e.jsxs("div",{className:"flex-1 ml-4",children:[e.jsx("div",{className:"font-bold",children:t.name.last}),e.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${a}`))})}const d=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function H(){const[s,n]=i.useState(0),[t,a]=i.useState(()=>p(5)),[r,o]=i.useTransition();function c(l){d[s].current=!1,d[l].current=!0,n(l),t.cancel(),o(()=>{a(p(5))})}return e.jsxs("div",{children:[e.jsx(U,{tabs:d,onSwitch:c}),e.jsx(i.Suspense,{fallback:e.jsx(x,{}),children:e.jsx(f,{loading:r,type:"mask",children:e.jsx(E,{promise:t})})})]})}function h(s){const n={blockquote:"blockquote",code:"code",p:"p",pre:"pre",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{reload:!0,children:e.jsx(V,{})}),`
`,e.jsx(n.p,{children:"useTransition 与 useDeferredValue 有几乎一致的作用。他们都可以降低 UI 任务更新的优先级。只是在语法上有一些不太一样。因此这一章我们主要重点是介绍 useTransition 的语法，以及它与 useDeferredValue 的细微差异。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const [isPending, startTransition] = useTransition()
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"startTransition"})," 可以标记一个或者多个状态的 ",e.jsx(n.code,{children:"set"})," 方法，将他们标记为 ",e.jsx(n.code,{children:"transition"}),"，也就是调低他们更新的优先级。"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"但是这里需要注意的是，被调低的不是 set 方法本身的执行，而是其对应的 UI 更新。"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isPending"})," 表示是否还有未完成的 UI 更新任务。我们可以利用这个状态来判断请求是否正在发生。"]}),`
`,e.jsx(n.p,{children:"上面的演示代码如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {use, useState, Suspense, useTransition} from 'react'
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
`,e.jsx(n.p,{children:"但是这里需要注意的是，被调低的不是 set 方法本身的执行，而是其对应的 UI 更新。因此当我们连续点击 10 次按钮时，update 就紧跟着会执行 10 次。只是在目前的 Suspense 的机制中，会将 10 次接口请求串行执行"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"这个机制目前存在争议，可能会在未来发生改变"}),`
`]}),`
`,e.jsx(n.p,{children:"当我试图使用这种方案取消上一次请求时，我们会发生并没有效果，这里的原因是因为状态 promise 在 update 执行完之后，就已经交给 Suspense 的机制去处理了，React 并没有支持这种中断机制。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function __handler() {
  startTransition(() => {
    promise.cancel()
    update(getMessage())
  })
}
`})}),`
`,e.jsx(n.p,{children:"因此，我们可以想办法在 promise 交给 Suspense 处理之前中断请求，在上一章中，我们使用了 useDeferredValue 的机制做到了这个事情。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`export default function App() {
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const deferred = useDeferredValue(promise)


  function __inputChange(e) {
    promise.cancel()
    const len = e.target.value.length % 5
    update(fetchListWithCancel(len))
  }
  ...
`})}),`
`,e.jsx(n.p,{children:"这里我们发现，我们第一时间交给 Suspense 的处理的并不是 promise，而是 deferred，因此我们可以在这之前，中断请求。"}),`
`,e.jsx(n.p,{children:"除了这个区别之外，useTransition 可以在组件顶层同时将多个 state 的 set 方法设置为低优先级。这一点是 useDeferredValue 做不到的。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function TabContainer() {
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
`,e.jsx(n.p,{children:"useDeferredValue 可以在子组件中，设置来自 props 的状态延迟。这个也是 useTransition 不方便做到的"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`export default function Ex(props) {
  const deferred = useDeferredValue(props.value)
  ...
}
`})}),`
`,e.jsx(n.p,{children:"最后，大家可以通过连续快速点击多次 Tab 按钮，观察一下下面这种写法，与右侧区域案例的区别。这里我们使用 useTransition，右侧案例使用 useDeferredValue。两个案例在视觉上的表现是几乎一样的。区别就是，这个案例并没有成功取消上一次请求，而右侧案例取消成功了。大家可以查看接口请求验证一下结果"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"未来这种情况的区别，可能会因为 Suspense 机制的变化而发生变化"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {useState, Suspense, useTransition} from 'react'
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
`,e.jsx(u,{reload:!0,children:e.jsx(H,{})})]})}function I(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(h,{...s})}):h(s)}const q={"App.js":T,"api.js":k,"Tabs.jsx":M,"List.jsx":L,"Skeleton.jsx":C,"Spin.jsx":{code:S,hidden:!0},"index.css":{code:N,hidden:!0}};function ee(){return e.jsx(w,{files:q,renderArticle:s=>e.jsx(I,{components:{code:s}})})}export{ee as default};
