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
  path: 'use/importwithwebpack',
  name: '23、webpack中引入',
  component: React.lazy(() => import('../compilerimportwebpack/index.jsx'))
},{
  path: 'use/compilerbase',
  name: '24、Compiler 编译原理',
  component: React.lazy(() => import('../compilerbase/index.jsx'))
},{
  path: 'use/compilercount',
  name: '25、收益分析-递增',
  component: React.lazy(() => import('../compilercounter/index.jsx'))
},{
  path: 'use/compilerexpensive',
  name: '26、收益分析-耗时子组件',
  component: React.lazy(() => import('../compilerexpensive/index.jsx'))
},{
  path: 'use/compilertabs',
  name: '27、收益分析-tabs',
  component: React.lazy(() => import('../compilertabs/index.jsx'))
}, {
  type: 'tip',
  name: 'form action'
},{
  path: 'use/07',
  name: 'form Action 01',
  component: React.lazy(() => import('../07_action_demo/index.jsx'))
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
