import Entry from './case/index.jsx?raw'
import api from './case/api.js?raw'
import Skeleton from './case/Skeleton.jsx?raw'
import List from './case/List.jsx?raw'
import Input from './case/Input.jsx?raw'
import Spin from 'components/Spin?raw'
import SpinCss from 'components/Spin/index.css?raw'

import Article from './article.mdx'

import Playground from "components/Playground/index";

const files = {
  'App.js': Entry,
  'api.js': api,
  'List.jsx': List,
  'Input.jsx': Input,
  'Skeleton.jsx': Skeleton,
  'Spin.jsx': Spin,
  'index.css': SpinCss,
}

function App() {
  return (
    <Playground files={files} renderArticle={(code) => <Article components={{code}} />} />
  )
}

export default App;
