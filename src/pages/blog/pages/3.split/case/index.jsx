import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {getMessage} from './api'
import List from './List'
import Input from './Input'

export default function Demo01() {
  const [promise, update] = useState(getMessage)

  return (
    <div>
      hello world
    </div>
  )
}
