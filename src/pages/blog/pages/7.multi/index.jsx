import AppText from './case/index.jsx?raw'
import apiText from './case/api.js?raw'
import ListText from './case/List.jsx?raw'
import controllerRaw from './case/controller.js?raw'
import serviceRaw from './case/service.js?raw'
import httpRaw from './case/http.js?raw'

import Article from './article.mdx'

import Playground from "components/Playground/index";

const files = {
  'App.js': AppText,
  'controller.js': controllerRaw,
  'service.js': serviceRaw,
  'api.js': apiText,
  'List.jsx': ListText,
  'http.js': httpRaw
}

function App() {
  return (
    <Playground files={files} renderArticle={(code) => <Article components={{code}} />} />
  )
}

export default App;
