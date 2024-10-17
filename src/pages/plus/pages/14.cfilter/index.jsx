import AppText from './case/index.jsx?raw'
import apiText from './case/api.js?raw'
import ListText from './case/List.jsx?raw'
import controllerRaw from './case/controller.js?raw'
import serviceRaw from './case/service.js?raw'
import httpRaw from './case/http.js?raw'
import FilterRaw from './case/Filter/index.jsx?raw'

import Article from './article.mdx'

import Playground from "components/Playground/index";

const files = {
  'App.js': AppText,
  'controller': controllerRaw,
  'service': serviceRaw,
  'api': apiText,
  'List': ListText,
  'http': httpRaw,
  'Filter': FilterRaw
}

function App() {
  return (
    <Playground files={files} renderArticle={(code) => <Article components={{code}} />} advance />
  )
}

export default App;
