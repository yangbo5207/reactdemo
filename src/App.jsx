import {Suspense} from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'

import PageLoading from 'components/PageLoading'
import './App.css'

import NavHeader from "./pages/NavHeader/index.jsx";

import Home from 'pages/home'
import Tutorial from './pages/tutorial'
import {navigation} from 'pages/tutorial/path.js'

import Components from './pages/components'
import {compath} from 'pages/components/path.js'


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
        <Route path="*" element={<div>nothingsdfsdfsdf</div>} />
      </Route>
    </Routes>
  )
}

export default App
