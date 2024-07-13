import{c as i,a as v,j as n,r as S}from"./index-WxVCoI3R.js";import{B as A}from"./index-BmRxIqvy.js";import{C as _}from"./Cardruntime-CkAYSVvf.js";import{A as T}from"./index-z4EEj1-x.js";import"./activecode-B_nYYbD8.js";import"./index-DMQVh9lL.js";import"./Preview-B0JUZwug.js";import"./atom-one-light-CeVHWIu6.js";const F=`import { useState, useEffect, useRef } from 'react'
import Panel1 from "./Panel1";
import Panel2 from "./Panel2";
import Panel3 from "./Panel3";
import Panel4 from "./Panel4";

const tabs = [
  { title: 'Tailwindcss', component: Panel1, appeared: false },
  { title: 'React', component: Panel2, appeared: false },
  { title: 'Unocss', component: Panel3, appeared: false },
  { title: 'Compiler', component: Panel4, appeared: false }
]

function App() {
  const [current, setCurrent] = useState(0)
  const tabsconfig = useRef([...tabs])

  function __clickHanler(index) {
    tabsconfig.current[index].appeared = true
    setCurrent(index)
  }

  let c1 = tabsconfig.current[0]
  let c2 = tabsconfig.current[1]
  let c3 = tabsconfig.current[2]
  let c4 = tabsconfig.current[3]

  return (
    <div className='bg-gray-100 p-8 rounded-md border border-gray-200'>
      <div>
        {tabs.map((item, index) => (
          <button className={index === current ? 'text-blue-500' : 'text-gray-500'} key={item.title} onClick={() => __clickHanler(index)}>
            {item.title}
          </button>
        ))}
      </div>

      <c1.component appearder={c1.appeared} selected={current === 0}/>
      <c2.component appearder={c2.appeared} selected={current === 1}/>
      <c3.component appearder={c3.appeared} selected={current === 2}/>
      <c4.component appearder={c4.appeared} selected={current === 3}/>
    </div>
  )
}

export default App
`,E=`import clsx from 'clsx'

function Panel({selected, appeared}) {
  // 这里是会执行的
  // console.log('panel 1 re-render')
  if (!selected && !appeared) {
    return null
  }

  const cls = clsx('border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8', {
    hidden: !selected
  })

  return (
    <div className={cls}>
      A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
    </div>
  )
}

export default Panel;
`,M=`import clsx from 'clsx'

function Panel({selected, appeared}) {
  // 这里是会执行的
  // console.log('panel 1 re-render')
  if (!selected && !appeared) {
    return null
  }

  const cls = clsx('border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8', {
    hidden: !selected
  })

  return (
    <div className={cls}>
      React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.
    </div>
  )
}

export default Panel;
`,B=`import clsx from 'clsx'

function Panel({selected, appeared}) {
  // 这里是会执行的
  // console.log('panel 1 re-render')
  if (!selected && !appeared) {
    return null
  }

  const cls = clsx('border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8', {
    hidden: !selected
  })

  return (
    <div className={cls}>
      UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets.
    </div>
  )
}

export default Panel;
`,D=`import clsx from 'clsx'

function Panel({selected, appeared}) {
  // 这里是会执行的
  // console.log('panel 1 re-render')
  if (!selected && !appeared) {
    return null
  }

  const cls = clsx('border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8', {
    hidden: !selected
  })

  return (
    <div className={cls}>
      React Compiler is a new experimental compiler that we’ve open sourced to get early feedback from the community. It still has rough edges and is not yet fully ready for production.
    </div>
  )
}

export default Panel;
`;function q(r){const e=i.c(4),{selected:l,appeared:o}=r;if(!l&&!o)return null;const s=!l;let c;e[0]!==s?(c=v("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:s}),e[0]=s,e[1]=c):c=e[1];const a=c;let t;return e[2]!==a?(t=n.jsx("div",{className:a,children:"A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."}),e[2]=a,e[3]=t):t=e[3],t}function H(r){const e=i.c(4),{selected:l,appeared:o}=r;if(!l&&!o)return null;const s=!l;let c;e[0]!==s?(c=v("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:s}),e[0]=s,e[1]=c):c=e[1];const a=c;let t;return e[2]!==a?(t=n.jsx("div",{className:a,children:"React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps."}),e[2]=a,e[3]=t):t=e[3],t}function O(r){const e=i.c(4),{selected:l,appeared:o}=r;if(!l&&!o)return null;const s=!l;let c;e[0]!==s?(c=v("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:s}),e[0]=s,e[1]=c):c=e[1];const a=c;let t;return e[2]!==a?(t=n.jsx("div",{className:a,children:"UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets."}),e[2]=a,e[3]=t):t=e[3],t}function U(r){const e=i.c(4),{selected:l,appeared:o}=r;if(!l&&!o)return null;const s=!l;let c;e[0]!==s?(c=v("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:s}),e[0]=s,e[1]=c):c=e[1];const a=c;let t;return e[2]!==a?(t=n.jsx("div",{className:a,children:"React Compiler is a new experimental compiler that we’ve open sourced to get early feedback from the community. It still has rough edges and is not yet fully ready for production."}),e[2]=a,e[3]=t):t=e[3],t}const $=[{title:"Tailwindcss",component:q,appeared:!1},{title:"React",component:H,appeared:!1},{title:"Unocss",component:O,appeared:!1},{title:"Compiler",component:U,appeared:!1}];function J(){const r=i.c(29),[e,l]=S.useState(0);let o;r[0]===Symbol.for("react.memo_cache_sentinel")?(o=[...$],r[0]=o):o=r[0];const s=S.useRef(o);let c;r[1]===Symbol.for("react.memo_cache_sentinel")?(c=function(b){s.current[b].appeared=!0,l(b)},r[1]=c):c=r[1];const a=c,t=s.current[0],d=s.current[1],p=s.current[2],m=s.current[3];let u;r[2]!==e||r[3]!==a?(u=$.map((N,b)=>n.jsx("button",{className:b===e?"text-blue-500":"text-gray-500",onClick:()=>a(b),children:N.title},N.title)),r[2]=e,r[3]=a,r[4]=u):u=r[4];let x;r[5]!==u?(x=n.jsx("div",{children:u}),r[5]=u,r[6]=x):x=r[6];const C=e===0;let h;r[7]!==t.component||r[8]!==t.appeared||r[9]!==C?(h=n.jsx(t.component,{appearder:t.appeared,selected:C}),r[7]=t.component,r[8]=t.appeared,r[9]=C,r[10]=h):h=r[10];const P=e===1;let f;r[11]!==d.component||r[12]!==d.appeared||r[13]!==P?(f=n.jsx(d.component,{appearder:d.appeared,selected:P}),r[11]=d.component,r[12]=d.appeared,r[13]=P,r[14]=f):f=r[14];const R=e===2;let j;r[15]!==p.component||r[16]!==p.appeared||r[17]!==R?(j=n.jsx(p.component,{appearder:p.appeared,selected:R}),r[15]=p.component,r[16]=p.appeared,r[17]=R,r[18]=j):j=r[18];const k=e===3;let g;r[19]!==m.component||r[20]!==m.appeared||r[21]!==k?(g=n.jsx(m.component,{appearder:m.appeared,selected:k}),r[19]=m.component,r[20]=m.appeared,r[21]=k,r[22]=g):g=r[22];let y;return r[23]!==x||r[24]!==h||r[25]!==f||r[26]!==j||r[27]!==g?(y=n.jsxs("div",{className:"bg-gray-100 p-8 rounded-md border border-gray-200",children:[x,h,f,j,g]}),r[23]=x,r[24]=h,r[25]=f,r[26]=j,r[27]=g,r[28]=y):y=r[28],y}function L(){const r=i.c(2);let e;r[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(V,{}),r[0]=e):e=r[0];let l;return r[1]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsxs("div",{children:[e,n.jsx(I,{})]}),r[1]=l):l=r[1],l}function V(){var r=performance.now();return n.jsxs("div",{className:"mt-4",children:["仅执行 1000,000 次耗时 for 循环耗时：",n.jsxs("span",{className:"text-red-500",children:[performance.now()-r," ms"]})]})}function I(){var r=performance.now();return n.jsxs("div",{className:"mt-4",children:["for 循环中，比较 1000,000 次耗时：",n.jsxs("span",{className:"text-red-500",children:[performance.now()-r," ms"]})]})}function w(r){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(_,{children:n.jsx(J,{})}),`
`,n.jsx(e.p,{children:"这个案例会非常的复杂，经验稍微欠缺一点的前端开发可能都实现不了。我们可以先操作一下上面的按钮，看一下我想要实现的演示效果。"}),`
`,n.jsx(e.p,{children:"从演示效果上来看，这是一个普通的 tab 切换。但是先别急，我还有要求。我希望能实现极限的性能优化。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"1、我希望首次渲染时，页面渲染更少的内容，因此此时，只能先渲染默认的 Panel。其他 Panel 需要在点击对应的按钮时，才渲染出来。"}),`
`,n.jsx(e.li,{children:"2、在切换过程中，我希望能够缓存已经渲染好的 Panel，只需要在样式上做隐藏，而不需要在后续的交互中重复渲染内容"}),`
`,n.jsx(e.li,{children:"3、当四个页面都渲染出来之后，再做切换时，此时只会有两个页面会发生变化，上一个选中的页面与下一个选中的页面。另外的页面不参与交互，则不应该 re-render。"}),`
`]}),`
`,n.jsx(e.p,{children:"这个案例和要求不算特别难，但是对综合能力的要求还是蛮高的，大家可以自己动手尝试一下试试看。"}),`
`,n.jsx(e.p,{children:"具体的完整实现请看右侧代码。"}),`
`,n.jsx(e.p,{children:"这里，我主要想跟大家分享的就是 map 方法的小细节。有如下代码"}),`
`,n.jsxs(e.p,{children:["因为在本案例中， 4 个按钮对应 4 个页面，因此我们通常会使用 ",n.jsx(e.code,{children:".map"})," 方法来渲染他们。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{tabs.map((item, index) => {
  return (
    <item.component
      appearder={item.appeared}
      key={item.title}
      selected={current === index}
    />
  )
})}
`})}),`
`,n.jsx(e.p,{children:"它的编译结果表现如下："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`let t4;

if ($[7] !== current) {
  t4 = tabs.map((item_0, index_1) => (
    <item_0.component
      appearder={item_0.appeared}
      key={item_0.title}
      selected={current === index_1}
    />
  ));
  $[7] = current;
  $[8] = t4;
} else {
  t4 = $[8];
}
`})}),`
`,n.jsxs(e.p,{children:["我们会发现，此时编译缓存的是整个 map 表达式，但是由于 map 表达式又依赖于 ",n.jsx(e.code,{children:"current"}),"，因此，在我们点击切换的交互过程中，每一次的 current 都会发生变化，那么这里针对 map 表达式的缓存就没有了任何意义。"]}),`
`,n.jsxs(e.p,{children:["但是实际上，我们可以观察到，我们有 4 个 Panel，点击切换的交互发生时，实际上只有两个 Pannel 发生了变化。因此，最极限的优化是，只有这两个组件对应的函数需要重新 ",n.jsx(e.code,{children:"re-render"}),"，那么我们的代码应该怎么写呢？"]}),`
`,n.jsx(e.p,{children:"其实非常简单，那就是不用 map，将数组拆开直接手写，代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`let c1 = tabsconfig.current[0]
let c2 = tabsconfig.current[1]
let c3 = tabsconfig.current[2]
let c4 = tabsconfig.current[3]
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<c1.component appearder={c1.appeared} selected={current === 0}/>
<c2.component appearder={c2.appeared} selected={current === 1}/>
<c3.component appearder={c3.appeared} selected={current === 2}/>
<c4.component appearder={c4.appeared} selected={current === 3}/>
`})}),`
`,n.jsx(e.p,{children:"然后，我们就会发现，在编译结果中，不再缓存 map 表达式的结果，而是缓存每一个组件"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`let t5;

if ($[7] !== c1.component || $[8] !== c1.appeared || $[9] !== t4) {
  t5 = <c1.component appearder={c1.appeared} selected={t4} />;
  $[7] = c1.component;
  $[8] = c1.appeared;
  $[9] = t4;
  $[10] = t5;
} else {
  t5 = $[10];
}
`})}),`
`,n.jsx(e.p,{children:"这样做的收益在特定场景下的收益将会非常高。因为我们这里省掉了其他页面的 re-render，有的时候，我们的 tab 页面可能有十多个。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"总结一下：强悍的性能：细粒度记忆化更新"})}),`
`,n.jsx(e.p,{children:"经过前面原理的分析与多个案例的分析，想必各位道友对 React Compiler 的工作机制已经有了非常深刻的理解。此时，我们就需要分析一下，这样的记忆化更新机制，到底有多强。"}),`
`,n.jsx(e.p,{children:"首先明确一点，和 Vue 等其他框架的依赖收集不同，React Compiler 依然不做依赖收集。"}),`
`,n.jsx(e.p,{children:"React 依然通过从根节点自上而下的 diff 来找出需要更新的节点。在这个过程中，我们会通过大量的判断来决定使用缓存值。可以明确的是，Compiler 编译之后的代码，缓存命中的概率非常高，几乎所有应该缓存的元素和函数都会被缓存起来。"}),`
`,n.jsx(e.p,{children:"**因此，React Compiler 也能够在不做依赖收集的情况下，做到元素级别的超级细粒度更细。**但是，这样做的代价就是，React 需要经历大量的判断来决定是否需要更新。"}),`
`,n.jsx(e.p,{children:"所以这个时候，我们就需要明确，我所谓的大量判断的时间成本，到底有多少？它会不会导致新的性能问题？"}),`
`,n.jsx(e.p,{children:"可以看到，几乎所有的比较都是使用了全等比较，因此，我们可以写一个例子来感知一下，超大量的全等比较到底需要花费多少时间。"}),`
`,n.jsx(e.p,{children:"测试代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`export default function Demo02() {
  return (
    <div>
      <OnlyFor />
      <ForAndJudge />
    </div>
  )
}

function OnlyFor() {
  var cur = performance.now()

  for(let i = 0; i < 1000000; i++) {}

  return (
    <div className='mt-4'>
      仅执行 1000,000 次耗时 for 循环耗时：
      <span className='text-red-500'>{performance.now() - cur} ms</span>
    </div>
  )
}


function ForAndJudge() {
  var cur = performance.now()

  for(let i = 0; i < 1000000; i++) {
    'xxx' === 'xx'
  }

  return (
    <div className='mt-4'>
      for 循环中，比较 1000,000 次耗时：
      <span className='text-red-500'>{performance.now() - cur} ms</span>
    </div>
  )
}
`})}),`
`,n.jsx(_,{reload:!0,children:n.jsx(L,{})}),`
`,n.jsxs(e.p,{children:["由于 for 循环本身也会消耗一点时间，因此我这里单独列出来了 for 循环中不执行任何逻辑的耗时结果。我们可以多次点击 ",n.jsx(e.code,{children:"reload"})," 按钮查看耗时波动。"]}),`
`,n.jsx(e.p,{children:"执行结果发现，在我的设备上，在 for 循环中比较 100 万次，总花费时间在 0.5ms 到 1.5ms 之间波动，而且通过对比我们可以知道，这里边的耗时的一大部分是 for 循环的逻辑。如果去除 for 循环的耗时，我们会发现，纯粹的比较耗时可能仅 0.1ms 到 0.5ms 之间。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"由于执行耗时有小范围的波动，因此有的时候下面的执行时间反而更短这是正常的"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"卧槽(¬д¬。)，这太强了啊"}),"。"]}),`
`,n.jsxs(e.p,{children:["我们很难有项目能够达到 1000,000 次的比较级别，甚至许多达到 10000 都难。那也就意味着，",n.jsx(e.strong,{children:"这里大量比较的时间成本，几乎可以忽略不计"}),"。因此，在执行速度上，Compiler 的之后性能表现将会非常强悍。"]}),`
`,n.jsxs(e.p,{children:["由此我们可以得出结论，",n.jsx(e.strong,{children:"经过 Compiler 优化的项目，可以以极低的时间成本，做到元素级别的细粒度更新。"})]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["这里我要明确的是，这样的性能表现，在之前版本的项目中，合理运用 ",n.jsx(e.code,{children:"useCallback/memo"})," 也能做到。只是由于对 React 底层默认命中规则不理解，导致大多数人不知道如何优化到这种程度。React Compiler 简化了这个过程"]}),`
`]}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"2"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"React Compiler 最佳实践"})}),`
`,n.jsx(e.p,{children:"有许多骚操作，React Compiler 并不支持，例如下面这种写法。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{[1, 2, 3, 4, 5].map((counter) => {
  const [number, setNumber] = useState(0)
  return (
    <div key={\`hello\${counter}\`} onClick={() => setNumber(number + 1)}>
      number: {number}
    </div>
  )
})}
`})}),`
`,n.jsx(e.p,{children:"这个操作骚归骚，但是真的有大佬想要这样写。React 之前的版本依然不支持这种写法。不过好消息是，React 19 支持了..."}),`
`,n.jsx(e.p,{children:"但是 React Compiler 并不支持。对于这些不支持的语法，React Compiler 的做法就是直接跳过不编译，而直接沿用原组件写法。"}),`
`,n.jsx(e.p,{children:"因此，React Compiler 的最佳实践我总结了几条"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"1、不再使用 useCallback、useMemo、Memo 等缓存函数"}),`
`,n.jsx(e.li,{children:"2、丢掉闭包的心智负担，放心使用即可"}),`
`,n.jsx(e.li,{children:"3、引入严格模式"}),`
`,n.jsx(e.li,{children:"4、在你不熟悉的时候引入 eslint-plugin-react-compiler"}),`
`,n.jsx(e.li,{children:"5、当你熟练之后，弃用它，因为有的时候我们就是不想让它编译我们的组件"}),`
`,n.jsx(e.li,{children:"6、更多的使用 use 与 Action 来处理异步逻辑"}),`
`,n.jsx(e.li,{children:"7、尽可能少的使用 useEffect"}),`
`]}),`
`,n.jsxs(e.p,{children:["因此，一个小小的彩蛋就是，当你不希望你的组件被 Compiler 编译时，你只需要使用 ",n.jsx(e.code,{children:"var"})," 来声明状态即可。因为这不符合严格模式的语法规范"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`var [counter, setCounter] = useState(0)
`})}),`
`,n.jsxs(e.p,{children:["而你改成 ",n.jsx(e.code,{children:"const/let"}),"，它就会又重新编译该组件。可控性与自由度非常高。"]}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"3"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"总结"})}),`
`,n.jsx(e.p,{children:"React Compiler 在保持了对原有语法的弱侵入性的同时，又做到了保持了函数式编程的开发范式，并且弥补了之前可能存在性能问题的缺陷，这无疑是进一步确认了 React 在前端框架方向都领先地位。React Compiler 把虚拟 DOM 的性能表现推向了极致。和进几年声望比较大的 signal 相比，将不会存在性能短板，甚至由于并发模式的存在，React 项目的上限将会比其他前端框架更高。"}),`
`,n.jsx(e.p,{children:"并且 React Compiler 上手成本低，理解起来也不难，未来肯定会快速被大量开发者所接受。作为开发者我们只需要放心使用即可。"})]})}function X(r={}){const{wrapper:e}=r.components||{};return e?n.jsx(e,{...r,children:n.jsx(w,{...r})}):w(r)}const z={"App.js":F,"Panel1.jsx":E,"Panel2.jsx":M,"Panel3.jsx":B,"Panel4.jsx":D,"Button.jsx":{code:A,hidden:!0}};function re(){const r=i.c(1);let e;return r[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(T,{files:z,renderArticle:l=>n.jsx(X,{components:{code:l}})}),r[0]=e):e=r[0],e}export{re as default};
