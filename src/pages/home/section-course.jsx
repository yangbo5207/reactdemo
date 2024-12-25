import {motion} from 'motion/react'
import MiniBlock from './MiniBlock'
import {Cookie, ChevronRight} from 'lucide-react'

export default function SectionCourse() {  
  return (
    <main className='backdrop-blur-sm py-28 bg-gray-50 bg-opacity-70 px-8'>
      <div className="mx-auto max-w-[1080px]">
        <motion.p 
          initial={{y: 60, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5}}
          className="font-bold sm:text-4xl text-center"
        >我的其他付费课程</motion.p>
        
        <motion.p 
          initial={{y: 60, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.2}}
        className="mt-12 text-center leading-8">
          请根据自己的学习意愿和经济能力综合考虑，理性消费。我负责提供过硬的学习质量，确保每一位用户都能学有所得
        </motion.p>
        
        <div
          className='flex mt-12 justify-between flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6'>
          <MiniBlock
            title='私人面试指导'
            desc='前端专家：这波能反杀，为您提供全网最专业的面试辅导，结合个人目标与工作经验，时长 2 ~ 3 小时，一次沟通，解决所有问题'
            href='https://appxw863qeq2150.h5.xiaoeknow.com/v1/goods/goods_detail/course_2YWwycNZDt3u59naEs57g0gGa0H?'
            className='flex-1 border-gray-300 text-gray-700'
            iconName='text-gray-700'
            delay={0.4}
          />
          <MiniBlock
            title='keepCoder'
            desc='资深前端进阶通道，1V1深度沟通辅导，聚焦学习方法，深挖知识体系，深挖应用场景，凝聚核心竞争力'
            href='https://www.yuque.com/coreadvance/ar2my1/apk8cr'
            className='flex-1 border-orange-300 text-orange-700'
            delay={0.5}
          />
          <MiniBlock
            title='keepCharts'
            desc='聚焦技术深度，手写基于 Canvas 的渲染引擎，并在此基础之上实现可视化图表等应用层库，打造自己牢不可破的核心竞争力'
            href='https://www.yuque.com/coreadvance/ar2my1/em5rrk6p1umptsxw'
            className='flex-1 border-green-300 text-green-700'
            icon={Cookie}
            delay={0.6}
          />
        </div>
      </div>
    </main>
  )
}
