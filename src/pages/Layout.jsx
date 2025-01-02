import {Outlet} from 'react-router-dom'
import NavHeader from './nav-header'
import {getAuth, setUserInfo} from './service'

import { useState, Suspense, use } from 'react'

export default function Layou2t() {
  const [authPromise] = useState(getAuth)

  return (
    <Suspense>
      <Page promise={authPromise} />
    </Suspense>
  )
}

function Page({promise}) {
  const res = use(promise)
  setUserInfo(res)
  return (
    <>
      <NavHeader className='line' auth={res} />
      <Outlet />
    </>
  )
}