import {Sandpack} from '@codesandbox/sandpack-react'
import Gisucs from '@giscus/react'
import { githubLight } from "@codesandbox/sandpack-themes";

import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Article from './article.mdx'

import AppText from './case/index.jsx?raw'
import AppcssText from './case/App.css?raw'
import IndexcssText from './case/index.css?raw'
import viteText from './case/vite.svg?raw'
import reactText from './case/react.svg?raw'


import './sandpack.css'

const files = {
  'App.js': AppText,
  'App.css': AppcssText,
  'index.css': IndexcssText,
  'vite.svg': viteText,
  'react.svg': reactText,
}

function code({className, ...properties}) {
  const match = /language-(\w+)/.exec(className || '')
  return match
    ? <SyntaxHighlighter language={match[1]} PreTag="div" {...properties} style={atomOneLight} />
    : <code className={className} {...properties} />
}

function App() {
  return (
    <div>
      <div className='mt-5 md:flex'>
        <div className='md:w-[40%] pr-4 keep'>
          <Article components={{code}} />

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
        <div className='md:w-[60%] sticky top-[8rem] h-[calc(100vh_-_8rem-35px)] overflow-y-auto'>
          <Sandpack
            template="react"
            theme={githubLight}
            options={{
              editorHeight: 'auto',readOnly: true
            }}
            files={files}
          />
        </div>

      </div>
    </div>
  )
}

export default App;
