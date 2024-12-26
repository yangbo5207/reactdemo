import {motion} from 'motion/react'
import MiniBlock from './MiniBlock'
import {Cookie, ChevronRight} from 'lucide-react'
import Gisucs from '@giscus/react'

export default function SectionCourse() {  
  return (
    <main className='backdrop-blur-sm my-14 md:py-28 bg-white bg-opacity-70 px-6 md:px-8'>
      <div className="mx-auto max-w-[1080px]">
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
      </div>
    </main>
  )
}
