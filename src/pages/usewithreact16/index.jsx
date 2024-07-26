import Playground from "components/Playground";
import Gisucs from '@giscus/react'
import githubLight from 'utils/githubLight'
import Preview from "components/Preview.jsx";

import AppText from './case/index.jsx?raw'
import ButtonText from './case/Button.jsx?raw'
import apiText from './case/api.js?raw'
import SkeletonText from './case/Skeleton.jsx?raw'
import htmlText from './case/index.html?raw'
import UserinfoText from './case/Userinfo.jsx?raw'
import IndexText from './case/main.jsx?raw'
import UseText from './case/use.js?raw'

import Article from './article.mdx'

import './sandpack.css'

const files = {
  'App.js': AppText,
  'index.js': IndexText,
  'api.js': apiText,
  'use.js': UseText,
  'Userinfo.jsx': UserinfoText,
  'Button.jsx': ButtonText,
  'Skeleton.jsx': SkeletonText,
}

// 需要展示
import Case from './case'

function App() {
  return (
    <Playground files={files} renderArticle={(code) => <Article components={{code}} />} />
  )
}

export default App;
