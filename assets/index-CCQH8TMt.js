import{c as d,r as m,j as t}from"./index-WxVCoI3R.js";import{B as f}from"./index-BmRxIqvy.js";import{C as x}from"./Cardruntime-CkAYSVvf.js";import{A as j}from"./index-z4EEj1-x.js";import"./activecode-B_nYYbD8.js";import"./index-DMQVh9lL.js";import"./Preview-B0JUZwug.js";import"./atom-one-light-CeVHWIu6.js";const p=`import {useState} from 'react'
import Button from './Button'
import {_c} from './useCache.js'

export default function Counter() {
  const $ = _c(10);

  if ($[0] !== "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac") {
    for (let $i = 0; $i < 10; $i += 1) {
      $[$i] = Symbol.for("react.memo_cache_sentinel");
    }
    $[0] = "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac";
  }

  const [count, setCount] = useState(0);
  let t0;

  if ($[0] !== count) {
    t0 = function __clickHanler() {
      setCount(count + 1);
    };

    $[0] = count;
    $[1] = t0;
  } else {
    t0 = $[1];
  }

  const __clickHanler = t0;
  let t1;

  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <div>A Base Case</div>;
    $[2] = t1;
  } else {
    t1 = $[2];
  }

  let t2;

  if ($[3] !== count) {
    t2 = <div>currnt count is: {count}</div>;
    $[3] = count;
    $[4] = t2;
  } else {
    t2 = $[4];
  }

  let t3;

  if ($[5] !== __clickHanler) {
    t3 = <Button onClick={__clickHanler}>Increment</Button>;
    $[5] = __clickHanler;
    $[6] = t3;
  } else {
    t3 = $[6];
  }

  let t4;

  if ($[7] !== t2 || $[8] !== t3) {
    t4 = (
      <div>
        {t1}
        <div className="flex items-center justify-between">
          {t2}
          {t3}
        </div>
      </div>
    );
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }

  return t4;
}
`,h=`import {useState} from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  function __clickHanler() {
    setCount(count + 1)
  }

  return (
    <div>
      <div>A Base Case</div>
      <div className="flex items-center justify-between">
        <div>currnt count is: {count}</div>
        <button onClick={__clickHanler}>Increment</button>
      </div>
    </div>
  )
}
`,_=`import {useState} from 'react'
export function _c(size) {
  return useState(() => Array.from(size))[0]
}
`;function $(){const n=d.c(10),[e,l]=m.useState(0);let r;n[0]!==e?(r=function(){l(e+1)},n[0]=e,n[1]=r):r=n[1];const a=r;let o;n[2]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsx("div",{children:"A Base Case"}),n[2]=o):o=n[2];let c;n[3]!==e?(c=t.jsxs("div",{children:["currnt count is: ",e]}),n[3]=e,n[4]=c):c=n[4];let s;n[5]!==a?(s=t.jsx("button",{onClick:a,children:"Increment"}),n[5]=a,n[6]=s):s=n[6];let i;return n[7]!==c||n[8]!==s?(i=t.jsxs("div",{children:[o,t.jsxs("div",{className:"flex items-center justify-between",children:[c,s]})]}),n[7]=c,n[8]=s,n[9]=i):i=n[9],i}function u(n){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:["通过上面对 Compiler 渲染结果的理解，我们应该已经大概知道我们的 React 代码最终会渲染成什么样。我们目前要思考的问题就是，我们的代码通过 Compiler 编译之后，",t.jsx(e.strong,{children:"收益表现在哪里？"})]}),`
`,t.jsx(e.p,{children:"接下来我们要分析三个不同的案例，来思考这个问题。这篇文章先分析第一个出现在上一章中，最简单的基础案例"}),`
`,t.jsx(x,{children:t.jsx($,{})}),`
`,t.jsx(e.p,{children:"完整的源代码与编译之后的代码在右侧可以看到。"}),`
`,t.jsxs(e.p,{children:["本文的这个案例中，当我们点击按钮时，此时 ",t.jsx(e.code,{children:"count"})," 增加，"]}),`
`,t.jsxs(e.p,{children:["由于 ",t.jsx(e.code,{children:"__clickHandler"})," 函数内部使用了外部的 ",t.jsx(e.code,{children:"count"})," 状态，因此 ",t.jsx(e.code,{children:"__clickHanler"})," 无法缓存，需要重新创建，"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`function __clickHanler() {
  setCount(count + 1)
}
`})}),`
`,t.jsx(e.p,{children:"那么很显然的， button 按钮也就无法缓存"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`// 无法缓存
<button onClick={__clickHanler}>Increment</button>
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`// 无法缓存
<div>currnt count is: {count}</div>
`})}),`
`,t.jsxs(e.p,{children:["最终，只有 ",t.jsx(e.code,{children:"A Base Case"})," 标签可以被缓存"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`<div>A Base Case</div>
`})}),`
`,t.jsxs(e.p,{children:["因此，在组件由于 count 的增加而反复重新执行的过程中，大多数元素都无法被缓存，需要重新创建，那么也就意味着，这个案例的编译之后的收益为",t.jsx(e.strong,{children:"负收益"}),"。因此，如果你经验比较丰富的话，你可以快速判断你写的当前的组件是否具备明确的正向收益，从而选择是否需要编译当前组件。"]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"我们可以通过有意违背规则的方式让编译不发生"}),`
`]}),`
`,t.jsx(e.p,{children:"当然，这里多执行的逻辑也并不是很多，我们也可以选择无视。"})]})}function v(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}const C={"App.js":p,原代码:h,"useCache.js":{code:_,hidden:!0},"Button.jsx":{code:f,hidden:!0}};function w(){const n=d.c(1);let e;return n[0]===Symbol.for("react.memo_cache_sentinel")?(e=t.jsx(j,{files:C,renderArticle:l=>t.jsx(v,{components:{code:l}})}),n[0]=e):e=n[0],e}export{w as default};
