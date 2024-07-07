import{c as i,r as p,j as n}from"./index-oFmtIK6i.js";import{C as m}from"./Cardruntime-CDREzpNb.js";import{A as u}from"./index-joL20ffn.js";import"./index-DiYRcp-t.js";import"./index-DMQVh9lL.js";import"./Preview-D7Xnvlpj.js";import"./atom-one-light-q7r8Raww.js";const x=`import {Suspense, useState, useTransition} from 'react'
import Message from './Message'
import Button from './Button'
import Skeleton from './Skeleton'
import {getApi} from './api'

export default function App() {
  const [response, setApi] = useState(getApi)
  const [isPending, startTransition] = useTransition()

  function __clickToGetMessage() {
    startTransition(() => {
      setApi(getApi())
    })
  }

  return (
    <div>
      <Button onClick={__clickToGetMessage} disabled={isPending}>
        点击更新
      </Button>

      <Suspense fallback={<Skeleton />}>
        <Message response={response} isPending={isPending} />
      </Suspense>
    </div>
  )
}
`,j=`const random = [
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

export const getApi = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {
    value: random[i]
  }
}
`,g=`import { use } from 'react'

const Message = (props) => {
  const {isPending, response} = props
  const content = use(response)
  return (
    <div className='text-sm leading-6 transition border border-blue-100 shadow rounded-md p-4 w-full mt-4' style={{opacity: isPending ? 0.5 : 1}}>
      {content.value}
    </div>
  )
}
export default Message
`,f=`document.documentElement.style.fontSize = '14px'

export default function Skeleton(props) {
  return (
    <div className="border border-blue-100 shadow rounded-md p-4 w-full mt-4">
      <div className="animate-pulse">
        <div className="flex-1 space-y-3 py-1">
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
`,b=`import {twMerge} from 'tailwind-merge'
import clsx from 'clsx'

// 本组件只是一个简单的 UI 组件，学习时无需多过关注

export default function Button(props) {
  const {className, primary, danger, sm, lg, success, ...other} = props
  const base = 'rounded-md border border-transparent font-medium cursor-pointer transition'

  // type
  const normal = 'bg-gray-100 hover:bg-gray-200'

  // size
  const md = 'text-xs py-2 px-4'

  const cls = twMerge(clsx(base, normal, md, {
    // type
    ['bg-blue-500 text-white hover:bg-blue-600']: primary,
    ['bg-red-500 text-white hover:bg-red-600']: danger,
    ['bg-green-500 text-white hover:bg-green-600']: success,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
  }))

  return (
    <button className={cls} {...other}>{props.children}</button>
  )
}
`,y=s=>{const e=i.c(5),{isPending:r,response:t}=s,o=p.use(t),l=r?.5:1;let c;e[0]!==l?(c={opacity:l},e[0]=l,e[1]=c):c=e[1];let a;return e[2]!==c||e[3]!==o.value?(a=n.jsx("div",{className:"text-sm leading-6 transition border border-blue-100 shadow rounded-md p-4 w-full mt-4",style:c,children:o.value}),e[2]=c,e[3]=o.value,e[4]=a):a=e[4],a};document.documentElement.style.fontSize="14px";function v(s){const e=i.c(2);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx("div",{className:"h-2 bg-slate-200 rounded"}),e[0]=r):r=e[0];let t;return e[1]===Symbol.for("react.memo_cache_sentinel")?(t=n.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:n.jsx("div",{className:"animate-pulse",children:n.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[r,n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),n.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})})}),e[1]=t):t=e[1],t}const R=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var h=new Headers;h.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var k={method:"GET",headers:h,redirect:"follow",data:"hex"};const w="https://echo.apifox.com/delay/1",S=async()=>{await fetch(w,k);const s=Math.floor(Math.random()*10)%5;return{value:R[s]}};function N(){const s=i.c(3);let e;s[0]===Symbol.for("react.memo_cache_sentinel")?(e=S(),s[0]=e):e=s[0];const r=e;let t;s[1]===Symbol.for("react.memo_cache_sentinel")?(t=n.jsx(v,{}),s[1]=t):t=s[1];let o;return s[2]===Symbol.for("react.memo_cache_sentinel")?(o=n.jsx(p.Suspense,{fallback:t,children:n.jsx(y,{response:r})}),s[2]=o):o=s[2],o}function d(s){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:n.jsx(e.em,{children:"0"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"序"})}),`
`,n.jsx(e.p,{children:"目前写 React 19 的文章已经有很多很多了，但是，写到点子上的并不多。包括官方文档，只是简单的罗列出了它新增了一些 hook，一些特性，却并没有进一步说明这些 hook 背后所代表的含义，它们的最佳实践是什么。"}),`
`,n.jsx(e.p,{children:"以至于，在这个时间节点，期待 React 19 的人也并不是很多。"}),`
`,n.jsxs(e.p,{children:["但是，我要告诉大家的是，",n.jsx(e.strong,{children:"我们都严重低估了 React 19"}),"。"]}),`
`,n.jsx(e.p,{children:"经过我长达两个月的使用体验，我的感受就是："}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"我们的开发方式，又要迎来一次重大升级了。"})," 因为新的 hook 真的太好用了。"]}),`
`,n.jsx(e.p,{children:"所以我准备写一系列合集，为大家完整、详细的介绍 React 19 的新的最佳实践。在后续的文章中，我会详细分析新的开发方式的思考。相关的实践案例我已经写完，后续的二十多篇文章预计会在 React19 正式发布之前完成。大家可以保持持续关注。"}),`
`,n.jsx(e.p,{children:"和过去的 React 版本相比，React 19 主要从如下两个方面带来了显著的提升。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"性能"})}),`
`,n.jsx(e.p,{children:"最近几年，许多其他前端框架纷纷拥抱基于 Signal 的细粒度更新，在特定场景有接近原生开发的性能体验，把前端框架的性能问题推上了风口浪尖。而 React 基于 Fiber 的 Diff 更新则自然而然的成为了最大的缺陷与短板。大量冗余 re-render 造成的性能损耗，是 React 不得不面对的挑战。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"注：细粒度更新并非所有场景都具有明显的优势，也不要完全相信框架而忽视掌握性能优化技能的重要性"}),`
`]}),`
`,n.jsxs(e.p,{children:["虽然 React 提供了 ",n.jsx(e.code,{children:"memo/useMemo/useCallback"})," 来帮助开发者优化项目性能。但是他们的学习成本并不低，想要在项目中得心应手的使用他们更是不易。这就造成了许多团队在没有完全消化他们的情况下，对他们的使用存在滥用的情况。"]}),`
`,n.jsxs(e.p,{children:["在这样的背景之下，React 19 将会推出 ",n.jsx(e.strong,{children:"React Compiler"}),"，在开发者不调整任何代码的情况下，自动优化项目性能。"]}),`
`,n.jsxs(e.p,{children:["React Compiler 能够帮助我们在不使用 ",n.jsx(e.code,{children:"memo/useMemo/useCallback"})," 的情况下，方便得处理好项目 re-render 的问题。你的项目最终只会在需要更新的地方 re-render。"]}),`
`,n.jsx(e.p,{children:"并且最重要的是，React Compiler 编译之后，你的代码并不会改变现有渲染机制，而是在已有机制下完成对项目的优化。React Compiler 的愿景非常庞大，他需要在兼顾大量老项目的情况下，做到对项目的性能优化。因此与提出一个新的解决方案相比，他的开发难度要高出很多。破坏性更新显得更加容易，但是对于开发者和大量老项目而言，这是一种严重的伤害。React Compiler 则选择了最难搞的一种更新方式。"}),`
`,n.jsx(e.p,{children:"与依赖追踪的细粒度更新不同，React Compiler 通过记忆的方式，让组件更新只发生在需要更新的组件，从而减少大量 re-render 的组件，我会在后续的章节中详细介绍他的使用原理。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"但是请注意，React Compiler 并非全能，如果你写的代码过于灵活，无法被提前预判执行行为，那么 React Compiler 将会跳过这一部分的优化。因此好的方式是在项目中引入严格模式，在严格模式的指导下完成的开发，基本都在 React Compiler 的辐射范围之内"}),`
`]}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"2"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"开发体验"})}),`
`,n.jsxs(e.p,{children:["与性能带来的提升相比，真正令我非常期待的是，React 19 将会迎来一次",n.jsx(e.strong,{children:"开发体验的重大提升"}),"。毕竟没有 React Compiler，我自己也能优化好我的项目性能。"]}),`
`,n.jsxs(e.p,{children:["开发体验的提升主要体现在，",n.jsxs(e.strong,{children:["React 19 之后，我们可能不再那么需要 ",n.jsx(e.code,{children:"useEffect"})]})," 了。"]}),`
`,n.jsx(e.p,{children:"useEffect 是一个功能强大的 hook，但他又是最难驾驭的一个 hook，理解不够的开发者可能会由于滥用它而导致项目失控。包括被讨论最多的闭包问题，也往往跟它有关。其中最考验开发者水平的，是对于 useEffect 依赖项的正确处理。"}),`
`,n.jsxs(e.p,{children:["React19 的 大部分更新，几乎都是围绕如何在开发中尽量不用或者少用 useEffect 来展开。在之前的项目开发中，",n.jsx(e.code,{children:"useEffect"})," 是我们处理异步问题必须使用的重要 hook 之一，他几乎存在于每一个页面组件之中。"]}),`
`,n.jsxs(e.p,{children:["React 19 则引入了新的 hook，让我们",n.jsx(e.strong,{children:"处理异步开发时，不再需要"})," ",n.jsx(e.code,{children:"useEffect"}),"，从而极大的改变我们的开发方式。我会在后续的章节中，结合",n.jsx(e.strong,{children:"大量实践案例"}),"，一一介绍这些 API 的详细使用方法，确保每个读者都能彻底掌握他。"]}),`
`,n.jsxs(e.p,{children:["除此之外，React19 想要彻底改变我们在项目开发中的 UI 交互方式。因此对于 React19 而言，",n.jsx(e.code,{children:"Suspense、Action"})," 的重要性将会变得越来越高。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Suspense"})," 虽然早在 React18 中都能够被正常使用，但是由于异步请求方案的不成熟，它们并没有被普及开，包括 React 官方文档也并没有进一步说明如何触发 ",n.jsx(e.code,{children:"Suspense"})," 的回调机制。因此它们只是小范围的被一些顶尖的前端开发所使用。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<Suspense fallback={<div>loading...</div>}>
  <List api={__api} />
</Suspense>
`})}),`
`,n.jsxs(e.p,{children:["React19 之后，",n.jsx(e.strong,{children:"它们将会得到普及"}),"。这将会进一步深化组件解释一切的开发思想。"]}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"3"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"新的架构思维"})}),`
`,n.jsx(e.p,{children:"React 19 之前，React 高手与普通开发者之间，开发的项目无论是从性能上、还是从代码优雅上差距都非常大。因此不同的人对于 React 的感受完全不一样。"}),`
`,n.jsxs(e.p,{children:["而 React 19 则借由推出一些新的 hook，暗中传递一种",n.jsx(e.strong,{children:"框架思维"}),"「最佳实践」，这将会极大的拉进普通开发者与顶尖高手之间的差距。对于大多数 React 开发者而言，这会是一个极大的提升。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"这一意图在 React 新的官方文档与 Next.js 中体现得非常明显"}),`
`]}),`
`,n.jsxs(e.p,{children:["这一最佳实践主要围绕如何改进异步编程的开发体验而展开。在后续的章节中大家可以自行感受。我也会在后续的实践案例中弱化对 ",n.jsx(e.code,{children:"useEffect"})," 的使用。"]}),`
`,n.jsx(e.p,{children:"例如，当我想要实现如下效果时。"}),`
`,n.jsx(e.p,{children:"在项目开发中，新页面渲染时请求一个接口的场景非常常见。新的架构思维的开发代码如下所示。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"该案例没有引入任何三方库"}),`
`]}),`
`,n.jsx(e.p,{children:"首先我们需要定义一个 API 用于请求数据。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`export const getApi = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {
    value: random[i]
  }
}
`})}),`
`,n.jsx(e.p,{children:"需要注意的是，本案例中的 api 都使用的是模拟接口，许多数据无任何业务描述，仅用于呈现 UI 的显示和变化。因此写法会与实际开发过程中稍有差异。"}),`
`,n.jsx(e.p,{children:"然后创建一个函数组件，并执行该 api"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`export default function App() {
  const promise = getApi()

  return (
    <Suspense fallback={<Skeleton />}>
      <Message response={promise} />
    </Suspense>
  )
}
`})}),`
`,n.jsx(e.p,{children:"最后在子组件中，获取 api 执行之后得到的数据"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const Message = (props) => {
  const {response} = props
  const content = use(response)
  return (
    <div className='text-sm leading-6 transition border border-blue-100 shadow rounded-md p-4 w-full mt-4'>
      {content.value}
    </div>
  )
}
`})}),`
`,n.jsx(e.p,{children:"演示效果如下"}),`
`,n.jsx(m,{reload:!0,children:n.jsx(N,{})}),`
`,n.jsxs(e.p,{children:["大家可以自行感受一下新的开发方式与以前基于 ",n.jsx(e.code,{children:"useEffect"})," 请求数据有什么不同之处。我在右侧案例演示中，还提供了更完整更具代表性的案例。大家可以先瞄一眼体会一下。案例代码有对应的完整演示效果，你可以通过修改代码观察案例的变化。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"注意：一套成熟架构思维，不是使用一个简单的方案解决某一个问题，而是要基于这套思维去解决项目中的绝大多数场景。因此我们一定要结合大量的场景去理解一套项目架构思维。"}),`
`]}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"5"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"合集介绍"})}),`
`,n.jsxs(e.p,{children:["本合集名为：",n.jsx(e.strong,{children:"「React19 全解」"})," ，是 ",n.jsx(e.strong,{children:"「React 知命境」"})," 的续集。首发与公众号",n.jsx(e.a,{href:"",children:"这波能反杀"}),"。后为了提高大家的学习体验，迁移至此处。在这里我基于",n.jsx(e.strong,{children:"沉浸式"}),"的学习体验，内置了大量可操作可交互的真实案例。摒弃了使用截图演示案例的方式。除此之外，为了让大家能够获得更好的学习效果，每一个案例都精心设计了 UI。在细节上精心打磨，争取让大家能够所学即所得。快速掌握 React19."]}),`
`,n.jsx(e.p,{children:"希望大家能够在这里获得全网最好的学习体验！Let's go."})]})}function M(s={}){const{wrapper:e}=s.components||{};return e?n.jsx(e,{...s,children:n.jsx(d,{...s})}):d(s)}const A={"App.js":x,"api.js":j,"Message.jsx":g,"Skeleton.jsx":f,"Button.jsx":b};function P(){const s=i.c(1);let e;return s[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(u,{files:A,renderArticle:r=>n.jsx(M,{components:{code:r}})}),s[0]=e):e=s[0],e}export{P as default};
