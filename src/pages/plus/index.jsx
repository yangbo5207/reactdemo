import {useRef, useReducer, useEffect, useState} from 'react'
import {useOutlet, useLocation, useNavigate} from 'react-router-dom'
import SideNav from './sidenav'
import Modal from 'components/Modal'
import Button from 'components/Button'

export default function Tutorial() {
  const navigate = useNavigate();
  const pageMap = useRef(new Map())
  const outLet = useOutlet();
  const { pathname } = useLocation();
  const modal = useRef(null)

  if (!pageMap.current.has(pathname)) {
    pageMap.current.set(pathname, outLet)
  }

  useEffect(() => {
    if (location.pathname === '/advance') {
      navigate('index')
    }
  }, [pathname])

  return (
    <div className='pt-16 md:flex'>
      <Button signal className='fixed bottom-6 right-6 z-40 md:hidden' onClick={() => modal.current.show()}>目录</Button>
      <Modal ref={modal} onClose={() => modal.current.close()}>
        <div className='bg-white h-full py-4 overflow-scroll'>
          <SideNav />
        </div>
      </Modal>
      <nav className='hidden md:block w-60 sticky top-16 h-[calc(100vh_-_5rem)] overflow-y-auto bg-hei'>
        <div className='flex items-center px-4 py-8'>
          <div className='flex items-center justify-between p-1 border mr-3 rounded-md border-cyan-200'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-cyan-500">
              <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" clipRule="evenodd" />
            </svg>
          </div>

          <div className='text-sm'>
            <div>当前版本</div>
            <div className='text-gray-500'>React@19.0.0-rc</div>
          </div>
        </div>
        <ul className='border-r h-[calc(100vh_-_9rem_-_35px)] overflow-y-auto pb-8'>
          <SideNav />
        </ul>
      </nav>
      <div className='md:flex-1 md:w-[calc(100vw_-_15rem)] p-4 md:p-8 min-h-[calc(100vh_-_5rem)] box-border'>
        {/*<Outlet />*/}
        {Array.from(pageMap.current).map(([key, component]) => (
          <div key={key} style={{display: pathname === key ? 'block' : 'none'}}>
            {component}
          </div>
        ))}
      </div>
    </div>
  )
}
