import {useState, Suspense} from 'react'
import NavSider from './nav-sider'
import BaseContent from './index'
import {getSubscribeApi} from './api'

import {Telescope, MousePointerClick, PlaneTakeoff, ArrowUpToLine} from 'lucide-react'
import {Link} from 'react-router-dom'

export default function Tutorial() {
  const [promise] = useState(getSubscribeApi)

  function __click() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='pt-16 md:flex'>
      <aside id='vp-aside' className='fixed top-0 left-0 bottom-0 overflow-y-scroll bg-gray-50 hidden md:block'>
        <div className='px-6'>
          <div className='flex items-center pb-8 pt-24 sticky top-0 bg-gray-50 border-b mb-8'>
            <div className='flex items-center justify-between p-1 border mr-3 rounded-md border-cyan-200'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-cyan-500">
                <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" clipRule="evenodd" />
              </svg>
            </div>

            <div className='text-sm'>
              <div>当前版本</div>
              <div className='text-gray-500'>React@19.0.0</div>
            </div>
          </div>
          <nav className='pb-8'>
            <NavSider />
          </nav>
        </div>
      </aside>
      <div id='vp-content'>
        <div className='pt-4 md:pt-8 relative flex justify-center'>
          <div id='cp-content' className='keep px-4 2xl:px-24 pb-24 w-0 flex-1'>
            <Suspense fallback={<div></div>}>
              <BaseContent promise={promise} />
            </Suspense>
          </div>
          
          <aside id='cp-aside' className='pr-6 relative items-start'>
            {/* <Codepack files={files} className='h-full rounded-md border-gray-200'/> */}
            <div id='headings' className='w-full sticky top-24 space-y-4'>
              <Link
                to='https://xinyuzone.cn/column/1818097927437131776'
                className='block rounded bg-gray-50 p-4 border border-gray-200'
                target='_blank'
              >
                <Telescope className='' />
                <div className='font-bold my-2'>JavaScript 核心进阶</div>
                <div className='text-sm'>从构建基础知识体系出发，抓紧核心基础内容，给你地道的前端进阶思维</div>
              </Link>

              <Link
                href='https://usehook.cn/'
                className='block rounded bg-gray-50 p-4 border border-gray-200'
                target='_blank'
              >
                <MousePointerClick className='' />
                <div className='font-bold my-2'>React 19 全解</div>
                <div className='text-xs'>全网第一本系统介绍 React 19 的小册，大量实践案例，给你沉浸式学习体验</div>
              </Link>

              <Link
                href='https://usehook.cn/advance/index'
                className='block rounded bg-gray-50 p-4 border border-gray-200'
                target='_blank'
              >
                <PlaneTakeoff className='' />
                <div className='font-bold my-2'>React 19 尊享版</div>
                <div className='text-xs leading-5'>专为前端资深架构师提供的进阶内容，聚焦项目架构，强化开发效率与开发体验</div>
              </Link>

              <div className='rounded bg-cyan-50 p-4 border border-cyan-300 text-center'>
                <div className='my-2'>call me wx: icanmeetu</div>
                <div className='leading-5'>获得展示位</div>
              </div>

              <div 
                onClick={__click}
                className='rounded py-2 border border-gray-200 text-center flex items-center justify-center cursor-pointer'
              >
                <ArrowUpToLine size={16} />
                <div className='ml-2'>TOP</div>
              </div>
            </div>
          </aside>
        </div>
        
      </div>
    </div>
  )
}
