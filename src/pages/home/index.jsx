import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import Button from 'components/Button'
import './App.css'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Card className='w-[420px] mx-auto'>
        <CardHeader>
          <CardTitle>按钮类型</CardTitle>
        </CardHeader>
        <CardContent className='flex items-center justify-around'>
          <div>
            <Button>Normal</Button>
          </div>
          <div className='my-4'>
            <Button danger>Danger</Button>
          </div>
          <div className='my-4'>
            <Button primary>Primary</Button>
          </div>
          <div className='my-4'>
            <Button success>Success</Button>
          </div>
        </CardContent>
      </Card>

      <Card className='w-[420px] my-10 mx-auto'>
        <CardHeader>
          <CardTitle>按钮大小</CardTitle>
        </CardHeader>
        <CardContent className='flex items-center justify-around'>
          <div className='my-4'>
            <Button primary sm>Primary SM</Button>
          </div>

          <div className='my-4'>
            <Button success>Success MD</Button>
          </div>
          <div className='my-4'>
            <Button danger lg>danger LG</Button>
          </div>
        </CardContent>
      </Card>


      <div>
        <div className='w-80 h-32 red orange mx-auto my-4 bg'></div>
        <div className='w-80 h-32 orange red mx-auto my-4'></div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


const Fiber = (() => {
  let count = undefined

})()
