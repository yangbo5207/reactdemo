import Entry from './case/index.jsx?raw'

import Article from './article.mdx'
import Playground from "components/Playground/index.jsx";

const files = {
  'App.js': Entry,
}

export default function App() {
  return (
    <Playground files={files} hidePreview renderArticle={(code) => <Article components={{code}} />} />
  )
}
