import {Sandpack} from '@codesandbox/sandpack-react'

import test from './test.jsx?raw'
import Motion from './test.jsx'

import maincssraw from './main.css?raw'

import User from './use.jsx'
import user_ras from './use.jsx?raw'

function App() {
  return (
    <div>
      <Motion />
      <div className='mt-5'>
        <Sandpack
          template="react"
          options={{
            externalResources: ["https://cdn.tailwindcss.com"]
          }}
          customSetup={{
            dependencies: {
              'framer-motion' : 'latest',
              'autoprefixer': 'latest'
            }
          }}
          files={{
            'App.js': test,
            'main.css': maincssraw
          }}
        />

        <Sandpack
          template="react"
          options={{
            externalResources: ["https://cdn.tailwindcss.com"],
            layout: 'none',
            wrapContent: true,
            editorHeight: 'auto',
            readOnly: true
          }}
          customSetup={{
            dependencies: {
              "react": "19.0.0-rc-915b914b3a-20240515",
              "react-dom": "19.0.0-rc-915b914b3a-20240515",
            }
          }}
          files={{
            'App.js': user_ras
          }}
        />
      </div>
    </div>
  )
}

export default App;
