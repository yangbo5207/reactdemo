import {useState} from 'react'
import {motion} from 'framer-motion'
import './main.css'

function Motion() {
  const [x, setX] = useState(0)
  function __handler() {
    setX(x === 100 ? 0 : 100)
  }

  return (
    <div>
      <motion.div animate={{x: x}} className='w-[100px] h-[100px] rounded-full bg-gray-200 mb-5' />
      <button onClick={__handler}>点击动画</button>
    </div>
  )
}

export default Motion;
