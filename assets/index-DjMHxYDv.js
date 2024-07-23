import{j as e,t as x,c as g,r as o}from"./index-BxXbnW9e.js";import{C as f}from"./Cardruntime-DF2YgfxL.js";import{A as v}from"./index-LK1iCBIb.js";import"./index-BEsnAH_r.js";import"./activecode-BfSkJlGQ.js";import"./index-DMQVh9lL.js";import"./Preview-Cfw1m546.js";const j=`import {use, useState, Suspense, useEffect} from 'react'
import Userinfo from './Userinfo'
import Skeleton from './Skeleton'
import Button from './Button'
import {getMessage} from './api'

export default function Demo01() {
  const [promise, updatePromise] = useState(() => [getMessage()])

  function __handler() {
    updatePromise([...promise, getMessage()])
  }

  return (
    <>
      <div className='text-right mb-4'>
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
`,b=`import {twMerge} from 'tailwind-merge'
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
`,y=`const random = [
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
`,w=`export default function Skeleton(props) {
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
`,N=`<!DOCTYPE html>
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
`,k=`const Userinfo = (props) => {
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
`,S=s=>{const n=unescape(s.message.replace(/\\u/gi,"%u")),t=unescape((s.username||"").replace(/\\u/gi,"%u")),r=s.index||0;return e.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md my-4 items-start",children:[e.jsx("img",{className:"w-10",src:`https://api.dicebear.com/7.x/miniavs/svg?seed=${r}`,alt:""}),e.jsxs("div",{className:"flex-1 ml-3",children:[e.jsx("div",{children:t||"no name"}),e.jsx("div",{className:"text-sm mt-1 text-gray-600",children:n})]})]})};function M(s){return e.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:e.jsxs("div",{className:"animate-pulse flex space-x-4",children:[e.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),e.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}document.documentElement.style.fontSize="14px";function U(s){const{className:n,primary:t,danger:r,sm:a,lg:p,signal:i,success:u,...m}=s,h=x(g("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":t,"bg-red-500 text-white hover:bg-red-600":r,"bg-green-500 text-white hover:bg-green-600":u,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":i,"text-xs py-1.5 px-3":a,"text-lg py-2 px-6":p},n));return e.jsxs("button",{className:h,...m,children:[s.children,i&&e.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[e.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),e.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})]})}const L=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var c=new Headers;c.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var T={method:"GET",headers:c,redirect:"follow",data:"hex"};const R="https://echo.apifox.com/delay/1",l=async()=>{await fetch(R,T);const s=Math.floor(Math.random()*10)%5;return{value:L[s],id:B()}};function B(){for(var s=[],n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=0;t<16;t++)s[t]=n.substr(Math.floor(Math.random()*16),1);return s[8]="-",s.join("")}function A(){const[s,n]=o.useState([]);o.useEffect(()=>{n([...s,{type:"loading"}]),l().then(r=>{n([...s,r])})},[]);function t(){n([...s,{type:"loading"}]),l().then(r=>{n([...s,r])})}return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-right mb-4",children:e.jsx(U,{onClick:t,children:"新增数据"})}),e.jsx(E,{list:s})]})}function E(s){const n=s.list;return e.jsx(e.Fragment,{children:n.map((t,r)=>t.type==="loading"?e.jsx(M,{},`hello ${r}`):e.jsx(S,{index:r,username:t.id,message:t.value},`h${r}`))})}function d(s){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"这一章我们要学习的是一个新增加载项到列表的案例。首先我们会通过接口获取到一条数据，然后将该数据渲染到列表中。你可以先通过右侧预览查看最终演示效果。"}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"0"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"使用旧的方案实现"})}),`
`,e.jsx(n.p,{children:"首先，先定义请求数据的 promise"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// api.js
export const getMessage = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {value: random[i], id: getUuid()}
}
`})}),`
`,e.jsx(n.p,{children:"然后需要定义一个状态用于存储列表。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const [list, updateList] = useState([])
`})}),`
`,e.jsxs(n.p,{children:["由于每一项在请求时，都需要显示一个 Loading 状态，此时我们可以使用一个巧妙的方式来解决这个问题。那就是暂时往 list 中新增一条 ",e.jsx(n.code,{children:"type: loading"})," 的数据。在遍历的时候判断出该数据渲染成 ",e.jsx(n.code,{children:"Skeleton"})," 组件。"]}),`
`,e.jsxs(n.p,{children:["因此，我们单独声明一个列表组件 List，该组件接收 ",e.jsx(n.code,{children:"list"})," 作为参数"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function List(props) {
  const list = props.list
  return (
    <>
      {list.map((item, index) => {
        if (item.type === 'loading') {
          return <Skeleton />
        }
        return <Userinfo index={index} username={item.id} message={item.value} />
      })}
    </>
  )
}
`})}),`
`,e.jsxs(n.p,{children:["当我们在发送请求时，先往 list 中新增一条 ",e.jsx(n.code,{children:"type: loading"})," 的数据。此时我们利用 list 的特性与闭包的缓存特性，在接口请求成功之后再把请求过来的有效数据更新到 list 中即可。"]}),`
`,e.jsx(n.p,{children:"代码如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`useEffect(() => {
  updateList([...list, {type: 'loading'}])
  getMessage().then(res => {
    updateList([...list, res])
  })
}, []);
`})}),`
`,e.jsx(n.p,{children:"完整代码如下："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {use, useState, Suspense, useEffect} from 'react'
import Userinfo from './Userinfo'
import Skeleton from './Skeleton'
import Button from './Button'
import {getMessage} from './api'

export default function Demo01() {
  const [list, updateList] = useState([])

  useEffect(() => {
    updateList([...list, {type: 'loading'}])
    getMessage().then(res => {
      updateList([...list, res])
    })
  }, []);

  function __handler() {
    updateList([...list, {type: 'loading'}])
    getMessage().then(res => {
      updateList([...list, res])
    })
  }

  return (
    <>
      <div className='text-right mb-4'>
        <Button onClick={__handler}>新增数据</Button>
      </div>
      <List list={list} />
    </>
  )
}

function List(props) {
  const list = props.list
  return (
    <>
      {list.map((item, index) => {
        if (item.type === 'loading') {
          return <Skeleton />
        }
        return <Userinfo index={index} username={item.id} message={item.value} />
      })}
    </>
  )
}
`})}),`
`,e.jsx(n.p,{children:"案例演示效果如下所示"}),`
`,e.jsx(f,{reload:!0,children:e.jsx(A,{})}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"1"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"新的思路"})}),`
`,e.jsx(n.p,{children:"旧的思路在实现上非常巧妙。但是简洁度依然弱于新的实现方案。除此之外，旧的实现思路还有许多问题需要处理，例如初始化时请求了两次，我们要考虑接口防重的问题。以及当我们多次连续点击按钮时，会出现竞态问题而导致渲染结果出现混乱。"}),`
`,e.jsx(n.p,{children:"我们基于 use + Suspense 的思路来考虑新的方案。"}),`
`,e.jsx(n.p,{children:"首先，我们应该将数据存储在 promise 中，因此很自然就能想到，多个数据，那么我们应该需要维护多个 promise，因此，我们需要定义一个由 promise 组成的数组。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const [promise, updatePromise] = useState(() => [getMessage()])
`})}),`
`,e.jsxs(n.p,{children:["由于初始化时，我们需要自动请求一条数据，因此我们给该数组的初始值为 ",e.jsx(n.code,{children:"[getMessage()]"})]}),`
`,e.jsx(n.p,{children:"点击时，需要新增一个数据，那么其实就是新增一个 promise，所以代码也非常简单，就是如下所示"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function __handler() {
  updatePromise([...promise, getMessage()])
}
`})}),`
`,e.jsx(n.p,{children:"处理好之后，我们只需要使用 map 遍历该数组即可。在遍历逻辑中，每一项都返回 Suspense 包裹的子组件。我们将 promise 传递给该子组件，并在子组件中使用 use 读取 promise 中的值。"}),`
`,e.jsx(n.p,{children:"最终的完整代码与演示结果请在右侧案例中查看。"}),`
`,e.jsx(n.p,{children:"此时通过案例演示结果可以观察到，初始化时的接口重复问题被解决掉了，并且当我们多次连续点击新增时，也不会出现接口竞态混乱的问题。"}),`
`,e.jsx(n.p,{children:"希望大家能够通过这个案例，进一步感受到新的开发思维的强大之处。"})]})}function _(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}const D={"App.js":j,"api.js":y,"Userinfo.jsx":k,"Button.jsx":b,"Skeleton.jsx":w,"/public/index.html":N};function I(){return e.jsx(v,{files:D,renderArticle:s=>e.jsx(_,{components:{code:s}})})}export{I as default};
