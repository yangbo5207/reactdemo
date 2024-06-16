import {useState} from 'react'
import {motion} from 'framer-motion'
import Button from './Button.jsx'

function Motion() {
  const [x, setX] = useState(0)
  function __handler() {
    setX(x === 100 ? 0 : 100)
  }

  return (
    <div className='w-40 m-auto'>
      <Button onClick={__handler}>点击执行动画</Button>
      <motion.div animate={{x: x}} className='w-[100px] h-[100px] rounded-full bg-gray-200 mt-5 ' />
    </div>
  )
}

export default Motion;
