import {useRef} from 'react'
import {Link} from 'react-router-dom'
import Dialog from "components/Dialog";
import ercode from '/src/assets/ercode.png'
import {motion} from 'motion/react'

export default function Banner() {
  const dialog = useRef(null)
  function __viewclick(e) {
    e.preventDefault()
    dialog.current.show()
  }

  return (
    <div className='py-36 max-w-[750px] mx-auto'>
      <motion.div
        className='flex items-center space-x-2 justify-center'
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
      >
        <span>Created by</span>
        <img className='size-8 rounded-full overflow-hidden' src='https://avatars.githubusercontent.com/u/13758605?u=1c26a12708f649e096bc17d934d317d01255ee92&v=4' alt=''/>
        <span>这波能反杀</span>
      </motion.div>

      <motion.h2
        className='text-5xl mt-12 text-center'
        initial={{opacity: 0, y: 60}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
      >
        REACT 19 全解
      </motion.h2>

      <motion.p
        initial={{opacity: 0, y: 60}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.2}}
        className="mt-12 text-gray-500 leading-8 text-md text-center"
      >
        React19 为开发者带来了新的开发理念，这又是一次开发方式上的一次变革。并且在开发体验和性能上都有大幅度的提升，值得每一位 React 开发者学习。 本专栏是全网第一本系统学习 React 19 的专栏。在公众号「这波能反杀」首发，受到了大量粉丝的喜爱。专栏中包含大量实践案例，深入简出，理论结合实践为大家分享 React19 的学习，赶紧行动吧。
      </motion.p>


      <motion.div
        initial={{opacity: 0, y: 60}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.4}}
        className='mt-10 text-center'
      >
        <Link to='tutorial/index' className='inline-flex items-center px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-full'>
          <span className='mr-2'>快速开始</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </Link>

        <a onClick={__viewclick} href=""
          className='inline-flex px-4 py-2 text-gray-600 ring-1 ring-gray-200 text-sm rounded-full ml-4'>
          <span>关注公众号</span>
        </a>
        <Dialog ref={dialog} title='Follow me!'>
          <img src={ercode} alt=''/>
        </Dialog>
      </motion.div>
    </div>
  )
}
