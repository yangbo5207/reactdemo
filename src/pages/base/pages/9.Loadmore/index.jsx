import AppText from './case/index.jsx?raw'
import ButtonText from './case/Button.jsx?raw'
import apiText from './case/api.js?raw'
import SkeletonText from './case/Skeleton.jsx?raw'
import htmlText from './case/index.html?raw'
import ListText from './case/List.jsx?raw'

import Article from './article.mdx'

import Playground from "components/Playground/index.jsx";
import MainCase from "./case/index.jsx";

const files = {
  'App.js': AppText,
  'api.js': apiText,
  'List.jsx': ListText,
  'Button.jsx': ButtonText,
  'Skeleton.jsx': SkeletonText
}

function App() {
  return (
    <Playground files={files} renderArticle={(code) => <Article components={{code}} />} caseRender={<MainCase />} />
  )
}

export default App;
