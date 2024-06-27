import{c as b,j as n,r as j}from"./index-CKuzEZT2.js";import{C as S}from"./Cardruntime-tClLpz24.js";import{A as N}from"./index--XoUEj4u.js";import"./index-C7Jph34V.js";import"./atom-one-light-B1cH31dZ.js";import"./Preview-B-0qojbv.js";const y=`import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import Tabs from './Tabs'
import List from './List'

const tabs = [
  { name: 'My Account', href: '#', current: true },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
]


export default function Example() {
  const [current, switchToSelected] = useState(0)
  const [promise, update] = useState(() => fetchListWithCancel(5))

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)

    promise.cancel()
    const len = Math.floor(Math.random() * 10)
    update(fetchListWithCancel(len))
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />

      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,T=`export const fetchList = async (number) => {
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
`,w=`document.documentElement.style.fontSize = '14px'

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
`,C=`import { use } from 'react';
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
`,k=`function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs({tabs, onSwitch}) {
  return (
    <div>
      <div className="hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current).name}
          onChange={(e) => onSwitch(e.target.selectedIndex)}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab, i) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
              aria-current={tab.current ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                onSwitch(i)
              }}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
`;function _(...t){return t.filter(Boolean).join(" ")}function L(t){const e=b.c(23),{tabs:r,onSwitch:a}=t;let f;e[0]===Symbol.for("react.memo_cache_sentinel")?(f=n.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),e[0]=f):f=e[0];let i;if(e[1]!==r){let s;e[3]===Symbol.for("react.memo_cache_sentinel")?(s=c=>c.current,e[3]=s):s=e[3],i=r.find(s),e[1]=r,e[2]=i}else i=e[2];let l;e[4]!==a?(l=s=>a(s.target.selectedIndex),e[4]=a,e[5]=l):l=e[5];let o;if(e[6]!==r){let s;e[8]===Symbol.for("react.memo_cache_sentinel")?(s=c=>n.jsx("option",{children:c.name},c.name),e[8]=s):s=e[8],o=r.map(s),e[6]=r,e[7]=o}else o=e[7];let d;e[9]!==i.name||e[10]!==l||e[11]!==o?(d=n.jsxs("div",{className:"hidden",children:[f,n.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:i.name,onChange:l,children:o})]}),e[9]=i.name,e[10]=l,e[11]=o,e[12]=d):d=e[12];let m;if(e[13]!==a||e[14]!==r){let s;e[16]!==a?(s=(c,g)=>n.jsx("a",{href:c.href,className:_(c.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":c.current?"page":void 0,onClick:v=>{v.preventDefault(),a(g)},children:c.name},c.name),e[16]=a,e[17]=s):s=e[17],m=r.map(s),e[13]=a,e[14]=r,e[15]=m}else m=e[15];let u;e[18]!==m?(u=n.jsx("div",{className:"block",children:n.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:m})}),e[18]=m,e[19]=u):u=e[19];let p;return e[20]!==d||e[21]!==u?(p=n.jsxs("div",{children:[d,u]}),e[20]=d,e[21]=u,e[22]=p):p=e[22],p}const h=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function M(){const[t,e]=j.useState(0);function r(a){h[t].current=!1,h[a].current=!0,e(a)}return n.jsxs("div",{children:[n.jsx(L,{tabs:h,onSwitch:r}),n.jsxs("div",{className:"mt-4 text-gray-500",children:["当前选中：",h[t].name]})]})}function x(t){const e={code:"code",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"Tab 切换的过程中，请求接口也是日常开发中非常常见的交互方式。不过 tabs 切换的情况比较多，很考验开发者的个人能力。我们准备了三个不同的场景以供大家直接学习。"}),`
`,n.jsxs(e.p,{children:["第一个案例比较简单。是",n.jsx(e.strong,{children:"多对一"}),"：多个 tab 按钮，对应一个组件。具体表现为按钮切换时，该组件本身重新获取数据渲染。演示效果如右侧案例所示。"]}),`
`,n.jsxs(e.p,{children:["首先，我们需要先封装一个 Tab 切换按钮。具体的封装代码可以查看右面的 ",n.jsx(e.code,{children:"Tabs.jsx"})," 文件。"]}),`
`,n.jsx(e.p,{children:"然后使用一下，检测一下效果"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import {useState, Suspense} from 'react'
import Tabs from './Tabs'

const tabs = [
  { name: 'My Account', href: '#', current: true },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
]

export default function Example() {
  const [current, switchToSelected] = useState(0)

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />
      <div className='mt-4 text-gray-500'>
        当前选中：{tabs[current].name}
      </div>
    </div>
  )
}
`})}),`
`,n.jsx(S,{reload:!0,children:n.jsx(M,{})}),`
`,n.jsx(e.p,{children:"这里需要注意观察的是，案例中我们对 tabs 数据和 current 当前选中项的一个管理方式。在使用过程中，我们可以尽量减少对于 state 的使用，能不用就不用。但是许多人在开发过程中会非常依赖于 state，管理不善时，可能会导致数据的大量冗余 re-render 产生。这里当我们切换点击时，会修改两个数据，但是最终只有一个 state 变化。"}),`
`,n.jsx(e.p,{children:"接下来的事情就比较简单了，跟之前的案例一样，只需要在切换时，通过改变 promise 的方式请求接口即可。"}),`
`,n.jsx(e.p,{children:"所以我们需要声明一个新的状态 promise"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const [promise, update] = useState(() => fetchListWithCancel(5))
`})}),`
`,n.jsx(e.p,{children:"然后再点击时重新请求并修改 state promise 即可。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`function __handler(index) {
  tabs[current].current = false
  tabs[index].current = true
  switchToSelected(index)

+ promise.cancel()
+ const len = Math.floor(Math.random() * 10)
+ update(fetchListWithCancel(len))
}
`})}),`
`,n.jsx(e.p,{children:"这里我们依然需要取消上一次请求是因为可能有的使用者会连续快速切换，我们可以通过取消为完成请求的方式让页面响应变得合理与流畅。完整的案例请看右侧区域。"})]})}function A(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(x,{...t})}):x(t)}const E={"App.js":y,"api.js":T,"List.jsx":C,"Tabs.jsx":k,"Skeleton.jsx":w};function I(){const t=b.c(1);let e;return t[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(N,{files:E,renderArticle:r=>n.jsx(A,{components:{code:r}})}),t[0]=e):e=t[0],e}export{I as default};
