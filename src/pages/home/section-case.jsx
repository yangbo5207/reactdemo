import TabCase from './case/tab-case';
import TabCaseIndexRaw from './case/tab-case/index.jsx?raw'
import TabCaseHeaderRaw from './case/tab-case/header.jsx?raw'
import TabCaseContentRaw from './case/tab-case/content.jsx?raw'
import storeRaw from './case/tab-case/store.js?raw'
import Codepack from 'components/Codepack'
import {motion} from 'motion/react'

const files = {
  'index': TabCaseIndexRaw,
  'header': TabCaseHeaderRaw,
  'content': TabCaseContentRaw,
  'store': storeRaw
}

function App() {
  return (
    <div className='backdrop-blur-sm py-14 md:py-28 bg-gray-50 bg-opacity-70 overflow-hidden px-6 md:px-8'>
      <div className='max-w-[1080px] mx-auto overflow-hidden'>
        <motion.h2 
          className='text-2xl md:text-4xl text-center font-bold'
          initial={{y: 60, opacity: 0}} 
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5}}
        >Immersive</motion.h2>
        <motion.p 
          className='py-8 md:py-12 text-center px-10'
          initial={{y: 60, opacity: 0}} 
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.2}}
        >沉浸式学习体验。通过在线可演示的案例，你能获得更极致的学习收益</motion.p>
        <motion.div
          initial={{y: 60, opacity: 0}} 
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.4}}
        >
          <Codepack files={files} caseRender={<TabCase />} auth />
        </motion.div>
        
      </div>
    </div>
  )
}

export default App;
