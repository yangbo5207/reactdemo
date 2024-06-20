import {Sandpack} from '@codesandbox/sandpack-react'

import code from './case.jsx?raw'
import btncode from './Button.jsx?raw'
import Case from './case.jsx'
import html from './index.html?raw'

function App() {
  return (
    <Sandpack
      template="react"
      options={{
        externalResources: ["https://cdn.tailwindcss.com"],
        // wrapContent: false,
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
        'Button.jsx': btncode,
        '/public/index.html': {code: html, hidden: true}
      }}
    />
  )
}

export default App;
