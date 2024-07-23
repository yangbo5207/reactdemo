import{j as e,t as f,c as b,r}from"./index-BxXbnW9e.js";import{C as l}from"./Cardruntime-DF2YgfxL.js";import{A as y}from"./index-LK1iCBIb.js";import"./index-BEsnAH_r.js";import"./activecode-BfSkJlGQ.js";import"./index-DMQVh9lL.js";import"./Preview-Cfw1m546.js";const w=`import {use, useState, Suspense} from 'react'
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
`,S=`export default function Skeleton(props) {
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
`,M=`<!DOCTYPE html>
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
`,C=`const Message = (props) => {
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
`,o=s=>{const n=unescape(s.message.replace(/\\u/gi,"%u")),t=unescape((s.title||"").replace(/\\u/gi,"%u"));let a="flex border border-blue-100 p-4 rounded-md shadow";return n?e.jsxs("div",{className:a,children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),e.jsxs("div",{className:"flex-1 ml-3",children:[e.jsx("div",{children:t||"Heads Up!"}),e.jsx("div",{className:"text-sm mt-1 text-gray-600",children:n})]})]}):e.jsxs("div",{className:`${a} justify-center items-center flex-col text-gray-500`,children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"})}),e.jsx("div",{className:"mt-2",children:"no data."})]})};function d(s){return e.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:e.jsxs("div",{className:"animate-pulse flex space-x-4",children:[e.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),e.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function p(s){const{className:n,primary:t,danger:a,sm:h,lg:x,signal:i,success:g,...j}=s,v=f(b("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":t,"bg-red-500 text-white hover:bg-red-600":a,"bg-green-500 text-white hover:bg-green-600":g,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":h,"text-lg py-2 px-6":x},n));return e.jsxs("button",{className:v,...j,children:[s.children,i&&e.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[e.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),e.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const R=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var m=new Headers;m.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var L={method:"GET",headers:m,redirect:"follow",data:"hex"};const T="https://echo.apifox.com/delay/1",u=async()=>{await fetch(T,L);const s=Math.floor(Math.random()*10)%5;return{value:R[s]}};function A(){const[s,n]=r.useState(null);function t(){n(u())}return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-right mb-4",children:e.jsx(p,{onClick:t,children:"更新数据"})}),e.jsx(r.Suspense,{fallback:e.jsx(d,{}),children:e.jsx(B,{promise:s})})]})}function B(s){if(!s.promise)return e.jsx(o,{message:""});const{value:n}=r.use(s.promise);return e.jsx(o,{message:n})}function _(){const[s,n]=r.useState(Promise.resolve({value:""}));function t(){n(u())}return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-right mb-4",children:e.jsx(p,{onClick:t,children:"更新数据"})}),e.jsx(r.Suspense,{fallback:e.jsx(d,{}),children:e.jsx(H,{promise:s})})]})}function H(s){const{value:n}=r.use(s.promise);return e.jsx(o,{message:n})}function c(s){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"接下来，我们将会以大量的实践案例来展开 React 19 新 hook 的运用。"}),`
`,e.jsxs(n.p,{children:["本文模拟的实践案例为",e.jsx(n.strong,{children:"点击按钮更新数据"}),"。这在开发中是一个非常常见的场景。"]}),`
`,e.jsx(n.p,{children:"案例完成之后的最终演示效果图如下。案例的视觉表现为：初始化时没有请求，所以组件显示为空数据样式。当我们点击按钮时请求一条数据，数据更新，请求成功之后显示更新之后的内容。"}),`
`,e.jsx(l,{reload:!0,children:e.jsx(A,{})}),`
`,e.jsx(n.p,{children:"接下来，我们直接用 React 19 新的开发方式来完成这个需求。"}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"0"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"基础实现"})}),`
`,e.jsx(n.p,{children:"首先创建一个方法用于请求数据，请确保该方法执行会返回一个 promise 对象。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const getApi = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}
`})}),`
`,e.jsxs(n.p,{children:["这里一个非常关键的地方就在于，当我们要更新的数据时，我们不再需要设计一个 ",e.jsx(n.code,{children:"loading"})," 状态去记录数据是否正在发生请求行为，因为 ",e.jsx(n.code,{children:"Suspense"})," 帮助我们解决了 Loading 组件的显示问题。"]}),`
`,e.jsxs(n.p,{children:["与此同时，",e.jsx(n.code,{children:"use()"})," 又帮助我们解决了数据获取的问题。那么问题就来了，这个时候，好像我们也不需要设计一个状态去存储数据。"]}),`
`,e.jsx(n.p,{children:"那么我们应该怎么办呢？"}),`
`,e.jsxs(n.p,{children:["这里有一个",e.jsx(n.strong,{children:"非常巧妙"}),"的方式，就是把",e.jsx(n.strong,{children:"创建的 promise 作为状态值"}),"来触发组件的重新执行。每次点击，我们都需要创建新的 promise"]}),`
`,e.jsx(n.p,{children:"代码如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// 记住这个初始值
const [promise, update] = useState(null)
`})}),`
`,e.jsx(n.p,{children:"这个时候，当我们点击事件执行时，则只需要执行如下代码去触发组件的更新即可。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function __handler() {
  // 每次点击，都会创建新的 promise 对象
  update(getMessage())
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"getApi()"})," 执行，新的请求会发生。他的执行结果，又返回了一个新的 promise."]}),`
`,e.jsx(n.p,{children:"因此，点击之后会创建的新 promise 值，promise 此时就会作为状态更改触发组件的更新。"}),`
`,e.jsx(n.p,{children:"完整代码如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import {use, useState, Suspense} from 'react'
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
`,e.jsx(n.p,{children:"案例写完之后。我们基本上就能够实现最开始案例中的交互效果了。完整的代码在右侧查看。"}),`
`,e.jsx(n.p,{children:"但是现别急，还没有完。我们还需要进一步分析一下这个案例。"}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"1"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"案例分析"})}),`
`,e.jsx(n.p,{children:"这里我们需要注意观察两个事情。"}),`
`,e.jsxs(n.p,{children:["一个是观察当前组件更新，更上层的父组件是否发生了变化。我们可以在 ",e.jsx(n.code,{children:"App"})," 组件中执行一次打印。"]}),`
`,e.jsx(n.p,{children:"发现，当我们重新请求时，当前组件更新，但是上层组件并不会重新执行。"}),`
`,e.jsxs(n.p,{children:["我们可以出得结论：",e.jsx(n.strong,{children:"更简洁的状态设计，有利于命中 React 默认的性能优化规则"}),"。"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"具体的规则请在 React 知命境合集中查看。"}),`
`]}),`
`,e.jsx(n.p,{children:"更简洁的状态设计，也是 React 19 所倡导的开发思路。我们需要尽可能少的使用 useState，例如，这里借助了 Suspense 减少了 loading 状态的维护。"}),`
`,e.jsxs(n.p,{children:["另外一个事情，是我们要特别特别注意观察子组件 ",e.jsx(n.code,{children:"Content"})," 的实现。"]}),`
`,e.jsxs(n.p,{children:["首先因为我们初始化时，给状态 ",e.jsx(n.code,{children:"promise"})," 赋予的默认值是 ",e.jsx(n.code,{children:"null"}),"。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// 记住这个初始值
const [promise, update] = useState(null)
`})}),`
`,e.jsxs(n.p,{children:["之后，我们就将状态 promise 传给了子组件 ",e.jsx(n.code,{children:"Content"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`<Suspense fallback={<Skeleton />}>
  <Content promise={promise} />
</Suspense>
`})}),`
`,e.jsxs(n.p,{children:["然后在 Content 组件的内部实现中，因为我们直接把 promise 传给了 ",e.jsx(n.code,{children:"use"}),"，那么此时直接执行肯定会报错"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const {value} = use(props.promise)
`})}),`
`,e.jsxs(n.p,{children:["要注意的是，我们刚才说，使用 ",e.jsx(n.code,{children:"Suspense"})," 会捕获子组件的异常，但是不是捕获所有异常，它只能识别 promise 的异常。因此，这里的报错会直接影响到整个页面。"]}),`
`,e.jsxs(n.p,{children:["所以，为了处理好初始化时传入 ",e.jsx(n.code,{children:"api"})," 值为 null，我在内部实现代码逻辑中，使用了 ",e.jsx(n.code,{children:"if"})," 判断该条件，然后执行了一次 ",e.jsx(n.code,{children:"return"}),"。我试图让 ",e.jsx(n.code,{children:"use(null)"})," 得不到执行的时机。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function Content(props) {
  if (!props.promise) {
    return <Message message='' />
  }

  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
`})}),`
`,e.jsx(n.p,{children:"当然，我们还可以给状态 promise 一个默认的，自带 resolve 值的 Promise 对象作为初始值，这样可以在子组件中避免这个异常判断。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const [promise, update] = useState(Promise.resolve({value: ''}))
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function Content(props) {
  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
`})}),`
`,e.jsx(n.p,{children:"演示效果如下图所示"}),`
`,e.jsx(l,{reload:!0,children:e.jsx(_,{})}),`
`,e.jsx(n.p,{children:"这种写法有一个很小的瑕疵，就是在初始化时，也不可避免的显示了 Skeleton 组件，实际上是不需要的。因此具体采用哪种写法，要依据实践中的需求而定。"})]})}function z(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}const D={"App.js":w,"api.js":N,"Message.jsx":C,"Button.jsx":k,"Skeleton.jsx":S,"/public/index.html":M};function X(){return e.jsx(y,{files:D,renderArticle:s=>e.jsx(z,{components:{code:s}})})}export{X as default};
