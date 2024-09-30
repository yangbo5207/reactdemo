import AppText from './case/index.jsx?raw'
import apiText from './case/api.js?raw'
import ListText from './case/List/index.jsx?raw'
import ListServiceRaw from './case/List/service.js?raw'

import Article from './article.mdx'

import Playground from "components/Playground/index";

const files = {
  'App.js': AppText,
  'api.js': apiText,
  'List/index.jsx': ListText,
  'List/service.js': ListServiceRaw
}

function App() {
  return (
    <Playground files={files} renderArticle={(code) => <Article components={{code}} />} />
  )
}

export default App;
