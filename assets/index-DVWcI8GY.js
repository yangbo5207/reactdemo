import{j as e,r as c}from"./index-BxXbnW9e.js";import{I as m,S as h,a as j}from"./index-Cpw2Evd_.js";import{C as i}from"./Cardruntime-DF2YgfxL.js";import{A as f}from"./index-LK1iCBIb.js";import"./index-BEsnAH_r.js";import"./activecode-BfSkJlGQ.js";import"./index-DMQVh9lL.js";import"./Preview-Cfw1m546.js";const v=`import {useState, Suspense, useDeferredValue} from 'react'
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
`,g=`export const fetchList = async (number) => {
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
`,N=`document.documentElement.style.fontSize = '14px'

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
`,b=`import { use } from 'react';
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
`,k=`export default function Input(props) {
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
`;document.documentElement.style.fontSize="14px";function u(r){return e.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:e.jsxs("div",{className:"animate-pulse flex space-x-4",children:[e.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),e.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),e.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),e.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const o=r=>{let n=new AbortController,s=n.signal;const t=new Promise(l=>{fetch(`https://randomuser.me/api/?results=${r}&inc=name,gender,email,nat,picture&noinfo`,{signal:s}).then(d=>{l(d.json())}).catch(()=>{console.log("接口成功取消！")})});return t.cancel=()=>{n&&n.abort()},t};function p({promise:r}){const{results:n}=c.use(r);return console.log("我会执行几次呢"),e.jsx("div",{children:n.map((s,t)=>e.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[e.jsx("img",{className:"w-12 h-12 rounded-full",src:s.picture.large,alt:""}),e.jsxs("div",{className:"flex-1 ml-4",children:[e.jsx("div",{className:"font-bold",children:s.name.last}),e.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:"react 19 re, a design language for background applications"})]})]},`h${t}`))})}function x(r){const{...n}=r;return e.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),e.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...n})]})}function S(){const[r,n]=c.useState(()=>o(5)),s=c.useDeferredValue(r);function t(l){r.cancel();const d=l.target.value.length%5;n(o(d))}return e.jsxs("div",{children:[e.jsx(x,{onChange:t,placeholder:"Enter something"}),e.jsx(c.Suspense,{fallback:e.jsx(u,{}),children:e.jsx(m,{loading:s!==r,type:"mask",children:e.jsx(p,{promise:s})})})]})}function w(){const[r,n]=c.useState(()=>o(5));function s(t){r.cancel();const l=t.target.value.length%5;n(o(l))}return e.jsxs("div",{children:[e.jsx(x,{onChange:s,placeholder:"Enter something"}),e.jsx(c.Suspense,{fallback:e.jsx(u,{}),children:e.jsx(p,{promise:r})})]})}function C(){const[r,n]=c.useState(0);function s(){n(r+1)}return e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{children:["counter: ",r]}),e.jsxs("div",{className:"mt-4",children:["counter: ",r]})]}),e.jsx("button",{onClick:s,children:"counter++"})]})}function _(){const[r,n]=c.useState(0),s=c.useDeferredValue(r);function t(){n(r+1)}return e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{children:["counter: ",r]}),e.jsxs("div",{className:"mt-4",children:["counter: ",s]})]}),e.jsx("button",{onClick:t,children:"counter++"})]})}function y(){const[r,n]=c.useState(0),s=c.useDeferredValue(r,0);function t(){n(r+1)}return e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{children:["counter: ",r]}),e.jsx(D,{counter:s})]}),e.jsx("button",{onClick:t,children:"counter++"})]})}const D=({counter:r})=>{const n=performance.now();for(;performance.now()-n<200;);return e.jsxs("div",{className:"mt-4",children:["Deferred: ",r]})};function E(){const[r,n]=c.useState(0),s=c.useDeferredValue(r);function t(){n(r+1)}return e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{children:["counter: ",r]}),e.jsx(I,{counter:s})]}),e.jsx("button",{onClick:t,children:"counter++"})]})}const I=({counter:r})=>{let n=[];for(let s=0;s<200;s++)n.push(e.jsx(L,{counter:r},s));return e.jsxs("div",{className:"mt-4 text-green-500",children:[e.jsxs("div",{children:["Deferred: ",r]}),e.jsx("ul",{className:"h-32 hidden",children:n})]})};function L({counter:r}){let n=performance.now();for(;performance.now()-n<1;);return e.jsx("li",{children:r})}function a(r){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"重头戏来了！"}),`
`,e.jsx(n.p,{children:"在进一步学习之前，道友们先操作感受一下这个案例中，搜索时 loading 的交互状态。在输入框中，快速输入任意内容。"}),`
`,e.jsx(i,{reload:!0,children:e.jsx(S,{})}),`
`,e.jsx(n.p,{children:"然后再对比一下前后两种 Loading 交互方式的区别。"}),`
`,e.jsx(i,{children:e.jsx(w,{})}),`
`,e.jsx(n.p,{children:"很显然，大多数时候，第一种 Loading 交互方案的体验是更好的。他的具体表现为："}),`
`,e.jsx(n.p,{children:"初始化时，显示 Skeleton 组件，表示此时列表中没有内容，即将加载新的内容进来。"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"更新时，保持现有列表"}),"，可在此的基础之上显示 Loading/蒙层/透明度，如果你确定接口请求的时间非常短，也可以没有任何 Loading 显示"]}),`
`,e.jsx(n.p,{children:"在前面的学习中，我们利用 Suspense 与 use 轻松做到了第二种交互方案，这种交互方案无论是在初始化还是在更新时，都是通过显示 Skeleton 来表示请求正在发生。接下来，我们需要学习如何利用新的知识，来做到第一种交互方案。"}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"1"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"useDeferredValue"})}),`
`,e.jsx(n.p,{children:"在 React 并发模式的基础之上，我们可以利用 useDeferredValue 在不变动代码顺序的情况之下，推迟指定 UI 更新任务的执行。"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"并发模式的基础理论详细学习，你需要关注我的 React 知命境"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const deferredValue = useDeferredValue(value, initialValue?)
`})}),`
`,e.jsx(n.p,{children:"对于刚接触的道友们来说，useDeferredValue 理解起来比较困难，我们循序渐进的用 4 个案例来理解一下。"}),`
`,e.jsx(n.p,{children:"首先，在正常情况下，一个 state 的变化，会导致 UI 发生变化。例如下面这个案例"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {useState} from 'react'

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
`,e.jsxs(n.p,{children:["这里需要注意的是，状态 ",e.jsx(n.code,{children:"counter"})," 被两个元素使用，因此，这两个元素的更改，实际上是",e.jsx(n.strong,{children:"一个任务"}),"。他们必定会同时响应 counter 的变化。"]}),`
`,e.jsx(n.p,{children:"因此，当你快速点击按钮时，两个元素的变化是快速同时响应"}),`
`,e.jsx(i,{reload:!0,children:e.jsx(C,{})}),`
`,e.jsx(n.p,{children:"这个时候，我们可以利用 useDeferredValue，把他们拆分成两个任务。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {useState, useDeferredValue} from 'react'

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
`,e.jsx(n.p,{children:"注意看，我们使用 counter 作为 useDeferredValue 的初始值，并将其返回值替换第二个元素"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const deferred = useDeferredValue(counter)
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div className='mt-4'>counter: {deferred}</div>
`})}),`
`,e.jsx(n.p,{children:"此时，第二个元素的更新，就不再与第一个元素同步。它更新的优先级被降低。这个时候它的执行在理论上是可以被更高的优先级插队和中断的。"}),`
`,e.jsx(n.p,{children:"但是由于渲染都太短了，我们肉眼无法区分出来两个任务已经被分开了，因此，从视觉上的表现结果和刚才的案例没啥区别。"}),`
`,e.jsx(n.p,{children:"快速点击按钮查看一下演示效果"}),`
`,e.jsx(i,{reload:!0,children:e.jsx(_,{})}),`
`,e.jsx(n.p,{children:"为了看出区别，我们把第二个元素重构成一个子组件，并模拟成一个耗时组件"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {useState, useDeferredValue} from 'react'

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
`,e.jsx(n.p,{children:"快速点击按钮，此时我们发现，两个按钮的更新可以区分开了。并且在快速点击时，第二个 counter 的更新，会落后于第一个 counter，此时表示，我们可以利用 useDeferredValue 推迟 UI 的更新。将对应任务的优先级降低，使其可以被插队与中断。"}),`
`,e.jsx(i,{reload:!0,children:e.jsx(y,{})}),`
`,e.jsxs(n.p,{children:["此时我们也发现另外一个情况，那就是 counter 直接对应的高优先级执行也没有那么流畅，这是为什么呢？其实很简单，因为在我们的模拟案例中，",e.jsx(n.strong,{children:"并没有把耗时定位在渲染上"}),"。这就和实际的情况不太一样了。我们把耗时写在了 Expensive 函数里，而这个函数每次都会执行，它的执行阻塞了渲染。所以我们会觉得第一个 counter 的更新变得比较卡顿"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"所以这里我们一定要区分开渲染任务和 Expensive 函数，他们是不同的，UI 渲染是一个异步任务，而 Expensive 函数是同步执行的。useDeferredValue 推迟的是 UI 渲染任务。因此，我们需要特别注意的是，不要在同步逻辑上执行过多的耗时任务。"}),`
`]}),`
`,e.jsx(n.p,{children:"这里我们可以通过任务拆分的方式，把执行耗时时间分散到更多的子组件中去，这样 React 就可以利用任务中断的机制，在不阻塞渲染的情况下，中断低优先级的任务。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import {useState, useDeferredValue} from 'react'

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
`,e.jsx(n.p,{children:"再来感受一下演示结果，我们就发现，第一个 counter 的更新也变得非常流畅了。"}),`
`,e.jsx(i,{reload:!0,children:e.jsx(E,{})}),`
`,e.jsx(n.p,{children:"此时我们注意观察，不要错漏这个细节。slowList 中包含了 250 个子组件。每个子组件都渲染 1ms，那么整个组件渲染就需要耗时至少 250ms."}),`
`,e.jsx(n.p,{children:"在父组件中，我们把 deferred 传递给 Expensive"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Expensive counter={deferred} />
`})}),`
`,e.jsx(n.p,{children:"那么此时表示，Expensive 的 UI 更新任务是低优先级。counter 对应的任务可以中断它的执行。"}),`
`,e.jsx(n.p,{children:"此时一个很明显的区别就是，counter 的 UI 变化变得更加流畅了。这是因为耗时被拆分到了多个子组件中，React 就有机会中断这些函数的执行，并执行优先级更高的任务，以确保高优先级任务的流畅。"}),`
`,e.jsxs(n.p,{children:["如果你没有使用 React Compiler，你需要使用 memo 手动缓存 ",e.jsx(n.code,{children:"Expensive"}),"。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`export default memo(function Expensive({ text }) {
  // ...
});
`})}),`
`,e.jsx(n.p,{children:"当更新发生时，useDefferdValue 会首先使用旧值传递给组件。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Expensive counter={deferred} />
`})}),`
`,e.jsx(n.p,{children:"因此，当 counter 发生变化时，deferred 依然是旧值，那么此时，如果我们使用 memo 包裹，Expensive 的 props 就没有发生变化，我们可以跳过此次针对 Expensive 的更新。所以当我们快速点击时，Expensive 总是接受到旧值，它本身的渲染也会被中断，因此最终的表现结果是，当我们连续点击 7 次，counter 从 0 依次变成 7，而 deferred 会直接从 0 变成 7."}),`
`,e.jsx(n.p,{children:"这跟 React 的性能优化策略有关。"}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"2"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"运行原理"})}),`
`,e.jsx(n.p,{children:"看了上面两个例子，肯定还是有一部分人会觉得很懵，不要急，接下来我们把运行原理分析一下，整个情况就清晰了。"}),`
`,e.jsx(n.p,{children:"useDeferredValue 会尝试将 UI 任务更新两次。"}),`
`,e.jsxs(n.p,{children:["第一次，会给子组件传递旧值。此时 ",e.jsx(n.code,{children:"Expensive"})," 接收到的 props 会与上一次完全相同。如果结合了 React.memo，那么该组件就不会重新渲染。该组件可以重复使用之前的渲染结果"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Compiler 编译之后不需要 memo"}),`
`]}),`
`,e.jsxs(n.p,{children:["此时，高优先级的任务渲染会发生，渲染完成之后，将会开始第二次渲染。此时，将会传入刚才更新之后的新值。对于 ",e.jsx(n.code,{children:"Expensive"})," 而言，props 发生了变化，整个组件会重新渲染。"]}),`
`,e.jsx(n.p,{children:"我们通常会将已经非常明确的耗时任务标记为 deferred，因此，这些任务都被视为低优先级。当重要的高优先级更新已经完成，低优先级任务在第二次渲染时尝试更新..."}),`
`,e.jsx(n.p,{children:"在它第二次更新的过程中，如果又有新的高优先级任务进来，那么 React 就会中断并放弃第二次更新，去执行高优先级的任务。"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"注意：是中断，并放弃这次更新，所以表现出来的结果就是，中间会漏掉许多任务的执行"}),`
`]}),`
`,e.jsx(n.p,{children:"这样的运行机制有一个非常重要的好处。"}),`
`,e.jsx(n.p,{children:"那就是，如果你的电脑性能足够强悍，那么第二次的更新可能会快速完成，高优先级的任务来不及中断，那么我们的页面响应就是非常理想的。"}),`
`,e.jsx(n.p,{children:"但是如果我们的电脑性能比较差，第二次更新还没完成，新的高优先级任务又来了，那么就可以通过中断的方式，降级处理，保证重要 UI 的流畅，放弃低优先级任务。"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"在不同性能的设备上，有不同的反应，这个是跟防抖、节流的最重要的区别"}),`
`]}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"3"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"重新分析取消请求案例"})}),`
`,e.jsx(n.p,{children:"那我们回过头来，分析一下最开始的那个案例，重新看一眼代码"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`export default function Search() {
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const deferred = useDeferredValue(promise)


  function __inputChange(e) {
    promise.cancel()
    const len = e.target.value.length % 5
    update(fetchListWithCancel(len))
  }
  ...
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Suspense fallback={<Skeleton />}>
  <Spin loading={deferred !== promise} type='mask'>
    <List promise={deferred} />
  </Spin>
</Suspense>
`})}),`
`,e.jsx(n.p,{children:"这里我们将 promise 做为 state，当 promise 被重新赋值时，List 会经历两次更新。"}),`
`,e.jsx(n.p,{children:"首先点击事件触发，请求立即发生。promise 被改变。触发组件更新。"}),`
`,e.jsx(n.p,{children:"第一次更新时，deferred 使用旧值传参，此时对于 List 而言，api 没有发生变化。因此，利用这个机制，我们可以阻止 Suspense 直接渲染成 fallback."}),`
`,e.jsx(n.p,{children:"在 Suspense 包裹之下，只有当接口请求成功之后，deferred 的第二次更新才会发生，因此，在这个过程中，如果我们快速进行第二次点击，可以直接取消上一次请求，让第二次更新来不及执行。此时新的请求发生。"}),`
`,e.jsx(n.p,{children:"最终案例的完整代码与演示效果请看右侧区域。"}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"4"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"总结"})}),`
`,e.jsx(n.p,{children:"这种场景的最佳实践代码非常的简洁和优雅。写起来也很舒服，性能也非常强悍。但是理解起来会比较困难。因此想要做到灵活运用，还需要多多消化。"}),`
`,e.jsx(n.p,{children:"但是，等你彻底掌握它之后，你就会发现 React 19 在异步交互上真的太优雅了。这样的开发体验，是依赖 useEffect 完全比不了的。"})]})}function V(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}const $={"App.js":v,"api.js":g,"List.jsx":b,"Input.jsx":k,"Skeleton.jsx":N,"Spin.jsx":{code:h,hidden:!0},"index.css":{code:j,hidden:!0}};function T(){return e.jsx(f,{files:$,renderArticle:r=>e.jsx(V,{components:{code:r}})})}export{T as default};
