import AppText from './case/index.jsx?raw'
import apiRaw from './case/api.js?raw'
import reducerRaw from './case/reducer.js?raw'

import Article from './article.mdx'

import Playground from "components/Playground/index.jsx";
import MainCase from './case/index.jsx'

const files = {
  'App.js': AppText,
  'api.js': apiRaw,
  'reducer.js': reducerRaw
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
