import AppText from './case/index.jsx?raw'
import apiText from './case/api.js?raw'
import SkeletonText from './case/Skeleton.jsx?raw'
import ListText from './case/List.jsx?raw'
import TabsText from './case/Tabs.jsx?raw'

import Article from './article.mdx'

import Playground from "components/Playground/index.jsx";
import MainCase from "./case/index.jsx";

const files = {
  'App.js': AppText,
  'api.js': apiText,
  'List.jsx': ListText,
  'Tabs.jsx': TabsText,
  'Skeleton.jsx': SkeletonText,
}

function App() {
  return (
    <Playground files={files} renderArticle={(code) => <Article components={{code}} />} caseRender={<MainCase />} />
  )
}

export default App;
