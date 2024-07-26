import Playground from "components/Playground";

import AppText from './case/index.jsx?raw'
import ButtonText from './case/Button.jsx?raw'
import apiText from './case/api.js?raw'
import SkeletonText from './case/Skeleton.jsx?raw'
import htmlText from './case/index.html?raw'

import Article from './article.mdx'

import './sandpack.css'

const files = {
  'App.js': AppText,
  'api.js': apiText,
  'Button.jsx': ButtonText,
  'Skeleton.jsx': SkeletonText,
  '/public/index.html': htmlText
}

export default function App() {
  return (
    <Playground files={files} renderArticle={(code) => <Article components={{code}} />} />
  )
}
