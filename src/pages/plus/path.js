// base
import Home from './pages/1.index'
import Architecture from './pages/2.architectrure'
import BFF from './pages/3.bff'
import Split from './pages/4.split'
import Nested from './pages/5.nested'

import Streaming from './pages/6.streaming'
import Multapi from './pages/7.multi'
import Deps from './pages/8.deps'
import Cache from './pages/9.cache'
import MultParams from './pages/10.mutiparams'
import Diff from './pages/11.diff'
import PickOne from './pages/12.pickone'
import C13 from './pages/13.childx'
import C14fitler from './pages/14.cfilter'
import C15list from './pages/15.liststate'
import C16Pagination from './pages/16.pagination'

export const navigation = [
  {
    type: 'tip',
    name: '序'
  },
  {
    path: 'index',
    name: '1、如何理解体系化',
    component: Home
  },
  {
    type: 'tip',
    name: '理论篇'
  },
  {
    path: 'architecture',
    name: '2、架构思维总览',
    component: Architecture
  },
  {
    path: 'bff',
    name: '3、BFF架构思维',
    component: BFF
  },
  {
    path: 'split',
    name: '4、组件拆分原则',
    component: Split
  },
  {
    path: 'nest',
    name: '5、解耦与嵌套',
    component: Nested
  },
  {
    type: 'tip',
    name: '实战篇'
  },
  {
    path: 'streaming',
    name: '6、流式渲染',
    component: Streaming
  },
  {
    path: 'multapi',
    name: '7、多个接口并行',
    component: Multapi
  },
  {
    path: 'deps',
    name: '8、多个接口前后依赖',
    component: Deps
  },
  {
    path: 'cache',
    name: '9、数据缓存',
    component: Cache
  },
  {
    path: 'update',
    name: '10、多个更新条件',
    component: MultParams
  },
  {
    path: 'different',
    name: '11、接口更新频率不一致',
    component: Diff
  },
  {
    path: 'pickapi',
    name: '12、更新其中某个接口',
    component: PickOne
  },
  {
    path: 'childx',
    name: '13、子组件数据解耦',
    component: C13
  },
  {
    path: 'cfilter',
    name: '14、统一思考过滤条件',
    component: C14fitler
  },
  {
    path: 'lstate',
    name: '15、单独维护列表状态',
    component: C15list
  },
  {
    path: 'reduce',
    name: '16、分页列表',
    component: C16Pagination
  },
  // {
  //   path: 'signal',
  //   name: '12、从列表中筛选',
  //   component: Multapi
  // },
  // {
  //   path: 'showcache',
  //   name: '13、详情回显',
  //   component: Multapi
  // },
  // {
  //   path: 'shocachemore',
  //   name: '14、复杂项回显',
  //   component: Multapi
  // },
  // {
  //   path: 'editor',
  //   name: '15、详情编辑',
  //   component: Multapi
  // },
]
