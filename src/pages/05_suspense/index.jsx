import {use, Suspense, useState} from 'react'

function useRef(value) {
  return useState({value})[0]
}

function App() {
  const c = useRef(0)
  const [counter, setCounter] = useState(c.value)

  function clickHandler() {
    c.value = counter
    setCounter(c.value + 1)
  }

  return (
    <div>
      <div>counter increment with c.value: {counter}</div>
      <button onClick={clickHandler} className='mt-4'>counter++</button>
    </div>
  )
}

export default App;
