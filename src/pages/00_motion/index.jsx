import {Sandpack} from '@codesandbox/sandpack-react'
import Gisucs from '@giscus/react'

import AppText from './case/App.jsx?raw'
import ButtonText from './case/Button.jsx?raw'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Article from './article.mdx'

import './sandpack.css'

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

          <div className='border-b mt-20 mb-8 text-lg font-bold pb-3'>评论区</div>

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
            options={{
              externalResources: ["https://cdn.tailwindcss.com", "https://rsms.me/inter/inter.css"],
              editorHeight: 'auto',
              // layout: 'none',
              // wrapContent: true,
              // readOnly: true,
              classes: {
                'sp-layout': 'custom-layout',
                'sp-resize-handler': 'custom-resize-handler'
              }
            }}
            customSetup={{
              dependencies: {
                'framer-motion' : 'latest',
                'autoprefixer': 'latest',
                "react": "19.0.0-rc-915b914b3a-20240515",
                "react-dom": "19.0.0-rc-915b914b3a-20240515",
                'tailwind-merge': 'latest',
                'clsx': 'latest'
              }
            }}
            files={{
              'App.js': AppText,
              'Button.jsx': ButtonText
            }}
          />
        </div>

      </div>
    </div>
  )
}

export default App;
