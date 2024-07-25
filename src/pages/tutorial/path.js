// base
import Content1 from '../change'
import Layers from '../layers'
import Create from '../create'

// use promise
import UseBase from '../usebase'
import UseSuspense from '../usesuspense'
import UseUpdate from '../useupdate'
import UseInitialize from '../useInitializeUpdate'
import UseUpdateList from '../useUpdatetoList'
import UseLoadMore from '../loadmore'
import UseSearch from '../search'
import UseTabs from '../tabs'
import UseTabshard from '../tabshard'
import UseTabscount from '../tabscount'
import UseNest from '../usenest'
import UseLower from '../usewithreact16'

// use context
import CtxRef from '../contextref'
import CtxModal from '../contextmodal'
import CtxModify from '../contextmodify'
import CtxCount from '../contextcount'

// 并发 API
import Deferred from '../deferred'
import Transition from '../useTransition'

// Compiler
import ImportCompiler from '../compilerimport19'
import ImportWithLower from '../compilerimportlower'
import ImportWithWebpack from '../compilerimportwebpack'
import CompilerBase from '../compilerbase'
import CompilerCount from '../compilercounter'
import CompilerExpensive from '../compilerexpensive'
import CompilerTabs from '../compilertabs'

// form action
import ActionBase from '../formaction_base'
import FormDataBase from '../formaction_formdata'
import FormAction from '../formaction_action'
import UseFormStatus from '../formaction_useformstatus'

export const navigation = [{
  type: 'tip',
  name: '前言'
}, {
  path: 'index',
  name: '1、开发方式变革',
  component: Content1
}, {
  path: 'layers',
  name: '2、学习的三个层次',
  component: Layers
}, {
  path: 'create',
  name: '3、创建项目',
  component: Create
}, {
  type: 'tip',
  name: 'use(promise)'
}, {
  path: 'use/base',
  name: '3、use 基础知识',
  component: UseBase
}, {
  path: 'use/suspense',
  name: '4、Suspense',
  component: UseSuspense
}, {
  path: 'use/update',
  name: '5、点击更新数据',
  component: UseUpdate
}, {
  path: 'use/initialize',
  name: '6、初始化请求并更新',
  component: UseInitialize
}, {
  path: 'use/updatetolist',
  name: '7、请求并新增到列表',
  component: UseUpdateList
}, {
  path: 'use/loadmore',
  name: '8、分页列表加载更多',
  component: UseLoadMore
}, {
  path: 'use/search',
  name: '9、搜索',
  component: UseSearch
}, {
  path: 'use/tabs',
  name: '10、tab 简单切换',
  component: UseTabs,
  label: '1'
}, {
  path: 'use/tabshard',
  name: '11、tab 缓存切换',
  component: UseTabshard,
  label: '2'
}, {
  path: 'use/fromchildren',
  name: '12、父级获取数据',
  component: UseTabscount,
  label: '3'
}, {
  path: 'use/nest',
  name: '13、Suspense 嵌套',
  component: UseNest
}, {
  path: 'use/react16',
  name: '14、在低版本中使用',
  component: UseLower
}, {
  type: 'tip',
  name: 'use(context)'
}, {
  path: 'use/ref',
  name: '15、ref 调整',
  component: CtxRef
}, {
  path: 'use/modal',
  name: '16、自定义弹窗组件',
  component: CtxModal
}, {
  path: 'use/contextmodify',
  name: '17、弹窗中更改内容',
  component: CtxModify
}, {
  path: 'use/skinswitch',
  name: '18、皮肤切换次数',
  component: CtxCount
}, {
  type: 'tip',
  name: '并发 API'
}, {
  path: 'use/deferred',
  name: '19、useDeferredValue',
  component: Deferred
}, {
  path: 'use/transition',
  name: '20、useTransition',
  component: Transition
}, {
  type: 'tip',
  name: 'Compiler'
}, {
  path: 'use/importwith19',
  name: '21、React 19 中引入',
  component: ImportCompiler
},{
  path: 'use/importwithlower',
  name: '22、低版本中引入',
  component: ImportWithLower
},{
  path: 'use/importwithwebpack',
  name: '23、webpack中引入',
  component: ImportWithWebpack
},{
  path: 'use/compilerbase',
  name: '24、Compiler 编译原理',
  component: CompilerBase
},{
  path: 'use/compilercount',
  name: '25、收益分析-递增',
  component: CompilerCount
},{
  path: 'use/compilerexpensive',
  name: '26、收益分析-耗时子组件',
  component: CompilerExpensive
},{
  path: 'use/compilertabs',
  name: '27、收益分析-tabs',
  component: CompilerTabs
}, {
  type: 'tip',
  name: 'form action'
},{
  path: 'formaction/base',
  name: 'form 基础',
  component: ActionBase
}, {
  path: 'formaction/formdata',
  name: 'FormData 基础',
  component: FormDataBase
}, {
  path: 'formaction/action',
  name: 'form action',
  component: FormAction
}, {
  path: 'formaction/useformstatus',
  name: 'useFormStatus',
  component: UseFormStatus
}]