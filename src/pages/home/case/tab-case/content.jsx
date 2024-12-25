import { AnimatePresence, motion } from 'motion/react'
import {useStore} from './store'
import './index.css'

export default function TabCaseContent() {
  const selectedTab =  useStore(state => state.selectedTab)
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className='icon'
        key={selectedTab ? selectedTab.label : "empty"}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {selectedTab ? selectedTab.icon : "😋"} 
      </motion.div>
    </AnimatePresence>
  )
}

