import{j as e,r}from"./index-BxXbnW9e.js";import{C as t}from"./Cardruntime-DF2YgfxL.js";import{A as p}from"./index-LK1iCBIb.js";import"./index-BEsnAH_r.js";import"./activecode-BfSkJlGQ.js";import"./index-DMQVh9lL.js";import"./Preview-Cfw1m546.js";const u=`import React, { useEffect, useState, Suspense, use } from 'react';
import Button from './Button'
import Skeleton from './Skeleton'
import {getMessage} from './api'

export default function Index() {
  const [content, update] = useState({value: ''})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMessage().then(res => {
      update(res)
      setLoading(false)
    })
  }, []);

  if (loading) {
    return <Skeleton />
  }

  return (
    <>
      <Message message={content.value} />
      <div className='mt-8 text-center'>
        <Button signal>点击下方刷新按钮可重置演示</Button>
      </div>
    </>
  )
}

const Message = (props) => {
  const message = props.message
  return (
    <div className='flex border border-blue-100 p-4 rounded-md shadow'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
      <div className='flex-1 ml-3'>
        <div>a new message!</div>
        <div className='text-sm mt-1 text-gray-600'>{message}</div>
      </div>
    </div>
  )
}
`,m=`import {twMerge} from 'tailwind-merge'
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
`,h=`const random = [
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
`,x=`export default function Skeleton(props) {
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
`,g=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <script src="https://cdn.tailwindcss.com"><\/script>
    <title>案例演示</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`,i=s=>{const n=unescape(s.message.replace(/\\u/gi,"%u")),d=unescape((s.title||"").replace(/\\u/gi,"%u"));return e.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),e.jsxs("div",{className:"flex-1 ml-3",children:[e.jsx("div",{children:d||"Heads Up!"}),e.jsx("div",{className:"text-sm mt-1 text-gray-600",children:n})]})]})},j=()=>new Promise(s=>{s({value:"React does not preserve any state for renders that got suspended before they were able to mount for the first time. When the component has loaded, React will retry rendering the suspended tree from scratch."})});function f(){const s=j();return e.jsx(r.Suspense,{fallback:"",children:e.jsx(v,{promise:s})})}function v(s){const{value:n}=r.use(s.promise);return e.jsx(i,{message:n})}document.documentElement.style.fontSize="14px";function c(s){return e.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:e.jsxs("div",{className:"animate-pulse flex space-x-4",children:[e.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),e.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const b=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var l=new Headers;l.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var y={method:"GET",headers:l,redirect:"follow",data:"hex"};const w="https://echo.apifox.com/delay/1",S=async()=>{await fetch(w,y);const s=Math.floor(Math.random()*10)%5;return{value:b[s]}};function a(){const s=S();return e.jsx(r.Suspense,{fallback:e.jsx(c,{}),children:e.jsx(k,{promise:s})})}const k=s=>{const n=r.use(s.promise);return e.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),e.jsxs("div",{className:"flex-1 ml-3",children:[e.jsx("div",{children:"Heads Up!"}),e.jsx("div",{className:"text-sm mt-1 text-gray-600",children:n.value})]})]})};function N(){return e.jsx(r.Suspense,{fallback:e.jsx(c,{}),children:e.jsx(i,{message:"这是一个普通的 UI 组件，Skeleton 组件不会有任何渲染机会，直接渲染 Message 组件",title:"Primary"})})}function o(s){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:e.jsx(n.em,{children:"0"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Suspense"})}),`
`,e.jsx(n.p,{children:"先来回顾一下这段代码。在前面一篇文中，我们知道，如果直接使用 use 获取未直接创建的 Promise 中的值，会抛出一个异常。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const _api3 = () => {
  return new Promise(resolve => {
    resolve({ value: '_api3' })
  })
}

// bad: get an error
const result = use(_api3())
`})}),`
`,e.jsx(n.p,{children:"但是实际上在开发过程中，大多数情况都是这种并没有直接得到 Promise resolve 的结果状态，那我们应该怎么办呢？这个时候我们可以利用 Suspense 来解决这个问题。"}),`
`,e.jsx(n.p,{children:"Suspense 可以捕获这种异常。我们来看一下这段代码"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {use, Suspense} from 'react'
import Message from './Message'

const _api3 = () => {
  return new Promise(resolve => {
    resolve({ value: 'React does not preserve any state for renders that got suspended before they were able to mount for the first time. When the component has loaded, React will retry rendering the suspended tree from scratch.' })
  })
}

export default function Demo01() {
  const promise = _api3()
  return (
    <Suspense fallback=''>
      <Content promise={promise} />
    </Suspense>
  )
}

function Content(props) {
  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
`})}),`
`,e.jsxs(n.p,{children:["在这段代码中，为了让 Suspense 捕获更小范围的组件，我们单独定义了一个子组件 ",e.jsx(n.code,{children:"Content"})," 来使用 use 获取 promise 中的数据。这也是未来使用的比较常规的思路和手段。案例预览效果如下所示。"]}),`
`,e.jsx(t,{reload:!0,children:e.jsx(f,{})}),`
`,e.jsx(n.p,{children:"当然，在开发中更常见的效果是使用 use 读取异步 promise，主要的场景就是接口请求。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Suspense fallback={<Loading />}>
  <Albums />
</Suspense>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Suspense"})," 能够捕获到子组件首次渲染的异常。因此我们常常将 ",e.jsx(n.code,{children:"Suspense"})," 当成一种组件错误边界来处理。"]}),`
`,e.jsxs(n.p,{children:["但是需要注意的是，传递给 ",e.jsx(n.code,{children:"Suspense"})," 的异步组件必须在报错时返回一个 Promise 对象，它才能正常工作。在 React 19 中，",e.jsx(n.code,{children:"use(promise)"})," 被设计成完全符合 Suspense 规范的 hook，因此我们可以轻松的结合他们两者来完成页面开发。"]}),`
`,e.jsx(n.p,{children:"我们来分析一下上一章最后的例子。"}),`
`,e.jsx(n.p,{children:"首先，我们定义好一个用于接口请求的函数，该函数执行返回 promise"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`export const getMessage = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}
`})}),`
`,e.jsx(n.p,{children:"然后我们定义一个子组件 Message，该子组件接受一个 promise 作为参数。然后在子组件内部，我们使用 use 读取该 promise 中的值。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const Message = (props) => {
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
`})}),`
`,e.jsx(n.p,{children:"有了这个子组件之后，我们使用 Suspense 包裹捕获该组件的错误，防止错误溢出到更高层级的组件。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`export default function Index() {
  const promise = getMessage()
  return (
    <Suspense fallback={<Skeleton />}>
      <Message promise={promise} />
    </Suspense>
  )
}
`})}),`
`,e.jsxs(n.p,{children:["当 Message 组件首次渲染时，由于直接读取 promise 导致报错，Suspense 捕获到该异常后，会渲染 ",e.jsx(n.code,{children:"fallback"})," 中设置的组件。此时我们设置了一个骨架屏 Skeleton 组件，大家可以多次点击 reload 按钮查看演示效果。"]}),`
`,e.jsx(n.p,{children:"因此，这个案例的视觉表现应该为：1. 首先渲染 Skeleton 组件。然后请求成功之后，use 渲染 Message 组件。"}),`
`,e.jsx(n.p,{children:"演示案例运行结果如下"}),`
`,e.jsx(t,{reload:!0,children:e.jsx(a,{})}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"1"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Suspense 工作原理"})}),`
`,e.jsxs(n.p,{children:["Suspense 提供了一个加载数据的标准。在源码中，Suspense 的子组件被称为 ",e.jsx(n.code,{children:"primary"}),"。"]}),`
`,e.jsxs(n.p,{children:["当 react 在 beginWork 的过程中（diff 过程），遇到 ",e.jsx(n.code,{children:"Suspense"})," 时，首先会尝试加载 ",e.jsx(n.code,{children:"primary"})," 组件。如果 ",e.jsx(n.code,{children:"primary"})," 组件只是一个普通组件，那么就顺利渲染完成。"]}),`
`,e.jsxs(n.p,{children:["如果 ",e.jsx(n.code,{children:"primary"})," 组件是一个包含了 use 读取异步 promise 的组件，它会在首次渲染时，",e.jsx(n.strong,{children:"抛出一个异常"}),"。react 捕获到该异常之后，发现是一个我们在语法中约定好的 promise，那么就会将其 ",e.jsx(n.code,{children:"then"})," 的回调函数保存下来，并将下一个 ",e.jsx(n.code,{children:"next"})," beginWork 的组件重新指定为 ",e.jsx(n.code,{children:"Suspense"}),"。"]}),`
`,e.jsxs(n.p,{children:["此时 promise 在请求阶段，因此再次 beginWork Suspense 组件时，会跳过 ",e.jsx(n.code,{children:"primary"})," 的执行而直接渲染 ",e.jsx(n.code,{children:"fallback"})]}),`
`,e.jsxs(n.p,{children:["当 ",e.jsx(n.code,{children:"primary"})," 中的 promise 执行完成时「resolve」，会执行刚才保存的 ",e.jsx(n.code,{children:"then"})," 方法，此时会触发 ",e.jsx(n.code,{children:"Suspense"})," 再次执行「调度一个更新任务」。由于此时 ",e.jsx(n.code,{children:"primary"})," 中的 promise 已经 resolve，因此此时就可以拿到数据直接渲染 ",e.jsx(n.code,{children:"primary"})," 组件。"]}),`
`,e.jsx(n.p,{children:"整个流程可以简单表示为："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`Suspense ->
primary -> 
Suspense -> 
fallback -> 
waiting -> resolve() -> 
Suspense -> 
primary -> 
`})}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"2"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"primary 为普通组件时"})}),`
`,e.jsxs(n.p,{children:["当 ",e.jsx(n.code,{children:"primary"})," 为普通组件时，会直接渲染普通组件，如下案例所示。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import React, { Suspense } from 'react';
import Message from './Message'
import Skeleton from './Skeleton'

export default function Index() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Message
        message='这是一个普通的 UI 组件，Skeleton 组件不会有任何渲染机会，直接渲染 Message 组件'
        title='Primary'
      />
    </Suspense>
  )
}
`})}),`
`,e.jsx(n.p,{children:"渲染结果如下"}),`
`,e.jsx(t,{reload:!0,children:e.jsx(N,{})}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"3"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"新旧实现对比"})}),`
`,e.jsx(n.p,{children:"在前面我们 结合 use 与 Suspense 实现了一个初始化加载的案例。该案例的视觉表现是在初始化时，首先显示 Skeleton 组件，请求成功之后，显示 Message 组件。"}),`
`,e.jsx(n.p,{children:"核心代码与演示效果如下，点击 reload 按钮可重复观察执行过程"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`export default function Index() {
  const promise = getMessage()
  return (
    <Suspense fallback={<Skeleton />}>
      <Message promise={promise} />
    </Suspense>
  )
}
`})}),`
`,e.jsx(n.p,{children:"刷新页面时重新请求数据渲染，请求过程中显示骨架屏组件 Skeleton"}),`
`,e.jsx(t,{reload:!0,children:e.jsx(a,{})}),`
`,e.jsxs(n.p,{children:["这里我们需要关注的是，对比以前必须要借助 ",e.jsx(n.code,{children:"state"})," ",e.jsx(n.code,{children:"useEffect"})," 的实现方式，体会一下差别。核心逻辑如下"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// 之前的实现方式
export default function Index() {
  const [content, update] = useState({value: ''})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMessage().then(res => {
      update(res)
      setLoading(false)
    })
  }, []);

  if (loading) {
    return <Skeleton />
  }

  return (
    <Message message={content.value} />
  )
}
`})}),`
`,e.jsx(n.p,{children:"我们可以在右侧演练场中观察完整的演示效果。"}),`
`,e.jsx(n.p,{children:"可以很明显的看出，新的方式使用 use + Suspense ，代码更加简洁。"}),`
`,e.jsxs(n.p,{children:["除此之外，由于在严格模式下，组件首次加载会执行两次，因此我们还需要想额外的办法防止重复执行，代码会变得更加冗余。一个很明显的差别就是 ",e.jsx(n.code,{children:"Suspense + use"})," 的方式会自动帮助我们弃用第二次的请求数据。从视觉上的效果就是，右侧使用 useEffect 实现的结果，UI 会更新两次。"]}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"4"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"总结"})}),`
`,e.jsxs(n.p,{children:["与老版本使用 ",e.jsx(n.code,{children:"state"})," + ",e.jsx(n.code,{children:"useEffect"})," 完成首页初始化的需求相比，新的开发方式更加的简洁，代码舒适度更高。"]}),`
`,e.jsxs(n.p,{children:["需要注意区分的是，在以前的开发方式中，我们可以通过自定义 hook 的方式，把状态与 ",e.jsx(n.code,{children:"useEffect"})," 封装成自定义 hook."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function useFetch() {
  const [content, update] = useState({value: ''})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api().then(res => {
      setLoading(false)
      update(res)
    })
  }, [])

  return {content, loading}
}
`})}),`
`,e.jsx(n.p,{children:"最终在应用组件中也可以写出非常类似的非常简洁的代码。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function Index2() {
  const {content, loading} =  useFetch()

  if (loading) {
    return <Skeleton />
  }

  return (
    <Message message={content.value} />
  )
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Vue3 也是这种类似自定义 hook 的方式。但是这两种开发方式是有本质区别的。"}),`
`]}),`
`,e.jsx(n.p,{children:"这是我们之前版本的最佳实践。注意体会他们之间的区别。相似，但却不同。我们后续会列举更多案例，尽可能用新的开发思路去复现开发过程中会出现的场景。"})]})}function M(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}const R={"App.js":u,"api.js":h,"Button.jsx":m,"Skeleton.jsx":x,"/public/index.html":g};function W(){return e.jsx(p,{files:R,renderArticle:s=>e.jsx(M,{components:{code:s}})})}export{W as default};
