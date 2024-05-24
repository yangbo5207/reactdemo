import Card from './Card'
import Setting from './Setting'
import Provider from './context.jsx'
import './index.css'

function Index() {
  return (
    <Provider>
      <div id='tips'>切换主题，并记录切换次数</div>
      <Card />
      <Card />
      <Setting />
    </Provider>
  )
}

export default Index
