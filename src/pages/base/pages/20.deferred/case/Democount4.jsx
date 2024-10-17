import {useState, useDeferredValue} from 'react'

export default function Index() {
  const [counter, setCounter] = useState(0)
  const deferred = useDeferredValue(counter)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div className='flex justify-between items-center'>
      <div>
        <div>counter: {counter}</div>
        <Expensive counter={deferred} />
      </div>
      <button onClick={__clickHanler}>counter++</button>
    </div>
  )
}

const Expensive = ({counter}) => {
  let items = []
  for (let i = 0; i < 200; i++) {
    items.push(<SlowItem key={i} counter={counter} />);
  }

  return (
    <div className='mt-4 text-green-500'>
      <div>Deferred: {counter}</div>
      <ul className='h-32 hidden'>
        {items}
      </ul>
    </div>
  );
}

function SlowItem({counter}) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li>{counter}</li>
  )
}
