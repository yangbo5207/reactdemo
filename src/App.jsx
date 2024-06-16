import {Suspense} from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import {navigation} from 'pages/tutorial/path.js'
import {useState} from 'react'
import './App.css'

import NavHeader from "./pages/NavHeader/index.jsx";

import Home from 'pages/home'
import Tutorial from './pages/tutorial'


function Layou2t() {
  return (
    <div>
      <NavHeader />
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
            <Route key={item.path} path={item.path} index={i === 0} element={
              <Suspense fallback={<div></div>}>
                <item.component />
              </Suspense>
            } />
          ))}
        </Route>
        <Route path="*" element={<div>nothing</div>} />
      </Route>
    </Routes>
  )
}

export default App
