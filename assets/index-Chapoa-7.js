import{j as e,t as j,c as b,r}from"./index-BxXbnW9e.js";import{C as d}from"./Cardruntime-DF2YgfxL.js";import{A as y}from"./index-LK1iCBIb.js";import"./index-BEsnAH_r.js";import"./activecode-BfSkJlGQ.js";import"./index-DMQVh9lL.js";import"./Preview-Cfw1m546.js";const w=`import {use, useState, Suspense} from 'react'
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
`,k=`import {twMerge} from 'tailwind-merge'
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
`,N=`const random = [
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
`,M=`export default function Skeleton(props) {
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
`,S=`<!DOCTYPE html>
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
`,L=`const Message = (props) => {
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
`,u=s=>{const n=unescape(s.message.replace(/\\u/gi,"%u")),a=unescape((s.title||"").replace(/\\u/gi,"%u"));let t="flex border border-blue-100 p-4 rounded-md shadow";return n?e.jsxs("div",{className:t,children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),e.jsxs("div",{className:"flex-1 ml-3",children:[e.jsx("div",{children:a||"Heads Up!"}),e.jsx("div",{className:"text-sm mt-1 text-gray-600",children:n})]})]}):e.jsxs("div",{className:`${t} justify-center items-center flex-col text-gray-500`,children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),e.jsx("div",{className:"mt-2",children:"no data."})]})};function m(s){return e.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:e.jsxs("div",{className:"animate-pulse flex space-x-4",children:[e.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),e.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function h(s){const{className:n,primary:a,danger:t,sm:l,lg:o,signal:c,success:x,...f}=s,v=j(b("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":a,"bg-red-500 text-white hover:bg-red-600":t,"bg-green-500 text-white hover:bg-green-600":x,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":c,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":o},n));return e.jsxs("button",{className:v,...f,children:[s.children,c&&e.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[e.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),e.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const C=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var g=new Headers;g.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var B={method:"GET",headers:g,redirect:"follow",data:"hex"};const T="https://echo.apifox.com/delay/1",i=async()=>{await fetch(T,B);const s=Math.floor(Math.random()*10)%5;return{value:C[s]}};function _(){const[s,n]=r.useState({value:""}),[a,t]=r.useState(!0);r.useEffect(()=>{i().then(o=>{n(o),t(!1)})},[]);function l(){t(!0),i().then(o=>{n(o),t(!1)})}return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-right mb-4",children:e.jsx(h,{onClick:l,children:"更新数据"})}),a?e.jsx(m,{}):e.jsx(u,{message:s.value})]})}function R(){const[s,n]=r.useState(i());function a(){n(i())}return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-right mb-4",children:e.jsx(h,{onClick:a,children:"更新数据"})}),e.jsx(r.Suspense,{fallback:e.jsx(m,{}),children:e.jsx(A,{promise:s})})]})}function A(s){const{value:n}=r.use(s.promise);return e.jsx(u,{message:n})}function p(s){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["在上一章的基础之上，我们做一个小的需求变动。上一章的案例要求我们不要初始化时请求一条数据，因此，默认渲染结果是 ",e.jsx(n.code,{children:"no data"})]}),`
`,e.jsx(n.p,{children:"这一章的案例则不同，我们需要在初始化时请求数据。也就是说，我们此时同时需要初始化和更新的逻辑"}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"0"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"需求变动之后的思考"})}),`
`,e.jsx(n.p,{children:"在以前版本的实现中，接口数据的触发方式不同，因此我们需要分别处理这两种触发时机。"}),`
`,e.jsx(n.p,{children:"首先，我们需要定义两个状态来管理数据结果和 loading 状态"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const [content, update] = useState({value: ''})
const [loading, setLoading] = useState(true)
`})}),`
`,e.jsxs(n.p,{children:["然后，我们利用 ",e.jsx(n.code,{children:"useEffect"})," 来实现初始化时的数据请求逻辑"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`useEffect(() => {
  getMessage().then(res => {
    update(res)
    setLoading(false)
  })
}, []);
`})}),`
`,e.jsx(n.p,{children:"按钮点击事件触发时，我们通过回调函数来实现数据的更新"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function __handler() {
  setLoading(true)
  getMessage().then(res => {
    update(res)
    setLoading(false)
  })
}
`})}),`
`,e.jsx(n.p,{children:"完整代码如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {use, useState, Suspense, useEffect} from 'react'
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
`,e.jsx(n.p,{children:"演示效果如下案例所示"}),`
`,e.jsx(d,{reload:!0,children:e.jsx(_,{})}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"1"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"新的实现方式"})}),`
`,e.jsx(n.p,{children:"与之前版本的实现方式相比，新的开发方式就简单了许多。"}),`
`,e.jsx(n.p,{children:"我们只需要在上一章的案例中，做一个小的修改即可满足需求。那就是在给状态 promise 的初始值做一个小小的变动即可。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- const [promise, update] = useState(null)
// 只需要改这一点代码
+ const [promise, update] = useState(getMessage())
`})}),`
`,e.jsx(n.p,{children:"这里的思路就是给状态 promise 赋值一个 Promise 对象作为初始值。修改之后的完整代码如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {use, useState, Suspense} from 'react'
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
`,e.jsx(n.p,{children:"演示效果如下所示"}),`
`,e.jsx(d,{reload:!0,children:e.jsx(R,{})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"非常的方便省事。"})}),`
`,e.jsxs(n.p,{children:["最后需要注意的是一个小的细节，如果不考虑 Compiler 编译之后的代码去缓存初始化时的 ",e.jsx(n.code,{children:"getMessage()"}),"，那么每次更新组件时，该方法都会执行一次，因此，会导致冗余的接口请求。"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"使用 Compiler 编译之后，这段代码会被缓存下来而不会重复执行"}),`
`]}),`
`,e.jsx(n.p,{children:"因此，最好的方式是进一步调整一下，利用 useState 的初始化机制修改如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- const [promise, update] = useState(getMessage())
+ const [promise, update] = useState(getMessage)
`})}),`
`,e.jsx(n.p,{children:"这样，即使不用 Compiler 编译缓存，也不会出现冗余请求的情况。完整的代码和演示案例请在右侧模块中查看。"})]})}function E(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(p,{...s})}):p(s)}const H={"App.js":w,"api.js":N,"Message.jsx":L,"Button.jsx":k,"Skeleton.jsx":M,"/public/index.html":S};function Z(){return e.jsx(y,{files:H,renderArticle:s=>e.jsx(E,{components:{code:s}})})}export{Z as default};
