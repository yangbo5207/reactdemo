import{c as x,j as n,t as j,a as w,r as f}from"./index-WxVCoI3R.js";import{C as N}from"./Cardruntime-CkAYSVvf.js";import{A as S}from"./index-z4EEj1-x.js";import"./activecode-B_nYYbD8.js";import"./index-DMQVh9lL.js";import"./Preview-B0JUZwug.js";import"./atom-one-light-CeVHWIu6.js";const k=`import {use, useState, Suspense, useEffect} from 'react'
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
`,M=`import {twMerge} from 'tailwind-merge'
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
`,_=`const random = [
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
`,U=`export default function Skeleton(props) {
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
`,L=`<!DOCTYPE html>
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
`,R=`const Userinfo = (props) => {
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
`,T=t=>{const e=x.c(16);let s;e[0]!==t.message?(s=unescape(t.message.replace(/\\u/gi,"%u")),e[0]=t.message,e[1]=s):s=e[1];const i=s,r=t.username||"";let a;e[2]!==r?(a=unescape(r.replace(/\\u/gi,"%u")),e[2]=r,e[3]=a):a=e[3];const l=a,c=`https://api.dicebear.com/7.x/miniavs/svg?seed=${t.index||0}`;let o;e[4]!==c?(o=n.jsx("img",{className:"w-10",src:c,alt:""}),e[4]=c,e[5]=o):o=e[5];const p=l||"no name";let u;e[6]!==p?(u=n.jsx("div",{children:p}),e[6]=p,e[7]=u):u=e[7];let m;e[8]!==i?(m=n.jsx("div",{className:"text-sm mt-1 text-gray-600",children:i}),e[8]=i,e[9]=m):m=e[9];let h;e[10]!==u||e[11]!==m?(h=n.jsxs("div",{className:"flex-1 ml-3",children:[u,m]}),e[10]=u,e[11]=m,e[12]=h):h=e[12];let g;return e[13]!==o||e[14]!==h?(g=n.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md my-4 items-start",children:[o,h]}),e[13]=o,e[14]=h,e[15]=g):g=e[15],g};function B(t){const e=x.c(3);let s;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=n.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e[0]=s):s=e[0];let i;e[1]===Symbol.for("react.memo_cache_sentinel")?(i=n.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e[1]=i):i=e[1];let r;return e[2]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full",children:n.jsxs("div",{className:"animate-pulse flex space-x-4",children:[s,n.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[i,n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),n.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})}),e[2]=r):r=e[2],r}document.documentElement.style.fontSize="14px";function E(t){const e=x.c(24);let s,i,r,a,l,d,c,o;e[0]!==t?({className:c,primary:s,danger:i,sm:l,lg:d,signal:a,success:r,...o}=t,e[0]=t,e[1]=s,e[2]=i,e[3]=r,e[4]=a,e[5]=l,e[6]=d,e[7]=c,e[8]=o):(s=e[1],i=e[2],r=e[3],a=e[4],l=e[5],d=e[6],c=e[7],o=e[8]);let p;e[9]!==s||e[10]!==i||e[11]!==r||e[12]!==a||e[13]!==l||e[14]!==d||e[15]!==c?(p=j(w("rounded-md border border-transparent font-medium cursor-pointer transition relative","bg-gray-100 hover:bg-gray-200","text-xs py-2 px-4",{"bg-blue-500 text-white hover:bg-blue-600":s,"bg-red-500 text-white hover:bg-red-600":i,"bg-green-500 text-white hover:bg-green-600":r,"text-sky-500 bg-white border border-sky-300 hover:bg-sky-50":a,"text-xs py-1.5 px-3":l,"text-lg py-2 px-6":d},c)),e[9]=s,e[10]=i,e[11]=r,e[12]=a,e[13]=l,e[14]=d,e[15]=c,e[16]=p):p=e[16];const u=p;let m;e[17]!==a?(m=a&&n.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[n.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),n.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]}),e[17]=a,e[18]=m):m=e[18];let h;return e[19]!==u||e[20]!==o||e[21]!==t.children||e[22]!==m?(h=n.jsxs("button",{className:u,...o,children:[t.children,m]}),e[19]=u,e[20]=o,e[21]=t.children,e[22]=m,e[23]=h):h=e[23],h}const A=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var b=new Headers;b.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var D={method:"GET",headers:b,redirect:"follow",data:"hex"};const C="https://echo.apifox.com/delay/1",v=async()=>{await fetch(C,D);const t=Math.floor(Math.random()*10)%5;return{value:A[t],id:$()}};function $(){for(var t=[],e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",s=0;s<16;s++)t[s]=e.substr(Math.floor(Math.random()*16),1);return t[8]="-",t.join("")}function H(){const t=x.c(13);let e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],t[0]=e):e=t[0];const[s,i]=f.useState(e);let r;t[1]!==s?(r=()=>{i([...s,{type:"loading"}]),v().then(u=>{i([...s,u])})},t[1]=s,t[2]=r):r=t[2];let a;t[3]===Symbol.for("react.memo_cache_sentinel")?(a=[],t[3]=a):a=t[3],f.useEffect(r,a);let l;t[4]!==s?(l=function(){i([...s,{type:"loading"}]),v().then(m=>{i([...s,m])})},t[4]=s,t[5]=l):l=t[5];const d=l;let c;t[6]!==d?(c=n.jsx("div",{className:"text-right mb-4",children:n.jsx(E,{onClick:d,children:"新增数据"})}),t[6]=d,t[7]=c):c=t[7];let o;t[8]!==s?(o=n.jsx(J,{list:s}),t[8]=s,t[9]=o):o=t[9];let p;return t[10]!==c||t[11]!==o?(p=n.jsxs(n.Fragment,{children:[c,o]}),t[10]=c,t[11]=o,t[12]=p):p=t[12],p}function J(t){const e=x.c(5),s=t.list;let i;if(e[0]!==s){let a;e[2]===Symbol.for("react.memo_cache_sentinel")?(a=(l,d)=>l.type==="loading"?n.jsx(B,{},`hello ${d}`):n.jsx(T,{index:d,username:l.id,message:l.value},`h${d}`),e[2]=a):a=e[2],i=s.map(a),e[0]=s,e[1]=i}else i=e[1];let r;return e[3]!==i?(r=n.jsx(n.Fragment,{children:i}),e[3]=i,e[4]=r):r=e[4],r}function y(t){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"这一章我们要学习的是一个新增加载项到列表的案例。首先我们会通过接口获取到一条数据，然后将该数据渲染到列表中。你可以先通过右侧预览查看最终演示效果。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"0"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"使用旧的方案实现"})}),`
`,n.jsx(e.p,{children:"首先，先定义请求数据的 promise"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// api.js
export const getMessage = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {value: random[i], id: getUuid()}
}
`})}),`
`,n.jsx(e.p,{children:"然后需要定义一个状态用于存储列表。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const [list, updateList] = useState([])
`})}),`
`,n.jsxs(e.p,{children:["由于每一项在请求时，都需要显示一个 Loading 状态，此时我们可以使用一个巧妙的方式来解决这个问题。那就是暂时往 list 中新增一条 ",n.jsx(e.code,{children:"type: loading"})," 的数据。在遍历的时候判断出该数据渲染成 ",n.jsx(e.code,{children:"Skeleton"})," 组件。"]}),`
`,n.jsxs(e.p,{children:["因此，我们单独声明一个列表组件 List，该组件接收 ",n.jsx(e.code,{children:"list"})," 作为参数"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function List(props) {
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
`,n.jsxs(e.p,{children:["当我们在发送请求时，先往 list 中新增一条 ",n.jsx(e.code,{children:"type: loading"})," 的数据。此时我们利用 list 的特性与闭包的缓存特性，在接口请求成功之后再把请求过来的有效数据更新到 list 中即可。"]}),`
`,n.jsx(e.p,{children:"代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`useEffect(() => {
  updateList([...list, {type: 'loading'}])
  getMessage().then(res => {
    updateList([...list, res])
  })
}, []);
`})}),`
`,n.jsx(e.p,{children:"完整代码如下："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import {use, useState, Suspense, useEffect} from 'react'
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
`,n.jsx(e.p,{children:"案例演示效果如下所示"}),`
`,n.jsx(N,{reload:!0,children:n.jsx(H,{})}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"新的思路"})}),`
`,n.jsx(e.p,{children:"旧的思路在实现上非常巧妙。但是简洁度依然弱于新的实现方案。除此之外，旧的实现思路还有许多问题需要处理，例如初始化时请求了两次，我们要考虑接口防重的问题。以及当我们多次连续点击按钮时，会出现竞态问题而导致渲染结果出现混乱。"}),`
`,n.jsx(e.p,{children:"我们基于 use + Suspense 的思路来考虑新的方案。"}),`
`,n.jsx(e.p,{children:"首先，我们应该将数据存储在 promise 中，因此很自然就能想到，多个数据，那么我们应该需要维护多个 promise，因此，我们需要定义一个由 promise 组成的数组。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const [promise, updatePromise] = useState(() => [getMessage()])
`})}),`
`,n.jsxs(e.p,{children:["由于初始化时，我们需要自动请求一条数据，因此我们给该数组的初始值为 ",n.jsx(e.code,{children:"[getMessage()]"})]}),`
`,n.jsx(e.p,{children:"点击时，需要新增一个数据，那么其实就是新增一个 promise，所以代码也非常简单，就是如下所示"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function __handler() {
  updatePromise([...promise, getMessage()])
}
`})}),`
`,n.jsx(e.p,{children:"处理好之后，我们只需要使用 map 遍历该数组即可。在遍历逻辑中，每一项都返回 Suspense 包裹的子组件。我们将 promise 传递给该子组件，并在子组件中使用 use 读取 promise 中的值。"}),`
`,n.jsx(e.p,{children:"最终的完整代码与演示结果请在右侧案例中查看。"}),`
`,n.jsx(e.p,{children:"此时通过案例演示结果可以观察到，初始化时的接口重复问题被解决掉了，并且当我们多次连续点击新增时，也不会出现接口竞态混乱的问题。"}),`
`,n.jsx(e.p,{children:"希望大家能够通过这个案例，进一步感受到新的开发思维的强大之处。"})]})}function O(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(y,{...t})}):y(t)}const P={"App.js":k,"api.js":_,"Userinfo.jsx":R,"Button.jsx":M,"Skeleton.jsx":U,"/public/index.html":L};function G(){const t=x.c(1);let e;return t[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(S,{files:P,renderArticle:s=>n.jsx(O,{components:{code:s}})}),t[0]=e):e=t[0],e}export{G as default};
