import Entry from './case/index.jsx?raw'
import Dialog from 'components/Dialog?raw'
import Modal from 'components/Modal?raw'

import Article from './article.mdx'

import Playground from "components/Playground/index";

const files = {
  'App.js': Entry,
  'Dialog.jsx': Dialog,
  'Modal.jsx': Modal
}

function App() {
  return (
    <Playground files={files} hidePreview renderArticle={(code) => <Article components={{code}} />} />
  )
}

export default App;
