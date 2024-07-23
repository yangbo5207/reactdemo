import{j as e,r as d}from"./index-BxXbnW9e.js";import{C as m}from"./Cardruntime-DF2YgfxL.js";import{A as u}from"./index-LK1iCBIb.js";import"./index-BEsnAH_r.js";import"./activecode-BfSkJlGQ.js";import"./index-DMQVh9lL.js";import"./Preview-Cfw1m546.js";const p=`import {use, useState, Suspense} from 'react'
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
`,x=`document.documentElement.style.fontSize = '14px'

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
`,h=`import { use } from 'react';
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
`;document.documentElement.style.fontSize="14px";function i(n){return n.type==="card"?e.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:e.jsx("div",{className:"animate-pulse flex space-x-4 items-center",children:[1,2,3].map((s,a)=>e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"rounded-md bg-slate-200  h-32"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),e.jsx("div",{className:"grid grid-cols-4 gap-4 mt-2",children:e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-3"})})]},`z-${a}`))})}):n.type==="header"?e.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:e.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[e.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e.jsx("div",{className:"space-y-3",children:e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})}):e.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:e.jsxs("div",{className:"animate-pulse flex space-x-4",children:[e.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),e.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const c=async n=>(await fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`)).json();function f({promise:n}){const{results:s}=d.use(n);return e.jsx("div",{children:s.map((a,t)=>e.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[e.jsx("img",{className:"w-12 h-12 rounded-full",src:a.picture.large,alt:""}),e.jsxs("div",{className:"flex-1 ml-4",children:[e.jsx("div",{className:"font-bold",children:a.name.last}),e.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${t}`))})}function g(){const[n,s]=d.useState(()=>c(3));return e.jsx("div",{children:e.jsx(d.Suspense,{fallback:e.jsx(i,{type:"card"}),children:e.jsx(N,{promise:n})})})}function N(n){const{results:s}=d.use(n.promise),[a,t]=d.useState(()=>c(5));return e.jsxs("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:[e.jsx("div",{className:"flex space-x-4",children:s.map((r,o)=>e.jsxs("div",{className:"flex-1 overflow-hidden",children:[e.jsx("div",{className:"rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${r.picture.large})`}}),e.jsx("div",{className:"mt-4 font-bold",children:r.name.last}),e.jsx("div",{className:"mt-1 text-gray-400 text-sm",children:r.email})]},`z-${o}`))}),e.jsx("div",{className:"mt-8 text-gray-400 text-sm",children:"Account users"}),e.jsx(d.Suspense,{fallback:e.jsx(i,{}),children:e.jsx(f,{promise:a})})]})}function j(){return e.jsx("div",{children:e.jsx(g,{})})}function l(n){const s={code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{reload:!0,children:e.jsx(j,{})}),`
`,e.jsxs(s.p,{children:["如案例演示的这样，有的时候，我们需要这种",e.jsx(s.strong,{children:"瀑布流式"}),"的接口请求交互方式。也就是上一个模块请求成功之后，再请求下一个模块。"]}),`
`,e.jsx(s.p,{children:"我们可以利用 Suspense 的嵌套来轻松做到这个事情。"}),`
`,e.jsx(s.p,{children:"我们可以在父组件中，通过一个 promise 向子组件传递数据"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`export default function Example() {
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
`,e.jsx(s.p,{children:"然后在子组件 AccountUse 中，使用同样的方式向它的子组件传递数据"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`function AccountUse(props) {
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
`,e.jsx(s.p,{children:"最后在之后的子组件 List 中仅使用 use 获取数据即可"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`export default function CurrentList({promise}) {
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
`,e.jsx(s.p,{children:"这里需要注意的是，当你决定这样用时，往往后请求的接口都会依赖先请求的结果，如果并没有明确的先后依赖关系，我们并不建议采用这种交互方案。"}),`
`,e.jsx(s.p,{children:"完整的代码和案例演示看右侧区域。"})]})}function b(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}const y={"App.js":p,"api.js":v,"List.jsx":h,"Skeleton.jsx":x};function E(){return e.jsx(u,{files:y,renderArticle:n=>e.jsx(b,{components:{code:n}})})}export{E as default};
