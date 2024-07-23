import{c as a,j as e,r as p,b as j}from"./index-BxXbnW9e.js";import{C as m}from"./Cardruntime-DF2YgfxL.js";import{A as f}from"./index-LK1iCBIb.js";import"./index-BEsnAH_r.js";import"./activecode-BfSkJlGQ.js";import"./index-DMQVh9lL.js";import"./Preview-Cfw1m546.js";const g=`import { useState, useEffect, useRef } from 'react'
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
`,b=`import clsx from 'clsx'

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
`,y=`import clsx from 'clsx'

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
`,v=`import clsx from 'clsx'

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
`,C=`import clsx from 'clsx'

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
`;function P({selected:r,appeared:n}){if(!r&&!n)return null;const t=a("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!r});return e.jsx("div",{className:t,children:"A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."})}function R({selected:r,appeared:n}){if(!r&&!n)return null;const t=a("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!r});return e.jsx("div",{className:t,children:"React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps."})}function k({selected:r,appeared:n}){if(!r&&!n)return null;const t=a("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!r});return e.jsx("div",{className:t,children:"UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets."})}function N({selected:r,appeared:n}){if(!r&&!n)return null;const t=a("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!r});return e.jsx("div",{className:t,children:"React Compiler is a new experimental compiler that we’ve open sourced to get early feedback from the community. It still has rough edges and is not yet fully ready for production."})}const u=[{title:"Tailwindcss",component:P,appeared:!1},{title:"React",component:R,appeared:!1},{title:"Unocss",component:k,appeared:!1},{title:"Compiler",component:N,appeared:!1}];function w(){const[r,n]=p.useState(0),t=p.useRef([...u]);function h(c){t.current[c].appeared=!0,n(c)}let s=t.current[0],l=t.current[1],i=t.current[2],d=t.current[3];return e.jsxs("div",{className:"bg-gray-100 p-8 rounded-md border border-gray-200",children:[e.jsx("div",{children:u.map((c,o)=>e.jsx("button",{className:o===r?"text-blue-500":"text-gray-500",onClick:()=>h(o),children:c.title},c.title))}),e.jsx(s.component,{appearder:s.appeared,selected:r===0}),e.jsx(l.component,{appearder:l.appeared,selected:r===1}),e.jsx(i.component,{appearder:i.appeared,selected:r===2}),e.jsx(d.component,{appearder:d.appeared,selected:r===3})]})}function S(){return e.jsxs("div",{children:[e.jsx($,{}),e.jsx(A,{})]})}function $(){var r=performance.now();return e.jsxs("div",{className:"mt-4",children:["仅执行 1000,000 次耗时 for 循环耗时：",e.jsxs("span",{className:"text-red-500",children:[performance.now()-r," ms"]})]})}function A(){var r=performance.now();return e.jsxs("div",{className:"mt-4",children:["for 循环中，比较 1000,000 次耗时：",e.jsxs("span",{className:"text-red-500",children:[performance.now()-r," ms"]})]})}function x(r){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsx(w,{})}),`
`,e.jsx(n.p,{children:"这个案例会非常的复杂，经验稍微欠缺一点的前端开发可能都实现不了。我们可以先操作一下上面的按钮，看一下我想要实现的演示效果。"}),`
`,e.jsx(n.p,{children:"从演示效果上来看，这是一个普通的 tab 切换。但是先别急，我还有要求。我希望能实现极限的性能优化。"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"1、我希望首次渲染时，页面渲染更少的内容，因此此时，只能先渲染默认的 Panel。其他 Panel 需要在点击对应的按钮时，才渲染出来。"}),`
`,e.jsx(n.li,{children:"2、在切换过程中，我希望能够缓存已经渲染好的 Panel，只需要在样式上做隐藏，而不需要在后续的交互中重复渲染内容"}),`
`,e.jsx(n.li,{children:"3、当四个页面都渲染出来之后，再做切换时，此时只会有两个页面会发生变化，上一个选中的页面与下一个选中的页面。另外的页面不参与交互，则不应该 re-render。"}),`
`]}),`
`,e.jsx(n.p,{children:"这个案例和要求不算特别难，但是对综合能力的要求还是蛮高的，大家可以自己动手尝试一下试试看。"}),`
`,e.jsx(n.p,{children:"具体的完整实现请看右侧代码。"}),`
`,e.jsx(n.p,{children:"这里，我主要想跟大家分享的就是 map 方法的小细节。有如下代码"}),`
`,e.jsxs(n.p,{children:["因为在本案例中， 4 个按钮对应 4 个页面，因此我们通常会使用 ",e.jsx(n.code,{children:".map"})," 方法来渲染他们。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`{tabs.map((item, index) => {
  return (
    <item.component
      appearder={item.appeared}
      key={item.title}
      selected={current === index}
    />
  )
})}
`})}),`
`,e.jsx(n.p,{children:"它的编译结果表现如下："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`let t4;

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
`,e.jsxs(n.p,{children:["我们会发现，此时编译缓存的是整个 map 表达式，但是由于 map 表达式又依赖于 ",e.jsx(n.code,{children:"current"}),"，因此，在我们点击切换的交互过程中，每一次的 current 都会发生变化，那么这里针对 map 表达式的缓存就没有了任何意义。"]}),`
`,e.jsxs(n.p,{children:["但是实际上，我们可以观察到，我们有 4 个 Panel，点击切换的交互发生时，实际上只有两个 Pannel 发生了变化。因此，最极限的优化是，只有这两个组件对应的函数需要重新 ",e.jsx(n.code,{children:"re-render"}),"，那么我们的代码应该怎么写呢？"]}),`
`,e.jsx(n.p,{children:"其实非常简单，那就是不用 map，将数组拆开直接手写，代码如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`let c1 = tabsconfig.current[0]
let c2 = tabsconfig.current[1]
let c3 = tabsconfig.current[2]
let c4 = tabsconfig.current[3]
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<c1.component appearder={c1.appeared} selected={current === 0}/>
<c2.component appearder={c2.appeared} selected={current === 1}/>
<c3.component appearder={c3.appeared} selected={current === 2}/>
<c4.component appearder={c4.appeared} selected={current === 3}/>
`})}),`
`,e.jsx(n.p,{children:"然后，我们就会发现，在编译结果中，不再缓存 map 表达式的结果，而是缓存每一个组件"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`let t5;

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
`,e.jsx(n.p,{children:"这样做的收益在特定场景下的收益将会非常高。因为我们这里省掉了其他页面的 re-render，有的时候，我们的 tab 页面可能有十多个。"}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"1"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"总结一下：强悍的性能：细粒度记忆化更新"})}),`
`,e.jsx(n.p,{children:"经过前面原理的分析与多个案例的分析，想必各位道友对 React Compiler 的工作机制已经有了非常深刻的理解。此时，我们就需要分析一下，这样的记忆化更新机制，到底有多强。"}),`
`,e.jsx(n.p,{children:"首先明确一点，和 Vue 等其他框架的依赖收集不同，React Compiler 依然不做依赖收集。"}),`
`,e.jsx(n.p,{children:"React 依然通过从根节点自上而下的 diff 来找出需要更新的节点。在这个过程中，我们会通过大量的判断来决定使用缓存值。可以明确的是，Compiler 编译之后的代码，缓存命中的概率非常高，几乎所有应该缓存的元素和函数都会被缓存起来。"}),`
`,e.jsx(n.p,{children:"**因此，React Compiler 也能够在不做依赖收集的情况下，做到元素级别的超级细粒度更细。**但是，这样做的代价就是，React 需要经历大量的判断来决定是否需要更新。"}),`
`,e.jsx(n.p,{children:"所以这个时候，我们就需要明确，我所谓的大量判断的时间成本，到底有多少？它会不会导致新的性能问题？"}),`
`,e.jsx(n.p,{children:"可以看到，几乎所有的比较都是使用了全等比较，因此，我们可以写一个例子来感知一下，超大量的全等比较到底需要花费多少时间。"}),`
`,e.jsx(n.p,{children:"测试代码如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`export default function Demo02() {
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
`,e.jsx(m,{reload:!0,children:e.jsx(S,{})}),`
`,e.jsxs(n.p,{children:["由于 for 循环本身也会消耗一点时间，因此我这里单独列出来了 for 循环中不执行任何逻辑的耗时结果。我们可以多次点击 ",e.jsx(n.code,{children:"reload"})," 按钮查看耗时波动。"]}),`
`,e.jsx(n.p,{children:"执行结果发现，在我的设备上，在 for 循环中比较 100 万次，总花费时间在 0.5ms 到 1.5ms 之间波动，而且通过对比我们可以知道，这里边的耗时的一大部分是 for 循环的逻辑。如果去除 for 循环的耗时，我们会发现，纯粹的比较耗时可能仅 0.1ms 到 0.5ms 之间。"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"由于执行耗时有小范围的波动，因此有的时候下面的执行时间反而更短这是正常的"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"卧槽(¬д¬。)，这太强了啊"}),"。"]}),`
`,e.jsxs(n.p,{children:["我们很难有项目能够达到 1000,000 次的比较级别，甚至许多达到 10000 都难。那也就意味着，",e.jsx(n.strong,{children:"这里大量比较的时间成本，几乎可以忽略不计"}),"。因此，在执行速度上，Compiler 的之后性能表现将会非常强悍。"]}),`
`,e.jsxs(n.p,{children:["由此我们可以得出结论，",e.jsx(n.strong,{children:"经过 Compiler 优化的项目，可以以极低的时间成本，做到元素级别的细粒度更新。"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["这里我要明确的是，这样的性能表现，在之前版本的项目中，合理运用 ",e.jsx(n.code,{children:"useCallback/memo"})," 也能做到。只是由于对 React 底层默认命中规则不理解，导致大多数人不知道如何优化到这种程度。React Compiler 简化了这个过程"]}),`
`]}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"2"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"React Compiler 最佳实践"})}),`
`,e.jsx(n.p,{children:"有许多骚操作，React Compiler 并不支持，例如下面这种写法。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`{[1, 2, 3, 4, 5].map((counter) => {
  const [number, setNumber] = useState(0)
  return (
    <div key={\`hello\${counter}\`} onClick={() => setNumber(number + 1)}>
      number: {number}
    </div>
  )
})}
`})}),`
`,e.jsx(n.p,{children:"这个操作骚归骚，但是真的有大佬想要这样写。React 之前的版本依然不支持这种写法。不过好消息是，React 19 支持了..."}),`
`,e.jsx(n.p,{children:"但是 React Compiler 并不支持。对于这些不支持的语法，React Compiler 的做法就是直接跳过不编译，而直接沿用原组件写法。"}),`
`,e.jsx(n.p,{children:"因此，React Compiler 的最佳实践我总结了几条"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"1、不再使用 useCallback、useMemo、Memo 等缓存函数"}),`
`,e.jsx(n.li,{children:"2、丢掉闭包的心智负担，放心使用即可"}),`
`,e.jsx(n.li,{children:"3、引入严格模式"}),`
`,e.jsx(n.li,{children:"4、在你不熟悉的时候引入 eslint-plugin-react-compiler"}),`
`,e.jsx(n.li,{children:"5、当你熟练之后，弃用它，因为有的时候我们就是不想让它编译我们的组件"}),`
`,e.jsx(n.li,{children:"6、更多的使用 use 与 Action 来处理异步逻辑"}),`
`,e.jsx(n.li,{children:"7、尽可能少的使用 useEffect"}),`
`]}),`
`,e.jsxs(n.p,{children:["因此，一个小小的彩蛋就是，当你不希望你的组件被 Compiler 编译时，你只需要使用 ",e.jsx(n.code,{children:"var"})," 来声明状态即可。因为这不符合严格模式的语法规范"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`var [counter, setCounter] = useState(0)
`})}),`
`,e.jsxs(n.p,{children:["而你改成 ",e.jsx(n.code,{children:"const/let"}),"，它就会又重新编译该组件。可控性与自由度非常高。"]}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"3"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"总结"})}),`
`,e.jsx(n.p,{children:"React Compiler 在保持了对原有语法的弱侵入性的同时，又做到了保持了函数式编程的开发范式，并且弥补了之前可能存在性能问题的缺陷，这无疑是进一步确认了 React 在前端框架方向都领先地位。React Compiler 把虚拟 DOM 的性能表现推向了极致。和进几年声望比较大的 signal 相比，将不会存在性能短板，甚至由于并发模式的存在，React 项目的上限将会比其他前端框架更高。"}),`
`,e.jsx(n.p,{children:"并且 React Compiler 上手成本低，理解起来也不难，未来肯定会快速被大量开发者所接受。作为开发者我们只需要放心使用即可。"})]})}function _(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(x,{...r})}):x(r)}const T={"App.js":g,"Panel1.jsx":b,"Panel2.jsx":y,"Panel3.jsx":v,"Panel4.jsx":C,"Button.jsx":{code:j,hidden:!0}};function U(){return e.jsx(f,{files:T,renderArticle:r=>e.jsx(_,{components:{code:r}})})}export{U as default};
