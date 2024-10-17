import Entry from './case/index.jsx?raw'
import context from './case/context.jsx?raw'
import Total from './case/Total.jsx?raw'
import Card from './case/Card.jsx?raw'
import skin from './case/skin.css?raw'

import Article from './article.mdx'

import Playground from "components/Playground/index.jsx";

const files = {
  'App.js': Entry,
  'context.jsx': context,
  'Total.jsx': Total,
  'Card.jsx': Card,
  'skin.css': skin
}

function App() {
  return (
    <Playground files={files} hidePreview renderArticle={(code) => <Article components={{code}} />} />
  )
}

export default App;
