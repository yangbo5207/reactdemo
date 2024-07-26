import Giscus from '@giscus/react'
import EnterCode from './code'

import {Light as SyntaxHighlighter} from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import atomOneLight from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light'

import {democode} from "components/Playground/activecode.js";

SyntaxHighlighter.registerLanguage('javascript', js)

function code({className, ...properties}) {
  const match = /language-(\w+)/.exec(className || '')
  return match
    ? <SyntaxHighlighter language={match[1]} PreTag="div" {...properties} style={atomOneLight} />
    : <code className={className} {...properties} />
}

function App(props) {
  const {renderArticle, isAuth, isGiscus = true} = props

  const z = localStorage.getItem('active_code')
  const auth = isAuth ? z === democode : true

  return (
    <div className='keep max-w-[700px] mx-auto'>
      {auth ? renderArticle(code) : <EnterCode />}

      {isGiscus && (
        <>
          <div className='border-b mt-20 mb-8 text-lg font-bold pb-3'></div>
          <Giscus
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
      )}
    </div>
  )
}

export default App;
