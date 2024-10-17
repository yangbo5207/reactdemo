// base
import C1Change from './pages/1.change'
import C2Layers from './pages/2.layers'
import C3Create from './pages/3.create'

// use promise
import C4Usebase from './pages/4.usebase'
import C5Suspense from './pages/5.suspense'
import C6Update from './pages/6.update'
import C7InitUpdate from './pages/7.useInitUpdate'
import C8UpdateToList from './pages/8.updateToList'
import C9Loadmore from './pages/9.Loadmore'
import C10Search from './pages/10.Search'
import C11Tabs from './pages/11.tabs'
import C12TabShare from './pages/12.tabshard'
import UseTabscount from './pages/13.tabscount'
import UseNest from './pages/14.usenest'
import UseLower from './pages/15.usewitchreact16'

// use context
import CtxRef from './pages/16.contextRef'
import CtxModal from './pages/17.contextmodal'
import CtxModify from './pages/18.contextmodify'
import CtxCount from './pages/19.contextcount'

// 并发 API
import Deferred from './pages/20.deferred'
import Transition from './pages/21.useTransition'

// Compiler
import ImportCompiler from './pages/22.compilerimport19'
import ImportWithLower from './pages/23.compilerimportlower'
import ImportWithWebpack from './pages/24.compilerimportwebpack'
import CompilerBase from './pages/25.compilerbase'
import CompilerCount from './pages/26.compilercounter'
import CompilerExpensive from './pages/27.compilerexpensive'
import CompilerTabs from './pages/28.compilertabs'

// form action
import ActionBase from './pages/29.fabase'
import FormDataBase from './pages/30.faformdata'
import FormAction from './pages/31.faAction'
import UseFormStatus from './pages/32.faUseformstatus'
import UseActionState from './pages/33.faUseactionstate'
import UseOptimistic from './pages/34.faUseoptimistic1'
import UseOptimistic2 from './pages/35.faUseoptimistic2'
import UseOptimistic3 from './pages/36.faUseoptimistic3'
import UseOptimistic4 from './pages/37.faUseoptimistic4'

import End from './pages/38.end'

export const navigation = [
  {
  type: 'tip',
  name: '前言'
}, {
  path: 'index',
  name: '1、开发方式变革',
  component: C1Change
}, {
  path: 'layers',
  name: '2、学习的三个层次',
  component: C2Layers
}, {
  path: 'create',
  name: '3、创建项目',
  component: C3Create
}, {
  type: 'tip',
  name: 'use(promise)'
}, {
  path: 'use/base',
  name: '4、use 基础知识',
  component: C4Usebase
}, {
  path: 'use/suspense',
  name: '5、Suspense',
  component: C5Suspense
}, {
  path: 'use/update',
  name: '6、点击更新数据',
  component: C6Update
}, {
  path: 'use/initialize',
  name: '7、初始化请求并更新',
  component: C7InitUpdate
}, {
  path: 'use/updatetolist',
  name: '8、请求并新增到列表',
  component: C8UpdateToList
}, {
  path: 'use/loadmore',
  name: '9、分页列表加载更多',
  component: C9Loadmore
}, {
  path: 'use/search',
  name: '10、搜索',
  component: C10Search
}, {
  path: 'use/tabs',
  name: '11、tab 简单切换',
  component: C11Tabs,
  label: '1'
}, {
  path: 'use/tabshard',
  name: '12、tab 缓存切换',
  component: C12TabShare,
  label: '2'
}, {
  path: 'use/fromchildren',
  name: '13、父级获取数据',
  component: UseTabscount,
  label: '3'
}, {
  path: 'use/nest',
  name: '14、Suspense 嵌套',
  component: UseNest
}, {
  path: 'use/react16',
  name: '15、在低版本中使用',
  component: UseLower
}, {
  type: 'tip',
  name: 'use(context)'
}, {
  path: 'use/ref',
  name: '16、ref 调整',
  component: CtxRef
}, {
  path: 'use/modal',
  name: '17、自定义弹窗组件',
  component: CtxModal
}, {
  path: 'use/contextmodify',
  name: '18、弹窗中更改内容',
  component: CtxModify
}, {
  path: 'use/skinswitch',
  name: '19、皮肤切换次数',
  component: CtxCount
}, {
  type: 'tip',
  name: '并发 API'
}, {
  path: 'use/deferred',
  name: '20、useDeferredValue',
  component: Deferred
}, {
  path: 'use/transition',
  name: '21、useTransition',
  component: Transition
}, {
  type: 'tip',
  name: 'Compiler'
}, {
  path: 'use/importwith19',
  name: '22、React 19 中引入',
  component: ImportCompiler
},{
  path: 'use/importwithlower',
  name: '23、低版本中引入',
  component: ImportWithLower
},{
  path: 'use/importwithwebpack',
  name: '24、webpack中引入',
  component: ImportWithWebpack
},{
  path: 'use/compilerbase',
  name: '25、Compiler 编译原理',
  component: CompilerBase
},{
  path: 'use/compilercount',
  name: '26、收益分析-递增',
  component: CompilerCount
},{
  path: 'use/compilerexpensive',
  name: '27、收益分析-耗时子组件',
  component: CompilerExpensive
},{
  path: 'use/compilertabs',
  name: '28、收益分析-tabs',
  component: CompilerTabs
}, {
  type: 'tip',
  name: 'form action'
},{
  path: 'formaction/base',
  name: '29、form 基础',
  component: ActionBase
}, {
  path: 'formaction/formdata',
  name: '30、FormData 基础',
  component: FormDataBase
}, {
  path: 'formaction/action',
  name: '31、form action',
  component: FormAction
}, {
  path: 'formaction/useformstatus',
  name: '32、useFormStatus',
  component: UseFormStatus
}, {
  path: 'formaction/useactionstate',
  name: '33、useActionState',
  component: UseActionState
}, {
  path: 'formaction/useoptimistic',
  name: '34、useOptimistic',
  component: UseOptimistic,
  label: '1'
}, {
  path: 'formaction/useoptimistic2',
  name: '35、useOptimistic',
  component: UseOptimistic2,
  label: '2'
}, {
  path: 'formaction/useoptimistic3',
  name: '36、useOptimistic',
  component: UseOptimistic3,
  label: '3'
}, {
  path: 'formaction/useoptimistic4',
  name: '37、复杂案例',
  component: UseOptimistic4,
  label: '4'
}, {
  type: 'tip',
  name: '后续闲谈'
}, {
  path: 'formaction/end',
  name: '38、完结感言',
  component: End
}]
