import {use, Suspense} from 'react'

const api = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}

export default function Index() {
  const __api = api()
  return (
    <div>
      <div id='tips'>初始化时，自动获取一条数据内容</div>
      <Suspense fallback={<div>loading...</div>}>
        <Content api={__api} />
      </Suspense>
    </div>
  )
}

const Content = (props) => {
  const content = use(props.api)
  return (
    <div>
      <div>{content.value}</div>
    </div>
  )
}
