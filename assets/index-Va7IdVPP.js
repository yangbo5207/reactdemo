import{r as o,j as e,c as s}from"./index-vB-mHLnv.js";import{B as i}from"./index-BmRxIqvy.js";import{C as a}from"./Cardruntime-DFtXWoxO.js";import{A as u}from"./index-CLBIbT-Y.js";import"./index-D8xVh8ID.js";import"./atom-one-light-Bb5l2Lva.js";import"./Preview-CBazhn3Q.js";const l=`import {useState} from 'react'
import Button from './Button'
import {_c} from './useCache.js'

export default function App() {
  const $ = _c(13);

  if ($[0] !== "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac") {
    for (let $i = 0; $i < 13; $i += 1) {
      $[$i] = Symbol.for("react.memo_cache_sentinel");
    }
    $[0] = "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac";
  }

  const [counter, setCounter] = useState(0);
  let t0;

  if ($[0] !== counter) {
    t0 = function __clickHanler() {
      setCounter(counter + 1);
    };

    $[0] = counter;
    $[1] = t0;
  } else {
    t0 = $[1];
  }

  const __clickHanler = t0;
  let t1;

  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <div>A Expensive Case</div>;
    $[2] = t1;
  } else {
    t1 = $[2];
  }

  let t2;

  if ($[3] !== counter) {
    t2 = <div className="counter">current counter is: {counter}</div>;
    $[3] = counter;
    $[4] = t2;
  } else {
    t2 = $[4];
  }

  let t3;

  if ($[5] !== __clickHanler) {
    t3 = <Button onClick={__clickHanler}>counter++</Button>;
    $[5] = __clickHanler;
    $[6] = t3;
  } else {
    t3 = $[6];
  }

  let t4;

  if ($[7] !== t2 || $[8] !== t3) {
    t4 = (
      <div className="flex items-center justify-between mt-4">
        {t2}
        {t3}
      </div>
    );
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }

  let t5;

  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = <Expensive />;
    $[10] = t5;
  } else {
    t5 = $[10];
  }

  let t6;

  if ($[11] !== t4) {
    t6 = (
      <div>
        {t1}
        {t4}
        {t5}
      </div>
    );
    $[11] = t4;
    $[12] = t6;
  } else {
    t6 = $[12];
  }

  return t6;
}

function Expensive() {
  var cur = performance.now()
  try {
    while (performance.now() - cur < 100) {
      // block 100ms
    }
  } catch (e) {}


  return (
    <div className='border border-red-600 rounded p-4 mt-4 text-red-500 text-sm leading-6'>
      这是模拟的一个耗时子组件，我的渲染至少要损耗 100ms 的时间，因此如果不做任何优化的情况下，当你快速点击按钮时，你会感受到 counter 的递增会有明显的掉帧。
    </div>
  )
}
`,d=`import { useState } from 'react'

function App() {
  var [counter, setCounter] = useState(0)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <div>A Expensive Case</div>
      <div className="flex items-center justify-between mt-4">
        <div className="counter">current counter is: {counter}</div>
        <button onClick={__clickHanler}>counter++</button>
      </div>
      <Expensive/>
    </div>
  )
}

export default App


function Expensive() {
  var cur = performance.now()
  while (performance.now() - cur < 100) {
    // block 100ms
  }

  return (
    <div className='border border-red-500 rounded p-4 mt-4 text-red-500 text-sm leading-6'>
      这是模拟的一个耗时子组件，我的渲染至少要损耗 100ms 的时间，因此如果不做任何优化的情况下，当你快速点击按钮时，你会感受到 counter 的递增会有明显的掉帧。
    </div>
  )
}
`,m=`import {useState} from 'react'
export function _c(size) {
  return useState(() => Array.from(size))[0]
}
`;function p(){var[n,t]=o.useState(0);function r(){t(n+1)}return e.jsxs("div",{children:[e.jsx("div",{children:"A Expensive Case"}),e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsxs("div",{className:"counter",children:["current counter is: ",n]}),e.jsx("button",{onClick:r,children:"counter++"})]}),e.jsx(f,{})]})}function f(){for(var n=performance.now();performance.now()-n<100;);return e.jsx("div",{className:"border border-red-500 rounded p-4 mt-4 text-red-500 text-sm leading-6",children:"这是模拟的一个耗时子组件，我的渲染至少要损耗 100ms 的时间，因此如果不做任何优化的情况下，当你快速点击按钮时，你会感受到 counter 的递增会有明显的掉帧。"})}function c(n){const t={code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx(p,{})}),`
`,e.jsx(t.p,{children:"这里是未被编译优化的案例。右侧区域渲染的是已经被编译优化之后的案例。他们的初始代码都一模一样。大家可以通过快速点击按钮感受一下编译之后的优化提升。"}),`
`,e.jsx(t.p,{children:"完整的源代码与编译之后的代码在右侧可以看到。"}),`
`,e.jsx(t.p,{children:"我们来分析一下这段代码所带来的提升具体表现在什么地方。"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`function App() {
  var [counter, setCounter] = useState(0)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <div>A Expensive Case</div>
      <div className="flex items-center justify-between mt-4">
        <div className="counter">current counter is: {counter}</div>
        <button onClick={__clickHanler}>counter++</button>
      </div>
      <Expensive/>
    </div>
  )
}
`})}),`
`,e.jsxs(t.p,{children:["可以看到，这段代码和上一章的例子中的代码大多数都是一样的，唯一的区别就是这里多一个耗时的子任务 ",e.jsx(t.code,{children:"Expensive"})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`<Expensive/>
`})}),`
`,e.jsx(t.p,{children:"由于该任务在渲染时，并未有入参依赖其他任何状态或者变量，因此，在初始化之后的更新中，我们可以将其缓存起来，当 counter 不停发生变化导致组件 re-render 时，这个耗时的子任务可以被缓存，它的编译代码如下"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`let t5;

if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
  t5 = <Expensive />;
  $[10] = t5;
} else {
  t5 = $[10];
}
`})}),`
`,e.jsxs(t.p,{children:["因此，编译优化之后，我们能够非常明显的感受到",e.jsx(t.strong,{children:"掉帧的现象"}),"消失了。在优化之前，由于 counter 导致组件 re-render，所以该子组件虽然没有任何参数传递进去，但是依然不可避免的需要重新执行，从而导致每次更新的耗时都非常大。"]})]})}function x(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}const v={"App.js":l,原代码:d,"useCache.js":{code:m,hidden:!0},"Button.jsx":{code:i,hidden:!0}};function k(){const n=s.c(1);let t;return n[0]===Symbol.for("react.memo_cache_sentinel")?(t=e.jsx(u,{files:v,renderArticle:r=>e.jsx(x,{components:{code:r}})}),n[0]=t):t=n[0],t}export{k as default};
