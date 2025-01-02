import {motion} from 'motion/react'
import Skin from './case/skin'
import {variants} from './index'

export default function LearnBefore() {
  return (
    <div className='bg-white backdrop-blur-sm py-14 md:py-28 bg-opacity-70 mx-auto px-6 md:px-8'>
      <div className='max-w-[1080px] mx-auto'>
        <motion.h2 className='text-2xl md:text-4xl font-bold text-center' {...variants()}>赞助商广告</motion.h2>

        <motion.p {...variants(0.1)} className='text-center my-8 md:my-12 px-10'>
          所见即所得。演示案例内置于文章中直接渲染，可以直接交互。如下所示
        </motion.p>
        <Skin />
      </div>
    </div>
  )
}
