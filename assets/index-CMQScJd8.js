import{j as e,r as t,t as v,c as f}from"./index-BxXbnW9e.js";import{C as i}from"./Cardruntime-DF2YgfxL.js";import{A as j}from"./index-LK1iCBIb.js";import"./index-BEsnAH_r.js";import"./activecode-BfSkJlGQ.js";import"./index-DMQVh9lL.js";import"./Preview-Cfw1m546.js";const b=`import React, { useEffect, useState, Suspense, use } from 'react';
import Button from './Button'
import Skeleton from './Skeleton'
import {getMessage} from './api'

export default function Index() {
  const promise = getMessage()
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Message promise={promise} />
      </Suspense>

      <div className='mt-8 text-center'>
        <Button signal>点击下方刷新按钮可重置演示</Button>
      </div>
    </>
  )
}

const Message = (props) => {
  const content = use(props.promise)
  return (
    <div className='flex border border-blue-100 p-4 rounded-md shadow'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='text-sm mt-1 text-gray-600'>{content.value}</div>
      </div>
    </div>
  )
}
`,y=`import {twMerge} from 'tailwind-merge'
import clsx from 'clsx'

document.documentElement.style.fontSize = '14px'
// 本组件只是一个简单的 UI 组件，学习时无需多过关注

export default function Button(props) {
  const {className, primary, danger, sm, lg, signal, success, ...other} = props
  const base = 'rounded-md border border-transparent font-medium cursor-pointer transition relative'

  // type
  const normal = 'bg-gray-100 hover:bg-gray-200'

  // size
  const md = 'text-xs py-2 px-4'

  const cls = twMerge(clsx(base, normal, md, {
    // type
    ['bg-blue-500 text-white hover:bg-blue-600']: primary,
    ['bg-red-500 text-white hover:bg-red-600']: danger,
    ['bg-green-500 text-white hover:bg-green-600']: success,
    ['text-sky-500 bg-white border border-sky-300 hover:bg-sky-50']: signal,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
  }, className))

  return (
    <button className={cls} {...other}>
      {props.children}
      {signal && (
        <span className="absolute flex h-3 w-3 right-[-5px] top-[-5px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      )}
    </button>
  )
}
`,w=`const random = [
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
`,k=`export default function Skeleton(props) {
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
`,l=s=>{const n=s.message;return e.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),e.jsxs("div",{className:"flex-1 ml-3",children:[e.jsx("div",{children:"Heads Up!"}),e.jsx("div",{className:"text-sm mt-1 text-gray-600",children:n})]})]})},N=new Promise(s=>{s({value:"Unlike React Hooks, use can be called within loops and conditional statements like if. Like React Hooks, the function that calls use must be a Component or Hook."})});function S(){const s=t.use(N);return e.jsx(l,{message:s.value})}document.documentElement.style.fontSize="14px";function M(s){const{className:n,primary:o,danger:a,sm:r,lg:p,signal:d,success:h,...x}=s,g=v(f("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":o,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":h,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":d,"text-xs py-1.5 px-3":r,"text-lg py-2 px-6":p},n));return e.jsxs("button",{className:g,...x,children:[s.children,d&&e.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[e.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),e.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}function c(s){return e.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:e.jsxs("div",{className:"animate-pulse flex space-x-4",children:[e.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),e.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const R=new Promise(s=>{s({value:"Unlike React Hooks, use can be called within loops and conditional statements like if. Like React Hooks, the function that calls use must be a Component or Hook."})});function H(){const[s,n]=t.useState(!1);let o={value:""};return s||(o=t.use(R)),e.jsxs(e.Fragment,{children:[s?e.jsx(c,{}):e.jsx(l,{message:o.value}),e.jsx("div",{className:"mt-4 text-right",children:e.jsx(M,{signal:!0,onClick:()=>n(!s),children:"切换"})})]})}const L=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var m=new Headers;m.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var _={method:"GET",headers:m,redirect:"follow",data:"hex"};const C="https://echo.apifox.com/delay/1",T=async()=>{await fetch(C,_);const s=Math.floor(Math.random()*10)%5;return{value:L[s]}};function B(){const[s,n]=t.useState(!0);return e.jsx(t.Suspense,{fallback:e.jsx("div",{}),children:e.jsx("div",{children:s?e.jsx(A,{}):e.jsx(c,{})})})}function A(){let[s,n]=t.useState(!0);const o=T().then(r=>(n(!1),r));let a={value:"",icon_url:""};return s||(a=t.use(o)),s?e.jsx(c,{}):e.jsx(l,{message:a.value})}function u(s){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:[e.jsx(n.code,{children:"use()"})," 是 React19 提升异步开发体验最重要的 hook。也是让 useEffect 重要性大幅度削弱的主要原因。"]}),`
`,e.jsxs(n.p,{children:["我们可以利用 use 读取 ",e.jsx(n.code,{children:"Promise"})," 中的值。"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"也可以使用 use 读取 context 中的资源，后续详细介绍该能力"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const value = use(promise)
`})}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"0"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"正确理解 promise"})}),`
`,e.jsxs(n.p,{children:["这里我们需要特别注意的是，",e.jsx(n.strong,{children:"Promise"})," 是指的一个已经创建好的 Promise 对象，并且，在该 promise 对象中已经有了确定的 ",e.jsx(n.code,{children:"resolve"})," 的结果，use 读取的是 resolve 的值。"]}),`
`,e.jsx(n.p,{children:"注意观察一下下面两种写法"}),`
`,e.jsx(n.p,{children:"第一种是已经有了结果状态的 Promise 对象"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const _api2 = new Promise((resolve) => {
  resolve({ value: '_api2' })
})

// good
const result = use(_api2)
`})}),`
`,e.jsx(n.p,{children:"第二种是函数运行创建 Promise 对象，此时我们需要注意，虽然 _api3 执行之后会立即返回一个带有 resolve 结果状态的 Promise，但是 use 并不能第一时间读取到其值。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const _api3 = () => {
  return new Promise(resolve => {
    resolve({ value: '_api3' })
  })
}

// bad: get an error
const result = use(_api3())
`})}),`
`,e.jsx(n.p,{children:"如果我们按照以往的习惯，直接使用第二种，那么运行之后，React19 会给你如下一个报错。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-error",children:"async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.\n"})}),`
`,e.jsx(n.p,{children:"一个完整的案例代码以及演示效果如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import {use} from 'react'
import Message from './Message'

const _api2 = new Promise((resolve) => {
  resolve({ value: 'Unlike React Hooks, use can be called within loops and conditional statements like if. Like React Hooks, the function that calls use must be a Component or Hook.' })
})

export default function Demo01() {
  const result = use(_api2)
  return (
    <Message message={result.value} />
  )
}
`})}),`
`,e.jsx(i,{children:e.jsx(S,{})}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"1"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"在条件判断中使用"})}),`
`,e.jsxs(n.p,{children:["和其他 hook 一样，",e.jsx(n.code,{children:"use()"})," 必须在函数组件中使用。但是很不一样的是，use 可以在循环和条件判断语句中使用。我们这里如下案例来演示这个结论。"]}),`
`,e.jsxs(n.p,{children:["在这个例子中，",e.jsx(n.code,{children:"use"})," 被使用在 ",e.jsx(n.code,{children:"if(!loading)"})," 条件判断中来获取 result 的值。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`if (!loading) {
  result = use(_api2)
}
`})}),`
`,e.jsx(n.p,{children:"完整的代码与最终的演示效果如下，你可以在演示案例中多次点击切换按钮查看交互效果。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import {use, useState} from 'react'
import Message from './Message'
import Button from './Button'
import Skeleton from './Skeleton'

const _api2 = new Promise((resolve) => {
  resolve({ value: 'Unlike React Hooks, use can be called within loops and conditional statements like if. Like React Hooks, the function that calls use must be a Component or Hook.' })
})

export default function Demo01() {
  const [loading, setLoading] = useState(false)
  let result = {value: ''}
  if (!loading) {
    result = use(_api2)
  }

  return (
    <>
      {loading ? <Skeleton /> : <Message message={result.value} />}
      <div className='mt-4 text-right'>
        <Button signal onClick={() => setLoading(!loading)}>切换</Button>
      </div>
    </>
  )
}
`})}),`
`,e.jsx(i,{children:e.jsx(H,{})}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"2"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"在异步请求中使用"})}),`
`,e.jsx(n.p,{children:"通常，我们在处理异步请求时，也会结合 promise 来使用。但是我们并不能直接使用 use 来读取异步请求中的 promise，因为我们已经非常明确，use 只能读取有确定 resolve 结果的 promise 中的值。但是有可能第一时间异步请求包装的 promise 状态为 pending。因此在这种情况下，我们必须结合 Suspense 来使用。"}),`
`,e.jsx(n.p,{children:"当然，为了加强对 use 的理解，我们也准备了一个不顾任何风险提示，强行等 promise 请求完成之后使用 use 去读取它的值的案例。代码与演示效果如下。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function Demo03() {
  let [loading, setLoading] = useState(true)

  const promise = getMessage().then(res => {
    setLoading(false)
    return res
  })

  let result = {value: '', icon_url: ''}
  if (!loading) {
    result = use(promise)
  }

  return loading ? <Skeleton /> : <Message message={result.value} />
}
`})}),`
`,e.jsx(i,{reload:!0,children:e.jsx(B,{})}),`
`,e.jsx(n.p,{children:"点击按钮可以重新加载执行该组件。我们可以观察一下效果，在目前的 React 版本中，并不能合理的处理好这种存在风险的读取方式，虽然我们最终读取到了 promise 中的值，内容也顺利渲染出来了，但是中间存在一次明显的闪烁。表现为包括按钮在内的内容全部消失，这种体验非常的糟糕。"}),`
`,e.jsx(n.p,{children:"因此，在实践中，如果我们要读取异步请求的 promise 中的值，必须结合 Suspense 来处理。在右侧的案例中，我们列举了一个 use + Suspense 合理处理异步请求的案例，大家可以先暂时了解一下，在后续的章节中，我们详细学习了 Suspense 之后再来进行案例分析。"})]})}function P(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(u,{...s})}):u(s)}const U={"App.js":b,"api.js":w,"Button.jsx":y,"Skeleton.jsx":k};function G(){return e.jsx(j,{files:U,renderArticle:s=>e.jsx(P,{components:{code:s}})})}export{G as default};
