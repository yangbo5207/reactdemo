import{c as g,j as n,t as N,a as _,r as x}from"./index-Di4F1x74.js";import{C as v}from"./Cardruntime-Cp1f-EP2.js";import{A as M}from"./index-DrkOu_iN.js";import"./Preview-BBadGkLg.js";import"./atom-one-light-C8MDVoqG.js";const L=`import {use, useState, Suspense} from 'react'
import Message from './Message'
import Skeleton from './Skeleton'
import Button from './Button'
import {getMessage} from './api'

export default function Demo01() {
  const [promise, update] = useState(getMessage)

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
`,B=`const random = [
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
`,R=`export default function Skeleton(props) {
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
`,j=t=>{const e=g.c(13);let s;e[0]!==t.message?(s=unescape(t.message.replace(/\\u/gi,"%u")),e[0]=t.message,e[1]=s):s=e[1];const a=s,o=t.title||"";let l;e[2]!==o?(l=unescape(o.replace(/\\u/gi,"%u")),e[2]=o,e[3]=l):l=e[3];const c=l;if(!a){let u;return e[4]===Symbol.for("react.memo_cache_sentinel")?(u=n.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow justify-center items-center flex-col text-gray-500",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),n.jsx("div",{className:"mt-2",children:"no data."})]}),e[4]=u):u=e[4],u}let r;e[5]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),e[5]=r):r=e[5];const i=c||"Heads Up!";let d;e[6]!==i?(d=n.jsx("div",{children:i}),e[6]=i,e[7]=d):d=e[7];let m;e[8]!==a?(m=n.jsx("div",{className:"text-sm mt-1 text-gray-600",children:a}),e[8]=a,e[9]=m):m=e[9];let p;return e[10]!==d||e[11]!==m?(p=n.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md shadow",children:[r,n.jsxs("div",{className:"flex-1 ml-3",children:[d,m]})]}),e[10]=d,e[11]=m,e[12]=p):p=e[12],p};function y(t){const e=g.c(3);let s;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=n.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e[0]=s):s=e[0];let a;e[1]===Symbol.for("react.memo_cache_sentinel")?(a=n.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e[1]=a):a=e[1];let o;return e[2]===Symbol.for("react.memo_cache_sentinel")?(o=n.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:n.jsxs("div",{className:"animate-pulse flex space-x-4",children:[s,n.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[a,n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),n.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})}),e[2]=o):o=e[2],o}document.documentElement.style.fontSize="14px";function w(t){const e=g.c(24);let s,a,o,l,c,r,i,d;e[0]!==t?({className:i,primary:s,danger:a,sm:c,lg:r,signal:l,success:o,...d}=t,e[0]=t,e[1]=s,e[2]=a,e[3]=o,e[4]=l,e[5]=c,e[6]=r,e[7]=i,e[8]=d):(s=e[1],a=e[2],o=e[3],l=e[4],c=e[5],r=e[6],i=e[7],d=e[8]);let m;e[9]!==s||e[10]!==a||e[11]!==o||e[12]!==l||e[13]!==c||e[14]!==r||e[15]!==i?(m=N(_("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":o,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":l,"text-xs py-1.5 px-3":c,"text-lg py-2 px-6":r},i)),e[9]=s,e[10]=a,e[11]=o,e[12]=l,e[13]=c,e[14]=r,e[15]=i,e[16]=m):m=e[16];const p=m;let u;e[17]!==l?(u=l&&n.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[n.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),n.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]}),e[17]=l,e[18]=u):u=e[18];let h;return e[19]!==p||e[20]!==d||e[21]!==t.children||e[22]!==u?(h=n.jsxs("button",{className:p,...d,children:[t.children,u]}),e[19]=p,e[20]=d,e[21]=t.children,e[22]=u,e[23]=h):h=e[23],h}const E=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var S=new Headers;S.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var H={method:"GET",headers:S,redirect:"follow",data:"hex"};const $="https://echo.apifox.com/delay/1",f=async()=>{await fetch($,H);const t=Math.floor(Math.random()*10)%5;return{value:E[t]}};function z(){const t=g.c(10);let e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e={value:""},t[0]=e):e=t[0];const[s,a]=x.useState(e),[o,l]=x.useState(!0);let c,r;t[1]===Symbol.for("react.memo_cache_sentinel")?(c=()=>{f().then(h=>{a(h),l(!1)})},r=[],t[1]=c,t[2]=r):(c=t[1],r=t[2]),x.useEffect(c,r);let i;t[3]===Symbol.for("react.memo_cache_sentinel")?(i=function(){l(!0),f().then(k=>{a(k),l(!1)})},t[3]=i):i=t[3];const d=i;let m;t[4]===Symbol.for("react.memo_cache_sentinel")?(m=n.jsx("div",{className:"text-right mb-4",children:n.jsx(w,{onClick:d,children:"更新数据"})}),t[4]=m):m=t[4];let p;t[5]!==o||t[6]!==s?(p=o?n.jsx(y,{}):n.jsx(j,{message:s.value}),t[5]=o,t[6]=s,t[7]=p):p=t[7];let u;return t[8]!==p?(u=n.jsxs(n.Fragment,{children:[m,p]}),t[8]=p,t[9]=u):u=t[9],u}function D(){const t=g.c(6);let e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e=f(),t[0]=e):e=t[0];const[s,a]=x.useState(e);let o;t[1]===Symbol.for("react.memo_cache_sentinel")?(o=function(){a(f())},t[1]=o):o=t[1];const l=o;let c;t[2]===Symbol.for("react.memo_cache_sentinel")?(c=n.jsx("div",{className:"text-right mb-4",children:n.jsx(w,{onClick:l,children:"更新数据"})}),t[2]=c):c=t[2];let r;t[3]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx(y,{}),t[3]=r):r=t[3];let i;return t[4]!==s?(i=n.jsxs(n.Fragment,{children:[c,n.jsx(x.Suspense,{fallback:r,children:n.jsx(U,{promise:s})})]}),t[4]=s,t[5]=i):i=t[5],i}function U(t){const e=g.c(2),{value:s}=x.use(t.promise);let a;return e[0]!==s?(a=n.jsx(j,{message:s}),e[0]=s,e[1]=a):a=e[1],a}function b(t){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.p,{children:["在上一章的基础之上，我们做一个小的需求变动。上一章的案例要求我们不要初始化时请求一条数据，因此，默认渲染结果是 ",n.jsx(e.code,{children:"no data"})]}),`
`,n.jsx(e.p,{children:"这一章的案例则不同，我们需要在初始化时请求数据。也就是说，我们此时同时需要初始化和更新的逻辑"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"0"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"需求变动之后的思考"})}),`
`,n.jsx(e.p,{children:"在以前版本的实现中，接口数据的触发方式不同，因此我们需要分别处理这两种触发时机。"}),`
`,n.jsx(e.p,{children:"首先，我们需要定义两个状态来管理数据结果和 loading 状态"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const [content, update] = useState({value: ''})
const [loading, setLoading] = useState(true)
`})}),`
`,n.jsxs(e.p,{children:["然后，我们利用 ",n.jsx(e.code,{children:"useEffect"})," 来实现初始化时的数据请求逻辑"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`useEffect(() => {
  getMessage().then(res => {
    update(res)
    setLoading(false)
  })
}, []);
`})}),`
`,n.jsx(e.p,{children:"按钮点击事件触发时，我们通过回调函数来实现数据的更新"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function __handler() {
  setLoading(true)
  getMessage().then(res => {
    update(res)
    setLoading(false)
  })
}
`})}),`
`,n.jsx(e.p,{children:"完整代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import {use, useState, Suspense, useEffect} from 'react'
import Message from './Message'
import Skeleton from './Skeleton'
import Button from './Button'
import {getMessage} from './api'

export default function Demo01() {
  const [content, update] = useState({value: ''})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMessage().then(res => {
      update(res)
      setLoading(false)
    })
  }, []);

  function __handler() {
    setLoading(true)
    getMessage().then(res => {
      update(res)
      setLoading(false)
    })
  }

  return (
    <>
      <div className='text-right mb-4'>
        <Button onClick={__handler}>更新数据</Button>
      </div>
      {loading ? <Skeleton /> : <Message message={content.value} />}
    </>
  )
}
`})}),`
`,n.jsx(e.p,{children:"演示效果如下案例所示"}),`
`,n.jsx(v,{reload:!0,children:n.jsx(z,{})}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"新的实现方式"})}),`
`,n.jsx(e.p,{children:"与之前版本的实现方式相比，新的开发方式就简单了许多。"}),`
`,n.jsx(e.p,{children:"我们只需要在上一章的案例中，做一个小的修改即可满足需求。那就是在给状态 promise 的初始值做一个小小的变动即可。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`- const [promise, update] = useState(null)
// 只需要改这一点代码
+ const [promise, update] = useState(getMessage())
`})}),`
`,n.jsx(e.p,{children:"这里的思路就是给状态 promise 赋值一个 Promise 对象作为初始值。修改之后的完整代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import {use, useState, Suspense} from 'react'
import Message from './Message'
import Skeleton from './Skeleton'
import Button from './Button'
import {getMessage} from './api'

export default function Demo02() {
  const [promise, update] = useState(getMessage())

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
  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
`})}),`
`,n.jsx(e.p,{children:"演示效果如下所示"}),`
`,n.jsx(v,{reload:!0,children:n.jsx(D,{})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"非常的方便省事。"})}),`
`,n.jsxs(e.p,{children:["最后需要注意的是一个小的细节，如果不考虑 Compiler 编译之后的代码去缓存初始化时的 ",n.jsx(e.code,{children:"getMessage()"}),"，那么每次更新组件时，该方法都会执行一次，因此，会导致冗余的接口请求。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"使用 Compiler 编译之后，这段代码会被缓存下来而不会重复执行"}),`
`]}),`
`,n.jsx(e.p,{children:"因此，最好的方式是进一步调整一下，利用 useState 的初始化机制修改如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`- const [promise, update] = useState(getMessage())
+ const [promise, update] = useState(getMessage)
`})}),`
`,n.jsx(e.p,{children:"这样，即使不用 Compiler 编译缓存，也不会出现冗余请求的情况。完整的代码和演示案例请在右侧模块中查看。"})]})}function W(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(b,{...t})}):b(t)}const q={"App.js":L,"api.js":B,"Message.jsx":A,"Button.jsx":C,"Skeleton.jsx":R,"/public/index.html":T};function Z(){const t=g.c(1);let e;return t[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(M,{files:q,renderArticle:s=>n.jsx(W,{components:{code:s}})}),t[0]=e):e=t[0],e}export{Z as default};
