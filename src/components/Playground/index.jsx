import Gisucs from '@giscus/react'
import EnterCode from './code'

import {Light as SyntaxHighlighter} from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import atomOneLight from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light'

import {democode} from "components/Playground/activecode.js";
import Codepack from "components/Codepack/index.jsx";
import Cardruntime from "components/Cardruntime.jsx";

SyntaxHighlighter.registerLanguage('javascript', js)

function code({className, ...properties}) {
  const match = /language-(\w+)/.exec(className || '')
  return match
    ? <SyntaxHighlighter language={match[1]} PreTag="div" {...properties} style={atomOneLight} />
    : <code className={className} {...properties} />
}

function App(props) {
  const {renderArticle, files, caseRender, isAuth = true} = props

  const z = localStorage.getItem('active_code')
  const auth = isAuth ? z === democode : true

  let content = <EnterCode/>

  if (auth) {
    content = (
      <>
        {caseRender ? <Cardruntime reload className='mt-0'>{caseRender}</Cardruntime> : null}
        <div className='md:hidden'>
          <Codepack files={files} className='h-full rounded-md border-gray-200'/>
        </div>
        {renderArticle(code)}
      </>
    )
  }

  return (
    <div className='md:flex h-[calc(100vh_-_8rem)] overflow-hidden mx-auto w-full max-w-[1244px]'>
      <div className='md:flex-1 h-full overflow-scroll md:pr-4 keep w-full max-w-[768px]'>

        {content}

        <div className='border-b mt-20 mb-8 text-lg font-bold pb-3 border-dashed'></div>

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
      </div>
      <div className='hidden md:block md:flex-1 top-[8rem] h-full overflow-y-auto max-w-[768px]'>
        <Codepack files={files} className='h-full rounded-md border-gray-200'/>
      </div>
    </div>
  )
}

export default App;
