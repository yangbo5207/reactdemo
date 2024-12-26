import {motion} from 'motion/react'
import Skin from './case/skin'

export default function LearnBefore() {
  return (
    <div className='bg-white backdrop-blur-sm py-14 md:py-28 bg-opacity-70 mx-auto px-6 md:px-8'>
      <div className='max-w-[1080px] mx-auto'>
        <motion.h2 
          className='text-2xl md:text-4xl font-bold text-center'
          initial={{y: 60, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5}}
        >赞助商广告</motion.h2>

        <motion.p
          initial={{y: 60, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.2}}
          className='text-center my-8 md:my-12 px-10'
        >
          所见即所得。演示案例内置于文章中直接渲染，可以直接交互。如下所示
        </motion.p>

        <Skin />
      </div>
    </div>
  )
}
