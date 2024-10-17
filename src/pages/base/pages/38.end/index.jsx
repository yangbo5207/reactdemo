import Article from './article.mdx'
import Playground from "components/Playground2/index.jsx";

export default function App() {
  return (
    <Playground isAuth={false} renderArticle={(code) => <Article components={{code}} />} />
  )
}
