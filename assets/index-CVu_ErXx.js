import{j as e,G as a,h as o,a as i}from"./index-BxXbnW9e.js";import{a as d,b as l,c,d as p}from"./index-BEsnAH_r.js";import{g as m}from"./index-DMQVh9lL.js";import{P as u}from"./Preview-Cfw1m546.js";const x=`import React, {useState, Suspense} from 'react'
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
`,h=`import React from 'react';
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
`,f=`const random = [
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
`,g=`import React from 'react';
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
`,v=`<!DOCTYPE html>
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
`,y=`import React from 'react'

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
`,b=`import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
`,w=`export default function use(promise) {
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
`;function r(t){const n={code:"code",p:"p",pre:"pre",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"可以看到，use + Suspense 的结合，可以极大的简化我们的开发代码，在开发体验上的提升是非常明显的。但是，如果由于客观原因，我们的项目无法升级到 React 19，那么我们就无法享受这种开发体验带来的提升了吗？"}),`
`,e.jsx(n.p,{children:"当然不是。早在 React 16 的后期版本中，就提供了对 Suspense 的支持，因此，我们只需要在这个基础之上，自己定义一个 use 方法，去读取 promise 中的值就可以实现我们前面所有章节的效果了。"}),`
`,e.jsx(n.p,{children:"自定义的代码如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`export default function use(promise) {
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
`,e.jsx(n.p,{children:"如果你要理解这段代码，可以结合我们前面专门分析过的 Suspense 的运行原理来理解。"}),`
`,e.jsx(n.p,{children:"定义好之后，我们原本需要从 React 中引入的 use 方法，从这个模块里引入就可以了"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- import React, {use} from 'react'
+ import use from './use'
`})}),`
`,e.jsxs(n.p,{children:["在右侧代码中，我提供了一个完整的案例来使用 use，右侧案例的 React 运行版本是 ",e.jsx(n.code,{children:"react@16.14.0"})]})]})}function j(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}document.documentElement.style.fontSize="14px";var N=new Headers;N.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");const k={"App.js":x,"index.js":b,"api.js":f,"use.js":w,"Userinfo.jsx":y,"Button.jsx":h,"Skeleton.jsx":g,"/public/index.html":{code:v,hidden:!0}};function R({className:t,...n}){const s=/language-(\w+)/.exec(t||"");return s?e.jsx(o,{language:s[1],PreTag:"div",...n,style:i}):e.jsx("code",{className:t,...n})}function D(){return e.jsx("div",{children:e.jsxs("div",{className:"mt-5 md:flex",children:[e.jsxs("div",{className:"md:w-[40%] pr-4 keep",children:[e.jsx(j,{components:{code:R}}),e.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),e.jsx(a,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",crossorigin:"anonymous",async:!0})]}),e.jsx("div",{className:"md:w-[60%] sticky top-[8rem] h-[calc(100vh_-_8rem-35px)] overflow-y-auto",children:e.jsx(d,{template:"react",theme:m,options:{externalResources:["https://cdn.tailwindcss.com"],editorHeight:"auto"},customSetup:{dependencies:{react:"16.14.0","react-dom":"16.14.0","tailwind-merge":"latest",clsx:"latest"}},files:k,children:e.jsxs(l,{children:[e.jsx(c,{}),e.jsx(u,{children:e.jsx(p,{})})]})})})]})})}export{D as default};
