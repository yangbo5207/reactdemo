import AppText from './case/index.jsx?raw'
import apiText from './case/api.js?raw'
import SkeletonText from './case/Skeleton.jsx?raw'
import ListText from './case/List.jsx?raw'
import InputText from './case/Input.jsx?raw'

import Article from './article.mdx'

import Playground from "components/Playground/index.jsx";

const files = {
  'App.js': AppText,
  'api.js': apiText,
  'List.jsx': ListText,
  'Input.jsx': InputText,
  'Skeleton.jsx': SkeletonText,
}

function App() {
  return (
    <Playground files={files} renderArticle={(code) => <Article components={{code}} />} />
  )
}

export default App;
