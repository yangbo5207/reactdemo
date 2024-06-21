import { useRef } from 'react'
import Provider from './context'
import Task from './task'

export default function App() {
  return (
    <Provider>
      <div>任务</div>
      <Task />
    </Provider>
  )
}
