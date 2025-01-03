import {useRef} from 'react'
import Gisucs from '@giscus/react'
import Button from 'components/Button'
import Code from 'components/Codepack/code'

export default function Playground(props) {
  const {renderArticle} = props
  const diverRef = useRef(null)

  function __scrollToAnchor() {
    if (diverRef.current) {
      diverRef.current.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <div id='tooltip' className='flex items-center justify-end mb-4'>
        <Button signal onClick={__scrollToAnchor}>滚动到评论</Button>
      </div>

      {renderArticle(Code)}

      <div ref={diverRef} className='border-b mt-20 mb-8 text-lg font-bold pb-3 border-dashed scroll-mt-24'></div>

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
        crossorigin="anonymous"
        async
      />
    </>
  )
}
