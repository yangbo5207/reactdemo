import Entry from './case/index.jsx?raw'
import Button from 'components/Button/index.jsx?raw'
import Panel1 from './case/Panel1.jsx?raw'
import Panel2 from './case/Panel2.jsx?raw'
import Panel3 from './case/Panel3.jsx?raw'
import Panel4 from './case/Panel4.jsx?raw'

import Article from './article.mdx'
import Playground from "components/Playground";

const files = {
  'App.js': Entry,
  'Panel1.jsx': Panel1,
  'Panel2.jsx': Panel2,
  'Panel3.jsx': Panel3,
  'Panel4.jsx': Panel4,
  'Button.jsx': {code: Button, hidden: true},
}

export default function App() {
  return (
    <Playground files={files} renderArticle={(code) => <Article components={{code}} />} />
  )
}
