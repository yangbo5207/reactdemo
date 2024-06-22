import{c as h,j as n,t as N,a as S,r as x}from"./index-oQiJtYgt.js";import{C as j}from"./Cardruntime-WygvHClN.js";import{A as _}from"./index-FLqTg1MW.js";import"./Preview-CBmvf_l4.js";import"./atom-one-light-EzjejzeC.js";const M=`import {use, useState, Suspense} from 'react'
import Message from './Message'
import Skeleton from './Skeleton'
import Button from './Button'
import {getMessage} from './api'

export default function Demo01() {
  const [promise, update] = useState(null)

  function __handler() {
    update(getMessage())
  }

  return (
    <>
      <div className='text-right mb-4'>
        <Button onClick={__handler}>更新数据</Button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Content promise={promise} />
      </Suspense>
    </>
  )
}

function Content(props) {
  if (!props.promise) {
    return <Message message='' />
  }

  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
`,C=`import {twMerge} from 'tailwind-merge'
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
`,R=`const random = [
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
`,L=`export default function Skeleton(props) {
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
`,T=`<!DOCTYPE html>
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
`,A=`const Message = (props) => {
  const message = unescape(props.message.replace(/\\\\u/gi,'%u'));
  const title = unescape((props.title || '').replace(/\\\\u/gi,'%u'));

  let base = 'flex border border-blue-100 p-4 rounded-md shadow'


  if (!message) {
    return (
      <div className={\`\${base} justify-center items-center flex-col text-gray-500\`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
        </svg>

        <div className='mt-2'>no data.</div>
      </div>
    )
  }

  return (
    <div className={base}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
      <div className='flex-1 ml-3'>
        <div>{title || 'Heads Up!'}</div>
        <div className='text-sm mt-1 text-gray-600'>{message}</div>
      </div>
    </div>
  )
}

export default Message
`,f=s=>{const e=h.c(13);let r;e[0]!==s.message?(r=unescape(s.message.replace(/\\u/gi,"%u")),e[0]=s.message,e[1]=r):r=e[1];const t=r,a=s.title||"";let o;e[2]!==a?(o=unescape(a.replace(/\\u/gi,"%u")),e[2]=a,e[3]=o):o=e[3];const i=o;if(!t){let p;return e[4]===Symbol.for("react.memo_cache_sentinel")?(p=n.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow justify-center items-center flex-col text-gray-500",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),n.jsx("div",{className:"mt-2",children:"no data."})]}),e[4]=p):p=e[4],p}let l;e[5]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),e[5]=l):l=e[5];const c=i||"Heads Up!";let d;e[6]!==c?(d=n.jsx("div",{children:c}),e[6]=c,e[7]=d):d=e[7];let m;e[8]!==t?(m=n.jsx("div",{className:"text-sm mt-1 text-gray-600",children:t}),e[8]=t,e[9]=m):m=e[9];let u;return e[10]!==d||e[11]!==m?(u=n.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[l,n.jsxs("div",{className:"flex-1 ml-3",children:[d,m]})]}),e[10]=d,e[11]=m,e[12]=u):u=e[12],u};function b(s){const e=h.c(3);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e[0]=r):r=e[0];let t;e[1]===Symbol.for("react.memo_cache_sentinel")?(t=n.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e[1]=t):t=e[1];let a;return e[2]===Symbol.for("react.memo_cache_sentinel")?(a=n.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:n.jsxs("div",{className:"animate-pulse flex space-x-4",children:[r,n.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[t,n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),n.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})}),e[2]=a):a=e[2],a}document.documentElement.style.fontSize="14px";function y(s){const e=h.c(24);let r,t,a,o,i,l,c,d;e[0]!==s?({className:c,primary:r,danger:t,sm:i,lg:l,signal:o,success:a,...d}=s,e[0]=s,e[1]=r,e[2]=t,e[3]=a,e[4]=o,e[5]=i,e[6]=l,e[7]=c,e[8]=d):(r=e[1],t=e[2],a=e[3],o=e[4],i=e[5],l=e[6],c=e[7],d=e[8]);let m;e[9]!==r||e[10]!==t||e[11]!==a||e[12]!==o||e[13]!==i||e[14]!==l||e[15]!==c?(m=N(S("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":r,"bg-red-500 text-white hover:bg-red-600":t,"bg-green-500 text-white hover:bg-green-600":a,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":o,"text-xs py-1.5 px-3":i,"text-lg py-2 px-6":l},c)),e[9]=r,e[10]=t,e[11]=a,e[12]=o,e[13]=i,e[14]=l,e[15]=c,e[16]=m):m=e[16];const u=m;let p;e[17]!==o?(p=o&&n.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[n.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),n.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]}),e[17]=o,e[18]=p):p=e[18];let g;return e[19]!==u||e[20]!==d||e[21]!==s.children||e[22]!==p?(g=n.jsxs("button",{className:u,...d,children:[s.children,p]}),e[19]=u,e[20]=d,e[21]=s.children,e[22]=p,e[23]=g):g=e[23],g}const B=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var w=new Headers;w.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var $={method:"GET",headers:w,redirect:"follow",data:"hex"};const H="https://echo.apifox.com/delay/1",k=async()=>{await fetch(H,$);const s=Math.floor(Math.random()*10)%5;return{value:B[s]}};function z(){const s=h.c(5),[e,r]=x.useState(null);let t;s[0]===Symbol.for("react.memo_cache_sentinel")?(t=function(){r(k())},s[0]=t):t=s[0];const a=t;let o;s[1]===Symbol.for("react.memo_cache_sentinel")?(o=n.jsx("div",{className:"text-right mb-4",children:n.jsx(y,{onClick:a,children:"更新数据"})}),s[1]=o):o=s[1];let i;s[2]===Symbol.for("react.memo_cache_sentinel")?(i=n.jsx(b,{}),s[2]=i):i=s[2];let l;return s[3]!==e?(l=n.jsxs(n.Fragment,{children:[o,n.jsx(x.Suspense,{fallback:i,children:n.jsx(D,{promise:e})})]}),s[3]=e,s[4]=l):l=s[4],l}function D(s){const e=h.c(3);if(!s.promise){let a;return e[0]===Symbol.for("react.memo_cache_sentinel")?(a=n.jsx(f,{message:""}),e[0]=a):a=e[0],a}const{value:r}=x.use(s.promise);let t;return e[1]!==r?(t=n.jsx(f,{message:r}),e[1]=r,e[2]=t):t=e[2],t}function E(){const s=h.c(6);let e;s[0]===Symbol.for("react.memo_cache_sentinel")?(e=Promise.resolve({value:""}),s[0]=e):e=s[0];const[r,t]=x.useState(e);let a;s[1]===Symbol.for("react.memo_cache_sentinel")?(a=function(){t(k())},s[1]=a):a=s[1];const o=a;let i;s[2]===Symbol.for("react.memo_cache_sentinel")?(i=n.jsx("div",{className:"text-right mb-4",children:n.jsx(y,{onClick:o,children:"更新数据"})}),s[2]=i):i=s[2];let l;s[3]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx(b,{}),s[3]=l):l=s[3];let c;return s[4]!==r?(c=n.jsxs(n.Fragment,{children:[i,n.jsx(x.Suspense,{fallback:l,children:n.jsx(U,{promise:r})})]}),s[4]=r,s[5]=c):c=s[5],c}function U(s){const e=h.c(2),{value:r}=x.use(s.promise);let t;return e[0]!==r?(t=n.jsx(f,{message:r}),e[0]=r,e[1]=t):t=e[1],t}function v(s){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"接下来，我们将会以大量的实践案例来展开 React 19 新 hook 的运用。"}),`
`,n.jsxs(e.p,{children:["本文模拟的实践案例为",n.jsx(e.strong,{children:"点击按钮更新数据"}),"。这在开发中是一个非常常见的场景。"]}),`
`,n.jsx(e.p,{children:"案例完成之后的最终演示效果图如下。案例的视觉表现为：初始化时没有请求，所以组件显示为空数据样式。当我们点击按钮时请求一条数据，数据更新，请求成功之后显示更新之后的内容。"}),`
`,n.jsx(j,{reload:!0,children:n.jsx(z,{})}),`
`,n.jsx(e.p,{children:"接下来，我们直接用 React 19 新的开发方式来完成这个需求。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"0"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"基础实现"})}),`
`,n.jsx(e.p,{children:"首先创建一个方法用于请求数据，请确保该方法执行会返回一个 promise 对象。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const getApi = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}
`})}),`
`,n.jsxs(e.p,{children:["这里一个非常关键的地方就在于，当我们要更新的数据时，我们不再需要设计一个 ",n.jsx(e.code,{children:"loading"})," 状态去记录数据是否正在发生请求行为，因为 ",n.jsx(e.code,{children:"Suspense"})," 帮助我们解决了 Loading 组件的显示问题。"]}),`
`,n.jsxs(e.p,{children:["与此同时，",n.jsx(e.code,{children:"use()"})," 又帮助我们解决了数据获取的问题。那么问题就来了，这个时候，好像我们也不需要设计一个状态去存储数据。"]}),`
`,n.jsx(e.p,{children:"那么我们应该怎么办呢？"}),`
`,n.jsxs(e.p,{children:["这里有一个",n.jsx(e.strong,{children:"非常巧妙"}),"的方式，就是把",n.jsx(e.strong,{children:"创建的 promise 作为状态值"}),"来触发组件的重新执行。每次点击，我们都需要创建新的 promise"]}),`
`,n.jsx(e.p,{children:"代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// 记住这个初始值
const [promise, update] = useState(null)
`})}),`
`,n.jsx(e.p,{children:"这个时候，当我们点击事件执行时，则只需要执行如下代码去触发组件的更新即可。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function __handler() {
  // 每次点击，都会创建新的 promise 对象
  update(getMessage())
}
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"getApi()"})," 执行，新的请求会发生。他的执行结果，又返回了一个新的 promise."]}),`
`,n.jsx(e.p,{children:"因此，点击之后会创建的新 promise 值，promise 此时就会作为状态更改触发组件的更新。"}),`
`,n.jsx(e.p,{children:"完整代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import {use, useState, Suspense} from 'react'
import Message from './Message'
import Skeleton from './Skeleton'
import Button from './Button'
import {getMessage} from './api'

export default function Demo01() {
  const [promise, update] = useState(null)

  function __handler() {
    update(getMessage())
  }

  return (
    <>
      <div className='text-right mb-4'>
        <Button onClick={__handler}>更新数据</Button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Content promise={promise} />
      </Suspense>
    </>
  )
}

function Content(props) {
  if (!props.promise) {
    return <Message message='' />
  }

  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
`})}),`
`,n.jsx(e.p,{children:"案例写完之后。我们基本上就能够实现最开始案例中的交互效果了。完整的代码在右侧查看。"}),`
`,n.jsx(e.p,{children:"但是现别急，还没有完。我们还需要进一步分析一下这个案例。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"案例分析"})}),`
`,n.jsx(e.p,{children:"这里我们需要注意观察两个事情。"}),`
`,n.jsxs(e.p,{children:["一个是观察当前组件更新，更上层的父组件是否发生了变化。我们可以在 ",n.jsx(e.code,{children:"App"})," 组件中执行一次打印。"]}),`
`,n.jsx(e.p,{children:"发现，当我们重新请求时，当前组件更新，但是上层组件并不会重新执行。"}),`
`,n.jsxs(e.p,{children:["我们可以出得结论：",n.jsx(e.strong,{children:"更简洁的状态设计，有利于命中 React 默认的性能优化规则"}),"。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"具体的规则请在 React 知命境合集中查看。"}),`
`]}),`
`,n.jsx(e.p,{children:"更简洁的状态设计，也是 React 19 所倡导的开发思路。我们需要尽可能少的使用 useState，例如，这里借助了 Suspense 减少了 loading 状态的维护。"}),`
`,n.jsxs(e.p,{children:["另外一个事情，是我们要特别特别注意观察子组件 ",n.jsx(e.code,{children:"Content"})," 的实现。"]}),`
`,n.jsxs(e.p,{children:["首先因为我们初始化时，给状态 ",n.jsx(e.code,{children:"promise"})," 赋予的默认值是 ",n.jsx(e.code,{children:"null"}),"。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// 记住这个初始值
const [promise, update] = useState(null)
`})}),`
`,n.jsxs(e.p,{children:["之后，我们就将状态 promise 传给了子组件 ",n.jsx(e.code,{children:"Content"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`<Suspense fallback={<Skeleton />}>
  <Content promise={promise} />
</Suspense>
`})}),`
`,n.jsxs(e.p,{children:["然后在 Content 组件的内部实现中，因为我们直接把 promise 传给了 ",n.jsx(e.code,{children:"use"}),"，那么此时直接执行肯定会报错"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const {value} = use(props.promise)
`})}),`
`,n.jsxs(e.p,{children:["要注意的是，我们刚才说，使用 ",n.jsx(e.code,{children:"Suspense"})," 会捕获子组件的异常，但是不是捕获所有异常，它只能识别 promise 的异常。因此，这里的报错会直接影响到整个页面。"]}),`
`,n.jsxs(e.p,{children:["所以，为了处理好初始化时传入 ",n.jsx(e.code,{children:"api"})," 值为 null，我在内部实现代码逻辑中，使用了 ",n.jsx(e.code,{children:"if"})," 判断该条件，然后执行了一次 ",n.jsx(e.code,{children:"return"}),"。我试图让 ",n.jsx(e.code,{children:"use(null)"})," 得不到执行的时机。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function Content(props) {
  if (!props.promise) {
    return <Message message='' />
  }

  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
`})}),`
`,n.jsx(e.p,{children:"当然，我们还可以给状态 promise 一个默认的，自带 resolve 值的 Promise 对象作为初始值，这样可以在子组件中避免这个异常判断。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const [promise, update] = useState(Promise.resolve({value: ''}))
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function Content(props) {
  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
`})}),`
`,n.jsx(e.p,{children:"演示效果如下图所示"}),`
`,n.jsx(j,{reload:!0,children:n.jsx(E,{})}),`
`,n.jsx(e.p,{children:"这种写法有一个很小的瑕疵，就是在初始化时，也不可避免的显示了 Skeleton 组件，实际上是不需要的。因此具体采用哪种写法，要依据实践中的需求而定。"})]})}function W(s={}){const{wrapper:e}=s.components||{};return e?n.jsx(e,{...s,children:n.jsx(v,{...s})}):v(s)}const q={"App.js":M,"api.js":R,"Message.jsx":A,"Button.jsx":C,"Skeleton.jsx":L,"/public/index.html":T};function X(){const s=h.c(1);let e;return s[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(_,{files:q,renderArticle:r=>n.jsx(W,{components:{code:r}})}),s[0]=e):e=s[0],e}export{X as default};
