// 主题地址： https://draculatheme.com/highlightjs
// 主题地址： https://highlightjs.tiddlyhost.com/

import './dracula.css'
// import './onelight.css'

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

import code from './code.md?raw'

const input = '# This is a header\n\nAnd this is a paragraph'
const text2 = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`

var md = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`

function App() {
  return (
    <div>
      <Markdown>{input}</Markdown>
      <Markdown remarkPlugins={[remarkGfm]}>{text2}</Markdown>
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>{code}</Markdown>
    </div>
  )
}

export default App;
