// import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'
// import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
// import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'

import {Light as SyntaxHighlighter} from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import light from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light'
// import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark'

SyntaxHighlighter.registerLanguage('js', js)

// className='language-jsx' {children}
export default function Code({className, ...properties}) {
  const match = /language-(\w+)/.exec(className || '')

  if (match) {
    return <SyntaxHighlighter language={match[1]} PreTag="div" {...properties} style={light} />
  }
  return <code className={className} {...properties} />
}