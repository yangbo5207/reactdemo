import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import ButtonCaseRaw from './ButtonCase?raw';
import Button from 'components/Button'
import ButtonRaw from 'components/Button/index.jsx?raw'
import { useState } from 'react';

const defiles = {
  'ButtonCase': ButtonCaseRaw,
  'Button': ButtonRaw,
}

export default function Playground3(props) {
  const {files = defiles, caseRender} = props
  const titles = Object.keys(files)

  const [currentCode, updateCurrentCode] = useState(titles[0])

  function __switch(i) {
    updateCurrentCode(titles[i])
  }

  return (
    <div className='border border-gray-100 flex bg-white keepx flex-col-reverse sm:flex-row'>
      <div className='overflow-hidden flex-1'>
        <div className='flex border-b border-gray-100'>
          {titles.map((title, i) => (
            <Button key={title} ghost onClick={() => __switch(i)} className={currentCode === title ? 'text-green-500' : ''}>
              {title}
            </Button>
          ))}
        </div>
        <pre className='text-sm leading-6'>
          <SyntaxHighlighter language='javascript' PreTag="div" style={atomOneLight}>
            {files[currentCode]}
          </SyntaxHighlighter>
        </pre>
      </div>
      <div className='sm:w-[1px] h-[1px] sm:h-auto bg-gray-100'></div>
      <div className='flex-1 overflow-hidden'>
        <div className='flex border-b border-gray-100 items-center pl-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
          <Button ghost className='px-2'>预览</Button>
        </div>
        {caseRender}
      </div>
    </div>
  )
}