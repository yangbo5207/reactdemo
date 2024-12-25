import ActiveLink from 'components/ActiveLink'
import Button_qun from 'pages/NavHeader/Button_qun'
import Button_code from 'pages/NavHeader/Button_code'
import Avatar from './avatar'
import MobileHeader from './mobile'


import {motion} from 'motion/react'

export const links = [
  {path: 'tutorial', text: '基础版'},
  {path: 'component', text: '组件'},
  {path: 'advance', text: '尊享版'},
]

export default function NavHeader() {
  return (
    <motion.header
      initial={{y: -60, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.5}}
      className='fixed z-50 top-0 flex justify-between border-b border-slate-200 min-w-[320px] bg-white bg-opacity-70 backdrop-blur-sm w-full'
    >
      <div className='pl-6 h-16 flex items-center md:pl-10 transition-all'>
        <ActiveLink className='flex items-center' to='/'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
          </svg>
          <div className='font-bold ml-2'>React 19</div>
        </ActiveLink>

        <div className='hidden md:flex'>
          {links.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{x: -40, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.5, delay: index * 0.3}}
            >
              <ActiveLink to={link.path} className='ml-8 text-gray-500' end={false} activeName='text-gray-900'>
                {link.text}
              </ActiveLink>
            </motion.div>
          ))}
        </div>
      </div>

      <div className='hidden md:flex h-16 items-center pr-6 text-gray-500'>
        <motion.div
          initial={{x: -20, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.3}}
        >
          <Button_qun alt='交流群' />
        </motion.div>
        <motion.div
          initial={{x: -20, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.6}}
        >
          <Button_code alt='激活码' />
        </motion.div>
        <motion.div
          initial={{x: -20, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.9}}
        >
          <Avatar />
        </motion.div>
      </div>

      <MobileHeader />
    </motion.header>
  )
}
