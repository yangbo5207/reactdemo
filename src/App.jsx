import {Suspense} from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import ActiveLink from './components/ActiveLink'
import {navigation} from './path'
import {useState} from 'react'
import './App.css'

import NavHeader from "./pages/NavHeader/index.jsx";

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

function Layou2t() {
  return (
    <div>
      <NavHeader />
      <div id='playground'>
        <Outlet />
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layou2t />}>
        {navigation.map((item, index) => (
          index === 0 ?
            <Route key={item.path} index element={<item.component />} /> : 
            <Route key={item.path} path={item.path} element={
              <Suspense fallback={<div>loading...</div>}>
                <item.component />
              </Suspense>
            } />
        ))}
        <Route path="*" element={<div>nothing</div>} />
      </Route>
    </Routes>
  )
}

export default App


const arr = [
    {
      name: 'Tom1',
      desc: 'sdfsdfsfdsfdsdfsfxxx',
      selected: false,
    },
    {
      name: 'Tom2',
      desc: 'sdfsdfsfdsfdsdfsf222',
      selected: false,
    },
    {
      name: 'Tom3',
      desc: 'sdfsdfsfdsfdsdfsfddd',
      selected: false,
    },
    {
      name: 'Tom4',
      desc: 'sdfsdfsfdsfdsdfsfaaa',
      selected: false,
    },
    {
      name: 'Tom5',
      desc: 'sdfsdfsfdsfdsdfsffff',
      selected: false,
    },
  ]

// 数据是否对 UI 有直接影响
function Demo() {
  const [arr, setArr] = useState([])

  function onsubmit(e) {
    e.preventDefault()
    console.log(e)
    var formdata = new FormData(e.target)
    arr.push({
      name: formdata.get('name'),
      email: formdata.get('email'),
      key: performance.now().toString()
    })
    setArr([...arr])
    e.target.reset()
  }

  return (
    <div>
      <form onSubmit={onsubmit}>
        <input type="text" name='name' placeholder="enter your name" />
        <input type="text" name='email' placeholder="enter your email" />
        <button type='submit'>提交</button>
      </form>

      <div>
        <div>
          {arr.map((item, index) => (
            <div key={item.key}>
              <div>name: {item.name}</div>
              <div>name: {item.email}</div>
              <button>删除</button>
              <button>标记</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
