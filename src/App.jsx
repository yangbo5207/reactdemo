import {Suspense} from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import ActiveLink from './components/ActiveLink'
import {navigation} from './path'
import './App.css'

function Layout() {
  return (
    <div id='wrapper'>
      <nav id='side_nav'>
        <h2>React 19</h2>
        <ul id='side_ul'>
          {navigation.map((item, index) => (
            <li key={item.path}>
              <ActiveLink activeName='active' to={`/${item.path}`}>{item.name}</ActiveLink>
            </li>
          ))}
        </ul>
      </nav>
      <div id='playground'>
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {navigation.map((item, index) => (
          index === 0 ?
            <Route key={item.path} index element={<item.component />} /> : 
            <Route key={item.path} path={item.path} element={
              // <Suspense fallback={<div>loading...</div>}>
                <item.component />
              // </Suspense>
            } />
        ))}
        <Route path="*" element={<div>nothing</div>} />
      </Route>
    </Routes>
  )
}

export default App
