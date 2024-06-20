import{j as e,c as l,G as d,S as m}from"./index-B75hTygv.js";import{g as p,h,a as u}from"./atom-one-light-BQMUJUMb.js";const x=`import React, { useEffect, useState, Suspense, use } from 'react';
import Button from './Button'
import Skeleton from './Skeleton'
import {fetchList} from './api'

const Index = () => {
  const [promises, increasePromise] = useState(() => [fetchList()])

  const onLoadMore = () => {
    promises.push(fetchList())
    increasePromise([...promises])
  };

  return (
    <>
      <div className='text-xs border-b border-gray-100 py-2 mb-4 text-gray-500 sticky top-0 bg-white'>
        案例演示：点击按钮加载更多
      </div>
      {promises.map((promise, i) => (
        <Suspense fallback={<Skeleton />} key={\`hello \${i}\`}>
          <CurrentList promise={promise} />
        </Suspense>
      ))}
      <div className='text-center my-4'>
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    </>
  );
};
export default Index;


function CurrentList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={item.name.last} className='flex border-b py-4 mx-4 items-center'>
          <div className='flex-1'>
            <div className='flex'>
              <img className='w-14 h-14 rounded-full' src={item.picture.large} alt='' />
              <div className='flex-1 ml-4'>
                <div className='font-bold'>{item.name.last}</div>
                <div className='text-gray-400 mt-3 text-sm line-clamp-1'>Ant Design, a design language for background applications, is refined by Ant UED Team</div>
              </div>
            </div>

            <div className='mt-4 line-clamp-2 text-sm'>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</div>
          </div>

          <img
            className='w-60 ml-2'
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        </div>
      ))}
    </div>
  )
}
`,g=`import {twMerge} from 'tailwind-merge'
import clsx from 'clsx'

document.documentElement.style.fontSize = '14px'
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
`,f=`const count = 3;
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;

export const fetchList = async () => {
  const res = await fetch(fakeDataUrl)
  return res.json()
}
`,b=`export default function Skeleton(props) {
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
`,j=`<!DOCTYPE html>
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
`;function a(n){const t={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.p,{children:"这篇文章文字内容不会很多，但是是整个专栏最重要的部分之一。"}),`
`,e.jsx(t.p,{children:"本专栏会围绕如下三个层次逐渐为大家由浅入深分析 React19 的学习，他们确保了我们的学习方向的正确性与难度的循序渐进。"}),`
`,e.jsx(t.h2,{children:e.jsx(t.em,{children:"0"})}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"初级版：优化异步开发体验"})}),`
`,e.jsx(t.p,{children:"React 19 引入了好几个新的 hook 用于优化异步开发体验。"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`use
useActionState
useFormStatus
usePotimistic
`})}),`
`,e.jsx(t.p,{children:"他们的主要目的是试图在项目开发中，引导开发者削弱 useEffect 的使用。因此我们在实践案例中，需要谨记这个核心思想，不至于在开发中偏离轨迹，而忽视了新 hook 的强大能力。"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"注：并非完全不用 useEffect"}),`
`]}),`
`,e.jsx(t.p,{children:"如果你只是专注于项目开发，学习到这里基本上已经可以了。因为大多数项目涉及不到更高的理解层次。大多数 React 开发者也很难通过自学有更强的理解。"}),`
`,e.jsx(t.h2,{children:e.jsx(t.em,{children:"1"})}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"进阶版：强化并发模式"})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"只有少部分顶级前端开发需要关注并发模式。"})," 他的理解难度并不低。充分消化并发模式并运用于实践能够让一个前端程序员完成蜕变，你可以很容易突破前端开发的瓶颈。"]}),`
`,e.jsx(t.p,{children:"在 React 中，并发模式并非是一个新概念。在 React Fiber 架构提出之初，我们就陆陆续续的听说了它。"}),`
`,e.jsx(t.p,{children:"但是经过好几个大版本的迭代，并发模式在开发者中的感受并不深刻。甚至由于之前设计的几个并发模式的 API 不好用，导致很多开发者也对 React 的并发模式并不感兴趣。"}),`
`,e.jsx(t.p,{children:"React 19 简化和改进了并发模式，让并发模式更加易于使用。例如，React 19 重新设计并改进了 Suspense，它支持更好的代码逻辑拆分，我们就可以在普通的页面开发中轻松的使用它。"}),`
`,e.jsx(t.p,{children:"因此，我认为，我们是时候拥抱并发模式了。我专门为并发模式设计了一个完整的模块，供大家学习。我们会经历从理论到实践的一个完整学习过程。"}),`
`,e.jsx(t.h2,{children:e.jsx(t.em,{children:"2"})}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"顶级版：深入理解 React Compiler"})}),`
`,e.jsxs(t.p,{children:["毫无疑问，React Compiler 的使用一定是简单的，但是对于其原理的透彻理解，就需要一点底子了。很显然，这",e.jsx(t.strong,{children:"必定会称为面试中的常客"}),"。因此，如果你希望在面试中有一个更好的表现，对其实现原理如数家珍会为你",e.jsx(t.strong,{children:"上大分"}),"。"]}),`
`,e.jsx(t.p,{children:"当然，如果你并不需要在面试中通过表达自己对 Compiler 的理解来加分，那么这一部分也是可以不需要学习的。"}),`
`,e.jsx(t.p,{children:"正是由于他的必要性不是很高，我才把这一部分内容放到专栏的最后一个部分。理解它在项目开发中的实用价值并不高。"}),`
`,e.jsx(t.p,{children:"透彻理解 React Compiler 的原理，需要对现有 React 的底层原理有一个大概的了解，这样我们才能形成一个完整的知识体系闭环。学习之前，做好这个心理准备和知识铺垫即可。"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["在 隔壁的合集 ",e.jsx(t.strong,{children:"React 知命境"})," 中，我有几篇高质量的文章介绍了 React 的底层原理，读者朋友们可以去看看。"]}),`
`]})]})}function v(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}const y={"App.js":x,"api.js":f,"Button.jsx":g,"Skeleton.jsx":b,"/public/index.html":j};function w({className:n,...t}){const s=/language-(\w+)/.exec(n||"");return s?e.jsx(h,{language:s[1],PreTag:"div",...t,style:u}):e.jsx("code",{className:n,...t})}function S(){const n=l.c(6);let t,s;n[0]===Symbol.for("react.memo_cache_sentinel")?(t=e.jsx(v,{components:{code:w}}),s=e.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),n[0]=t,n[1]=s):(t=n[0],s=n[1]);let r;n[2]===Symbol.for("react.memo_cache_sentinel")?(r=e.jsxs("div",{className:"md:w-[40%] pr-4 keep",children:[t,s,e.jsx(d,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"\\u6B22\\u8FCE\\u9053\\u53CB",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",crossorigin:"anonymous",async:!0})]}),n[2]=r):r=n[2];let i,c;n[3]===Symbol.for("react.memo_cache_sentinel")?(i={externalResources:["https://cdn.tailwindcss.com"],editorHeight:"auto"},c={dependencies:{react:"19.0.0-rc-dfd30974ab-20240613","react-dom":"19.0.0-rc-dfd30974ab-20240613","tailwind-merge":"latest",clsx:"latest"}},n[3]=i,n[4]=c):(i=n[3],c=n[4]);let o;return n[5]===Symbol.for("react.memo_cache_sentinel")?(o=e.jsx("div",{children:e.jsxs("div",{className:"mt-5 md:flex",children:[r,e.jsx("div",{className:"md:w-[60%] sticky top-[8rem] h-[calc(100vh_-_8rem-35px)] overflow-y-auto",children:e.jsx(m,{template:"react",theme:p,options:i,customSetup:c,files:y})})]})}),n[5]=o):o=n[5],o}export{S as default};
