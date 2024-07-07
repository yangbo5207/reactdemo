import Gisucs from '@giscus/react'
import EnterCode from './code'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {democode} from "components/Playground/activecode.js";

function code({className, ...properties}) {
  const match = /language-(\w+)/.exec(className || '')
  return match
    ? <SyntaxHighlighter language={match[1]} PreTag="div" {...properties} style={atomOneLight} />
    : <code className={className} {...properties} />
}

function App(props) {
  const {renderArticle} = props

  const z = localStorage.getItem('active_code')
  const auth = z === democode

  return (
    <div className='pr-4 keep max-w-[700px] mx-auto'>
      {z ? renderArticle(code) : <EnterCode />}

      <div className='border-b mt-20 mb-8 text-lg font-bold pb-3'></div>

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
  )
}

export default App;
