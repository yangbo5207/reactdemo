import {use} from 'react'
import {Context} from './context'

export default function Card() {
  const {theme, counter, setTheme, setCounter} = use(Context)

  const __switch = () => {
    setTheme(theme == 'light' ? 'dark' : 'light')
    setCounter(counter + 1)
  }
  return (
    <div className='_06_setting'>
      <button onClick={__switch}>点击切换到{theme === 'light' ? '暗黑' : '明亮'}主题</button>
      <div id='tips'>已切换：{counter || 0} 次</div>
    </div>
  )
}