import {use, Suspense} from 'react'
import Message from './Message.jsx'

const _api3 = () => {
  return new Promise(resolve => {
    resolve({ value: 'React does not preserve any state for renders that got suspended before they were able to mount for the first time. When the component has loaded, React will retry rendering the suspended tree from scratch.' })
  })
}

export default function Demo01() {
  const promise = _api3()
  return (
    <Suspense fallback=''>
      <Content promise={promise} />
    </Suspense>
  )
}

function Content(props) {
  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
