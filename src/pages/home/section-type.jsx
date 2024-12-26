import {motion} from 'motion/react'
import Block from './case/block'

export default function LearnBefore() {
  return (
    <div className='bg-white backdrop-blur-sm py-14 md:py-28 bg-opacity-70 mx-auto px-6 md:px-8'>
      <div className='max-w-[1080px] mx-auto'>
        <motion.h2 
          className='text-2xl md:text-4xl font-bold text-center'
          initial={{y: 60, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5}}
        >主要内容</motion.h2>

        <motion.p
          initial={{y: 60, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.2}}
          className='text-center my-8 md:my-12 px-10'
        >
          React 19 给开发者带来了巨大的变化和提升，主要体现在如下几个方面
        </motion.p>

        <div
          className='flex items-stretch md:justify-between flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0'>
          <Block
            title='Compiler'
            path='./tutorial/use/importwith19'
            desc='你可以不再使用 memo、useMemo、useCallback 来优化你的项目性能，大幅度提高开发体验'
            className='flex-1'
            delay={0.4}
          />
          <Block
            title='新的架构思路'
            path='./tutorial/index'
            desc='并发模式变得更加实用，得益于并发模式的成熟，我们将可以使用新的架构思路构思我的项目'
            className='flex-1'
            delay={0.6}
          />
          <Block
            title='新的交互方式'
            path='./tutorial/use/base'
            desc='React 在人机交互的开发体验上做了很多努力和尝试，他们将在这个版本中得以体现'
            className='flex-1'
            delay={0.8}
          />
        </div> 
      </div>
    </div>
  )
}
