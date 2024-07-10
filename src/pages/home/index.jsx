import {useRef} from 'react'
import Skin from './Skin'
import Background from './background'
import Block from './block'
import ButtonCase from "pages/home/case/index";
import Gisucs from '@giscus/react'
import {Link} from 'react-router-dom'
import Dialog from "components/Dialog";
import ercode from '/src/assets/ercode.png'

import './App.css'


function App() {
  const dialog = useRef(null)
  function __viewclick(e) {
    e.preventDefault()
    dialog.current.show()
  }
  return (
    <div className='relative pt-16'>
      <Background />

      <div className='max-w-[1050px] mx-auto px-4'>

        <div className="mt-20 max-w-[750px]">
          <h2 className='text-lg font-bold'>React 19 全解</h2>

          <p className="mt-4 text-gray-500 leading-6 text-md">
            全网第一本系统学习 React 19 的专栏。本专栏在公众号「这波能反杀」首发，受到了大量粉丝的喜爱。专栏中包含大量实践案例，深入简出，理论结合实践为大家分享 React19 的学习。
          </p>
          <p className="text-md mt-4 text-gray-500 leading-6">
            React19 在开发体验和性能上都有大幅度的提升，值得每一位 React 开发者学习，赶紧行动吧。
          </p>

          <div className='mt-8'>
            <Link to='tutorial/index' className='inline-flex items-center px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-full'>
              <span className='mr-2'>快速开始</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </Link>

            <a onClick={__viewclick} href="" className='inline-flex px-4 py-2 text-gray-600 ring-1 ring-gray-200 text-sm rounded-full ml-4'>
              <span>关注公众号</span>
            </a>
            <Dialog ref={dialog} title='Follow me!'>
              <img src={ercode} alt=''/>
            </Dialog>
          </div>
        </div>

        <div className="mt-20 max-w-[750px]">
          <h2 className='text-[20px] font-bold'>学前准备</h2>
          <div className='flex items-center text-gray-600 mt-8'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <div className='ml-2'>具备一定的 JavaScript 基础</div>
          </div>

          <div className='flex items-center text-gray-600 mt-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <div className='ml-2'>对 React 之前的版本有一定的熟悉</div>
          </div>
        </div>


        <div className='border-b mt-20 mb-8 text-lg font-bold pb-3'>主要内容</div>

        <div className='flex justify-between flex-col md:flex-row items-center'>
          <Block title='Compiler' desc='你可以不再使用 memo、useMemo、useCallback 来优化你的项目性能，大幅度提高开发体验' />
          <div className='w-2 h-2'></div>
          <Block title='新的架构思路' desc='并发模式变得更加实用，得益于并发模式的成熟，我们将可以使用新的架构思路构思我的项目' />
          <div className='w-2 h-2'></div>
          <Block title='新的交互方式' desc='React 在人机交互的开发体验上做了很多努力和尝试，他们将在这个版本中得以体现' />
        </div>

        <div className='border-b mt-20 mb-8 text-lg font-bold pb-3'>案例展示方式</div>

        <p className='mb-4'>沉浸式学习体验。通过可在线编辑的案例，你能获得沉浸式的学习体验</p>

        <ButtonCase />


        <p className='mt-10 flex items-center'>
          所见即所得。所有案例直接渲染，可操作、可交互。例如：点击按钮，切换皮肤
          <span
            className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center ml-4">
            <svg className="w-6 h-6 text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round"
                 strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </span>
        </p>

        <Skin/>

        <div className='border-b mt-20 mb-8 text-lg font-bold pb-3'>其他作品</div>

        <div className='flex justify-between'>
          <div className='w-[200px] h-32 border rounded-xl'>x</div>
          <div className='w-[200px] h-32 border rounded-xl'>x</div>
          <div className='w-[200px] h-32 border rounded-xl'>x</div>
          <div className='w-[200px] h-32 border rounded-xl'>x</div>
        </div>

        <div className='border-b mt-20 mb-8 text-lg font-bold pb-3'>评论区</div>

        <Gisucs
          repo='yangbo5207/react19feature'
          repoId='R_kgDOMGiHOw'
          category='General'
          categoryId='DIC_kwDOMGiHO84Cf8dR'
          maping='pathname'
          term='欢迎道友'
          strict='0'
          reactionsEnabled='1'
          emitMetadata="1"
          inputPosition="top"
          lang="zh-CN"
          loading="lazy"
          crossorigin="anonymous"
          async
        />

        <div className='border-b mt-20 mb-8 text-lg font-bold pb-3'></div>
        <div className='flex justify-between pb-10'>
          <span className='text-gray-400'>
            © Copyright 2024.
            <a href="https://beian.miit.gov.cn/" target="_blank">这波能反杀.</a>
            <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2024222174号</a>
          </span>

          <div className='flex'>
            <div className='ml-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
              </svg>
            </div>
            <div className='ml-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/>
              </svg>

            </div>
            <div className='ml-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
