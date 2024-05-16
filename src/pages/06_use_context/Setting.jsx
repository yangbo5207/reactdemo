import {use} from 'react'
import {Context} from './context'

document.documentElement.setAttribute('data-theme', 'light')

export default function Card() {
  const {theme, counter, setTheme, setCounter} = use(Context)

  const __switch = () => {
    let _theme = theme == 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', _theme)
    setTheme(_theme)
    setCounter(counter + 1)
  }
  return (
    <div className='_06_setting'>
      <button onClick={__switch}>点击切换到{theme === 'light' ? '暗黑' : '明亮'}主题</button>
      <div id='tips'>已切换：{counter || 0} 次</div>
    </div>
  )
}