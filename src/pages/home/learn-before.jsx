import {motion} from 'motion/react'
import {CircleCheck, ChevronRight} from 'lucide-react'
import Flex from 'components/Flex'

export default function LearnBefore() {
  const icls = 'text-gray-600 mt-4 rounded-md border border-gray-200 py-3 px-4 bg-gray-50 hover:border-green-500 transition'
  const sources = [{
    desc: '具备一定的 JavaScript 基础',
    tip: 'JavaScript 核心进阶',
    url: 'https://xinyuzone.cn/column/1818097927437131776',
    delay: 0.4
  }, {
    desc: '熟悉异步请求，熟悉 fetch 与 Promise',
    tip: 'fetch',
    url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch',
    delay: 0.6
  }, {
    desc: '熟悉 React 之前的版本的使用',
    tip: 'React 知命境',
    url: 'https://react.usehook.cn/',
    delay: 0.8
  }]
  return (
    <div className='backdrop-blur-sm py-36 bg-opacity-70 max-w-[1080px] mx-auto px-32'>
      <motion.h2 
        className='text-4xl font-bold text-center'
        initial={{y: 60, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5}}
      >Learn Before</motion.h2>

      <motion.p
        initial={{y: 60, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.2}}
        className='text-center my-12'
      >
        学习之前，你需要具备一些前置的基础能力
      </motion.p>

      {sources.map((item, i) => (
        <motion.a 
          className='block'
          href={item.url}
          initial={{y: 60, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: item.delay}}
          target='_blank'
          key={item.url}
        >
          <Flex className={icls} between>
            <Flex>
              <CircleCheck className='text-primary' size={18} />
              <div className='ml-2'>{item.desc}</div>
            </Flex>
            <Flex className='space-x-2' >
              <span>{item.tip}</span>
              <ChevronRight size={18} />
            </Flex>
          </Flex>
        </motion.a>
      ))}    
    </div>
  )
}
