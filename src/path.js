import {lazy} from 'react'

export const navigation = [{
  path: '',
  name: 'home',
  component: lazy(() => import('./pages/home'))
}, {
  path: 'motion',
  name: 'react motion',
  component: lazy(() => import('./pages/00_motion'))
}, {
  path: 'router/suspense',
  name: '路由跳转',
  component: lazy(() => import('./pages/00_router_suspense'))
}, {
  path: 'use/01',
  name: 'use(promise) 01',
  component: lazy(() => import('./pages/01_use_demo'))
}, {
  path: 'use/02',
  name: 'use(promise) 02',
  component: lazy(() => import('./pages/02_use_demo'))
}, {
  path: 'use/03',
  name: 'use(promise) 03',
  component: lazy(() => import('./pages/03_use_demo'))
},{
  path: 'use/03_1',
  name: 'use(promise) 03_update',
  component: lazy(() => import('./pages/03_use_demo_update'))
}, {
  path: 'use/04',
  name: 'use(promise) 04',
  component: lazy(() => import('./pages/04_use_demo'))
}, {
  path: 'use/05',
  name: 'use(promise) 05',
  component: lazy(() => import('./pages/05_use_demo'))
},{
  path: 'use/05_editor',
  name: 'react editor',
  component: lazy(() => import('./pages/05_editor'))
},{
  path: 'use/05_suspense',
  name: 'suspense',
  component: lazy(() => import('./pages/05_suspense'))
},{
  path: 'use/06',
  name: 'use(context) 01',
  component: lazy(() => import('./pages/06_use_context'))
},{
  path: 'use/07',
  name: 'form Action 01',
  component: lazy(() => import('./pages/07_action_demo'))
},{
  path: 'use/08',
  name: 'form Action 02',
  component: lazy(() => import('./pages/08_action_demo/index.jsx'))
},{
  path: 'use/09',
  name: 'useFormStatus()',
  component: lazy(() => import('./pages/09_useFormStatus'))
},{
  path: 'use/10',
  name: 'useForm(Action)State',
  component: lazy(() => import('./pages/10_useFormState'))
},{
  path: 'use/11',
  name: 'useOptimistic()',
  component: lazy(() => import('./pages/11_useOptimistic'))
},{
  path: 'use/11_0',
  name: 'useOptimistic() demo01',
  component: lazy(() => import('./pages/11_useOptimistic_demo1'))
},{
  path: 'use/11_1',
  name: 'useOptimistic() demo2',
  component: lazy(() => import('./pages/11_useOptimistic_demo2'))
},{
  path: 'use/11_2',
  name: 'useOptimistic() demo3',
  component: lazy(() => import('./pages/11_useOptimistic_demo3'))
},{
  path: 'use/12',
  name: 'async transition',
  component: lazy(() => import('./pages/12_async_transition'))
},{
  path: 'use/13',
  name: '增强的 ref',
  component: lazy(() => import('./pages/13_ref'))
},{
  path: 'use/14',
  name: 'useDeferredValue',
  component: lazy(() => import('./pages/14_useDeferredValue'))
},{
  path: 'use/1500',
  name: 'Compiler case 00',
  component: lazy(() => import('./pages/15_compiler_00'))
},{
  path: 'use/1501',
  name: 'Compiler case 01',
  component: lazy(() => import('./pages/16_compiler_01'))
},{
  path: 'use/1502',
  name: 'Compiler case 02',
  component: lazy(() => import('./pages/17_compiler_02'))
},{
  path: 'use/1503',
  name: 'Compiler case 03',
  component: lazy(() => import('./pages/18_compiler_03'))
},{
  path: 'use/1504',
  name: 'useDeferredValue',
  component: lazy(() => import('./pages/19_deferredValue'))
},{
  path: 'use/20',
  name: 'ref 更改',
  component: lazy(() => import('./pages/20_ref'))
},{
  path: 'tailwind/demo01',
  name: 'tailwind 初体验',
  component: lazy(() => import('./pages/tailwindemo01'))
}]


function init() {
  document.body.innerHTML = App()
}

function App() {
  return `<div>
    <h1>hello world</h1>
    ${Page1()}
  </div>`
}

var Page1Fiber = {
  count: undefined
}

function useState(value) {
  if (Page1Fiber.count === undefined) {
    Page1Fiber.count = value
  }
  function set(value) {
    console.log('inner: ', value)
    Page1Fiber.count = value
    init()
  }
  return [Page1Fiber.count, set]
}

function Page1() {
  const [count, setCount] = useState(0)
  console.log(count)
  function clickhandler() {
    setCount(count + 1)
  }
  window.clickhandler = clickhandler
  return `<div>
    hello Page1
    <div>xxxx3</div>
    <div>xxxx</div>
    <div>count: ${count}</div>
    <button onclick="clickhandler()">递增</button>
    ${Comp1(1, 2, 'xxo')}
  </div>`
}

function Comp1(a, b, c) {
  return `<div>
    <div>hello comp, ${a}</div>
    <h2>${b}</h2>
    <h3>${c}</h3>
  </div>`
}

// 渲染原理
// 1、初始化
// 2、更新的时候，如何渲染  angular - signal：只更新其中一部分  2、再次初始化
// 缺点：函数式：相同的输入，相同输出
