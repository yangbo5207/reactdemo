import {useState} from 'react'
import {motion} from 'framer-motion'
import s from './index.module.css'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

function Motion() {
  const [x, setX] = useState(0)
  function __handler() {
    setX(x === 100 ? 0 : 100)
  }
  return (
    <div>
      <motion.div id={s.box1} animate={{x: x}} />
      <button onClick={__handler}>点击动画</button>

      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
    </div>
  )
}

export default Motion;
