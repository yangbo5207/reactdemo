import{j as n,c as r}from"./index-B75hTygv.js";import"./Preview-Bj6s79pd.js";import{A as a}from"./index-Qgvc3jsz.js";import"./atom-one-light-BQMUJUMb.js";const o=`import { useState, Suspense } from 'react';
import List from './List'
import Button from './Button'
import Skeleton from './Skeleton'
import {fetchList} from './api.js'

const Index = () => {
  const [promises, increasePromise] = useState(() => [fetchList()])

  const onLoadMore = () => {
    increasePromise([...promises, fetchList()])
  };

  return (
    <>
      {promises.map((promise, i) => (
        <Suspense fallback={<Skeleton />} key={\`hello \${i}\`}>
          <List promise={promise} />
        </Suspense>
      ))}
      <div className='text-center my-4'>
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    </>
  );
};
export default Index;
`,l=`import {twMerge} from 'tailwind-merge'
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
`,c=`const count = 3;
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;

export const fetchList = async () => {
  const res = await fetch(fakeDataUrl)
  return res.json()
}
`,p=`export default function Skeleton(props) {
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
`,d=`<!DOCTYPE html>
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
`,m=`import { use } from 'react';
export default function CurrentList({promise}) {
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
                <div className='text-gray-400 mt-3 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
              </div>
            </div>

            <div className='mt-4 line-clamp-2 text-sm'>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</div>
          </div>

          <img
            className='w-52 ml-2'
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        </div>
      ))}
    </div>
  )
}
`;function t(s){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"我们可以在思维上将上一节课的解决方案扩展到分页列表中，加载更多的场景。"}),`
`,n.jsx(e.p,{children:"这里唯一的一个小区别就是，上一章中，我们只在 promise 中存储了一条数据。如果我们将一页数据也存在 promise 中呢？"}),`
`,n.jsx(e.p,{children:"加载更多的分页逻辑就会变得非常简单。为了方便演示，我们这里以一页数据只有三条为例。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"大多数情况是一页 10 条，这个可根据具体的实践需求随时改动"}),`
`]}),`
`,n.jsxs(e.p,{children:["首先简单约定接口，该接口返回一页数据。",n.jsx(e.code,{children:"3条"})]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["你也可以在右侧演示案例的 ",n.jsx(e.code,{children:"api.js"})," 中，修改 count = 10 查看一页数据 10 条的演示效果"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// api.js
const count = 3;
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;

export const fetchList = async () => {
  const res = await fetch(fakeDataUrl)
  return res.json()
}
`})}),`
`,n.jsx(e.p,{children:"然后定义一个可以遍历显示一页数据的组件。该组件接收一个 promise，并使用 use 读取请求结果。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// List.jsx
import { use } from 'react';
export default function CurrentList({promise}) {
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
                <div className='text-gray-400 mt-3 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
              </div>
            </div>

            <div className='mt-4 line-clamp-2 text-sm'>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</div>
          </div>

          <img
            className='w-52 ml-2'
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        </div>
      ))}
    </div>
  )
}
`})}),`
`,n.jsx(e.p,{children:"此时我们稍微梳理一下逻辑，首先我们有多个 promise，然后每个 promise 中有一页数据，因此，我们可以遍历 promise，并在遍历中渲染能显示一页数据的 List 组件。"}),`
`,n.jsx(e.p,{children:"因此，我们首先要定义一个状态用于保存 promise 数组"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const [promises, increasePromise] = useState(() => [fetchList()])
`})}),`
`,n.jsxs(e.p,{children:["初始化时需要渲染一页数据，所以我们设置该数组的默认值为 ",n.jsx(e.code,{children:"[fetchList()]"})]}),`
`,n.jsx(e.p,{children:"loadmore 事件触发之后，我们只需要往该数组中新增一个 promise 即可"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const onLoadMore = () => {
  increasePromise([...promises, fetchList()])
};
`})}),`
`,n.jsxs(e.p,{children:["然后遍历 promises，在遍历中使用 ",n.jsx(e.code,{children:"Suspense"})," 包裹内部有 use 逻辑的 List 组件"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`{promises.map((promise, i) => (
  <Suspense fallback={<Skeleton />} key={\`hello \${i}\`}>
    <List promise={promise} />
  </Suspense>
))}
`})}),`
`,n.jsx(e.p,{children:"完整的代码与演示效果请查看右侧案例。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"分页参数的维护、最后一页的判断，大家在实践中要自行维护，这里只做方案的演示，没有考虑所有边界情况"}),`
`]})]})}function u(s={}){const{wrapper:e}=s.components||{};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}const x={"App.js":o,"api.js":c,"List.jsx":m,"Button.jsx":l,"Skeleton.jsx":p,"/public/index.html":d};function j(){const s=r.c(1);let e;return s[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(a,{files:x,renderArticle:i=>n.jsx(u,{components:{code:i}})}),s[0]=e):e=s[0],e}export{j as default};
