import React from 'react'

// 前言 1. 并发模式 2. compiler  3. use promise  4. use context   5. form Action  6. useOptimistic

export const compath = [{
  type: 'tip',
  name: '基础组件'
}, 
{
  path: 'button',
  name: '1、按钮 Button',
  component: React.lazy(() => import('./pages/button/index.jsx'))
}, 
{
  path: 'input',
  name: '2、输入框 Input',
  component: React.lazy(() => import('./pages/input/index.jsx'))
}, 
{
  path: 'skeleton',
  name: '2、骨架屏 Skeleton',
  component: React.lazy(() => import('./pages/skeleton/index.jsx'))
},
]