import {useState} from 'react'
import {motion} from 'framer-motion'
import s from './index.module.css'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import {useNavigate} from 'react-router-dom'

function Motion() {
  const [x, setX] = useState(0)
  function __handler() {
    setX(x === 100 ? 0 : 100)
  }

  function onInput() {
    console.log('____')
  }

  function onChange() {
    console.log('xxx')
  }

  return (
    <div>
      <motion.div id={s.box1} animate={{x: x}} />
      <button onClick={__handler}>点击动画</button>
      <input type="text" onInput={onInput} onChange={onChange} />
      <Editor height="300px" width="300px" defaultLanguage="markdown" placeholder="xxhelx" />
    </div>
  )
}

export default Motion;

