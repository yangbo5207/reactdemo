import{c as p,j as t,r as m}from"./index-oFmtIK6i.js";import{I as k,S as C,a as w}from"./index-CyarafLN.js";import{C as h}from"./Cardruntime-CDREzpNb.js";import{A as y}from"./index-joL20ffn.js";import"./index-DiYRcp-t.js";import"./index-DMQVh9lL.js";import"./Preview-D7Xnvlpj.js";import"./atom-one-light-q7r8Raww.js";const D=`import {useState, Suspense, useDeferredValue} from 'react'
import Spin from './Spin'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'
import Input from './Input'

export default function App() {
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const deferred = useDeferredValue(promise)


  function __inputChange(e) {
    promise.cancel()
    const len = e.target.value.length % 5
    update(fetchListWithCancel(len))
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <Spin loading={deferred !== promise} type='mask'>
          <List promise={deferred} />
        </Spin>
      </Suspense>
    </div>
  )
}
`,E=`export const fetchList = async (number) => {
  const res = await fetch(\`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const fetchListWithCancel = (number) => {
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(
      \`https://randomuser.me/api/?results=\${number}&inc=name,gender,email,nat,picture&noinfo\`,
      {signal}
    ).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,I=`document.documentElement.style.fontSize = '14px'

export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
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
`,L=`import { use } from 'react';
export default function CurrentList({promise}) {
  const {results} = use(promise)
  console.log('我会执行几次呢')
  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,$=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`;document.documentElement.style.fontSize="14px";function g(n){const e=p.c(3);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e[0]=r):r=e[0];let l;e[1]===Symbol.for("react.memo_cache_sentinel")?(l=t.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e[1]=l):l=e[1];let s;return e[2]===Symbol.for("react.memo_cache_sentinel")?(s=t.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:t.jsxs("div",{className:"animate-pulse flex space-x-4",children:[r,t.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[l,t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),t.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),t.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})}),e[2]=s):s=e[2],s}const j=n=>{let e=new AbortController,r=e.signal;const l=new Promise(s=>{fetch(`https://randomuser.me/api/?results=${n}&inc=name,gender,email,nat,picture&noinfo`,{signal:r}).then(i=>{s(i.json())}).catch(()=>{console.log("接口成功取消！")})});return l.cancel=()=>{e&&e.abort()},l};function b(n){const e=p.c(5),{promise:r}=n,{results:l}=m.use(r);console.log("我会执行几次呢");let s;if(e[0]!==l){let c;e[2]===Symbol.for("react.memo_cache_sentinel")?(c=(o,d)=>t.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[t.jsx("img",{className:"w-12 h-12 rounded-full",src:o.picture.large,alt:""}),t.jsxs("div",{className:"flex-1 ml-4",children:[t.jsx("div",{className:"font-bold",children:o.name.last}),t.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${d}`),e[2]=c):c=e[2],s=l.map(c),e[0]=l,e[1]=s}else s=e[1];let i;return e[3]!==s?(i=t.jsx("div",{children:s}),e[3]=s,e[4]=i):i=e[4],i}function _(n){const e=p.c(6);let r;e[0]!==n?({...r}=n,e[0]=n,e[1]=r):r=e[1];let l;e[2]===Symbol.for("react.memo_cache_sentinel")?(l=t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),e[2]=l):l=e[2];let s;e[3]===Symbol.for("react.memo_cache_sentinel")?(s={outline:"none"},e[3]=s):s=e[3];let i;return e[4]!==r?(i=t.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[l,t.jsx("input",{className:"flex-1 !border-none p-2",style:s,type:"text",...r})]}),e[4]=r,e[5]=i):i=e[5],i}function V(){const n=p.c(14);let e;n[0]===Symbol.for("react.memo_cache_sentinel")?(e=()=>j(5),n[0]=e):e=n[0];const[r,l]=m.useState(e),s=m.useDeferredValue(r);let i;n[1]!==r?(i=function(N){r.cancel();const S=N.target.value.length%5;l(j(S))},n[1]=r,n[2]=i):i=n[2];const c=i;let o;n[3]!==c?(o=t.jsx(_,{onChange:c,placeholder:"Enter something"}),n[3]=c,n[4]=o):o=n[4];let d;n[5]===Symbol.for("react.memo_cache_sentinel")?(d=t.jsx(g,{}),n[5]=d):d=n[5];const a=s!==r;let u;n[6]!==s?(u=t.jsx(b,{promise:s}),n[6]=s,n[7]=u):u=n[7];let x;n[8]!==a||n[9]!==u?(x=t.jsx(m.Suspense,{fallback:d,children:t.jsx(k,{loading:a,type:"mask",children:u})}),n[8]=a,n[9]=u,n[10]=x):x=n[10];let f;return n[11]!==o||n[12]!==x?(f=t.jsxs("div",{children:[o,x]}),n[11]=o,n[12]=x,n[13]=f):f=n[13],f}function H(){const n=p.c(11);let e;n[0]===Symbol.for("react.memo_cache_sentinel")?(e=()=>j(5),n[0]=e):e=n[0];const[r,l]=m.useState(e);let s;n[1]!==r?(s=function(x){r.cancel();const f=x.target.value.length%5;l(j(f))},n[1]=r,n[2]=s):s=n[2];const i=s;let c;n[3]!==i?(c=t.jsx(_,{onChange:i,placeholder:"Enter something"}),n[3]=i,n[4]=c):c=n[4];let o;n[5]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsx(g,{}),n[5]=o):o=n[5];let d;n[6]!==r?(d=t.jsx(m.Suspense,{fallback:o,children:t.jsx(b,{promise:r})}),n[6]=r,n[7]=d):d=n[7];let a;return n[8]!==c||n[9]!==d?(a=t.jsxs("div",{children:[c,d]}),n[8]=c,n[9]=d,n[10]=a):a=n[10],a}function R(){const n=p.c(9),[e,r]=m.useState(0);let l;n[0]!==e?(l=function(){r(e+1)},n[0]=e,n[1]=l):l=n[1];const s=l;let i;n[2]!==e?(i=t.jsxs("div",{children:[t.jsxs("div",{children:["counter: ",e]}),t.jsxs("div",{className:"mt-4",children:["counter: ",e]})]}),n[2]=e,n[3]=i):i=n[3];let c;n[4]!==s?(c=t.jsx("button",{onClick:s,children:"counter++"}),n[4]=s,n[5]=c):c=n[5];let o;return n[6]!==i||n[7]!==c?(o=t.jsxs("div",{className:"flex justify-between items-center",children:[i,c]}),n[6]=i,n[7]=c,n[8]=o):o=n[8],o}function A(){const n=p.c(14),[e,r]=m.useState(0),l=m.useDeferredValue(e);let s;n[0]!==e?(s=function(){r(e+1)},n[0]=e,n[1]=s):s=n[1];const i=s;let c;n[2]!==e?(c=t.jsxs("div",{children:["counter: ",e]}),n[2]=e,n[3]=c):c=n[3];let o;n[4]!==l?(o=t.jsxs("div",{className:"mt-4",children:["counter: ",l]}),n[4]=l,n[5]=o):o=n[5];let d;n[6]!==c||n[7]!==o?(d=t.jsxs("div",{children:[c,o]}),n[6]=c,n[7]=o,n[8]=d):d=n[8];let a;n[9]!==i?(a=t.jsx("button",{onClick:i,children:"counter++"}),n[9]=i,n[10]=a):a=n[10];let u;return n[11]!==d||n[12]!==a?(u=t.jsxs("div",{className:"flex justify-between items-center",children:[d,a]}),n[11]=d,n[12]=a,n[13]=u):u=n[13],u}function U(){const n=p.c(14),[e,r]=m.useState(0),l=m.useDeferredValue(e,0);let s;n[0]!==e?(s=function(){r(e+1)},n[0]=e,n[1]=s):s=n[1];const i=s;let c;n[2]!==e?(c=t.jsxs("div",{children:["counter: ",e]}),n[2]=e,n[3]=c):c=n[3];let o;n[4]!==l?(o=t.jsx(W,{counter:l}),n[4]=l,n[5]=o):o=n[5];let d;n[6]!==c||n[7]!==o?(d=t.jsxs("div",{children:[c,o]}),n[6]=c,n[7]=o,n[8]=d):d=n[8];let a;n[9]!==i?(a=t.jsx("button",{onClick:i,children:"counter++"}),n[9]=i,n[10]=a):a=n[10];let u;return n[11]!==d||n[12]!==a?(u=t.jsxs("div",{className:"flex justify-between items-center",children:[d,a]}),n[11]=d,n[12]=a,n[13]=u):u=n[13],u}const W=n=>{const e=p.c(2),{counter:r}=n,l=performance.now();for(;performance.now()-l<200;);let s;return e[0]!==r?(s=t.jsxs("div",{className:"mt-4",children:["Deferred: ",r]}),e[0]=r,e[1]=s):s=e[1],s};function q(){const n=p.c(14),[e,r]=m.useState(0),l=m.useDeferredValue(e);let s;n[0]!==e?(s=function(){r(e+1)},n[0]=e,n[1]=s):s=n[1];const i=s;let c;n[2]!==e?(c=t.jsxs("div",{children:["counter: ",e]}),n[2]=e,n[3]=c):c=n[3];let o;n[4]!==l?(o=t.jsx(z,{counter:l}),n[4]=l,n[5]=o):o=n[5];let d;n[6]!==c||n[7]!==o?(d=t.jsxs("div",{children:[c,o]}),n[6]=c,n[7]=o,n[8]=d):d=n[8];let a;n[9]!==i?(a=t.jsx("button",{onClick:i,children:"counter++"}),n[9]=i,n[10]=a):a=n[10];let u;return n[11]!==d||n[12]!==a?(u=t.jsxs("div",{className:"flex justify-between items-center",children:[d,a]}),n[11]=d,n[12]=a,n[13]=u):u=n[13],u}const z=n=>{const e=p.c(9),{counter:r}=n;let l;if(e[0]!==r){l=[];for(let o=0;o<200;o++)l.push(t.jsx(M,{counter:r},o));e[0]=r,e[1]=l}else l=e[1];let s;e[2]!==r?(s=t.jsxs("div",{children:["Deferred: ",r]}),e[2]=r,e[3]=s):s=e[3];let i;e[4]!==l?(i=t.jsx("ul",{className:"h-32 hidden",children:l}),e[4]=l,e[5]=i):i=e[5];let c;return e[6]!==s||e[7]!==i?(c=t.jsxs("div",{className:"mt-4 text-green-500",children:[s,i]}),e[6]=s,e[7]=i,e[8]=c):c=e[8],c};function M(n){const e=p.c(2),{counter:r}=n,l=performance.now();for(;performance.now()-l<1;);let s;return e[0]!==r?(s=t.jsx("li",{children:r}),e[0]=r,e[1]=s):s=e[1],s}function v(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"重头戏来了！"}),`
`,t.jsx(e.p,{children:"在进一步学习之前，道友们先操作感受一下这个案例中，搜索时 loading 的交互状态。在输入框中，快速输入任意内容。"}),`
`,t.jsx(h,{reload:!0,children:t.jsx(V,{})}),`
`,t.jsx(e.p,{children:"然后再对比一下前后两种 Loading 交互方式的区别。"}),`
`,t.jsx(h,{children:t.jsx(H,{})}),`
`,t.jsx(e.p,{children:"很显然，大多数时候，第一种 Loading 交互方案的体验是更好的。他的具体表现为："}),`
`,t.jsx(e.p,{children:"初始化时，显示 Skeleton 组件，表示此时列表中没有内容，即将加载新的内容进来。"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"更新时，保持现有列表"}),"，可在此的基础之上显示 Loading/蒙层/透明度，如果你确定接口请求的时间非常短，也可以没有任何 Loading 显示"]}),`
`,t.jsx(e.p,{children:"在前面的学习中，我们利用 Suspense 与 use 轻松做到了第二种交互方案，这种交互方案无论是在初始化还是在更新时，都是通过显示 Skeleton 来表示请求正在发生。接下来，我们需要学习如何利用新的知识，来做到第一种交互方案。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"1"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"useDeferredValue"})}),`
`,t.jsx(e.p,{children:"在 React 并发模式的基础之上，我们可以利用 useDeferredValue 在不变动代码顺序的情况之下，推迟指定 UI 更新任务的执行。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"并发模式的基础理论详细学习，你需要关注我的 React 知命境"}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const deferredValue = useDeferredValue(value, initialValue?)
`})}),`
`,t.jsx(e.p,{children:"对于刚接触的道友们来说，useDeferredValue 理解起来比较困难，我们循序渐进的用 4 个案例来理解一下。"}),`
`,t.jsx(e.p,{children:"首先，在正常情况下，一个 state 的变化，会导致 UI 发生变化。例如下面这个案例"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {useState} from 'react'

export default function Index() {
  const [counter, setCounter] = useState(0)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div className='flex justify-between items-center'>
      <div>
        <div>counter: {counter}</div>
        <div className="mt-4">counter: {counter}</div>
      </div>
      <button onClick={__clickHanler}>counter++</button>
    </div>
  )
}
`})}),`
`,t.jsxs(e.p,{children:["这里需要注意的是，状态 ",t.jsx(e.code,{children:"counter"})," 被两个元素使用，因此，这两个元素的更改，实际上是",t.jsx(e.strong,{children:"一个任务"}),"。他们必定会同时响应 counter 的变化。"]}),`
`,t.jsx(e.p,{children:"因此，当你快速点击按钮时，两个元素的变化是快速同时响应"}),`
`,t.jsx(h,{reload:!0,children:t.jsx(R,{})}),`
`,t.jsx(e.p,{children:"这个时候，我们可以利用 useDeferredValue，把他们拆分成两个任务。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {useState, useDeferredValue} from 'react'

export default function Index() {
  const [counter, setCounter] = useState(0)
  const deferred = useDeferredValue(counter)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div className='flex justify-between items-center'>
      <div>
        <div>counter: {counter}</div>
        <div className='mt-4'>counter: {deferred}</div>
      </div>
      <button onClick={__clickHanler}>counter++</button>
    </div>
  )
}
`})}),`
`,t.jsx(e.p,{children:"注意看，我们使用 counter 作为 useDeferredValue 的初始值，并将其返回值替换第二个元素"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`const deferred = useDeferredValue(counter)
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<div className='mt-4'>counter: {deferred}</div>
`})}),`
`,t.jsx(e.p,{children:"此时，第二个元素的更新，就不再与第一个元素同步。它更新的优先级被降低。这个时候它的执行在理论上是可以被更高的优先级插队和中断的。"}),`
`,t.jsx(e.p,{children:"但是由于渲染都太短了，我们肉眼无法区分出来两个任务已经被分开了，因此，从视觉上的表现结果和刚才的案例没啥区别。"}),`
`,t.jsx(e.p,{children:"快速点击按钮查看一下演示效果"}),`
`,t.jsx(h,{reload:!0,children:t.jsx(A,{})}),`
`,t.jsx(e.p,{children:"为了看出区别，我们把第二个元素重构成一个子组件，并模拟成一个耗时组件"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {useState, useDeferredValue} from 'react'

export default function Index() {
  const [counter, setCounter] = useState(0)
  const deferred = useDeferredValue(counter, 0)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div className='flex justify-between items-center'>
      <div>
        <div>counter: {counter}</div>
        <Expensive counter={deferred} />
      </div>
      <button onClick={__clickHanler}>counter++</button>
    </div>
  )
}

const Expensive = ({counter}) => {
  const start = performance.now()
  while (performance.now() - start < 200) {}
  return (
    <div className="mt-4">Deferred: {counter}</div>
  )
}
`})}),`
`,t.jsx(e.p,{children:"快速点击按钮，此时我们发现，两个按钮的更新可以区分开了。并且在快速点击时，第二个 counter 的更新，会落后于第一个 counter，此时表示，我们可以利用 useDeferredValue 推迟 UI 的更新。将对应任务的优先级降低，使其可以被插队与中断。"}),`
`,t.jsx(h,{reload:!0,children:t.jsx(U,{})}),`
`,t.jsxs(e.p,{children:["此时我们也发现另外一个情况，那就是 counter 直接对应的高优先级执行也没有那么流畅，这是为什么呢？其实很简单，因为在我们的模拟案例中，",t.jsx(e.strong,{children:"并没有把耗时定位在渲染上"}),"。这就和实际的情况不太一样了。我们把耗时写在了 Expensive 函数里，而这个函数每次都会执行，它的执行阻塞了渲染。所以我们会觉得第一个 counter 的更新变得比较卡顿"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"所以这里我们一定要区分开渲染任务和 Expensive 函数，他们是不同的，UI 渲染是一个异步任务，而 Expensive 函数是同步执行的。useDeferredValue 推迟的是 UI 渲染任务。因此，我们需要特别注意的是，不要在同步逻辑上执行过多的耗时任务。"}),`
`]}),`
`,t.jsx(e.p,{children:"这里我们可以通过任务拆分的方式，把执行耗时时间分散到更多的子组件中去，这样 React 就可以利用任务中断的机制，在不阻塞渲染的情况下，中断低优先级的任务。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import {useState, useDeferredValue} from 'react'

export default function Index() {
  const [counter, setCounter] = useState(0)
  const deferred = useDeferredValue(counter)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div className='flex justify-between items-center'>
      <div>
        <div>counter: {counter}</div>
        <Expensive counter={deferred} />
      </div>
      <button onClick={__clickHanler}>counter++</button>
    </div>
  )
}

const Expensive = ({counter}) => {
  let items = []
  for (let i = 0; i < 200; i++) {
    items.push(<SlowItem key={i} counter={counter} />);
  }

  return (
    <div className='mt-4 text-green-500'>
      <div>Deferred: {counter}</div>
      <ul className='h-32 hidden'>
        {items}
      </ul>
    </div>
  );
}

function SlowItem({counter}) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li>{counter}</li>
  )
}
`})}),`
`,t.jsx(e.p,{children:"再来感受一下演示结果，我们就发现，第一个 counter 的更新也变得非常流畅了。"}),`
`,t.jsx(h,{reload:!0,children:t.jsx(q,{})}),`
`,t.jsx(e.p,{children:"此时我们注意观察，不要错漏这个细节。slowList 中包含了 250 个子组件。每个子组件都渲染 1ms，那么整个组件渲染就需要耗时至少 250ms."}),`
`,t.jsx(e.p,{children:"在父组件中，我们把 deferred 传递给 Expensive"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Expensive counter={deferred} />
`})}),`
`,t.jsx(e.p,{children:"那么此时表示，Expensive 的 UI 更新任务是低优先级。counter 对应的任务可以中断它的执行。"}),`
`,t.jsx(e.p,{children:"此时一个很明显的区别就是，counter 的 UI 变化变得更加流畅了。这是因为耗时被拆分到了多个子组件中，React 就有机会中断这些函数的执行，并执行优先级更高的任务，以确保高优先级任务的流畅。"}),`
`,t.jsxs(e.p,{children:["如果你没有使用 React Compiler，你需要使用 memo 手动缓存 ",t.jsx(e.code,{children:"Expensive"}),"。"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`export default memo(function Expensive({ text }) {
  // ...
});
`})}),`
`,t.jsx(e.p,{children:"当更新发生时，useDefferdValue 会首先使用旧值传递给组件。"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Expensive counter={deferred} />
`})}),`
`,t.jsx(e.p,{children:"因此，当 counter 发生变化时，deferred 依然是旧值，那么此时，如果我们使用 memo 包裹，Expensive 的 props 就没有发生变化，我们可以跳过此次针对 Expensive 的更新。所以当我们快速点击时，Expensive 总是接受到旧值，它本身的渲染也会被中断，因此最终的表现结果是，当我们连续点击 7 次，counter 从 0 依次变成 7，而 deferred 会直接从 0 变成 7."}),`
`,t.jsx(e.p,{children:"这跟 React 的性能优化策略有关。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"2"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"运行原理"})}),`
`,t.jsx(e.p,{children:"看了上面两个例子，肯定还是有一部分人会觉得很懵，不要急，接下来我们把运行原理分析一下，整个情况就清晰了。"}),`
`,t.jsx(e.p,{children:"useDeferredValue 会尝试将 UI 任务更新两次。"}),`
`,t.jsxs(e.p,{children:["第一次，会给子组件传递旧值。此时 ",t.jsx(e.code,{children:"Expensive"})," 接收到的 props 会与上一次完全相同。如果结合了 React.memo，那么该组件就不会重新渲染。该组件可以重复使用之前的渲染结果"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"Compiler 编译之后不需要 memo"}),`
`]}),`
`,t.jsxs(e.p,{children:["此时，高优先级的任务渲染会发生，渲染完成之后，将会开始第二次渲染。此时，将会传入刚才更新之后的新值。对于 ",t.jsx(e.code,{children:"Expensive"})," 而言，props 发生了变化，整个组件会重新渲染。"]}),`
`,t.jsx(e.p,{children:"我们通常会将已经非常明确的耗时任务标记为 deferred，因此，这些任务都被视为低优先级。当重要的高优先级更新已经完成，低优先级任务在第二次渲染时尝试更新..."}),`
`,t.jsx(e.p,{children:"在它第二次更新的过程中，如果又有新的高优先级任务进来，那么 React 就会中断并放弃第二次更新，去执行高优先级的任务。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"注意：是中断，并放弃这次更新，所以表现出来的结果就是，中间会漏掉许多任务的执行"}),`
`]}),`
`,t.jsx(e.p,{children:"这样的运行机制有一个非常重要的好处。"}),`
`,t.jsx(e.p,{children:"那就是，如果你的电脑性能足够强悍，那么第二次的更新可能会快速完成，高优先级的任务来不及中断，那么我们的页面响应就是非常理想的。"}),`
`,t.jsx(e.p,{children:"但是如果我们的电脑性能比较差，第二次更新还没完成，新的高优先级任务又来了，那么就可以通过中断的方式，降级处理，保证重要 UI 的流畅，放弃低优先级任务。"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"在不同性能的设备上，有不同的反应，这个是跟防抖、节流的最重要的区别"}),`
`]}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"3"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"重新分析取消请求案例"})}),`
`,t.jsx(e.p,{children:"那我们回过头来，分析一下最开始的那个案例，重新看一眼代码"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`export default function Search() {
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const deferred = useDeferredValue(promise)


  function __inputChange(e) {
    promise.cancel()
    const len = e.target.value.length % 5
    update(fetchListWithCancel(len))
  }
  ...
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<Suspense fallback={<Skeleton />}>
  <Spin loading={deferred !== promise} type='mask'>
    <List promise={deferred} />
  </Spin>
</Suspense>
`})}),`
`,t.jsx(e.p,{children:"这里我们将 promise 做为 state，当 promise 被重新赋值时，List 会经历两次更新。"}),`
`,t.jsx(e.p,{children:"首先点击事件触发，请求立即发生。promise 被改变。触发组件更新。"}),`
`,t.jsx(e.p,{children:"第一次更新时，deferred 使用旧值传参，此时对于 List 而言，api 没有发生变化。因此，利用这个机制，我们可以阻止 Suspense 直接渲染成 fallback."}),`
`,t.jsx(e.p,{children:"在 Suspense 包裹之下，只有当接口请求成功之后，deferred 的第二次更新才会发生，因此，在这个过程中，如果我们快速进行第二次点击，可以直接取消上一次请求，让第二次更新来不及执行。此时新的请求发生。"}),`
`,t.jsx(e.p,{children:"最终案例的完整代码与演示效果请看右侧区域。"}),`
`,t.jsx(e.h2,{children:t.jsx(e.em,{children:"4"})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"总结"})}),`
`,t.jsx(e.p,{children:"这种场景的最佳实践代码非常的简洁和优雅。写起来也很舒服，性能也非常强悍。但是理解起来会比较困难。因此想要做到灵活运用，还需要多多消化。"}),`
`,t.jsx(e.p,{children:"但是，等你彻底掌握它之后，你就会发现 React 19 在异步交互上真的太优雅了。这样的开发体验，是依赖 useEffect 完全比不了的。"})]})}function T(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(v,{...n})}):v(n)}const B={"App.js":D,"api.js":E,"List.jsx":L,"Input.jsx":$,"Skeleton.jsx":I,"Spin.jsx":{code:C,hidden:!0},"index.css":{code:w,hidden:!0}};function Y(){const n=p.c(1);let e;return n[0]===Symbol.for("react.memo_cache_sentinel")?(e=t.jsx(y,{files:B,renderArticle:r=>t.jsx(T,{components:{code:r}})}),n[0]=e):e=n[0],e}export{Y as default};
