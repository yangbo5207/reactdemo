import {useRef} from 'react'
import Gisucs from '@giscus/react'
import Button from 'components/Button'
import Modal from 'components/Modal'
import {Light as SyntaxHighlighter} from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import atomOneLight from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light'

import Codepack from "components/Codepack/index.jsx";
import Cardruntime from "components/Cardruntime.jsx";
import NavSider from '../../pages/base/nav-sider'

SyntaxHighlighter.registerLanguage('javascript', js)

function code({className, ...properties}) {
  const match = /language-(\w+)/.exec(className || '')
  return match
    ? <SyntaxHighlighter language={match[1]} PreTag="div" {...properties} style={atomOneLight} />
    : <code className={className} {...properties} />
}

function App(props) {
  const {renderArticle, files, caseRender} = props
  const diverRef = useRef(null)
  const modal = useRef(null)

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
      <div className='flex items-center justify-between mb-4'>
        
        <Button className='md:hidden' signal onClick={() => modal.current.show()}>目录</Button>
        
        <Modal ref={modal} onClose={() => modal.current.close()}>
          <nav className='bg-white h-full py-4 overflow-scroll'>
            <NavSider />
          </nav>
        </Modal>
        <Button signal onClick={__scrollToAnchor}>滚动到评论</Button>  
        
      </div>
      {caseRender ? <Cardruntime reload className='mt-0'>{caseRender}</Cardruntime> : null}
      <div className='md:hidden'>
        <Codepack files={files} className='h-full rounded-md border-gray-200' auth />
      </div>
      {renderArticle(code)}

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

export default App;
