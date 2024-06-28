import{c as u,j as s,r as m}from"./index-vB-mHLnv.js";import{C as N}from"./Cardruntime-DFtXWoxO.js";import{A as j}from"./index-CLBIbT-Y.js";import"./index-D8xVh8ID.js";import"./atom-one-light-Bb5l2Lva.js";import"./Preview-CBazhn3Q.js";const y=`import {use, useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchList} from './api'
import List from './List'

export default function Example() {
  const [promise, update] = useState(() => fetchList(3))
  return (
    <div>
      <Suspense fallback={<Skeleton type='card' />}>
        <AccountUse promise={promise} />
      </Suspense>
    </div>
  )
}

function AccountUse(props) {
  const {results} = use(props.promise)
  const [promise, update] = useState(() => fetchList(5))
  return (
    <div className='border border-blue-100 shadow rounded-md p-4 w-full mt-4'>
      <div className='flex space-x-4'>
        {results.map((item, index) => (
          <div className="flex-1 overflow-hidden" key={\`z-\${index}\`}>
            <div className='rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center' style={{backgroundImage: \`url(\${item.picture.large})\`}}></div>
            <div className="mt-4 font-bold">{item.name.last}</div>
            <div className="mt-1 text-gray-400 text-sm">{item.email}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-gray-400 text-sm">Account users</div>
      <Suspense fallback={<Skeleton/>}>
        <List promise={promise}/>
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
`,w=`import { use } from 'react';
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
`;document.documentElement.style.fontSize="14px";function h(n){const e=u.c(7);if(n.type==="card"){let t;return e[0]===Symbol.for("react.memo_cache_sentinel")?(t=s.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:s.jsx("div",{className:"animate-pulse flex space-x-4 items-center",children:[1,2,3].map((r,d)=>s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"rounded-md bg-slate-200  h-32"}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[s.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),s.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),s.jsx("div",{className:"grid grid-cols-4 gap-4 mt-2",children:s.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-3"})})]},`z-${d}`))})}),e[0]=t):t=e[0],t}if(n.type==="header"){let t;e[1]===Symbol.for("react.memo_cache_sentinel")?(t=s.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e[1]=t):t=e[1];let r;e[2]===Symbol.for("react.memo_cache_sentinel")?(r=s.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e[2]=r):r=e[2];let d;return e[3]===Symbol.for("react.memo_cache_sentinel")?(d=s.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:s.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[t,s.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[r,s.jsx("div",{className:"space-y-3",children:s.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[s.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),s.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})}),e[3]=d):d=e[3],d}let i;e[4]===Symbol.for("react.memo_cache_sentinel")?(i=s.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e[4]=i):i=e[4];let l;e[5]===Symbol.for("react.memo_cache_sentinel")?(l=s.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e[5]=l):l=e[5];let a;return e[6]===Symbol.for("react.memo_cache_sentinel")?(a=s.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:s.jsxs("div",{className:"animate-pulse flex space-x-4",children:[i,s.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[l,s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[s.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),s.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),s.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})}),e[6]=a):a=e[6],a}const b=async n=>(await fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`)).json();function k(n){const e=u.c(5),{promise:i}=n,{results:l}=m.use(i);let a;if(e[0]!==l){let r;e[2]===Symbol.for("react.memo_cache_sentinel")?(r=(d,c)=>s.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[s.jsx("img",{className:"w-12 h-12 rounded-full",src:d.picture.large,alt:""}),s.jsxs("div",{className:"flex-1 ml-4",children:[s.jsx("div",{className:"font-bold",children:d.name.last}),s.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${c}`),e[2]=r):r=e[2],a=l.map(r),e[0]=l,e[1]=a}else a=e[1];let t;return e[3]!==a?(t=s.jsx("div",{children:a}),e[3]=a,e[4]=t):t=e[4],t}function $(){const n=u.c(4);let e;n[0]===Symbol.for("react.memo_cache_sentinel")?(e=()=>b(3),n[0]=e):e=n[0];const[i]=m.useState(e);let l;n[1]===Symbol.for("react.memo_cache_sentinel")?(l=s.jsx(h,{type:"card"}),n[1]=l):l=n[1];let a;return n[2]!==i?(a=s.jsx("div",{children:s.jsx(m.Suspense,{fallback:l,children:s.jsx(L,{promise:i})})}),n[2]=i,n[3]=a):a=n[3],a}function L(n){const e=u.c(13),{results:i}=m.use(n.promise);let l;e[0]===Symbol.for("react.memo_cache_sentinel")?(l=()=>b(5),e[0]=l):l=e[0];const[a]=m.useState(l);let t;if(e[1]!==i){let v;e[3]===Symbol.for("react.memo_cache_sentinel")?(v=(f,g)=>s.jsxs("div",{className:"flex-1 overflow-hidden",children:[s.jsx("div",{className:"rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${f.picture.large})`}}),s.jsx("div",{className:"mt-4 font-bold",children:f.name.last}),s.jsx("div",{className:"mt-1 text-gray-400 text-sm",children:f.email})]},`z-${g}`),e[3]=v):v=e[3],t=i.map(v),e[1]=i,e[2]=t}else t=e[2];let r;e[4]!==t?(r=s.jsx("div",{className:"flex space-x-4",children:t}),e[4]=t,e[5]=r):r=e[5];let d;e[6]===Symbol.for("react.memo_cache_sentinel")?(d=s.jsx("div",{className:"mt-8 text-gray-400 text-sm",children:"Account users"}),e[6]=d):d=e[6];let c;e[7]===Symbol.for("react.memo_cache_sentinel")?(c=s.jsx(h,{}),e[7]=c):c=e[7];let o;e[8]!==a?(o=s.jsx(m.Suspense,{fallback:c,children:s.jsx(k,{promise:a})}),e[8]=a,e[9]=o):o=e[9];let p;return e[10]!==r||e[11]!==o?(p=s.jsxs("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:[r,d,o]}),e[10]=r,e[11]=o,e[12]=p):p=e[12],p}function A(){const n=u.c(1);let e;return n[0]===Symbol.for("react.memo_cache_sentinel")?(e=s.jsx("div",{children:s.jsx($,{})}),n[0]=e):e=n[0],e}function x(n){const e={code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(N,{reload:!0,children:s.jsx(A,{})}),`
`,s.jsxs(e.p,{children:["如案例演示的这样，有的时候，我们需要这种",s.jsx(e.strong,{children:"瀑布流式"}),"的接口请求交互方式。也就是上一个模块请求成功之后，再请求下一个模块。"]}),`
`,s.jsx(e.p,{children:"我们可以利用 Suspense 的嵌套来轻松做到这个事情。"}),`
`,s.jsx(e.p,{children:"我们可以在父组件中，通过一个 promise 向子组件传递数据"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`export default function Example() {
  const [promise, update] = useState(() => fetchList(3))
  return (
    <div>

      <Suspense fallback={<Skeleton type='card' />}>
        <AccountUse promise={promise} />
      </Suspense>
    </div>
  )
}
`})}),`
`,s.jsx(e.p,{children:"然后在子组件 AccountUse 中，使用同样的方式向它的子组件传递数据"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`function AccountUse(props) {
  const {results} = use(props.promise)
  const [promise, update] = useState(() => fetchList(5))
  return (
    <div className='border border-blue-100 shadow rounded-md p-4 w-full mt-4'>
      <div>...</div>

      <div className="mt-8 text-gray-400 text-sm">Account users</div>
      <Suspense fallback={<Skeleton/>}>
        <List promise={promise}/>
      </Suspense>
    </div>
  )
}
`})}),`
`,s.jsx(e.p,{children:"最后在之后的子组件 List 中仅使用 use 获取数据即可"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`export default function CurrentList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          ...
        </div>
      ))}
    </div>
  )
}
`})}),`
`,s.jsx(e.p,{children:"这里需要注意的是，当你决定这样用时，往往后请求的接口都会依赖先请求的结果，如果并没有明确的先后依赖关系，我们并不建议采用这种交互方案。"}),`
`,s.jsx(e.p,{children:"完整的代码和案例演示看右侧区域。"})]})}function C(n={}){const{wrapper:e}=n.components||{};return e?s.jsx(e,{...n,children:s.jsx(x,{...n})}):x(n)}const E={"App.js":y,"api.js":S,"List.jsx":w,"Skeleton.jsx":_};function R(){const n=u.c(1);let e;return n[0]===Symbol.for("react.memo_cache_sentinel")?(e=s.jsx(j,{files:E,renderArticle:i=>s.jsx(C,{components:{code:i}})}),n[0]=e):e=n[0],e}export{R as default};
