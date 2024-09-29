// base
import Home from './pages/1.index'
import Architecture from './pages/2.architectrure'
import BFF from './pages/3.bff'
import Split from './pages/4.split'
import Multapi from './pages/4.split'

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
    name: '4、解耦与嵌套思维',
    component: Split
  },
  {
    path: 'belong',
    name: '4、归属与内聚',
    component: Split
  },
  {
    path: 'datadw',
    name: '5、数据层职能与细分',
    component: Split
  },
  {
    type: 'tip',
    name: '实战篇'
  },
  {
    path: 'mult',
    name: '2、流式渲染',
    component: Multapi
  },
  {
    path: 'dep',
    name: '2、依赖渲染',
    component: Multapi
  },
  {
    path: 'multapi',
    name: '2、多个接口初始化',
    component: Multapi
  },
  {
    path: 'secondary',
    name: '2、数据额外处理',
    component: Multapi
  },
  {
    path: 'cache',
    name: '4、数据缓存',
    component: Multapi
  },
  {
    path: 'update',
    name: '3、多个更新条件',
    component: Multapi
  },
  {
    path: 'filter',
    name: '5、统一思考过滤条件',
    component: Multapi
  },
  {
    path: 'filterwithreq',
    name: '6、过滤条件中包含请求',
    component: Multapi
  },
  {
    path: 'different',
    name: '7、接口更新频率不一致',
    component: Multapi
  },
  {
    path: 'pickapi',
    name: '8、更新其中某个接口',
    component: Multapi
  },
  {
    path: 'pickdata',
    name: '9、更新某一项数据',
    component: Multapi
  },
  {
    path: 'delete',
    name: '10、删除',
    component: Multapi
  },
  {
    path: 'new',
    name: '11、新增',
    component: Multapi
  },
  {
    path: 'signal',
    name: '12、从列表中筛选',
    component: Multapi
  },
  {
    path: 'showcache',
    name: '13、详情回显',
    component: Multapi
  },
  {
    path: 'shocachemore',
    name: '14、复杂项回显',
    component: Multapi
  },
  {
    path: 'editor',
    name: '15、详情编辑',
    component: Multapi
  },
]
