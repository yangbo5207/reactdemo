import { useState } from 'react'

function Index() {
  const [counter, setCounter] = useState(0)

  function __clickHanler() {
    console.log(counter)
    setCounter(counter + 1)
  }

  return (
    <div>
      <div id='tips'>map 中使用 hook</div>
      {[1, 2, 3, 4, 5].map((counter) => {
        const [number, setNumber] = useState(0)
        return (
          <div key={`hello${counter}`} onClick={() => setNumber(number + 1)}>
            number: {number}
          </div>
        )
      })}
      <button onClick={__clickHanler}>counter++</button>
      <div className="counter">counter: {counter}</div>
    </div>
  )
}

export default Index
