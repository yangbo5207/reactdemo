import {use} from 'react'
import {Context} from './context'

export default function Card() {
  const {theme} = use(Context)

  const __cls = `_06_card ${theme}`
  return (
    <>
      <div className={__cls}>
        <div className="title">Canary</div>
        <p>The use API is currently only available in React’s Canary and experimental channels. Learn more about React’s release channels here.</p>
      </div>
    </>
  )
}