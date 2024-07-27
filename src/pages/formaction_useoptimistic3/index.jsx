import AppText from './case/index.jsx?raw'
import apiRaw from './case/api.js?raw'

import Article from './article.mdx'

import Playground from "components/Playground/index";
import MainCase from './case'

const files = {
  'App.js': AppText,
  'api.js': apiRaw
}

function App() {
  return (
    <Playground
      files={files}
      renderArticle={(code) => <Article components={{code}} />}
      caseRender={<MainCase />}
    />
  )
}

export default App;