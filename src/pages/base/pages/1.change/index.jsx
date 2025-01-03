import Article from './article.mdx'
import Playground from 'components/Playground'

function Entry() {
  return (
    <Playground renderArticle={(code) => <Article components={{code}} />} />
  )
}

export default Entry;
