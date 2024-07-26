import Playground from 'components/Playground'
import Article from './article.mdx'

import AppText from './case/index.jsx?raw'
import AppcssText from './case/App.css?raw'
import IndexcssText from './case/index.css?raw'
import viteText from './case/vite.svg?raw'
import reactText from './case/react.svg?raw'

const files = {
  'App.js': AppText,
  'App.css': AppcssText,
  'index.css': IndexcssText,
  'vite.svg': viteText,
  'react.svg': reactText,
}

export default function App() {
  return (
    <Playground files={files} renderArticle={(code) => <Article components={{code}} />} />
  )
}
