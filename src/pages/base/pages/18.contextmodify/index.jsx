import Entry from './case/index.jsx?raw'
import context from './case/context.jsx?raw'
import task from './case/task.jsx?raw'
import editor from './case/editor.jsx?raw'

import Article from './article.mdx'

import Playground from "components/Playground/index.jsx";

const files = {
  'App.js': Entry,
  'context.jsx': context,
  'task.jsx': task,
  'editor.jsx': editor,
}

function App() {
  return (
    <Playground files={files} hidePreview renderArticle={(code) => <Article components={{code}} />} />
  )
}

export default App;
