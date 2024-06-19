import {Sandpack} from '@codesandbox/sandpack-react'

import code from './case.jsx?raw'
import btncode from './Button.jsx?raw'
import Case from './case.jsx'

function App() {

  return (
    <div>
      <div className='mt-5'>
        <Sandpack
          template="react"
          options={{
            externalResources: ["https://cdn.tailwindcss.com", "https://rsms.me/inter/inter.css"],
            // layout: 'none',
            wrapContent: false,
            editorHeight: 'auto',
          }}
          customSetup={{
            dependencies: {
              "react": "19.0.0-rc-915b914b3a-20240515",
              "react-dom": "19.0.0-rc-915b914b3a-20240515",
              'tailwind-merge': 'latest',
              'clsx': 'latest'
            }
          }}
          files={{
            'App.js': code,
            'Button.jsx': btncode
          }}
        />
      </div>
    </div>
  )
}

export default App;
