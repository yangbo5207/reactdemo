import React from 'react'

// 前言 1. 并发模式 2. compiler  3. use promise  4. use context   5. form Action  6. useOptimistic

export const navigation = [{
  type: 'tip',
  name: '前言'
}, {
  path: 'index',
  name: '1、开发方式变革',
  component: React.lazy(() => import('../change/index.jsx'))
}, {
  path: 'layers',
  name: '2、学习的三个层次',
  component: React.lazy(() => import('../layers/index.jsx'))
}, {
  path: 'create',
  name: '3、创建项目',
  component: React.lazy(() => import('../create/index.jsx'))
}, {
  type: 'tip',
  name: 'use(promise)'
}, {
  path: 'use/base',
  name: '3、use 基础知识',
  component: React.lazy(() => import('../usebase/index.jsx'))
}, {
  path: 'use/suspense',
  name: '4、Suspense',
  component: React.lazy(() => import('../usesuspense/index.jsx'))
}, {
  path: 'use/update',
  name: '5、点击更新数据',
  component: React.lazy(() => import('../useupdate/index.jsx'))
}, {
  path: 'use/initialize',
  name: '6、初始化请求并更新',
  component: React.lazy(() => import('../useInitializeUpdate/index.jsx'))
}, {
  path: 'use/updatetolist',
  name: '7、请求并新增到列表',
  component: React.lazy(() => import('../useUpdatetoList/index.jsx'))
}, {
  path: 'use/loadmore',
  name: '8、分页列表加载更多',
  component: React.lazy(() => import('../loadmore/index.jsx'))
}, {
  path: 'use/search',
  name: '9、搜索',
  component: React.lazy(() => import('../search/index.jsx'))
}, {
  path: 'use/tabs',
  name: '10、tab 简单切换',
  component: React.lazy(() => import('../tabs/index.jsx')),
  label: '1'
}, {
  path: 'use/tabshard',
  name: '11、tab 缓存切换',
  component: React.lazy(() => import('../tabshard/index.jsx')),
  label: '2'
}, {
  path: 'use/fromchildren',
  name: '12、父级获取数据',
  component: React.lazy(() => import('../tabscount/index.jsx')),
  label: '3'
}, {
  path: 'use/nest',
  name: '13、Suspense 嵌套',
  component: React.lazy(() => import('../usenest/index.jsx'))
}, {
  path: 'use/react16',
  name: '14、在低版本中使用',
  component: React.lazy(() => import('../usewithreact16/index.jsx'))
}, {
  type: 'tip',
  name: 'use(context)'
}, {
  path: 'use/ref',
  name: '15、ref 调整',
  component: React.lazy(() => import('../contextref/index.jsx'))
}, {
  path: 'use/modal',
  name: '16、自定义弹窗组件',
  component: React.lazy(() => import('../contextmodal/index.jsx'))
}, {
  path: 'use/contextmodify',
  name: '17、弹窗中更改内容',
  component: React.lazy(() => import('../contextmodify/index.jsx'))
}, {
  path: 'use/skinswitch',
  name: '18、皮肤切换次数',
  component: React.lazy(() => import('../contextcount/index.jsx'))
}, {
  type: 'tip',
  name: '并发 API'
}, {
  path: 'use/deferred',
  name: '19、useDeferredValue',
  component: React.lazy(() => import('../deferred/index.jsx'))
}, {
  path: 'use/transition',
  name: '20、useTransition',
  component: React.lazy(() => import('../useTransition/index.jsx'))
}, {
  type: 'tip',
  name: 'Compiler'
}, {
  path: 'use/importwith19',
  name: '21、React 19 中引入',
  component: React.lazy(() => import('../compilerimport19/index.jsx'))
},{
  path: 'use/importwithlower',
  name: '22、低版本中引入',
  component: React.lazy(() => import('../compilerimportlower/index.jsx'))
},{
  path: 'use/compilerbase',
  name: '23、Compiler 原理',
  component: React.lazy(() => import('../05_suspense/index.jsx'))
}, {
  path: 'use/06',
  name: '11、use(context) 01',
  component: React.lazy(() => import('../06_use_context/index.jsx'))
}, {
  type: 'tip',
  name: 'form action'
},{
  path: 'use/07',
  name: 'form Action 01',
  component: React.lazy(() => import('../07_action_demo/index.jsx'))
},{
  path: 'use/08',
  name: 'form Action 02',
  component: React.lazy(() => import('../08_action_demo/index.jsx'))
},{
  path: 'use/09',
  name: 'useFormStatus()',
  component: React.lazy(() => import('../09_useFormStatus/index.jsx'))
},{
  path: 'use/10',
  name: 'useForm(Action)State',
  component: React.lazy(() => import('../10_useFormState/index.jsx'))
}, {
  type: 'tip',
  name: 'useOptimistic'
},{
  path: 'use/11',
  name: 'useOptimistic()',
  component: React.lazy(() => import('../11_useOptimistic/index.jsx'))
},{
  path: 'use/11_0',
  name: 'useOptimistic() demo01',
  component: React.lazy(() => import('../11_useOptimistic_demo1/index.jsx'))
},{
  path: 'use/11_1',
  name: 'useOptimistic() demo2',
  component: React.lazy(() => import('../11_useOptimistic_demo2/index.jsx'))
},{
  path: 'use/11_2',
  name: 'useOptimistic() demo3',
  component: React.lazy(() => import('../11_useOptimistic_demo3/index.jsx'))
},{
  path: 'use/12',
  name: 'async transition',
  component: React.lazy(() => import('../12_async_transition/index.jsx'))
},{
  path: 'use/13',
  name: '增强的 ref',
  component: React.lazy(() => import('../13_ref/index.jsx'))
},{
  path: 'use/14',
  name: 'useDeferredValue',
  component: React.lazy(() => import('../14_useDeferredValue/index.jsx'))
}, {
  type: 'tip',
  name: 'Compiler'
}, {
  path: 'use/1500',
  name: 'Compiler case 00',
  component: React.lazy(() => import('../15_compiler_00/index.jsx'))
},{
  path: 'use/1501',
  name: 'Compiler case 01',
  component: React.lazy(() => import('../16_compiler_01/index.jsx'))
},{
  path: 'use/1502',
  name: 'Compiler case 02',
  component: React.lazy(() => import('../17_compiler_02/index.jsx'))
},{
  path: 'use/1503',
  name: 'Compiler case 03',
  component: React.lazy(() => import('../18_compiler_03/index.jsx'))
},{
  path: 'use/1504',
  name: 'useDeferredValue',
  component: React.lazy(() => import('../19_deferredValue/index.jsx'))
},{
  path: 'use/20',
  name: 'ref 更改',
  component: React.lazy(() => import('../20_ref/index.jsx'))
},{
  path: 'tailwind/demo01',
  name: 'tailwind 初体验',
  component: React.lazy(() => import('../tailwindemo01/index.jsx'))
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
