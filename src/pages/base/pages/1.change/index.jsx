import App from './case/App.jsx?raw'
import api from './case/api.js?raw'
import Message from './case/Message.jsx?raw'
import Skeleton from './case/Skeleton.jsx?raw'
import Button from './case/Button.jsx?raw'

import Article from './article.mdx'

import Playground from "components/Playground/index.jsx";
import MainCase from './case/App.jsx'

const files = {
  'App.js': App,
  'api.js': api,
  'Message.jsx': Message,
  'Skeleton.jsx': Skeleton,
  'Button.jsx': Button
}

function Entry() {
  return (
    <Playground
      files={files}
      renderArticle={(code) => <Article components={{code}} />}
      caseRender={<MainCase />}
    />
  )
}

export default Entry;
