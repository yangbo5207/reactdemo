
import {useState} from 'react'
import {motion} from 'framer-motion'
import s from './index.module.css'

function Motion() {
  const [x, setX] = useState(0)
  function __handler() {
    setX(x === 100 ? 0 : 100)
  }
  return (
    <div>
      <motion.div id={s.box1} animate={{x: x}} />
      <button onClick={__handler}>点击动画</button>
    </div>
  )
}

export default Motion;
