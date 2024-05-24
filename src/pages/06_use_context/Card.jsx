import {use} from 'react'
import {Context} from './context.jsx'

export default function Card() {
  const value = use(Context)
  console.log('xxxxx context')
  return (
    <>
      <div className='_06_card'>
        <div className="title">Canary</div>
        <p>The test page</p>
      </div>
    </>
  )
}
