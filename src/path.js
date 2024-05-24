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
  path: 'use/05_markdown',
  name: 'react markdown',
  component: lazy(() => import('./pages/05_markdown'))
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
}]