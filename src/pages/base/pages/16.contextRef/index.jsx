import Entry from './case/index.jsx?raw'
import Post from './case/Post.jsx?raw'
import Input from './case/Input.jsx?raw'
import Button from 'components/Button?raw'
import Article from './article.mdx'

import Playground from "components/Playground/index.jsx";
import MainCase from "./case/index.jsx";

const files = {
  'App.js': Entry,
  'Post.jsx': Post,
  'Button.jsx': Button,
  'Input.jsx': Input,
}

function App() {
  return (
    <Playground files={files} renderArticle={(code) => <Article components={{code}} />} caseRender={<MainCase />} />
  )
}

export default App;
