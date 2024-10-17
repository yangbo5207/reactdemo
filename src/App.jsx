import {Suspense} from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'

import PageLoading from 'components/PageLoading'

import NavHeader from "./pages/NavHeader/index.jsx";

import Home from 'pages/home'
import Tutorial from './pages/base'
import {navigation} from 'pages/base/path.js'

import Components from './pages/components'
import {compath} from 'pages/components/path.js'

import Advance from './pages/plus'
import {navigation as advances} from 'pages/plus/path.js'

import Payment from 'pages/payment'


function Layou2t() {
  return (
    <div>
      <NavHeader className='line' />
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layou2t />}>
        <Route index element={<Home />} />
        <Route path='tutorial' element={<Tutorial />}>
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
