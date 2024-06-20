import {SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview} from '@codesandbox/sandpack-react'
import Gisucs from '@giscus/react'
import { githubLight } from "@codesandbox/sandpack-themes";
import Preview from "components/Preview.jsx";

import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import html from './index.html?raw'

import './index.css'

function code({className, ...properties}) {
  const match = /language-(\w+)/.exec(className || '')
  return match
    ? <SyntaxHighlighter language={match[1]} PreTag="div" {...properties} style={atomOneLight} />
    : <code className={className} {...properties} />
}

function App(props) {
  const {renderArticle, files} = props
  return (
    <div>
      <div className='mt-5 md:flex'>
        <div className='md:w-[40%] pr-4 keep'>
          {renderArticle(code)}

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
          <SandpackProvider
            template="react"
            theme={githubLight}
            options={{
              externalResources: [
                "https://cdn.tailwindcss.com"
              ],
              editorHeight: 'auto'
            }}
            customSetup={{
              dependencies: {
                "react": "19.0.0-rc-dfd30974ab-20240613",
                "react-dom": "19.0.0-rc-dfd30974ab-20240613",
                'tailwind-merge': 'latest',
                'clsx': 'latest',
              },
            }}
            files={{
              ...files,
              '/public/index.html': {code: html, hidden: true},
            }}
          >
            <SandpackLayout>
              <SandpackCodeEditor/>
              <Preview>
                <SandpackPreview/>
              </Preview>
            </SandpackLayout>
          </SandpackProvider>
        </div>

      </div>
    </div>
  )
}

export default App;
