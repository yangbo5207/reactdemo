import{j as n,c as d,G as m,b as p,d as u,e as h,f as x}from"./index-vB-mHLnv.js";import{g as f,h as g,a as v}from"./atom-one-light-Bb5l2Lva.js";import{P as y}from"./Preview-CBazhn3Q.js";const b=`import React, {useState, Suspense} from 'react'
import Userinfo from './Userinfo'
import Skeleton from './Skeleton'
import Button from './Button'
import {getMessage} from './api'
import use from './use'

export default function Demo01() {
  const [promise, updatePromise] = useState(() => [getMessage()])

  function __handler() {
    updatePromise([...promise, getMessage()])
  }

  return (
    <>
      <div className='text-right mb-4 flex justify-between items-center'>
        <div className='text-sm text-gray-400'>当前运行案例版本：react@16.14.0</div>
        <Button onClick={__handler}>新增数据</Button>
      </div>
      {promise.map((item, index) => (
        <Suspense fallback={<Skeleton />} key={\`hello \${index}\`}>
          <User promise={item} index={index} />
        </Suspense>
      ))}
    </>
  )
}

function User(props) {
  const result = use(props.promise)
  return (
    <Userinfo index={props.index} username={result.id} message={result.value} />
  )
}
`,w=`import React from 'react';
import {twMerge} from 'tailwind-merge'
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
`,j=`const random = [
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
    value: random[i],
    id: getUuid()
  }
}

function getUuid() {
  var s = [];
  var hexDigits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (var i = 0; i < 16; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }

  s[8] = "-"
  let uuid = s.join("")
  return uuid
}
`,S=`import React from 'react';
export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full my-4">
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
`,N=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css" rel="stylesheet">
    <title>案例演示</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`,k=`import React from 'react'

const Userinfo = (props) => {
  const message = unescape(props.message.replace(/\\\\u/gi,'%u'));
  const username = unescape((props.username || '').replace(/\\\\u/gi,'%u'));
  const index = props.index || 0;

  let base = 'flex border border-blue-100 p-4 rounded-md my-4 items-start'

  return (
    <div className={base}>
      <img className='w-10' src={\`https://api.dicebear.com/7.x/miniavs/svg?seed=\${index}\`} alt='' />
      <div className='flex-1 ml-3'>
        <div>{username || 'no name'}</div>
        <div className='text-sm mt-1 text-gray-600'>{message}</div>
      </div>
    </div>
  )
}

export default Userinfo
`,R=`import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
`,M=`export default function use(promise) {
  if (promise.status === 'fulfilled') {
    return promise.value
  } else if (promise.status === 'rejected') {
    throw promise.reason
  } else if (promise.status === 'pending') {
    throw promise
  } else {
    promise.status = 'pending'
    promise.then(result => {
      promise.status = 'fulfilled'
      promise.value = result
    }, reason => {
      promise.status = 'rejected'
      promise.reason = reason
    })
    throw promise
  }
}
`;function c(e){const t={code:"code",p:"p",pre:"pre",...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.p,{children:"可以看到，use + Suspense 的结合，可以极大的简化我们的开发代码，在开发体验上的提升是非常明显的。但是，如果由于客观原因，我们的项目无法升级到 React 19，那么我们就无法享受这种开发体验带来的提升了吗？"}),`
`,n.jsx(t.p,{children:"当然不是。早在 React 16 的后期版本中，就提供了对 Suspense 的支持，因此，我们只需要在这个基础之上，自己定义一个 use 方法，去读取 promise 中的值就可以实现我们前面所有章节的效果了。"}),`
`,n.jsx(t.p,{children:"自定义的代码如下"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-javascript",children:`export default function use(promise) {
  if (promise.status === 'fulfilled') {
    return promise.value
  } else if (promise.status === 'rejected') {
    throw promise.reason
  } else if (promise.status === 'pending') {
    throw promise
  } else {
    promise.status = 'pending'
    promise.then(result => {
      promise.status = 'fulfilled'
      promise.value = result
    }, reason => {
      promise.status = 'rejected'
      promise.reason = reason
    })
    throw promise
  }
}
`})}),`
`,n.jsx(t.p,{children:"如果你要理解这段代码，可以结合我们前面专门分析过的 Suspense 的运行原理来理解。"}),`
`,n.jsx(t.p,{children:"定义好之后，我们原本需要从 React 中引入的 use 方法，从这个模块里引入就可以了"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-diff",children:`- import React, {use} from 'react'
+ import use from './use'
`})}),`
`,n.jsxs(t.p,{children:["在右侧代码中，我提供了一个完整的案例来使用 use，右侧案例的 React 运行版本是 ",n.jsx(t.code,{children:"react@16.14.0"})]})]})}function _(e={}){const{wrapper:t}=e.components||{};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}document.documentElement.style.fontSize="14px";var T=new Headers;T.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");const U={"App.js":b,"index.js":R,"api.js":j,"use.js":M,"Userinfo.jsx":k,"Button.jsx":w,"Skeleton.jsx":S,"/public/index.html":{code:N,hidden:!0}};function D({className:e,...t}){const s=/language-(\w+)/.exec(e||"");return s?n.jsx(g,{language:s[1],PreTag:"div",...t,style:v}):n.jsx("code",{className:e,...t})}function E(){const e=d.c(7);let t,s;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=n.jsx(_,{components:{code:D}}),s=n.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),e[0]=t,e[1]=s):(t=e[0],s=e[1]);let r;e[2]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsxs("div",{className:"md:w-[40%] pr-4 keep",children:[t,s,n.jsx(m,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"\\u6B22\\u8FCE\\u9053\\u53CB",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",crossorigin:"anonymous",async:!0})]}),e[2]=r):r=e[2];let o,a;e[3]===Symbol.for("react.memo_cache_sentinel")?(o={externalResources:["https://cdn.tailwindcss.com"],editorHeight:"auto"},a={dependencies:{react:"16.14.0","react-dom":"16.14.0","tailwind-merge":"latest",clsx:"latest"}},e[3]=o,e[4]=a):(o=e[3],a=e[4]);let i;e[5]===Symbol.for("react.memo_cache_sentinel")?(i=n.jsx(p,{}),e[5]=i):i=e[5];let l;return e[6]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx("div",{children:n.jsxs("div",{className:"mt-5 md:flex",children:[r,n.jsx("div",{className:"md:w-[60%] sticky top-[8rem] h-[calc(100vh_-_8rem-35px)] overflow-y-auto",children:n.jsx(u,{template:"react",theme:f,options:o,customSetup:a,files:U,children:n.jsxs(h,{children:[i,n.jsx(y,{children:n.jsx(x,{})})]})})})]})}),e[6]=l):l=e[6],l}export{E as default};
