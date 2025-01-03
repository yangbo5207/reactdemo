import {Suspense} from 'react'
import {Routes, Route} from 'react-router-dom'
import PageLoading from 'components/PageLoading'
import Home from 'pages/home'

import BaseLayout from './pages/base/Layout'
import {navigation} from 'pages/base/components/path'

import Components from './pages/components'
import {compath} from 'pages/components/path'

import Advance from './pages/plus'
import {navigation as advances} from 'pages/plus/path'

import Payment from 'pages/payment'
import AppLayout from './pages/Layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='tutorial' element={<BaseLayout />}>
          {navigation.filter((item) => !!item.path).map((item ,i) => (
            <Route key={item.path} path={item.path} element={
              <Suspense fallback={<PageLoading />}>
                <item.component />
              </Suspense>
            } />
          ))}
        </Route>
        <Route path='component' element={<Components />}>
          {compath.filter((item) => !!item.path).map((item ,i) => (
            <Route key={item.path} path={item.path} element={
              <Suspense fallback={<PageLoading />}>
                <item.component />
              </Suspense>
            } />
          ))}
        </Route>
        <Route path='advance' element={<Advance />}>
          {advances.filter((item) => !!item.path).map((item ,i) => (
            <Route key={item.path} path={item.path} element={
              <Suspense fallback={<PageLoading />}>
                <item.component />
              </Suspense>
            } />
          ))}
        </Route>
        <Route path='pay' element={<Payment />} />
        <Route path="*" element={<div className='p-32'>暂无内容</div>} />
      </Route>
    </Routes>
  )
}

export default App
