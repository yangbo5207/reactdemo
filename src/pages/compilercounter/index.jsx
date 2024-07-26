import Entry from './case/index.jsx?raw'
import Source from './case/Demo01.jsx?raw'
import useCache from './case/useCache.js?raw'
import Button from 'components/Button/index.jsx?raw'

import Article from './article.mdx'
import Playground from "components/Playground";

const files = {
  'App.js': Entry,
  '原代码': Source,
}

export default function App() {
  return (
    <Playground files={files} renderArticle={(code) => <Article components={{code}} />} />
  )
}
